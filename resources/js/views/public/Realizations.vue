<template>
  <section class="realizations-page">
    <CoolLightBox
      :items="
        realizations.map((photo) =>
          existingPhotoPath(`${origin}/storage/media/${photo.path}`)
        )
      "
      :index="index"
      @close="index = null"
    >
    </CoolLightBox>
    <div class="content">
      <div
        v-for="(realization, i) in realizations"
        :key="`realization-${i}`"
        class="realization"
        @click="index = i"
      >
        <div class="wrapper">
          <Picture
            :classImg="'photo'"
            height="200"
            :alt="realization.photo_alt"
            :src="`${origin}/storage/media/${realization.path}`"
          />

          <div class="text">{{ realization.photo_alt }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import adminTableComponent from "@/mixins/admin-table-component";
import Picture from "../../components/picture/Picture.vue";
import existingPhotoPath from "@/helpers/links/existing-photo-path";

export default {
  mixins: [adminTableComponent],
  components: {
    CoolLightBox,
    Picture,
  },

  data() {
    return {
      origin: window.location.origin,
      table: "realizations",
      index: null,
      emit: false,
    };
  },
  methods: {
    existingPhotoPath,
  },
  computed: {
    realizations() {
      return this.$store.state.Realizations?.realizations || [];
    },
    tableData() {
      return this.realizations;
    },
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
section.realizations-page {
  margin-top: 7rem;
  margin-bottom: 7rem;
  ::v-deep .content {
    @include mircel-padding;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    .realization {
      width: 25%;
      cursor: pointer;
      border-radius: 12px;
      background-color: #fff;
      @media (max-width: 992px) {
        width: 100%;
      }
      padding: 0.3rem;
      .wrapper {
        border-radius: 12px;
        padding: 1rem;
        height: 100%;
        background-color: var(--first-color);
        .photo {
          object-fit: cover;
          border-radius: 12px;
          width: 100%;
          height: 200px;
        }

        .text {
          margin-top: 1rem;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
        }
      }
    }
  }
}
</style>
