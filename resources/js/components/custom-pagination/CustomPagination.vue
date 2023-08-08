<template>
  <ul class="custom-pagination">
    <li role="presentation" :class="['page-item', {'disabled': value === 1}]" aria-hidden="true"><span role="menuitem" aria-label="Go to first page" aria-disabled="true" class="page-link">«</span></li>
    <li role="presentation" :class="['page-item', {'disabled': value === 1}]" aria-hidden="true"><span role="menuitem" aria-label="Go to previous page" aria-disabled="true" class="page-link">‹</span></li>
    <li @click="$emit('input', page)" v-for="page in pages" :key="`custom-pagination-${page}`" :class="['page-item', {'active': page === value}]">
      <button class="page-link" >{{ page }}</button>
    </li>
    <li role="presentation" :class="['page-item', {'disabled': value === pages}]"><button role="menuitem" type="button" tabindex="-1" aria-label="Go to next page" class="page-link">›</button></li>
    <li role="presentation" :class="['page-item', {'disabled': value === pages}]"><button role="menuitem" type="button" tabindex="-1" aria-label="Go to last page" class="page-link">»</button></li>
  </ul>
</template>

<script>
  export default {
    props: {
      value: Number,
      totalRows: Number, 
      perPage: Number
    },
    computed: {
      pages() {
        return Math.ceil(this.totalRows / this.perPage)
      }
    }
  }
</script>