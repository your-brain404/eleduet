<template>
  <picture>
    <source
      v-if="webp && isWebpType"
      :srcset="webpSrc"
      type="image/webp"
      :media="mobileVersion ? `(min-width: ${mobileVersion + 1}px)` : ''"
    />
    <source
      v-if="webp && isWebpType && mobileVersion"
      :srcset="webpSrcCustomWidth(mobileVersion)"
      :media="mobileVersion ? `(max-width: ${mobileVersion}px)` : ''"
      type="image/webp"
    />
    <source
      v-if="srcEncodeExtension != 'webp'"
      :srcset="srcEncode"
      :media="
        mobileVersion && webpExtensions.includes(srcEncodeExtension)
          ? `(min-width: ${mobileVersion + 1}px)`
          : ''
      "
    />
    <source
      v-if="mobileVersion && srcEncodeExtension != 'webp'"
      :srcset="srcEncodeCustomWidth(mobileVersion)"
      :media="
        mobileVersion && webpExtensions.includes(srcEncodeExtension)
          ? `(max-width: ${mobileVersion}px)`
          : ''
      "
    />
    <img
      :loading="loading"
      :class="classImg"
      :style="[styleImg, { width: width, height: height }]"
      :src="srcEncode"
      :alt="alt"
      :width="width"
      :height="height"
    />
  </picture>
</template>

<script>
import webpExtensions from "@/helpers/files/webp-extensions.js";
import existingPhotoPath from "@/helpers/links/existing-photo-path.js";
import getExtensionFromPath from "@/helpers/files/get-extension-from-path.js";

export default {
  props: {
    mobileVersion: {
      type: [String, Number],
      default: "",
    },
    src: {
      type: String,
      default: "",
    },
    webp: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: String,
      default: "lazy",
    },
    alt: String,
    classImg: String,
    styleImg: String,
    width: String,
    height: Number,
  },
  computed: {
    isWebpType() {
      const regex = new RegExp(`.(${webpExtensions.join("|")})$`, "i");
      return this.src.match(regex);
    },
    webpSrc() {
      return this.isWebpType && `${this.src}.webp`;
    },
    srcEncodeExtension() {
      return this.getExtensionFromPath(this.srcEncode);
    },
    srcEncode() {
      return this.webp
        ? existingPhotoPath(encodeURI(this.src))
        : encodeURI(this.src);
    },
  },
  methods: {
    existingPhotoPath,
    getExtensionFromPath,

    srcEncodeCustomWidth(width) {
      let path = this.src.split("/");
      let name = path.slice(-1);
      return (
        path.slice(0, path.length - 1).join("/") + `/width_${width}_${name}`
      );
    },
    webpSrcCustomWidth(width) {
      return this.isWebpType && this.srcEncodeCustomWidth(width) + ".webp";
    },
  },
};
</script>

<style>
picture {
  display: flex;
}
</style>