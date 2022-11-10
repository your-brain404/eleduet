<template>
  <div>
    <b-toast
      v-for="(toast, i) in toasts"
      :key="`toast-${i}`"
      :color="$store.getters.settings.first_color"
      toaster="b-toaster-bottom-right"
      auto-hide-delay="3000"
    >
      <div v-html="toast"></div>
    </b-toast>
  </div>
</template>

<script>
import { BToast } from "@/plugins/bootstrap-vue/src/components/toast/toast";

export default {
  components: {
    BToast,
  },

  computed: {
    toasts() {
      return this.$store.state.Toast?.toasts || [];
    },
  },
};
</script>

<style lang="scss" >
@import "bootstrap/scss/_functions.scss";
@import "bootstrap/scss/_variables.scss";
@import "bootstrap/scss/_mixins.scss";
@import "~@/plugins/bootstrap-vue/src/_variables";
@import "bootstrap/scss/_toasts.scss";
@import "~@/plugins/bootstrap-vue/src/components/toast/index.scss";
.snackbar-button {
  color: white;
}
</style>
