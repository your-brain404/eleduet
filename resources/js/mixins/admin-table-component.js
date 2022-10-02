export default {
    props: ["reloadFlag"],
    watch: {
        reloadFlag() {
            if (this.reloadFlag) this.reloadData();
        }
    },
    methods: {
        emitData() {
            this.$emit("blockDataEmit", this.tableData);
        },
        async fetchData() {
            await this.$store.dispatch(this.table);
            this.emitData();
        },
        async reloadData() {
            this.$store.commit(this.table, []);
            await this.fetchData();
        }
    },
    created() {
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
        if (this.tableData?.constructor !== Array) return;
        if (this.$route.meta.adminRoute) this.fetchData();
        if (
            this.tableData.length === 0 ||
            this.tableData.some(row => Object.values(row).length === 0)
        )
            this.fetchData();
    }
};
