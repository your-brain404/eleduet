<template>
    <ul class="custom-pagination">
        <li
            @click="$emit('input', 1)"
            role="presentation"
            :class="['page-item', { disabled: value === 1 }]"
            aria-hidden="true"
        >
            <span
                role="menuitem"
                aria-label="Go to first page"
                aria-disabled="true"
                class="page-link"
                >«</span
            >
        </li>
        <li
            @click="$emit('input', value - 1)"
            role="presentation"
            :class="['page-item', { disabled: value === 1 }]"
            aria-hidden="true"
        >
            <span
                role="menuitem"
                aria-label="Go to previous page"
                aria-disabled="true"
                class="page-link"
                >‹</span
            >
        </li>

        <li v-if="value > 3" :class="['page-item', 'disabled']">
            <span class="page-link">...</span>
        </li>
        <li
            @click="$emit('input', page)"
            v-for="page in middlePages"
            :key="`custom-pagination-${page}`"
            :class="['page-item', { active: page === value }]"
        >
            <button class="page-link">{{ page }}</button>
        </li>
        <li v-if="value < pages - 3" :class="['page-item', 'disabled']">
            <span class="page-link">...</span>
        </li>

        <li
            @click="$emit('input', value + 1)"
            role="presentation"
            :class="['page-item', { disabled: value === pages }]"
        >
            <button
                role="menuitem"
                type="button"
                tabindex="-1"
                aria-label="Go to next page"
                class="page-link"
            >
                ›
            </button>
        </li>
        <li
            @click="$emit('input', pages)"
            role="presentation"
            :class="['page-item', { disabled: value === pages }]"
        >
            <button
                role="menuitem"
                type="button"
                tabindex="-1"
                aria-label="Go to last page"
                class="page-link"
            >
                »
            </button>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        value: Number,
        totalRows: Number,
        perPage: Number,
    },
    computed: {
        pages() {
            return Math.ceil(this.totalRows / this.perPage);
        },
        middlePages() {
            return Array(this.pages)
                .fill(1)
                .map((_, i) => i + 1)
                .filter((num) => {
                    if (this.value < 4) return num < 5;
                    else if (this.value < this.pages - 2)
                        return num >= this.value - 1 && num <= this.value + 1;
                    else return num >= this.pages - 3;
                });
        },
    },
};
</script>
