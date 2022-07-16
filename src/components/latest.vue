<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({}),
  created() {
    this.getLatest(this.getDate);
  },
  computed: {
    ...mapGetters("latest", ["latest"]),
    getDate() {
      let today = new Date();
      return today.toISOString().slice(0, 10);
    },
  },
  methods: {
    ...mapActions("latest", ["getLatest"]),
  },
};
</script>

<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="py-0">
          <div class="d-flex justify-space-between align-center">
            <div>
              <router-link to="/latest" class="black--text">
                <p class="text-h5 font-weight-bold text-start mb-0">
                  Latest News
                </p></router-link
              >
            </div>
            <div>
              <router-link to="/latest" class="mr-2">All</router-link>
            </div>
          </div>
          <v-divider></v-divider>
        </v-col>
        <v-col
          class="px-2 mt-2"
          cols="12"
          v-for="(info, index) in latest"
          :key="index"
        >
          <v-card class="mx-auto my-md-4 my-2">
            <!-- <v-img :src="info.urlToImage"></v-img> -->
            <v-card-title class="pb-0">
              <div class="text-caption d-flex align-center grey--text">
                <v-icon class="mr-1" small color="grey"
                  >mdi-calendar-today-outline</v-icon
                >
                {{ info.publishedAt.slice(11, 16) }}
              </div>
            </v-card-title>
            <v-card-title class="pt-0">{{ info.title }}</v-card-title>

            <v-card-text>
              <div>
                {{ info.description }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}
</style>
