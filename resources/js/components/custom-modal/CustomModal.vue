<template>
  <div :class="['custom-modal', { 'custom-modal--show': modelValue }]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Boolean,
  },
};
</script>

<style lang="scss">
.custom-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: scale(0) translate(-50%, -50%);
  width: 80vw;
  z-index: 100;
  transition: 0.2s;
  transform-origin: top left;
  &--show {
    transform: scale(1) translate(-50%, -50%);
  }
}
</style>