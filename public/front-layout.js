(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"4+qJ":function(t,n,e){var i=e("AM7Y");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(t.exports=i.locals)},"9aL7":function(t,n,e){"use strict";e.r(n);var i={components:{Picture:e("oZ+c").a},data:function(){return{origin:window.location.origin}},computed:{currentSubpage:function(){return this.$store.getters.currentSubpage},title:function(){var t;return null===(t=this.currentSubpage)||void 0===t?void 0:t.title},height:function(){var t;return null===(t=this.currentSubpage)||void 0===t?void 0:t.height},heightMd:function(){var t;return null===(t=this.currentSubpage)||void 0===t?void 0:t.height_md},heightLg:function(){var t;return null===(t=this.currentSubpage)||void 0===t?void 0:t.height_lg},backgroundPosition:function(){var t;return null===(t=this.currentSubpage)||void 0===t?void 0:t.photo_background_position},photo:function(){var t;return null===(t=this.currentSubpage)||void 0===t?void 0:t.photo},alt:function(){var t;return null===(t=this.currentSubpage)||void 0===t?void 0:t.photo_alt},photoSizes:function(){var t;return null===(t=this.currentSubpage)||void 0===t?void 0:t.photo_sizes}}},o=(e("EbVG"),e("KHd+")),r=Object(o.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.title?e("section",{staticClass:"banner position-relative"},[e("style",{tag:"component"},[t._v("\n    .banner { height: "+t._s(t.height)+"px; } @media(min-width: 768px) { .banner {\n    height: "+t._s(t.heightMd)+"px; } } @media(min-width: 992px) { .banner { height:\n    "+t._s(t.heightLg)+"px; } }\n  ")]),t._v(" "),e("Picture",{staticClass:"w-100 h-100",attrs:{width:t.photoSizes.width,height:t.photoSizes.width,alt:t.alt,src:t.origin+"/storage/media/"+t.photo,styleImg:{"object-position":t.backgroundPosition,"object-fit":"cover"},classImg:"img-fluid h-100"}}),t._v(" "),e("div",{staticClass:"mask"}),t._v(" "),e("div",{staticClass:"content"},[t._v("\n    "+t._s(t.title)+"\n  ")])],1):t._e()}),[],!1,null,"73ef4994",null);n.default=r.exports},A9PO:function(t,n,e){var i=e("G91x");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(t.exports=i.locals)},AM7Y:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,"section.banner[data-v-73ef4994] {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 100%;\n  position: relative;\n}\nsection.banner .mask[data-v-73ef4994] {\n  background: transparent linear-gradient(90deg, #000000 -5%, #00000000 41%) 0% 0% no-repeat padding-box;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n}\nsection.banner .content[data-v-73ef4994] {\n  color: white;\n  font-weight: 700;\n  font-size: 2.4rem;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  z-index: 2;\n  padding: 2.7rem var(--global-padding-x-desktop);\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 992px) {\nsection.banner .content[data-v-73ef4994] {\n    padding-left: var(--global-padding-x-mobile);\n}\n}",""])},BfAV:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var i=e("8hIN"),o=e("LIyq"),r=e("qtsS");function s(t){var n=Object(r.a)(t);return i.a.state.Settings.settings.destroy_primal_photo&&o.a.includes(n)?"".concat(t,".webp"):t}},CkU6:function(t,n,e){"use strict";function i(t){return null!=t?window.location.origin+"/storage/media/"+t:""}e.d(n,"a",(function(){return i}))},EbVG:function(t,n,e){"use strict";e("4+qJ")},G91x:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,"section.footer {\n  background-color: var(--first-color);\n}\nsection.footer .content {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 3rem var(--global-padding-x-desktop);\n}\n@media (max-width: 992px) {\nsection.footer .content {\n    padding-bottom: 0;\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.footer .content section.descriptions {\n  width: 33.33%;\n}\n@media (max-width: 992px) {\nsection.footer .content section.descriptions {\n    width: 100%;\n    margin-bottom: 2rem;\n}\n}\nsection.footer .content section.descriptions .logo {\n  height: 80px;\n  width: auto;\n  filter: invert(1);\n  margin-bottom: 0.7rem;\n}\nsection.footer .content section.descriptions .footer-logo-separator {\n  border-color: var(--first-color);\n  border-width: 2px;\n}\nsection.footer .content section.descriptions .description {\n  color: #ece9f5;\n  font-size: 1.1rem;\n  line-height: 25px;\n}\nsection.footer .content section.links {\n  width: 66.67%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n@media (max-width: 992px) {\nsection.footer .content section.links {\n    width: 100%;\n    justify-content: center;\n    flex-direction: column;\n}\n}\n@media (max-width: 992px) {\nsection.footer .content section.links .column {\n    margin-bottom: 1rem;\n}\n}\n@media (min-width: 992px) {\nsection.footer .content section.links .column {\n    max-width: 300px;\n}\n}\nsection.footer .content section.links .column h4 {\n  font-size: 1.5rem;\n  color: white;\n}\nsection.footer .content section.links .column ul {\n  list-style-type: none;\n  padding-left: 0;\n}\nsection.footer .content section.links .column ul li {\n  color: inherit;\n  font-size: 1.1rem;\n}\nsection.footer .content section.links .column ul li::before {\n  display: none;\n}\nsection.footer .content section.links .column ul li a {\n  color: #ece9f5;\n}\nsection.footer .content section.links .column ul li.bold {\n  font-weight: 700;\n}\nsection.footer .footer-separator {\n  border-color: var(--first-color);\n  border-width: 2px;\n  margin-bottom: 0;\n}\nsection.footer .copyright {\n  padding: 2rem var(--global-padding-x-desktop);\n  color: #e4ddeb;\n  font-size: 1rem;\n}\n@media (max-width: 992px) {\nsection.footer .copyright {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}",""])},"I+13":function(t,n,e){"use strict";e("L5w9")},K3Ns:function(t,n,e){"use strict";e.r(n);var i=e("CkU6"),o={data:function(){return{url:i.a,sheet:!0}},methods:{accept:function(){this.sheet=!1,sessionStorage.setItem("cookies",!0)}},created:function(){this.sheet=!sessionStorage.getItem("cookies")}},r=e("KHd+"),s=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center"},[e("v-bottom-sheet",{model:{value:t.sheet,callback:function(n){t.sheet=n},expression:"sheet"}},[e("v-sheet",{staticClass:"pa-3 align-items-center d-flex justify-content-between"},[e("div",{staticClass:"pr-3"},[t._v("\n                "+t._s(t.$store.getters.settings.cookies)),e("a",{attrs:{target:"_blank",href:t.url(t.$store.getters.settings.privace_policy)}},[t._v(t._s(" "+t.$store.getters.settings.cookies_privace_button))])]),t._v(" "),e("v-btn",{attrs:{color:"primary"},on:{click:t.accept}},[t._v(t._s(t.$store.getters.settings.cookies_button))])],1)],1)],1)}),[],!1,null,null,null);n.default=s.exports},L5w9:function(t,n,e){var i=e("MLkc");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(t.exports=i.locals)},LIyq:function(t,n,e){"use strict";n.a=["jpg","png","jpeg","jfif"]},MLkc:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,"\npicture {\r\n  display: block;\n}\r\n",""])},Tg2p:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,"section.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem var(--global-padding-x-desktop);\n  height: 100%;\n}\n@media (max-width: 992px) {\nsection.header {\n    flex-wrap: wrap;\n    height: unset;\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.header .logo {\n  height: 60px;\n  width: auto;\n}\n@media (max-width: 992px) {\nsection.header .logo {\n    order: 1;\n}\n}\nsection.header .phone {\n  display: flex;\n  align-items: center;\n  padding: 0.7rem 1.3rem;\n  border-radius: var(--global-border-radius);\n  transition: 0.2s background-color;\n  color: black;\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n@media (max-width: 992px) {\nsection.header .phone {\n    order: 4;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    justify-content: center;\n}\n}\nsection.header .phone .phone-icon {\n  height: 18px;\n  padding-right: 1.2rem;\n}\nsection.header .phone:hover {\n  background-color: var(--first-color);\n  color: white;\n}\nsection.header .phone:hover img {\n  filter: invert(1);\n}\nsection.header ul {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0;\n  height: 100%;\n  padding-left: 0;\n}\n@media (max-width: 992px) {\nsection.header ul {\n    order: 3;\n    width: 100%;\n    flex-direction: column;\n    align-items: flex-start;\n    padding-top: 1rem;\n}\n}\nsection.header ul > a {\n  height: 100%;\n}\nsection.header ul li {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  color: #000;\n  font-size: 1.1rem;\n  font-weight: 500;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n  transition: 0.2s color;\n}\nsection.header ul li::before {\n  display: none;\n}\n@media (max-width: 992px) {\nsection.header ul li {\n    padding: 0.5rem;\n}\nsection.header ul li .border-line {\n    transform: unset !important;\n}\n}\nsection.header ul li:hover {\n  color: var(--first-color);\n}\nsection.header ul li:hover .border-line {\n  opacity: 1;\n}\nsection.header ul li .border-line {\n  transition: 0.2s opacity;\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  height: 0.3rem;\n  width: 100%;\n  transform: translateY(calc(-1.5rem - 0.1rem));\n  background-color: var(--first-color);\n  border-bottom-left-radius: var(--global-border-radius);\n  border-bottom-right-radius: var(--global-border-radius);\n}\nsection.header .hamburger-menu {\n  color: black;\n  height: 20px;\n  display: none;\n}\n@media (max-width: 992px) {\nsection.header .hamburger-menu {\n    display: block;\n    order: 2;\n}\n}",""])},TyTJ:function(t,n,e){"use strict";e.r(n);var i=e("CkU6"),o={components:{Picture:e("oZ+c").a},data:function(){return{origin:window.location.origin,showMobileMenu:!1,windowWidth:window.innerWidth}},computed:{subpages:function(){return this.$store.getters.subpages},settings:function(){return this.$store.getters.settings},contact:function(){return this.$store.getters.contact},isScreenMobileDevice:function(){return this.windowWidth<=992},showCollapseMenuClasses:function(){return!this.isScreenMobileDevice||this.showMobileMenu}},methods:{url:i.a,showMobileMenuHandler:function(){this.showMobileMenu=!this.showMobileMenu},onResize:function(){this.windowWidth=window.innerWidth}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},r=(e("vrVn"),e("KHd+")),s=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"header"},[e("router-link",{staticStyle:{"min-width":"139px"},attrs:{to:"/"}},[e("Picture",{attrs:{width:t.settings.photo_sizes.width,height:t.settings.photo_sizes.height,alt:t.settings.photo_alt,classImg:"logo",src:t.origin+"/storage/media/"+t.settings.photo,webp:!1}})],1),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.showCollapseMenuClasses,expression:"showCollapseMenuClasses"}]},t._l(t.subpages.filter((function(t){return"/"!==t.page})),(function(n,i){return e("router-link",{key:"subpage-"+i,attrs:{to:""+n.page}},[e("li",[e("div",{staticClass:"border-line"}),t._v("\n        "+t._s(n.title)+"\n      ")])])})),1),t._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:t.showCollapseMenuClasses,expression:"showCollapseMenuClasses"}],staticClass:"phone",attrs:{href:"tel:"+t.contact.phone_1}},[e("Picture",{attrs:{width:"37",height:"18",alt:"phone-icon",classImg:"phone-icon",src:t.origin+"/storage/img/layout/phone.svg",webp:!1}}),t._v("\n\n    "+t._s(t.contact.phone_1)+"\n  ")],1),t._v(" "),e("Picture",{class:"hamburger-menu",attrs:{width:"17",height:"20",alt:"hamburger-menu",src:t.origin+"/storage/img/layout/hamburger-menu.svg",webp:!1},on:{click:t.showMobileMenuHandler}})],1)}),[],!1,null,null,null);n.default=s.exports},Vl2w:function(t,n,e){var i=e("Tg2p");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(t.exports=i.locals)},WRjN:function(t,n,e){"use strict";e("A9PO")},"oZ+c":function(t,n,e){"use strict";var i=e("LIyq"),o=e("BfAV"),r=e("qtsS"),s={data:function(){return{error:!1}},props:{mobileVersion:{type:[String,Number],default:""},src:{type:String,default:""},webp:{type:Boolean,default:!0},loading:{type:String,default:"lazy"},alt:String,classImg:String,styleImg:String,width:String,height:String},computed:{isWebpType:function(){var t=new RegExp(".(".concat(i.a.join("|"),")$"),"i");return this.src.match(t)},webpSrc:function(){return this.isWebpType&&"".concat(this.src,".webp")},srcEncodeExtension:function(){return this.getExtensionFromPath(this.srcEncode)},srcEncode:function(){return this.webp?Object(o.a)(encodeURI(this.src)):encodeURI(this.src)}},methods:{existingPhotoPath:o.a,getExtensionFromPath:r.a,imgError:function(){!1===this.error&&(this.error=!0)},srcEncodeCustomWidth:function(t){var n=this.src.split("/"),e=n.slice(-1);return n.slice(0,n.length-1).join("/")+"/width_".concat(t,"_").concat(e)},webpSrcCustomWidth:function(t){return this.isWebpType&&this.srcEncodeCustomWidth(t)+".webp"}}},a=(e("I+13"),e("KHd+")),c=Object(a.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("picture",[t.webp&&t.isWebpType?e("source",{attrs:{srcset:t.webpSrc,type:"image/webp",media:t.mobileVersion?"(min-width: "+(t.mobileVersion+1)+"px)":""}}):t._e(),t._v(" "),t.webp&&t.isWebpType&&t.mobileVersion?e("source",{attrs:{srcset:t.webpSrcCustomWidth(t.mobileVersion),media:t.mobileVersion?"(max-width: "+t.mobileVersion+"px)":"",type:"image/webp"}}):t._e(),t._v(" "),"webp"!=t.srcEncodeExtension?e("source",{attrs:{srcset:t.srcEncode,media:t.mobileVersion?"(min-width: "+(t.mobileVersion+1)+"px)":""}}):t._e(),t._v(" "),t.mobileVersion&&"webp"!=t.srcEncodeExtension?e("source",{attrs:{srcset:t.srcEncodeCustomWidth(t.mobileVersion),media:t.mobileVersion?"(max-width: "+t.mobileVersion+"px)":""}}):t._e(),t._v(" "),e("img",{class:t.classImg,style:t.styleImg,attrs:{loading:t.loading,src:t.srcEncode,alt:t.alt,width:t.width,height:t.height},on:{click:function(n){return t.$emit("click")},error:t.imgError}})])}),[],!1,null,null,null);n.a=c.exports},qtsS:function(t,n,e){"use strict";function i(t){return t?t.split(".").slice(-1).join(""):""}e.d(n,"a",(function(){return i}))},vrVn:function(t,n,e){"use strict";e("Vl2w")},xfRZ:function(t,n,e){"use strict";e.r(n);var i={components:{Picture:e("oZ+c").a},data:function(){return{origin:window.location.origin}},computed:{subpages:function(){return this.$store.getters.subpages},contact:function(){return this.$store.getters.contact},settings:function(){return this.$store.getters.settings}}},o=(e("WRjN"),e("KHd+")),r=Object(o.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return Object.entries(t.settings).length>0?e("section",{staticClass:"footer"},[t._e(),t._v(" "),e("div",{staticClass:"content"},[e("section",{staticClass:"descriptions"},[e("router-link",{attrs:{to:{name:"Main"}}},[e("Picture",{attrs:{src:t.origin+"/storage/media/"+t.settings.photo,alt:t.settings.photo_alt,width:t.settings.photo_sizes.width,height:t.settings.photo_sizes.height,classImg:"logo",webp:!1,"mobile-version":576}})],1),t._v(" "),e("hr",{staticClass:"footer-logo-separator"}),t._v(" "),e("div",{staticClass:"description",domProps:{innerHTML:t._s(t.settings.description)}})],1),t._v(" "),e("section",{staticClass:"links"},[e("div",{staticClass:"column"},[e("h4",[t._v("Menu")]),t._v(" "),e("ul",t._l(t.subpages.filter((function(t){return"/"!==t.page})),(function(n,i){return e("li",{key:"footer-subpage-"+i},[e("router-link",{attrs:{to:n.page}},[t._v(t._s(n.title))])],1)})),0)]),t._v(" "),e("div",{staticClass:"column"},[e("h4",[t._v(t._s(t.settings.company))]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"tel:"+t.contact.phone_1}},[t._v(t._s(t.contact.phone_1))])]),t._v(" "),e("li",[e("a",{attrs:{href:"mailto:"+t.contact.email_1}},[t._v(t._s(t.contact.email_1))])]),t._v(" "),e("li",[e("a",{attrs:{target:"_blank",href:"https://www.google.com/search?tbm=lcl&sxsrf=ALeKk03R-n9i9FnjZJDGGG_KGJOJQtjFRQ%3A1604163272211&ei=yJadX-mpDJKJrwT3w42AAg&q="+t.contact.address+",+"+t.contact.zip_code+"+"+t.contact.city+"&oq=bilard+&gs_l=psy-ab.3.0.35i39k1j0i67k1j0l8.10333.16284.0.16901.13.13.0.0.0.0.190.1120.0j7.7.0....0...1c.1.64.psy-ab..6.7.1120...46j0i433i131k1j46i67k1j0i433i67k1j0i10k1j0i203k1j0i433k1.0.d23hfgOs4ts#rlfi=hd:;si:9035433236648356783;mv:[[51.390375377319025,16.199153519032567],[51.39001542268097,16.19857668096743]]"}},[t._v(t._s((t.contact.address||"")+", "+(t.contact.zip_code||"")+" "+(t.contact.city||"")))])])])])])]),t._v(" "),e("hr",{staticClass:"footer-separator"}),t._v(" "),e("div",{staticClass:"copyright"},[t._v("\n    Copyright Ⓒ by "+t._s(t.settings.company)+". All rights reserved.\n  ")])]):t._e()}),[],!1,null,null,null);n.default=r.exports}}]);
//# sourceMappingURL=front-layout.js.map