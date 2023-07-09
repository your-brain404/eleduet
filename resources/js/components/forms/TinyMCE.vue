<template>
  <editor
    :value="value"
    @input="$emit('input', $event)"
    api-key="m22xj0x6h1pgqb681evsy9sxvg1fgl2qktcekp6e5ef3ni2z"
    :init="init"
  />
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
export default {
  components: {
    editor: Editor,
  },
  props: ["value"],
  data() {
    return {
      init: {
        height: 500,
        menubar: true,
        plugins: [
          "a11ychecker",
          "advlist",
          "advcode",
          "advtable",
          "autolink",
          "checklist",
          "export",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "powerpaste",
          "fullscreen",
          "formatpainter",
          "insertdatetime",
          "media",
          "table",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | casechange blocks | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
      },
    };
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    },
  },
};
</script>

<style>
.tox-notifications-container {
  display: none !important;
}
</style>