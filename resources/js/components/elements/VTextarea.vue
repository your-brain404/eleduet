<template>
  <div
    :id="`textarea-${id}`"
    class="textarea"
    :class="{
      'textarea--is-focused': isFocused,
      'textarea--error': error,
      'textarea--disabled': disabled,
    }"
  >
    <div class="textarea__input-container">
      <textarea
        ref="textarea"
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        class="textarea__input"
        :class="{ 'textarea__input--not-empty': modelValue }"
        :rows="rows"
      />
      <label v-if="label" class="textarea__label">{{ label }}</label>
    </div>
    <div class="textarea__error">{{ error }}</div>
  </div>
</template>
  
  <script>
import randomString from "@/helpers/string/random-string.js";
import formValidation from "@/mixins/form-validation.js";
export default {
  mixins: [formValidation],

  props: {
    modelValue: String,
    rows: { type: Number, default: 5 },
    label: String,
    disabled: Boolean,
    lazyIcon: { type: Boolean, default: true },
    rules: Object,
    type: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      id: randomString(6),
      isFocused: false,
    };
  },
  watch: {
    isFocused() {
      if (this.isFocused) this.$refs.textarea.focus();
    },
  },

  created() {
    window.addEventListener("click", (e) => {
      let textFieldClicked = Boolean(
        e.composedPath().find((el) => {
          return el?.id === `textarea-${this.id}`;
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
.textarea {
  $inputPaddingY: 2px;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  position: relative;
  $parent: ".textarea";
  padding-bottom: 12px;
  margin-bottom: 22px;

  &__input[type="date"] + &__label {
    @include labelFocusState;
  }

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
  &--disabled {
    pointer-events: none;
    cursor: default;
  }
  &--disabled &__input,
  &--disabled &__label {
    color: rgba(0, 0, 0, 0.38);
  }
  &--disabled &__input-container {
    border-image: repeating-linear-gradient(
        to right,
        rgba(0, 0, 0, 0.38) 0px,
        rgba(0, 0, 0, 0.38) 2px,
        transparent 2px,
        transparent 4px
      )
      1 repeat;
    border-color: rgba(0, 0, 0, 0.42);
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