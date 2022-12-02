import axios from "axios";
import FilePicker from "@/components/file-picker/FilePicker";
import url from "@/helpers/photo/url.js";
import TagsInput from "@/components/tagsinput/TagsInput.vue";
import AdminPanelBlocks from "@/data/admin-panel-blocks.js";
import VueEditor from "@/components/forms/TinyMCE";
import FormFooter from "@/components/layouts/FormFooter";
import FormService from "@/store/modules/formService/formServiceModule.js";

import VForm from "@/components/elements/VForm.vue";
import TextField from "@/components/elements/TextField.vue";
import Checkbox from "@/components/elements/Checkbox.vue";
import {
    VMain,
    VCard,
    VCardTitle,
    VCheckbox,
    VTextField,
    VDivider,
    VContainer,
    VCol,
    VRow,
    VTextarea
} from "vuetify/lib";

export default {
    components: {
        TagsInput,
        VueEditor,
        VTextarea,
        FilePicker,
        FormFooter,
        VMain,
        VCard,
        VCardTitle,
        VCheckbox,
        VTextField,
        VDivider,
        VContainer,
        VForm,
        VCol,
        VRow,
        TextField,
        Checkbox
    },
    data() {
        return {
            name: "",
            rules: {
                titleRules: [v => !!v || "To pole jest wymagane!"],
                positiveRules: [
                    v => v > 0 || "To pole musi być większe od zera!"
                ],
                nonNegativeRules: [
                    v => v > -1 || "To pole nie może być ujemne!"
                ],
                priceRules: [
                    v =>
                        (v * 1000) % 10 == 0 ||
                        "To pole musi mieć max. dwa miejsca po przecinku!"
                ],
                amountRules: [
                    v => v % 1 == 0 || "To pole musi być liczbą całkowitą!"
                ]
            },
            activeFile: "",
            parent: {}
        };
    },
    watch: {
        validateFlag(newValue) {
            if (newValue) this.validate();
        }
    },
    computed: {
        validateFlag() {
            return this.$store.state.FormService?.validateFlag || false;
        },
        valid: {
            get() {
                return this.$store.state.FormService.valid;
            },
            set(newValue) {
                this.$store.state.FormService.valid = newValue;
            }
        },

        currentObject: {
            get() {
                return this.$store.state.FormService.currentObject;
            },
            set(newValue) {
                this.$store.commit("FormService/setCurrentObject", newValue);
            }
        },
        formTitle() {
            return this.$route.params.id ? "Edycja" : "Dodawanie";
        },
        parentTable() {
            let parentTable = "";
            Object.entries(AdminPanelBlocks).forEach(block => {
                block[1].forEach(table => {
                    if (table.tablename == this.$route.path.split("/")[2]) {
                        parentTable = block[1][0].parent
                            ? block[1][0].parent
                            : "";
                    }
                });
            });
            return parentTable;
        }
    },
    methods: {
        getUrl: src => url(src),
        getParent() {
            axios
                .get(
                    `/api/${this.parentTable}/get_one/${this.$route.params.parent_id}`
                )
                .then(res => (this.parent = res.data))
                .catch(err => console.log(err));
        },
        getImageDefaultPlaceholder() {
            return window.location.origin + "/storage/img/placeholder/250.png";
        },

        add(formData) {
            this.$store.dispatch("FormService/add", { formData });
        },
        edit(formData, options) {
            this.$store.dispatch("FormService/edit", { formData, options });
        },
        validate() {
            if (!this.$refs.form.validate()) {
                this.$store.commit("toast", "Formularz zawiera błędy!");
                return;
            }
            this[this.$route.params.id ? "edit" : "add"](this.currentObject);
        },
        updateDeletedPhoto() {
            if (this.$route.params.id)
                this.edit(this.currentObject, { redirect: false });
        },
        secureRoutes() {
            let user = JSON.parse(localStorage.getItem("user"));
            let status = false;
            if (user) {
                if (user.type == "Admin" || user.type == "Moderator") {
                    status = true;
                }
            }
            if (!status)
                this.$router.push(
                    `/admin-panel/${this.$route.path.split("/")[2]}`
                );
        }
    },

    created() {
        if (!this.$store.hasModule("FormService")) {
            this.$store.registerModule("FormService", FormService);
        }
        if (this.$route.params.id) {
            axios
                .get(
                    `/api/${this.$route.path.split("/")[2]}/get_one/${
                        this.$route.params.id
                    }`
                )
                .then(res => {
                    this.activePhoto =
                        res.data.photo !== null
                            ? url(res.data.photo)
                            : this.activePhoto;
                    this.activeFile =
                        res.data.file !== null
                            ? url(res.data.file)
                            : this.activeFile;
                    this.currentObject = { ...this.currentObject, ...res.data };
                });
        }
        if (this.$route.params.parent_id) this.getParent();

        this.secureRoutes();
    }
};
