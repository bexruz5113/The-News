<script>
import { mapActions, mapGetters } from "vuex";
import Footer from "../components/footer.vue";
import latest from "../components/latest.vue";
import OpenApi from "../components/openApi.vue";
export default {
  components: { latest, OpenApi, Footer },
  data: () => ({
    page: 1,
    queryDefault: "world",
    paginationOfBooks: 5,
    cards: [
      {
        icon: "https://img.icons8.com/material/96/4184f3/view-quilt.png",
        title: "Dashboard",
        description: "See relevant insights about your organization",
        action: "/404",
      },
      {
        icon: "https://img.icons8.com/material-sharp/96/4184f3/user.png",
        title: "Users",
        description: "Add or manage users",
        action: "/404",
      },
      {
        icon: "https://img.icons8.com/color/96/000000/conference-foreground-selected.png",
        title: "Groups",
        description: "Create groups and mailing lists",
        action: "/404",
      },
      {
        icon: "https://img.icons8.com/color/96/000000/tree-structure.png",
        title: "Organizational units",
        description:
          "Add, remove, rename, move or search for an organizational unit",
        action: "/404",
      },
      {
        icon: "https://img.icons8.com/color/96/000000/company.png",
        title: "Buildings and resources",
        description: "Manage and monitor buildings, rooms and resources",
        action: "/404",
      },
      {
        icon: "https://img.icons8.com/color/96/000000/multiple-devices.png",
        title: "Devices",
        description: "Secure corporate data on devices",
        action: "/404",
      },
      {
        icon: "https://img.icons8.com/color/96/000000/circled-menu.png",
        title: "Apps",
        description: "Manage apps and their settings",
        action: "/404",
      },
      {
        icon: "https://img.icons8.com/color/96/000000/shield.png",
        title: "Security",
        description: "Configure security settings",
        action: "/404",
      },
      {
        icon: "https://img.icons8.com/color/96/000000/area-chart.png",
        title: "Reports",
        description: "Monitor usage across your organization",
        action: "/404",
      },
      {
        icon: "https://img.icons8.com/color/96/000000/bank-card-back-side.png",
        title: "Billing",
        description: "Manage subscriptions and billing",
        action: "/404",
      },
      {
        icon: "https://img.icons8.com/color/96/000000/settings.png",
        title: "Account settings",
        description: "Update information about your company",
        action: "/404",
      },
      {
        icon: "https://img.icons8.com/color/96/000000/lock-landscape.png",
        title: "Admin roles",
        description: "Manage administrative roles",
        action: "/404",
      },
      {
        icon: "https://img.icons8.com/color/96/000000/domain-name.png",
        title: "Domains",
        description: "Manage your domains",
        action: "/404",
      },
      {
        icon: "https://img.icons8.com/color/96/000000/drawer.png",
        title: "Data migration",
        description: "Manage migration",
        action: "/404",
      },
      {
        icon: "https://img.icons8.com/color/96/000000/help--v1.png",
        title: "Support",
        description: "Talk to our support team",
        action: "/404",
      },
    ],
  }),
  created() {
    this.getNew();
  },
  computed: {
    ...mapGetters("getNewsInfo", ["getNewsInfo"]),
    getDate() {
      let today = new Date();
      return today.toISOString().slice(0, 19);
    },
  },
  watch: {
    page() {
      this.getNew(this.page);
    },
  },
  methods: {
    ...mapActions("getNewsInfo", ["getNew"]),
  },
};
</script>

