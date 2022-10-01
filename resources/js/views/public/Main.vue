<template>
  <section class="main">
    <Slider />
    <About />
    <Services />
    <SolarSystem />
    <ExecutionProcess />
    <Attributes />
    <CallUs />
    <Opinions />
  </section>
</template>

<script>
import url from "@/helpers/photo/url";
const Slider = () =>
  import(/* webpackChunkName: 'main-page' */ "@/components/pages/main/Slider");
const About = () =>
  import(/* webpackChunkName: 'main-page' */ "@/components/pages/main/About");
const Services = () =>
  import(
    /* webpackChunkName: 'main-page' */ "@/components/pages/main/Services"
  );
const SolarSystem = () =>
  import(
    /* webpackChunkName: 'main-page' */ "@/components/pages/main/SolarSystem"
  );
const ExecutionProcess = () =>
  import(
    /* webpackChunkName: 'main-page' */ "@/components/pages/main/ExecutionProcess"
  );
const Attributes = () =>
  import(
    /* webpackChunkName: 'main-page' */ "@/components/pages/main/Attributes"
  );
const CallUs = () =>
  import(/* webpackChunkName: 'main-page' */ "@/components/pages/main/CallUs");
const Opinions = () =>
  import(
    /* webpackChunkName: 'main-page' */ /* webpackMode: "lazy" */ "@/components/pages/main/Opinions"
  );

export default {
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
  methods: {
    url,
  },
};
</script>

<style lang="scss" scoped></style>
