<template>
  <section class="main">
    <Slider />
    <About v-if="about" />
    <Services v-if="services" />
    <SolarSystem v-if="solarSystem" />
    <ExecutionProcess v-if="executionProcess" />
    <Attributes v-if="attributes" />
    <CallUs v-if="callUs" />
    <Opinions v-if="opinions" />
  </section>
</template>

<script>
import Slider from "@/components/pages/main/Slider.vue";
import About from "@/components/pages/main/About.vue";
import Attributes from "@/components/pages/main/Attributes.vue";

import Services from "@/components/pages/main/Services.vue";
import SolarSystem from "@/components/pages/main/SolarSystem.vue";
import ExecutionProcess from "@/components/pages/main/ExecutionProcess.vue";
import CallUs from "@/components/pages/main/CallUs.vue";
import Opinions from "@/components/pages/main/Opinions.vue";
import pageTitle from "@/mixins/page-title";

export default {
  mixins: [pageTitle],
  components: {
    Slider,
    About,
    Attributes,
    CallUs,
    ExecutionProcess,
    SolarSystem,
    Services,
    Opinions,
  },

  computed: {
    slider() {
      if (window.global.cms.homePage.slider === null) return true;
      return (window.global.cms.homePage.slider || []).length > 0;
    },
    about() {
      if (window.global.cms.homePage.about === null) return true;
      return Object.values(window.global.cms.homePage.about || {}).length > 0;
    },
    attributes() {
      if (window.global.cms.homePage.attributes === null) return true;
      return (window.global.cms.homePage.attributes || []).length > 0;
    },
    callUs() {
      if (window.global.cms.homePage.homeCallUs === null) return true;
      return (
        Object.values(window.global.cms.homePage.homeCallUs || {}).length > 0
      );
    },
    executionProcess() {
      if (window.global.cms.homePage.executionProcess === null) return true;
      return (window.global.cms.homePage.executionProcess || []).length > 0;
    },

    solarSystem() {
      if (window.global.cms.homePage.homeSolarSystemDesc === null) return true;
      return (
        Object.values(window.global.cms.homePage.homeSolarSystemDesc || {})
          .length > 0
      );
    },
    services() {
      if (window.global.cms.homePage.homeServices === null) return true;
      return (window.global.cms.homePage.homeServices ?? []).length > 0;
    },
    opinions() {
      if (window.global.cms.homePage.opinions === null) return true;
      return (window.global.cms.homePage.opinions || []).length > 0;
    },
  },
};
</script>

