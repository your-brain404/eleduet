<template>
  <v-content>
    <v-container>
      <v-card>
        <v-card-title class="justify-content-center">
          <h2 class="pt-4 font-weight-bold panel-title-header first-color">
            Dane kontaktowe {{ formTitle }}
          </h2>
        </v-card-title>
        <v-divider class="mt-0"></v-divider>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12">
              <div class="pa-5">
                <v-text-field
                  color="primary"
                  v-model="currentObject.email_1"
                  :rules="rules.titleRules"
                  label="E-mail formularz (na ten email będą przychodzić maile z formularzy) *"
                ></v-text-field>

                <v-text-field
                  color="primary"
                  v-model="currentObject.phone_1"
                  label="Telefon 1"
                ></v-text-field>

                <v-text-field
                  color="primary"
                  v-model="currentObject.address"
                  label="Adres"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.zip_code"
                  label="Kod Pocztowy"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.city"
                  label="Miasto"
                ></v-text-field>
              </div>
            </v-col>
          </v-row>
          <v-divider class="mb-0"></v-divider>
          <form-footer></form-footer>
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
