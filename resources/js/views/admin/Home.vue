<template>
  <div class="home">
    <div
      :id="block.tablename"
      :ref="block.tablename"
      v-for="(block, i) in blocks"
      :key="i"
      class="home__block"
    >
      <v-card raised>
        <Title :block="block" :parentData="parentData" />
        <v-divider />
        <component
          style="overflow: hidden"
          :reloadFlag="reloadFlag"
          @parentData="parentData = $event"
          :is="block.component"
          @blockDataEmit="setBlockTable(i, $event)"
          class="panel-component mb-5"
        ></component>
        <Table
          :headers="headers"
          :block="block"
          :i="i"
          @reloadFlag="reloadFlag = $event"
        />
      </v-card>
    </div>
  </div>
</template>

<script>
import Table from "@/components/panel-home/Table.vue";
import Title from "@/components/panel-home/Title.vue";
import panelBlocks from "@/data/admin-panel-blocks.js";
import fillBaseHeaders from "@/helpers/panel-table/fill-base-headers.js";
import getModule from "@/helpers/store/get-module.js";
import VCard from "@/components/elements/VCard.vue";
import VDivider from "@/components/elements/VDivider.vue";
import usersModule from "@/store/modules/users/usersModule.js";
import loadingModule from "@/store/modules/loading/loadingModule.js";

export default {
  data() {
    return {
      blocks: [],
      headers: [],
      parentData: {},
      reloadFlag: false,
    };
  },
  components: {
    Table,
    Title,
    VCard,
    VDivider,
  },
  methods: {
    fillBaseHeaders() {
      this.headers = fillBaseHeaders(this.blocks);
    },
    setBlocks() {
      this.blocks = panelBlocks[this.$route.path.split("/")[2]];
      this.fillBaseHeaders();
    },
    secureRoutes() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user?.type != "Admin" && user?.type != "Moderator")
        this.$router.push({
          name: "AdminLogin",
        });
    },
    setBlockTable(index, table) {
      if (table.constructor == Object && Object.entries(table).length > 0)
        table = [table];
      this.blocks[index].table = table;
    },
  },
  watch: {
    $route() {
      this.setBlocks();
    },
  },
  async created() {
    this.secureRoutes();
    this.setBlocks();
    if (!this.$store.hasModule("users")) {
      this.$store.registerModule("users", usersModule);
    }
    if (!this.$store.hasModule("loading")) {
      this.$store.registerModule("loading", loadingModule);
    }
    this.$store.dispatch("fetchAllUsers");
    if (!this.$store.hasModule("snackbarAlerts")) {
      const snackbarAlerts = await getModule("snackbarAlerts");
      this.$store.registerModule("snackbarAlerts", snackbarAlerts);
    }
  },
};
</script>

<style lang="scss" scoped>
.panel-component {
  padding: 0px 80px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
}

.home {
  padding-left: 64px;
  &__block {
    padding: 20px;
  }
}
</style>
