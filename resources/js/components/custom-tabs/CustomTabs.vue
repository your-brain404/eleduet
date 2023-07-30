<template>
  <div class="custom-tabs">
    <ul class="nav-tabs">
      <li v-for="(tab, i) in tabs" :key="`tab-${i}`">
        <a
          @click.prevent="$emit('update:modelValue', i)"
          :class="{ active: modelValue === i }"
          href="#"
          >{{ tab }}</a
        >
      </li>
    </ul>
    <div class="custom-tabs__tabs-content">
      <TransitionGroup name="scale">
        <component
          v-for="(component, componentIndex) in componentsTabs"
          :key="`component-tab-${componentIndex}`"
          v-show="componentIndex === modelValue"
          :is="component"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
import CustomTab from "./CustomTab.vue";

export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: Number,
    tabs: Array,
  },
  computed: {
    componentsTabs() {
      return this.$slots
        .default()[0]
        .children.filter((component) => component.type === CustomTab);
    },
  },
};
</script>
<style lang="scss">
.scale-enter-active {
  animation: scale 0.2s;
  .text-field__input-container::after {
    display: none;
  }
}
.scale-leave-active {
  display: none;
}

@keyframes scale {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>
<style lang="scss" scoped>
ul {
  padding-left: 40px;
}
</style>