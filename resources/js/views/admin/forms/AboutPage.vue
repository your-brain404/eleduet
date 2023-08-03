<script>
import AbstractForm from "./AbstractForm.vue";
import VueEditor from "@/components/forms/TinyMCE.vue";

export default {
  extends: AbstractForm,
  data() {
    return {
      title: "O nas",
      formCols: [
        {
          rwd: {
            cols: 12,
          },
          fields: [
            {
              component: VueEditor,
              currentObjectVModel: "description",
              props: {
                label: "Opis",
              },
            },
          ],
        },
      ],
    };
  },
};
</script>
