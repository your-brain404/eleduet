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
      serviceCategories: [],
    };
  },
  methods: {
    getData() {
      this.$store.commit("loading", true);
      axios
        .get(`/api/service_categories/get_all`)
        .then((res) => {
          this.$store.commit("loading", false);
          this.serviceCategories = res.data;
          this.$emit("blockDataEmit", this.serviceCategories);
          this.$store.commit("ServiceCategories/serviceCategories", res.data);
        })
        .catch((err) => {
          this.$store.commit("loading", false);
          console.log(err);
        });
    },
  },
  created() {
    if (!this.$store.hasModule("ServiceCategories")) {
      this.$store.registerModule(
        "ServiceCategories",
        getModule("serviceCategories")
      );
    }
    this.getData();
  },
};
</script>
