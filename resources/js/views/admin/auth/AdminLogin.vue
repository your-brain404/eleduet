<template>
  <v-main>
    <v-container>
      <v-card>
        <v-card-title class="justify-content-center">
          <h2 class="pt-4 font-weight-bold panel-title-header first-color">
            Logowanie
          </h2>
        </v-card-title>
        <v-divider class="mt-0"></v-divider>
        <v-form v-if="validationRules.id" ref="form" v-model="valid">
          <v-row>
            <v-col cols="12">
              <div class="pa-5">
                <text-field
                  v-model="credentials.email"
                  :rules="[required, email]"
                  label="Adres E-mail"
                ></text-field>
                <text-field
                  type="password"
                  :rules="[required, passwordLength]"
                  v-model="credentials.password"
                  label="Hasło"
                ></text-field>

                <v-btn
                  color="primary"
                  class="mr-2"
                  @click="login"
                  :loading="loading"
                  type="submit"
                >
                  <template #icon>
                    <svg-vue icon="check"></svg-vue>
                  </template>
                  <span class="button-name">Zaloguj</span>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import getModule from "@/helpers/store/get-module";
import VForm from "@/components/elements/VForm.vue";
import TextField from "@/components/elements/TextField.vue";
import VRow from "@/components/grid/VRow.vue";
import VCol from "@/components/grid/VCol.vue";
import VMain from "@/components/grid/VMain.vue";
import VContainer from "@/components/grid/VContainer.vue";
import VCard from "@/components/elements/VCard";
import VBtn from "@/components/elements/VBtn";
import VDivider from "@/components/elements/VDivider";
import VCardTitle from "@/components/elements/VCardTitle";
import SvgVue from "svg-vue";

export default {
  components: {
    VMain,
    VCol,
    SvgVue,
    VContainer,
    VCard,
    VForm,
    VRow,
    VBtn,
    TextField,
    VDivider,
    VCardTitle,
  },
  data() {
    return {
      valid: true,
      credentials: {
        password: "",
        email: "",
      },
      loading: false,
    };
  },
  computed: {
    validationRules() {
      return this.$store.getters.validationRules;
    },
  },
  methods: {
    required(v) {
      return !!v || this.validationRules.required;
    },
    email(v) {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(v) || this.validationRules.email;
    },
    passwordLength(v) {
      return v.length >= 8 || this.validationRules.password_length;
    },
    async login() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        await this.$store.dispatch("authLogin", this.credentials);
        this.loading = false;
      }
    },
  },
  async created() {
    if (!this.$store.hasModule("validationRules"))
      this.$store.registerModule(
        "validationRules",
        getModule("validationRules")
      );
    if (!this.$store.hasModule("snackbarAlerts"))
      this.$store.registerModule("snackbarAlerts", getModule("snackbarAlerts"));

    if (localStorage.getItem("user"))
      this.$router.push({
        name: "AdminMain",
      });
    await this.$store.dispatch("validationRules");
  },
};
</script>

<style scoped>
.panel-title-header {
  font-size: 3rem;
}
.button-name {
  color: white;
}
</style>

