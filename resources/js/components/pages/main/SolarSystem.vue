<template>
  <section v-if="homeSolarSystemDesc.id" class="solar-system">
    <Picture
      :width="'680'"
      :height="'680'"
      :alt="'elipsa'"
      :classImg="'ellipse'"
      :src="`${origin}/storage/img/home/solar-system-ellipse.svg`"
    />

    <div class="position-relative">
      <component :is="'style'">
        .solar-system-bg { height: {{ homeSolarSystemDesc.height }}px; }
        @media(min-width: 768px) { .solar-system-bg { height:
        {{ homeSolarSystemDesc.height_md }}px; } } @media(min-width: 992px) {
        .solar-system-bg { height: {{ homeSolarSystemDesc.height_lg }}px; } }
      </component>
      <Picture
        :width="homeSolarSystemDesc.photo_sizes.width"
        :height="homeSolarSystemDesc.photo_sizes.height"
        :alt="homeSolarSystemDesc.photo_alt"
        :classImg="'bg solar-system-bg'"
        :src="`${origin}/storage/media/${homeSolarSystemDesc.photo}`"
        :styleImg="{
          'background-position': homeSolarSystemDesc.photo_background_position,
        }"
        :mobile-version="576"
      />
      <div class="content">
        <h3 class="section-title">{{ homeSolarSystemDesc.title }}</h3>
        <div
          class="short-description"
          v-html="homeSolarSystemDesc.description"
        ></div>
        <router-link :to="{ path: homeSolarSystemDesc.link }">
          <button class="button second-button">
            {{ homeSolarSystemDesc.button_name }}
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import adminTableComponent from "@/mixins/admin-table-component";
import Picture from "@/components/picture/Picture";
import homeSolarSystemDescModule from "@/store/modules/homeSolarSystemDesc/homeSolarSystemDescModule";

export default {
  components: {
    Picture,
  },
  mixins: [adminTableComponent],
  data() {
    return {
      origin: window.location.origin,
      table: "homeSolarSystemDesc",
      module: homeSolarSystemDescModule,
    };
  },
  computed: {
    homeSolarSystemDesc() {
      return this.$store.state.HomeSolarSystemDesc?.homeSolarSystemDesc;
    },
    tableData() {
      return [this.homeSolarSystemDesc];
    },
  },
  created() {
    if (Object.values(this.homeSolarSystemDesc).length === 0)
      this.$store.dispatch("homeSolarSystemDesc");
  },
};
</script>

<style lang="scss" scoped>
:deep(.ellipse) {
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 142%;
  width: auto;
}
:deep(.solar-system-bg) {
  min-height: 435px;
  object-fit: cover;
  border-radius: var(--global-border-radius);
}

section.solar-system {
  position: relative;
  z-index: 1;
  margin: 8rem 0;
  padding-bottom: 3rem;

  .content {
    padding: var(--global-padding-x-desktop);
    width: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 1;
    @media (max-width: 992px) {
      padding-left: var(--global-padding-x-mobile);
      padding-right: var(--global-padding-x-mobile);
      width: 100%;
    }
    .section-title,
    .short-description,
    & {
      text-shadow: 0 0 10px black;
    }
    .section-title,
    .short-description {
      color: white;
    }
    .short-description {
      line-height: 25px;
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
}
</style>
