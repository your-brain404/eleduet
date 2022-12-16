<template>
  <v-container class="d-flex" style="z-index: 100000">
    <b-spinner class="loader"></b-spinner>
  </v-container>
</template>

<script>
import { BSpinner } from "@/plugins/bootstrap-vue/src/components/spinner/spinner";
import VContainer from "@/components/grid/VContainer.vue";
export default {
  components: {
    VContainer,
    BSpinner,
  },
};
</script>

<style scoped>
::v-deep .loader {
  margin: 5rem;
  padding: 5rem;
  margin-left: auto;
  margin-right: auto;
}
</style>

<style lang="scss">
@import "~bootstrap/scss/spinners";
</style>