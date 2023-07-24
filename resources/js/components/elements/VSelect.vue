<template>
  <vue-select
    class="v-select--custom-settings"
    :options="options"
    :dropdownShouldOpen="dropdownShouldOpen"
    :closeOnSelect="closeOnSelect"
    :clearSearchOnSelect="clearSearchOnSelect"
    :searchable="searchable"
    :value="value"
    @input="$emit('input', $event)"
  >
    <template #open-indicator>
      <svg-vue
        width="24"
        height="24"
        class="vs__open-indicator"
        icon="menuDown"
      ></svg-vue>
    </template>
  </vue-select>
</template>


<script>
import VueSelect from "vue-select";
import SvgVue from "@/components/elements/SvgVue.vue";

export default {
  props: {
    options: Array,
    dropdownShouldOpen: Function,
    closeOnSelect: {
      type: Boolean,
      default: true,
    },
    clearSearchOnSelect: {
      type: Boolean,
      default: true,
    },
    searchable: {
      type: Boolean,
      default: true,
    },
    value: {
      default: null,
    },
  },
  components: {
    VueSelect,
    SvgVue,
  },
};
</script>
<style>
@import "vue-select/dist/vue-select.css";
</style>
<style lang="scss" scoped>
.v-select--custom-settings {
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  &::after {
    bottom: -1px;
    content: "";
    left: 0;
    position: absolute;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    width: 100%;
    transform: scaleX(0);
    background-color: var(--first-color);
    height: 2px;
  }
  $vs: ".vs";
  $dropdown-option: #{$vs}__dropdown-option;
  :deep(#{$dropdown-option}) {
    position: relative;
    background: white !important;
    z-index: 1;
    font-weight: 200;
  }
  :deep(#{$dropdown-option}::before) {
    content: unset;
  }
  :deep(#{$dropdown-option}--highlight) {
    color: var(--first-color) !important;
  }
  :deep(#{$dropdown-option}--highlight::after) {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background-color: var(--first-color);
    opacity: 0.16;
    pointer-events: none;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  :deep(#{$vs}__dropdown-menu) {
    padding-left: 0;
    min-width: unset;
  }
  :deep(#{$vs}__dropdown-toggle) {
    border: unset;
  }
  :deep(#{$vs}__open-indicator path) {
    fill: rgba(0, 0, 0, 0.54);
  }
  :deep(#{$vs}__clear) {
    display: none;
  }
  :deep(#{$vs}__selected) {
    font-size: 0.75rem;
  }
}
</style>