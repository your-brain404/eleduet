<template>
  <section class="call-us" v-if="Object.entries(solarSystemCallUs).length > 0">
    <Picture
      :width="700"
      :height="700"
      :src="`/storage/img/services/solar-system-ellipse.svg`"
      alt="elipsa"
      classImg="ellipse"
    />
    <div
      class="bg"
      :title="solarSystemCallUs.photo_alt"
      v-lazy:background-image="`/storage/media/${solarSystemCallUs.photo}`"
    >
      <div class="mask"></div>
      <div class="content">
        <h3 class="section-title" v-html="solarSystemCallUs.title"></h3>

        <a class="phone-link" :href="`tel:${contact.phone_1}`">
          <div class="icon-container">
            <img v-lazy="`/storage/img/home/about/phone.svg`" alt="słuchawka" />
          </div>
          <div class="phone-content">
            {{ solarSystemCallUs.button_name }}
            <span class="number">{{ contact.phone_1 }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Picture from "../../picture/Picture.vue";
import adminTableComponent from "@/mixins/admin-table-component";

export default {
  mixins: [adminTableComponent],
  components: { Picture },
  data() {
    return {
      table: "solarSystemCallUs",
      contact: window.global.config.contact,
    };
  },
  computed: {
    solarSystemCallUs() {
      return this.$store.getters.solarSystemCallUs;
    },
    tableData() {
      return [this.solarSystemCallUs];
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .ellipse {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -130%;
    height: 700px;
    @media (max-width: 992px) {
      display: none;
    }
  }
}
section.call-us {
  position: relative;
  width: 100%;
  @mixin borders-radius {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .bg {
    @include borders-radius;
    position: relative;
    .mask {
      @include borders-radius;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent
        linear-gradient(90deg, #00000073 0%, #00000000 38%) 0% 0% no-repeat
        padding-box;
    }
  }
  .content {
    padding: 3rem var(--global-padding-x-desktop);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 992px) {
      padding-left: var(--global-padding-x-mobile);
      padding-right: var(--global-padding-x-mobile);
      flex-direction: column;
    }
    .section-title {
      color: white;
      text-shadow: 0 0 10px black;
      @media (max-width: 992px) {
        text-align: center;
      }
    }

    a.phone-link {
      display: flex;

      background-color: white;
      @mixin box-shadow {
        box-shadow: 0px 10px 40px #0000000f;
      }
      @include box-shadow;
      border-radius: var(--global-border-radius);
      width: fit-content;
      padding: 1rem 2rem;
      transition: 0.2s background-color;
      @media (max-width: 400px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      @media (max-width: 992px) {
        margin-top: 3rem;
      }
      &:hover {
        background-color: var(--first-color);
        .phone-content,
        .phone-content span {
          color: white;
        }
      }
      .icon-container {
        width: 50px;
        height: 50px;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        @include box-shadow;
        img {
          height: 20px;
        }
      }

      .phone-content {
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        font-weight: 600;
        line-height: 26px;
        padding-left: 2rem;
        color: black;
        @media (max-width: 400px) {
          padding-left: 0;
          margin-top: 1rem;
          width: 100%;
        }
        span {
          font-size: 1.8rem;
          font-weight: 700;
          color: #333333;
        }
      }
    }
  }
}
</style>
