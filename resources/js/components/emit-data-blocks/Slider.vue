<template>
  <section v-if="slider.length > 0" class="slider">
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
          :src="url(slide.photo)"
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
import adminTableComponent from "@/mixins/admin-table-component.js";
import url from "@/helpers/photo/url.js";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import existingPhotoPath from "@/helpers/links/existing-photo-path.js";
import sliderModule from "@/store/modules/slider/sliderModule.js";

export default {
  components: {
    CustomLink: () =>
      import(
        /* webpackChunkName: 'custom-link' */ "@/components/custom-link/CustomLink.vue"
      ),
    Picture: () =>
      import(
        /* webpackChunkName: 'picture' */ "@/components/picture/Picture.vue"
      ),
    Carousel,
    Slide,
  },
  mixins: [adminTableComponent],
  watch: {
    slider() {
      this.emitData();
      this.carousel = false;
      setTimeout(() => (this.carousel = true), 1);
    },
  },
  data() {
    return {
      origin: window.location.origin,
      table: "slider",
      carousel: true,
      module: sliderModule,
    };
  },

  computed: {
    slider() {
      return this.$store.state.Slider?.slider || [];
    },
    tableData() {
      return this.slider;
    },
  },
  methods: {
    url,
    existingPhotoPath,
  },
};
</script>
  <style lang="scss">
@import "@scss/pages/main/slider.scss";
</style>
  