<template>
  <section class="main">
    <Slider v-if="slider" />
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
import url from "@/helpers/photo/url";
import lazyLoadComponent from "@/services/lazy-load-component";
import Loader from "@/components/loader/Loader";
import Slider from "@/components/pages/main/Slider";

const About = () =>
  import(/* webpackChunkName: 'about' */ "@/components/pages/main/About");
const Services = () =>
  import(/* webpackChunkName: 'services' */ "@/components/pages/main/Services");
const SolarSystem = () =>
  import(
    /* webpackChunkName: 'solar-system' */ "@/components/pages/main/SolarSystem"
  );
const ExecutionProcess = () =>
  import(
    /* webpackChunkName: 'execution-process' */ "@/components/pages/main/ExecutionProcess"
  );
const Attributes = () =>
  import(
    /* webpackChunkName: 'attributes' */ "@/components/pages/main/Attributes"
  );
const CallUs = () =>
  import(/* webpackChunkName: 'call-us' */ "@/components/pages/main/CallUs");
const Opinions = () =>
  import(
    /* webpackChunkName: 'opinions' */ /* webpackMode: "lazy" */ "@/components/pages/main/Opinions"
  );

export default {
  components: {
    Slider,
    About: lazyLoadComponent({
      componentFactory: About,
      loading: Loader,
    }),
    Attributes: lazyLoadComponent({
      componentFactory: Attributes,
      loading: Loader,
    }),
    CallUs: lazyLoadComponent({
      componentFactory: CallUs,
      loading: Loader,
    }),
    ExecutionProcess: lazyLoadComponent({
      componentFactory: ExecutionProcess,
      loading: Loader,
    }),
    SolarSystem: lazyLoadComponent({
      componentFactory: SolarSystem,
      loading: Loader,
    }),
    Services: lazyLoadComponent({
      componentFactory: Services,
      loading: Loader,
    }),
    Opinions: lazyLoadComponent({
      componentFactory: Opinions,
      loading: Loader,
    }),
  },
  methods: {
    url,
  },
  computed: {
    slider() {
      return (window.global.cms.homePage.slider || []).length > 0;
    },
    about() {
      return Object.values(window.global.cms.homePage.about || {}).length > 0;
    },
    attributes() {
      return window.global.cms.homePage.attributes.length > 0;
    },
    callUs() {
      return (
        Object.values(window.global.cms.homePage.homeCallUs || {}).length > 0
      );
    },
    executionProcess() {
      return (window.global.cms.homePage.executionProcess || []).length > 0;
    },

    solarSystem() {
      return (
        Object.values(window.global.cms.homePage.homeSolarSystemDesc || {})
          .length > 0
      );
    },
    services() {
      return (window.global.cms.homePage.homeServices ?? []).length > 0;
    },
    opinions() {
      return (window.global.cms.homePage.opinions || []).length > 0;
    },
  },
};
</script>

<style lang="scss" scoped></style>
