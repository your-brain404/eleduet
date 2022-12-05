<template>
  <div
    :id="`text-field-${id}`"
    class="text-field"
    :class="{ 'text-field--is-focused': isFocused, 'text-field--error': error }"
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
    <div class="text-field__error">{{ error }}</div>
  </div>
</template>

<script>
import SvgVue from "svg-vue";
import randomString from "@/helpers/string/random-string";
import formValidation from "@/mixins/form-validation";
export default {
  mixins: [formValidation],
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
    rules: Object,
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
}
.text-field {
  $inputPaddingY: 2px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  position: relative;
  $parent: ".text-field";
  padding-bottom: 12px;
  margin-bottom: 22px;

  &--is-focused &__label {
    @include labelFocusState;
    color: var(--first-color);
  }
  &--is-focused {
    #{$parent}__icon {
      path {
        fill: var(--first-color);
      }
    }
    #{$parent}__input-container::after {
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
    width: 100%;
    font-weight: 300;
    &--not-empty + #{$parent}__label {
      @include labelFocusState;
    }
    &-container {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.42);
      width: 100%;
      padding-bottom: 2px;
      margin-bottom: 4px;
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
    }
  }
  &__label {
    position: absolute;
    transform-origin: top left;
    top: $inputPaddingY;
    left: 0;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  }
  &__error {
    min-height: 14px;
    font-size: 12px;
    line-height: 12px;
    position: absolute;
    width: 100%;
  }
  &--error &__label,
  &--error &__input,
  &__error {
    color: #ff5252;
  }
  &--error &__input-container {
    border-color: #ff5252;
    &::after {
      background-color: #ff5252;
    }
  }
  &--error &__label {
    animation: shake 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
  }
}

@keyframes shake {
  59% {
    margin-left: 0;
  }
  60%,
  80% {
    margin-left: 2px;
  }
  70%,
  90% {
    margin-left: -2px;
  }
}
</style>