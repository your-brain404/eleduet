<template functional>
  <div class="row" v-bind="data.attrs" :class="data.staticClass">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style>
.row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -12px;
}
</style>