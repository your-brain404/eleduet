<template>
  <picture>
    <source v-if="!error && webp" :srcset="webp" type="image/webp" />
    <source :srcset="srcEncode" />
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
    webp() {
      return (
        this.srcEncode.match(/.(jpg|png|jpeg|jfif)$/) &&
        `${this.srcEncode}.webp`
      );
    },
    srcEncode() {
      return encodeURI(this.src);
    },
  },
  methods: {
    imgError() {
      if (this.error === false) this.error = true;
    },
  },
};
</script>