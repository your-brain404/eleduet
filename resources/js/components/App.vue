<template>
  <v-app class="app">
    <component :is="'style'">
      :root { --first-color: {{ $store.state.Settings.settings.first_color }}; }
      ul li::before { background-image: url("{{
        `/storage/media/${$store.state.Settings.settings.li_marker}`
      }}");}
    </component>
    <header>
      <HeaderComponent
        :openLogin="openLogin"
        v-if="!isPathAdmin"
        class="header"
      />
      <AdminHeader v-else-if="$route.name != 'AdminLogin'" />
    </header>
    <main>
      <Banner v-if="$route.name != 'Main' && !isPathAdmin" />
      <router-view
        @metaTitle="title = $event"
        :class="{ 'admin-body': isPathAdmin }"
      ></router-view>
    </main>

    <AdminSnackbar />

    <footer>
      <FooterComponent v-if="!isPathAdmin" />
    </footer>

    <Loader v-if="loading" />
    <Cookies v-if="!isPathAdmin" />
  </v-app>
</template>

<script>
import AdminSnackbar from "./snackbar/AdminSnackbar";
import Loader from "./loader/Loader";
import "@/font/JosefinSans/stylesheet.css";

function recaptcha() {
  let badge = document.getElementsByClassName("grecaptcha-badge")[0];
  if (!badge) return;
  if (window.location.href.split("/").includes("admin-panel"))
    badge.classList.add("d-none");
  else badge.classList.remove("d-none");
}

window.addEventListener("load", function () {
  recaptcha();
});

export default {
  metaInfo() {
    return {
      title: this.title,
      titleTemplate: "%s - " + this.settings.company,
    };
  },
  components: {
    HeaderComponent: () =>
      import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'front-layout' */ "./layouts/Header"
      ),
    FooterComponent: () =>
      import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'front-layout' */ "./layouts/Footer"
      ),
    AdminHeader: () =>
      import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cms-layout' */ "./layouts/AdminHeader"
      ),
    AdminSnackbar,
    Loader,
    Cookies: () =>
      import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'front-layout' */ "@/components/cookies/Cookies"
      ),
    Banner: () =>
      import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'front-layout' */ "./layouts/Banner"
      ),
  },
  data() {
    return {
      title: "",
      openLogin: false,
    };
  },
  watch: {
    currentSubpage: {
      deep: true,
      handler() {
        if (this.currentSubpage?.id) this.title = this.currentSubpage.title;
      },
    },
    "$route.path"() {
      recaptcha();
      this.checkSubpageEntry();
      this.setCurrentSubpage();
    },
    subpages() {
      if (this.subpages.length > 0) this.checkSubpageEntry();
    },
    "$store.getters.snackbarAlerts.id"() {
      if (this.$store.getters.snackbarAlerts.id) {
        if (this.$route.query.aktywacja == "1") {
          this.$store.commit(
            "setSnackbar",
            this.$store.getters.snackbarAlerts.activated_account_success
          );
        }
      }
    },
  },
  computed: {
    isPathAdmin() {
      return this.$route.meta.adminRoute;
    },
    loading() {
      return this.$store.getters.loading;
    },
    subpages() {
      return this.$store.getters.subpages;
    },
    currentSubpage() {
      return this.$store.getters.currentSubpage;
    },
    settings() {
      return this.$store.getters.settings;
    },
  },
  methods: {
    openLoginEvent() {
      this.openLogin = true;
      setTimeout(() => (this.openLogin = false), 20);
    },
    setCurrentSubpage() {
      let currentSubpage = this.subpages.find(
        (subpage) => subpage.page === this.$route.path
      );

      if (this.$route.name === "Service") {
        currentSubpage = this.subpages.find(
          (subpage) => subpage.page === "/uslugi"
        );
      }
      this.$store.commit("currentSubpage", currentSubpage);
    },
    checkSubpageEntry() {
      for (let subpage of this.subpages) {
        if (subpage.page == "/" + this.$route.path.split("/")[1]) {
          if (!subpage.active && subpage.page != "/koszyk")
            this.$router.push("/");
        }
      }
    },
    setMetaTitle() {
      if (this.$route.path.split("/").includes("admin-panel"))
        this.title = "Panel Administracyjny";
      else this.title = this.currentSubpage ? this.currentSubpage.title : "";
    },

    setCart() {
      if (localStorage.getItem("cart") != null) {
        this.$store.commit("cart", JSON.parse(localStorage.getItem("cart")));
      }
    },
  },
  async created() {
    this.setCart();
    this.setMetaTitle();

    if (window.location.hash && window.location.hash == "#_=_") {
      window.location.href = window.location.origin;
    }
  },
};
</script>
  
<style lang="scss">
* {
  font-family: "Josefin Sans" !important;
}
*::selection {
  color: white;
  background-color: var(--first-color);
}
ul li {
  display: flex;
  font-weight: 500;
  align-items: center;
  font-size: 1.2rem;
  &::before {
    content: "....";
    color: white;
    display: block;
    background-image: url("/storage/img/layout/clef.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 9px;
    height: 21px;
    margin-right: 1rem;
  }
}
body {
  overflow-x: hidden;
}
b {
  color: var(--first-color);
}
:root {
  --global-padding-x-desktop: 5rem;
  --global-padding-x-mobile: 1.5rem;

  --global-border-radius: 12px;
}
.v-application {
  .primary,
  :is(div, i, button, span, label).primary {
    background-color: var(--first-color) !important;
    border-color: var(--first-color) !important;
  }
  a {
    color: var(--first-color);
  }
  :is(div, i, button, span, label).primary--text {
    color: var(--first-color) !important;
    caret-color: var(--first-color) !important;
  }
}
.grecaptcha-badge {
  z-index: 999;
}

.section-title {
  font-weight: 700;
  font-size: 2rem;
  color: #333333;
  margin-bottom: 0;
  @media (max-width: 300px) {
    font-size: 1.8rem;
    text-align: center;
  }
  span {
    color: var(--first-color);
  }
}
.section-content {
  .bolt {
    width: auto;
    height: 75px !important;
    @media (max-width: 400px) {
      padding-right: 0 !important;
    }
  }
}

.header {
  border-radius: unset !important;
}

footer {
  position: relative;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: lightgray;
}

::-webkit-scrollbar-thumb {
  background-color: var(--first-color);
  border-radius: 12px;
}

.app,
.ql-container {
  font-family: "Candara";
  font-weight: 300;
}

.ql-editing {
  left: unset !important;
}

.first-color {
  color: var(--first-color);
}

.first-bgc {
  background-color: var(--first-color) !important;
}

a:hover {
  text-decoration: none !important;
}

blockquote {
  border-left: 4px solid #ccc;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 16px;
}

.bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

.button {
  padding: 0.9rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 400;
  border-radius: var(--global-border-radius);
  transition: 0.2s background-color;
  text-transform: uppercase;
}
.first-button {
  background-color: var(--first-color);
  color: white;
  &:hover {
    background-color: var(--first-color);
  }
}
.second-button {
  $bgc: white;
  background-color: $bgc;
  color: black;
  &:hover {
    background-color: #f5f5f5;
  }
}
</style>
