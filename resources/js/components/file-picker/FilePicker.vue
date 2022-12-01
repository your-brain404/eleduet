<template>
  <v-row justify="center" class="file-picker-component mt-5 mb-2 px-3">
    <v-col
      v-if="Boolean(chosenFile.id) || Boolean(value)"
      class="
        w-100
        d-flex
        flex-column
        justify-content-between
        align-items-center
        px-0
      "
    >
      <Picture
        v-if="isPhoto(chosenFile.type)"
        width="100%"
        :src="value ? url(value) : placeholder"
      />

      <div class="d-flex align-items-center justify-content-between w-100">
        <a target="_blank" :href="value">
          <div>
            {{ value.split("/")[value.split("/").length - 1] }}
          </div>
        </a>
        <v-btn @click="clearActiveFile" icon>
          <v-icon right>mdi-close</v-icon>
        </v-btn>
      </div>
    </v-col>
    <v-dialog content-class="file-picker" v-model="dialog" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :color="$store.getters.settings.first_color"
          dark
          v-bind="attrs"
          v-on="on"
          class="w-100"
        >
          {{ title ? title : "Dodaj plik" }}
        </v-btn>
      </template>
      <v-card>
        <div class="file-picker-menu">
          <v-card-title
            class="d-flex justify-content-between position-relative"
          >
            <div class="d-flex align-items-center flex-wrap">
              <div>FilePicker{{ title ? ` - ${title}` : "" }}</div>
              <div class="ml-3">
                <v-text-field
                  label="Szukaj"
                  prepend-icon="mdi-magnify"
                  v-model="search"
                  @change="searchPhoto"
                ></v-text-field>
              </div>
            </div>
            <v-icon class="file-picker-close" @click="dialog = false"
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
              <v-card-text class="p-0">
                <div class="mx-0">
                  <div
                    class="row mx-0 choose-file-row"
                    style="align-items: end"
                  >
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
                          class="
                            d-flex
                            file-picker-col
                            align-items-between
                            flex-column
                          "
                          lg="2"
                          md="3"
                          sm="4"
                          cols="6"
                          v-for="file in filteredFiles"
                          :key="file.id"
                        >
                          <div
                            v-if="file.type.split('/')[0] == 'image'"
                            @click="setFileClass(file.id)"
                            class="position-relative"
                          >
                            <Transition name="fade">
                              <div
                                v-if="chosenFile && chosenFile.id === file.id"
                                class="mask file-picker__photo-mask"
                              ></div>
                            </Transition>
                            <Picture
                              classImg="file-picker__photo"
                              :src="url(file.path)"
                            />
                          </div>

                          <v-tooltip top v-else>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn
                                @click="setFileClass(file.id)"
                                class="file-picker__set-file-button white--text"
                                v-on="on"
                                v-bind="attrs"
                                :color="$store.getters.settings.first_color"
                              >
                                <v-icon left>mdi-file</v-icon>
                                <span>{{ file.path.split("/")[1] }}</span>
                              </v-btn>
                            </template>
                            <span>{{ file.path.split("/")[1] }}</span>
                          </v-tooltip>
                        </v-col>
                        <v-col cols="12">
                          <v-pagination
                            class="file-picker-pagination"
                            v-model="page"
                            :length="Math.ceil(files.length / 12)"
                          ></v-pagination>
                        </v-col>
                      </v-row>
                      <v-row> </v-row>
                    </v-col>
                    <v-col
                      class="chosen-file-col"
                      :class="{ 'mobile-show': chosenFileColumnShow }"
                      lg="4"
                      cols="12"
                      md="4"
                    >
                      <div v-if="chosenFile.id" class="chosen-file-container">
                        <v-icon
                          @click="chosenFileColumnShow = false"
                          :color="'black'"
                          class="close-file-details-icon"
                          >mdi-close</v-icon
                        >
                        <div
                          class="
                            d-flex
                            justify-content-between
                            align-items-center
                          "
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
                          @click="dialog = false"
                          color="success"
                        >
                          <v-icon left class="check-icon" :color="'white'"
                            >mdi-check</v-icon
                          >
                          Zatwierdź
                        </v-btn>
                        <ul>
                          <li class="chosen-file__parameter">
                            <a target="_blank" :href="url(chosenFile.path)">
                              <v-btn
                                class="white--text"
                                :color="$store.getters.settings.first_color"
                              >
                                <v-icon left>mdi-eye</v-icon>
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
                              :color="$store.getters.settings.first_color"
                            >
                              <v-icon left>mdi-content-copy</v-icon
                              ><span>KOPIUJ LINK</span></v-btn
                            >
                          </li>
                        </ul>
                      </div>
                    </v-col>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <AddFiles @loadFiles="loadFiles" :images-only="imagesOnly" />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
import AddFiles from "./AddFiles.vue";
import url from "@/helpers/photo/url";
import isPhoto from "@/helpers/files/is-photo";
import formatFileSize from "@/helpers/files/format-file-size";
import copyToClipboard from "@/helpers/copy/copy-to-clipboard";
import Picture from "@/components/picture/Picture";
import existingPhotoPath from "@/helpers/links/existing-photo-path";
import {
  VRow,
  VDialog,
  VCard,
  VTab,
  VTabs,
  VTextField,
  VTabsItems,
  VTabItem,
  VCardText,
  VCol,
  VBtn,
  VIcon,
  VPagination,
  VTooltip,
  VCardTitle,
} from "vuetify/lib";

export default {
  components: {
    AddFiles,
    Picture,
    VRow,
    VTextField,
    VDialog,
    VCard,
    VTab,
    VTabs,
    VTabsItems,
    VTabItem,
    VCardText,
    VCol,
    VBtn,
    VIcon,
    VPagination,
    VTooltip,
    VCardTitle,
  },
  props: {
    value: {
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
      dialog: false,
      tab: null,
      tabs: ["Wybierz plik", "Dodaj Nowe Pliki"],
      files: [],
      activeFile: 0,
      multiple: false,
      search: "",
      page: 1,
      chosenFileColumnShow: false,
      placeholder: "/storage/img/placeholder/250.png",
    };
  },

  computed: {
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
  },
  methods: {
    url,
    isPhoto,
    formatFileSize,
    copyToClipboard,
    existingPhotoPath,
    setInitialActiveFile() {
      if (this.files.length > 0 && this.value)
        this.activeFile = this.getFileByPath(this.value)?.id;
    },
    clearActiveFile() {
      this.activeFile = 0;
      this.$emit("input", "");
    },

    isActiveFileDeleted(id) {
      if (!this.value) return;
      let activeFile = this.files.find(
        (file) => file.id == id && id == this.activeFile
      );

      if (activeFile) {
        this.$emit("input", "");
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

      if (data) this.$emit("input", data);
    },
    setFileClass(id) {
      this.activeFile = id;
      this.chosenFileColumnShow = true;

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
  @media (min-width: 992px) {
    overflow-y: unset !important;
  }
  &__set-file-button {
    .v-btn__content {
      display: unset;
      flex: unset;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
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
  @media (min-width: 992px) {
    height: 80vh;
  }
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
  position: fixed;
  width: calc(100% - 24px * 2);
  z-index: 2;
  background: white;
  @media (max-width: 992px) {
    position: sticky;
    width: unset;
    top: 0;
  }
}
.file-picker-close {
  position: absolute !important;
  top: 14%;
  right: 2%;
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