<script>
import { mapActions, mapGetters } from "vuex";
import Footer from "../components/footer.vue";
import latest from "../components/latest.vue";
export default {
  components: { latest, Footer },
  data: () => ({
    page: 1,
    paginationOfBooks: 5,
  }),
  created() {
    this.getPolitics();
  },
  computed: {
    ...mapGetters("getPoliticsInfo", ["getPoliticsInfo"]),

    getDate() {
      let today = new Date();
      return today.toISOString().slice(0, 19);
    },
  },
  watch: {
    page() {
      this.getPolitics(this.page);
      window.scrollTo({
        top: 0,
      });
    },
  },
  methods: {
    ...mapActions("getPoliticsInfo", ["getPolitics"]),
  },
};
</script>

<template>
  <div>
    <v-container fluid class="px-6 px-sm-12">
      <v-row>
        <v-col cols="12" md="9">
          <v-row>
            <v-col cols="12" class="pb-0">
              <div>
                <p class="text-h5 font-weight-bold text-start mb-0">
                  Politics News
                </p>
              </div>
              <v-divider></v-divider>
            </v-col>
            <v-col
              data-aos="slide-up"
              data-aos-delay="150"
              data-aos-duration="500"
              class="px-2"
              cols="12"
              sm="6"
              md="8"
              v-for="(getPoliticsData, index) in getPoliticsInfo.slice(0, 1)"
              :key="index"
            >
              <a :href="getPoliticsData.url"
                ><div class="windowHover mx-auto my-md-6 my-4">
                  <div class="positionRelative">
                    <v-img
                      height="320"
                      class="hoverImage rounded"
                      :src="getPoliticsData.urlToImage"
                    ></v-img>
                    <div class="positionAbsolute pa-2 rounded">
                      <div class="text-caption d-flex align-center white--text">
                        <v-icon class="mr-1" small color="white"
                          >mdi-calendar-today-outline</v-icon
                        >
                        {{ getPoliticsData.publishedAt.slice(11, 16) }} /
                        {{ getPoliticsData.publishedAt.slice(0, 10) }}
                      </div>
                      <div class="text-lg-subtitle-1 text-caption white--text">
                        <span v-html="getPoliticsData.description"></span>
                      </div>
                    </div>
                  </div></div
              ></a>
            </v-col>

            <v-col
              data-aos="slide-up"
              data-aos-delay="150"
              data-aos-duration="500"
              class="px-2"
              cols="12"
              sm="6"
              md="4"
              v-for="(getPoliticsData, index) in getPoliticsInfo.slice(1, 51)"
              :key="index"
            >
              <a :href="getPoliticsData.url">
                <div class="windowHover mx-auto my-md-6 my-4">
                  <div class="positionRelative">
                    <v-img
                      class="hoverImage rounded"
                      height="320"
                      :src="getPoliticsData.urlToImage"
                    ></v-img>

                    <div class="positionAbsolute pa-2 rounded">
                      <div class="text-caption d-flex align-center white--text">
                        <v-icon class="mr-1" small color="white"
                          >mdi-calendar-today-outline</v-icon
                        >
                        {{ getPoliticsData.publishedAt.slice(11, 16) }} /
                        {{ getPoliticsData.publishedAt.slice(0, 10) }}
                      </div>
                      <div
                        class="d-lg-block d-none text-lg-subtitle-1 text-caption white--text"
                      >
                        <span v-html="getPoliticsData.description.slice(0, 80)"
                          >...</span
                        >
                      </div>
                      <div
                        class="d-block d-lg-none text-lg-subtitle-1 text-caption white--text"
                      >
                        <span v-html="getPoliticsData.description"></span>
                      </div>
                    </div>
                  </div></div
              ></a>
            </v-col>

            <v-col cols="12" class="d-flex justify-end">
              <v-pagination
                v-model="page"
                :length="paginationOfBooks"
              ></v-pagination>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3" class="d-md-block d-none">
          <latest />
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Montserrat";
}
.overflow {
  overflow: hidden;
}
.windowHover {
  overflow: hidden;
  transition: all 0.3s ease;
}
.windowHover:hover .hoverImage {
  transform: scale(1.1);
}
.hoverImage {
  transition: all 0.5s ease;
}
.positionRelative {
  position: relative;
  overflow: hidden;
}
.positionAbsolute {
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(12, 12, 12, 0.99),
    rgba(12, 12, 12, 0.69),
    rgba(19, 19, 19, 0.0091)
  );
}
</style>
