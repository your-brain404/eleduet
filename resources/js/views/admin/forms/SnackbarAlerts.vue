<template>
  <v-main>
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
                <text-field
                  v-model="currentObject.error"
                  label="Błąd serwera, przepraszamy..."
                ></text-field>
                <text-field
                  v-model="currentObject.delete_comment"
                  label="Pomyślnie usunięto komentarz!"
                ></text-field>
                <text-field
                  v-model="currentObject.add_comment"
                  label="Pomyślnie dodano komentarz!"
                ></text-field>
                <text-field
                  v-model="currentObject.mail_error"
                  label="Przepraszamy, nie udało się wysłać maila..."
                ></text-field>
                <text-field
                  v-model="currentObject.attachments_error"
                  label="Przepraszamy, nie udało się wysłać załączników..."
                ></text-field>
                <text-field
                  v-model="currentObject.recaptcha_error"
                  label="System twierdzi, że jesteś robotem..."
                ></text-field>
                <text-field
                  v-model="currentObject.login_require"
                  label="Musisz się zalogować!"
                ></text-field>
                <text-field
                  v-model="currentObject.reservation_to_accept"
                  label="Twoja rezerwacja czeka na akceptację!"
                ></text-field>
                <text-field
                  v-model="currentObject.add_to_cart"
                  label="Pomyślnie dodano do koszyka!"
                ></text-field>
                <text-field
                  v-model="currentObject.shop_items_error"
                  label="Nie udało się załadować wariantów..."
                ></text-field>
                <text-field
                  v-model="currentObject.photo_error"
                  label="Przepraszamy, nie udało się dodać zdjęcia..."
                ></text-field>
                <text-field
                  v-model="currentObject.edit_account_success"
                  label="Pomyślnie edytowano użytkownika!"
                ></text-field>
                <text-field
                  v-model="currentObject.delete_from_cart_question"
                  label="Czy na pewno usunąć z koszyka przedmiot: "
                ></text-field>
                <text-field
                  v-model="currentObject.order_success"
                  label="Pomyślnie złożono zamówienie!"
                ></text-field>
                <text-field
                  v-model="currentObject.login_success"
                  label="Pomyślnie zalogowano!"
                ></text-field>
                <text-field
                  v-model="currentObject.register_success"
                  label="Pomyślnie zarejestrowano!"
                ></text-field>
                <text-field
                  v-model="currentObject.validate"
                  label="Niepoprawne dane!"
                ></text-field>
                <text-field
                  v-model="currentObject.non_activated_account"
                  label="Proszę aktywować konto!"
                ></text-field>
                <text-field
                  v-model="currentObject.blocked_user"
                  label="Przepraszamy, Twoje konto zostało zablokowane!"
                ></text-field>
                <text-field
                  v-model="currentObject.user_exist"
                  label="Taki użytkownik już istnieje!"
                ></text-field>
                <text-field
                  v-model="currentObject.mail_success"
                  label="Pomyślnie wysłano wiadomość!"
                ></text-field>
                <text-field
                  v-model="currentObject.activated_account_success"
                  label="Pomyślnie aktywowano konto!"
                ></text-field>

                <text-field
                  v-model="currentObject.user_does_not_exist"
                  label="Użytkownik nie istnieje!"
                ></text-field>
                <text-field
                  v-model="currentObject.password_reminder_success"
                  label="Pomyślnie wysłano nowe hasło!"
                ></text-field>
                <text-field
                  v-model="currentObject.password_error"
                  label="Hasło nieprawidłowe!"
                ></text-field>
                <text-field
                  v-model="currentObject.change_password_success"
                  label="Pomyślnie zmieniono hasło!"
                ></text-field>
                <text-field
                  v-model="currentObject.lucky_number"
                  label="Wylosowano szczęśliwca o identyfikatorze {id}"
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
