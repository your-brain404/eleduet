<template>
  <v-main>
    <v-container>
      <v-card>
        <v-card-title class="justify-content-center">
          <h2 class="pt-4 font-weight-bold panel-title-header first-color">
            Ustawienia {{ formTitle }}
          </h2>
        </v-card-title>
        <v-divider class="mt-0"></v-divider>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12" md="8">
              <div class="pa-5">
                <v-text-field
                  color="primary"
                  v-model="currentObject.company"
                  :rules="rules.titleRules"
                  label="Nazwa Strony *"
                  required
                ></v-text-field>
                <div class="mt-3">
                  <p class="mb-1">Kolor strony</p>
                  <v-color-picker
                    dot-size="25"
                    swatches-max-height="200"
                    @input="currentObject.first_color = $event"
                    :value="currentObject.first_color"
                  ></v-color-picker>
                </div>

                <div class="mt-3">
                  <p class="mb-1">Opis w stopce</p>
                  <vue-editor v-model="currentObject.description"></vue-editor>
                </div>
                <div class="mt-3">
                  <p class="mb-1">Zgoda na przetwarzanie danych (rodo1)</p>
                  <v-textarea v-model="currentObject.rodo_1"></v-textarea>
                </div>
                <div class="mt-3">
                  <p class="mb-1">Zgoda na kontakt telefoniczny (rodo2)</p>
                  <v-textarea v-model="currentObject.rodo_2"></v-textarea>
                </div>
                <div class="mt-3">
                  <p class="mb-1">Cookies</p>
                  <v-textarea v-model="currentObject.cookies"></v-textarea>
                </div>
                <v-text-field
                  color="primary"
                  v-model="currentObject.cookies_button"
                  label="Tekst na przycisku cookies"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.cookies_privace_button"
                  label="Tekst linku polityki prywatności (cookies)"
                ></v-text-field>
              </div>
            </v-col>

            <v-col cols="12" md="4">
              <div class="pa-5 d-flex flex-column justify-content-between">
                <FilePicker
                  v-model="currentObject.photo"
                  :title="'Logo'"
                  images-only
                />

                <v-text-field
                  color="primary"
                  v-model="currentObject.photo_alt"
                  label="Tekst alternatywny loga"
                ></v-text-field>
              </div>
              <div class="pa-5 d-flex flex-column justify-content-between">
                <FilePicker
                  v-model="currentObject.privace_policy"
                  :title="'Polityka prywatności'"
                />
              </div>
              <div class="pa-5 d-flex flex-column justify-content-between">
                <FilePicker
                  v-model="currentObject.favicon"
                  :title="'Favicon'"
                  images-only
                />
              </div>
              <div class="pa-5 d-flex flex-column justify-content-between">
                <FilePicker
                  v-model="currentObject.li_marker"
                  :title="'Punktor listy'"
                  images-only
                />
                <v-text-field
                  color="primary"
                  v-model="currentObject.li_marker_alt"
                  label="Tekst alternatywny punktora listy"
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
import { VColorPicker } from "vuetify/lib";
export default {
  mixins: [FormServiceMixin],
  components: {
    VColorPicker,
  },
};
</script>
