<template>
  <section class="attributes">
    <VueEasyLightbox
      :visible="Number.isInteger(lightboxIndex)"
      :imgs="
        attributes.map((attr) =>
          existingPhotoPath(`/storage/media/${attr.photo}`)
        )
      "
      :index="lightboxIndex"
      @hide="lightboxIndex = null"
    >
    </VueEasyLightbox>
    <div class="content">
      <div class="section-content">
        <Picture
          :src="`/storage/media/${settings.li_marker}`"
          :alt="settings.li_marker_alt"
          :width="48"
          :height="75"
          :classImg="'bolt'"
        />
        <h3
          v-if="attributesDesc.id"
          class="section-title"
          v-html="prepareTitle(attributesDesc.title)"
        ></h3>
      </div>

      <div class="attributes-container">
        <div
          v-for="(attribute, i) in attributes"
          :key="`attribute-${i}`"
          class="attribute"
        >
          <div class="attribute-content">
            <Picture
              @click="lightboxIndex = i"
              width="150"
              height="65"
              :alt="attribute.photo_alt"
              :classImg="'icon'"
              :src="`/storage/media/${attribute.photo}`"
            />

            <div
              class="description"
              v-html="prepareTitle(attribute.title)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import adminTableComponent from "@/mixins/admin-table-component.js";
import Picture from "@/components/picture/Picture.vue";
import attributesModule from "@/store/modules/attributes/attributesModule.js";
import attributesDescModule from "@/store/modules/attributesDesc/attributesDescModule.js";
import VueEasyLightbox from "vue-easy-lightbox";
import existingPhotoPath from "@/helpers/links/existing-photo-path.js";

export default {
  mixins: [adminTableComponent],
  components: {
    Picture,
    VueEasyLightbox,
  },

  data() {
    return {
      table: "attributes",
      module: attributesModule,
      settings: window.global.config.settings,
      lightboxIndex: null,
    };
  },
  computed: {
    attributes() {
      return (
        this.$store.state.Attributes?.attributes ||
        window.global.cms.homePage.attributes ||
        []
      );
    },
    attributesDesc() {
      return (
        this.$store.state.AttributeDesc?.attributesDesc ||
        window.global.cms.homePage.attributesDesc ||
        {}
      );
    },
    tableData() {
      return this.attributes;
    },
  },
  methods: {
    existingPhotoPath,
    prepareTitle: (title) =>
      title.replaceAll("{", "<span>").replaceAll("}", "</span>"),
  },
  created() {
    this.registerModule("AttributesDesc", attributesDescModule);
    if (this.attributes.length === 0) this.fetchData();
    if (Object.values(this.attributesDesc).length === 0)
      this.$store.dispatch("AttributesDesc/attributesDesc");
  },
};
</script>

<style lang="scss" scoped>
:deep(.attribute .icon) {
  height: 65px;
  padding-right: 1.5rem;
  width: auto;
  cursor: pointer;
}
:deep(.bolt) {
  padding-right: 1.3rem;

  @media (max-width: 400px) {
    margin-bottom: 0.5rem;
  }
}

section.attributes {
  .content {
    padding: var(--global-padding-x-desktop);
    padding-top: 0;
    @media (max-width: 992px) {
      padding-left: var(--global-padding-x-mobile);
      padding-right: var(--global-padding-x-mobile);
    }
    .section-content {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;

      @media (max-width: 400px) {
        flex-direction: column;
      }
      .section-title {
        span {
          font-weight: 700;
        }
      }
    }

    .attributes-container {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      .attribute {
        width: 33.33%;
        margin-bottom: 1rem;
        @media (max-width: 992px) {
          width: 100%;
        }

        @media (min-width: 992px) {
          &:nth-child(3n + 2) {
            padding-left: 0.8rem;
            padding-right: 0.8rem;
          }
        }
        .attribute-content {
          box-shadow: 0px 10px 40px #0000000f;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          border-radius: 12px;
          height: 100%;
          @media (max-width: 576px) {
            flex-direction: column;
            &:deep(.icon) {
              padding-right: 0 !important;
              margin-bottom: 0.9rem;
            }
            .description {
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.attribute-content {
  .description {
    font-weight: 700 !important;
    font-size: 1rem;
    color: black;
    line-height: 19px;
    span {
      color: var(--first-color) !important;
    }
  }
}
</style>
