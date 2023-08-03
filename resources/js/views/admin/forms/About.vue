<script>
import TextField from "@/components/elements/TextField.vue";
import VueEditor from "@/components/forms/TinyMCE.vue";
import AbstractForm from "./AbstractForm.vue";
import FilePicker from "@/components/file-picker/FilePicker.vue";

export default {
  extends: AbstractForm,
  setup(props, ctx) {
    return {
      ...AbstractForm.setup(props, ctx),
    };
  },
  data() {
    return {
      title: "Sekcja pod sliderem",
      formCols: [
        {
          rwd: {
            cols: 12,
            md: 8,
          },
          fields: [
            {
              component: TextField,
              rules: this.rules.titleRules,
              currentObjectVModel: "title",
              props: {
                label: "Tytuł *",
                required: true,
              },
            },
            {
              component: TextField,
              props: { label: "Napis na przycisku" },
              currentObjectVModel: "button_name",
            },
            {
              component: VueEditor,
              props: { label: "Krótki opis" },
              currentObjectVModel: "short_description",
            },
          ],
        },
        {
          rwd: {
            cols: 12,
            md: 4,
          },
          fields: [
            {
              component: FilePicker,
              currentObjectVModel: "photo",
              props: {
                "images-only": true,
                label: "Zdjęcie",
              },
            },
            {
              component: TextField,
              currentObjectVModel: "photo_alt",
              props: {
                "images-only": true,
                label: "Tekst alternatywny zdjęcia",
              },
            },
          ],
        },
      ],
    };
  },
};
</script>
