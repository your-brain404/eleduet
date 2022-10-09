<template>
  <v-card flat>
    <v-card-text>
      <v-row class="d-flex justify-content-center">
        <v-col lg="4" sm="12" md="4">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-file-input
              id="file"
              v-model="file"
              multiple
              show-size
              counter
              label="Zdjęcie"
              :accept="photoTypes"
              prepend-icon="mdi-camera"
              :rules="rules"
            ></v-file-input>
            <v-btn
              :disabled="loading || file.length === 0"
              :loading="loading"
              @click="submit"
              class="mt-3"
              color="success"
            >
              <v-icon left>mdi-check</v-icon>
              <span>Wyślij</span>
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
import isPhoto from "@/helpers/files/is-photo";
import photoTypes from "@/helpers/files/photo-types";

export default {
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
            this.$store.commit("setSnackbar", "Pomyślnie dodano!");
          })
          .catch((err) => {
            this.loading = false;
            console.error(err);
            this.$store.commit("setSnackbar", "Coś poszło nie tak...");
          });
      }
    },
  },
};
</script>
