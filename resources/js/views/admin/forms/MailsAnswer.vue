<template>
  <v-main>
    <v-container>
      <v-card>
        <v-card-title class="justify-content-center">
          <h2 class="pt-4 font-weight-bold panel-title-header first-color">
            Odpowiedź na mail o temacie '{{ mail.subject }}'
          </h2>
        </v-card-title>
        <v-divider class="mt-0"></v-divider>
        <v-form ref="form" v-model="valid">
          <v-row class="px-5">
            <v-col cols="12" md="8">
              <v-textarea
                :rules="rules.titleRules"
                v-model="answer.answer_message"
                label="Twoja wiadomość"
              ></v-textarea>
            </v-col>
            <v-col cols="12" md="4">
              <div class="pa-5">
                <text-field
                  disabled
                  v-model="mail.name"
                  label="Imię i nazwisko"
                ></text-field>
                <text-field
                  disabled
                  v-model="mail.email"
                  label="E-mail"
                ></text-field>
                <text-field
                  disabled
                  v-model="mail.phone"
                  label="Telefon"
                ></text-field>
                <text-field
                  disabled
                  v-model="mail.subject"
                  label="Temat"
                ></text-field>
                <v-textarea
                  disabled
                  v-model="mail.message"
                  label="Wiadomość"
                ></v-textarea>
              </div>
            </v-col>
          </v-row>

          <v-divider class="mb-0"></v-divider>

          <v-card-actions class="pa-4">
            <v-btn
              :loading="loading"
              :disabled="!valid"
              color="primary"
              class="mr-2"
              @click="editMail"
            >
              <template #icon>
                <svg-vue icon="check"></svg-vue>
              </template>
              <span>Wyślij</span>
            </v-btn>

            <v-btn color="error" class="mr-2" @click="$router.go(-1)">
              <template #icon>
                <svg-vue icon="close"></svg-vue>
              </template>
              <span>Wróć</span>
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-container>
  </v-main>
</template>
<script>
import axios from "@/plugins/axios/axios";
import attachment from "../../../helpers/attachments/link.js";
import VForm from "@/components/elements/VForm.vue";
import VTextarea from "@/components/elements/VTextarea.vue";
import TextField from "@/components/elements/TextField.vue";
import VRow from "@/components/grid/VRow.vue";
import VCol from "@/components/grid/VCol.vue";
import VMain from "@/components/grid/VMain.vue";
import VContainer from "@/components/grid/VContainer.vue";
import VCard from "@/components/elements/VCard.vue";
import VCardActions from "@/components/elements/VCardActions.vue";
import VBtn from "@/components/elements/VBtn.vue";
import VDivider from "@/components/elements/VDivider.vue";
import VCardTitle from "@/components/elements/VCardTitle.vue";
import SvgVue from "svg-vue";

export default {
  components: {
    VMain,
    SvgVue,
    VTextarea,
    VContainer,
    VForm,
    VCardActions,
    VBtn,
    VDivider,
    TextField,
    VCard,
    VCardTitle,
    VRow,
    VCol,
  },
  data() {
    return {
      mail: {},
      loading: false,
      answer: {
        answer_message: "",
        answer: 1,
        id: this.$route.params.id,
        subject: "",
        email: "",
      },
      files: [],
      rules: {
        titleRules: [(v) => !!v || "To pole jest wymagane!"],
      },
      valid: true,
      attachments: [],
    };
  },
  watch: {
    mail() {
      this.answer.subject = this.mail.subject;
      this.answer.email = this.mail.email;
    },
  },
  methods: {
    getMail() {
      axios.get(`/api/mails/get_one/${this.$route.params.id}`).then((res) => {
        this.mail = res.data;
      });
    },
    getAttachment(src) {
      return attachment(src);
    },
    sendMail(mail) {
      mail.delete = 1;
      axios
        .post("/api/mails/send", mail)
        .then((res) => {
          console.log(res);
          this.loading = false;
          if (res.data.error != undefined)
            this.$store.commit("toast", res.data.error.message);
          else if (res.data.success != undefined)
            this.$store.commit("toast", res.data.success.message);

          this.$store.commit("toast", "Pomyślnie wysłano odpowiedź!");
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
          this.$store.commit(
            "toast",
            "Przepraszamy, nie udało się wysłać maila..."
          );
        });
    },

    editMail() {
      if (!this.valid) return;
      this.loading = true;
      axios
        .put("/api/mails/answer", this.answer)
        .then((res) => {
          this.sendMail(res.data);
        })
        .catch((err) => {
          console.error(err);
          this.loading = false;
          this.$store.commit(
            "toast",
            "Nie udało się zapisać wiadomości, skontaktuj się z Administratorem"
          );
        });
    },
  },
  created() {
    this.getMail();
  },
};
</script>
