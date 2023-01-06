"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2392],{5083:(e,t,i)=>{function n(e){return e?e.split(".").slice(-1).join(""):""}i.d(t,{Z:()=>n})},3768:(e,t,i)=>{i.d(t,{Z:()=>n});const n=["jpg","png","jpeg","jfif"]},6888:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(3375),o=i(3768),r=i(5083);function s(e){var t=(0,r.Z)(e);return n.Z.state.Settings.settings.destroy_primal_photo&&o.Z.includes(t)?"".concat(e,".webp"):e}},1151:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(1519),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,"picture{display:flex}",""]);const r=o},6871:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(1519),o=i.n(n)()((function(e){return e[1]}));o.push([e.id,"section.banner[data-v-73ef4994]{background-position:50%;background-repeat:no-repeat;background-size:cover;position:relative;width:100%}section.banner .mask[data-v-73ef4994]{background:transparent linear-gradient(90deg,#000 -5%,#00000000 41%) 0 0 no-repeat padding-box;height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}section.banner .content[data-v-73ef4994]{align-items:center;color:#fff;display:flex;font-size:2.4rem;font-weight:700;height:100%;left:0;padding:2.7rem var(--global-padding-x-desktop);position:absolute;top:50%;transform:translateY(-50%);z-index:2}@media (max-width:992px){section.banner .content[data-v-73ef4994]{padding-left:var(--global-padding-x-mobile)}}",""]);const r=o},4385:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const n={components:{Picture:i(530).Z},data:function(){return{origin:window.location.origin}},computed:{currentSubpage:function(){return this.$store.getters.currentSubpage},title:function(){var e;return null===(e=this.currentSubpage)||void 0===e?void 0:e.title},height:function(){var e;return null===(e=this.currentSubpage)||void 0===e?void 0:e.height},heightMd:function(){var e;return null===(e=this.currentSubpage)||void 0===e?void 0:e.height_md},heightLg:function(){var e;return null===(e=this.currentSubpage)||void 0===e?void 0:e.height_lg},backgroundPosition:function(){var e;return null===(e=this.currentSubpage)||void 0===e?void 0:e.photo_background_position},photo:function(){var e;return null===(e=this.currentSubpage)||void 0===e?void 0:e.photo},alt:function(){var e;return null===(e=this.currentSubpage)||void 0===e?void 0:e.photo_alt},photoSizes:function(){var e;return null===(e=this.currentSubpage)||void 0===e?void 0:e.photo_sizes}}};var o=i(3379),r=i.n(o),s=i(6871),c={insert:"head",singleton:!1};r()(s.Z,c);s.Z.locals;const a=(0,i(1900).Z)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.title?i("section",{staticClass:"banner position-relative"},[i("style",{tag:"component"},[e._v("\n    .banner { height: "+e._s(e.height)+"px; } @media(min-width: 768px) { .banner {\n    height: "+e._s(e.heightMd)+"px; } } @media(min-width: 992px) { .banner { height:\n    "+e._s(e.heightLg)+"px; } }\n  ")]),e._v(" "),i("Picture",{staticClass:"w-100 h-100",attrs:{width:e.photoSizes.width,height:e.photoSizes.width,alt:e.alt,src:e.origin+"/storage/media/"+e.photo,styleImg:{"object-position":e.backgroundPosition,"object-fit":"cover"},classImg:"img-fluid h-100"}}),e._v(" "),i("div",{staticClass:"mask"}),e._v(" "),i("div",{staticClass:"content"},[e._v("\n    "+e._s(e.title)+"\n  ")])],1):e._e()}),[],!1,null,"73ef4994",null).exports},530:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(3768),o=i(6888),r=i(5083);const s={data:function(){return{error:!1}},props:{mobileVersion:{type:[String,Number],default:""},src:{type:String,default:""},webp:{type:Boolean,default:!0},loading:{type:String,default:"lazy"},alt:String,classImg:String,styleImg:String,width:String,height:String,rel:{type:String,default:""}},computed:{isWebpType:function(){var e=new RegExp(".(".concat(n.Z.join("|"),")$"),"i");return this.src.match(e)},webpSrc:function(){return this.isWebpType&&"".concat(this.src,".webp")},srcEncodeExtension:function(){return this.getExtensionFromPath(this.srcEncode)},srcEncode:function(){return this.webp?(0,o.Z)(encodeURI(this.src)):encodeURI(this.src)}},methods:{existingPhotoPath:o.Z,getExtensionFromPath:r.Z,imgError:function(){!1===this.error&&(this.error=!0)},srcEncodeCustomWidth:function(e){var t=this.src.split("/"),i=t.slice(-1);return t.slice(0,t.length-1).join("/")+"/width_".concat(e,"_").concat(i)},webpSrcCustomWidth:function(e){return this.isWebpType&&this.srcEncodeCustomWidth(e)+".webp"},preloadImage:function(){var e="";this.webp&&this.isWebpType&&this.mobileVersion>=innerWidth?e=this.webpSrcCustomWidth(this.mobileVersion):this.webp&&this.isWebpType?e=this.webpSrc:this.mobileVersion>=innerWidth&&"webp"!=this.srcEncodeExtension?e=this.srcEncodeCustomWidth(this.mobileVersion):"webp"!=this.srcEncodeExtension&&(e=this.srcEncode);var t=document.createElement("link");t.href=e,t.rel="preload",t.as="image",document.head.appendChild(t)}},created:function(){"preload"===this.rel&&this.preloadImage()}};var c=i(3379),a=i.n(c),d=i(1151),l={insert:"head",singleton:!1};a()(d.Z,l);d.Z.locals;const h=(0,i(1900).Z)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("picture",[e.webp&&e.isWebpType?i("source",{attrs:{srcset:e.webpSrc,type:"image/webp",media:e.mobileVersion?"(min-width: "+(e.mobileVersion+1)+"px)":""}}):e._e(),e._v(" "),e.webp&&e.isWebpType&&e.mobileVersion?i("source",{attrs:{srcset:e.webpSrcCustomWidth(e.mobileVersion),media:e.mobileVersion?"(max-width: "+e.mobileVersion+"px)":"",type:"image/webp"}}):e._e(),e._v(" "),"webp"!=e.srcEncodeExtension?i("source",{attrs:{srcset:e.srcEncode,media:e.mobileVersion&&e.webpExtensions.includes(e.srcEncodeExtension)?"(min-width: "+(e.mobileVersion+1)+"px)":""}}):e._e(),e._v(" "),e.mobileVersion&&"webp"!=e.srcEncodeExtension?i("source",{attrs:{srcset:e.srcEncodeCustomWidth(e.mobileVersion),media:e.mobileVersion&&e.webpExtensions.includes(e.srcEncodeExtension)?"(max-width: "+e.mobileVersion+"px)":""}}):e._e(),e._v(" "),i("img",{class:e.classImg,style:e.styleImg,attrs:{loading:e.loading,src:e.srcEncode,alt:e.alt,width:e.width,height:e.height},on:{click:function(t){return e.$emit("click")},error:e.imgError}})])}),[],!1,null,null,null).exports}}]);