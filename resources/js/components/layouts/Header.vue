<template>
  <section class="header">
    <router-link to="/" style="min-width: 139px">
      <Picture
        @click="showMobileMenu = false"
        :width="settings.photo_sizes.width"
        :height="settings.photo_sizes.height"
        :alt="settings.photo_alt"
        :classImg="'logo'"
        :src="`${origin}/storage/media/${settings.photo}`"
        :webp="false"
      />
    </router-link>
    <ul v-show="showCollapseMenuClasses">
      <router-link
        :to="`${subpage.page}`"
        v-for="(subpage, i) in subpages.filter((page) => page.page !== '/')"
        :key="`subpage-${i}`"
      >
        <li @click="showMobileMenu = false">
          <div class="border-line"></div>
          {{ subpage.title }}
        </li>
      </router-link>
    </ul>
    <a
      v-show="showCollapseMenuClasses"
      class="phone"
      :href="`tel:${contact.phone_1}`"
    >
      <Picture
        width="37"
        height="18"
        :alt="'phone-icon'"
        :classImg="'phone-icon'"
        :src="`${origin}/storage/img/layout/phone.svg`"
        :webp="false"
      />

      {{ contact.phone_1 }}
    </a>
    <Picture
      @click="showMobileMenuHandler"
      width="17"
      height="20"
      :alt="'hamburger-menu'"
      :class="'hamburger-menu'"
      :src="`${origin}/storage/img/layout/hamburger-menu.svg`"
      :webp="false"
    />
  </section>
</template>

<script>
import url from "@/helpers/photo/url.js";
import Picture from "@/components/picture/Picture";

export default {
  components: {
    Picture,
  },
  data() {
    return {
      origin: window.location.origin,
      showMobileMenu: false,
      windowWidth: window.innerWidth,
    };
  },
  watch: {
    "$route.path"() {
      this.showMobileMenu = false;
    },
  },
  computed: {
    subpages() {
      return this.$store.getters.subpages;
    },
    settings() {
      return this.$store.getters.settings;
    },
    contact() {
      return this.$store.getters.contact;
    },
    isScreenMobileDevice() {
      return this.windowWidth <= 992;
    },
    showCollapseMenuClasses() {
      return this.isScreenMobileDevice ? this.showMobileMenu : true;
    },
  },
  methods: {
    url,
    showMobileMenuHandler() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss">
section.header {
  $header-padding-y: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $header-padding-y var(--global-padding-x-desktop);
  height: 100%;
  @media (max-width: 992px) {
    flex-wrap: wrap;
    height: unset;
    padding-left: var(--global-padding-x-mobile);
    padding-right: var(--global-padding-x-mobile);
  }
  .logo {
    height: 60px;
    width: auto;
    @media (max-width: 992px) {
      order: 1;
    }
  }
  .phone {
    display: flex;
    align-items: center;
    padding: 0.7rem 1.3rem;
    border-radius: var(--global-border-radius);
    transition: 0.2s background-color;
    color: black;
    font-size: 1.4rem;
    font-weight: 500;
    text-decoration: none;
    @media (max-width: 992px) {
      order: 4;
      width: fit-content;
      justify-content: center;
    }

    .phone-icon {
      height: 18px;
      padding-right: 1.2rem;
    }

    &:hover {
      background-color: var(--first-color);
      color: white;
      img {
        filter: invert(1);
      }
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin-bottom: 0;
    height: 100%;
    padding-left: 0;
    @media (max-width: 992px) {
      order: 3;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 1rem;
    }
    & > a {
      height: 100%;
      text-decoration: none;
    }
    li {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      color: #000;
      font-size: 1.1rem;
      font-weight: 500;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;

      transition: 0.2s color;
      &::before {
        display: none;
      }
      @media (max-width: 992px) {
        padding: 0.5rem;

        .border-line {
          transform: unset !important;
        }
      }

      &:hover {
        color: var(--first-color);
        .border-line {
          opacity: 1;
        }
      }
      .border-line {
        transition: 0.2s opacity;
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0;
        height: 0.3rem;
        width: 100%;
        transform: translateY(calc(-#{$header-padding-y} - 0.1rem));
        background-color: var(--first-color);
        border-bottom-left-radius: var(--global-border-radius);
        border-bottom-right-radius: var(--global-border-radius);
      }
    }
  }

  .hamburger-menu {
    color: black;
    height: 20px;
    display: none;
    @media (max-width: 992px) {
      display: block;
      order: 2;
    }
  }
}
</style>
