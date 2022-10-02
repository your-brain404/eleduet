<template>
  <section class="about-page">
    <div class="content" v-html="data.description"></div>

    <div class="gallery">
      <CoolLightBox
        :items="gallery.map((photo) => `${origin}/storage/media/${photo.path}`)"
        :index="index"
        @close="index = null"
      >
      </CoolLightBox>
      <div
        v-for="(photo, i) in gallery"
        :key="`photo-${photo.id}`"
        class="photo"
      >
        <Picture
          @click="index = i"
          :width="photo.photo_sizes.width"
          :height="photo.photo_sizes.height"
          :alt="photo.photo_alt"
          :src="`${origin}/storage/media/${photo.path}`"
          :classImg="'img'"
        />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import Picture from "@/components/picture/Picture";

export default {
  components: {
    CoolLightBox,
    Picture,
  },
  props: ["reloadFlag"],
  watch: {
    reloadFlag() {
      if (this.reloadFlag) this.reloadData();
    },
  },
  data() {
    return {
      origin: window.location.origin,
      table: "about_page",
      index: null,
      gallery: [],
    };
  },
  computed: {
    data() {
      return this.$store.getters.aboutPage;
    },
  },
  methods: {
    emitData() {
      this.$emit("blockDataEmit", [this.data]);
    },
    async fetchData() {
      await this.$store.dispatch("aboutPage");
      this.emitData();
    },
    async reloadData() {
      this.$store.commit("aboutPage", []);
      await this.fetchData();
    },
    async fetchGallery() {
      await axios
        .get(`/api/gallery/get_photos/${this.table}/1`)
        .then((res) => {
          this.gallery = res.data;
        })
        .catch((err) => {
          console.log(err);
          this.$store.commit(
            "setSnackbar",
            "Przepraszamy, nie udało się załadować galerii..."
          );
        });
    },
  },
  created() {
    this.fetchData();
    this.fetchGallery();
  },
};
</script>

<style lang="scss" scoped>
@mixin mircel-padding {
  padding-left: var(--global-padding-x-desktop);
  padding-right: var(--global-padding-x-desktop);
  @media (max-width: 992px) {
    padding-left: var(--global-padding-x-mobile);
    padding-right: var(--global-padding-x-mobile);
  }
}
::v-deep {
  .img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
  }
}
section.about-page {
  @include mircel-padding();
  padding-top: 7rem;
  padding-bottom: 7rem;

  .gallery {
    display: flex;
    flex-wrap: wrap;

    .photo {
      width: 33%;
      @media (max-width: 992px) {
        width: 100%;
      }
    }
  }
}
</style>
