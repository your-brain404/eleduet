<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<style>
.row {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -12px;
}
</style>