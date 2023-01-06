<template>
  <section class="about-page">
    <div class="content" v-html="aboutPage.description"></div>

    <div class="gallery">
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
import axios from "@/plugins/axios/axios";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import Picture from "@/components/picture/Picture";
import adminTableComponent from "@/mixins/admin-table-component";
import existingPhotoPath from "@/helpers/links/existing-photo-path";
import aboutPageModule from "@/store/modules/aboutPage/aboutPageModule";

export default {
  components: {
    CoolLightBox,
    Picture,
  },
  mixins: [adminTableComponent],

  data() {
    return {
      origin: window.location.origin,
      table: "aboutPage",
      index: null,
      gallery: window.global.cms.aboutPage.aboutPageGallery || [],
      module: aboutPageModule,
    };
  },
  computed: {
    aboutPage() {
      return this.$store.state.AboutPage?.aboutPage || {};
    },
    tableData() {
      return [this.aboutPage];
    },
  },
  methods: {
    existingPhotoPath,
    async fetchGallery() {
      await axios
        .get(`/api/gallery/get_photos/about_page/1`)
        .then((res) => {
          this.gallery = res.data;
        })
        .catch((err) => {
          console.log(err);
          this.$store.commit(
            "toast",
            "Przepraszamy, nie udało się załadować galerii..."
          );
        });
    },
  },

  created() {
    if (this.gallery.length === 0) this.fetchGallery();
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
