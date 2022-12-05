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
                <text-field
                  v-model="currentObject.required"
                  label="To pole jest wymagane!"
                ></text-field>
                <text-field
                  v-model="currentObject.email"
                  label="Niepoprawny e-mail."
                ></text-field>
                <text-field
                  v-model="currentObject.password_length"
                  label="Hasło musi mieć co najmniej 8 liter!"
                ></text-field>
                <text-field
                  v-model="currentObject.file_size"
                  label="Zdjęcie powinno ważyć mniej niż 5 MB!"
                ></text-field>
                <text-field
                  v-model="currentObject.password_confirm"
                  label="Hasła muszą być takie same!"
                ></text-field>
                <text-field
                  v-model="currentObject.reservation_min_time"
                  label="Minimalny czas rezerwacji to 30 minut!"
                ></text-field>
                <text-field
                  v-model="currentObject.reservation_exist"
                  label="Taka rezerwacja już istnieje!"
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
