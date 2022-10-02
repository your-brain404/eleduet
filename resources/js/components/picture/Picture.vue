<template>
  <picture v-if="!error">
    <source
      v-if="webp"
      :srcset="webpSrc"
      type="image/webp"
      media="(min-width: 577px)"
    />
    <source
      v-if="webp"
      :srcset="webpSrcCustomWidth(576)"
      media="(max-width: 576px)"
      type="image/webp"
    />
    <source :srcset="srcEncode" media="(min-width: 577px)" />
    <source :srcset="srcEncodeCustomWidth(576)" media="(max-width: 576px)" />
    <img
      :loading="loading"
      @click="$emit('click')"
      :class="classImg"
      :style="styleImg"
      :src="srcEncode"
      :alt="alt"
      @error="imgError"
      :width="width"
      :height="height"
    />
  </picture>
</template>

<script>
export default {
  data() {
    return {
      error: false,
    };
  },
  props: {
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
    height: String,
  },
  computed: {
    isWebpType() {
      return this.srcEncode.match(/.(jpg|png|jpeg|jfif)$/i);
    },
    webpSrc() {
      return this.isWebpType && `${this.srcEncode}.webp`;
    },
    srcEncode() {
      return encodeURI(this.src);
    },
  },
  methods: {
    imgError() {
      if (this.error === false) this.error = true;
    },
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
  display: block;
}
</style>