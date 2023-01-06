import ucfirst from "@/helpers/string/ucfirst";
import lcfirst from "@/helpers/string/lcfirst";

export default {
    props: ["reloadFlag"],
    watch: {
        reloadFlag() {
            if (this.reloadFlag) this.reloadData();
        }
    },
    computed: {
        moduleName() {
            return this.table.slice(0, 1).toUpperCase() + this.table.slice(1);
        }
    },
    methods: {
        emitData() {
            if (this.emit !== false)
                this.$emit("blockDataEmit", this.tableData);
        },
        async fetchData() {
            let action = this.table;

            if (this.module.namespaced)
                action = `${this.moduleName}/${this.table}`;
            await this.$store.dispatch(action);
            this.emitData();
        },
        async reloadData() {
            await this.fetchData();
        },

        registerModule(name, module) {
            if (name) name = lcfirst(name);
            if (name) name = ucfirst(name);
            if (!this.$store.hasModule(name || this.moduleName)) {
                this.$store.registerModule(
                    name || this.moduleName,
                    module || this.module
                );
            }
        }
    },

    async created() {
        this.table = lcfirst(this.table);
        this.registerModule();
    },
    beforeMount() {
        if (this.table === undefined) {
            console.error(
                `Brakuje zmiennej 'table' w komponencie ${this.$options._parentVnode.tag}!`
            );
        }
        if (this.tableData === undefined) {
            console.error(
                `Brakuje zmiennej 'tableData' w komponencie ${this.$options._parentVnode.tag}!`
            );
        }
        if (this.module === undefined) {
            console.error(
                `Brakuje zmiennej 'module' w komponencie ${this.$options._parentVnode.tag}!`
            );
        }

        if (this.tableData?.constructor !== Array) return;
        if (this.$route.meta.adminRoute) this.fetchData();
        if (
            this.tableData.length === 0 ||
            this.tableData.some(row => Object.values(row || {}).length === 0)
        )
            this.fetchData();
    }
};
