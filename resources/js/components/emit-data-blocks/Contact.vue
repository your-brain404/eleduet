<template></template>

<script>
import axios from "@/plugins/axios/axios";
import contactModule from "@/store/modules/contact/contactModule";

export default {
  props: ["reloadFlag"],
  watch: {
    reloadFlag() {
      if (this.reloadFlag) this.getData();
    },
  },
  data() {
    return {
      contact: {},
    };
  },
  methods: {
    getContact() {
      this.$store.commit("loading", true);
      axios
        .get(`/api/contact/get_one/1`)
        .then((res) => {
          this.$store.commit("loading", false);
          this.contact = [res.data];
          this.$emit("blockDataEmit", this.contact);
          this.$store.commit("contact", res.data);
        })
        .catch((err) => {
          this.$store.commit("loading", false);
          console.log(err);
        });
    },
  },
  created() {
    if (!this.$store.hasModule("contact")) {
      this.$store.registerModule("contact", contactModule);
    }
    this.getContact();
  },
};
</script>
