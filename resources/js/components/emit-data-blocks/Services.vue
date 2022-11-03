<template></template>

<script>
import axios from "axios";
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
      services: [],
    };
  },
  methods: {
    getData() {
      this.$store.commit("loading", true);
      axios
        .get(`/api/services/get_all`)
        .then((res) => {
          this.$store.commit("loading", false);
          this.services = res.data;
          this.$emit("blockDataEmit", this.services);
          this.$store.commit("Services/services", res.data);
        })
        .catch((err) => {
          this.$store.commit("loading", false);
          console.log(err);
        });
    },
  },
  created() {
    if (!this.$store.hasModule("Services")) {
      this.$store.registerModule("Services", getModule("services"));
    }
    this.getData();
  },
};
</script>
