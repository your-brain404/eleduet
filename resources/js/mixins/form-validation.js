export default {
    watch: {
        value: {
            deep: true,
            handler() {
                this.$parent.validate();
            }
        }
    }
};
