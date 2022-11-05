<template>
  <v-navigation-drawer
    class="admin-header admin-drawer"
    v-model="drawer"
    :color="$store.getters.settings.first_color"
    left
    :permanent="true"
    expand-on-hover
    app
    dark
  >
    <v-list dense nav class="py-0">
      <v-list-item two-line :class="'px-0'">
        <v-list-item-avatar>
          <Picture classImg="avatar" :src="placeholder" :webp="false" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Panel Administracyjny</v-list-item-title>
          <router-link to="/">
            <v-list-item-subtitle
              style="overflow: unset; text-overflow: unset; white-space: unset"
              >{{ settings.company }}</v-list-item-subtitle
            >
          </router-link>
          <v-btn
            class="mt-5"
            x-small
            color="gray"
            style="border-radius: unset !important"
            icon
            @click="logout"
          >
            <v-icon left>mdi-logout</v-icon>
            <span>Wyloguj</span>
          </v-btn>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          v-for="(item, i) in items"
          :key="item.title"
          @load="
            item.path.split('/')[1] == $route.path.split('/')[1]
              ? (selectedItem = i)
              : true
          "
          link
          active-class="nav-link"
          @click="$route.path == item.path ? true : $router.push(item.path)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import avatar from "@/helpers/photo/avatar.js";
import Picture from "@/components/picture/Picture.vue";
import {
  VNavigationDrawer,
  VList,
  VListItemGroup,
  VListItem,
  VListItemContent,
  VListItemIcon,
  VListItemTitle,
  VDivider,
  VBtn,
  VIcon,
  VListItemSubtitle,
  VListItemAvatar,
} from "vuetify/lib";

export default {
  components: {
    Picture,
    VNavigationDrawer,
    VList,
    VListItemGroup,
    VListItem,
    VListItemContent,
    VListItemIcon,
    VListItemTitle,
    VDivider,
    VBtn,
    VIcon,
    VListItemSubtitle,
    VListItemAvatar,
  },
  data() {
    return {
      avatar,
      drawer: true,

      items: [
        {
          title: "Strona główna",
          icon: "mdi-view-dashboard",
          path: "/admin-panel/main",
        },

        {
          title: "Usługi",
          icon: "mdi-tag-multiple",
          path: "/admin-panel/services",
        },

        {
          title: "Realizacje",
          icon: "mdi-image-multiple",
          path: "/admin-panel/realizations",
        },
        {
          title: "O nas",
          icon: "mdi-violin",
          path: "/admin-panel/about_page",
        },

        {
          title: "Kontakt",
          icon: "mdi-phone",
          path: "/admin-panel/contact",
        },

        {
          title: "Pozostałe opisy",
          icon: "mdi-table-of-contents",
          path: "/admin-panel/descriptions",
        },
        {
          title: "Skrzynka pocztowa",
          icon: "mdi-mailbox",
          path: "/admin-panel/mails",
        },

        {
          title: "Podstrony",
          icon: "mdi-folder-multiple",
          path: "/admin-panel/subpages",
        },
        {
          title: "Ustawienia",
          icon: "mdi-cog",
          path: "/admin-panel/settings",
        },
      ],
    };
  },
  created() {
    if (!this.$store.hasModule("loading")) {
      this.$store.registerModule(
        "loading",
        require("@/store/modules/loading/loadingModule")
      );
    }
    this.$store.dispatch("fetchSomeUsers");
  },
  computed: {
    placeholder() {
      return window.location.origin + "/storage/img/avatar/avatar.png";
    },
    settings() {
      return this.$store.getters.settings;
    },
    selectedItem() {
      let selectedItem = undefined;

      for (let item of this.items) {
        if (item.path.split("/")[2] == this.$route.path.split("/")[2]) {
          selectedItem = this.items.indexOf(item);
        }
      }

      if (this.$route.path.split("/")[2] == "price_list")
        selectedItem = this.items.indexOf(
          this.items.find(
            (item) => item.path == "/admin-panel/price_list_categories"
          )
        );

      return selectedItem;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "AdminLogin" });
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .avatar {
    object-fit: cover;
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
}

.admin-drawer {
  min-width: 66px;
}
</style>
<style>
* {
  /* font-family: "Candara" !important; */
}
.d-flex {
  display: flex !important;
}
.justify-content-center {
  justify-content: center !important;
}
.justify-content-end {
  justify-content: flex-end !important;
}
.align-items-center {
  align-items: center !important;
}
.w-100 {
  width: 100% !important;
}
.position-relative {
  position: relative !important;
}
.flex-column {
  flex-direction: column !important;
}
.justify-content-between {
  justify-content: space-between !important;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.admin-body {
  padding-left: 64px !important;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
h4,
.h4 {
  font-size: 1.35rem;
}
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
.text-danger {
  color: #e3342f !important;
}
.nav-drawer {
  background-color: blue;
}

.ql-editor strong {
  font-weight: bold;
}

.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter {
  stroke: var(--first-color) !important;
}

.ql-snow .ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button:focus,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow.ql-toolbar button:focus,
.ql-snow.ql-toolbar button:hover {
  color: var(--first-color) !important;
}

.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill {
  fill: var(--first-color) !important;
}
</style>
