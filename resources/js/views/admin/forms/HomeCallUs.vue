<template>
  <v-main>
    <v-container>
      <v-card>
        <v-card-title class="justify-content-center">
          <h2 class="pt-4 font-weight-bold panel-title-header first-color">
            Masz pytania? Zadzwoń! {{ formTitle }}
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
                ></text-field>
                <text-field
                  v-model="currentObject.button_name"
                  label="Napis na przycisku"
                ></text-field>
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
                  type="number"
                  v-model="currentObject.min_height"
                  label="Wysokość (mobile) w pikselach"
                ></text-field>
                <text-field
                  type="number"
                  v-model="currentObject.min_height_md"
                  label="Wysokość (tablet) w pikselach"
                ></text-field>
                <text-field
                  type="number"
                  v-model="currentObject.min_height_lg"
                  label="Wysokość (desktop) w pikselach"
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
