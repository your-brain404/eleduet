<template>
  <v-row justify="center" class="file-picker-component mt-5 mb-5 px-3">
    <v-col
      v-if="Boolean(chosenFile.id) || Boolean(value)"
      class="w-100 d-flex flex-column justify-content-between align-items-center px-0"
    >
      <Picture
        v-if="isPhoto(chosenFile.type)"
        width="100%"
        :src="value ? url(value) : placeholder"
      />

      <div class="file-picker__active-file-container">
        <a target="_blank" :href="url(value)">
          <div>
            {{ value.split("/")[value.split("/").length - 1] }}
          </div>
        </a>
        <v-btn @click="clearActiveFile" just-icon>
          <template #icon>
            <svg-vue width="24" height="24" icon="close"></svg-vue>
          </template>
        </v-btn>
      </div>
    </v-col>
    <v-btn
      @click="toggleModal"
      :color="settings.first_color"
      class="file-picker__modal-button"
    >
      {{ title || "Dodaj plik" }}
    </v-btn>
    <custom-modal
      v-model="modal"
      no-close-on-backdrop
      no-close-on-esc
      size="xl"
      modal-class="file-picker"
      hide-footer
      hide-header
    >
      <v-card>
        <div class="file-picker-menu">
          <div class="file-picker-menu__title">
            <div class="d-flex align-items-center flex-wrap">
              <div class="file-picker__modal-title">
                FilePicker{{ title ? ` - ${title}` : "" }}
              </div>
              <text-field
                class="file-picker__search-input"
                label="Szukaj"
                icon="magnify"
                v-model="search"
                @input="searchPhoto"
                no-validation
              ></text-field>
            </div>
            <v-btn @click="modal = false" class="file-picker-close" just-icon>
              <template #icon>
                <svg-vue width="24" height="24" icon="close" />
              </template>
            </v-btn>
          </div>
          <custom-tabs
            class="file-picker__tabs"
            v-model="tab"
            :tabs="tabs"
            background-color="primary"
          >
            <custom-tab v-for="(tab, i) in tabs" :key="tab">
              <v-card v-if="i == 0">
                <v-card-text>
                  <div class="mx-0">
                    <div class="row mx-0 choose-file-row">
                      <v-col
                        cols="12"
                        lg="8"
                        md="8"
                        style="align-items: flex-end; display: flex"
                      >
                        <v-row
                          class="d-flex align-items-center pa-5 files-container"
                        >
                          <v-col
                            class="d-flex file-picker-col align-items-between flex-column"
                            lg="2"
                            md="3"
                            sm="4"
                            cols="6"
                            v-for="file in filteredFiles"
                            :key="file.id"
                            @click="setFileClass(file.id)"
                          >
                            <div
                              v-if="file.type.split('/')[0] == 'image'"
                              class="position-relative"
                            >
                              <Transition name="fade">
                                <div
                                  v-show="
                                    chosenFile && chosenFile.id === file.id
                                  "
                                  class="mask file-picker__photo-mask"
                                ></div>
                              </Transition>
                              <Picture
                                classImg="file-picker__photo"
                                :src="url(file.path)"
                              />
                            </div>

                            <div
                              v-b-tooltip.hover
                              :title="file.path.split('/')[1]"
                              v-else
                              class="file-picker__set-file-button"
                            >
                              <v-btn :color="settings.first_color">
                                <template #icon>
                                  <svg-vue icon="file" />
                                </template>
                                <span>{{ file.path.split("/")[1] }}</span>
                              </v-btn>
                            </div>
                          </v-col>
                          <v-col cols="12" style="padding-top: 2rem"></v-col>
                          <v-col
                            cols="12"
                            style="
                              position: sticky;
                              bottom: -20px;
                              background-color: white;
                              z-index: 23;
                            "
                          >
                            <Pagination
                              class="file-picker-pagination"
                              v-model="page"
                              :total-rows="files.length"
                              :per-page="12"
                            />
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col
                        :class="[
                          'chosen-file-col',
                          { 'mobile-show': chosenFileColumnShow },
                        ]"
                        lg="4"
                        cols="12"
                        md="4"
                        :dupa="true"
                      >
                        <div v-if="chosenFile.id" class="chosen-file-container">
                          <v-btn
                            class="close-file-details-icon"
                            @click="chosenFileColumnShow = false"
                            just-icon
                          >
                            <template #icon>
                              <svg-vue icon="close" />
                            </template>
                          </v-btn>

                          <div
                            class="d-flex justify-content-between align-items-center"
                          >
                            <h4>Wybrany plik:</h4>
                            <u
                              @click="deleteFile(chosenFile.id)"
                              class="text-danger"
                              style="cursor: pointer"
                              >Usuń</u
                            >
                          </div>

                          <Picture
                            classImg="img-fluid chosen-img-placeholder"
                            v-if="isPhoto(chosenFile.type)"
                            width="100%"
                            :src="url(chosenFile.path)"
                          />
                          <v-btn
                            class="w-100 mt-2 mb-5"
                            @click="modal = false"
                            color="success"
                          >
                            <template #icon>
                              <svg-vue class="check-icon" icon="check" />
                            </template>

                            Zatwierdź
                          </v-btn>
                          <ul>
                            <li class="chosen-file__parameter">
                              <a target="_blank" :href="url(chosenFile.path)">
                                <v-btn
                                  class="white--text"
                                  :color="settings.first_color"
                                >
                                  <template #icon>
                                    <svg-vue icon="eye" />
                                  </template>
                                  <span>PODGLĄD</span>
                                </v-btn>
                              </a>
                            </li>
                            <li>Nazwa: {{ chosenFile.name }}</li>
                            <li style="word-break: break-all">
                              Ścieżka: {{ existingPhotoPath(chosenFile.path) }}
                            </li>
                            <li>
                              Rozmiar: {{ formatFileSize(chosenFile.size) }}
                            </li>
                            <li v-if="chosenFile.width">
                              Szerokość: {{ chosenFile.width }}px
                            </li>
                            <li v-if="chosenFile.height">
                              Wysokość: {{ chosenFile.height }}px
                            </li>
                            <li>Typ: {{ chosenFile.type }}</li>
                            <li>
                              Data utworzenia:
                              {{
                                new Date(chosenFile.created_at).toLocaleString()
                              }}
                            </li>
                            <li>
                              <v-btn
                                @click="
                                  copyToClipboard(
                                    url(existingPhotoPath(chosenFile.path))
                                  )
                                "
                                class="white--text"
                                :color="settings.first_color"
                              >
                                <template #icon>
                                  <svg-vue icon="content-copy" />
                                </template>
                                <span>KOPIUJ LINK</span></v-btn
                              >
                            </li>
                          </ul>
                        </div>
                      </v-col>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
              <AddFiles
                v-else-if="i === 1"
                @loadFiles="loadFiles"
                :images-only="imagesOnly"
              />
            </custom-tab>
          </custom-tabs>
        </div>
      </v-card>
    </custom-modal>
  </v-row>
