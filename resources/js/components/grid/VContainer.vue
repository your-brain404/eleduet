<template functional>
  <div
    class="custom-container"
    v-bind="data.attrs"
    v-on="data.on"
    :style="data.staticStyle"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss">
.custom-container {
  margin: 0 1rem;
}
</style>
