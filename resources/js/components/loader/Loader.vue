<template>
  <div class="loader__container">
    <img
      :src="`/storage/media/${settings.li_marker}.webp`"
      :alt="settings.li_marker_alt"
      :width="48"
      :height="75"
      class="loader"
    />
  </div>
</template>

<script>
export default {
  setup() {
    const { settings } = window.global.config;

    return { settings };
  },
};
</script>



<style lang="scss">
.loader {
  margin: 10rem auto;
  animation: spin 4s infinite;
  transform-origin: center;
  width: auto;
  &__container {
    display: flex;
    z-index: 999;
  }
}
@keyframes spin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>


