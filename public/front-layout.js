(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"9aL7":function(n,t,e){"use strict";e.r(t);var o={data:function(){return{origin:window.location.origin}},computed:{currentSubpage:function(){return this.$store.getters.currentSubpage},title:function(){var n;return null===(n=this.currentSubpage)||void 0===n?void 0:n.title},backgroundPosition:function(){var n;return null===(n=this.currentSubpage)||void 0===n?void 0:n.photo_background_position},photo:function(){var n;return null===(n=this.currentSubpage)||void 0===n?void 0:n.photo}}},i=(e("HF6x"),e("KHd+")),s=Object(i.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.title?e("section",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:n.origin+"/storage/media/"+n.photo,expression:"`${origin}/storage/media/${photo}`",arg:"background-image"}],staticClass:"banner",style:{"background-position":n.backgroundPosition}},[e("div",{staticClass:"mask"}),n._v(" "),e("div",{staticClass:"content"},[n._v("\n    "+n._s(n.title)+"\n  ")])]):n._e()}),[],!1,null,"08499934",null);t.default=s.exports},A9PO:function(n,t,e){var o=e("G91x");"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(n.exports=o.locals)},CkU6:function(n,t,e){"use strict";function o(n){return null!=n?window.location.origin+"/storage/media/"+n:""}e.d(t,"a",(function(){return o}))},G91x:function(n,t,e){(n.exports=e("I1BE")(!1)).push([n.i,"section.footer {\n  background-color: var(--first-color);\n}\nsection.footer .content {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 3rem var(--global-padding-x-desktop);\n}\n@media (max-width: 992px) {\nsection.footer .content {\n    padding-bottom: 0;\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.footer .content section.descriptions {\n  width: 33.33%;\n}\n@media (max-width: 992px) {\nsection.footer .content section.descriptions {\n    width: 100%;\n    margin-bottom: 2rem;\n}\n}\nsection.footer .content section.descriptions .logo {\n  height: 80px;\n  filter: invert(1);\n  margin-bottom: 0.7rem;\n}\nsection.footer .content section.descriptions .footer-logo-separator {\n  border-color: var(--first-color);\n  border-width: 2px;\n}\nsection.footer .content section.descriptions .description {\n  color: #ece9f5;\n  font-size: 1.1rem;\n  line-height: 25px;\n}\nsection.footer .content section.links {\n  width: 66.67%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n@media (max-width: 992px) {\nsection.footer .content section.links {\n    width: 100%;\n    justify-content: center;\n    flex-direction: column;\n}\n}\n@media (max-width: 992px) {\nsection.footer .content section.links .column {\n    margin-bottom: 1rem;\n}\n}\n@media (min-width: 992px) {\nsection.footer .content section.links .column {\n    max-width: 300px;\n}\n}\nsection.footer .content section.links .column h4 {\n  font-size: 1.5rem;\n  color: white;\n}\nsection.footer .content section.links .column ul {\n  list-style-type: none;\n  padding-left: 0;\n}\nsection.footer .content section.links .column ul li {\n  color: inherit;\n  font-size: 1.1rem;\n}\nsection.footer .content section.links .column ul li::before {\n  display: none;\n}\nsection.footer .content section.links .column ul li a {\n  color: #ece9f5;\n}\nsection.footer .content section.links .column ul li.bold {\n  font-weight: 700;\n}\nsection.footer .footer-separator {\n  border-color: var(--first-color);\n  border-width: 2px;\n  margin-bottom: 0;\n}\nsection.footer .copyright {\n  padding: 2rem var(--global-padding-x-desktop);\n  color: #e4ddeb;\n  font-size: 1rem;\n}\n@media (max-width: 992px) {\nsection.footer .copyright {\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}",""])},HF6x:function(n,t,e){"use strict";e("e/x7")},K3Ns:function(n,t,e){"use strict";e.r(t);var o=e("CkU6"),i={data:function(){return{url:o.a,sheet:!0}},methods:{accept:function(){this.sheet=!1,sessionStorage.setItem("cookies",!0)}},created:function(){this.sheet=!sessionStorage.getItem("cookies")}},s=e("KHd+"),r=Object(s.a)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"text-center"},[e("v-bottom-sheet",{model:{value:n.sheet,callback:function(t){n.sheet=t},expression:"sheet"}},[e("v-sheet",{staticClass:"pa-3 align-items-center d-flex justify-content-between"},[e("div",{staticClass:"pr-3"},[n._v("\n                "+n._s(n.$store.getters.settings.cookies)),e("a",{attrs:{target:"_blank",href:n.url(n.$store.getters.settings.privace_policy)}},[n._v(n._s(" "+n.$store.getters.settings.cookies_privace_button))])]),n._v(" "),e("v-btn",{attrs:{color:"primary"},on:{click:n.accept}},[n._v(n._s(n.$store.getters.settings.cookies_button))])],1)],1)],1)}),[],!1,null,null,null);t.default=r.exports},QN2Q:function(n,t,e){(n.exports=e("I1BE")(!1)).push([n.i,"section.banner[data-v-08499934] {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 100%;\n  position: relative;\n}\nsection.banner .mask[data-v-08499934] {\n  background: transparent linear-gradient(90deg, #000000 -5%, #00000000 41%) 0% 0% no-repeat padding-box;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n}\nsection.banner .content[data-v-08499934] {\n  color: white;\n  font-weight: 700;\n  font-size: 2.4rem;\n  position: relative;\n  z-index: 2;\n  padding: 2.7rem var(--global-padding-x-desktop);\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 992px) {\nsection.banner .content[data-v-08499934] {\n    padding-left: var(--global-padding-x-mobile);\n}\n}",""])},Tg2p:function(n,t,e){(n.exports=e("I1BE")(!1)).push([n.i,"section.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem var(--global-padding-x-desktop);\n  height: 100%;\n}\n@media (max-width: 992px) {\nsection.header {\n    flex-wrap: wrap;\n    height: unset;\n    padding-left: var(--global-padding-x-mobile);\n    padding-right: var(--global-padding-x-mobile);\n}\n}\nsection.header .logo {\n  height: 60px;\n}\n@media (max-width: 992px) {\nsection.header .logo {\n    order: 1;\n}\n}\nsection.header .phone {\n  display: flex;\n  align-items: center;\n  padding: 0.7rem 1.3rem;\n  border-radius: var(--global-border-radius);\n  transition: 0.2s background-color;\n  color: black;\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n@media (max-width: 992px) {\nsection.header .phone {\n    order: 4;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    justify-content: center;\n}\n}\nsection.header .phone .phone-icon {\n  height: 18px;\n  padding-right: 1.2rem;\n}\nsection.header .phone:hover {\n  background-color: var(--first-color);\n  color: white;\n}\nsection.header .phone:hover img {\n  filter: invert(1);\n}\nsection.header ul {\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0;\n  height: 100%;\n  padding-left: 0;\n}\n@media (max-width: 992px) {\nsection.header ul {\n    order: 3;\n    width: 100%;\n    flex-direction: column;\n    align-items: flex-start;\n    padding-top: 1rem;\n}\n}\nsection.header ul > a {\n  height: 100%;\n}\nsection.header ul li {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  color: #000;\n  font-size: 1.1rem;\n  font-weight: 500;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n  transition: 0.2s color;\n}\nsection.header ul li::before {\n  display: none;\n}\n@media (max-width: 992px) {\nsection.header ul li {\n    padding: 0.5rem;\n}\nsection.header ul li .border-line {\n    transform: unset !important;\n}\n}\nsection.header ul li:hover {\n  color: var(--first-color);\n}\nsection.header ul li:hover .border-line {\n  opacity: 1;\n}\nsection.header ul li .border-line {\n  transition: 0.2s opacity;\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  height: 0.3rem;\n  width: 100%;\n  transform: translateY(calc(-1.5rem - 0.1rem));\n  background-color: var(--first-color);\n  border-bottom-left-radius: var(--global-border-radius);\n  border-bottom-right-radius: var(--global-border-radius);\n}\nsection.header .hamburger-menu {\n  color: black;\n  height: 20px;\n  display: none;\n}\n@media (max-width: 992px) {\nsection.header .hamburger-menu {\n    display: block;\n    order: 2;\n}\n}",""])},TyTJ:function(n,t,e){"use strict";e.r(t);var o={data:function(){return{origin:window.location.origin,showMobileMenu:!1,windowWidth:window.innerWidth}},computed:{subpages:function(){return this.$store.getters.subpages},settings:function(){return this.$store.getters.settings},contact:function(){return this.$store.getters.contact},isScreenMobileDevice:function(){return this.windowWidth<=992},showCollapseMenuClasses:function(){return!this.isScreenMobileDevice||this.showMobileMenu}},methods:{url:e("CkU6").a,showMobileMenuHandler:function(){this.showMobileMenu=!this.showMobileMenu},onResize:function(){this.windowWidth=window.innerWidth}},mounted:function(){var n=this;this.$nextTick((function(){window.addEventListener("resize",n.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},i=(e("vrVn"),e("KHd+")),s=Object(i.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"header"},[e("router-link",{staticStyle:{"min-width":"139px"},attrs:{to:"/"}},[n.settings.photo?e("img",{staticClass:"logo",attrs:{src:n.origin+"/storage/media/"+n.settings.photo,alt:""}}):n._e()]),n._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:n.showCollapseMenuClasses,expression:"showCollapseMenuClasses"}]},n._l(n.subpages.filter((function(n){return"/"!==n.page})),(function(t,o){return e("router-link",{key:"subpage-"+o,attrs:{to:""+t.page}},[e("li",[e("div",{staticClass:"border-line"}),n._v("\n        "+n._s(t.title)+"\n      ")])])})),1),n._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:n.showCollapseMenuClasses,expression:"showCollapseMenuClasses"}],staticClass:"phone",attrs:{href:"tel:"+n.contact.phone_1}},[e("img",{staticClass:"phone-icon",attrs:{src:n.origin+"/storage/img/layout/phone.svg",alt:""}}),n._v("\n    "+n._s(n.contact.phone_1)+"\n  ")]),n._v(" "),e("img",{staticClass:"hamburger-menu",attrs:{src:n.origin+"/storage/img/layout/hamburger-menu.svg",alt:""},on:{click:n.showMobileMenuHandler}})],1)}),[],!1,null,null,null);t.default=s.exports},Vl2w:function(n,t,e){var o=e("Tg2p");"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(n.exports=o.locals)},WRjN:function(n,t,e){"use strict";e("A9PO")},"e/x7":function(n,t,e){var o=e("QN2Q");"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(n.exports=o.locals)},vrVn:function(n,t,e){"use strict";e("Vl2w")},xfRZ:function(n,t,e){"use strict";e.r(t);var o={data:function(){return{origin:window.location.origin}},computed:{subpages:function(){return this.$store.getters.subpages},contact:function(){return this.$store.getters.contact},settings:function(){return this.$store.getters.settings}}},i=(e("WRjN"),e("KHd+")),s=Object(i.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return Object.entries(n.settings).length>0?e("section",{staticClass:"footer"},[n._e(),n._v(" "),e("div",{staticClass:"content"},[e("section",{staticClass:"descriptions"},[e("router-link",{attrs:{to:{name:"Main"}}},[e("img",{staticClass:"logo",attrs:{src:n.origin+"/storage/media/"+n.settings.photo,alt:"settings.photo_alt"}})]),n._v(" "),e("hr",{staticClass:"footer-logo-separator"}),n._v(" "),e("div",{staticClass:"description",domProps:{innerHTML:n._s(n.settings.description)}})],1),n._v(" "),e("section",{staticClass:"links"},[e("div",{staticClass:"column"},[e("h4",[n._v("Menu")]),n._v(" "),e("ul",n._l(n.subpages.filter((function(n){return"/"!==n.page})),(function(t,o){return e("li",{key:"footer-subpage-"+o},[e("router-link",{attrs:{to:t.page}},[n._v(n._s(t.title))])],1)})),0)]),n._v(" "),e("div",{staticClass:"column"},[e("h4",[n._v(n._s(n.settings.company))]),n._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"tel:"+n.contact.phone_1}},[n._v(n._s(n.contact.phone_1))])]),n._v(" "),e("li",[e("a",{attrs:{href:"mailto:"+n.contact.email_1}},[n._v(n._s(n.contact.email_1))])]),n._v(" "),e("li",[e("a",{attrs:{target:"_blank",href:"https://www.google.com/search?tbm=lcl&sxsrf=ALeKk03R-n9i9FnjZJDGGG_KGJOJQtjFRQ%3A1604163272211&ei=yJadX-mpDJKJrwT3w42AAg&q="+n.contact.address+",+"+n.contact.zip_code+"+"+n.contact.city+"&oq=bilard+&gs_l=psy-ab.3.0.35i39k1j0i67k1j0l8.10333.16284.0.16901.13.13.0.0.0.0.190.1120.0j7.7.0....0...1c.1.64.psy-ab..6.7.1120...46j0i433i131k1j46i67k1j0i433i67k1j0i10k1j0i203k1j0i433k1.0.d23hfgOs4ts#rlfi=hd:;si:9035433236648356783;mv:[[51.390375377319025,16.199153519032567],[51.39001542268097,16.19857668096743]]"}},[n._v(n._s((n.contact.address||"")+", "+(n.contact.zip_code||"")+" "+(n.contact.city||"")))])])])])])]),n._v(" "),e("hr",{staticClass:"footer-separator"}),n._v(" "),e("div",{staticClass:"copyright"},[n._v("\n    Copyright Ⓒ by "+n._s(n.settings.company)+". All rights reserved.\n  ")])]):n._e()}),[],!1,null,null,null);t.default=s.exports}}]);
//# sourceMappingURL=front-layout.js.map