<template>
  <v-select
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
        icon="menu-down"
      ></svg-vue>
    </template>
  </v-select>
</template>


<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import SvgVue from "svg-vue";

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
    vSelect,
    SvgVue,
  },
};
</script>

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
  // tu powinien być v-deep no ale no nie wiem
  .vs {
    &__dropdown {
      &-menu {
        padding-left: 0;
        min-width: unset;
      }
      &-option {
        position: relative;
        background: white !important;
        z-index: 1;
        font-weight: 200;
        &::before {
          content: unset;
        }
        &--highlight {
          color: var(--first-color) !important;
          &::after {
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
        }
      }
      &-toggle {
        border: unset;
      }
    }
    &__open {
      &-indicator {
        fill: rgba(0, 0, 0, 0.54);
      }
    }
    &__clear {
      display: none;
    }
    &__selected {
      font-size: 0.75rem;
    }
  }
}
</style>