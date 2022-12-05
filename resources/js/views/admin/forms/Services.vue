<template>
  <v-main>
    <v-container>
      <v-card>
        <v-card-title class="justify-content-center">
          <h2 class="pt-4 font-weight-bold panel-title-header first-color">
            Usługi {{ formTitle }}
          </h2>
        </v-card-title>
        <v-divider class="mt-0"></v-divider>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12" md="8">
              <div class="pa-5">
                <checkbox
                  label="Pokaż na stronie głównej"
                  v-model="currentObject.home_page"
                ></checkbox>
                <text-field
                  v-model="currentObject.title"
                  :rules="rules.titleRules"
                  label="Tytuł *"
                ></text-field>
                <div class="checkboxes">
                  <p class="mb-1">Wybierz kategorie:</p>
                  <checkbox
                    v-for="(category, i) in serviceCategories"
                    :key="`service-category-${i}`"
                    :label="
                      category.title
                        .replace('<br>', ' ')
                        .replace('{', '')
                        .replace('}', '')
                    "
                    :value="setCheckboxState(category.id)"
                    @input="serviceCategoryChange(category.id, $event)"
                  ></checkbox>
                </div>

                <div class="mt-3">
                  <p class="mb-1">Krótki opis</p>
                  <vue-editor
                    v-model="currentObject.short_description"
                  ></vue-editor>
                </div>
                <div class="mt-3">
                  <p class="mb-1">Opis</p>
                  <vue-editor v-model="currentObject.description"></vue-editor>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="4">
              <div class="pa-5">
                <FilePicker v-model="currentObject.photo" images-only />

                <text-field
                  v-model="currentObject.photo_alt"
                  label="Tekst alternatywny zdjęcia"
                ></text-field>
                <text-field
                  v-model="currentObject.photo_background_position"
                  label="Pozycja zdjęcia"
                ></text-field>
              </div>
            </v-col>
          </v-row>
          <v-divider class="mb-0"></v-divider>
          <form-footer />
        </v-form>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import FormServiceMixin from "@/mixins/FormService.js";
import getModule from "@/helpers/store/get-module";

export default {
  mixins: [FormServiceMixin],

  computed: {
    serviceCategories() {
      return this.$store.state.ServiceCategories?.serviceCategories || [];
    },
    currentServiceCategories() {
      return (
        this.$store.state.CurrentServiceCategories?.currentServiceCategories ||
        []
      ).map((row) => row.service_category_id);
    },
  },

  methods: {
    serviceCategoryChange(categoryId, state) {
      let currentObject = this.currentObject;
      state
        ? currentObject.service_categories.push(categoryId)
        : currentObject.service_categories.splice(
            currentObject.service_categories.indexOf(categoryId),
            1
          );
      this.$store.commit("FormService/setCurrentObject", currentObject);
    },
    setCheckboxState(categoryId) {
      return this.currentServiceCategories.includes(categoryId);
    },
  },

  created() {
    if (!this.$store.hasModule("ServiceCategories")) {
      this.$store.registerModule(
        "ServiceCategories",
        getModule("serviceCategories")
      );
    }
    if (!this.$store.hasModule("CurrentServiceCategories")) {
      this.$store.registerModule(
        "CurrentServiceCategories",
        getModule("currentServiceCategories")
      );
    }
    this.$store.dispatch("ServiceCategories/serviceCategories");
    this.$store.dispatch(
      "CurrentServiceCategories/currentServiceCategories",
      this.$route.params.id
    );
  },
  destroyed() {
    this.$store.commit("CurrentServiceCategories/currentServiceCategories", []);
  },
};
</script>

<style lang="scss">
.checkboxes {
  label {
    margin-bottom: 0 !important;
  }
}
</style>
