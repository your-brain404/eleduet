<template>
  <v-main>
    <v-container>
      <v-card>
        <v-card-title class="justify-content-center">
          <h2 class="pt-4 font-weight-bold panel-title-header first-color">
            {title} {{ formTitle }}
          </h2>
        </v-card-title>
        <v-divider class="mt-0"></v-divider>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12" md="8">
              <div class="pa-5">
                <checkbox
                  label="Aktywny"
                  v-model="currentObject.active"
                ></checkbox>
                <text-field
                  v-model="currentObject.order_number"
                  type="number"
                  label="Kolejność"
                ></text-field>
                <text-field
                  v-model="currentObject.title"
                  :rules="rules.titleRules"
                  label="Tytuł *"
                ></text-field>
                <text-field
                  v-model="currentObject.subtitle"
                  label="Podtytuł"
                ></text-field>

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
              </div>
            </v-col>
          </v-row>
          <v-divider class="mb-0"></v-divider>
          <form-footer></form-footer>
        </v-form>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import FormServiceMixin from "@/mixins/FormService.js";

export default {
  mixins: [FormServiceMixin],
};
</script>
