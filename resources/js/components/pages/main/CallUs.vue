<template>
  <section v-if="Object.entries(homeCallUs).length > 0" class="call-us">
    <component :is="'style'">
      .call-us-container { height: {{ homeCallUs.min_height }}px; }
      @media(min-width: 768px) { .call-us-container { height:
      {{ homeCallUs.min_height_md }}px; } } @media(min-width: 992px) {
      .call-us-container { height: {{ homeCallUs.min_height_lg }}px; } }
    </component>
    <div class="call-us-container">
      <Picture
        class="call-us-picture"
        :src="`/storage/media/${homeCallUs.photo}`"
        :alt="homeCallUs.photo_alt"
        :width="homeCallUs.photo_sizes.width"
        :height="homeCallUs.photo_sizes.height"
        :classImg="'bg'"
        :styleImg="{ 'object-position': homeCallUs.photo_background_position }"
      />
      <div class="mask"></div>
      <div class="content">
        <h3 class="section-title">{{ homeCallUs.title }}</h3>

        <a class="phone-link" :href="`tel:${contact.phone_1}`">
          <div class="icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27.01"
              height="27.008"
              viewBox="0 0 27.01 27.008"
            >
              <path
                id="Icon_ionic-ios-call"
                data-name="Icon ionic-ios-call"
                d="M30.72,25.65a22.686,22.686,0,0,0-4.739-3.171c-1.42-.682-1.941-.668-2.946.056-.837.6-1.378,1.167-2.341.956s-2.862-1.645-4.7-3.48-3.277-3.741-3.48-4.7.359-1.5.956-2.341c.724-1.005.745-1.526.056-2.946A22.238,22.238,0,0,0,10.35,5.28c-1.034-1.034-1.266-.809-1.835-.6a10.443,10.443,0,0,0-1.68.893A5.069,5.069,0,0,0,4.816,7.7c-.4.865-.865,2.475,1.5,6.68a37.272,37.272,0,0,0,6.553,8.74h0l.007.007.007.007h0a37.418,37.418,0,0,0,8.74,6.553c4.2,2.362,5.815,1.9,6.68,1.5a4.983,4.983,0,0,0,2.13-2.018,10.443,10.443,0,0,0,.893-1.68C31.528,26.916,31.76,26.684,30.72,25.65Z"
                transform="translate(-4.49 -4.502)"
                :fill="settings.first_color"
              />
            </svg>
          </div>
          <div class="phone-content">
            {{ homeCallUs.button_name }}
            <span class="number">{{ contact.phone_1 }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import adminTableComponent from "@/mixins/admin-table-component";
import Picture from "@/components/picture/Picture";
import homeCallUsModule from "@/store/modules/homeCallUs/homeCallUsModule.js";

export default {
  components: {
    Picture,
  },
  mixins: [adminTableComponent],

  data() {
    return {
      table: "homeCallUs",
      module: homeCallUsModule,
      settings: window.global.config.settings,
      contact: window.global.config.contact,
    };
  },
  computed: {
    homeCallUs() {
      return this.$store.state.HomeCallUs?.homeCallUs;
    },

    tableData() {
      return [this.homeCallUs];
    },
  },
  created() {
    if (Object.values(this.homeCallUs).length === 0) this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
@mixin borders-radius {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
:deep(.bg) {
  @include borders-radius;
  position: relative;
  object-fit: cover;
  object-position: 50% 50%;
}
:deep(.call-us-picture) {
  width: 100%;
  height: 100%;
}

section.call-us {
  .call-us-container {
    position: relative;
  }
  .mask {
    @include borders-radius;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent linear-gradient(90deg, #00000073 0%, #00000000 38%)
      0% 0% no-repeat padding-box;
  }
  .content {
    padding: 3rem var(--global-padding-x-desktop);
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    @media (max-width: 992px) {
      padding-left: var(--global-padding-x-mobile);
      padding-right: var(--global-padding-x-mobile);
      flex-direction: column;
    }
    .section-title {
      color: white;
      text-shadow: 0 0 10px black;
    }

    a.phone-link {
      display: flex;

      background-color: white;
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
      @media (max-width: 992px) {
        margin-top: 3rem;
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
        svg {
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
