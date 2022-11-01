<template>
  <v-card-actions class="pa-4">
    <v-btn
      :disabled="!$store.state.FormService.valid"
      color="primary"
      class="mr-2"
      @click="$store.commit('FormService/validate')"
    >
      <v-icon left>mdi-check</v-icon>
      <span>Zatwierdź</span>
    </v-btn>

    <v-btn color="error" class="mr-2" @click="$router.go(-1)">
      <v-icon left>mdi-close</v-icon>
      <span>Anuluj</span>
    </v-btn>
  </v-card-actions>
</template>

<script>
import { VBtn, VCardActions, VIcon } from "vuetify/lib";
export default {
  components: {
    VBtn,
    VCardActions,
    VIcon,
  },
};
</script>