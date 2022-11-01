<template>
  <v-main>
    <v-container>
      <v-card>
        <v-card-title class="justify-content-center">
          <h2 class="pt-4 font-weight-bold panel-title-header first-color">
            Błędy walidacji formularzy {{ formTitle }}
          </h2>
        </v-card-title>
        <v-divider class="mt-0"></v-divider>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12">
              <div class="pa-5">
                <v-text-field
                  color="primary"
                  v-model="currentObject.required"
                  label="To pole jest wymagane!"
                  required
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.email"
                  label="Niepoprawny e-mail."
                  required
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.password_length"
                  label="Hasło musi mieć co najmniej 8 liter!"
                  required
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.file_size"
                  label="Zdjęcie powinno ważyć mniej niż 5 MB!"
                  required
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.password_confirm"
                  label="Hasła muszą być takie same!"
                  required
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.reservation_min_time"
                  label="Minimalny czas rezerwacji to 30 minut!"
                  required
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.reservation_exist"
                  label="Taka rezerwacja już istnieje!"
                  required
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

export default {
  mixins: [FormServiceMixin],
};
</script>
