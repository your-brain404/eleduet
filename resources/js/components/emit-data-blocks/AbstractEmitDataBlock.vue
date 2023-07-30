<script>
import getModule from "@/helpers/store/get-module.js";
import axios from "@/plugins/axios/axios.js";
import pascalToSnake from "@/helpers/string/pascal-to-snake";
import lcfirst from "@/helpers/string/lcfirst";

export default {
  emits: ["blockDataEmit"],
  props: ["reloadFlag"],
  data() {
    return {
      dataBlock: null,
      endpoint: "get_all",
      moduleNamespaced: true,
    };
  },
  computed: {
    componentName() {
      return this.$options.__file.split("/").pop().replace(".vue", "");
    },
    lcComponentName() {
      return lcfirst(this.componentName);
    },
    moduleName() {
      return this.lcComponentName;
    },
    tableName() {
      return pascalToSnake(this.componentName);
    },
    moduleCommitName() {
      return this.moduleNamespaced
        ? `${this.moduleName}/${this.lcComponentName}`
        : this.lcComponentName;
    },
    moduleFileName() {
      return this.lcComponentName;
    },
  },
  watch: {
    reloadFlag() {
      if (this.reloadFlag) this.getData();
    },
  },
  methods: {
    getData() {
      this.$store.commit("loading", true);
      axios
        .get(`/api/${this.tableName}/${this.endpoint}`)
        .then((res) => {
          this.$store.commit("loading", false);
          this.dataBlock = res.data;
          if (this.endpoint.includes("get_one")) {
            this.dataBlock = [res.data];
          }
          this.$emit("blockDataEmit", this.dataBlock);
          this.$store.commit(this.moduleCommitName, res.data);
        })
        .catch((err) => {
          this.$store.commit("loading", false);
          console.error(err);
        });
    },
  },
  async created() {
    if (!this.$store.hasModule(this.componentName)) {
      const module = await getModule(this.moduleName);
      if (!module.namespaced) {
        this.moduleNamespaced = false;
      }
      this.$store.registerModule(this.componentName, module);
    }
    this.getData();
  },
};
</script>