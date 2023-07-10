<template>
  <section v-if="title" class="banner position-relative">
    <component :is="'style'">
      .banner { height: {{ height }}px; } @media(min-width: 768px) { .banner {
      height: {{ heightMd }}px; } } @media(min-width: 992px) { .banner { height:
      {{ heightLg }}px; } }
    </component>
    <Picture
      class="w-100 h-100"
      :width="photoSizes.width"
      :height="photoSizes.width"
      :alt="alt"
      :src="`/storage/media/${photo}`"
      :styleImg="{
        'object-position': backgroundPosition,
        'object-fit': 'cover',
      }"
      classImg="img-fluid h-100"
    />
    <div class="mask"></div>
    <div class="content">
      {{ title }}
    </div>
  </section>
</template>

<script>
import Picture from "@/components/picture/Picture.vue";

export default {
  components: {
    Picture,
  },

  computed: {
    currentSubpage() {
      return (
        this.$store.getters.currentSubpage ||
        window.global.config.currentSubpage
      );
    },

    title() {
      return this.currentSubpage?.title;
    },
    height() {
      return this.currentSubpage?.height;
    },
    heightMd() {
      return this.currentSubpage?.height_md;
    },
    heightLg() {
      return this.currentSubpage?.height_lg;
    },
    backgroundPosition() {
      return this.currentSubpage?.photo_background_position;
    },
    photo() {
      return this.currentSubpage?.photo;
    },
    alt() {
      return this.currentSubpage?.photo_alt;
    },
    photoSizes() {
      return this.currentSubpage?.photo_sizes;
    },
  },
};
</script>

<style lang="scss" scoped>
section.banner {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  .mask {
    background: transparent linear-gradient(90deg, #000000 -5%, #00000000 41%)
      0% 0% no-repeat padding-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }
  .content {
    color: white;
    font-weight: 700;
    font-size: 2.4rem;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 2;
    padding: 2.7rem var(--global-padding-x-desktop);
    height: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
      padding-left: var(--global-padding-x-mobile);
    }
  }
}
</style>
