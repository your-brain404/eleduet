"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[153],{810:(n,t,r)=>{r.d(t,{Z:()=>e});const e={success:"Pomyślnie dodano/edytowano!",error:"Coś poszło nie tak...",edit:"Pomyślnie edytowano!",delete:"Pomyślnie usunięto!"}},5083:(n,t,r)=>{function e(n){return n?n.split(".").slice(-1).join(""):""}r.d(t,{Z:()=>e})},891:(n,t,r)=>{r.d(t,{Z:()=>o});var e=r(9949);function o(n){return e.Z.includes(n)}},9949:(n,t,r)=>{r.d(t,{Z:()=>e});const e=["image/jpeg","image/jpg","image/png","image/svg","image/jfif","image/webp","image/svg+xml","image/bmp","image/gif"]},3768:(n,t,r)=>{r.d(t,{Z:()=>e});const e=["jpg","png","jpeg","jfif"]},6888:(n,t,r)=>{r.d(t,{Z:()=>a});var e=r(2061),o=r(3768),i=r(5083);function a(n){var t=(0,i.Z)(n);return e.Z.state.Settings.settings.destroy_primal_photo&&o.Z.includes(t)?"".concat(n,".webp"):n}},9142:(n,t,r)=>{function e(n){return null!=n?window.location.origin+"/storage/media/"+n:""}r.d(t,{Z:()=>e})},8676:(n,t,r)=>{r.d(t,{Z:()=>s});var e=r(4015),o=r.n(e),i=r(3645),a=r.n(i)()(o());a.push([n.id,".fade-enter-active{animation:fade .2s}.fade-leave-active{animation:fade .2s reverse}@keyframes fade{0%{opacity:0}to{opacity:.7}}.gallery-picker-menu{background:#fff;position:sticky;top:0;width:100%;z-index:2}@media (max-width:992px){.gallery-picker-menu{position:sticky;width:unset}}.gallery-picker-photo{cursor:pointer;height:auto;width:100%}.gallery-picker-photo-mask{background-color:var(--first-color);cursor:pointer;filter:drop-shadow(2px 4px 6px black);height:100%;left:0;opacity:.7;position:absolute;top:0;width:100%;z-index:1}.gallery-picker-close{position:absolute!important;right:2%;top:14%}.v-dialog{background-color:#fff!important}","",{version:3,sources:["webpack://./resources/js/components/gallery-picker/GalleryPicker.vue"],names:[],mappings:"AA8QA,mBACE,kBA7QF,CA+QA,mBACE,0BA5QF,CA8QA,gBACE,GACE,SA3QF,CA8QA,GACE,UA5QF,CACF,CA8QA,qBAIE,eAAA,CAHA,eAAA,CAIA,KAAA,CAHA,UAAA,CACA,SA1QF,CA6QE,yBANF,qBAOI,eAAA,CACA,WA1QF,CACF,CA4QA,sBACE,cAAA,CACA,WAAA,CACA,UAzQF,CA0QE,2BAOE,mCAAA,CAEA,cAAA,CACA,qCAAA,CALA,WAAA,CAFA,MAAA,CAKA,UAAA,CAPA,iBAAA,CACA,KAAA,CAEA,UAAA,CAEA,SApQJ,CA2QA,sBACE,2BAAA,CAEA,QAAA,CADA,OAvQF,CA2QA,UACE,+BAxQF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.fade-enter-active {\r\n  animation: fade 0.2s;\r\n}\r\n.fade-leave-active {\r\n  animation: fade 0.2s reverse;\r\n}\r\n@keyframes fade {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n.gallery-picker-menu {\r\n  position: sticky;\r\n  width: 100%;\r\n  z-index: 2;\r\n  background: white;\r\n  top: 0;\r\n  @media (max-width: 992px) {\r\n    position: sticky;\r\n    width: unset;\r\n  }\r\n}\r\n.gallery-picker-photo {\r\n  cursor: pointer;\r\n  height: auto;\r\n  width: 100%;\r\n  &-mask {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    background-color: var(--first-color);\r\n    opacity: 0.7;\r\n    cursor: pointer;\r\n    filter: drop-shadow(2px 4px 6px black);\r\n  }\r\n}\r\n.gallery-picker-close {\r\n  position: absolute !important;\r\n  top: 14%;\r\n  right: 2%;\r\n}\r\n\r\n.v-dialog {\r\n  background-color: white !important;\r\n}\r\n"],sourceRoot:""}]);const s=a},6520:(n,t,r)=>{r.d(t,{Z:()=>s});var e=r(4015),o=r.n(e),i=r(3645),a=r.n(i)()(o());a.push([n.id,"picture{display:flex}","",{version:3,sources:["webpack://./resources/js/components/picture/Picture.vue"],names:[],mappings:"AAsHA,QACA,YACA",sourcesContent:['<template>\r\n  <picture>\r\n    <source\r\n      v-if="webp && isWebpType"\r\n      :srcset="webpSrc"\r\n      type="image/webp"\r\n      :media="mobileVersion ? `(min-width: ${mobileVersion + 1}px)` : \'\'"\r\n    />\r\n    <source\r\n      v-if="webp && isWebpType && mobileVersion"\r\n      :srcset="webpSrcCustomWidth(mobileVersion)"\r\n      :media="mobileVersion ? `(max-width: ${mobileVersion}px)` : \'\'"\r\n      type="image/webp"\r\n    />\r\n    <source\r\n      v-if="srcEncodeExtension != \'webp\'"\r\n      :srcset="srcEncode"\r\n      :media="\r\n        mobileVersion && webpExtensions.includes(srcEncodeExtension)\r\n          ? `(min-width: ${mobileVersion + 1}px)`\r\n          : \'\'\r\n      "\r\n    />\r\n    <source\r\n      v-if="mobileVersion && srcEncodeExtension != \'webp\'"\r\n      :srcset="srcEncodeCustomWidth(mobileVersion)"\r\n      :media="\r\n        mobileVersion && webpExtensions.includes(srcEncodeExtension)\r\n          ? `(max-width: ${mobileVersion}px)`\r\n          : \'\'\r\n      "\r\n    />\r\n    <img\r\n      :loading="loading"\r\n      @click="$emit(\'click\')"\r\n      :class="classImg"\r\n      :style="styleImg"\r\n      :src="srcEncode"\r\n      :alt="alt"\r\n      @error="imgError"\r\n      :width="width"\r\n      :height="height"\r\n    />\r\n  </picture>\r\n</template>\r\n\r\n<script>\r\nimport webpExtensions from "@/helpers/files/webp-extensions";\r\nimport existingPhotoPath from "@/helpers/links/existing-photo-path";\r\nimport getExtensionFromPath from "@/helpers/files/get-extension-from-path";\r\n\r\nexport default {\r\n  data() {\r\n    return {\r\n      error: false,\r\n    };\r\n  },\r\n  props: {\r\n    mobileVersion: {\r\n      type: [String, Number],\r\n      default: "",\r\n    },\r\n    src: {\r\n      type: String,\r\n      default: "",\r\n    },\r\n    webp: {\r\n      type: Boolean,\r\n      default: true,\r\n    },\r\n    loading: {\r\n      type: String,\r\n      default: "lazy",\r\n    },\r\n    alt: String,\r\n    classImg: String,\r\n    styleImg: String,\r\n    width: String,\r\n    height: String,\r\n  },\r\n  computed: {\r\n    isWebpType() {\r\n      const regex = new RegExp(`.(${webpExtensions.join("|")})$`, "i");\r\n      return this.src.match(regex);\r\n    },\r\n    webpSrc() {\r\n      return this.isWebpType && `${this.src}.webp`;\r\n    },\r\n    srcEncodeExtension() {\r\n      return this.getExtensionFromPath(this.srcEncode);\r\n    },\r\n    srcEncode() {\r\n      return this.webp\r\n        ? existingPhotoPath(encodeURI(this.src))\r\n        : encodeURI(this.src);\r\n    },\r\n  },\r\n  methods: {\r\n    existingPhotoPath,\r\n    getExtensionFromPath,\r\n    imgError() {\r\n      if (this.error === false) this.error = true;\r\n    },\r\n    srcEncodeCustomWidth(width) {\r\n      let path = this.src.split("/");\r\n      let name = path.slice(-1);\r\n      return (\r\n        path.slice(0, path.length - 1).join("/") + `/width_${width}_${name}`\r\n      );\r\n    },\r\n    webpSrcCustomWidth(width) {\r\n      return this.isWebpType && this.srcEncodeCustomWidth(width) + ".webp";\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n\r\n<style>\r\npicture {\r\n  display: flex;\r\n}\r\n</style>'],sourceRoot:""}]);const s=a},3368:(n,t,r)=>{r.d(t,{Z:()=>s});var e=r(4015),o=r.n(e),i=r(3645),a=r.n(i)()(o());a.push([n.id,".gallery-form-photo{background-size:cover;height:auto;margin:auto;width:100%}.close-icon-container{align-items:flex-start;display:flex;height:100%;justify-content:flex-end;left:0;position:absolute;top:0;width:100%}","",{version:3,sources:["webpack://./resources/js/views/admin/forms/Gallery.vue"],names:[],mappings:"AA0RA,oBACA,qBAAA,CAEA,WAAA,CACA,WAAA,CAFA,UAGA,CAKA,sBAQA,sBAAA,CAFA,YAAA,CADA,WAAA,CAEA,wBAAA,CALA,MAAA,CADA,iBAAA,CAEA,KAAA,CACA,UAKA",sourcesContent:['<template>\r\n  <v-main>\r\n    <v-container>\r\n      <v-card>\r\n        <v-card-title class="justify-content-center">\r\n          <h2\r\n            v-if="formTitle != \'undefined undefined\'"\r\n            class="pt-4 font-weight-bold panel-title-header first-color"\r\n          >\r\n            {{\r\n              $route.path.split("/")[2] == "realizations"\r\n                ? "Realizacje"\r\n                : "Galeria - " + formTitle\r\n            }}\r\n          </h2>\r\n        </v-card-title>\r\n        <v-divider class="mt-0"></v-divider>\r\n        <v-form ref="form">\r\n          <v-row>\r\n            <v-col cols="12" md="8">\r\n              <div class="pa-5">\r\n                <div class="gallery-container">\r\n                  <v-row>\r\n                    <v-col\r\n                      v-for="photo in gallery"\r\n                      :key="photo.path"\r\n                      cols="12"\r\n                      sm="6"\r\n                      md="4"\r\n                    >\r\n                      <div class="position-relative">\r\n                        <Picture\r\n                          classImg="img-fluid"\r\n                          :src="getUrl(photo.path)"\r\n                        />\r\n                        <div class="close-icon-container">\r\n                          <v-icon\r\n                            v-if="photo.id"\r\n                            @click="destroy(photo.id)"\r\n                            class="pr-1 pt-1 close-icon"\r\n                            color="grey"\r\n                            >mdi-close</v-icon\r\n                          >\r\n                        </div>\r\n                      </div>\r\n                      <v-text-field\r\n                        label="Tekst alternatywny"\r\n                        v-model="photo.photo_alt"\r\n                      ></v-text-field>\r\n                    </v-col>\r\n                  </v-row>\r\n                </div>\r\n              </div>\r\n            </v-col>\r\n\r\n            <v-col cols="12" md="4">\r\n              <div class="pa-5 d-flex flex-column justify-content-between">\r\n                <div>\r\n                  <GalleryPicker\r\n                    @updateDeletedPhoto="updateDeletedPhoto"\r\n                    @loadedImage="setImagePlaceholder"\r\n                    :apiGallery="apiGallery"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </v-col>\r\n          </v-row>\r\n          <v-divider class="mb-0"></v-divider>\r\n          <v-card-actions class="pa-4">\r\n            <v-btn\r\n              :disabled="gallery.length === 0"\r\n              color="primary"\r\n              class="mr-2"\r\n              @click="send"\r\n            >\r\n              <v-icon left>mdi-check</v-icon>\r\n              <span>Zatwierdź</span>\r\n            </v-btn>\r\n\r\n            <v-btn color="error" class="mr-2" @click="$router.go(-1)">\r\n              <v-icon left>mdi-close</v-icon>\r\n              <span>Anuluj</span>\r\n            </v-btn>\r\n          </v-card-actions>\r\n        </v-form>\r\n      </v-card>\r\n    </v-container>\r\n  </v-main>\r\n</template>\r\n\r\n<script>\r\nimport axios from "axios";\r\nimport GalleryPicker from "@/components/gallery-picker/GalleryPicker";\r\nimport SnackbarAlerts from "@/data/snackbar-alerts.js";\r\nimport url from "@/helpers/photo/url.js";\r\nimport Picture from "@/components/picture/Picture.vue";\r\nimport {\r\n  VMain,\r\n  VContainer,\r\n  VCard,\r\n  VForm,\r\n  VBtn,\r\n  VIcon,\r\n  VCardActions,\r\n  VDivider,\r\n  VRow,\r\n  VCol,\r\n  VTextField,\r\n  VCardTitle,\r\n} from "vuetify/lib";\r\n\r\nexport default {\r\n  components: {\r\n    GalleryPicker,\r\n    Picture,\r\n    VMain,\r\n    VContainer,\r\n    VCard,\r\n    VForm,\r\n    VBtn,\r\n    VIcon,\r\n    VCardActions,\r\n    VDivider,\r\n    VRow,\r\n    VCol,\r\n    VTextField,\r\n    VCardTitle,\r\n  },\r\n  data: () => ({\r\n    name: "",\r\n    rules: {\r\n      titleRules: [(v) => !!v || "Tytuł jest wymagany!"],\r\n    },\r\n    apiGallery: [],\r\n    pickedGallery: [],\r\n    gallery: [],\r\n    currentObject: {},\r\n    activePhoto: "https://via.placeholder.com/250",\r\n    img: "",\r\n  }),\r\n  computed: {\r\n    formTitle() {\r\n      if (this.$route.path.split("/")[2] == "players")\r\n        return `${this.currentObject.first_name} ${this.currentObject.last_name}`;\r\n      else return this.currentObject.title;\r\n    },\r\n  },\r\n  methods: {\r\n    getUrl(src) {\r\n      return url(src);\r\n    },\r\n    getImageDefaultPlaceholder() {\r\n      return "https://via.placeholder.com/250";\r\n    },\r\n    setGallery(event) {\r\n      let pickedGallery = [];\r\n      for (let photo of event) {\r\n        pickedGallery.push({\r\n          path: photo,\r\n          photo_alt: "",\r\n          item_id: this.$route.params.id,\r\n          table_name: this.$route.params.table,\r\n        });\r\n      }\r\n      this.pickedGallery = pickedGallery;\r\n      this.gallery = [...this.apiGallery, ...this.pickedGallery];\r\n    },\r\n    setImagePlaceholder(event) {\r\n      if (event === "placeholder") {\r\n        (this.img = ""), (this.activePhoto = this.getImageDefaultPlaceholder());\r\n      } else {\r\n        this.setGallery(event);\r\n        this.activePhoto = url(event);\r\n      }\r\n    },\r\n    getFormData() {\r\n      return this.gallery;\r\n    },\r\n    resetForm() {\r\n      this.activePhoto = this.getImageDefaultPlaceholder();\r\n    },\r\n    setLoading(state) {\r\n      this.$store.commit("loading", state);\r\n    },\r\n    add(formData) {\r\n      axios\r\n        .post(`/api/gallery/add`, formData, {\r\n          headers: {\r\n            "Content-Type": "application/json",\r\n          },\r\n        })\r\n        .then((res) => {\r\n          this.setLoading(false);\r\n          this.$store.commit("setSnackbar", SnackbarAlerts.success);\r\n          this.loadGallery();\r\n          this.resetForm();\r\n        })\r\n        .catch((err) => {\r\n          this.$store.commit("setSnackbar", SnackbarAlerts.error);\r\n          this.setLoading(false);\r\n        });\r\n    },\r\n    edit(formData) {\r\n      axios\r\n        .put(`/api/gallery/edit`, formData, {\r\n          headers: {\r\n            "Content-Type": "application/json",\r\n          },\r\n        })\r\n        .then((res) => {\r\n          this.setLoading(false);\r\n          this.$store.commit("setSnackbar", SnackbarAlerts.success);\r\n          this.loadGallery();\r\n        })\r\n        .catch((err) => {\r\n          this.$store.commit("setSnackbar", SnackbarAlerts.error);\r\n          this.setLoading(false);\r\n          console.log(err);\r\n        });\r\n    },\r\n    destroy(id) {\r\n      if (!confirm("Czy na pewno chcesz usunąć to zdjęcie z galerii?")) return;\r\n      this.setLoading(true);\r\n      axios\r\n        .delete("/api/gallery/delete/" + id)\r\n        .then((res) => {\r\n          this.setLoading(false);\r\n          this.$store.commit("setSnackbar", SnackbarAlerts.success);\r\n          this.loadGallery();\r\n        })\r\n        .catch((err) => {\r\n          this.$store.commit("setSnackbar", SnackbarAlerts.error);\r\n          this.setLoading(false);\r\n          console.log(err);\r\n        });\r\n    },\r\n    send() {\r\n      if (this.getFormData().length > 0) this.setLoading(true);\r\n      for (let photo of this.getFormData())\r\n        photo.id ? this.edit(photo) : this.add(photo);\r\n    },\r\n    updateDeletedPhoto(path) {\r\n      this.gallery.splice(\r\n        this.gallery.findIndex((photo) => photo.path == path)\r\n      );\r\n    },\r\n    loadCurrentObject() {\r\n      axios\r\n        .get(\r\n          `/api/${this.$route.path.split("/")[2]}/get_one/${\r\n            this.$route.params.id\r\n          }`\r\n        )\r\n        .then((res) => {\r\n          this.currentObject = res.data;\r\n        });\r\n    },\r\n    loadGallery() {\r\n      axios\r\n        .get(\r\n          `/api/gallery/get_photos/${this.$route.path.split("/")[2]}/${\r\n            this.$route.params.id\r\n          }`\r\n        )\r\n        .then((res) => {\r\n          this.apiGallery = res.data;\r\n          this.gallery = res.data;\r\n          this.setLoading(false);\r\n        });\r\n    },\r\n  },\r\n\r\n  created() {\r\n    if (this.$route.path.split("/")[2] != "realizations")\r\n      this.loadCurrentObject();\r\n    this.loadGallery();\r\n    this.setLoading(true);\r\n  },\r\n};\r\n<\/script>\r\n\r\n<style>\r\n.gallery-form-photo {\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: auto;\r\n  margin: auto;\r\n}\r\n\r\n.close-icon {\r\n  /*filter: invert(1);*/\r\n}\r\n.close-icon-container {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: flex-start;\r\n}\r\n</style>\r\n'],sourceRoot:""}]);const s=a},4525:(n,t,r)=>{r.d(t,{Z:()=>h});var e=r(3768),o=r(6888),i=r(5083);const a={data:function(){return{error:!1}},props:{mobileVersion:{type:[String,Number],default:""},src:{type:String,default:""},webp:{type:Boolean,default:!0},loading:{type:String,default:"lazy"},alt:String,classImg:String,styleImg:String,width:String,height:String},computed:{isWebpType:function(){var n=new RegExp(".(".concat(e.Z.join("|"),")$"),"i");return this.src.match(n)},webpSrc:function(){return this.isWebpType&&"".concat(this.src,".webp")},srcEncodeExtension:function(){return this.getExtensionFromPath(this.srcEncode)},srcEncode:function(){return this.webp?(0,o.Z)(encodeURI(this.src)):encodeURI(this.src)}},methods:{existingPhotoPath:o.Z,getExtensionFromPath:i.Z,imgError:function(){!1===this.error&&(this.error=!0)},srcEncodeCustomWidth:function(n){var t=this.src.split("/"),r=t.slice(-1);return t.slice(0,t.length-1).join("/")+"/width_".concat(n,"_").concat(r)},webpSrcCustomWidth:function(n){return this.isWebpType&&this.srcEncodeCustomWidth(n)+".webp"}}};var s=r(3379),l=r.n(s),c=r(6520),d={insert:"head",singleton:!1};l()(c.Z,d);c.Z.locals;const h=(0,r(1900).Z)(a,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("picture",[n.webp&&n.isWebpType?r("source",{attrs:{srcset:n.webpSrc,type:"image/webp",media:n.mobileVersion?"(min-width: "+(n.mobileVersion+1)+"px)":""}}):n._e(),n._v(" "),n.webp&&n.isWebpType&&n.mobileVersion?r("source",{attrs:{srcset:n.webpSrcCustomWidth(n.mobileVersion),media:n.mobileVersion?"(max-width: "+n.mobileVersion+"px)":"",type:"image/webp"}}):n._e(),n._v(" "),"webp"!=n.srcEncodeExtension?r("source",{attrs:{srcset:n.srcEncode,media:n.mobileVersion&&n.webpExtensions.includes(n.srcEncodeExtension)?"(min-width: "+(n.mobileVersion+1)+"px)":""}}):n._e(),n._v(" "),n.mobileVersion&&"webp"!=n.srcEncodeExtension?r("source",{attrs:{srcset:n.srcEncodeCustomWidth(n.mobileVersion),media:n.mobileVersion&&n.webpExtensions.includes(n.srcEncodeExtension)?"(max-width: "+n.mobileVersion+"px)":""}}):n._e(),n._v(" "),r("img",{class:n.classImg,style:n.styleImg,attrs:{loading:n.loading,src:n.srcEncode,alt:n.alt,width:n.width,height:n.height},on:{click:function(t){return n.$emit("click")},error:n.imgError}})])}),[],!1,null,null,null).exports},7892:(n,t,r)=>{r.r(t),r.d(t,{default:()=>N});var e=r(9669),o=r.n(e),i=r(891),a=r(9949),s=r(7894),l=r(5893),c=r(5255),d=r(7024),h=r(6944),u=r(4786),p=r(7067),m=r(3240);function f(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,t){if(!n)return;if("string"==typeof n)return v(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(n,t)}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var e=0,o=function(){};return{s:o,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return a=n.done,n},e:function(n){s=!0,i=n},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function v(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}const g={components:{VRow:s.Z,VCard:l.Z,VCardText:c.ZB,VCol:d.Z,VBtn:h.Z,VIcon:u.Z,VFileInput:p.Z,VForm:m.Z},data:function(){return{file:[],loading:!1,valid:!0,rules:[function(n){var t,r=[],e=f(n);try{for(e.s();!(t=e.n()).done;){var o=t.value;o.size>25e6&&r.push(o.name)}}catch(n){e.e(n)}finally{e.f()}return 0===r.length||"Pliki [".concat(r.join(", "),"] nie powinny być większe niż 25 MB!")},function(n){var t,r=[],e=f(n);try{for(e.s();!(t=e.n()).done;){var o=t.value;(0,i.Z)(o.type)||r.push(o.name)}}catch(n){e.e(n)}finally{e.f()}return 0===r.length||"Pliki [".concat(r.join(", "),"] powinny być zdjęciami!")}]}},computed:{photoTypes:function(){return a.Z.join(", ")},img:function(){return 0==this.file.length?"https://via.placeholder.com/250":URL.createObjectURL(this.file[0])}},methods:{submit:function(){var n=this;if(0!=this.file.length&&this.valid){this.loading=!0;for(var t=0;t<this.file.length;t++){var r=new FormData;r.append("file",this.file[t]),o().post("/api/media/add",r).then((function(){n.loading=!1,n.$emit("loadPhotos"),n.file=[],n.$store.commit("setSnackbar","Pomyślnie dodano!")})).catch((function(t){n.loading=!1,console.error(t),n.$store.commit("setSnackbar","Coś poszło nie tak...")}))}}}}};var y=r(1900);const A=(0,y.Z)(g,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("v-row",{staticClass:"d-flex justify-content-center"},[r("v-col",{attrs:{lg:"4",sm:"12",md:"4"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:n.valid,callback:function(t){n.valid=t},expression:"valid"}},[r("v-file-input",{attrs:{id:"file",multiple:"","show-size":"",counter:"",label:"Zdjęcie",accept:n.photoTypes,"prepend-icon":"mdi-camera",rules:n.rules},model:{value:n.file,callback:function(t){n.file=t},expression:"file"}}),n._v(" "),r("v-btn",{staticClass:"mt-3",attrs:{disabled:n.loading||0===n.file.length,loading:n.loading,color:"success"},on:{click:n.submit}},[r("v-icon",{attrs:{left:""}},[n._v("mdi-check")]),n._v(" "),r("span",[n._v("Wyślij")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports;var b=r(9142),C=r(4525),w=r(1765),k=r(756),x=r(3528),P=r(607),_=r(1283),V=r(6975),E=r(1491),Z=r(6640);function j(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,t){if(!n)return;if("string"==typeof n)return S(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(n,t)}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var e=0,o=function(){};return{s:o,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return a=n.done,n},e:function(n){s=!0,i=n},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function S(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}const $={components:{VRow:s.Z,VDialog:w.Z,VCard:l.Z,VTab:k.Z,VTabs:x.Z,VTextField:P.Z,VTabsItems:_.Z,VTabItem:V.Z,VCardText:c.ZB,VCol:d.Z,VBtn:h.Z,VIcon:u.Z,VPagination:E.Z,VTooltip:Z.Z,VCardTitle:c.EB,AddPhotos:A,Picture:C.Z},props:["apiGallery","title"],data:function(){return{dialog:!1,tab:null,tabs:["Wybierz zdjęcia","Dodaj Nowe Zdjęcie"],photos:[],activePhotos:[],multiple:!0,closeIcon:0,placeholder:"/storage/img/placeholder/250.png",search:"",page:1}},watch:{apiGallery:function(){this.loadPhotos(),this.activePhotos=[]}},computed:{filteredPhotos:function(){var n,t=[],r=j(this.photos);try{for(r.s();!(n=r.n()).done;){var e=n.value;e.path.toLowerCase().includes(this.search.toLowerCase())&&t.push(e)}}catch(n){r.e(n)}finally{r.f()}return t.reverse().slice(12*(this.page-1),12*(this.page-1)+12)}},methods:{url:b.Z,showCloseIcon:function(n){this.closeIcon=n},isActivePhotoDeleted:function(n){if(null!==this.activePhotoPath){var t,r=j(this.photos);try{for(r.s();!(t=r.n()).done;){var e=t.value;e.id==n&&this.activePhotos.includes(n)&&this.$emit("updateDeletedPhoto",e.path)}}catch(n){r.e(n)}finally{r.f()}}},setApiGallery:function(){var n=this;if(this.apiGallery){for(var t=[],r=function(r){n.apiGallery.some((function(t){return t.path==n.photos[r].path}))||t.includes(n.photos[r])||t.push(n.photos[r])},e=0;e<this.photos.length;e++)r(e);this.photos=t}},loadPhotos:function(){var n=this;o().get("/api/media/get_photos").then((function(t){n.photos=t.data,n.setApiGallery()}))},deletePhoto:function(n){var t=this;confirm("Czy na pewno?")&&o().delete("/api/media/delete/"+n).then((function(r){t.isActivePhotoDeleted(n),t.loadPhotos()})).catch((function(n){return console.log(n)}))},getPhotoLinks:function(){for(var n=[],t=0;t<this.photos.length;t++)for(var r=0;r<this.activePhotos.length;r++)this.photos[t].id==this.activePhotos[r]&&(n[0]=this.photos[t]);return n},sendImageIdToPlaceholder:function(){var n,t=[],r=j(this.activePhotos);try{for(r.s();!(n=r.n()).done;){var e=n.value;t.push(this.getPhotoById(e))}}catch(n){r.e(n)}finally{r.f()}this.$emit("loadedImage",t)},setPhotoClass:function(n){this.activePhotos.includes(n)?this.activePhotos.splice(this.activePhotos.indexOf(n),1):this.activePhotos.push(n),this.sendImageIdToPlaceholder()},getPhotoById:function(n){for(var t=0;t<this.photos.length;t++)if(this.photos[t].id==n)return this.photos[t].path}},created:function(){this.loadPhotos()}};var I=r(3379),G=r.n(I),T=r(8676),F={insert:"head",singleton:!1};G()(T.Z,F);T.Z.locals;const D=(0,y.Z)($,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("v-row",[r("v-row",{staticClass:"mt-5 mb-2 px-3 gallery-picker",attrs:{justify:"center"}},[r("v-dialog",{staticStyle:{"background-color":"white !important"},attrs:{persistent:""},scopedSlots:n._u([{key:"activator",fn:function(t){var e=t.on,o=t.attrs;return[r("v-btn",n._g(n._b({staticClass:"w-100",attrs:{color:"primary",dark:""}},"v-btn",o,!1),e),[n._v("\n          "+n._s(n.title||"Dodaj galerię")+"\n        ")])]}}]),model:{value:n.dialog,callback:function(t){n.dialog=t},expression:"dialog"}},[n._v(" "),r("v-card",[r("div",{staticClass:"gallery-picker-menu"},[r("v-card-title",{staticClass:"d-flex justify-content-between position-relative"},[r("div",{staticClass:"d-flex align-items-center flex-wrap"},[r("div",[n._v("GalleryPicker")]),n._v(" "),r("div",{staticClass:"ml-3"},[r("v-text-field",{attrs:{label:"Szukaj","prepend-icon":"mdi-magnify"},on:{change:n.searchPhoto},model:{value:n.search,callback:function(t){n.search=t},expression:"search"}})],1)]),n._v(" "),r("v-icon",{staticClass:"gallery-picker-close",on:{click:function(t){n.dialog=!1}}},[n._v("mdi-close")])],1),n._v(" "),r("v-tabs",{attrs:{"background-color":"primary",dark:""},model:{value:n.tab,callback:function(t){n.tab=t},expression:"tab"}},n._l(n.tabs,(function(t){return r("v-tab",{key:t},[n._v("\n              "+n._s(t)+"\n            ")])})),1)],1),n._v(" "),r("v-tabs-items",{model:{value:n.tab,callback:function(t){n.tab=t},expression:"tab"}},[r("v-tab-item",[r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("v-container",[r("v-row",{staticClass:"d-flex align-items-center"},[n._l(n.filteredPhotos,(function(t){return r("v-col",{key:t.id,staticClass:"d-flex align-items-between flex-column",attrs:{lg:"2",md:"3",cols:"6",sm:"4"},on:{mouseout:function(t){n.closeIcon=0},mouseover:function(r){return n.showCloseIcon(t.id)}}},[r("div",{staticClass:"d-flex justify-content-end"},[r("v-icon",{staticClass:"close-icon",attrs:{color:n.closeIcon==t.id?"black":"white"},on:{click:function(r){return n.deletePhoto(t.id)}}},[n._v("mdi-close")])],1),n._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:n._u([{key:"activator",fn:function(e){var o=e.on,i=e.attrs;return[r("div",n._g(n._b({staticClass:"position-relative",on:{click:function(r){return n.setPhotoClass(t.id)}}},"div",i,!1),o),[r("Transition",{attrs:{name:"fade"}},[n.activePhotos.includes(t.id)?r("div",{staticClass:"mask gallery-picker-photo-mask"}):n._e()]),n._v(" "),r("Picture",{attrs:{classImg:"gallery-picker-photo",src:n.url(t.path)}})],1)]}}],null,!0)},[n._v(" "),r("span",[n._v(n._s(t.path))])])],1)})),n._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-pagination",{staticClass:"file-picker-pagination",attrs:{length:Math.ceil(n.photos.length/12)},model:{value:n.page,callback:function(t){n.page=t},expression:"page"}})],1)],2)],1)],1)],1)],1),n._v(" "),r("v-tab-item",[r("AddPhotos",{on:{loadPhotos:n.loadPhotos}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports;var z=r(810),B=r(5091),L=r(1819),W=r(8176);function O(n){return function(n){if(Array.isArray(n))return U(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||R(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=R(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var e=0,o=function(){};return{s:o,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return a=n.done,n},e:function(n){s=!0,i=n},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function R(n,t){if(n){if("string"==typeof n)return U(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(n,t):void 0}}function U(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}const M={components:{GalleryPicker:D,Picture:C.Z,VMain:B.Z,VContainer:L.Z,VCard:l.Z,VForm:m.Z,VBtn:h.Z,VIcon:u.Z,VCardActions:c.h7,VDivider:W.Z,VRow:s.Z,VCol:d.Z,VTextField:P.Z,VCardTitle:c.EB},data:function(){return{name:"",rules:{titleRules:[function(n){return!!n||"Tytuł jest wymagany!"}]},apiGallery:[],pickedGallery:[],gallery:[],currentObject:{},activePhoto:"https://via.placeholder.com/250",img:""}},computed:{formTitle:function(){return"players"==this.$route.path.split("/")[2]?"".concat(this.currentObject.first_name," ").concat(this.currentObject.last_name):this.currentObject.title}},methods:{getUrl:function(n){return(0,b.Z)(n)},getImageDefaultPlaceholder:function(){return"https://via.placeholder.com/250"},setGallery:function(n){var t,r=[],e=Q(n);try{for(e.s();!(t=e.n()).done;){var o=t.value;r.push({path:o,photo_alt:"",item_id:this.$route.params.id,table_name:this.$route.params.table})}}catch(n){e.e(n)}finally{e.f()}this.pickedGallery=r,this.gallery=[].concat(O(this.apiGallery),O(this.pickedGallery))},setImagePlaceholder:function(n){"placeholder"===n?(this.img="",this.activePhoto=this.getImageDefaultPlaceholder()):(this.setGallery(n),this.activePhoto=(0,b.Z)(n))},getFormData:function(){return this.gallery},resetForm:function(){this.activePhoto=this.getImageDefaultPlaceholder()},setLoading:function(n){this.$store.commit("loading",n)},add:function(n){var t=this;o().post("/api/gallery/add",n,{headers:{"Content-Type":"application/json"}}).then((function(n){t.setLoading(!1),t.$store.commit("setSnackbar",z.Z.success),t.loadGallery(),t.resetForm()})).catch((function(n){t.$store.commit("setSnackbar",z.Z.error),t.setLoading(!1)}))},edit:function(n){var t=this;o().put("/api/gallery/edit",n,{headers:{"Content-Type":"application/json"}}).then((function(n){t.setLoading(!1),t.$store.commit("setSnackbar",z.Z.success),t.loadGallery()})).catch((function(n){t.$store.commit("setSnackbar",z.Z.error),t.setLoading(!1),console.log(n)}))},destroy:function(n){var t=this;confirm("Czy na pewno chcesz usunąć to zdjęcie z galerii?")&&(this.setLoading(!0),o().delete("/api/gallery/delete/"+n).then((function(n){t.setLoading(!1),t.$store.commit("setSnackbar",z.Z.success),t.loadGallery()})).catch((function(n){t.$store.commit("setSnackbar",z.Z.error),t.setLoading(!1),console.log(n)})))},send:function(){this.getFormData().length>0&&this.setLoading(!0);var n,t=Q(this.getFormData());try{for(t.s();!(n=t.n()).done;){var r=n.value;r.id?this.edit(r):this.add(r)}}catch(n){t.e(n)}finally{t.f()}},updateDeletedPhoto:function(n){this.gallery.splice(this.gallery.findIndex((function(t){return t.path==n})))},loadCurrentObject:function(){var n=this;o().get("/api/".concat(this.$route.path.split("/")[2],"/get_one/").concat(this.$route.params.id)).then((function(t){n.currentObject=t.data}))},loadGallery:function(){var n=this;o().get("/api/gallery/get_photos/".concat(this.$route.path.split("/")[2],"/").concat(this.$route.params.id)).then((function(t){n.apiGallery=t.data,n.gallery=t.data,n.setLoading(!1)}))}},created:function(){"realizations"!=this.$route.path.split("/")[2]&&this.loadCurrentObject(),this.loadGallery(),this.setLoading(!0)}};var K=r(3368),q={insert:"head",singleton:!1};G()(K.Z,q);K.Z.locals;const N=(0,y.Z)(M,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("v-main",[r("v-container",[r("v-card",[r("v-card-title",{staticClass:"justify-content-center"},["undefined undefined"!=n.formTitle?r("h2",{staticClass:"pt-4 font-weight-bold panel-title-header first-color"},[n._v("\n          "+n._s("realizations"==n.$route.path.split("/")[2]?"Realizacje":"Galeria - "+n.formTitle)+"\n        ")]):n._e()]),n._v(" "),r("v-divider",{staticClass:"mt-0"}),n._v(" "),r("v-form",{ref:"form"},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"8"}},[r("div",{staticClass:"pa-5"},[r("div",{staticClass:"gallery-container"},[r("v-row",n._l(n.gallery,(function(t){return r("v-col",{key:t.path,attrs:{cols:"12",sm:"6",md:"4"}},[r("div",{staticClass:"position-relative"},[r("Picture",{attrs:{classImg:"img-fluid",src:n.getUrl(t.path)}}),n._v(" "),r("div",{staticClass:"close-icon-container"},[t.id?r("v-icon",{staticClass:"pr-1 pt-1 close-icon",attrs:{color:"grey"},on:{click:function(r){return n.destroy(t.id)}}},[n._v("mdi-close")]):n._e()],1)],1),n._v(" "),r("v-text-field",{attrs:{label:"Tekst alternatywny"},model:{value:t.photo_alt,callback:function(r){n.$set(t,"photo_alt",r)},expression:"photo.photo_alt"}})],1)})),1)],1)])]),n._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("div",{staticClass:"pa-5 d-flex flex-column justify-content-between"},[r("div",[r("GalleryPicker",{attrs:{apiGallery:n.apiGallery},on:{updateDeletedPhoto:n.updateDeletedPhoto,loadedImage:n.setImagePlaceholder}})],1)])])],1),n._v(" "),r("v-divider",{staticClass:"mb-0"}),n._v(" "),r("v-card-actions",{staticClass:"pa-4"},[r("v-btn",{staticClass:"mr-2",attrs:{disabled:0===n.gallery.length,color:"primary"},on:{click:n.send}},[r("v-icon",{attrs:{left:""}},[n._v("mdi-check")]),n._v(" "),r("span",[n._v("Zatwierdź")])],1),n._v(" "),r("v-btn",{staticClass:"mr-2",attrs:{color:"error"},on:{click:function(t){return n.$router.go(-1)}}},[r("v-icon",{attrs:{left:""}},[n._v("mdi-close")]),n._v(" "),r("span",[n._v("Anuluj")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=cms9.js.map