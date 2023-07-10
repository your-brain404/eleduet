<template>
  <section class="slider">
    <carousel
      v-if="carousel"
      class="slider-carousel"
      :items-to-show="1"
      :wrap-around="true"
      :autoplay="5000"
      :transition="500"
      snap-align="start"
    >
      <slide v-for="(slide, i) in slider" :key="`slide-${i}`" class="slide">
        <Picture
          class="slide-picture"
          :src="`/storage/media/${slide.photo}`"
          :alt="slide.photo_alt"
          :width="slide.photo_sizes.width"
          :height="slide.photo_sizes.height"
          :classImg="'slide-photo'"
          :loading="i === 0 ? 'eager' : 'lazy'"
          :styleImg="{
            'object-size': slide.photo_background_size,
            'object-position': slide.photo_background_position,
          }"
          :mobile-version="576"
        />
        <div class="content">
          <h2 class="slide-title">{{ slide.title }}</h2>
          <p class="slide-subtitle">{{ slide.subtitle }}</p>

          <custom-link
            class="first-button-link"
            :path="slide.button_link_1"
            :download="slide.button_download_1"
          >
            <button class="button first-button">
              {{ slide.button_name_1 }}
            </button>
          </custom-link>
          <custom-link
            :path="slide.button_link_2"
            :download="slide.button_download_2"
          >
            <button class="button second-button">
              {{ slide.button_name_2 }}
            </button>
          </custom-link>
        </div>
        <div class="mask"></div>
      </slide>
    </carousel>
  </section>
</template>
 
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import sliderModule from "@/store/modules/slider/sliderModule.js";
import Picture from "@/components/picture/Picture.vue";
import CustomLink from "@/components/custom-link/CustomLink.vue";

export default {
  components: {
    CustomLink,
    Picture,
    Carousel,
    Slide,
  },
  watch: {
    slider() {
      this.carousel = false;
      setTimeout(() => (this.carousel = true), 1);
    },
  },
  data() {
    return {
      carousel: true,
    };
  },

  computed: {
    slider() {
      return this.$store.state.Slider?.slider || [];
    },
  },
  created() {
    if (!this.$store.hasModule("Slider")) {
      this.$store.registerModule("Slider", sliderModule);
    }
    if (this.slider.length === 0)
      this.$store.dispatch("Slider/slider", sliderModule);
  },
};
</script>
<style lang="scss">
@import "@scss/pages/main/slider.scss";
</style>
