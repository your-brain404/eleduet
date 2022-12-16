<template>
  <div
    :id="`text-field-${id}`"
    class="text-field"
    :class="{
      'text-field--is-focused': isFocused,
      'text-field--error': error,
      'text-field--disabled': disabled,
    }"
    @click="$refs['input-file'] && $refs['input-file'].click()"
  >
    <div class="text-field__input-container">
      <input
        @change="$emit('input', $event.target.files)"
        :multiple="multiple"
        v-if="type === 'file'"
        v-show="false"
        type="file"
        class="text-field__input-file"
        ref="input-file"
      />
      <input
        ref="input"
        @input="$emit('input', $event.target.value)"
        :value="prepareValue(value)"
        class="text-field__input"
        :class="{ 'text-field__input--not-empty': value }"
        :type="type !== 'file' && type"
        :accept="accept"
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
    <div class="text-field__messages">
      <div v-if="!noValidation" class="text-field__error">{{ error }}</div>
      <div v-if="counter || showSize" class="text-field__counter-size">
        <template>Liczba plików: {{ value.length }} </template
        ><template>(łącznie {{ formatFileSize(filesSize) }}) </template>
      </div>
    </div>
  </div>
</template>

<script>
import SvgVue from "svg-vue";
import randomString from "@/helpers/string/random-string";
import formValidation from "@/mixins/form-validation";
import formatFileSize from "@/helpers/files/format-file-size";
export default {
  mixins: [formValidation],
  components: {
    SvgVue,
  },
  props: {
    value: String,
    icon: String,
    label: String,
    disabled: Boolean,
    lazyIcon: { type: Boolean, default: true },
    rules: Object,
    noValidation: Boolean,
    type: {
      type: String,
      default: "text",
    },
    multiple: Boolean,
    counter: Boolean,
    showSize: Boolean,
    accept: String,
  },
  data() {
    return {
      id: randomString(6),
      isFocused: false,
    };
  },
  computed: {
    filesSize() {
      if (this.value.constructor !== FileList) return 0;
      return [...this.value].reduce((total, file) => (total += file.size), 0);
    },
  },
  methods: {
    formatFileSize,
    prepareValue(value) {
      return value?.constructor === FileList
        ? `Liczba plików: ${value.length}`
        : value;
    },
  },
  watch: {
    isFocused() {
      if (this.isFocused) this.$refs.input.focus();
    },
  },

  mounted() {
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
  display: flex;
  padding-top: 19px;
  flex-direction: column;

  &__input[type="date"] + &__label {
    @include labelFocusState;
  }
  svg {
    path {
      fill: rgba(0, 0, 0, 0.6);
    }
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
  &__messages {
    min-height: 14px;
    font-size: 12px;
    line-height: 12px;
    width: 100%;
    display: flex;
    flex: 1 0 auto;
    bottom: -2px;
  }
  &__counter-size {
    white-space: nowrap;
  }
  &__error {
    flex: 1 1 auto;
  }

  &--error &__label,
  &--error &__input,
  &__error,
  &--error &__counter-size {
    color: #ff5252;
  }
  &--error svg path {
    fill: #ff5252 !important;
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