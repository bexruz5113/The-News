<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-if="!popular" cols="12">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-col>
        <v-col v-else cols="12" class="pa-0">
          <swiper
            :slides-per-view="1"
            :navigation="true"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              v-for="(getInfoPopular, index) in popular"
              :key="index"
            >
              <div class="positionRelative">
                <img
                  :src="getInfoPopular.urlToImage"
                  class="imageStyle rounded"
                />
                <div class="positionAbsolute pa-3 rounded">
                  <div class="text-caption d-flex align-center white--text">
                    <v-icon class="mr-1" small color="white"
                      >mdi-calendar-today-outline</v-icon
                    >
                    {{ getInfoPopular.publishedAt.slice(11, 16) }}
                  </div>
                  <div
                    class="d-sm-block d-none text-md-subtitle-1 text-caption white--text"
                  >
                    {{ getInfoPopular.description }}
                  </div>
                  <div
                    class="d-sm-none d-block text-md-subtitle-1 text-caption white--text"
                  >
                    {{ getInfoPopular.description.slice(0, 100) }}...
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Navigation, Pagination, Autoplay } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import "swiper/swiper-bundle.css";

import { mapActions, mapGetters } from "vuex";
SwiperCore.use([Navigation, Pagination]);
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  created() {
    this.getPopular(this.getDate);
  },
  computed: {
    ...mapGetters("popular", ["popular"]),
    getDate() {
      let today = new Date();
      return today.toISOString().slice(0, 10);
    },
  },
  methods: {
    ...mapActions("popular", ["getPopular"]),

    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}
.imageStyle {
  width: 100%;
  max-width: 100vw;
  height: 420px;
}
@media screen and(max-width:640px) {
  .imageStyle {
    width: 100%;
    max-width: 100vw;
    height: 280px;
  }
}
.positionRelative {
  position: relative;
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
