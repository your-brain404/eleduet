"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[551],{5083:(n,e,t)=>{function r(n){return n?n.split(".").slice(-1).join(""):""}t.d(e,{Z:()=>r})},3768:(n,e,t)=>{t.d(e,{Z:()=>r});const r=["jpg","png","jpeg","jfif"]},6888:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(2339),o=t(3768),i=t(5083);function s(n){var e=(0,i.Z)(n);return r.Z.state.Settings.settings.destroy_primal_photo&&o.Z.includes(e)?"".concat(n,".webp"):n}},9142:(n,e,t)=>{function r(n){return null!=n?window.location.origin+"/storage/media/"+n:""}t.d(e,{Z:()=>r})},1241:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(4015),o=t.n(r),i=t(3645),s=t.n(i)()(o());s.push([n.id,"section.banner[data-v-73ef4994]{background-position:50%;background-repeat:no-repeat;background-size:cover;position:relative;width:100%}section.banner .mask[data-v-73ef4994]{background:transparent linear-gradient(90deg,#000 -5%,#00000000 41%) 0 0 no-repeat padding-box;height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}section.banner .content[data-v-73ef4994]{align-items:center;color:#fff;display:flex;font-size:2.4rem;font-weight:700;height:100%;left:0;padding:2.7rem var(--global-padding-x-desktop);position:absolute;top:50%;transform:translateY(-50%);z-index:2}@media (max-width:992px){section.banner .content[data-v-73ef4994]{padding-left:var(--global-padding-x-mobile)}}","",{version:3,sources:["webpack://./resources/js/components/layouts/Banner.vue"],names:[],mappings:"AAwEA,gCAEE,uBAAA,CACA,2BAAA,CAFA,qBAAA,CAIA,iBAAA,CADA,UAtEF,CAwEE,sCACE,8FAAA,CAKA,WAAA,CAFA,MAAA,CAGA,iBAAA,CAJA,KAAA,CAEA,UAAA,CAGA,SAvEJ,CAyEE,yCAYE,kBAAA,CAXA,UAAA,CAUA,YAAA,CARA,gBAAA,CADA,eAAA,CAQA,WAAA,CAJA,MAAA,CAGA,8CAAA,CALA,iBAAA,CACA,OAAA,CAEA,0BAAA,CACA,SAnEJ,CAwEI,yBAbF,yCAcI,2CArEJ,CACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\nsection.banner {\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  position: relative;\r\n  .mask {\r\n    background: transparent linear-gradient(90deg, #000000 -5%, #00000000 41%)\r\n      0% 0% no-repeat padding-box;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 1;\r\n  }\r\n  .content {\r\n    color: white;\r\n    font-weight: 700;\r\n    font-size: 2.4rem;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    transform: translateY(-50%);\r\n    z-index: 2;\r\n    padding: 2.7rem var(--global-padding-x-desktop);\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    @media (max-width: 992px) {\r\n      padding-left: var(--global-padding-x-mobile);\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);const a=s},4901:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(4015),o=t.n(r),i=t(3645),s=t.n(i)()(o());s.push([n.id,"section.footer{background-color:var(--first-color)}section.footer .content{display:flex;flex-wrap:wrap;padding:3rem var(--global-padding-x-desktop)}@media (max-width:992px){section.footer .content{padding-bottom:0;padding-left:var(--global-padding-x-mobile);padding-right:var(--global-padding-x-mobile)}}section.footer .content section.descriptions{width:33.33%}@media (max-width:992px){section.footer .content section.descriptions{margin-bottom:2rem;width:100%}}section.footer .content section.descriptions .logo{filter:invert(1);height:80px;margin-bottom:.7rem;width:auto}section.footer .content section.descriptions .footer-logo-separator{border-color:var(--first-color);border-width:2px}section.footer .content section.descriptions .description{color:#ece9f5;font-size:1.1rem;line-height:25px}section.footer .content section.links{display:flex;flex-wrap:wrap;justify-content:space-around;width:66.67%}@media (max-width:992px){section.footer .content section.links{flex-direction:column;justify-content:center;width:100%}section.footer .content section.links .column{margin-bottom:1rem}}@media (min-width:992px){section.footer .content section.links .column{max-width:300px}}section.footer .content section.links .column h4{color:#fff;font-size:1.5rem}section.footer .content section.links .column ul{list-style-type:none;padding-left:0}section.footer .content section.links .column ul li{color:inherit;font-size:1.1rem}section.footer .content section.links .column ul li:before{display:none}section.footer .content section.links .column ul li a{color:#ece9f5}section.footer .content section.links .column ul li.bold{font-weight:700}section.footer .footer-separator{border-color:var(--first-color);border-width:2px;margin-bottom:0}section.footer .copyright{color:#e4ddeb;font-size:1rem;padding:2rem var(--global-padding-x-desktop)}@media (max-width:992px){section.footer .copyright{padding-left:var(--global-padding-x-mobile);padding-right:var(--global-padding-x-mobile)}}","",{version:3,sources:["webpack://./resources/js/components/layouts/Footer.vue"],names:[],mappings:"AAmGA,eAKE,mCAtGF,CAwGE,wBACE,YAAA,CACA,cAAA,CACA,4CAtGJ,CAuGI,yBAJF,wBAKI,gBAAA,CACA,2CAAA,CACA,4CApGJ,CACF,CAqGI,6CACE,YAnGN,CAoGM,yBAFF,6CAII,kBAAA,CADA,UAhGN,CACF,CAkGM,mDAGE,gBAAA,CAFA,WAAA,CAGA,mBAAA,CAFA,UA9FR,CAkGM,oEACE,+BA1BmB,CA2BnB,gBAhGR,CAkGM,0DACE,aA/BS,CAgCT,gBAjCa,CAkCb,gBAhGR,CAmGI,sCAEE,YAAA,CACA,cAAA,CACA,4BAAA,CAHA,YA9FN,CAkGM,yBALF,sCAQI,qBAAA,CADA,sBAAA,CADA,UA7FN,CAiGI,8CAEI,kBA9FR,CAJF,CAoGQ,yBAJF,8CAKI,eA5FR,CACF,CA6FQ,iDAEE,UAAA,CADA,gBA1FV,CA6FQ,iDACE,oBAAA,CACA,cA3FV,CA4FU,oDACE,aAAA,CACA,gBA1FZ,CA2FY,2DACE,YAzFd,CA2FY,sDACE,aAzFd,CA2FY,yDACE,eAzFd,CAgGE,iCACE,+BA7EuB,CA8EvB,gBAAA,CACA,eA9FJ,CAgGE,0BAEE,aAAA,CACA,cAAA,CAFA,4CA5FJ,CA+FI,yBAJF,0BAKI,2CAAA,CACA,4CA5FJ,CACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\nsection.footer {\r\n  $footer-font-size: 1.1rem;\r\n  $footer-color: #ece9f5;\r\n  $footer-separator-color: var(--first-color);\r\n\r\n  background-color: var(--first-color);\r\n\r\n  .content {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 3rem var(--global-padding-x-desktop);\r\n    @media (max-width: 992px) {\r\n      padding-bottom: 0;\r\n      padding-left: var(--global-padding-x-mobile);\r\n      padding-right: var(--global-padding-x-mobile);\r\n    }\r\n    section.descriptions {\r\n      width: 33.33%;\r\n      @media (max-width: 992px) {\r\n        width: 100%;\r\n        margin-bottom: 2rem;\r\n      }\r\n      .logo {\r\n        height: 80px;\r\n        width: auto;\r\n        filter: invert(1);\r\n        margin-bottom: 0.7rem;\r\n      }\r\n      .footer-logo-separator {\r\n        border-color: $footer-separator-color;\r\n        border-width: 2px;\r\n      }\r\n      .description {\r\n        color: $footer-color;\r\n        font-size: $footer-font-size;\r\n        line-height: 25px;\r\n      }\r\n    }\r\n    section.links {\r\n      width: 66.67%;\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      justify-content: space-around;\r\n      @media (max-width: 992px) {\r\n        width: 100%;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n      }\r\n      .column {\r\n        @media (max-width: 992px) {\r\n          margin-bottom: 1rem;\r\n        }\r\n        @media (min-width: 992px) {\r\n          max-width: 300px;\r\n        }\r\n        h4 {\r\n          font-size: 1.5rem;\r\n          color: white;\r\n        }\r\n        ul {\r\n          list-style-type: none;\r\n          padding-left: 0;\r\n          li {\r\n            color: inherit;\r\n            font-size: $footer-font-size;\r\n            &::before {\r\n              display: none;\r\n            }\r\n            a {\r\n              color: $footer-color;\r\n            }\r\n            &.bold {\r\n              font-weight: 700;\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .footer-separator {\r\n    border-color: $footer-separator-color;\r\n    border-width: 2px;\r\n    margin-bottom: 0;\r\n  }\r\n  .copyright {\r\n    padding: 2rem var(--global-padding-x-desktop);\r\n    color: #e4ddeb;\r\n    font-size: 1rem;\r\n    @media (max-width: 992px) {\r\n      padding-left: var(--global-padding-x-mobile);\r\n      padding-right: var(--global-padding-x-mobile);\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);const a=s},8160:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(4015),o=t.n(r),i=t(3645),s=t.n(i)()(o());s.push([n.id,"section.header{align-items:center;display:flex;height:100%;justify-content:space-between;padding:1.5rem var(--global-padding-x-desktop)}@media (max-width:992px){section.header{flex-wrap:wrap;height:unset;padding-left:var(--global-padding-x-mobile);padding-right:var(--global-padding-x-mobile)}}section.header .logo{height:60px;width:auto}@media (max-width:992px){section.header .logo{order:1}}section.header .phone{align-items:center;border-radius:var(--global-border-radius);color:#000;display:flex;font-size:1.4rem;font-weight:500;padding:.7rem 1.3rem;text-decoration:none;transition:background-color .2s}@media (max-width:992px){section.header .phone{justify-content:center;order:4;width:-moz-fit-content;width:fit-content}}section.header .phone .phone-icon{height:18px;padding-right:1.2rem}section.header .phone:hover{background-color:var(--first-color);color:#fff}section.header .phone:hover img{filter:invert(1)}section.header ul{align-items:center;display:flex;height:100%;list-style-type:none;margin-bottom:0;padding-left:0}@media (max-width:992px){section.header ul{align-items:flex-start;flex-direction:column;order:3;padding-top:1rem;width:100%}}section.header ul>a{height:100%;text-decoration:none}section.header ul li{align-items:center;color:#000;display:flex;font-size:1.1rem;font-weight:500;height:100%;padding-left:.5rem;padding-right:.5rem;position:relative;transition:color .2s}section.header ul li:before{display:none}@media (max-width:992px){section.header ul li{padding:.5rem}section.header ul li .border-line{transform:unset!important}}section.header ul li:hover{color:var(--first-color)}section.header ul li:hover .border-line{opacity:1}section.header ul li .border-line{background-color:var(--first-color);border-bottom-left-radius:var(--global-border-radius);border-bottom-right-radius:var(--global-border-radius);height:.3rem;left:0;opacity:0;position:absolute;top:0;transform:translateY(-1.6rem);transition:opacity .2s;width:100%}section.header .hamburger-menu{color:#000;display:none;height:20px}@media (max-width:992px){section.header .hamburger-menu{display:block;order:2}}","",{version:3,sources:["webpack://./resources/js/components/layouts/Header.vue"],names:[],mappings:"AAgHA,eAIE,kBAAA,CAFA,YAAA,CAIA,WAAA,CAHA,6BAAA,CAEA,8CA/GF,CAiHE,yBAPF,eAQI,cAAA,CACA,YAAA,CACA,2CAAA,CACA,4CA9GF,CACF,CA+GE,qBACE,WAAA,CACA,UA7GJ,CA8GI,yBAHF,qBAII,OA3GJ,CACF,CA6GE,sBAEE,kBAAA,CAEA,yCAAA,CAEA,UAAA,CALA,YAAA,CAMA,gBAAA,CACA,eAAA,CALA,oBAAA,CAMA,oBAAA,CAJA,+BAvGJ,CA4GI,yBAVF,sBAaI,sBAAA,CAFA,OAAA,CACA,sBAAA,CAAA,iBAxGJ,CACF,CA2GI,kCACE,WAAA,CACA,oBAzGN,CA4GI,4BACE,mCAAA,CACA,UA1GN,CA2GM,gCACE,gBAzGR,CA8GE,kBAGE,kBAAA,CADA,YAAA,CAGA,WAAA,CAJA,oBAAA,CAGA,eAAA,CAEA,cA5GJ,CA6GI,yBAPF,kBAWI,sBAAA,CADA,qBAAA,CAFA,OAAA,CAIA,gBAAA,CAHA,UAvGJ,CACF,CA2GI,oBACE,WAAA,CACA,oBAzGN,CA2GI,qBAQE,kBAAA,CALA,UAAA,CAIA,YAAA,CAHA,gBAAA,CACA,eAAA,CACA,WAAA,CALA,kBAAA,CACA,mBAAA,CAOA,iBAAA,CAEA,oBA1GN,CA2GM,4BACE,YAzGR,CA2GM,yBAfF,qBAgBI,aAxGN,CA0GM,kCACE,yBAxGR,CACF,CA2GM,2BACE,wBAzGR,CA0GQ,wCACE,SAxGV,CA2GM,kCASE,mCAAA,CACA,qDAAA,CACA,sDAAA,CALA,YAAA,CADA,MAAA,CAFA,SAAA,CADA,iBAAA,CAEA,KAAA,CAIA,6BAAA,CAPA,sBAAA,CAMA,UArGR,CA8GE,+BACE,UAAA,CAEA,YAAA,CADA,WA3GJ,CA6GI,yBAJF,+BAKI,aAAA,CACA,OA1GJ,CACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\nsection.header {\r\n  $header-padding-y: 1.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: $header-padding-y var(--global-padding-x-desktop);\r\n  height: 100%;\r\n  @media (max-width: 992px) {\r\n    flex-wrap: wrap;\r\n    height: unset;\r\n    padding-left: var(--global-padding-x-mobile);\r\n    padding-right: var(--global-padding-x-mobile);\r\n  }\r\n  .logo {\r\n    height: 60px;\r\n    width: auto;\r\n    @media (max-width: 992px) {\r\n      order: 1;\r\n    }\r\n  }\r\n  .phone {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0.7rem 1.3rem;\r\n    border-radius: var(--global-border-radius);\r\n    transition: 0.2s background-color;\r\n    color: black;\r\n    font-size: 1.4rem;\r\n    font-weight: 500;\r\n    text-decoration: none;\r\n    @media (max-width: 992px) {\r\n      order: 4;\r\n      width: fit-content;\r\n      justify-content: center;\r\n    }\r\n\r\n    .phone-icon {\r\n      height: 18px;\r\n      padding-right: 1.2rem;\r\n    }\r\n\r\n    &:hover {\r\n      background-color: var(--first-color);\r\n      color: white;\r\n      img {\r\n        filter: invert(1);\r\n      }\r\n    }\r\n  }\r\n\r\n  ul {\r\n    list-style-type: none;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 0;\r\n    height: 100%;\r\n    padding-left: 0;\r\n    @media (max-width: 992px) {\r\n      order: 3;\r\n      width: 100%;\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      padding-top: 1rem;\r\n    }\r\n    & > a {\r\n      height: 100%;\r\n      text-decoration: none;\r\n    }\r\n    li {\r\n      padding-left: 0.5rem;\r\n      padding-right: 0.5rem;\r\n      color: #000;\r\n      font-size: 1.1rem;\r\n      font-weight: 500;\r\n      height: 100%;\r\n      display: flex;\r\n      align-items: center;\r\n      position: relative;\r\n\r\n      transition: 0.2s color;\r\n      &::before {\r\n        display: none;\r\n      }\r\n      @media (max-width: 992px) {\r\n        padding: 0.5rem;\r\n\r\n        .border-line {\r\n          transform: unset !important;\r\n        }\r\n      }\r\n\r\n      &:hover {\r\n        color: var(--first-color);\r\n        .border-line {\r\n          opacity: 1;\r\n        }\r\n      }\r\n      .border-line {\r\n        transition: 0.2s opacity;\r\n        position: absolute;\r\n        opacity: 0;\r\n        top: 0;\r\n        left: 0;\r\n        height: 0.3rem;\r\n        width: 100%;\r\n        transform: translateY(calc(-#{$header-padding-y} - 0.1rem));\r\n        background-color: var(--first-color);\r\n        border-bottom-left-radius: var(--global-border-radius);\r\n        border-bottom-right-radius: var(--global-border-radius);\r\n      }\r\n    }\r\n  }\r\n\r\n  .hamburger-menu {\r\n    color: black;\r\n    height: 20px;\r\n    display: none;\r\n    @media (max-width: 992px) {\r\n      display: block;\r\n      order: 2;\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]);const a=s},6520:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(4015),o=t.n(r),i=t(3645),s=t.n(i)()(o());s.push([n.id,"picture{display:flex}","",{version:3,sources:["webpack://./resources/js/components/picture/Picture.vue"],names:[],mappings:"AAsHA,QACA,YACA",sourcesContent:['<template>\r\n  <picture>\r\n    <source\r\n      v-if="webp && isWebpType"\r\n      :srcset="webpSrc"\r\n      type="image/webp"\r\n      :media="mobileVersion ? `(min-width: ${mobileVersion + 1}px)` : \'\'"\r\n    />\r\n    <source\r\n      v-if="webp && isWebpType && mobileVersion"\r\n      :srcset="webpSrcCustomWidth(mobileVersion)"\r\n      :media="mobileVersion ? `(max-width: ${mobileVersion}px)` : \'\'"\r\n      type="image/webp"\r\n    />\r\n    <source\r\n      v-if="srcEncodeExtension != \'webp\'"\r\n      :srcset="srcEncode"\r\n      :media="\r\n        mobileVersion && webpExtensions.includes(srcEncodeExtension)\r\n          ? `(min-width: ${mobileVersion + 1}px)`\r\n          : \'\'\r\n      "\r\n    />\r\n    <source\r\n      v-if="mobileVersion && srcEncodeExtension != \'webp\'"\r\n      :srcset="srcEncodeCustomWidth(mobileVersion)"\r\n      :media="\r\n        mobileVersion && webpExtensions.includes(srcEncodeExtension)\r\n          ? `(max-width: ${mobileVersion}px)`\r\n          : \'\'\r\n      "\r\n    />\r\n    <img\r\n      :loading="loading"\r\n      @click="$emit(\'click\')"\r\n      :class="classImg"\r\n      :style="styleImg"\r\n      :src="srcEncode"\r\n      :alt="alt"\r\n      @error="imgError"\r\n      :width="width"\r\n      :height="height"\r\n    />\r\n  </picture>\r\n</template>\r\n\r\n<script>\r\nimport webpExtensions from "@/helpers/files/webp-extensions";\r\nimport existingPhotoPath from "@/helpers/links/existing-photo-path";\r\nimport getExtensionFromPath from "@/helpers/files/get-extension-from-path";\r\n\r\nexport default {\r\n  data() {\r\n    return {\r\n      error: false,\r\n    };\r\n  },\r\n  props: {\r\n    mobileVersion: {\r\n      type: [String, Number],\r\n      default: "",\r\n    },\r\n    src: {\r\n      type: String,\r\n      default: "",\r\n    },\r\n    webp: {\r\n      type: Boolean,\r\n      default: true,\r\n    },\r\n    loading: {\r\n      type: String,\r\n      default: "lazy",\r\n    },\r\n    alt: String,\r\n    classImg: String,\r\n    styleImg: String,\r\n    width: String,\r\n    height: String,\r\n  },\r\n  computed: {\r\n    isWebpType() {\r\n      const regex = new RegExp(`.(${webpExtensions.join("|")})$`, "i");\r\n      return this.src.match(regex);\r\n    },\r\n    webpSrc() {\r\n      return this.isWebpType && `${this.src}.webp`;\r\n    },\r\n    srcEncodeExtension() {\r\n      return this.getExtensionFromPath(this.srcEncode);\r\n    },\r\n    srcEncode() {\r\n      return this.webp\r\n        ? existingPhotoPath(encodeURI(this.src))\r\n        : encodeURI(this.src);\r\n    },\r\n  },\r\n  methods: {\r\n    existingPhotoPath,\r\n    getExtensionFromPath,\r\n    imgError() {\r\n      if (this.error === false) this.error = true;\r\n    },\r\n    srcEncodeCustomWidth(width) {\r\n      let path = this.src.split("/");\r\n      let name = path.slice(-1);\r\n      return (\r\n        path.slice(0, path.length - 1).join("/") + `/width_${width}_${name}`\r\n      );\r\n    },\r\n    webpSrcCustomWidth(width) {\r\n      return this.isWebpType && this.srcEncodeCustomWidth(width) + ".webp";\r\n    },\r\n  },\r\n};\r\n<\/script>\r\n\r\n<style>\r\npicture {\r\n  display: flex;\r\n}\r\n</style>'],sourceRoot:""}]);const a=s},5824:(n,e,t)=>{t.r(e),t.d(e,{default:()=>A});var r=t(9142),o=t(9455),i=t(5434),s=t(1211);const a={components:{VBottomSheet:o.Z,VSheet:i.Z,VBtn:s.Z},data:function(){return{url:r.Z,sheet:!0}},methods:{accept:function(){this.sheet=!1,sessionStorage.setItem("cookies",!0)}},created:function(){this.sheet=!sessionStorage.getItem("cookies")}};const A=(0,t(1900).Z)(a,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"text-center"},[t("v-bottom-sheet",{model:{value:n.sheet,callback:function(e){n.sheet=e},expression:"sheet"}},[t("v-sheet",{staticClass:"pa-3 align-items-center d-flex justify-content-between"},[t("div",{staticClass:"pr-3"},[n._v("\n        "+n._s(n.$store.getters.settings.cookies)),t("a",{attrs:{target:"_blank",href:n.url(n.$store.getters.settings.privace_policy)}},[n._v(n._s(" "+n.$store.getters.settings.cookies_privace_button))])]),n._v(" "),t("v-btn",{attrs:{color:"primary"},on:{click:n.accept}},[n._v(n._s(n.$store.getters.settings.cookies_button))])],1)],1)],1)}),[],!1,null,null,null).exports},8190:(n,e,t)=>{t.r(e),t.d(e,{default:()=>A});const r={components:{Picture:t(4525).Z},data:function(){return{origin:window.location.origin}},computed:{currentSubpage:function(){return this.$store.getters.currentSubpage},title:function(){var n;return null===(n=this.currentSubpage)||void 0===n?void 0:n.title},height:function(){var n;return null===(n=this.currentSubpage)||void 0===n?void 0:n.height},heightMd:function(){var n;return null===(n=this.currentSubpage)||void 0===n?void 0:n.height_md},heightLg:function(){var n;return null===(n=this.currentSubpage)||void 0===n?void 0:n.height_lg},backgroundPosition:function(){var n;return null===(n=this.currentSubpage)||void 0===n?void 0:n.photo_background_position},photo:function(){var n;return null===(n=this.currentSubpage)||void 0===n?void 0:n.photo},alt:function(){var n;return null===(n=this.currentSubpage)||void 0===n?void 0:n.photo_alt},photoSizes:function(){var n;return null===(n=this.currentSubpage)||void 0===n?void 0:n.photo_sizes}}};var o=t(3379),i=t.n(o),s=t(1241),a={insert:"head",singleton:!1};i()(s.Z,a);s.Z.locals;const A=(0,t(1900).Z)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return n.title?t("section",{staticClass:"banner position-relative"},[t("style",{tag:"component"},[n._v("\n    .banner { height: "+n._s(n.height)+"px; } @media(min-width: 768px) { .banner {\n    height: "+n._s(n.heightMd)+"px; } } @media(min-width: 992px) { .banner { height:\n    "+n._s(n.heightLg)+"px; } }\n  ")]),n._v(" "),t("Picture",{staticClass:"w-100 h-100",attrs:{width:n.photoSizes.width,height:n.photoSizes.width,alt:n.alt,src:n.origin+"/storage/media/"+n.photo,styleImg:{"object-position":n.backgroundPosition,"object-fit":"cover"},classImg:"img-fluid h-100"}}),n._v(" "),t("div",{staticClass:"mask"}),n._v(" "),t("div",{staticClass:"content"},[n._v("\n    "+n._s(n.title)+"\n  ")])],1):n._e()}),[],!1,null,"73ef4994",null).exports},9157:(n,e,t)=>{t.r(e),t.d(e,{default:()=>A});const r={components:{Picture:t(4525).Z},data:function(){return{origin:window.location.origin}},computed:{subpages:function(){return this.$store.getters.subpages},contact:function(){return this.$store.getters.contact},settings:function(){return this.$store.getters.settings}}};var o=t(3379),i=t.n(o),s=t(4901),a={insert:"head",singleton:!1};i()(s.Z,a);s.Z.locals;const A=(0,t(1900).Z)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return Object.entries(n.settings).length>0?t("section",{staticClass:"footer"},[n._e(),n._v(" "),t("div",{staticClass:"content"},[t("section",{staticClass:"descriptions"},[t("router-link",{attrs:{to:{name:"Main"}}},[t("Picture",{attrs:{src:n.origin+"/storage/media/"+n.settings.photo,alt:n.settings.photo_alt,width:n.settings.photo_sizes.width,height:n.settings.photo_sizes.height,classImg:"logo",webp:!1}})],1),n._v(" "),t("hr",{staticClass:"footer-logo-separator"}),n._v(" "),t("div",{staticClass:"description",domProps:{innerHTML:n._s(n.settings.description)}})],1),n._v(" "),t("section",{staticClass:"links"},[t("div",{staticClass:"column"},[t("h4",[n._v("Menu")]),n._v(" "),t("ul",n._l(n.subpages.filter((function(n){return"/"!==n.page})),(function(e,r){return t("li",{key:"footer-subpage-"+r},[t("router-link",{attrs:{to:e.page}},[n._v(n._s(e.title))])],1)})),0)]),n._v(" "),t("div",{staticClass:"column"},[t("h4",[n._v(n._s(n.settings.company))]),n._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"tel:"+n.contact.phone_1}},[n._v(n._s(n.contact.phone_1))])]),n._v(" "),t("li",[t("a",{attrs:{href:"mailto:"+n.contact.email_1}},[n._v(n._s(n.contact.email_1))])]),n._v(" "),t("li",[t("a",{attrs:{target:"_blank",href:"https://www.google.com/search?tbm=lcl&sxsrf=ALeKk03R-n9i9FnjZJDGGG_KGJOJQtjFRQ%3A1604163272211&ei=yJadX-mpDJKJrwT3w42AAg&q="+n.contact.address+",+"+n.contact.zip_code+"+"+n.contact.city+"&oq=bilard+&gs_l=psy-ab.3.0.35i39k1j0i67k1j0l8.10333.16284.0.16901.13.13.0.0.0.0.190.1120.0j7.7.0....0...1c.1.64.psy-ab..6.7.1120...46j0i433i131k1j46i67k1j0i433i67k1j0i10k1j0i203k1j0i433k1.0.d23hfgOs4ts#rlfi=hd:;si:9035433236648356783;mv:[[51.390375377319025,16.199153519032567],[51.39001542268097,16.19857668096743]]"}},[n._v(n._s((n.contact.address||"")+", "+(n.contact.zip_code||"")+" "+(n.contact.city||"")))])])])])])]),n._v(" "),t("hr",{staticClass:"footer-separator"}),n._v(" "),t("div",{staticClass:"copyright"},[n._v("\n    Copyright Ⓒ by "+n._s(n.settings.company)+". All rights reserved.\n  ")])]):n._e()}),[],!1,null,null,null).exports},5262:(n,e,t)=>{t.r(e),t.d(e,{default:()=>c});var r=t(9142);const o={components:{Picture:t(4525).Z},data:function(){return{origin:window.location.origin,showMobileMenu:!1,windowWidth:window.innerWidth}},watch:{"$route.path":function(){this.showMobileMenu=!1}},computed:{subpages:function(){return this.$store.getters.subpages},settings:function(){return this.$store.getters.settings},contact:function(){return this.$store.getters.contact},isScreenMobileDevice:function(){return this.windowWidth<=992},showCollapseMenuClasses:function(){return!this.isScreenMobileDevice||this.showMobileMenu}},methods:{url:r.Z,showMobileMenuHandler:function(){this.showMobileMenu=!this.showMobileMenu},onResize:function(){this.windowWidth=window.innerWidth}},mounted:function(){var n=this;this.$nextTick((function(){window.addEventListener("resize",n.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}};var i=t(3379),s=t.n(i),a=t(8160),A={insert:"head",singleton:!1};s()(a.Z,A);a.Z.locals;const c=(0,t(1900).Z)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"header"},[t("router-link",{staticStyle:{"min-width":"139px"},attrs:{to:"/"}},[t("Picture",{attrs:{width:n.settings.photo_sizes.width,height:n.settings.photo_sizes.height,alt:n.settings.photo_alt,classImg:"logo",src:n.origin+"/storage/media/"+n.settings.photo,webp:!1},on:{click:function(e){n.showMobileMenu=!1}}})],1),n._v(" "),t("ul",{directives:[{name:"show",rawName:"v-show",value:n.showCollapseMenuClasses,expression:"showCollapseMenuClasses"}]},n._l(n.subpages.filter((function(n){return"/"!==n.page})),(function(e,r){return t("router-link",{key:"subpage-"+r,attrs:{to:""+e.page}},[t("li",{on:{click:function(e){n.showMobileMenu=!1}}},[t("div",{staticClass:"border-line"}),n._v("\n        "+n._s(e.title)+"\n      ")])])})),1),n._v(" "),t("a",{directives:[{name:"show",rawName:"v-show",value:n.showCollapseMenuClasses,expression:"showCollapseMenuClasses"}],staticClass:"phone",attrs:{href:"tel:"+n.contact.phone_1}},[t("Picture",{attrs:{width:"37",height:"18",alt:"phone-icon",classImg:"phone-icon",src:n.origin+"/storage/img/layout/phone.svg",webp:!1}}),n._v("\n\n    "+n._s(n.contact.phone_1)+"\n  ")],1),n._v(" "),t("Picture",{class:"hamburger-menu",attrs:{width:"17",height:"20",alt:"hamburger-menu",src:n.origin+"/storage/img/layout/hamburger-menu.svg",webp:!1},on:{click:n.showMobileMenuHandler}})],1)}),[],!1,null,null,null).exports},4525:(n,e,t)=>{t.d(e,{Z:()=>d});var r=t(3768),o=t(6888),i=t(5083);const s={data:function(){return{error:!1}},props:{mobileVersion:{type:[String,Number],default:""},src:{type:String,default:""},webp:{type:Boolean,default:!0},loading:{type:String,default:"lazy"},alt:String,classImg:String,styleImg:String,width:String,height:String},computed:{isWebpType:function(){var n=new RegExp(".(".concat(r.Z.join("|"),")$"),"i");return this.src.match(n)},webpSrc:function(){return this.isWebpType&&"".concat(this.src,".webp")},srcEncodeExtension:function(){return this.getExtensionFromPath(this.srcEncode)},srcEncode:function(){return this.webp?(0,o.Z)(encodeURI(this.src)):encodeURI(this.src)}},methods:{existingPhotoPath:o.Z,getExtensionFromPath:i.Z,imgError:function(){!1===this.error&&(this.error=!0)},srcEncodeCustomWidth:function(n){var e=this.src.split("/"),t=e.slice(-1);return e.slice(0,e.length-1).join("/")+"/width_".concat(n,"_").concat(t)},webpSrcCustomWidth:function(n){return this.isWebpType&&this.srcEncodeCustomWidth(n)+".webp"}}};var a=t(3379),A=t.n(a),c=t(6520),l={insert:"head",singleton:!1};A()(c.Z,l);c.Z.locals;const d=(0,t(1900).Z)(s,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("picture",[n.webp&&n.isWebpType?t("source",{attrs:{srcset:n.webpSrc,type:"image/webp",media:n.mobileVersion?"(min-width: "+(n.mobileVersion+1)+"px)":""}}):n._e(),n._v(" "),n.webp&&n.isWebpType&&n.mobileVersion?t("source",{attrs:{srcset:n.webpSrcCustomWidth(n.mobileVersion),media:n.mobileVersion?"(max-width: "+n.mobileVersion+"px)":"",type:"image/webp"}}):n._e(),n._v(" "),"webp"!=n.srcEncodeExtension?t("source",{attrs:{srcset:n.srcEncode,media:n.mobileVersion&&n.webpExtensions.includes(n.srcEncodeExtension)?"(min-width: "+(n.mobileVersion+1)+"px)":""}}):n._e(),n._v(" "),n.mobileVersion&&"webp"!=n.srcEncodeExtension?t("source",{attrs:{srcset:n.srcEncodeCustomWidth(n.mobileVersion),media:n.mobileVersion&&n.webpExtensions.includes(n.srcEncodeExtension)?"(max-width: "+n.mobileVersion+"px)":""}}):n._e(),n._v(" "),t("img",{class:n.classImg,style:n.styleImg,attrs:{loading:n.loading,src:n.srcEncode,alt:n.alt,width:n.width,height:n.height},on:{click:function(e){return n.$emit("click")},error:n.imgError}})])}),[],!1,null,null,null).exports}}]);
//# sourceMappingURL=front-layout.js.map