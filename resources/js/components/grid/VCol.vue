<template>
  <div
    :class="[
      'col',
      `col-${cols}`,
      md ? `col-md-${md}` : '',
      lg ? `col-lg-${lg}` : '',
    ]"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    cols: { type: [Number, String], default: 12 },
    md: {
      type: [Number, String, Boolean],
      default: false,
    },
    lg: {
      type: [Number, String, Boolean],
      default: false,
    },
  },
};
</script>

<style lang="scss">
$breakpoints: (
  "": 0px,
  "-sm": 600px,
  "-md": 960px,
  "-lg": 1264px,
  "-xl": 1904px,
);
@mixin getColumnWidth($columns) {
  $percent: calc(100 / (12 / $columns)) * 1%;
  flex: 0 0 $percent;
  max-width: $percent;
}
@for $i from 1 through 12 {
  $columns: 13 - $i;
  @each $breakpointName, $breakpointWidth in $breakpoints {
    .col#{$breakpointName}-#{$columns} {
      @if ($breakpointWidth) {
        @media (min-width: $breakpointWidth) {
          @include getColumnWidth($columns);
        }
      } @else {
        @include getColumnWidth($columns);
      }
    }
  }
}

.col {
  width: 100%;
  padding: 12px;
}
</style>