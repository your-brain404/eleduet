<template>
  <section class="execution-process">
    <div class="content">
      <div class="section-content">
        <Picture
          :src="`${origin}/storage/media/${$store.state.Settings.settings.li_marker}`"
          :alt="$store.state.Settings.settings.li_marker_alt"
          :width="48"
          :height="75"
          :classImg="'bolt'"
        />
        <h3 class="section-title">{{ executionProcessDesc.title }}</h3>
      </div>
      <div class="steps">
        <div
          v-for="(step, i) in executionProcess"
          :key="`step-${i}`"
          class="step"
        >
          <div class="icon-section">
            <div class="icon-container">
              <Picture
                width="60"
                height="60"
                :alt="step.photo_alt"
                :classImg="'icon'"
                :src="`${origin}/storage/media/${step.photo}`"
              />
            </div>
            <div
              v-if="
                (i !== executionProcess.length - 1 || innerWidth <= 992) &&
                false
              "
              class="separator"
            ></div>
          </div>
          <div class="step-title">{{ step.title }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import adminTableComponent from "@/mixins/admin-table-component";
import Picture from "@/components/picture/Picture";
import ExecutionProcessDescModule from "@/store/modules/executionProcessDesc/executionProcessDescModule";

export default {
  components: {
    Picture,
  },
  mixins: [adminTableComponent],
  data() {
    return {
      origin: window.location.origin,
      innerWidth: window.innerWidth,
      table: "executionProcess",
    };
  },
  computed: {
    executionProcess() {
      return this.$store.state.ExecutionProcess?.executionProcess;
    },
    executionProcessDesc() {
      return this.$store.state.ExecutionProcessDesc?.executionProcessDesc;
    },
    tableData() {
      return this.executionProcess;
    },
  },

  created() {
    this.registerModule("ExecutionProcessDesc", ExecutionProcessDescModule);
    if (this.executionProcess.length === 0) this.fetchData();
    if (Object.values(this.executionProcessDesc).length === 0)
      this.$store.dispatch("ExecutionProcessDesc/executionProcessDesc");
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .bolt {
    padding-right: 1.3rem;
    @media (max-width: 400px) {
      margin-bottom: 0.5rem;
    }
  }
}
section.execution-process {
  .content {
    padding: var(--global-padding-x-desktop);
    @media (max-width: 992px) {
      padding-left: var(--global-padding-x-mobile);
      padding-right: var(--global-padding-x-mobile);
    }
    .section-content {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;

      @media (max-width: 400px) {
        flex-direction: column;
      }
    }
    .icon-section {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--first-color);
        border-radius: 100%;
        padding: 1.5rem;
        .icon {
          height: 60px;
        }
      }
      .separator {
        background-color: var(--first-color);
        margin: 0 1.2rem;
        height: 1px;
        width: 100%;
      }
    }
    .steps {
      display: flex;
      flex-wrap: wrap;
      .step {
        width: 25%;
        margin-bottom: 1.5rem;
        @media (max-width: 992px) {
          width: 100%;
        }
        .step-title {
          margin-top: 1rem;
          font-weight: 600;
          font-size: 1rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
