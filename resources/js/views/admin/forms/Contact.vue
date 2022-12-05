<template>
  <v-main>
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
                <text-field
                  v-model="currentObject.email_1"
                  :rules="rules.titleRules"
                  label="E-mail formularz (na ten email będą przychodzić maile z formularzy) *"
                ></text-field>

                <text-field
                  v-model="currentObject.phone_1"
                  label="Telefon 1"
                ></text-field>

                <text-field
                  v-model="currentObject.address"
                  label="Adres"
                ></text-field>
                <text-field
                  v-model="currentObject.zip_code"
                  label="Kod Pocztowy"
                ></text-field>
                <text-field
                  v-model="currentObject.city"
                  label="Miasto"
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
