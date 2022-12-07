<template>
  <v-card-actions class="pa-4">
    <v-btn
      :disabled="!$store.state.FormService.valid"
      color="primary"
      class="mr-2"
      @click="$store.commit('FormService/validate')"
    >
      <template #icon>
        <svg-vue icon="check"></svg-vue>
      </template>
      <span>Zatwierdź</span>
    </v-btn>

    <v-btn color="error" class="mr-2" @click="$router.go(-1)">
      <template #icon>
        <svg-vue icon="close"></svg-vue>
      </template>
      <span>Anuluj</span>
    </v-btn>
  </v-card-actions>
</template>

<script>
import { VCardActions } from "vuetify/lib";
import SvgVue from "svg-vue";
import VBtn from "@/components/elements/VBtn.vue";
export default {
  components: {
    VBtn,
    VCardActions,
    SvgVue,
  },
};
</script>