<template>
  <section class="services-page">
    <section class="about" v-if="Object.entries(servicesPageDesc).length > 0">
      <div class="content">
        <div class="section-content">
          <Picture
            :src="`/storage/media/${settings.li_marker}`"
            :alt="settings.li_marker_alt"
            :width="48"
            :height="75"
            classImg="bolt"
          />

          <h3
            class="section-title"
            v-html="prepareTitle(servicesPageDesc.title)"
          ></h3>
        </div>

        <div
          class="short-description"
          v-html="servicesPageDesc.short_description"
        ></div>
      </div>
      <div class="position-relative photo-container">
        <Picture
          :width="servicesPageDesc.photo_sizes.width"
          :height="servicesPageDesc.photo_sizes.height"
          :alt="servicesPageDesc.photo_alt"
          :src="`/storage/media/${servicesPageDesc.photo}`"
          classImg="photo bg"
          :styleImg="{
            'object-position': servicesPageDesc.photo_background_position,
          }"
        />
        <Picture
          v-if="servicesPageDesc.photo"
          :width="170"
          :height="170"
          alt="elipsa"
          src="/storage/img/home/ellipse1.svg"
          classImg="ellipse"
        />
      </div>
    </section>

    <div class="guarantee" v-html="servicesPageDesc.description"></div>

    <div class="skills-blocks">
      <div
        class="block"
        v-for="attribute in servicesAttributes"
        :key="'service-attribute-' + attribute.id"
      >
        <div class="content" v-html="prepareBlockHtml(attribute.title)"></div>
      </div>
    </div>

    <div
      v-for="serviceCategory in serviceCategories"
      :key="`service-category-${serviceCategory.title}`"
      class="services-blocks"
    >
      <div class="content">
        <div class="section-content">
          <Picture
            width="auto"
            :height="75"
            alt="marker"
            :src="`/storage/media/${settings.li_marker}`"
            classImg="bolt"
          />
          <h3
            class="section-title"
            v-html="prepareTitle(serviceCategory.title)"
          ></h3>
        </div>
      </div>

      <div class="blocks">
        <div
          v-for="(service, i) in filterServices(serviceCategory.id)"
          :key="`company-service-${i}`"
          class="block"
        >
          <router-link
            :to="{
              name: 'Service',
              params: {
                id: service.id,
                title: slug(service.title),
              },
            }"
            class="wrapper"
          >
            <Picture
              :width="240"
              :height="200"
              :alt="service.photo_alt"
              :src="`/storage/media/${service.photo}`"
              classImg="photo"
              :styleImg="{
                'object-position': service.photo_background_position,
              }"
            />
            <div class="service-title">
              {{ service.title }}
            </div>
          </router-link>
        </div>
      </div>

      <div
        v-if="serviceCategory.description"
        class="description"
        v-html="serviceCategory.description"
      ></div>
    </div>

    <CallUs />
  </section>
</template>

<script>
import CallUs from "@/components/pages/services/CallUs";
import slug from "@/helpers/links/slug";
import Picture from "@/components/picture/Picture";
import adminTableComponent from "@/mixins/admin-table-component";
import servicesModule from "@/store/modules/services/servicesModule";
import serviceCategoriesModule from "@/store/modules/serviceCategories/serviceCategoriesModule";
import servicesServiceCategoriesModule from "@/store/modules/servicesServiceCategories/servicesServiceCategoriesModule";
import servicesPageDescModule from "@/store/modules/servicesPageDesc/servicesPageDescModule";
import servicesAttributesModule from "@/store/modules/servicesAttributes/servicesAttributesModule";

