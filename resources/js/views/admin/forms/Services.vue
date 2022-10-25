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
                <v-checkbox
                  color="primary"
                  label="Pokaż na stronie głównej"
                  :input-value="currentObject.home_page"
                  :value="currentObject.home_page"
                  @change="currentObject.home_page = $event"
                ></v-checkbox>
                <v-text-field
                  color="primary"
                  v-model="currentObject.title"
                  :rules="rules.titleRules"
                  label="Tytuł *"
                  required
                ></v-text-field>
                <div class="checkboxes">
                  <p class="mb-1">Wybierz kategorie:</p>
                  <v-checkbox
                    v-for="(category, i) in serviceCategories"
                    :key="`service-category-${i}`"
                    color="primary"
                    :label="
                      category.title
                        .replace('<br>', ' ')
                        .replace('{', '')
                        .replace('}', '')
                    "
                    :input-value="setCheckboxState(category.id)"
                    @change="serviceCategoryChange(category.id, $event)"
                  ></v-checkbox>
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

                <v-text-field
                  color="primary"
                  v-model="currentObject.photo_alt"
                  label="Tekst alternatywny zdjęcia"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.photo_background_position"
                  label="Pozycja zdjęcia"
                ></v-text-field>
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
    if (!this.$store.hasModule("serviceCategories")) {
      this.$store.registerModule(
        "serviceCategories",
        getModule("serviceCategories")
      );
    }
    if (!this.$store.hasModule("currentServiceCategories")) {
      this.$store.registerModule(
        "currentServiceCategories",
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
