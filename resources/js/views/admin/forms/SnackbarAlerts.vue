<template>
  <v-content>
    <v-container>
      <v-card>
        <v-card-title class="justify-content-center">
          <h2 class="pt-4 font-weight-bold panel-title-header first-color">
            Komunikaty {{ formTitle }}
          </h2>
        </v-card-title>
        <v-divider class="mt-0"></v-divider>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12">
              <div class="pa-5">
                <v-text-field
                  color="primary"
                  v-model="currentObject.error"
                  label="Błąd serwera, przepraszamy..."
                  required
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.delete_comment"
                  label="Pomyślnie usunięto komentarz!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.add_comment"
                  label="Pomyślnie dodano komentarz!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.mail_error"
                  label="Przepraszamy, nie udało się wysłać maila..."
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.attachments_error"
                  label="Przepraszamy, nie udało się wysłać załączników..."
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.recaptcha_error"
                  label="System twierdzi, że jesteś robotem..."
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.login_require"
                  label="Musisz się zalogować!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.reservation_to_accept"
                  label="Twoja rezerwacja czeka na akceptację!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.add_to_cart"
                  label="Pomyślnie dodano do koszyka!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.shop_items_error"
                  label="Nie udało się załadować wariantów..."
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.photo_error"
                  label="Przepraszamy, nie udało się dodać zdjęcia..."
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.edit_account_success"
                  label="Pomyślnie edytowano użytkownika!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.delete_from_cart_question"
                  label="Czy na pewno usunąć z koszyka przedmiot: "
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.order_success"
                  label="Pomyślnie złożono zamówienie!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.login_success"
                  label="Pomyślnie zalogowano!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.register_success"
                  label="Pomyślnie zarejestrowano!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.validate"
                  label="Niepoprawne dane!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.non_activated_account"
                  label="Proszę aktywować konto!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.blocked_user"
                  label="Przepraszamy, Twoje konto zostało zablokowane!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.user_exist"
                  label="Taki użytkownik już istnieje!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.mail_success"
                  label="Pomyślnie wysłano wiadomość!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.activated_account_success"
                  label="Pomyślnie aktywowano konto!"
                ></v-text-field>

                <v-text-field
                  color="primary"
                  v-model="currentObject.user_does_not_exist"
                  label="Użytkownik nie istnieje!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.password_reminder_success"
                  label="Pomyślnie wysłano nowe hasło!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.password_error"
                  label="Hasło nieprawidłowe!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.change_password_success"
                  label="Pomyślnie zmieniono hasło!"
                ></v-text-field>
                <v-text-field
                  color="primary"
                  v-model="currentObject.lucky_number"
                  label="Wylosowano szczęśliwca o identyfikatorze {id}"
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
