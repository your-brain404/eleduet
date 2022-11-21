<template>
  <div>
    <div class="search-container">
      <h2 class="table__title first-color">Akcje</h2>

      <div style="display: flex; align-items: center; flex-wrap: wrap">
        <text-field
          class="ma-0 pt-0 mr-5 search-input"
          v-model="search"
          label="Szukaj..."
          icon="magnify"
        />
        <router-link
          v-if="block.multiple"
          class="form-link"
          :to="`/admin-panel/${block.tablename}/${
            block.parent ? `${$route.params.parent_id}/` : ''
          }form`"
        >
          <btn
            customClass="add-button"
            :icon="block.add_button_icon ? block.add_button_icon : 'plus'"
          >
            <template #icon>
              <svg-vue
                class="custom-btn__content-icon"
                width="18"
                height="18"
                icon="plus"
              ></svg-vue>
            </template>
            {{ block.add_button_text ? block.add_button_text : "Dodaj" }}
          </btn>
        </router-link>
      </div>
    </div>
    <v-data-table
      locale="pl"
      :headers="headers[i]"
      :items="block.table"
      :search="search"
      :items-per-page="5"
      :footer-props="{ 'items-per-page-options': [5, 10, 15] }"
      class="elevation-1"
      @page-count="pageCount = $event"
    >
      <template
        v-for="checkbox in templateCheckboxes"
        #[slot(checkbox)]="{ item }"
      >
        <div class="d-flex justify-content-center">
          <checkbox
            v-model="item[checkbox]"
            @change="setCheckbox(block.tablename, item)"
          />
        </div>
      </template>
      <template #item.name="{ item }">
        {{
          block.split_name ? `${item.first_name} ${item.last_name}` : item.name
        }}
      </template>
      <template #item.entry="{ item }">
        {{ `${item.entry} - ${item.leave}` }}
      </template>
      <template #item.answer="{ item }">
        <div class="d-flex justify-content-center">
          <checkbox v-model="item.answer" disabled />
        </div>
      </template>
      <template #item.order_number="{ item }">
        <div class="d-flex justify-content-center">
          <text-field v-model="item.order_number"></text-field>
        </div>
      </template>

      <template #item.sent="{ item }">
        <div class="d-flex justify-content-center">
          <checkbox
            :disabled="item.sent"
            @change="setCheckbox(block.tablename, item)"
            v-model="item.sent"
          />
        </div>
      </template>

      <template #item.actions="{ item }">
        <div class="d-flex justify-content-end">
          <router-link
            v-if="block.list"
            class="form-link table__action-button"
            :to="`/admin-panel/${block.list}/${item.id}`"
          >
            <btn small icon="format-list-bulleted"> Lista </btn>
          </router-link>
          <router-link
            v-if="block.gallery"
            class="form-link table__action-button"
            :to="`/admin-panel/${block.tablename}/gallery/${item.id}`"
          >
            <btn small variant="warning" icon="image-multiple"> Galeria </btn>
          </router-link>
          <router-link
            v-if="!block.non_editable"
            class="form-link table__action-button"
            :to="`/admin-panel/${block.tablename}/${
              block.parent ? `${$route.params.parent_id}/` : ''
            }form/${item.id}`"
          >
            <btn small>
              <template #icon>
                <svg-vue
                  class="custom-btn__content-icon"
                  width="18"
                  height="18"
                  :icon="block.edit_button_icon || 'pencil'"
                ></svg-vue>
              </template>
              {{ block.edit_button_text ? block.edit_button_text : "Edytuj" }}
            </btn>
          </router-link>
          <btn
            v-if="block.removable"
            @click="deleteItem(block, item)"
            small
            variant="error"
            customClass="table__action-button"
          >
            <template #icon>
              <svg-vue
                class="custom-btn__content-icon"
                width="18"
                height="18"
                icon="close"
              ></svg-vue>
            </template>
            Usuń
          </btn>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
import snackbarAlerts from "@/data/snackbar-alerts";
import Btn from "@/components/elements/Btn.vue";
import TextField from "@/components/elements/TextField.vue";
import Checkbox from "@/components/elements/Checkbox.vue";
import { VDataTable } from "vuetify/lib";
import SvgVue from "svg-vue";

export default {
  components: {
    VDataTable,
    Btn,
    SvgVue,
    TextField,
    Checkbox,
  },
  props: ["headers", "block", "i"],
  data() {
    return {
      search: "",
      templateCheckboxes: ["home_page", "active", "blocked", "is_paid", "sent"],
    };
  },
  methods: {
    slot: (checkbox) => `item.${checkbox}`,
    getRecordName: (block, item) =>
      block.tablename == "users"
        ? item.name
        : block.tablename == "mails"
        ? item.subject
        : item.title,
    deleteItem(block, item) {
      let item_name = block.tablename == "users" ? "użytkownika" : "przedmiot";
      if (
        confirm(
          `Na pewno chcesz usunąć trwale ${item_name} "${this.getRecordName(
            block,
            item
          )}" z tabeli "${block.title}"? `
        )
      ) {
        this.$store.commit("loading", true);
        if (block.tablename == "users")
          this.$store.dispatch("deleteUserComments", item.id);
        axios
          .delete(`/api/${block.tablename}/delete/${item.id}`)
          .then((res) => {
            this.$emit("reloadFlag", true);
            this.$store.commit("loading", false);
            this.$store.commit("toast", snackbarAlerts.delete);
            if (block.tablename == "news")
              this.$store.dispatch("deleteComments", item.id);
            setTimeout(() => this.$emit("reloadFlag", false), 200);
          })
          .catch((err) => {
            this.$store.commit("loading", false);
            this.$store.commit("toast", snackbarAlerts.error);
            console.log(err);
          });
      }
    },
    acceptReservation(item) {
      axios
        .post("/api/reservations/accept", item)
        .then((res) => {
          if (res.data.success)
            this.$store.commit("toast", res.data.success.message);
          if (res.data.error)
            this.$store.commit("toast", res.data.error.message);
          this.$emit("reloadFlag", true);
          setTimeout(() => this.$emit("reloadFlag", false), 200);
        })
        .catch((err) => {
          console.log(err);
          this.$store.commit("toast", snackbarAlerts.error);
        });
    },
    sendShippingConfirmation(item) {
      axios
        .post("/api/shop_orders/shipping_confirmation", item)
        .then((res) => {
          if (res.data.success)
            this.$store.commit("toast", res.data.success.message);
          if (res.data.error)
            this.$store.commit("toast", res.data.error.message);
          this.$emit("reloadFlag", true);
          setTimeout(() => this.$emit("reloadFlag", false), 200);
        })
        .catch((err) => {
          console.log(err);
          this.$store.commit("toast", snackbarAlerts.error);
        });
    },
    setCheckbox(table, item) {
      if (table == "reservations" && item.active)
        if (
          !confirm(
            "Czy na pewno potwierdzić rezerwację? Zostanie wysłane potwierdzenie na maila użytkownika!"
          )
        ) {
          this.block.table.find((row) => item.id == row.id).active = false;
          return;
        }
      if (table == "shop_orders" && item.sent)
        if (
          !confirm(
            "Czy na pewno oznaczyć jako wysłane? Zostanie wysłane potwierdzenie na maila użytkownika!"
          )
        ) {
          this.block.table.find((row) => item.id == row.id).sent = false;
          return;
        } else {
          this.sendShippingConfirmation(item);
        }

      axios
        .put(`/api/${table}/edit`, item)
        .then((res) => {
          this.$emit("reloadFlag", true);
          setTimeout(() => this.$emit("reloadFlag", false), 200);
          this.$store.commit("toast", snackbarAlerts.edit);
          if (table == "reservations" && item.active)
            this.acceptReservation(item);
        })
        .catch((err) => {
          this.$store.commit("toast", snackbarAlerts.error);
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  &__title {
    margin: 0;
  }
  &__action-button:not(:last-child) {
    margin-right: 8px;
  }
}
.form-link {
  text-decoration: none !important;
}
.search-container {
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  line-height: 2rem;
  word-break: break-all;
  padding: 16px;
}

@media (max-width: 768px) {
  .table__title,
  .search-input,
  .add-button {
    width: 100%;
  }
  .search-input {
    margin-top: 0.5rem;
  }
  .add-button {
    margin-top: 1rem;
  }
}
</style>
