export default {
  computed: {
    currentSubpage() {
      return this.$store.getters.currentSubpage;
    },
  },
  created() {
    let title = ''
    const { settings } = window.global.config
    if (this.$route.path.split("/").includes("admin-panel")) {
      title = "Panel Administracyjny";
    } else title = this.currentSubpage ? this.currentSubpage.title : "";

    document.title = `${title} - ${settings.company}`
  }
}