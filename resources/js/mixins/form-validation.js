export default {
    data() {
        return {
            error: ""
        };
    },
    watch: {
        value: {
            deep: true,
            handler() {
                this.$parent.validate();
            }
        }
    }
};
