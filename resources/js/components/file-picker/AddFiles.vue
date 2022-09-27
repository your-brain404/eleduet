<template>
  <v-card flat>
    <v-card-text>
      <v-row class="d-flex justify-content-center add-files-row">
        <v-col lg="4" sm="12" md="4">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-file-input
              :color="$store.getters.settings.first_color"
              id="file"
              v-model="file"
              multiple
              show-size
              counter
              label="Pliki"
              prepend-icon="mdi-files"
              :rules="rules"
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
          </v-form>
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
      ],
    };
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
            this.$store.commit("setSnackbar", "Pomyślnie dodano!");
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
            this.$store.commit("setSnackbar", "Coś poszło nie tak...");
          });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.add-files-row {
  @media (min-width: 992px) {
    padding-top: 150px;
  }
}
</style>