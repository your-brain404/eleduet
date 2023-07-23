<template>
  <div class="form-footer">
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
  </div>
</template>

<script>
import SvgVue from "@/components/elements/SvgVue.vue";
import VBtn from "@/components/elements/VBtn.vue";
export default {
  components: {
    VBtn,
    SvgVue,
  },
};
</script>

<style lang="scss">
.form-footer {
  padding: 16px;
  align-items: center;
  display: flex;
}
</style>