<template>
  <div>
    <v-container fluid class="px-6 px-sm-12">
      <!-- <v-row class="d-none">
        <v-col class="px-2" cols="12" sm="6" md="4" lg="2">
          <v-card style="border-left: 4px solid blue" class="pa-4 rounded">
            <div class="d-flex align-center">
              <div
                class="blue lighten-4 rounded d-flex justify-center align-center pa-1"
              >
                <v-icon color="blue">mdi-cart</v-icon>
              </div>

              <div class="ml-2 font-weight-bold">Orders</div>
            </div>
            <div class="d-flex justify-space-between mt-3">
              <div><p class="font-weight-medium mb-0">102 758</p></div>
              <v-divider vertical></v-divider>
              <div><p class="font-weight-medium mb-0">245 658</p></div>
            </div>
          </v-card></v-col
        >
        <v-col class="px-2" cols="12" sm="6" md="4" lg="2">
          <v-card style="border-left: 4px solid red" class="pa-4 rounded">
            <div class="d-flex align-center">
              <div
                class="red lighten-4 rounded d-flex justify-center align-center pa-1"
              >
                <v-icon color="red">mdi-currency-usd</v-icon>
              </div>

              <div class="ml-2 font-weight-bold">Revenue</div>
            </div>
            <div class="d-flex justify-space-between mt-3">
              <div><p class="font-weight-medium mb-0">245 658</p></div>
              <v-divider vertical></v-divider>
              <div><p class="font-weight-medium mb-0">245 658</p></div>
            </div>
          </v-card></v-col
        >
        <v-col class="px-2" cols="12" sm="6" md="4" lg="2">
          <v-card style="border-left: 4px solid green" class="pa-4 rounded">
            <div class="d-flex align-center">
              <div
                class="green lighten-4 rounded d-flex justify-center align-center pa-1"
              >
                <v-icon color="green">mdi-account-multiple </v-icon>
              </div>

              <div class="ml-2 font-weight-bold">Customers</div>
            </div>
            <div class="d-flex justify-space-between mt-3">
              <div><p class="font-weight-medium mb-0">245 658</p></div>
              <v-divider vertical></v-divider>
              <div><p class="font-weight-medium mb-0">245 658</p></div>
            </div>
          </v-card></v-col
        >
        <v-col class="px-2" cols="12" sm="6" md="4" lg="2">
          <v-card style="border-left: 4px solid orange" class="pa-4 rounded">
            <div class="d-flex align-center">
              <div
                class="orange lighten-4 rounded d-flex justify-center align-center pa-1"
              >
                <v-icon color="orange">mdi-chat</v-icon>
              </div>

              <div class="ml-2 font-weight-bold">Comments</div>
            </div>
            <div class="d-flex justify-space-between mt-3">
              <div><p class="font-weight-medium mb-0">245 658</p></div>
              <v-divider vertical></v-divider>
              <div><p class="font-weight-medium mb-0">245 658</p></div>
            </div>
          </v-card></v-col
        >
        <v-col class="px-2" cols="12" sm="6" md="4" lg="2">
          <v-card style="border-left: 4px solid brown" class="pa-4 rounded">
            <div class="d-flex align-center">
              <div
                class="brown lighten-4 rounded d-flex justify-center align-center pa-1"
              >
                <v-icon color="brown">mdi-heart</v-icon>
              </div>

              <div class="ml-2 font-weight-bold">Favourite</div>
            </div>
            <div class="d-flex justify-space-between mt-3">
              <div><p class="font-weight-medium mb-0">245 658</p></div>
              <v-divider vertical></v-divider>
              <div><p class="font-weight-medium mb-0">245 658</p></div>
            </div>
          </v-card></v-col
        >
        <v-col class="px-2" cols="12" sm="6" md="4" lg="2">
          <v-card style="border-left: 4px solid gray" class="pa-4 rounded">
            <div class="d-flex align-center">
              <div
                class="grey lighten-1 rounded d-flex justify-center align-center pa-1"
              >
                <v-icon color="gray">mdi-bookmark</v-icon>
              </div>

              <div class="ml-2 font-weight-bold">Save</div>
            </div>
            <div class="d-flex justify-space-between mt-3">
              <div><p class="font-weight-medium mb-0">245 658</p></div>
              <v-divider vertical></v-divider>
              <div><p class="font-weight-medium mb-0">245 658</p></div>
            </div>
          </v-card></v-col
        >
      </v-row> -->
      <v-row>
        <v-col cols="12" class="d-sm-block d-none">
          <OpenApi />
          <v-divider></v-divider>
        </v-col>

        <v-col cols="12" sm="9">
          <v-row>
            <v-col
              class="px-2"
              cols="12"
              sm="6"
              md="4"
              v-for="(getInfo, index) in getNewsInfo"
              :key="index"
            >
              <v-card class="windowHover mx-auto my-md-6 my-4">
                <div class="overflow">
                  <v-img
                    class="hoverImage"
                    height="250"
                    :src="getInfo.urlToImage"
                  ></v-img>
                </div>
                <v-card-title class="pb-0">
                  <div class="text-caption d-flex align-center grey--text">
                    <v-icon class="mr-1" small color="grey"
                      >mdi-calendar-today-outline</v-icon
                    >
                    {{ getInfo.publishedAt.slice(11, 16) }} /
                    {{ getInfo.publishedAt.slice(0, 10) }}
                  </div>
                </v-card-title>
                <v-card-title class="pt-1">{{ getInfo.author }}</v-card-title>

                <v-card-text>
                  <div>
                    {{ getInfo.content }}
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" class="d-flex justify-end">
              <v-pagination
                v-model="page"
                :length="paginationOfBooks"
              ></v-pagination>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="3" class="my-5 d-sm-block d-none">
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
}
.windowHover:hover .hoverImage {
  transform: scale(1.1);
}
.hoverImage {
  transition: all 0.5s ease;
}
</style>
