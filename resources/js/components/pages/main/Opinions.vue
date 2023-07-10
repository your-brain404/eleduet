<template>
  <section v-if="opinions && opinions.length > 0" class="opinions">
    <Picture
      :src="`/storage/img/stock/opinions-ellipse.svg`"
      :alt="'elipsa'"
      :width="1461"
      :height="1461"
      :classImg="'ellipse'"
    />
    <div class="content">
      <div class="section-content">
        <Picture
          :src="`/storage/media/${settings.li_marker}`"
          :alt="settings.li_marker_alt"
          :width="48"
          :height="75"
          :classImg="'bolt'"
        />
        <h3
          class="section-title"
          v-html="prepareTitle(opinionsDesc.title)"
        ></h3>
      </div>

      <div class="opinions-container">
        <div
          v-for="(opinion, i) in opinions"
          :key="`opinion-${i}`"
          class="opinion"
        >
          <div class="opinion-container">
            <div class="author">
              <Picture
                :src="`/storage/media/${opinion.photo}`"
                :alt="opinion.photo_alt"
                :width="60"
                :height="60"
                :classImg="'avatar'"
              />
              <div>
                <b class="name">{{ opinion.title }}</b>
                <p class="date">
                  {{ new Date(opinion.created_at).toLocaleString() }}
                </p>
              </div>
            </div>
            <div class="stars">
              <svg
                v-for="(_, j) in opinion.stars"
                :key="`opinion-${i}-star-${j}`"
                class="star star-filled"
                xmlns="http://www.w3.org/2000/svg"
                width="22.589"
                height="20.976"
                viewBox="0 0 22.589 20.976"
              >
                <path
                  id="Icon_ionic-ios-star"
                  data-name="Icon ionic-ios-star"
                  d="M23.982,10.636H16.565L14.311,3.909a.817.817,0,0,0-1.533,0l-2.254,6.726H3.057a.809.809,0,0,0-.807.807.593.593,0,0,0,.015.136.775.775,0,0,0,.338.57l6.1,4.3-2.34,6.8a.809.809,0,0,0,.277.908.78.78,0,0,0,.454.2.988.988,0,0,0,.5-.182l5.95-4.241,5.95,4.241a.945.945,0,0,0,.5.182.724.724,0,0,0,.449-.2.8.8,0,0,0,.277-.908l-2.34-6.8,6.046-4.336.146-.126a.846.846,0,0,0,.262-.54A.854.854,0,0,0,23.982,10.636Z"
                  transform="translate(-2.25 -3.375)"
                  :fill="settings.first_color"
                />
              </svg>
              <svg
                v-for="(_, j) in 5 - opinion.stars"
                :key="`opinion-${i}-star-${j}`"
                class="star star-outline"
                xmlns="http://www.w3.org/2000/svg"
                width="22.589"
                height="20.976"
                viewBox="0 0 22.589 20.976"
              >
                <path
                  id="Icon_ionic-ios-star-outline"
                  data-name="Icon ionic-ios-star-outline"
                  d="M23.982,10.636H16.565L14.311,3.909a.817.817,0,0,0-1.533,0l-2.254,6.726H3.057a.809.809,0,0,0-.807.807.593.593,0,0,0,.015.136.775.775,0,0,0,.338.57l6.1,4.3-2.34,6.8a.809.809,0,0,0,.277.908.78.78,0,0,0,.454.2.988.988,0,0,0,.5-.182l5.95-4.241,5.95,4.241a.945.945,0,0,0,.5.182.724.724,0,0,0,.449-.2.8.8,0,0,0,.277-.908l-2.34-6.8,6.046-4.336.146-.126a.846.846,0,0,0,.262-.54A.854.854,0,0,0,23.982,10.636ZM17.568,15.3a1.416,1.416,0,0,0-.514,1.6l1.518,4.422a.2.2,0,0,1-.308.232l-3.9-2.783a1.409,1.409,0,0,0-.822-.262,1.383,1.383,0,0,0-.817.262l-3.9,2.778a.2.2,0,0,1-.308-.232L10.03,16.9a1.421,1.421,0,0,0-.519-1.614L5.427,12.406a.2.2,0,0,1,.116-.368h4.977a1.41,1.41,0,0,0,1.336-.963l1.493-4.447a.2.2,0,0,1,.383,0l1.493,4.447a1.41,1.41,0,0,0,1.336.963h4.906a.2.2,0,0,1,.116.363Z"
                  transform="translate(-2.25 -3.375)"
                  fill="#e4e4e4"
                />
              </svg>
            </div>
            <div class="description" v-html="opinion.short_description"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import adminTableComponent from "@/mixins/admin-table-component.js";
import Picture from "@/components/picture/Picture.vue";
import opinionsModule from "@/store/modules/opinions/opinionsModule.js";
import opinionsDescModule from "@/store/modules/opinionsDesc/opinionsDescModule.js";

export default {
  components: {
    Picture,
  },
  mixins: [adminTableComponent],
  data() {
    return {
      table: "opinions",
      module: opinionsModule,
      settings: window.global.config.settings,
    };
  },
  methods: {
    prepareTitle: (title) =>
      title?.replaceAll("{", "<span>").replaceAll("}", "</span>"),
  },
  computed: {
    opinions() {
      return (
        this.$store.state.Opinions?.opinions ||
        window.global.cms.homePage.opinions
      );
    },
    opinionsDesc() {
      return (
        this.$store.state.OpinionsDesc?.opinionsDesc ||
        window.global.cms.homePage.opinionsDesc
      );
    },
    tableData() {
      return this.opinions;
    },
  },
  created() {
    this.registerModule("OpinionsDesc", opinionsDescModule);
    if (this.opinions?.constructor === Array && this.opinions.length === 0)
      this.fetchData();
    if (Object.values(this.opinionsDesc).length === 0)
      this.$store.dispatch("OpinionsDesc/opinionsDesc");
  },
};
</script>

<style lang="scss" scoped>
:deep(.bolt) {
  padding-right: 1.3rem;
  @media (max-width: 400px) {
    margin-bottom: 0.5rem;
  }
}
:deep(.ellipse) {
  position: absolute;
  left: 50%;
  top: 0;
}
:deep(.avatar) {
  height: 60px;
  border-radius: 100%;
  margin-right: 1rem;
}

section.opinions {
  position: relative;
  z-index: 1;
  overflow: hidden;

  .content {
    position: relative;
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
      .section-title {
        span {
          font-weight: 700;
        }
      }
    }

    .opinions-container {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      .opinion {
        width: 33.33%;
        margin-bottom: 1rem;
        background-color: white;

        @media (min-width: 992px) {
          &:nth-child(3n + 2) {
            padding-left: 0.8rem;
            padding-right: 0.8rem;
          }
        }
        @media (max-width: 992px) {
          width: 100%;
        }
        .opinion-container {
          box-shadow: 0px 10px 40px #0000000f;
          padding: 1.7rem;
          border-radius: 12px;
          height: 100%;
          .author {
            display: flex;
            align-items: center;

            .name {
              font-weight: 700;
              font-size: 1.1rem;
            }
            .date {
              margin-bottom: 0;
              font-weight: 600;
              font-size: 1rem;
            }
          }

          .stars {
            display: flex;
            padding-top: 1.2rem;
            padding-bottom: 0.5rem;
            .star {
              height: 15px;
              padding-right: 0.2rem;
            }
          }
          .description {
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
