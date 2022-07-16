<script>
import { mapActions, mapGetters } from "vuex";
import Footer from "../components/footer.vue";
import latest from "../components/latest.vue";
import OpenApi from "../components/openApi.vue";
import Slide from "../components/slide.vue";
export default {
  components: { latest, Footer, OpenApi, Slide },
  data: () => ({
    page: 1,
  }),
  created() {
    this.getNew();
    this.getTech();
    this.getBusiness();
  },
  computed: {
    ...mapGetters("getNewsInfo", ["getNewsInfo"]),
    ...mapGetters("getTechInfo", ["getTechInfo"]),
    ...mapGetters("getBusinessInfo", ["getBusinessInfo"]),
    getDate() {
      let today = new Date();
      return today.toISOString().slice(0, 19);
    },
  },
  methods: {
    ...mapActions("getNewsInfo", ["getNew"]),
    ...mapActions("getTechInfo", ["getTech"]),
    ...mapActions("getBusinessInfo", ["getBusiness"]),
  },
};
</script>

<template>
  <div>
    <v-container fluid class="px-6 px-sm-12">
      <v-row>
        <v-col cols="12" class="d-sm-block d-none py-0">
          <OpenApi />
          <v-divider></v-divider>
        </v-col>

        <v-col cols="12" md="9">
          <v-row>
            <v-col cols="12" class="pb-0 px-2">
              <Slide />
            </v-col>
            <!-- Sport -->
            <v-col cols="12" class="pb-0 mt-3">
              <div class="d-flex justify-space-between align-center">
                <div>
                  <router-link to="/sport" class="black--text">
                    <p class="text-h5 font-weight-bold text-start mb-0">
                      Sport News
                    </p></router-link
                  >
                </div>
                <div>
                  <router-link to="/sport" class="mr-2">All</router-link>
                </div>
              </div>
              <v-divider></v-divider>
            </v-col>
            <v-col
              data-aos="slide-up"
              data-aos-delay="150"
              data-aos-duration="600"
              class="px-2"
              cols="12"
              sm="6"
              md="8"
              v-for="(getInfo, index) in getNewsInfo.slice(0, 1)"
              :key="index"
            >
              <a :href="getInfo.url">
                <div class="windowHover mx-auto my-md-6 my-4">
                  <div class="positionRelative">
                    <v-img
                      height="320"
                      class="hoverImage rounded"
                      :src="getInfo.urlToImage"
                    ></v-img>
                    <div class="positionAbsolute pa-2 rounded">
                      <div class="text-caption d-flex align-center white--text">
                        <v-icon class="mr-1" small color="white"
                          >mdi-calendar-today-outline</v-icon
                        >
                        {{ getInfo.publishedAt.slice(11, 16) }} /
                        {{ getInfo.publishedAt.slice(0, 10) }}
                      </div>
                      <div class="text-lg-subtitle-1 text-caption white--text">
                        <span v-html="getInfo.description"></span>
                      </div>
                    </div>
                  </div></div
              ></a>
            </v-col>
            <v-col
              data-aos="slide-up"
              data-aos-delay="150"
              data-aos-duration="600"
              class="px-2"
              cols="12"
              sm="6"
              md="4"
              v-for="(getInfo, index) in getNewsInfo.slice(1, 8)"
              :key="index"
            >
              <a :href="getInfo.url">
                <div class="windowHover mx-auto my-md-6 my-4">
                  <div class="positionRelative">
                    <v-img
                      class="hoverImage rounded"
                      height="320"
                      :src="getInfo.urlToImage"
                    ></v-img>

                    <div class="positionAbsolute pa-2 rounded">
                      <div class="text-caption d-flex align-center white--text">
                        <v-icon class="mr-1" small color="white"
                          >mdi-calendar-today-outline</v-icon
                        >
                        {{ getInfo.publishedAt.slice(11, 16) }} /
                        {{ getInfo.publishedAt.slice(0, 10) }}
                      </div>
                      <div
                        class="d-lg-block d-none text-lg-subtitle-1 text-caption white--text"
                      >
                        <span v-html="getInfo.description.slice(0, 80)"></span>
                      </div>
                      <div
                        class="d-block d-lg-none text-lg-subtitle-1 text-caption white--text"
                      >
                        <span v-html="getInfo.description"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </v-col>

            <!-- Tech -->
            <v-col cols="12" class="pb-0 mt-3">
              <div class="d-flex justify-space-between align-center">
                <div>
                  <router-link to="/tech" class="black--text">
                    <p class="text-h5 font-weight-bold text-start mb-0">
                      Tech News
                    </p></router-link
                  >
                </div>
                <div>
                  <router-link to="/tech" class="mr-2">All</router-link>
                </div>
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
              v-for="(getTechDate, index) in getTechInfo.slice(0, 1)"
              :key="index"
            >
              <a :href="getTechDate.url">
                <div class="windowHover mx-auto my-md-6 my-4">
                  <div class="positionRelative">
                    <v-img
                      height="320"
                      class="hoverImage rounded"
                      :src="getTechDate.urlToImage"
                    ></v-img>
                    <div class="positionAbsolute pa-2 rounded">
                      <div class="text-caption d-flex align-center white--text">
                        <v-icon class="mr-1" small color="white"
                          >mdi-calendar-today-outline</v-icon
                        >
                        {{ getTechDate.publishedAt.slice(11, 16) }} /
                        {{ getTechDate.publishedAt.slice(0, 10) }}
                      </div>
                      <div class="text-lg-subtitle-1 text-caption white--text">
                        <span v-html="getTechDate.description"></span>
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
              v-for="(getTechDate, index) in getTechInfo.slice(1, 8)"
              :key="index"
            >
              <a :href="getTechDate.url">
                <div class="windowHover mx-auto my-md-6 my-4">
                  <div class="positionRelative">
                    <v-img
                      class="hoverImage rounded"
                      height="320"
                      :src="getTechDate.urlToImage"
                    ></v-img>

                    <div class="positionAbsolute pa-2 rounded">
                      <div class="text-caption d-flex align-center white--text">
                        <v-icon class="mr-1" small color="white"
                          >mdi-calendar-today-outline</v-icon
                        >
                        {{ getTechDate.publishedAt.slice(11, 16) }} /
                        {{ getTechDate.publishedAt.slice(0, 10) }}
                      </div>
                      <div
                        class="d-lg-block d-none text-lg-subtitle-1 text-caption white--text"
                      >
                        <span
                          v-html="getTechDate.description.slice(0, 80)"
                        ></span>
                      </div>
                      <div
                        class="d-block d-lg-none text-lg-subtitle-1 text-caption white--text"
                      >
                        <span v-html="getTechDate.description"></span>
                      </div>
                    </div>
                  </div></div
              ></a>
            </v-col>

            <!-- Business -->
            <v-col cols="12" class="pb-0 mt-3">
              <div class="d-flex justify-space-between align-center">
                <div>
                  <router-link to="/business" class="black--text">
                    <p class="text-h5 font-weight-bold text-start mb-0">
                      Business News
                    </p></router-link
                  >
                </div>
                <div>
                  <router-link to="/business" class="mr-2">All</router-link>
                </div>
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
              v-for="(getBusinessDate, index) in getBusinessInfo.slice(0, 1)"
              :key="index"
            >
              <a :href="getBusinessDate.url">
                <div class="windowHover mx-auto my-md-6 my-4">
                  <div class="positionRelative">
                    <v-img
                      height="320"
                      class="hoverImage rounded"
                      :src="getBusinessDate.urlToImage"
                    ></v-img>
                    <div class="positionAbsolute pa-2 rounded">
                      <div class="text-caption d-flex align-center white--text">
                        <v-icon class="mr-1" small color="white"
                          >mdi-calendar-today-outline</v-icon
                        >
                        {{ getBusinessDate.publishedAt.slice(11, 16) }} /
                        {{ getBusinessDate.publishedAt.slice(0, 10) }}
                      </div>
                      <div class="text-lg-subtitle-1 text-caption white--text">
                        <span v-html="getBusinessDate.description"></span>
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
              v-for="(getBusinessDate, index) in getBusinessInfo.slice(1, 8)"
              :key="index"
            >
              <a :href="getBusinessDate.url"
                ><div class="windowHover mx-auto my-md-6 my-4">
                  <div class="positionRelative">
                    <v-img
                      class="hoverImage rounded"
                      height="320"
                      :src="getBusinessDate.urlToImage"
                    ></v-img>

                    <div class="positionAbsolute pa-2 rounded">
                      <div class="text-caption d-flex align-center white--text">
                        <v-icon class="mr-1" small color="white"
                          >mdi-calendar-today-outline</v-icon
                        >
                        {{ getBusinessDate.publishedAt.slice(11, 16) }} /
                        {{ getBusinessDate.publishedAt.slice(0, 10) }}
                      </div>
                      <div
                        class="d-lg-block d-none text-lg-subtitle-1 text-caption white--text"
                      >
                        <span
                          v-html="getBusinessDate.description.slice(0, 80)"
                        ></span>
                      </div>
                      <div
                        class="d-block d-lg-none text-lg-subtitle-1 text-caption white--text"
                      >
                        <span v-html="getBusinessDate.description"></span>
                      </div>
                    </div>
                  </div></div
              ></a>
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
