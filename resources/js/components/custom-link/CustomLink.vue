<template>
  <component
    :is="$isLinkExternal(path) ? 'a' : 'custom-router-link'"
    :download="Boolean(download)"
    :target="target"
    :href="$isLinkExternal(path) ? path : undefined"
    :to="$isLinkExternal(path) ? null : path"
  >
    <slot></slot>
  </component>
</template>

<script>
import CustomRouterLink from "@/components/custom-link/CustomRouterLink.vue";

export default {
  components: {
    CustomRouterLink,
  },
  props: {
    path: {
      type: String,
      default: "",
      required: true,
    },
    download: {
      default: false,
    },
    target: {
      type: String,
      default: "",
    },
  },
};
</script>