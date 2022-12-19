<template>
  <div class="app">
    <component :is="'style'">
      :root { --first-color: {{ $store.state.Settings.settings.first_color }}; }
      ul li::before { background-image: url("{{
        `/storage/media/${$store.state.Settings.settings.li_marker}`
      }}");}
    </component>
    <header v-if="$route.path != '/elemele'">
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
    <Toast v-if="toasts.length > 0" />
    <footer v-if="$route.path != '/elemele'">
      <FooterComponent v-if="!isPathAdmin" />
    </footer>
    <Cookies v-if="!isPathAdmin && !savedCookies" />
  </div>
</template>

<script>
import "@/font/JosefinSans/stylesheet.css";
import getCookie from "@/helpers/cookies/get-cookie";

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
    Toast: () => import(/* webpackChunkName: 'toast' */ "./toast/Toast"),
    Cookies: () =>
      import(
        /* webpackPrefetch: true */ /* webpackChunkName: 'cookies' */ "@/components/cookies/Cookies"
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
  },
  computed: {
    isPathAdmin() {
      return this.$route.meta.adminRoute;
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
    toasts() {
      return this.$store.state.Toast.toasts;
    },
    savedCookies() {
      return getCookie("cookies");
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
.app {
  flex: 1 1 auto;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: static;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
*::selection {
  color: white;
  background-color: var(--first-color);
}
html {
  overflow-y: auto;
}
p {
  margin-bottom: 16px;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
ul {
  line-height: 1.5;
  li {
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
}

b {
  color: var(--first-color);
}
:root {
  --global-padding-x-desktop: 5rem;
  --global-padding-x-mobile: 1.5rem;
  --global-border-radius: 12px;
  --danger: #df1c1c;
}
.primary,
:is(div, i, button, span, label).primary {
  background-color: var(--first-color) !important;
  border-color: var(--first-color) !important;
}
a {
  color: var(--first-color);
  cursor: pointer;
}
:is(div, i, button, span, label).primary--text {
  color: var(--first-color) !important;
  caret-color: var(--first-color) !important;
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
body {
  overflow: hidden;
  margin: 0;
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

a {
  text-decoration: none;
  &:hover {
    text-decoration: none !important;
  }
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
  border: unset;
  cursor: pointer;
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
