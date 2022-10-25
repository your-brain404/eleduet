<template>
  <section class="services">
    <div class="content">
      <div class="section-content">
        <Picture
          :src="`${origin}/storage/media/${$store.state.Settings.settings.li_marker}`"
          :alt="$store.state.Settings.settings.li_marker_alt"
          :width="48"
          :height="75"
          :classImg="'bolt'"
        />
        <h3 class="section-title">
          {{ homeServicesDesc.title }} <br />
          <span>{{ homeServicesDesc.subtitle }}</span>
        </h3>
      </div>
      <carousel
        v-if="homeServices.length > 0"
        class="service-carousel"
        :items="carouselItems"
        :nav="false"
        :dots="false"
      >
        <router-link
          v-for="(service, i) in homeServices"
          :key="`home-service-${i}`"
          class="service"
          :to="{
            name: 'Service',
            params: {
              id: service.id,
              title: slug(service.title),
            },
          }"
        >
          <Picture
            :width="service.photo_sizes.width"
            :height="service.photo_sizes.height"
            :alt="service.photo_alt"
            :classImg="'photo bg'"
            :src="origin + '/storage/media/' + service.photo"
            :mobile-version="576"
          />

          <h4 class="service-title">{{ service.title }}</h4>
          <div v-if="service.short_description" class="description">
            {{
              service.short_description
                .replace(/(<([^>]+)>)/gi, "")
                .substring(0, 100) + "..."
            }}
          </div>
        </router-link>
      </carousel>
      <router-link :to="{ path: homeServicesDesc.link }">
        <button class="button first-button">
          {{ homeServicesDesc.button_name }}
        </button>
      </router-link>
    </div>
  </section>
</template>

<script>
import carousel from "vue-owl-carousel2";
import slug from "@/helpers/links/slug";
import adminTableComponent from "@/mixins/admin-table-component";
import Picture from "@/components/picture/Picture";

export default {
  mixins: [adminTableComponent],
  components: {
    carousel,
    Picture,
  },
  data() {
    return {
      origin: window.location.origin,
      carouselItems: 3.5,
      screenWidth: window.innerWidth,
      table: "homeServices",
    };
  },
  computed: {
    homeServices() {
      return this.$store.state.HomeServices?.homeServices || [];
    },
    homeServicesDesc() {
      return this.$store.state.HomeServicesDesc?.homeServicesDesc || {};
    },
    tableData() {
      return this.homeServices;
    },
  },
  methods: {
    setCarouselItems() {
      if (this.screenWidth < 992) this.carouselItems = 2;
      if (this.screenWidth < 768) this.carouselItems = 1;
    },
    slug,
  },
  created() {
    this.registerModule("HomeServicesDesc");
    this.setCarouselItems();
    if (this.homeServices.length === 0)
      this.$store.dispatch("HomeServices/homeServices");
    if (Object.values(this.homeServicesDesc).length === 0)
      this.$store.dispatch("HomeServicesDesc/homeServicesDesc");
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .service {
    img {
      height: 200px;
      border-radius: var(--global-border-radius);
      object-fit: cover;
    }
  }
  .bolt {
    height: 75px;
    padding-right: 1.3rem;
    @media (max-width: 400px) {
      margin-bottom: 0.5rem;
    }
  }
}
section.services {
  margin-top: 7rem;
  padding-bottom: 3rem;
  .content {
    padding-left: var(--global-padding-x-desktop);
    @media (max-width: 992px) {
      padding-left: var(--global-padding-x-mobile);
      padding-right: var(--global-padding-x-mobile);
    }
    .section-content {
      display: flex;
      align-items: center;
      margin-bottom: 3rem;

      @media (max-width: 400px) {
        flex-direction: column;
      }
      .section-title {
        span {
          font-weight: 500;
          font-size: 1rem;
        }
      }
    }
    .owl-carousel .owl-stage-outer {
      overflow: unset !important;
    }
    .service {
      padding: 1.5rem;
      transition: 0.2s background-color, 0.2s transform;
      border-radius: var(--global-border-radius);
      box-shadow: 0px 10px 40px #0000000f;
      margin-right: 0.8rem;
      display: block;
      &:hover {
        background-color: var(--first-color);
        transform: translateY(-10px);
        .service-title,
        .description {
          color: white !important;
        }
      }

      .service-title {
        font-weight: 700;
        font-size: 1.5rem;
        margin-top: 1rem;
        color: var(--first-color);
      }
      .description {
        font-weight: 600;
        line-height: 16px;
        color: black;
      }
    }
    .button {
      margin-top: 1.5rem;
    }
  }
}
</style>

<style lang="scss">
section.services {
  .owl-carousel .owl-item {
    display: flex;
    align-items: stretch;
  }
  .owl-carousel .owl-stage {
    display: flex;
  }
  .owl-carousel .owl-stage-outer {
    overflow: unset !important;
  }
}
</style>
