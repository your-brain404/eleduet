<template functional>
  <div class="row"><slot></slot></div>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -12px;
}
</style>