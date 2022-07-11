<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    selectedItem: 0,
    nav: [
      {
        title: "Politics",
        icon: "mdi-home",
        to: "/",
      },
      {
        title: "Society",
        icon: "mdi-account-school",
        to: "/add-book",
      },
      {
        title: "Business",
        icon: "mdi-human-male-board",
        to: "/table",
      },

      {
        title: "Tech",
        icon: "mdi-account-group",
        to: { name: "users" },
      },
      {
        title: "Culture",
        icon: "mdi-book-clock",
        to: { name: "users" },
      },
      {
        title: "Sport",
        icon: "mdi-history",
        to: { name: "users" },
      },
      {
        title: "Tourism",
        icon: "mdi-cart-heart",
        to: { name: "users" },
      },
    ],
  }),

  methods: {
    nop() {
      // nothing
    },
    routerLink(to) {
      this.$router.push(to);
    },
  },
};
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary app>
      <div class="title py-3 pl-6">The News</div>

      <v-list dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="item in nav"
            :key="item.title"
            @click="routerLink(item.to)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark flat>
      <v-app-bar-nav-icon class="d-md-none d-block" @click="drawer = !drawer" />

      <div class="d-flex align-center">
        <router-link class="ml-4" to="/" tag="button">
          <v-toolbar-title class="mr-8 d-flex align-center" style="opacity: 0.9"
            ><v-icon large>mdi-alpha-n-circle</v-icon>ews</v-toolbar-title
          >
        </router-link>
        <li class="d-md-flex d-none mt-1">
          <ol>
            Politics
          </ol>
          <ol>
            Society
          </ol>
          <ol>
            Business
          </ol>
          <ol>
            Tech
          </ol>
          <ol>
            Culture
          </ol>
          <ol>
            Sport
          </ol>
          <ol>
            Tourism
          </ol>
        </li>
      </div>

      <v-spacer></v-spacer>
      <v-btn icon class="mr-2">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <div style="overflow: hidden">
        <div style="z-index: 1; position: relative">
          <router-view />
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<style lang="scss">
.breadcrub-sheet {
  box-shadow: 0 8px 10px -9px rgba(0, 0, 0, 0.05),
    0 3px 14px 2px rgba(0, 0, 0, 0.01), 0 5px 5px -3px rgba(0, 0, 0, 0.05);
}
::-webkit-scrollbar {
  width: 5px;
  max-height: 5px;
}
::-webkit-scrollbar-track {
  background: #eee;
}
::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(174, 173, 173);
}
</style>
