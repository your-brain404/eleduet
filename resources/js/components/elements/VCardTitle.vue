<template functional>
  <div class="v-card-title">
    <slot></slot>
  </div>
</template>
  
  <style lang="scss">
.v-card-title {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  line-height: 2rem;
  word-break: break-all;
  padding: 16px;
  justify-content: center;
}
</style>