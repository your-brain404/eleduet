<template>
  <v-row>
    <v-row justify="center" class="mt-5 mb-2 px-3 gallery-picker">
      <v-col cols="12">
        <v-btn @click="modal = true" color="primary" class="w-100">
          {{ title || "Dodaj galerię" }}
        </v-btn>
      </v-col>
      <b-modal
        v-model="modal"
        no-close-on-backdrop
        no-close-on-esc
        size="xl"
        hide-footer
        hide-header
        modal-class="gallery-picker"
        style="background-color: white !important"
      >
        <v-card>
          <div class="gallery-picker-menu">
            <div class="gallery-picker-menu__title">
              <div class="d-flex align-items-center flex-wrap">
                <div class="gallery-picker__modal-title">GalleryPicker</div>
                <div class="ml-3">
                  <text-field
                    class="gallery-picker__search-input"
                    label="Szukaj"
                    icon="magnify"
                    v-model="search"
                    @input="searchPhoto"
                    no-validation
                  ></text-field>
                </div>
              </div>
              <v-btn
                class="gallery-picker-close"
                @click="modal = false"
                just-icon
              >
                <template #icon>
                  <svg-vue icon="close" />
                </template>
              </v-btn>
            </div>
            <b-tabs
              class="gallery-picker__tabs"
              v-model="tab"
              background-color="primary"
              dark
            >
              <b-tab
                v-for="(tab, i) in tabs"
                :title="tab"
                :active="i == 0"
                :key="tab"
              >
                <v-card v-if="i === 0" flat>
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
                            <v-btn just-icon @click="deletePhoto(photo.id)">
                              <template #icon>
                                <svg-vue
                                  class="close-icon"
                                  :class="{
                                    'close-icon--show': closeIcon == photo.id,
                                  }"
                                  icon="close"
                                ></svg-vue>
                              </template>
                            </v-btn>
                          </div>
                          <div
                            @click="setPhotoClass(photo.id)"
                            v-b-tooltip.hover
                            :title="photo.path.split('/')[1]"
                            class="position-relative"
                          >
                            <Transition name="fade">
                              <div
                                v-if="activePhotos.includes(photo.id)"
                                class="mask gallery-picker-photo-mask"
                              ></div>
                            </Transition>

                            <Picture
                              classImg="gallery-picker-photo"
                              :src="url(photo.path)"
                            />
                          </div>
                        </v-col>
                        <v-col cols="12" style="padding-top: 2rem"></v-col>
                        <v-col
                          cols="12"
                          style="
                            position: sticky;
                            bottom: -1px;
                            background-color: white;
                            z-index: 23;
                          "
                        >
                          <Pagination
                            class="gallery-picker-pagination"
                            v-model="page"
                            :total-rows="photos.length"
                            :per-page="12"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>
                <AddPhotos v-else-if="i === 1" @loadPhotos="loadPhotos" />
              </b-tab>
            </b-tabs>
          </div>
        </v-card>
      </b-modal>
    </v-row>
  </v-row>
</template>

<script>
import axios from "@/plugins/axios/axios.js";
import AddPhotos from "@/components/gallery-picker/AddPhotos.vue";
import url from "@/helpers/photo/url.js";
import Picture from "@/components/picture/Picture.vue";
import TextField from "@/components/elements/TextField.vue";
import VRow from "@/components/grid/VRow.vue";
import VCol from "@/components/grid/VCol.vue";
import VCard from "@/components/elements/VCard.vue";
import VCardText from "@/components/elements/VCardText.vue";
import VBtn from "@/components/elements/VBtn.vue";
import SvgVue from "svg-vue";
import { BModal } from "@/plugins/bootstrap-vue/src/components/modal/modal.js";
import { BTabs } from "@/plugins/bootstrap-vue/src/components/tabs/tabs.js";
import { BTab } from "@/plugins/bootstrap-vue/src/components/tabs/tab.js";
import { VBTooltip } from "@/plugins/bootstrap-vue/src/directives/tooltip/tooltip.js";
import Pagination from "@/components/pagination/Pagination.vue";

export default {
  directives: {
    "b-tooltip": VBTooltip,
  },
  components: {
    VRow,
    BModal,
    SvgVue,
    Pagination,
    VCard,
    BTabs,
    BTab,
    TextField,
    VCardText,
    VCol,
    VBtn,
    AddPhotos,
    Picture,
  },
  props: ["apiGallery", "title"],
  data() {
    return {
      modal: false,
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
  watch: {
    apiGallery() {
      this.loadPhotos();
      this.activePhotos = [];
    },
    modal(modal) {
      document.querySelector("html").style.overflow = modal ? "hidden" : "";
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
.fade-enter-active {
  animation: fade 0.2s;
}
.fade-leave-active {
  animation: fade 0.2s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.7;
  }
}
.gallery-picker {
  .modal-dialog {
    max-width: unset !important;
    margin: 4rem !important;
  }
  .modal-body {
    padding: 0;
  }
  &__search-input {
    margin: 0;
    padding: 0;
  }
  &__tabs {
    .nav-tabs {
      background-color: var(--first-color);
      display: flex;
      align-items: center;
      li {
        &::before {
          content: unset;
        }
        a {
          padding: 0 16px;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 500;
          letter-spacing: 0.0892857143em;
          text-transform: uppercase;
          font-size: 0.875rem;
          height: 48px;
          display: flex;
          align-items: center;
          position: relative;
          &::before {
            content: "";
            width: 100%;
            height: 2px;
            background: white;
            position: absolute;
            bottom: 0;
            left: 0;
            opacity: 0;
            transition: 0.2s ease;
          }
          &::after {
            background-color: currentColor;
            bottom: 0;
            content: "";
            left: 0;
            opacity: 0;
            pointer-events: none;
            position: absolute;
            right: 0;
            top: 0;
            transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
          }
          &:hover::after {
            opacity: 0.08;
          }
          &.active {
            color: white;
            &::before {
              opacity: 1;
            }
          }
        }
      }
    }
  }
  &__modal-title {
    margin-right: 1.5rem;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
}
.gallery-picker-pagination {
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li::before {
    display: none;
  }
}
.gallery-picker-menu {
  position: sticky;
  width: 100%;
  z-index: 2;
  background: white;
  top: 0;
  &__title {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 25px;
    font-size: 1.25rem;
    letter-spacing: 0.0125em;
  }
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
  right: 1%;
}

.close-icon--show path {
  fill: black;
}
</style>

<style lang="scss">
@import "~@/plugins/bootstrap-vue/src/components/modal/modal.scss";
@import "bootstrap/scss/modal.scss";
@import "bootstrap/scss/tooltip.scss";
@import "~@/plugins/bootstrap-vue/src/components/tooltip/tooltip.scss";
</style>