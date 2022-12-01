<template>
  <v-main>
    <v-container>
      <v-card>
        <v-card-title class="justify-content-center">
          <h2 class="pt-4 font-weight-bold panel-title-header first-color">
            Slider {{ formTitle }}
          </h2>
        </v-card-title>
        <v-divider class="mt-0"></v-divider>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12" md="8">
              <div class="pa-5">
                <text-field
                  v-model="currentObject.title"
                  :rules="rules.titleRules"
                  label="Tytuł *"
                  required
                ></text-field>
                <text-field
                  v-model="currentObject.subtitle"
                  label="Podtytuł"
                ></text-field>
                <text-field
                  v-model="currentObject.button_name_1"
                  label="Napis na pierwszym przycisku"
                ></text-field>

                <text-field
                  ref="button_link_1"
                  v-model="currentObject.button_link_1"
                  label="Link pierwszego przycisku"
                ></text-field>
                <checkbox
                  ref="checkbox1"
                  label="Przycisk typu 'pobierz'?"
                  v-model="currentObject.button_download_1"
                ></checkbox>
                <text-field
                  v-model="currentObject.button_name_2"
                  label="Napis na drugim przycisku"
                ></text-field>
                <text-field
                  v-model="currentObject.button_link_2"
                  label="Link drugiego przycisku"
                ></text-field>
                <checkbox
                  label="Przycisk typu 'pobierz'?"
                  v-model="currentObject.button_download_2"
                ></checkbox>
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
                <text-field
                  v-model="currentObject.photo_background_size"
                  label="Wielkość zdjęcia (wartość procentowa np. 95%)"
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

export default {
  mixins: [FormServiceMixin],
};
</script>