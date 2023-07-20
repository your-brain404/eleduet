<template>
  <form @submit.prevent="">
    <slot></slot>
  </form>
</template>

<script>
export default {
  props: {
    value: Boolean,
    fields: Array,
  },
  computed: {
    valid() {
      return this.fields.every((component) => !component.error);
    },
  },
  watch: {
    valid(valid) {
      this.$emit("input", valid);
    },
    fields: {
      deep: true,
      handler: "validate",
    },
  },
  methods: {
    validate() {
      let errors = {};
      for (let i = 0; i < this.fields.length; i++) {
        errors[i] = [];
        let field = this.fields[i];
        if (field.rules) {
          for (let j = 0; j < field.rules.length; j++) {
            let validationResult = field.rules[j](field.value);
            if (validationResult?.constructor === String) {
              errors[i].push(validationResult);
            }
          }
        }
        field.error = errors[i].join(" ");
      }
      return this.valid;
    },
  },
};
</script>

<style>
</style>