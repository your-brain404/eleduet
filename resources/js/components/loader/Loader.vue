<template>
  <v-container class="d-flex" style="z-index: 100000">
    <v-progress-circular
      :size="70"
      :width="7"
      :color="$store.getters.settings.first_color"
      class="loader"
      indeterminate
    ></v-progress-circular>
  </v-container>
</template>

<script>
import { VContainer, VProgressCircular } from "vuetify/lib";
export default {
  components: {
    VContainer,
    VProgressCircular,
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