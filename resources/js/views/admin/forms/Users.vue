<template>
  <v-content>
    <v-container>
      <v-card>
        <v-card-title class="justify-content-center">
          <h2 class="pt-4 font-weight-bold panel-title-header first-color">
            Użytkownik - {{ currentObject.name }}
          </h2>
        </v-card-title>
        <v-divider class="mt-0"></v-divider>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12">
              <div class="pa-5">
                <v-text-field
                  color="primary"
                  v-model="currentObject.name"
                  :rules="rules.titleRules"
                  label="Imię i nazwisko *"
                  required
                ></v-text-field>
                <v-select
                  :items="['Admin', 'Klient', 'Zawodnik']"
                  color="primary"
                  v-model="currentObject.type"
                  label="Typ użytkownika"
                ></v-select>
                <v-text-field
                  disabled
                  color="primary"
                  v-model="currentObject.email"
                  label="Adres e-mail"
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
