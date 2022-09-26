<template>
  <v-row justify="center" class="mt-5 mb-2 px-3">
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
              <div>Dodaj plik</div>
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
                        class="d-flex align-items-center py-5 files-container"
                      >
                        <v-col
                          @mouseout="closeIcon = 0"
                          @mouseover="showCloseIcon(file.id)"
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
                          <img
                            v-if="file.type.split('/')[0] == 'image'"
                            loading="lazy"
                            @click="setFileClass(file.id)"
                            class="image-picker-photo"
                            :src="url(file.path)"
                          />

                          <a
                            v-else
                            target="_blank"
                            class="text-center"
                            :href="url(file.path)"
                          >
                            <v-btn :color="$store.getters.settings.first_color">
                              <v-icon left>mdi-file</v-icon>
                              <span>Podgląd</span>
                            </v-btn>
                          </a>
                          <div
                            @click="setFileClass(file.id)"
                            class="file-picker-file"
                          >
                            {{ file.path.split("/")[1] }}
                          </div>
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
                      <div v-if="chosenFile" class="chosen-file-container">
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

                        <img
                          class="img-fluid chosen-img-placeholder"
                          v-if="isPhoto(chosenFile.type)"
                          :src="url(chosenFile.path)"
                          alt=""
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
                          <li>Nazwa: {{ chosenFile.name }}</li>
                          <li style="word-break: break-all">
                            Ścieżka: {{ chosenFile.path }}
                          </li>
                          <li>
                            Rozmiar: {{ formatFileSize(chosenFile.size) }}
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
                              @click="copyToClipboard(url(chosenFile.path))"
                              class="white--text"
                              :color="$store.getters.settings.first_color"
                              >KOPIUJ LINK</v-btn
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
            <AddFiles @loadFiles="loadFiles" />
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

export default {
  props: ["activeFilePath", "title", "loadFlag"],
  data() {
    return {
      dialog: false,
      tab: null,
      tabs: ["Wybierz plik", "Dodaj Nowe Pliki"],
      files: [],
      activeFile: 0,
      multiple: false,
      closeIcon: 0,
      search: "",
      lazyFiles: [],
      page: 1,
      url,
      chosenFileColumnShow: false,
    };
  },
  components: {
    AddFiles,
  },
  computed: {
    filteredFiles() {
      let filteredFiles = [];
      for (let file of this.files) {
        if (file.path.toLowerCase().includes(this.search.toLowerCase())) {
          filteredFiles.push(file);
        }
      }
      return filteredFiles.slice(
        (this.page - 1) * 12,
        (this.page - 1) * 12 + 12
      );
    },
    chosenFile() {
      return this.files.find((file) => file.id == this.activeFile);
    },
  },
  watch: {
    files() {
      if (this.files != undefined && this.activeFilePath)
        this.activeFile = this.getFileByPath(this.activeFilePath).id;
    },
    loadFlag() {
      if (this.loadFlag) this.loadFiles();
    },
  },
  methods: {
    isPhoto,
    formatFileSize,
    copyToClipboard(text) {
      copyToClipboard(text);
    },
    showCloseIcon(id) {
      this.closeIcon = id;
    },
    isActiveFileDeleted(id) {
      if (this.activeFilePath != null) {
        for (let file of this.files) {
          if (file.id == id && id == this.activeFile) {
            this.$emit("loadedFile", "");
            this.$emit("updateDeletedFile");
          }
        }
      }
    },

    loadFiles() {
      this.$emit("loadFiles");
      axios.get("/api/media/get_all").then((res) => {
        this.files = res.data;
        for (let file of this.files) {
          this.lazyFiles.push(false);
        }
      });
    },

    deleteFile(id) {
      if (confirm("Czy na pewno?")) {
        axios
          .delete("/api/media/delete/" + id)
          .then((res) => {
            this.isActiveFileDeleted(id);
            this.loadFiles();
          })
          .catch((err) => console.log(err));
      }
    },
    getFileById(id) {
      for (let i = 0; i < this.files.length; i++) {
        if (this.files[i].id == id) {
          return this.files[i];
        }
      }
    },
    getFileByPath(path) {
      for (let i = 0; i < this.files.length; i++) {
        if (this.files[i].path == path) {
          return this.files[i];
        }
      }
    },
    sendFileIdToPlaceholder() {
      let data = [];
      data = this.getFileById(this.activeFile).path;

      this.$emit("loadedFile", data);
    },
    setFileClass(id) {
      this.activeFile = id;
      this.chosenFileColumnShow = true;

      this.sendFileIdToPlaceholder();
    },
  },
  created() {
    this.loadFiles();
  },
};
</script>
<style lang="scss">
.file-picker {
  @media (min-width: 992px) {
    overflow-y: unset !important;
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
  z-index: 1;
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
    border-left: 1px solid #ebebeb;
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
</style>