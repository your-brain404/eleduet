<template>
  <v-card flat>
    <v-card-text>
      <v-row class="d-flex justify-content-center">
        <v-col lg="4" sm="12" md="4">
          <v-form ref="form" v-model="valid" lazy-validation>
            <text-field
              id="file"
              v-model="file"
              multiple
              show-size
              counter
              label="Zdjęcie"
              :accept="photoTypes"
              icon="camera"
              type="file"
              :rules="rules"
            ></text-field>
            <v-btn
              :disabled="loading || !valid || file.length === 0"
              :loading="loading"
              @click="submit"
              color="success"
            >
              <template #icon>
                <svg-vue icon="check" />
              </template>
              <span>Wyślij</span>
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "@/plugins/axios/axios.js";
import isPhoto from "@/helpers/files/is-photo.js";
import photoTypes from "@/helpers/files/photo-types.js";
import VRow from "@/components/grid/VRow.vue";
import VCol from "@/components/grid/VCol.vue";
import VCardText from "@/components/elements/VCardText.js";
import VCard from "@/components/elements/VCard.js";
import VForm from "@/components/elements/VForm.js";
import TextField from "@/components/elements/TextField.vue";
import VBtn from "@/components/elements/VBtn.vue";
import SvgVue from "svg-vue";
export default {
  components: {
    VRow,
    TextField,
    VCard,
    VCardText,
    VCol,
    VBtn,
    SvgVue,
    VForm,
  },
  data() {
    return {
      file: [],
      loading: false,
      valid: true,

      rules: [
        (value) => {
          const MAX_SIZE = 25 * 1000000;
          let invalidSizeFileNames = [];
          for (let file of value) {
            if (file.size > MAX_SIZE) invalidSizeFileNames.push(file.name);
          }
          return (
            invalidSizeFileNames.length === 0 ||
            `Pliki [${invalidSizeFileNames.join(
              ", "
            )}] nie powinny być większe niż 25 MB!`
          );
        },
        (value) => {
          let invalidSizeFileTypes = [];
          for (let file of value) {
            if (!isPhoto(file.type)) invalidSizeFileTypes.push(file.name);
          }
          return (
            invalidSizeFileTypes.length === 0 ||
            `Pliki [${invalidSizeFileTypes.join(", ")}] powinny być zdjęciami!`
          );
        },
      ],
    };
  },
  computed: {
    photoTypes() {
      return photoTypes.join(", ");
    },
    img() {
      return this.file.length == 0
        ? "https://via.placeholder.com/250"
        : URL.createObjectURL(this.file[0]);
    },
  },
  methods: {
    submit() {
      if (this.file.length == 0 || !this.valid) return;
      this.loading = true;
      for (let i = 0; i < this.file.length; i++) {
        let formData = new FormData();
        formData.append("file", this.file[i]);
        axios
          .post("/api/media/add", formData)
          .then(() => {
            this.loading = false;
            this.$emit("loadPhotos");
            this.file = [];
            this.$store.commit("toast", "Pomyślnie dodano!");
          })
          .catch((err) => {
            this.loading = false;
            console.error(err);
            this.$store.commit("toast", "Coś poszło nie tak...");
          });
      }
    },
  },
};
</script>
