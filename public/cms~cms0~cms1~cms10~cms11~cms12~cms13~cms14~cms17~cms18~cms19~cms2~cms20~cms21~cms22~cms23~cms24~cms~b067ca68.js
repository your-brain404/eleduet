(window.webpackJsonp=window.webpackJsonp||[]).push([[0,40],{"55xf":function(t,e,n){"use strict";n("ZGTQ")},CkU6:function(t,e,n){"use strict";function i(t){return null!=t?window.location.origin+"/storage/media/"+t:""}n.d(e,"a",(function(){return i}))},H8yd:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"@media (min-width: 992px) {\n.file-picker {\n    overflow-y: unset !important;\n}\n}\n.file-picker__set-file-button .v-btn__content {\n  display: unset;\n  flex: unset;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.file-picker__photo {\n  cursor: pointer;\n  width: 100%;\n}\n.file-picker-pagination ul {\n  display: flex;\n  flex-wrap: wrap;\n}\n.file-picker-pagination li::before {\n  display: none;\n}\n@media (min-width: 992px) {\n.choose-file-row {\n    height: 80vh;\n}\n}\n@media (max-width: 992px) {\n.choose-file-row {\n    padding-top: 25px;\n}\n}\n.close-file-details-icon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translate(-100%, -100%);\n  z-index: 1;\n}\n@media (min-width: 992px) {\n.close-file-details-icon {\n    display: none !important;\n}\n}\n@media (max-width: 576px) {\n.close-file-details-icon {\n    transform: translate(-50%, -50%);\n}\n}\n.file-picker-file {\n  cursor: pointer;\n  word-break: break-all;\n}\n@media (min-width: 992px) {\n.files-container {\n    overflow-y: auto;\n    height: calc(80vh - 162px);\n}\n}\n.file-picker-menu {\n  position: fixed;\n  width: calc(100% - 24px * 2);\n  z-index: 1;\n  background: white;\n}\n@media (max-width: 992px) {\n.file-picker-menu {\n    position: -webkit-sticky;\n    position: sticky;\n    width: unset;\n    top: 0;\n}\n}\n.file-picker-close {\n  position: absolute !important;\n  top: 14%;\n  right: 2%;\n}\n.chosen-file-col {\n  padding: 3rem !important;\n}\n@media (min-width: 992px) {\n.chosen-file-col {\n    overflow-y: auto;\n    height: calc(80vh - 162px);\n}\n}\n@media (max-width: 992px) {\n.chosen-file-col {\n    position: fixed;\n    right: 0;\n    top: 5vh;\n    z-index: 1;\n    background: white;\n    width: 50% !important;\n    max-width: unset !important;\n    flex: unset !important;\n    overflow-y: auto;\n    height: 90vh;\n    box-shadow: 1px 1px 10px black;\n    transition: transform 0.5s ease;\n    transform: translateX(100%);\n}\n.chosen-file-col.mobile-show {\n    transform: translateX(0%);\n}\n}\n@media (max-width: 576px) {\n.chosen-file-col {\n    width: 280px !important;\n    padding: 1rem !important;\n}\n}\n.chosen-img-placeholder {\n  border: 2px solid #ebebeb;\n  padding: 1rem;\n}\n.chosen-file-container {\n  position: relative;\n}\n.chosen-file-container ul {\n  padding-left: 0 !important;\n  padding-top: 1rem;\n}\n.chosen-file__parameter {\n  margin-bottom: 0.5rem;\n}",""])},"I+0e":function(t,e,n){"use strict";n("z9dy")},L1sZ:function(t,e,n){"use strict";var i=n("vDqi"),o=n.n(i),r=n("WhGA"),a=n("q/Gb");function s(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o,r=!0,a=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){a=!0,o=t},f:function(){try{r||null==i.return||i.return()}finally{if(a)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var c={props:{imagesOnly:{type:Boolean,default:!1}},data:function(){var t=this;return{file:[],loading:!1,valid:!0,rules:[function(t){var e,n=[],i=s(t);try{for(i.s();!(e=i.n()).done;){var o=e.value;o.size>25e6&&n.push(o.name)}}catch(t){i.e(t)}finally{i.f()}return 0===n.length||"Pliki [".concat(n.join(", "),"] nie powinny być większe niż 25 MB!")},function(e){if(!t.imagesOnly)return!0;var n,i=[],o=s(e);try{for(o.s();!(n=o.n()).done;){var a=n.value;Object(r.a)(a.type)||i.push(a.name)}}catch(t){o.e(t)}finally{o.f()}return 0===i.length||"Pliki [".concat(i.join(", "),"] powinny być zdjęciami!")}]}},computed:{photoTypes:function(){return a.a.join(", ")}},methods:{submit:function(){var t=this;if(0!=this.file.length&&this.valid){this.loading=!0;for(var e=0;e<this.file.length;e++){var n=new FormData;n.append("file",this.file[e]),o.a.post("/api/media/add",n).then((function(e){t.loading=!1,t.$emit("loadFiles"),t.file=[],t.$store.commit("setSnackbar","Pomyślnie dodano!")})).catch((function(e){t.loading=!1,console.log(e),t.$store.commit("setSnackbar","Coś poszło nie tak...")}))}}}}},u=(n("I+0e"),n("KHd+")),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-row",{staticClass:"d-flex justify-content-center add-files-row"},[n("v-col",{attrs:{lg:"4",sm:"12",md:"6"}},[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-file-input",{attrs:{color:t.$store.getters.settings.first_color,id:"file",multiple:"","show-size":"",counter:"",label:"Pliki","prepend-icon":"mdi-files",rules:t.rules,accept:t.imagesOnly?t.photoTypes:""},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),t._v(" "),n("v-btn",{staticClass:"mt-3",attrs:{disabled:t.loading||!t.valid||0===t.file.length,loading:t.loading,color:"success"},on:{click:t.submit}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),n("span",[t._v("Wyślij")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"428d0585",null).exports,p=n("CkU6");var f=n("o0o1"),h=n.n(f),v=n("8hIN");function m(t,e,n,i,o,r,a){try{var s=t[r](a),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(i,o)}function g(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){m(r,i,o,a,s,"next",t)}function s(t){m(r,i,o,a,s,"throw",t)}a(void 0)}))}}function b(){return(b=g(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.clipboard.writeText(e);case 3:v.a.commit("setSnackbar","Skopiowano link do schowka!"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function y(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o,r=!0,a=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){a=!0,o=t},f:function(){try{r||null==i.return||i.return()}finally{if(a)throw o}}}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var _,x={props:{value:{type:String},title:{type:String},imagesOnly:{type:Boolean,default:!1}},data:function(){return{dialog:!1,tab:null,tabs:["Wybierz plik","Dodaj Nowe Pliki"],files:[],activeFile:0,multiple:!1,search:"",page:1,chosenFileColumnShow:!1,placeholder:"/storage/img/placeholder/250.png"}},components:{AddFiles:d},computed:{filteredFiles:function(){var t,e=[],n=y(this.files);try{for(n.s();!(t=n.n()).done;){var i=t.value;i.path.toLowerCase().includes(this.search.toLowerCase())&&e.push(i)}}catch(t){n.e(t)}finally{n.f()}return e.reverse().slice(12*(this.page-1),12*(this.page-1)+12)},chosenFile:function(){var t=this;return this.files.find((function(e){return e.id==t.activeFile}))}},watch:{value:"setInitialActiveFile",files:"setInitialActiveFile"},methods:{url:p.a,isPhoto:r.a,formatFileSize:function(t){return t>=1e6?(t/1e6).toFixed(2)+" MB":t>=1e3?(t/1e3).toFixed(2)+" kB":t+" B"},copyToClipboard:function(t){return b.apply(this,arguments)},setInitialActiveFile:function(){var t;this.files.length>0&&this.value&&(this.activeFile=null===(t=this.getFileByPath(this.value))||void 0===t?void 0:t.id)},clearActiveFile:function(){this.activeFile=0,this.$emit("input","")},isActiveFileDeleted:function(t){var e=this;this.value&&(this.files.find((function(n){return n.id==t&&t==e.activeFile}))&&(this.$emit("input",""),this.$store.dispatch("FormService/updateDeletedFile")))},loadFiles:function(){var t=this;o.a.get("/api/media/".concat(this.imagesOnly?"get_photos":"get_all")).then((function(e){t.files=e.data}))},deleteFile:function(t){var e=this;confirm("Czy na pewno?")&&o.a.delete("/api/media/delete/"+t).then((function(){e.isActiveFileDeleted(t),e.loadFiles(),e.chosenFileColumnShow=!1})).catch((function(t){return console.log(t)}))},getFileByPath:function(t){return this.files.find((function(e){return e.path===t}))},sendFilePathToPlaceholder:function(){var t,e=null===(t=this.chosenFile)||void 0===t?void 0:t.path;e&&this.$emit("input",e)},setFileClass:function(t){this.activeFile=t,this.chosenFileColumnShow=!0,this.sendFilePathToPlaceholder()}},created:function(){this.loadFiles()}},k=(n("55xf"),Object(u.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"mt-5 mb-2 px-3",attrs:{justify:"center"}},[t.chosenFile?n("v-col",{staticClass:"\n      w-100\n      d-flex\n      flex-column\n      justify-content-between\n      align-items-center\n      px-0\n    "},[t.isPhoto(t.chosenFile.type)?n("img",{attrs:{width:"100%",src:t.value?t.url(t.value):t.placeholder}}):t._e(),t._v(" "),n("div",{staticClass:"d-flex align-items-center justify-content-between w-100"},[n("a",{attrs:{target:"_blank",href:t.value}},[n("div",[t._v("\n          "+t._s(t.value.split("/")[t.value.split("/").length-1])+"\n        ")])]),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:t.clearActiveFile}},[n("v-icon",{attrs:{right:""}},[t._v("mdi-close")])],1)],1)]):t._e(),t._v(" "),n("v-dialog",{attrs:{"content-class":"file-picker",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"w-100",attrs:{color:t.$store.getters.settings.first_color,dark:""}},"v-btn",o,!1),i),[t._v("\n        "+t._s(t.title?t.title:"Dodaj plik")+"\n      ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("div",{staticClass:"file-picker-menu"},[n("v-card-title",{staticClass:"d-flex justify-content-between position-relative"},[n("div",{staticClass:"d-flex align-items-center flex-wrap"},[n("div",[t._v("FilePicker"+t._s(t.title?" - "+t.title:""))]),t._v(" "),n("div",{staticClass:"ml-3"},[n("v-text-field",{attrs:{label:"Szukaj","prepend-icon":"mdi-magnify"},on:{change:t.searchPhoto},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]),t._v(" "),n("v-icon",{staticClass:"file-picker-close",on:{click:function(e){t.dialog=!1}}},[t._v("mdi-close")])],1),t._v(" "),n("v-tabs",{attrs:{"background-color":"primary",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.tabs,(function(e){return n("v-tab",{key:e},[t._v("\n            "+t._s(e)+"\n          ")])})),1)],1),t._v(" "),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-card-text",{staticClass:"p-0"},[n("div",{staticClass:"mx-0"},[n("div",{staticClass:"row mx-0 choose-file-row",staticStyle:{"align-items":"end"}},[n("v-col",{staticStyle:{"align-items":"flex-end",display:"flex"},attrs:{cols:"12",lg:"8",md:"8"}},[n("v-row",{staticClass:"d-flex align-items-center pa-5 files-container"},[t._l(t.filteredFiles,(function(e){return n("v-col",{key:e.id,staticClass:"\n                          d-flex\n                          file-picker-col\n                          align-items-between\n                          flex-column\n                        ",attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},["image"==e.type.split("/")[0]?n("img",{staticClass:"file-picker__photo",attrs:{loading:"lazy",src:t.url(e.path)},on:{click:function(n){return t.setFileClass(e.id)}}}):n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(i){var o=i.on,r=i.attrs;return[n("v-btn",t._g(t._b({staticClass:"file-picker__set-file-button white--text",attrs:{color:t.$store.getters.settings.first_color},on:{click:function(n){return t.setFileClass(e.id)}}},"v-btn",r,!1),o),[n("v-icon",{attrs:{left:""}},[t._v("mdi-file")]),t._v(" "),n("span",[t._v(t._s(e.path.split("/")[1]))])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.path.split("/")[1]))])])],1)})),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-pagination",{staticClass:"file-picker-pagination",attrs:{length:Math.ceil(t.files.length/12)},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],2),t._v(" "),n("v-row")],1),t._v(" "),n("v-col",{staticClass:"chosen-file-col",class:{"mobile-show":t.chosenFileColumnShow},attrs:{lg:"4",cols:"12",md:"4"}},[t.chosenFile?n("div",{staticClass:"chosen-file-container"},[n("v-icon",{staticClass:"close-file-details-icon",attrs:{color:"black"},on:{click:function(e){t.chosenFileColumnShow=!1}}},[t._v("mdi-close")]),t._v(" "),n("div",{staticClass:"\n                          d-flex\n                          justify-content-between\n                          align-items-center\n                        "},[n("h4",[t._v("Wybrany plik:")]),t._v(" "),n("u",{staticClass:"text-danger",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.deleteFile(t.chosenFile.id)}}},[t._v("Usuń")])]),t._v(" "),t.isPhoto(t.chosenFile.type)?n("img",{staticClass:"img-fluid chosen-img-placeholder",attrs:{src:t.url(t.chosenFile.path),alt:""}}):t._e(),t._v(" "),n("v-btn",{staticClass:"w-100 mt-2 mb-5",attrs:{color:"success"},on:{click:function(e){t.dialog=!1}}},[n("v-icon",{staticClass:"check-icon",attrs:{left:"",color:"white"}},[t._v("mdi-check")]),t._v("\n                        Zatwierdź\n                      ")],1),t._v(" "),n("ul",[n("li",{staticClass:"chosen-file__parameter"},[n("a",{attrs:{target:"_blank",href:t.url(t.chosenFile.path)}},[n("v-btn",{staticClass:"white--text",attrs:{color:t.$store.getters.settings.first_color}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),n("span",[t._v("PODGLĄD")])],1)],1)]),t._v(" "),n("li",[t._v("Nazwa: "+t._s(t.chosenFile.name))]),t._v(" "),n("li",{staticStyle:{"word-break":"break-all"}},[t._v("\n                          Ścieżka: "+t._s(t.chosenFile.path)+"\n                        ")]),t._v(" "),n("li",[t._v("\n                          Rozmiar: "+t._s(t.formatFileSize(t.chosenFile.size))+"\n                        ")]),t._v(" "),t.chosenFile.width?n("li",[t._v("\n                          Szerokość: "+t._s(t.chosenFile.width)+"px\n                        ")]):t._e(),t._v(" "),t.chosenFile.height?n("li",[t._v("\n                          Wysokość: "+t._s(t.chosenFile.height)+"px\n                        ")]):t._e(),t._v(" "),n("li",[t._v("Typ: "+t._s(t.chosenFile.type))]),t._v(" "),n("li",[t._v("\n                          Data utworzenia:\n                          "+t._s(new Date(t.chosenFile.created_at).toLocaleString())+"\n                        ")]),t._v(" "),n("li",[n("v-btn",{staticClass:"white--text",attrs:{color:t.$store.getters.settings.first_color},on:{click:function(e){t.copyToClipboard(t.url(t.chosenFile.path))}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-content-copy")]),n("span",[t._v("KOPIUJ LINK")])],1)],1)])],1):t._e()])],1)])])],1)],1),t._v(" "),n("v-tab-item",[n("AddFiles",{attrs:{"images-only":t.imagesOnly},on:{loadFiles:t.loadFiles}})],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports),C={props:["tags"],data:function(){return{activator:null,attach:null,editing:null,index:-1,menu:!1,model:[],items:[],x:0,search:null,y:0}},methods:{deleteTag:function(t){this.model.splice(this.model.indexOf(t),1),t.id&&o.a.delete("/api/news_tags/delete/".concat(t.id))}},watch:{tags:function(){this.tags&&(this.model=this.tags)},model:function(t,e){t.length!==e.length&&(this.model=t.map((function(t){return"string"==typeof t&&(t={text:t}),t})),this.$emit("tags",this.model))}}},F=Object(u.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-combobox",{attrs:{"hide-no-data":!t.search,"search-input":t.search,"hide-selected":"",label:"Tagi",multiple:"","small-chips":"","append-icon":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},scopedSlots:t._u([{key:"selection",fn:function(e){var i=e.attrs,o=e.item,r=(e.parent,e.selected);return[n("v-chip",t._b({attrs:{color:"primary lighten-3","input-value":r,label:"",small:""}},"v-chip",i,!1),[n("span",{staticClass:"pr-2"},[t._v("\n        "+t._s(o.text)+"\n      ")]),t._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteTag(o)}}},[t._v("mdi-close")])],1)]}}]),model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})}),[],!1,null,null,null).exports,j=n("2prP"),S=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],$=function(t){return-1!==S.map((function(t){return t.toLowerCase()})).indexOf(t.toLowerCase())},O=function(t,e,n){var i=e.$props.value?e.$props.value:"",o=e.$props.initialValue?e.$props.initialValue:"";n.setContent(i||(e.initialized?e.cache:o)),e.$watch("value",(function(t,i){n&&"string"==typeof t&&t!==i&&t!==n.getContent({format:e.$props.outputFormat})&&n.setContent(t)})),e.$listeners.input&&function(t,e){var n=t.$props.modelEvents?t.$props.modelEvents:null,i=Array.isArray(n)?n.join(" "):n;e.on(i||"change input undo redo",(function(){t.$emit("input",e.getContent({format:t.$props.outputFormat}))}))}(e,n),function(t,e,n){Object.keys(e).filter($).forEach((function(i){var o=e[i];"function"==typeof o&&("onInit"===i?o(t,n):n.on(i.substring(2),(function(t){return o(t,n)})))}))}(t,e.$listeners,n),e.initialized=!0},P=0,A=function(t){var e=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++P+String(e)},D=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},z=function(){return{listeners:[],scriptId:A("tiny-script"),scriptLoaded:!1}},E=(_=z(),{load:function(t,e,n){_.scriptLoaded?n():(_.listeners.push(n),t.getElementById(_.scriptId)||function(t,e,n,i){var o=e.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=t,o.src=n;var r=function(){o.removeEventListener("load",r),i()};o.addEventListener("load",r),e.head&&e.head.appendChild(o)}(_.scriptId,t,e,(function(){_.listeners.forEach((function(t){return t()})),_.scriptLoaded=!0})))},reinitialize:function(){_=z()}}),I=n("xKn5"),T={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(t){return"html"===t||"text"===t}}},B=function(){return(B=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},M=function(t){return function(){var e,n,i,o=B(B({},t.$props.init),{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(e=t.$props.init&&t.$props.init.plugins,n=t.$props.plugins,D(e).concat(D(n))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(e){t.editor=e,e.on("init",(function(n){return O(n,t,e)})),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(e)}});null!==(i=t.element)&&"textarea"===i.tagName.toLowerCase()&&(t.element.style.visibility="",t.element.style.display=""),Object(I.a)().init(o)}},L={components:{editor:{props:T,created:function(){this.elementId=this.$props.id||A("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline,this.initialized=!1},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(I.a)())M(this)();else if(this.element&&this.element.ownerDocument){var t=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"no-api-key",n=null==this.$props.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+e+"/tinymce/"+t+"/tinymce.min.js":this.$props.tinymceScriptSrc;E.load(this.element.ownerDocument,n,M(this))}},beforeDestroy:function(){null!==Object(I.a)()&&Object(I.a)().remove(this.editor)},deactivated:function(){var t;this.inlineEditor||(this.cache=this.editor.getContent(),null===(t=Object(I.a)())||void 0===t||t.remove(this.editor))},activated:function(){!this.inlineEditor&&this.initialized&&M(this)()},render:function(t){return this.inlineEditor?function(t,e,n){return t(n||"div",{attrs:{id:e}})}(t,this.elementId,this.$props.tagName):function(t,e){return t("textarea",{attrs:{id:e},style:{visibility:"hidden"}})}(t,this.elementId)}}},props:["value"],watch:{value:function(){this.$emit("input",this.value)}}},R=Object(u.a)(L,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("editor",{attrs:{"api-key":"m22xj0x6h1pgqb681evsy9sxvg1fgl2qktcekp6e5ef3ni2z",init:{height:500,menubar:!0,plugins:["a11ychecker","advlist","advcode","advtable","autolink","checklist","export","lists","link","image","charmap","preview","anchor","searchreplace","visualblocks","powerpaste","fullscreen","formatpainter","insertdatetime","media","table","help","wordcount"],toolbar:"undo redo | casechange blocks | bold italic backcolor |          alignleft aligncenter alignright alignjustify |          bullist numlist checklist outdent indent | removeformat | a11ycheck code table help"}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})}),[],!1,null,null,null).exports;function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(Object(n),!0).forEach((function(e){K(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function K(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a={components:{TagsInput:F,VueEditor:R,FilePicker:k},data:function(){return{valid:!0,name:"",rules:{titleRules:[function(t){return!!t||"To pole jest wymagane!"}],positiveRules:[function(t){return t>0||"To pole musi być większe od zera!"}],nonNegativeRules:[function(t){return t>-1||"To pole nie może być ujemne!"}],priceRules:[function(t){return 1e3*t%10==0||"To pole musi mieć max. dwa miejsca po przecinku!"}],amountRules:[function(t){return t%1==0||"To pole musi być liczbą całkowitą!"}]},activeFile:"",parent:{}}},computed:{currentObject:{get:function(){return this.$store.state.FormService.currentObject},set:function(t){this.$store.commit("FormService/setCurrentObject",t)}},formTitle:function(){return this.$route.params.id?"Edycja":"Dodawanie"},parentTable:function(){var t=this,e="";return Object.entries(j.a).forEach((function(n){n[1].forEach((function(i){i.tablename==t.$route.path.split("/")[2]&&(e=n[1][0].parent?n[1][0].parent:"")}))})),e}},methods:{getUrl:function(t){return Object(p.a)(t)},getParent:function(){var t=this;o.a.get("/api/".concat(this.parentTable,"/get_one/").concat(this.$route.params.parent_id)).then((function(e){return t.parent=e.data})).catch((function(t){return console.log(t)}))},getImageDefaultPlaceholder:function(){return window.location.origin+"/storage/img/placeholder/250.png"},add:function(t){this.$store.dispatch("FormService/add",{formData:t})},edit:function(t,e){this.$store.dispatch("FormService/edit",{formData:t,options:e})},validate:function(){this[this.$route.params.id?"edit":"add"](this.currentObject)},updateDeletedPhoto:function(){this.$route.params.id&&this.edit(this.currentObject,{redirect:!1})},secureRoutes:function(){var t=JSON.parse(localStorage.getItem("user")),e=!1;t&&("Admin"!=t.type&&"Moderator"!=t.type||(e=!0)),e||this.$router.push("/admin-panel/".concat(this.$route.path.split("/")[2]))}},created:function(){var t=this;this.$route.params.id&&o.a.get("/api/".concat(this.$route.path.split("/")[2],"/get_one/").concat(this.$route.params.id)).then((function(e){t.activePhoto=null!==e.data.photo?Object(p.a)(e.data.photo):t.activePhoto,t.activeFile=null!==e.data.file?Object(p.a)(e.data.file):t.activeFile,t.currentObject=G(G({},t.currentObject),e.data)})),this.$route.params.parent_id&&this.getParent(),this.secureRoutes()}}},Qwyy:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"@media (min-width: 992px) {\n.add-files-row[data-v-428d0585] {\n    padding-top: 150px;\n    overflow-y: auto;\n    max-height: 80vh;\n}\n}",""])},WhGA:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("q/Gb");function o(t){return i.a.includes(t)}},ZGTQ:function(t,e,n){var i=n("H8yd");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,o);i.locals&&(t.exports=i.locals)},"q/Gb":function(t,e,n){"use strict";e.a=["image/jpeg","image/jpg","image/png","image/svg","image/jfif","image/webp","image/svg+xml","image/bmp","image/gif"]},xKn5:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var i=function(){return"undefined"!=typeof window?window:t},o=function(){var t=i();return t&&t.tinymce?t.tinymce:null}}).call(this,n("yLpj"))},z9dy:function(t,e,n){var i=n("Qwyy");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,o);i.locals&&(t.exports=i.locals)}}]);
//# sourceMappingURL=cms~cms0~cms1~cms10~cms11~cms12~cms13~cms14~cms17~cms18~cms19~cms2~cms20~cms21~cms22~cms23~cms24~cms~b067ca68.js.map