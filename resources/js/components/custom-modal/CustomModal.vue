<template>
  <Transition name="custom-modal-scale">
    <div v-if="modelValue" class="custom-modal">
      <slot />
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
  },
};
</script>

<style lang="scss">

.custom-modal-scale-enter-active {
  animation: custom-modal-scale .2s;
}
.custom-modal-scale-leave-active {
  animation: custom-modal-scale .2s reverse;
}
@keyframes custom-modal-scale {
  0% {
    transform: scale(0) translate(-50%, -50%);
  }

  100% {
    transform: scale(1) translate(-50%, -50%);
  }
}
.custom-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: scale(1) translate(-50%, -50%);
  width: 80vw;
  z-index: 100;
  transition: 0.2s;
  transform-origin: top left;
  overflow-y: auto;
  height: 100%;
  
}
</style>