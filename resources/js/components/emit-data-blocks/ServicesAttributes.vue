<template></template>

<script>
import axios from "@/plugins/axios/axios";
import getModule from "@/helpers/store/get-module.js";

export default {
  props: ["reloadFlag"],
  watch: {
    reloadFlag() {
      if (this.reloadFlag) this.getData();
    },
  },
  data() {
    return {
      servicesAttributes: [],
    };
  },
  methods: {
    getData() {
      this.$store.commit("loading", true);
      axios
        .get(`/api/services_attributes/get_all`)
        .then((res) => {
          this.$store.commit("loading", false);
          this.servicesAttributes = res.data;
          this.$emit("blockDataEmit", this.servicesAttributes);
          this.$store.commit("ServicesAttributes/servicesAttributes", res.data);
        })
        .catch((err) => {
          this.$store.commit("loading", false);
          console.log(err);
        });
    },
  },
  created() {
    if (!this.$store.hasModule("ServicesAttributes")) {
      this.$store.registerModule(
        "ServicesAttributes",
        getModule("servicesAttributes")
      );
    }
    this.getData();
  },
};
</script>
