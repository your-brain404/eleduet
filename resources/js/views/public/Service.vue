<template>
  <section class="service-page">
    <section class="service">
      <div class="content">
        <div class="section-content">
          <Picture
            :src="`${origin}/storage/media/${$store.state.Settings.settings.li_marker}`"
            :alt="$store.state.Settings.settings.li_marker_alt"
            :width="48"
            :height="75"
            :classImg="'bolt'"
          />
          <h3 class="section-title" v-html="prepareTitle(service.title)"></h3>
        </div>

        <div class="short-description" v-html="service.short_description"></div>
      </div>
      <div class="position-relative photo-container">
        <Picture
          v-if="service.photo_sizes"
          :width="service.photo_sizes.width"
          :height="service.photo_sizes.height"
          :alt="service.photo_alt"
          :src="`${origin}/storage/media/${service.photo}`"
          :classImg="'img-fluid photo service-photo'"
          :styleImg="{ 'object-position': service.photo_background_position }"
        />
      </div>

      <div class="description" v-html="service.description"></div>

      <div v-if="gallery.length > 0" class="gallery">
        <CoolLightBox
          :items="
            gallery.map((photo) =>
              existingPhotoPath(`${origin}/storage/media/${photo.path}`)
            )
          "
          :index="index"
          @close="index = null"
        >
        </CoolLightBox>
        <div
          v-for="(photo, i) in gallery"
          :key="`photo-gallery-service-${i}`"
          class="photo-container"
          @click="index = i"
        >
          <Picture
            :width="photo.photo_sizes.width"
            :height="photo.photo_sizes.height"
            :alt="photo.photo_alt"
            :src="`${origin}/storage/media/${photo.path}`"
            :classImg="'photo'"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import axios from "axios";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import Picture from "@/components/picture/Picture";
import getModule from "@/helpers/store/get-module";
import existingPhotoPath from "@/helpers/links/existing-photo-path";

export default {
  components: {
    CoolLightBox,
    Picture,
  },
  data() {
    return {
      origin: window.location.origin,
      gallery: [],
      index: null,
    };
  },
  computed: {
    service() {
      return this.$store.state.Service?.service || {};
    },
  },
  methods: {
    existingPhotoPath,
    async fetchData() {
      await this.$store.dispatch("Service/service", this.$route.params.id);
      this.$emit("metaTitle", this.service.title);
    },
    fetchGallery() {
      axios
        .get(`/api/gallery/get_photos/services/${this.$route.params.id}/`)
        .then((res) => (this.gallery = res.data))
        .catch((err) => {
          console.error(err);
          this.$store.commit(
            "setSnackbar",
            "Przepraszamy nie udało się załadować galerii..."
          );
        });
    },
    prepareTitle(title) {
      return title?.replace("{", "<span>").replace("}", "</span>");
    },
  },
  created() {
    this.$store.registerModule("Service", getModule("service"));
    if (Object.values(this.service).length === 0) this.fetchData();
    if (this.gallery.length === 0) this.fetchGallery();
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .bolt {
    height: 75px;
    padding-right: 1.3rem;
    @media (max-width: 400px) {
      margin-bottom: 0.5rem;
    }
  }
  .service-photo {
    position: relative;
    z-index: 2;
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-bottom-left-radius: var(--global-border-radius);
    border-top-left-radius: var(--global-border-radius);
    @media (max-width: 992px) {
      margin-bottom: 3rem;
    }
  }
  .gallery {
    .photo {
      border-radius: 12px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }
}
@mixin mircel-padding {
  padding-left: var(--global-padding-x-desktop);
  @media (max-width: 992px) {
    padding-left: var(--global-padding-x-mobile);
    padding-right: var(--global-padding-x-mobile);
  }
}
section.service-page {
  position: relative;
}
section.service {
  display: flex;
  flex-wrap: wrap;
  padding-top: 7rem;
  z-index: 1;
  position: relative;
  margin-bottom: 7rem;
  .gallery {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-right: var(--global-padding-x-desktop);
    @media (max-width: 992px) {
      order: 4;
    }
    @include mircel-padding();
    .photo-container {
      width: 25%;
      cursor: pointer;
      @media (max-width: 992px) {
        width: 100%;
      }
      padding: 0.3rem;
    }
  }
  .description {
    @include mircel-padding();
    margin-top: 5rem !important;
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    line-height: 17px;
    margin-top: 1rem;
    @media (max-width: 992px) {
      order: 3;
    }
  }
  .content,
  .photo-container {
    width: 50%;
    @media (max-width: 992px) {
      width: 100%;
      order: 1;
    }
  }

  .content {
    position: relative;
    @include mircel-padding;
    @media (max-width: 992px) {
      order: 2;
    }
    .section-content {
      display: flex;
      align-items: center;
      @media (max-width: 400px) {
        flex-direction: column;
      }
    }

    .short-description {
      font-size: 1rem;
      font-weight: 600;
      line-height: 17px;
      margin-top: 1rem;
    }

    a.phone-link {
      display: flex;
      margin-top: 3rem;
      @mixin box-shadow {
        box-shadow: 0px 10px 40px #0000000f;
      }
      @include box-shadow;
      border-radius: var(--global-border-radius);
      width: fit-content;
      padding: 1rem 2rem;
      transition: 0.2s background-color;
      @media (max-width: 400px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      &:hover {
        background-color: var(--first-color);
        .phone-content,
        .phone-content span {
          color: white;
        }
      }
      .icon-container {
        width: 50px;
        height: 50px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        @include box-shadow;
        img {
          height: 20px;
        }
      }

      .phone-content {
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        font-weight: 600;
        line-height: 26px;
        padding-left: 2rem;
        color: black;
        @media (max-width: 400px) {
          padding-left: 0;
          margin-top: 1rem;
          width: 100%;
        }
        span {
          font-size: 1.8rem;
          font-weight: 700;
          color: #333333;
        }
      }
    }
  }
}
</style>
