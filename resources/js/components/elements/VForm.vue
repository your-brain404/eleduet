<template>
  <form @submit.prevent="">
    <slot></slot>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formComponentsNames: ["text-field", "checkbox"],
      formComponents: [],
    };
  },
  props: {
    value: Boolean,
  },
  computed: {
    valid() {
      return this.formComponents.every((component) => !component.error);
    },
  },
  watch: {
    valid(valid) {
      this.$emit("input", valid);
    },
    $children: {
      deep: true,
      immediate: true,
      handler: "setFormComponents",
    },
  },
  methods: {
    validate() {
      let errors = {};
      for (let i = 0; i < this.formComponents.length; i++) {
        errors[i] = [];
        let formComponent = this.formComponents[i];
        if (formComponent.rules) {
          for (let j = 0; j < formComponent.rules.length; j++) {
            let validationResult = formComponent.rules[j](formComponent.value);
            if (validationResult.constructor === String) {
              errors[i].push(validationResult);
            }
          }
        }
        formComponent.error = errors[i].join(" ");
      }
      return this.valid;
    },
    setFormComponents() {
      this.formComponents = this.$children.filter((child) => {
        return this.formComponentsNames.includes(
          child.$vnode.componentOptions.tag
        );
      });
    },
  },
  mounted() {
    this.setFormComponents();
  },
};
</script>

<style>
</style>