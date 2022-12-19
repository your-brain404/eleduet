<template>
  <div
    class="admin-header drawer"
    :class="{ 'drawer--active': drawer && mobile }"
  >
    <div class="drawer__header">
      <Picture
        class="drawer__header-avatar-container"
        classImg="avatar"
        :src="placeholder"
        :webp="false"
      />

      <div class="drawer__header-content">
        <div class="drawer__header-content-title">Panel Administracyjny</div>
        <router-link to="/">
          <div
            class="drawer__header-content-subtitle"
            style="overflow: unset; text-overflow: unset; white-space: unset"
          >
            {{ settings.company }}
          </div>
        </router-link>
        <div class="drawer__header-content-logout" @click="logout">
          <img
            width="18"
            height="18"
            src="/storage/img/mdi-icons/logout-white.svg"
            alt="logout"
            style="margin-right: 4px"
          />
          <span class="drawer__header-content-logout-text">WYLOGUJ</span>
        </div>
      </div>
    </div>

    <hr class="drawer__hr" />
    <ul class="drawer__list">
      <li
        v-for="item in items"
        :key="item.title"
        class="drawer__list-item"
        :class="{ active: $route.path == item.path }"
        @click="
          $route.path == item.path ? true : $router.push(item.path);
          drawer = false;
        "
      >
        <div class="drawer__list-item-icon-container">
          <img
            style="display: block"
            width="24"
            height="24"
            :src="`/storage/img/mdi-icons/${item.icon}.svg`"
            :alt="item.icon"
          />
        </div>

        <span class="drawer__list-item-text">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import avatar from "@/helpers/photo/avatar.js";
import Picture from "@/components/picture/Picture.vue";

export default {
  components: {
    Picture,
  },
  data() {
    return {
      drawer: false,
      avatar,
      innerWidth: window.innerWidth,
      items: [
        {
          title: "Strona główna",
          icon: "view-dashboard",
          path: "/admin-panel/main",
        },

        {
          title: "Usługi",
          icon: "tag-multiple",
          path: "/admin-panel/services",
        },

        {
          title: "Realizacje",
          icon: "image-multiple",
          path: "/admin-panel/realizations",
        },
        {
          title: "O nas",
          icon: "violin",
          path: "/admin-panel/about_page",
        },

        {
          title: "Kontakt",
          icon: "phone",
          path: "/admin-panel/contact",
        },

        {
          title: "Pozostałe opisy",
          icon: "table-of-contents",
          path: "/admin-panel/descriptions",
        },
        {
          title: "Skrzynka pocztowa",
          icon: "mailbox",
          path: "/admin-panel/mails",
        },

        {
          title: "Podstrony",
          icon: "folder-multiple",
          path: "/admin-panel/subpages",
        },
        {
          title: "Ustawienia",
          icon: "cog",
          path: "/admin-panel/settings",
        },
      ],
    };
  },

  created() {
    if (!this.$store.hasModule("Loading")) {
      this.$store.registerModule(
        "Loading",
        require("@/store/modules/loading/loadingModule")
      );
    }
    window.addEventListener("resize", () => {
      this.innerWidth = window.innerWidth;
    });
    window.addEventListener("click", (e) => {
      const drawerClicked = e.path.find((el) =>
        el?.classList?.contains("drawer")
      );
      const drawerListItemClicked = e.path.find((el) =>
        el?.classList?.contains("drawer__list-item")
      );
      this.drawer = drawerClicked && !drawerListItemClicked;
    });
    this.$store.dispatch("fetchSomeUsers");
  },
  computed: {
    placeholder() {
      return window.location.origin + "/storage/img/avatar/avatar.png";
    },
    settings() {
      return this.$store.getters.settings;
    },
    mobile() {
      return this.innerWidth <= 992;
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

.drawer {
  width: 57px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  background: var(--first-color);
  padding: 8px;
  color: white;
  overflow-y: auto;
  overflow-x: hidden;
  transition: width 0.2s ease;
  &::-webkit-scrollbar {
    width: 0;
  }
  &:hover {
    @media (min-width: 992px) {
      width: 256px;
    }
  }
  &--active {
    width: 256px;
  }
  &:hover &__header-content,
  &:hover &__list-item-text {
    @media (min-width: 992px) {
      display: block;
    }
  }
  &--active &__header-content,
  &--active &__list-item-text {
    display: block;
  }

  &__hr {
    border-color: rgba(255, 255, 255, 0.12);
  }
  &__header {
    display: flex;
    align-items: center;
    &-avatar-container {
      padding-right: 20px;
    }
    &-content {
      display: none;
      &-title {
        font-size: 0.8125rem;
        font-weight: 500;
        line-height: 1rem;
        margin-bottom: 2px;
      }
      &-subtitle {
        font-size: 0.8125rem;
        font-weight: 500;
        line-height: 1rem;
        color: white;
        opacity: 0.7;
      }
      &-logout {
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-top: 20px;
        padding-bottom: 4px;
        position: relative;
        width: fit-content;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 15px;
          height: 1px;
          background: white;
          transition: width 0.2s ease;
        }
        &:hover::after {
          width: 100%;
        }
        &-text {
          font-size: 0.625rem;
          font-weight: 500;
          letter-spacing: 0.892857px;
        }
      }
    }
  }
  &__list {
    padding-left: 0;
    &-item {
      padding: 8px;
      font-size: 0.8125rem;
      font-weight: 500;
      line-height: 1px;
      position: relative;
      cursor: pointer;
      margin-bottom: 4px;
      &:hover::before {
        opacity: 0.08;
      }
      &::before {
        background: unset;
        background-color: currentColor;
        content: "";
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        position: absolute;
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
        margin: 0;
        opacity: 0;
        border-radius: 4px;
      }
      &.active::before {
        opacity: 0.24;
      }
      &-text {
        display: none;
      }
      &-icon-container {
        margin-right: 32px;
      }
    }
  }
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
.px-3 {
  padding-right: 12px !important;
  padding-left: 12px !important;
}
.pt-4 {
  padding-top: 16px !important;
}
.text-center {
  text-align: center !important;
}
.font-weight-bold {
  font-weight: 700;
}
.pa-5 {
  padding: 20px !important;
}
.mb-2 {
  margin-bottom: 8px !important;
}
.mb-5 {
  margin-bottom: 20px !important;
}
.mr-2 {
  margin-right: 8px !important;
}
.mt-5 {
  margin-top: 20px !important;
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
