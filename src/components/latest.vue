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
        <v-col cols="12" class="pb-0">
          <h3>Latest News</h3>
        </v-col>
        <v-col
          class="px-2"
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
            <v-card-title class="pt-0">{{ info.author }}</v-card-title>

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
