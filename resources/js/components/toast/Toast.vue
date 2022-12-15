<template>
  <div>
    <b-toast
      v-for="toast in toasts"
      :key="`toast-${toast.id}`"
      :color="$store.getters.settings.first_color"
      toaster="b-toaster-bottom-right"
      :no-auto-hide="true"
      :visible="true"
      :append-toast="true"
      :toast-class="`custom-toast${
        toast.variant ? ` custom-toast--${toast.variant}` : ''
      }`"
      header-class="custom-toast__header"
      body-class="custom-toast__body"
    >
      <div v-html="toast.message"></div>
      <img
        class="custom-toast__close"
        width="20"
        height="20"
        src="/storage/img/layout/close.svg"
        alt="close"
        style="filter: invert(1)"
        @click="$store.commit('closeToast', toast.id)"
      />
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
@import "bootstrap/scss/_toasts.scss";
@import "~@/plugins/bootstrap-vue/src/components/toast/index.scss";
.snackbar-button {
  color: white;
}
.custom-toast {
  background-color: var(--first-color) !important;
  color: white;
  &--danger {
    background-color: var(--danger) !important;
  }
  &__header {
    display: none;
  }
  &__body {
    padding: 1rem;
    display: flex !important;
    justify-content: space-between;
    align-items: center;
  }
  &__close {
    cursor: pointer;
  }
}
</style>
