<template>
  <v-card flat>
    <v-card-text>
      <v-row class="d-flex justify-content-center">
        <v-col lg="4" sm="12" md="4">
          <v-file-input
            id="file"
            v-model="file"
            multiple
            show-size
            counter
            label="Zdjęcie"
            accept="image/png, image/jpeg, image/bmp, image/gif, image/svg, image/jfif, image/svg+xml"
            prepend-icon="mdi-camera"
          ></v-file-input>
          <v-btn
            :disabled="loading"
            :loading="loading"
            @click="submit"
            class=""
            color="success"
          >
            <v-icon left class="">mdi-check</v-icon>
            <span>Wyślij</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      file: [],
      loading: false,
    };
  },
  computed: {
    img() {
      return this.file.length == 0
        ? "https://via.placeholder.com/250"
        : URL.createObjectURL(this.file[0]);
    },
  },
  methods: {
    submit() {
      if (this.file.length == 0) return;
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
