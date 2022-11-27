<template>
  <v-select :options="options"></v-select>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
export default {
  props: {
    options: Array,
  },
  components: {
    vSelect,
  },
};
</script>

<style>
</style>