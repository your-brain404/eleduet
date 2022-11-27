<template>
  <div class="elemele">
    <div v-if="!clicked" @click="clicked = true" class="elemele__dont-click">
      Elemele
    </div>
    <video v-else ref="elemele" width="100%" height="100%" autoplay controls>
      <source src="/storage/elemele/elemele.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.$refs.elemele.muted = false;
    });
  },
};
</script>

<style lang="scss">
.elemele {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  width: 100vw;
  height: 100vh;
  @media (max-width: 992px) {
    padding: 1rem;
  }
  &__dont-click {
    border-radius: 100%;
    height: 300px;
    width: 300px;
    background: red;
    font-size: 40px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px black;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }
}
</style>