</template>

<script>
import axios from "@/plugins/axios/axios.js";
import AddFiles from "./AddFiles.vue";
import url from "@/helpers/photo/url.js";
import isPhoto from "@/helpers/files/is-photo.js";
import formatFileSize from "@/helpers/files/format-file-size.js";
import copyToClipboard from "@/helpers/copy/copy-to-clipboard.js";
import Picture from "@/components/picture/Picture.vue";
import existingPhotoPath from "@/helpers/links/existing-photo-path.js";
import TextField from "@/components/elements/TextField.vue";
import VRow from "@/components/grid/VRow.vue";
import VCol from "@/components/grid/VCol.vue";
import VBtn from "@/components/elements/VBtn.vue";
import VCard from "@/components/elements/VCard.vue";
import VCardText from "@/components/elements/VCardText.vue";
import SvgVue from "@/components/elements/SvgVue.vue";
import CustomModal from "@/components/custom-modal/CustomModal.vue";
import CustomTabs from "@/components/custom-tabs/CustomTabs.vue";
import CustomTab from "@/components/custom-tabs/CustomTab.vue";
// import { VBTooltip } from "bootstrap-vue";
import Pagination from "@/components/pagination/Pagination.vue";

export default {
  directives: {
    // "b-tooltip": VBTooltip,
  },
  components: {
    CustomTabs,
    CustomTab,
    AddFiles,
    SvgVue,
    VCardText,
    Picture,
    VRow,
    CustomModal,
    TextField,
    VCard,
    VCol,
    VBtn,
    Pagination,
  },
  props: {
    modelValue: {
      type: String,
    },
    title: {
      type: String,
    },
    imagesOnly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modal: false,
      tab: 0,
      tabs: ["Wybierz plik", "Dodaj Nowe Pliki"],
      files: [],
      activeFile: 0,
      multiple: false,
      search: "",
      page: 1,
      chosenFileColumnShow: false,
      placeholder: "/storage/img/placeholder/250.png",
      settings: window.global.config.settings,
    };
  },

  computed: {
    value() {
      return this.modelValue;
    },
    filteredFiles() {
      let filteredFiles = [];
      for (let file of this.files) {
        if (file.path.toLowerCase().includes(this.search.toLowerCase())) {
          filteredFiles.push(file);
        }
      }
      return filteredFiles
        .reverse()
        .slice((this.page - 1) * 12, (this.page - 1) * 12 + 12);
    },
    chosenFile() {
      return this.files.find((file) => file.id == this.activeFile) || {};
    },
  },
  watch: {
    value: "setInitialActiveFile",
    files: "setInitialActiveFile",
    modal(modal) {
      document.querySelector("html").style.overflow = modal ? "hidden" : "";
    },
  },
  methods: {
    url,
    isPhoto,
    formatFileSize,
    copyToClipboard,
    existingPhotoPath,
    toggleModal() {
      this.modal = !this.modal;
    },
    setInitialActiveFile() {
      if (this.files.length > 0 && this.value)
        this.activeFile = this.getFileByPath(this.value)?.id;
    },
    clearActiveFile() {
      this.activeFile = 0;
      this.$emit("update:modelValue", "");
    },

    isActiveFileDeleted(id) {
      if (!this.value) return;
      let activeFile = this.files.find(
        (file) => file.id == id && id == this.activeFile
      );

      if (activeFile) {
        this.$emit("update:modelValue", "");
        this.$store.dispatch("FormService/updateDeletedFile");
      }
    },

    loadFiles() {
      axios
        .get(`/api/media/${this.imagesOnly ? "get_photos" : "get_all"}`)
        .then((res) => {
          this.files = res.data;
        });
    },

    deleteFile(id) {
      if (confirm("Czy na pewno?")) {
        axios
          .delete("/api/media/delete/" + id)
          .then(() => {
            this.isActiveFileDeleted(id);
            this.loadFiles();
            this.chosenFileColumnShow = false;
          })
          .catch((err) => console.log(err));
      }
    },

    getFileByPath(path) {
      return this.files.find((file) => file.path === path);
    },
    sendFilePathToPlaceholder() {
      let data = this.chosenFile?.path;

      if (data) this.$emit("update:modelValue", data);
    },
    setFileClass(id) {
      this.activeFile = id;
      this.chosenFileColumnShow = true;
      console.log(this.chosenFileColumnShow);

      this.sendFilePathToPlaceholder();
    },
  },
  created() {
    this.loadFiles();
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
.file-picker {
  .modal-dialog {
    max-width: unset !important;
    margin: 4rem !important;
  }
  .modal-body {
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
    font-weight: 400;
  }
  @media (min-width: 992px) {
    overflow-y: hidden !important;
  }
  &__modal-button {
    width: 100%;
  }
  &__active-file-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0.5rem 0;
  }
  &__set-file-button {
    .custom-btn {
      width: 100%;
    }
    .custom-btn__content {
      &,
      span {
        display: unset;
        flex: unset;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
  &__search-input {
    margin: 0;
    padding: 0;
  }
  &__photo {
    cursor: pointer;
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
}
.file-picker-pagination {
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li::before {
    display: none;
  }
}
.choose-file-row {
  @media (max-width: 992px) {
    padding-top: 25px;
  }
}
.close-file-details-icon {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-100%, -100%);
  z-index: 1;
  @media (min-width: 992px) {
    display: none !important;
  }
  @media (max-width: 576px) {
    transform: translate(-50%, -50%);
  }
}
.file-picker-file {
  cursor: pointer;
  word-break: break-all;
}
.files-container {
  @media (min-width: 992px) {
    overflow-y: auto;
    height: calc(80vh - 162px);
  }
}

.file-picker-menu {
  z-index: 2;
  background: white;
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
    top: 0;
  }
}
.file-picker-close {
  position: absolute !important;
  top: 14%;
  right: 1%;
}
.chosen-file-col {
  padding: 3rem !important;
  @media (min-width: 992px) {
    overflow-y: auto;
    height: calc(80vh - 162px);
  }
  @media (max-width: 992px) {
    position: fixed;
    right: 0;
    top: 5vh;
    z-index: 1;
    background: white;
    width: 50% !important;
    max-width: unset !important;
    flex: unset !important;
    overflow-y: auto;
    height: 90vh;
    box-shadow: 1px 1px 10px black;
    transition: transform 0.5s ease;
    transform: translateX(100%);
    &.mobile-show {
      transform: translateX(0%);
    }
  }
  @media (max-width: 576px) {
    width: 280px !important;
    padding: 1rem !important;
  }
}
.chosen-img-placeholder {
  border: 2px solid #ebebeb;
  padding: 1rem;
}
.chosen-file-container {
  position: relative;
  ul {
    padding-left: 0 !important;
    padding-top: 1rem;
  }
}
.chosen-file {
  &__parameter {
    margin-bottom: 0.5rem;
  }
}
</style>

<style lang="scss">
@import "@/plugins/bootstrap-vue/src/components/modal/modal.scss";
@import "bootstrap/scss/modal.scss";
@import "bootstrap/scss/tooltip.scss";
@import "@/plugins/bootstrap-vue/src/components/tooltip/tooltip.scss";
</style>