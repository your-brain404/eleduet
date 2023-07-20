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
      <tbody class="data-table__tbody">
        <tr
          class="data-table__tr"
          v-for="(item, i) in paginatedItems"
          :key="'item-' + i"
        >
          <td
            :align="header.align"
            class="data-table__td"
            v-for="header in headersClone"
            :key="'header-' + header.value"
          >
            <div v-if="header.text" class="data-table__td-column-name">
              {{ header.text }}
            </div>
            <div v-if="header.type === 'checkbox'" class="data-table__checkbox">
              <slot name="checkbox" :checkbox="header.value" :item="item">{{
                item[header.value]
              }}</slot>
            </div>
            <div v-else class="data-table__custom-td">
              <slot :name="`item.${header.value}`" :item="item">{{
                item[header.value] | truncate
              }}</slot>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="data-table__footer">
      <div class="data-table__per-page">
        Wierszy na stronie:
        <v-select
          v-model="perPage"
          class="data-table__per-page-select"
          :clearSearchOnSelect="false"
          :options="itemsPerPageOptions"
          :searchable="false"
        ></v-select>
      </div>
      <div class="data-table__pagination">
        {{ perPage * page - (perPage - 1) }}-{{
          perPage * page > filteredItems.length
            ? filteredItems.length
            : perPage * page
        }}
        z
        {{ filteredItems.length }}
      </div>
      <div class="data-table__pagination-arrows">
        <div
          @click="page--"
          class="data-table__previous-page data-table__pagination-arrow"
          :class="{ 'data-table__pagination-arrow--disabled': page < 2 }"
        >
          <v-btn :disabled="page < 2" just-icon>
            <template #icon>
              <svg-vue width="24" height="24" icon="chevron-left"></svg-vue>
            </template>
          </v-btn>
        </div>
        <div
          @click="page++"
          class="data-table__next-page data-table__pagination-arrow"
          :class="{ 'data-table__pagination-arrow--disabled': page >= maxPage }"
        >
          <v-btn :disabled="page >= maxPage" just-icon>
            <template #icon>
              <svg-vue width="24" height="24" icon="chevron-right"></svg-vue>
            </template>
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgVue from "svg-vue";
import VSelect from "@/components/elements/VSelect.vue";
import VBtn from "@/components/elements/VBtn.vue";

export default {
  components: {
    SvgVue,
    VSelect,
    VBtn,
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
      perPage: this.itemsPerPage,
      page: 1,
    };
  },
  filters: {
    truncate(value) {
      if (!value) return value;
      return value.length > 70 ? value.slice(0, 70) + "..." : value;
    },
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
    paginatedItems() {
      return this.filteredItems.slice(
        (this.page - 1) * this.perPage,
        (this.page - 1) * this.perPage + this.perPage
      );
    },
    maxPage() {
      return Math.ceil(this.filteredItems.length / this.perPage);
    },
  },
};
</script>

<style lang="scss" scoped>
.data-table {
  $parent: ".data-table";
  $mobileEndpoint: 768px;
  &__table {
    width: 100%;
    border-collapse: collapse;
  }
  &__thead {
    border-bottom: thin solid rgba(0, 0, 0, 0.12);
    @media (max-width: $mobileEndpoint) {
      display: none;
    }
  }
  &__tr {
    border-bottom: thin solid rgba(0, 0, 0, 0.12);
  }
  &__tbody &__tr {
    @media (max-width: $mobileEndpoint) {
      display: flex;
      flex-direction: column;
      padding: 10px 0;
    }
    &:hover {
      background-color: #eee;
    }
  }
  &__th,
  &__td {
    color: rgba(0, 0, 0, 0.6);
    user-select: none;
    font-size: 0.75rem;
    padding: 16px;
    transition: height 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  }
  &__th {
    cursor: pointer;
    &:hover,
    &--sort-active {
      color: rgba(0, 0, 0, 0.87);
      #{$parent}__sort-arrow {
        opacity: 1;
      }
    }

    &--sort-active {
      #{$parent}__sort-arrow {
        :deep(path) {
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
    @media (max-width: $mobileEndpoint) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-column-name {
      color: rgba(0, 0, 0, 0.87);
      font-weight: 600;
      padding-right: 0.5rem;
      @media (min-width: $mobileEndpoint) {
        display: none;
      }
    }
  }
  &__custom-td {
    @media (max-width: $mobileEndpoint) {
      text-align: right;
      width: 100%;
    }
  }
  &__sort-arrow {
    transform: translateY(5px);
    opacity: 0;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
    :deep(path) {
      fill: rgba(0, 0, 0, 0.38);
    }
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 59px;
    font-size: 0.75rem;
    padding: 0 16px;
    @media (max-width: $mobileEndpoint) {
      flex-direction: column;
      justify-content: start;
      height: unset;
      & > div {
        padding: 0.5rem;
      }
    }
  }
  &__per-page {
    display: flex;
    align-items: center;
    &-select {
      margin-left: 1.5rem;
    }
  }
  &__pagination {
    margin: 0 35px;
    &-arrows {
      display: flex;
      align-items: center;
    }
    &-arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      z-index: 1;
      &:hover:after {
        content: "";
        z-index: -1;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        position: absolute;
      }
      :deep(path) {
        fill: rgba(0, 0, 0, 0.54);
      }
      &--disabled {
        pointer-events: none;
        :deep(path) {
          fill: rgba(0, 0, 0, 0.26);
        }
      }
    }
  }
  &__checkbox {
    .checkbox {
      &,
      &__label {
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>