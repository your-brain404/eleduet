<template>
  <section v-if="about.id && contact.id" class="about">
    <div class="content">
      <div class="section-content">
        <Picture
          :src="`/storage/media/${settings.li_marker}`"
          :alt="settings.li_marker_alt"
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
              :fill="settings.first_color"
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
        :src="`/storage/media/${about.photo}`"
        :mobile-version="576"
      />
      <Picture
        :width="170"
        :height="170"
        :alt="'elipsa'"
        :classImg="'ellipse'"
        src="/storage/img/home/ellipse1.svg"
      />
    </div>
  </section>
</template>

<script>
import adminTableComponent from "@/mixins/admin-table-component";
import Picture from "@/components/picture/Picture";
import aboutModule from "@/store/modules/about/aboutModule.js";

export default {
  components: {
    Picture,
  },
  mixins: [adminTableComponent],

  data() {
    return {
      table: "about",
      module: aboutModule,
      settings: window.global.config.settings,
      contact: window.global.config.contact,
    };
  },
  computed: {
    tableData() {
      return [this.about];
    },
    about() {
      return this.$store.state.About?.about;
    },
  },
  methods: {
    prepareTitle(title) {
      return title.replace("{", "<span>").replace("}", "</span>");
    },
  },
};
</script>

<style lang="scss">
@import "~@scss/pages/main/about";
</style>