<template>
  <div
    :id="`text-field-${id}`"
    class="text-field"
    :class="{ 'text-field--is-focused': isFocused }"
  >
    <div class="text-field__input-container">
      <input
        ref="input"
        @input="$emit('input', $event.target.value)"
        :value="value"
        class="text-field__input"
        :class="{ 'text-field__input--not-empty': value }"
        type="text"
      />
      <label v-if="label" class="text-field__label">{{ label }}</label>

      <svg-vue
        v-if="icon"
        class="text-field__icon"
        width="24"
        height="24"
        :icon="icon"
      ></svg-vue>
    </div>
    <div v-if="error" class="text-field__error">{{ error }}</div>
  </div>
</template>

<script>
import SvgVue from "svg-vue";
import randomString from "@/helpers/string/random-string";
export default {
  components: {
    SvgVue,
  },
  props: {
    value: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    lazyIcon: { type: Boolean, default: true },
  },
  data() {
    return {
      error: "",
      id: randomString(6),
      isFocused: false,
    };
  },
  watch: {
    isFocused() {
      if (this.isFocused) this.$refs.input.focus();
    },
  },

  created() {
    window.addEventListener("click", (e) => {
      let textFieldClicked = Boolean(
        e.path.find((el) => {
          return el?.id === `text-field-${this.id}`;
        })
      );
      this.isFocused = textFieldClicked;
    });
  },
};
</script>

<style lang="scss" >
@mixin labelFocusState {
  transform: translateY(-19px) scale(0.8);
  color: var(--first-color);
}
.text-field {
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  $inputPaddingY: 2px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  position: relative;
  $parent: ".text-field";
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
  &--is-focused &__label {
    @include labelFocusState;
  }
  &--is-focused {
    #{$parent}__icon {
      path {
        fill: var(--first-color);
      }
    }
    &::after {
      transform: scaleX(1);
    }
  }

  &:hover {
    border-color: rgba(0, 0, 0, 0.87);
  }
  &__input {
    padding: $inputPaddingY 0;
    border: unset;
    outline: unset;
    font-size: 16px;
    font-weight: 400;
    &--not-empty + #{$parent}__label {
      @include labelFocusState;
    }
    &-container {
      position: relative;
      display: flex;
      align-items: center;
    }
  }
  &__label {
    position: absolute;
    transform-origin: top left;
    top: $inputPaddingY;
    left: 0;
    font-size: 16px;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  }
}
</style>