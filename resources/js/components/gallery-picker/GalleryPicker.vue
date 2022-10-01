<template>
  <v-row>
    <v-row justify="center" class="mt-5 mb-2 px-3 gallery-picker">
      <v-dialog
        v-model="dialog"
        persistent
        style="background-color: white !important"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on" class="w-100">
            {{ title || "Dodaj galerię" }}
          </v-btn>
        </template>
        <v-card>
          <div class="gallery-picker-menu">
            <v-card-title
              class="d-flex justify-content-between position-relative"
            >
              <div class="d-flex align-items-center flex-wrap">
                <div>GalleryPicker</div>
                <div class="ml-3">
                  <v-text-field
                    label="Szukaj"
                    prepend-icon="mdi-magnify"
                    v-model="search"
                    @change="searchPhoto"
                  ></v-text-field>
                </div>
              </div>
              <v-icon class="gallery-picker-close" @click="dialog = false"
                >mdi-close</v-icon
              >
            </v-card-title>
            <v-tabs v-model="tab" background-color="primary" dark>
              <v-tab v-for="tab in tabs" :key="tab">
                {{ tab }}
              </v-tab>
            </v-tabs>
          </div>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-container>
                    <v-row class="d-flex align-items-center">
                      <v-col
                        @mouseout="closeIcon = 0"
                        @mouseover="showCloseIcon(photo.id)"
                        class="d-flex align-items-between flex-column"
                        lg="2"
                        md="3"
                        cols="6"
                        sm="4"
                        v-for="photo in filteredPhotos"
                        :key="photo.id"
                      >
                        <div class="d-flex justify-content-end">
                          <v-icon
                            @click="deletePhoto(photo.id)"
                            :color="closeIcon == photo.id ? 'black' : 'white'"
                            class="close-icon"
                            >mdi-close</v-icon
                          >
                        </div>
                        <v-tooltip top>
                          <template v-slot:activator="{ on, attrs }">
                            <div
                              @click="setPhotoClass(photo.id)"
                              v-on="on"
                              v-bind="attrs"
                              class="position-relative"
                            >
                              <div
                                v-if="activePhotos.includes(photo.id)"
                                class="mask gallery-picker-photo-mask"
                              ></div>
                              <img
                                loading="lazy"
                                class="gallery-picker-photo"
                                :src="url(photo.path)"
                              />
                            </div>
                          </template>
                          <span>{{ photo.path }}</span>
                        </v-tooltip>
                      </v-col>
                      <v-col cols="12">
                        <v-pagination
                          class="file-picker-pagination"
                          v-model="page"
                          :length="Math.ceil(photos.length / 12)"
                        ></v-pagination>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <AddPhotos @loadPhotos="loadPhotos" />
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-dialog>
    </v-row>
  </v-row>
</template>

<script>
import axios from "axios";
import AddPhotos from "@/components/gallery-picker/AddPhotos.vue";
import url from "@/helpers/photo/url.js";

export default {
  props: ["apiGallery", "title"],
  data() {
    return {
      dialog: false,
      tab: null,
      tabs: ["Wybierz zdjęcia", "Dodaj Nowe Zdjęcie"],
      photos: [],
      activePhotos: [],
      multiple: true,
      closeIcon: 0,
      placeholder: "/storage/img/placeholder/250.png",
      search: "",
      page: 1,
    };
  },
  components: {
    AddPhotos,
  },
  watch: {
    apiGallery() {
      this.loadPhotos();
      this.activePhotos = [];
    },
  },
  computed: {
    filteredPhotos() {
      let filteredPhotos = [];
      for (let photo of this.photos) {
        if (photo.path.toLowerCase().includes(this.search.toLowerCase())) {
          filteredPhotos.push(photo);
        }
      }
      return filteredPhotos
        .reverse()
        .slice((this.page - 1) * 12, (this.page - 1) * 12 + 12);
    },
  },

  methods: {
    url,
    showCloseIcon(id) {
      this.closeIcon = id;
    },
    isActivePhotoDeleted(id) {
      if (this.activePhotoPath !== null) {
        for (let photo of this.photos) {
          if (photo.id == id && this.activePhotos.includes(id)) {
            this.$emit("updateDeletedPhoto", photo.path);
          }
        }
      }
    },
    setApiGallery() {
      if (this.apiGallery) {
        let photos = [];
        for (let i = 0; i < this.photos.length; i++) {
          if (!this.apiGallery.some((a) => a.path == this.photos[i].path)) {
            if (!photos.includes(this.photos[i])) photos.push(this.photos[i]);
          }
        }
        this.photos = photos;
      }
    },
    loadPhotos() {
      axios.get("/api/media/get_photos").then((res) => {
        this.photos = res.data;

        this.setApiGallery();
      });
    },

    deletePhoto(id) {
      if (confirm("Czy na pewno?")) {
        axios
          .delete("/api/media/delete/" + id)
          .then((res) => {
            this.isActivePhotoDeleted(id);
            this.loadPhotos();
          })
          .catch((err) => console.log(err));
      }
    },
    getPhotoLinks() {
      let links = [];

      for (let i = 0; i < this.photos.length; i++) {
        for (let j = 0; j < this.activePhotos.length; j++) {
          if (this.photos[i].id == this.activePhotos[j])
            links[0] = this.photos[i];
        }
      }
      return links;
    },
    sendImageIdToPlaceholder() {
      let data = [];
      for (let activePhoto of this.activePhotos) {
        data.push(this.getPhotoById(activePhoto));
      }

      this.$emit("loadedImage", data);
    },
    setPhotoClass(id) {
      if (!this.activePhotos.includes(id)) this.activePhotos.push(id);
      else this.activePhotos.splice(this.activePhotos.indexOf(id), 1);

      this.sendImageIdToPlaceholder();
    },
    getPhotoById(id) {
      for (let i = 0; i < this.photos.length; i++) {
        if (this.photos[i].id == id) {
          return this.photos[i].path;
        }
      }
    },
  },
  created() {
    this.loadPhotos();
  },
};
</script>
<style lang="scss">
.gallery-picker-menu {
  position: sticky;
  width: 100%;
  z-index: 1;
  background: white;
  top: 0;
  @media (max-width: 992px) {
    position: sticky;
    width: unset;
  }
}
.gallery-picker-photo {
  cursor: pointer;
  height: auto;
  width: 100%;
  &-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: var(--first-color);
    opacity: 0.7;
    cursor: pointer;
    filter: drop-shadow(2px 4px 6px black);
  }
}
.gallery-picker-close {
  position: absolute !important;
  top: 14%;
  right: 2%;
}

.v-dialog {
  background-color: white !important;
}
</style>