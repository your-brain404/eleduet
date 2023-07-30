<template>
  <div class="toasts">
    <TransitionGroup name="toast-fade" mode="out-in">
      <div
        v-for="toast in toasts"
        :key="`toast-${toast.id}`"
        :class="`toast${toast.variant ? ` toast--${toast.variant}` : ''}`"
      >
        <div class="toast__message" v-html="toast.message"></div>
        <img
          class="toast__close"
          width="20"
          height="20"
          src="/storage/img/layout/close.svg"
          alt="close"
          @click="$store.commit('closeToast', toast.id)"
        />
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: window.global.config.settings,
    };
  },

  computed: {
    toasts() {
      return this.$store.state.toast?.toasts || [];
    },
  },
};
</script>

<style lang="scss" >
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.5s ease;
}
.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.snackbar-button {
  color: white;
}
.toasts {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 99999999999;
}
.toast {
  background-color: var(--first-color) !important;
  color: white;
  padding: 1rem;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
  max-width: 350px;
  min-width: 250px;
  margin-top: 0.5rem;
  &--danger {
    background-color: var(--danger) !important;
  }

  &__message {
    margin-right: 0.5rem;
  }

  &__close {
    cursor: pointer;
  }
}
</style>
