<template functional>
  <div
    :class="[
      'col',
      `col-${props.cols}`,
      props.md ? `col-md-${props.md}` : '',
      props.lg ? `col-lg-${props.lg}` : '',
      data.staticClass,
      ...data.class,
    ]"
    v-bind="data.attrs"
    :style="data.staticStyle"
    v-on="data.on"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    dupa: Boolean,
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
  $percent: 100 / (12 / $columns) * 1%;
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