<template>
  <div
    class="checkbox"
    :class="{
      'checkbox--checked': value,
      'checkbox--disabled': disabled,
    }"
  >
    <label class="checkbox__label">
      <div class="checkbox__square-container">
        <div class="checkbox__mask"></div>
        <div class="checkbox__active-mask"></div>
        <input
          @input="
            disabled
              ? true
              : ($emit('input', $event.target.checked),
                $emit('change', $event.target.checked))
          "
          class="checkbox__input"
          type="checkbox"
          :checked="value"
        />
        <div class="checkbox__square"></div>
      </div>

      <span class="checkbox__label-text">{{ label }}</span>
    </label>
    <div v-if="!noValidation" class="checkbox__error">{{ error }}</div>
  </div>
</template>

<script>
import formValidation from "@/mixins/form-validation";
export default {
  mixins: [formValidation],
  props: {
    value: Boolean,
    disabled: Boolean,
    label: String,
    noValidation: Boolean,
    rules: Object,
  },
  data() {
    return {
      error: "",
    };
  },
};
</script>

<style lang="scss">
.checkbox {
  margin-top: 16px;
  padding-top: 4px;

  &--disabled {
    pointer-events: none;
    opacity: 0.8;
  }

  &__mask,
  &__active-mask {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 100%;
    width: 100%;
    height: 100%;
    transform-origin: center center;
    background-color: rgba(0, 0, 0, 0.54);
    opacity: 0.2;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  }
  &--checked &__mask,
  &--checked &__active-mask {
    background-color: var(--first-color);
  }

  &__active-mask {
    opacity: 0.25;
  }
  &__square-container:hover &__mask,
  &__square-container:active &__active-mask {
    transform: translate(-50%, -50%) scale(1.15);
  }
  &__square-container:hover &__square {
    background-color: rgba(var(--first-color), 0.2);
  }

  &__label {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0 -7px;
    margin-bottom: 8px;
    width: fit-content;
    &-text {
      padding-left: 0.5rem;
    }
  }
  &__input {
    position: absolute;
    opacity: 0;
    user-select: none;
    pointer-events: none;
  }
  &__square {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(0, 0, 0, 0.54);
    border-radius: 2px;
    background-color: transparent;
    position: relative;
    &-container {
      width: 34px;
      height: 34px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotateZ(360deg) scale(0);
      width: 7px;
      height: 12px;
      border-color: white;
      border-width: 2px;
      border-bottom-style: solid;
      border-right-style: solid;
      z-index: 1;
      transform-origin: right;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    }
  }
  &--checked &__square {
    border-color: var(--first-color);
    background-color: var(--first-color) !important;
    &::after {
      transform: translate(-57%, -49%) rotateZ(45deg) scale(1);
    }
  }
  &__error {
    min-height: 14px;
  }
}
</style>