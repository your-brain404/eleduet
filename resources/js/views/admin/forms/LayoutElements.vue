<template>
  <v-main>
    <v-container>
      <v-card>
        <v-card-title class="justify-content-center">
          <h2 class="pt-4 font-weight-bold panel-title-header first-color">
            Elementy Layoutu {{ formTitle }}
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
              </div>
            </v-col>

            <v-col cols="12" md="4">
              <div class="pa-5 d-flex flex-column justify-content-between">
                <FilePicker
                  title="Tocząca się bila na stronie głównej"
                  v-model="currentObject.eight_ball"
                  images-only
                />

                <text-field
                  v-model="currentObject.eight_ball_alt"
                  label="Tekst alternatywny zdjęcia"
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
