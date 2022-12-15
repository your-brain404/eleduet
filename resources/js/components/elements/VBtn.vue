<template functional>
  <button
    :class="[
      { 'custom-btn--small': props.small },
      { 'custom-btn--disabled': props.disabled },
      { 'custom-btn--just-icon': props.justIcon },
      props.color ? `custom-btn--${props.color}` : '',
      'custom-btn',
      props.customClass,
      data.staticClass,
    ]"
    v-bind="data.attrs"
    v-on="data.on"
  >
    <span class="custom-btn__content">
      <slot name="icon"></slot>

      <span
        v-if="!props.justIcon"
        class="custom-btn__content-text"
        :style="{ marginTop: props.textMarginTop }"
        ><slot></slot
      ></span>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    justIcon: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "",
    },

    lazyIcon: { type: Boolean, default: true },
    textMarginTop: { type: String, default: "3px" },
    customClass: String,
    disabled: Boolean,
  },
};
</script>

<style lang="scss">
.custom-btn {
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  background-color: var(--first-color);
  font-size: 0.875rem;
  color: white;
  -webkit-appearance: button;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
  overflow: visible;
  border-style: none;
  $parent: ".custom-btn";
  &--warning {
    background-color: #fb8c00;
  }

  &::before,
  &::after {
    background-color: currentColor;
    border-radius: inherit;
    bottom: 0;
    color: inherit;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  }
  &::after {
    transform: scale(0);
  }
  &:hover::before {
    opacity: 0.08;
  }
  &__content {
    align-items: center;
    color: inherit;
    display: flex;
    flex: 1 0 auto;
    justify-content: inherit;
    line-height: normal;
    position: relative;
    transition: inherit;
    transition-property: opacity;
    gap: 0.5rem;
    svg {
      width: 20px;
      height: 20px;
      path {
        fill: white;
      }
    }
    &-icon {
      margin-left: -4px;
      margin-right: 8px;
      font-size: 18px;
      height: 20px;
      width: 20px;
      align-items: center;
      display: inline-flex;
      font-feature-settings: "liga";
      font-size: 24px;
      justify-content: center;
      letter-spacing: normal;
      line-height: 1;
      position: relative;
      text-indent: 0;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
      vertical-align: middle;
      user-select: none;
      path {
        fill: white;
      }
    }
  }
  &--error {
    background-color: #ff5252;
  }
  &--small {
    height: 28px;
    min-width: 50px;
    padding: 0 12.4444444444px;
    font-size: 0.75rem;
    #{$parent}__content-icon {
      width: 18px;
      height: 18px;
    }
  }
  &--just-icon {
    background: unset;
    border-radius: 100%;
    width: 36px;
    max-width: 36px;
    min-width: 36px;
    height: 36px;
    box-shadow: unset;
    padding: 0;
    &:hover:before,
    &:active:after {
      opacity: 0.2;
    }
    &:hover:before {
      background: rgba(0, 0, 0, 0.54);
    }
    &:active:after {
      background: rgba(0, 0, 0, 0.87);
      transform: scale(1);
    }

    svg {
      width: 24px;
      height: 24px;
      path {
        fill: rgba(0, 0, 0, 0.54);
      }
    }
  }
}
</style>


