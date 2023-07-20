<template>
  <v-main>
    <v-container>
      <v-card>
        <v-card-title class="justify-content-center">
          <h2
            v-if="formTitle != 'undefined undefined'"
            class="pt-4 font-weight-bold panel-title-header first-color"
          >
            {{
              $route.path.split("/")[2] == "realizations"
                ? "Realizacje"
                : "Galeria - " + formTitle
            }}
          </h2>
        </v-card-title>
        <v-divider class="mt-0"></v-divider>
        <v-form ref="form">
          <v-row>
            <v-col cols="12" md="8">
              <div class="pa-5">
                <div class="gallery-container">
                  <v-row>
                    <v-col
                      v-for="photo in gallery"
                      :key="photo.path"
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <div class="position-relative">
                        <Picture
                          classImg="img-fluid"
                          :src="getUrl(photo.path)"
                        />
                        <div class="close-icon-container">
                          <v-btn
                            class="close-icon"
                            v-if="photo.id"
                            @click="destroy(photo.id)"
                            just-icon
                          >
                            <template #icon>
                              <svg-vue icon="close"></svg-vue>
                            </template>
                          </v-btn>
                        </div>
                      </div>
                      <text-field
                        label="Tekst alternatywny"
                        v-model="photo.photo_alt"
                      ></text-field>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </v-col>

            <v-col cols="12" md="4">
              <div class="pa-5 d-flex flex-column justify-content-between">
                <div>
                  <GalleryPicker
                    @updateDeletedPhoto="updateDeletedPhoto"
                    @loadedImage="setImagePlaceholder"
                    :apiGallery="apiGallery"
                  />
                </div>
              </div>
            </v-col>
          </v-row>
          <v-divider class="mb-0"></v-divider>
          <v-card-actions class="pa-4">
            <v-btn
              :disabled="gallery.length === 0"
              color="primary"
              class="mr-2"
              @click="send"
            >
              <template #icon>
                <svg-vue icon="check"></svg-vue>
              </template>
              <span>Zatwierdź</span>
            </v-btn>

            <v-btn color="error" class="mr-2" @click="$router.go(-1)">
              <template #icon>
                <svg-vue icon="close"></svg-vue>
              </template>
              <span>Anuluj</span>
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import axios from "@/plugins/axios/axios";
import GalleryPicker from "@/components/gallery-picker/GalleryPicker.vue";
import SnackbarAlerts from "@/data/snackbar-alerts.js";
import url from "@/helpers/photo/url.js";
import Picture from "@/components/picture/Picture.vue";
import TextField from "@/components/elements/TextField.vue";
import VForm from "@/components/elements/VForm.vue";
import VRow from "@/components/grid/VRow.vue";
import VCol from "@/components/grid/VCol.vue";
import VMain from "@/components/grid/VMain.vue";
import VContainer from "@/components/grid/VContainer.vue";
import VCard from "@/components/elements/VCard.vue";
import VBtn from "@/components/elements/VBtn.vue";
import VCardActions from "@/components/elements/VCardActions.vue";
import VDivider from "@/components/elements/VDivider.vue";
import VCardTitle from "@/components/elements/VCardTitle.vue";
import SvgVue from "svg-vue";
import loadingModule from "@/store/modules/loading/loadingModule.js";

export default {
  components: {
    GalleryPicker,
    Picture,
    VMain,
    VContainer,
    VCard,
    VForm,
    VBtn,
    SvgVue,
    VCardActions,
    VDivider,
    VRow,
    VCol,
    TextField,
    VCardTitle,
  },
  data: () => ({
    name: "",
    rules: {
      titleRules: [(v) => !!v || "Tytuł jest wymagany!"],
    },
    apiGallery: [],
    pickedGallery: [],
    gallery: [],
    currentObject: {},
    activePhoto: "https://via.placeholder.com/250",
    img: "",
  }),
  computed: {
    formTitle() {
      if (this.$route.path.split("/")[2] == "players")
        return `${this.currentObject.first_name} ${this.currentObject.last_name}`;
      else return this.currentObject.title;
    },
  },
  methods: {
    getUrl(src) {
      return url(src);
    },
    getImageDefaultPlaceholder() {
      return "https://via.placeholder.com/250";
    },
    setGallery(event) {
      let pickedGallery = [];
      for (let photo of event) {
        pickedGallery.push({
          path: photo,
          photo_alt: "",
          item_id: this.$route.params.id,
          table_name: this.$route.params.table,
        });
      }
      this.pickedGallery = pickedGallery;
      this.gallery = [...this.apiGallery, ...this.pickedGallery];
    },
    setImagePlaceholder(event) {
      if (event === "placeholder") {
        (this.img = ""), (this.activePhoto = this.getImageDefaultPlaceholder());
      } else {
        this.setGallery(event);
        this.activePhoto = url(event);
      }
    },
    getFormData() {
      return this.gallery;
    },
    resetForm() {
      this.activePhoto = this.getImageDefaultPlaceholder();
    },
    setLoading(state) {
      this.$store.commit("loading", state);
    },
    add(formData) {
      axios
        .post(`/api/gallery/add`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.setLoading(false);
          this.$store.commit("toast", SnackbarAlerts.success);
          this.loadGallery();
          this.resetForm();
        })
        .catch((err) => {
          this.$store.commit("toast", SnackbarAlerts.error);
          this.setLoading(false);
        });
    },
    edit(formData) {
      axios
        .put(`/api/gallery/edit`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.setLoading(false);
          this.$store.commit("toast", SnackbarAlerts.success);
          this.loadGallery();
        })
        .catch((err) => {
          this.$store.commit("toast", SnackbarAlerts.error);
          this.setLoading(false);
          console.log(err);
        });
    },
    destroy(id) {
      if (!confirm("Czy na pewno chcesz usunąć to zdjęcie z galerii?")) return;
      this.setLoading(true);
      axios
        .delete("/api/gallery/delete/" + id)
        .then((res) => {
          this.setLoading(false);
          this.$store.commit("toast", SnackbarAlerts.success);
          this.loadGallery();
        })
        .catch((err) => {
          this.$store.commit("toast", SnackbarAlerts.error);
          this.setLoading(false);
          console.log(err);
        });
    },
    send() {
      if (this.getFormData().length > 0) this.setLoading(true);
      for (let photo of this.getFormData())
        photo.id ? this.edit(photo) : this.add(photo);
    },
    updateDeletedPhoto(path) {
      this.gallery.splice(
        this.gallery.findIndex((photo) => photo.path == path)
      );
    },
    loadCurrentObject() {
      axios
        .get(
          `/api/${this.$route.path.split("/")[2]}/get_one/${
            this.$route.params.id
          }`
        )
        .then((res) => {
          this.currentObject = res.data;
        });
    },
    loadGallery() {
      axios
        .get(
          `/api/gallery/get_photos/${this.$route.path.split("/")[2]}/${
            this.$route.params.id
          }`
        )
        .then((res) => {
          this.apiGallery = res.data;
          this.gallery = res.data;
          this.setLoading(false);
        });
    },
  },

  created() {
    if (!this.$store.hasModule("Loading")) {
      this.$store.registerModule("Loading", loadingModule);
    }
    if (this.$route.path.split("/")[2] != "realizations")
      this.loadCurrentObject();
    this.loadGallery();
    this.setLoading(true);
  },
};
</script>

<style>
.gallery-form-photo {
  background-size: cover;
  width: 100%;
  height: auto;
  margin: auto;
}

.close-icon {
  /*filter: invert(1);*/
}
.close-icon-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}
</style>
