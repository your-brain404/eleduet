<template>
  <section v-if="slider.length > 0" class="slider">
    <carousel
      v-if="carousel"
      class="slider-carousel"
      :items="1"
      :nav="false"
      @update="update"
      :loop="true"
      :autoplay="true"
      :autoplaySpeed="2000"
    >
      <div v-for="(slide, i) in slider" :key="`slide-${i}`" class="slide">
        <Picture
          class="slide-picture"
          :src="url(slide.photo)"
          :alt="slide.photo_alt"
          :width="slide.photo_sizes.width"
          :height="slide.photo_sizes.height"
          :classImg="'slide-photo'"
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
      </div>
    </carousel>
  </section>
</template>
 
<script>
import carousel from "vue-owl-carousel2";
import CustomLink from "@/components/custom-link/CustomLink";
import adminTableComponent from "@/mixins/admin-table-component";
import Picture from "@/components/picture/Picture";
import url from "@/helpers/photo/url";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

export default {
  components: {
    carousel,
    CustomLink,
    Picture,
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
  },
};
</script>

<style scoped lang="scss">
::v-deep .slide-photo {
  object-fit: cover;
  min-height: 500px;
  max-height: 500px;
}
section.slider {
  min-height: 500px;
  max-height: 500px;
  .slide {
    background-position: 50% 50%;
    display: flex;
    align-items: center;
    position: relative;

    .content {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      z-index: 1;
      padding-left: var(--global-padding-x-desktop);
      width: 50%;
      @media (max-width: 992px) {
        width: 100%;
        padding-left: var(--global-padding-x-mobile);
      }
      .slide-title,
      .slide-subtitle {
        color: white;
        text-shadow: 0 0 10px black;
      }
      .slide-title {
        font-size: 2.9rem !important;
        font-weight: 600;
      }
      .slide-subtitle {
        font-size: 1.4rem !important;
        font-weight: 300;
      }
    }

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgb(0 0 0 / 69%) 0%,
        rgba(0, 0, 0, 0) 41%
      );
    }
  }
  .slider-carousel {
    .owl-dots {
      position: absolute !important;
      bottom: 0;
      transform: translateY(50%);
    }
    .owl-carousel > .slide {
      display: none !important;
    }
  }
}
</style>

<style lang="scss">
section.slider {
  .first-button-link {
    margin-right: 8px;
  }
  .slide {
    &-picture {
      width: 100%;
    }
  }
  .slider-carousel {
    .owl-dots {
      position: absolute !important;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 50%);
      margin-top: 0 !important;
      align-items: center;
      display: flex;
      justify-content: center;
      background-color: #fff;
      border-radius: 15px;
      padding: 0.3rem 0.5rem;

      .owl-dot {
        &.active span,
        &:hover span {
          background-color: var(--first-color);
        }
        span {
          $dot-dimensions: 14px;
          width: $dot-dimensions;
          height: $dot-dimensions;
          margin-left: 4px;
          margin-right: 4px;
          transition: 0.2s background-color;
          background-color: #efefef;
        }
      }
    }
  }
}
</style>
