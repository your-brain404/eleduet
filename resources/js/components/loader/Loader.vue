<template>
  <v-container style="z-index: 100000">
    <v-progress-circular
      :size="70"
      :width="7"
      color="primary"
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