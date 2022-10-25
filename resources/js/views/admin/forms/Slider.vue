<template>
  <v-content>
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
                <v-text-field
                  color="primary"
                  v-model="currentObject.title"
                  :rules="rules.titleRules"
                  label="Tytuł *"
                  required
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.subtitle"
                  label="Podtytuł"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.button_name_1"
                  label="Napis na pierwszym przycisku"
                ></v-text-field>

                <v-text-field
                  color="primary"
                  v-model="currentObject.button_link_1"
                  label="Link pierwszego przycisku"
                ></v-text-field>
                <v-checkbox
                  color="primary"
                  label="Przycisk typu 'pobierz'?"
                  :input-value="currentObject.button_download_1"
                  :value="currentObject.button_download_1"
                  @change="currentObject.button_download_1 = $event"
                ></v-checkbox>
                <v-text-field
                  color="primary"
                  v-model="currentObject.button_name_2"
                  label="Napis na drugim przycisku"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.button_link_2"
                  label="Link drugiego przycisku"
                ></v-text-field>
                <v-checkbox
                  color="primary"
                  label="Przycisk typu 'pobierz'?"
                  :input-value="currentObject.button_download_2"
                  :value="currentObject.button_download_2"
                  @change="currentObject.button_download_2 = $event"
                ></v-checkbox>
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
                <v-text-field
                  color="primary"
                  v-model="currentObject.photo_background_size"
                  label="Wielkość zdjęcia (wartość procentowa np. 95%)"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-divider class="mb-0"></v-divider>
          <form-footer />
        </v-form>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import FormServiceMixin from "@/mixins/FormService.js";

export default {
  mixins: [FormServiceMixin],
};
</script>