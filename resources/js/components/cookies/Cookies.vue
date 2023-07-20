<template>
  <div v-if="cookies" class="cookies">
    <div class="cookies__overlay"></div>
    <div class="cookies__content">
      <div class="cookies__text">
        {{ settings.cookies
        }}<a
          target="_blank"
          :href="`/storage/media/${settings.privace_policy}`"
          >{{ " " + settings.cookies_privace_button }}</a
        >
      </div>
      <button
        @click="accept"
        class="button first-button"
        v-text="settings.cookies_button"
      ></button>
    </div>
  </div>
</template>

<script>
import setCookie from "@/helpers/cookies/set-cookie.js";
import getCookie from "@/helpers/cookies/get-cookie.js";

export default {
  data() {
    return {
      cookies: true,
      settings: window.global.config.settings,
    };
  },

  methods: {
    accept() {
      setCookie("cookies", true, 365);
      document.querySelector("html").style.overflow = "";
      this.cookies = false;
    },
  },
  created() {
    this.cookies = getCookie("cookies") ? false : true;
    document.querySelector("html").style.overflow = "hidden";
  },
};
</script>

<style lang="scss">
.cookies {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: black;
    opacity: 0.7;
    top: 0;
  }

  &__content {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    background: white;
    z-index: 2;
  }
  &__text {
    padding-right: 12px;
  }
}
</style>
