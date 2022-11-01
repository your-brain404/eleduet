<template>
  <section v-if="about.id && contact.id" class="about">
    <div class="content">
      <div class="section-content">
        <Picture
          :src="`${origin}/storage/media/${$store.state.Settings.settings.li_marker}`"
          :alt="$store.state.Settings.settings.li_marker_alt"
          :width="48"
          :height="75"
          :classImg="'bolt'"
        />

        <h3 class="section-title" v-html="prepareTitle(about.title)"></h3>
      </div>

      <div class="description" v-html="about.short_description"></div>

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
              :fill="$store.getters.settings.first_color"
            />
          </svg>
        </div>
        <div class="phone-content">
          {{ about.button_name }}
          <span class="number">{{ contact.phone_1 }}</span>
        </div>
      </a>
    </div>
    <div class="position-relative photo-container">
      <Picture
        :width="about.photo_sizes.width"
        :height="about.photo_sizes.height"
        :alt="about.photo_alt"
        :classImg="'photo bg'"
        :src="`${origin}/storage/media/${about.photo}`"
        :mobile-version="576"
      />
      <Picture
        :width="170"
        :height="170"
        :alt="'elipsa'"
        :classImg="'ellipse'"
        :src="`${origin}/storage/img/home/ellipse1.svg`"
      />
    </div>
  </section>
</template>

<script>
import adminTableComponent from "@/mixins/admin-table-component";
import Picture from "@/components/picture/Picture";

export default {
  components: {
    Picture,
  },
  mixins: [adminTableComponent],

  data() {
    return {
      origin: window.location.origin,
      table: "about",
    };
  },
  computed: {
    tableData() {
      return [this.about];
    },
    about() {
      return this.$store.state.About?.about;
    },
    contact() {
      return this.$store.getters.contact;
    },
  },
  methods: {
    prepareTitle(title) {
      return title.replace("{", "<span>").replace("}", "</span>");
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .ellipse {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-50%, 50%);
    height: 170px;
    z-index: 0;
  }
  .photo-container .photo {
    position: relative;
    z-index: 2;
    height: auto;
    width: 100%;
    border-bottom-left-radius: var(--global-border-radius);
    border-top-left-radius: var(--global-border-radius);
    @media (max-width: 992px) {
      margin-top: 3rem;
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
section.about {
  display: flex;
  flex-wrap: wrap;
  padding-top: 7rem;
  z-index: 1;
  .content {
    width: 66%;
  }
  .photo-container {
    width: 34%;
    height: fit-content;
  }
  .content,
  .photo-container {
    @media (max-width: 992px) {
      width: 100%;
    }
  }

  .content {
    padding-left: var(--global-padding-x-desktop);
    padding-right: var(--global-padding-x-desktop);
    @media (max-width: 992px) {
      padding-left: var(--global-padding-x-mobile);
      padding-right: var(--global-padding-x-mobile);
    }
    z-index: 3;
    .section-content {
      display: flex;
      align-items: center;
      @media (max-width: 400px) {
        flex-direction: column;
      }
    }

    .description {
      font-size: 1rem;
      font-weight: 600;
      line-height: 17px;
      margin-top: 1rem;
    }

    a.phone-link {
      display: flex;
      margin-top: 3rem;
      background-color: #fff;
      @mixin box-shadow {
        box-shadow: 0px 10px 40px #0000000f;
      }
      @include box-shadow;
      border-radius: var(--global-border-radius);
      width: fit-content;
      padding: 1rem 2rem;
      transition: 0.2s background-color;
      text-decoration: none;
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
