export default {
    data() {
        return {
            fields: [],
            formComponentsNames: ["text-field", "checkbox"],
        }
    },
    methods: {
        setFields() {
            this.fields = Object.values(
                this.$refs
            ).filter((child) => {
                return this.formComponentsNames.includes(child.$options.name);
            })
            this.setNewWatchers(this.fields)
        },
        setNewWatchers(fields) {
            for (let i = 0; i < fields.length; i++) {
                // works only on fields.i.x - does not work on entire object fields.i (dunno why) 
                this.$watch(`fields.${i}.value`, () => {
                    this.$refs.form.validate()
                })
            }
        }
    },
    mounted() {
        this.setFields()
    }
}