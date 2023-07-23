<template>
  <v-card flat>
    <v-card-text>
      <v-row class="d-flex justify-content-center add-files-row">
        <v-col lg="4" sm="12" md="6">
          <v-form ref="form" v-model="valid" lazy-validation>
            <text-field
              v-model="file"
              multiple
              show-size
              counter
              label="Pliki"
              icon="paperclip"
              :rules="rules"
              type="file"
              :accept="imagesOnly ? photoTypes : ''"
            ></text-field>
            <v-btn
              :disabled="loading || !valid || file.length === 0"
              :loading="loading"
              @click="submit"
              class="mt-3"
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
import VCardText from "@/components/elements/VCardText.vue";
import VCard from "@/components/elements/VCard.vue";
import VBtn from "@/components/elements/VBtn.vue";
import SvgVue from "@/components/elements/SvgVue.vue";
import VForm from "@/components/elements/VForm.vue";
import TextField from "@/components/elements/TextField.vue";

export default {
  components: {
    VRow,
    VCard,
    VCardText,
    VCol,
    VBtn,
    SvgVue,
    TextField,
    VForm,
  },
  props: {
    imagesOnly: {
      type: Boolean,
      default: false,
    },
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
          if (!this.imagesOnly) return true;

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
          .then((res) => {
            this.loading = false;
            this.$emit("loadFiles");
            this.file = [];
            this.$store.commit("toast", "Pomyślnie dodano!");
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
            this.$store.commit("toast", "Coś poszło nie tak...");
          });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.add-files-row {
  @media (min-width: 992px) {
    max-height: 80vh;
  }
}
</style>