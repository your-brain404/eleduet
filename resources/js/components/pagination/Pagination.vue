<template>
  <custom-pagination
    class="custom-pagination"
    :value="modelValue"
    @input="$emit('update:modelValue', $event)"
    :total-rows="totalRows"
    :per-page="perPage"
  />
</template>

<script>
import  CustomPagination  from "@/components/custom-pagination/CustomPagination.vue";
export default {
  components: { CustomPagination },
  props: {
    modelValue: Number,
    totalRows: Number,
    perPage: Number,
  },
};
</script>

<style lang="scss">
.custom-pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  button,
  span {
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    border-radius: 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    height: 32px;
    width: 32px;
    margin: 0.3rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    color: black;
    transition: 0.2s ease;
    background-color: white;
  }
  li.active,
  li:hover {
    button {
      background-color: var(--first-color);
      color: white;
    }
  }
  li.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
}
</style>