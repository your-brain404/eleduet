<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import * as mdi from "@mdi/js";
import ucfirst from "@/helpers/string/ucfirst.js";
import kebabToPascal from "@/helpers/string/kebab-to-pascal.js";

export default {
  props: ["icon"],
  components: {
    SvgIcon,
  },
  computed: {
    path() {
      return mdi[`mdi${ucfirst(kebabToPascal(this.icon))}`];
    },
  },
  created() {
    if (!this.path) {
      let parentFile = this.$parent.$options.__file;
      let parentParentFile = this.$parent.$parent?.$options.__file;
      let parentParentParentFile =
        this.$parent.$parent?.$parent?.$options.__file;

      const trace = [parentParentParentFile, parentParentFile, parentFile]
        .filter((path) => path?.constructor === String)
        .map((path) => path.split("/").pop())
        .join(" -> ");
      console.error(
        `Nie znaleziono ikony '${this.icon}' na ścieżce:\n${trace}`
      );
    }
  },
};
</script>