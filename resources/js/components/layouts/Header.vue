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