export default {
  mixins: [adminTableComponent],
  components: {
    CallUs,
    Picture,
  },
  data() {
    return {
      table: "services",
      styleText: `.guarantee ul li::before { background-image:
                url(/storage/img/layout/clef.png) }`,
      module: servicesModule,
      settings: window.global.config.settings,
    };
  },
  methods: {
    slug,
    prepareBlockHtml(text) {
      return text.replace("{", "<b>").replace("}", "</b>");
    },
    prepareTitle(title) {
      return title?.replace("{", "<span>").replace("}", "</span>");
    },
    filterServices(serviceCategoryId) {
      let categoryServices = this.servicesServiceCategories
        .filter((row) => row.service_category_id == serviceCategoryId)
        .map((row) => row.service_id);

      return this.services?.filter((service) =>
        categoryServices.includes(service.id)
      );
    },
  },
  computed: {
    services() {
      return this.$store.state.Services?.services || [];
    },
    tableData() {
      return this.services;
    },
    servicesPageDesc() {
      return this.$store.state.ServicesPageDesc?.servicesPageDesc || {};
    },
    servicesAttributes() {
      return this.$store.state.ServicesAttributes?.servicesAttributes || [];
    },

    serviceCategories() {
      return this.$store.state.ServiceCategories?.serviceCategories || [];
    },
    servicesServiceCategories() {
      return (
        this.$store.state.ServicesServiceCategories
          ?.servicesServiceCategories || []
      );
    },
  },
  created() {
    this.registerModule("serviceCategories", serviceCategoriesModule);
    this.registerModule(
      "servicesServiceCategories",
      servicesServiceCategoriesModule
    );
    this.registerModule("servicesPageDesc", servicesPageDescModule);
    this.registerModule("servicesAttributes", servicesAttributesModule);
    if (this.serviceCategories.length === 0)
      this.$store.dispatch("ServiceCategories/serviceCategories");
    if (this.servicesServiceCategories.length === 0)
      this.$store.dispatch(
        "ServicesServiceCategories/servicesServiceCategories"
      );
    if (Object.values(this.servicesPageDesc).length === 0)
      this.$store.dispatch("ServicesPageDesc/servicesPageDesc");
    if (this.servicesAttributes.length === 0)
      this.$store.dispatch("ServicesAttributes/servicesAttributes");
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  section.about {
    .photo-container {
      .ellipse {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(-50%, 50%);
        height: 170px;
        z-index: 0;
      }
    }
    .photo {
      position: relative;
      z-index: 2;
      height: 160px;
      object-fit: cover;
      border-bottom-left-radius: var(--global-border-radius);
      border-top-left-radius: var(--global-border-radius);
      @media (max-width: 992px) {
        margin-top: 3rem;
      }
    }
  }

  .section-content {
    .bolt {
      height: 75px;
      padding-right: 1.3rem;
      @media (max-width: 400px) {
        margin-bottom: 0.5rem;
      }
    }
  }
  .services-blocks {
    .photo {
      width: 100%;
      height: 200px;
      object-fit: cover;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 12px;
      margin-bottom: 1rem;
    }
  }
}
section.services-page {
  @mixin mircel-padding {
    padding-left: var(--global-padding-x-desktop);
    @media (max-width: 992px) {
      padding-left: var(--global-padding-x-mobile);
      padding-right: var(--global-padding-x-mobile);
    }
  }
  .section-content {
    display: flex;
    align-items: center;
    @media (max-width: 400px) {
      flex-direction: column;
    }
  }
  section.about {
    display: flex;
    flex-wrap: wrap;
    padding-top: 7rem;
    z-index: 1;

    .content,
    .photo-container {
      width: 50%;
      height: fit-content;
      @media (max-width: 992px) {
        width: 100%;
      }
    }

    .content {
      @include mircel-padding;
      z-index: 3;
      .section-content {
        display: flex;
        align-items: center;
        @media (max-width: 400px) {
          flex-direction: column;
        }
        .bolt {
          height: 75px;
          padding-right: 1.3rem;
          @media (max-width: 400px) {
            margin-bottom: 0.5rem;
          }
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

  .guarantee {
    position: relative;
    z-index: 1;
    margin-top: 3rem;
    padding-left: var(--global-padding-x-desktop);
    padding-right: var(--global-padding-x-desktop);
    @media (max-width: 992px) {
      padding-left: var(--global-padding-x-mobile);
      padding-right: var(--global-padding-x-mobile);
    }
  }

  .skills-blocks {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    margin-top: 4rem;
    padding-left: var(--global-padding-x-desktop);
    padding-right: var(--global-padding-x-desktop);
    @media (max-width: 992px) {
      padding-left: var(--global-padding-x-mobile);
      padding-right: var(--global-padding-x-mobile);
    }
    .block {
      width: 50%;
      margin-bottom: 1rem;
      @media (min-width: 992px) {
        &:nth-child(2n + 1) {
          padding-right: 0.25rem;
        }
        &:nth-child(2n + 2) {
          padding-left: 0.25rem;
        }
      }
      @media (max-width: 992px) {
        width: 100%;
      }
      .content {
        padding: 2rem;
        box-shadow: 0px 10px 40px #0000000f;
        font-size: 1rem;
        font-weight: 500;
        height: 100%;
        color: black;
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        @media (max-width: 992px) {
          width: 100%;
        }
      }
    }
  }

  .services-blocks {
    position: relative;
    margin-top: 5rem;
    z-index: 2;
    padding-right: var(--global-padding-x-desktop);
    @include mircel-padding;

    .content {
      margin-bottom: 1rem;
    }
    .blocks {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      .block {
        width: 25%;
        padding: 0.3rem;
        @media (max-width: 992px) {
          width: 100%;
        }
        @media (min-width: 992px) {
          &:nth-child(4n - 3) {
            padding-left: 0;
          }
          &:nth-child(4n) {
            padding-right: 0;
          }
        }
        .wrapper {
          border-radius: 12px;
          box-shadow: 0px 10px 40px #0000000f;
          height: 100%;
          padding: 1rem;
          background-color: white;
          display: block;

          .service-title {
            font-weight: 900;
            color: black;
          }
        }
      }
    }
    .description {
      margin-top: 2rem;
      font-weight: 600;
      font-size: 1.1rem;
      color: black;
    }
  }

  .call-us {
    margin-top: 5rem;
  }
}
</style>

<style lang="scss">
.guarantee {
  h3 {
    color: var(--first-color);
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
ul {
  padding-left: 0;
  list-style-type: none;
  line-height: 24px;
  li {
    display: flex;
    font-weight: 500;
    align-items: center;
    font-size: 1.2rem;
    &::before {
      content: "....";
      color: white;
      display: block;
      background-image: url("/storage/img/layout/clef.png");
      background-size: contain;
      background-repeat: no-repeat;
      width: 9px;
      height: 21px;
      margin-right: 1rem;
    }
  }
}
.skills-blocks {
  .block {
    b {
      color: var(--first-color);
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 25px;
    }
  }
}
</style>
