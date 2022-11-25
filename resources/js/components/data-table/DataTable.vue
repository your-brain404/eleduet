<template>
  <div class="data-table">
    <table class="data-table__table">
      <thead class="data-table__thead">
        <tr class="data-table__tr">
          <th
            class="data-table__th"
            :class="{
              'data-table__th--sort-active': sort.column === header.value,
              'data-table__th--sort-desc':
                sort.column === header.value && sort.type === 'desc',
            }"
            :align="header.align"
            v-for="header in headersClone"
            @click="header.text && setSort(header.value)"
            :key="'header-' + header.value"
            :style="{ cursor: !!header.text || 'default' }"
          >
            {{ header.text }}
            <svg-vue
              v-if="header.text"
              class="data-table__sort-arrow"
              width="18"
              height="16"
              icon="arrow-up"
            ></svg-vue>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="data-table__tr"
          v-for="(item, i) in filteredItems"
          :key="'item-' + i"
        >
          <td
            :align="header.align"
            class="data-table__td"
            v-for="header in headersClone"
            :key="'header-' + header.value"
          >
            <div v-if="header.type === 'checkbox'" class="data-table__checkbox">
              <slot name="checkbox" :checkbox="header.value" :item="item">{{
                item[header.value]
              }}</slot>
            </div>
            <div v-else class="data-table__custom-td">
              <slot :name="`item.${header.value}`" :item="item">{{
                item[header.value]
              }}</slot>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SvgVue from "svg-vue";

export default {
  components: {
    SvgVue,
  },
  props: {
    headers: Array,
    items: Array,
    search: String,
    itemsPerPage: {
      default: 5,
      type: Number,
    },
    itemsPerPageOptions: {
      type: Array,
      default: () => [5, 10, 15],
    },
  },
  data() {
    return {
      headersClone: this.headers,
      sort: {},
    };
  },
  methods: {
    setSort(column) {
      if (this.sort.column !== column) {
        this.sort = {
          type: "asc",
          column,
        };
      } else {
        this.sort.type === "asc" ? (this.sort.type = "desc") : (this.sort = {});
      }
    },
  },
  computed: {
    filteredItems() {
      let items = this.items;
      items = items.filter((item) => {
        if (!this.search) return item;
        for (let key in item) {
          if (
            item[key]
              .toString()
              .toLowerCase()
              .includes(this.search.toLowerCase())
          ) {
            return item;
          }
        }
      });
      if (this.sort.column) {
        let sortTypeInt = this.sort.type === "asc" ? 1 : -1;
        items = items.sort((a, b) => {
          return a[this.sort.column] > b[this.sort.column]
            ? sortTypeInt
            : sortTypeInt * -1;
        });
      }
      return items;
    },
  },
};
</script>

<style lang="scss" scoped>
.data-table {
  $parent: ".data-table";
  &__table {
    width: 100%;
    border-collapse: collapse;
  }
  &__thead {
    border-bottom: thin solid rgba(0, 0, 0, 0.12);
  }
  &__tr {
    border-bottom: thin solid rgba(0, 0, 0, 0.12);
  }
  &__th,
  &__td {
    color: rgba(0, 0, 0, 0.6);
    user-select: none;
    font-size: 0.75rem;
    height: 66px;
    padding: 0 16px;
    transition: height 0.2s cubic-bezier(0.4, 0, 0.6, 1);
    cursor: pointer;
  }
  &__th {
    &:hover,
    &--sort-active {
      color: rgba(0, 0, 0, 0.87);
      #{$parent}__sort-arrow {
        opacity: 1;
      }
    }
    &--sort-active {
      #{$parent}__sort-arrow {
        ::v-deep path {
          fill: rgba(0, 0, 0, 0.87) !important;
        }
      }
    }
    &--sort-desc {
      #{$parent}__sort-arrow {
        transform: rotate(180deg) translateY(-5px);
      }
    }
  }
  &__td {
    font-size: 0.875rem;
  }
  &__sort-arrow {
    transform: translateY(5px);
    opacity: 0;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
    ::v-deep path {
      fill: rgba(0, 0, 0, 0.38);
    }
  }
}
</style>