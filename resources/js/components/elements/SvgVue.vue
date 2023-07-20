<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import * as mdi from "@mdi/js";
import ucfirst from "@/helpers/string/ucfirst.js";

export default {
  props: ["icon"],
  components: {
    SvgIcon,
  },
  computed: {
    path() {
      return mdi[`mdi${ucfirst(this.icon)}`];
    },
  },
};
</script>