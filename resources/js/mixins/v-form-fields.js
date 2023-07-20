export default {
    data() {
        return {
            fields: [],
            formComponentsNames: ["text-field", "checkbox"],
        }
    },
    mounted() {

        this.fields = Object.values(
            this.$refs
        ).filter((child) => {
            return this.formComponentsNames.includes(child.$options.name);
        });
    }
}