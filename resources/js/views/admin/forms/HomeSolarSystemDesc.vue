<template>
  <v-content>
    <v-container>
      <v-card>
        <v-card-title class="justify-content-center">
          <h2 class="pt-4 font-weight-bold panel-title-header first-color">
            Fotowoltaika opisy {{ formTitle }}
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
                  v-model="currentObject.button_name"
                  label="Napis na przycisku"
                ></v-text-field>

                <v-text-field
                  color="primary"
                  v-model="currentObject.link"
                  label="Link przycisku"
                ></v-text-field>

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
                <v-text-field
                  color="primary"
                  type="number"
                  v-model="currentObject.height"
                  label="Wysokość (mobile) w pikselach"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  type="number"
                  v-model="currentObject.height_md"
                  label="Wysokość (tablet) w pikselach"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  type="number"
                  v-model="currentObject.height_lg"
                  label="Wysokość (desktop) w pikselach"
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
import FormService from "@/mixins/FormService.js";

export default {
  mixins: [FormService],
};
</script>
