<script>
import openApi from "./components/openApi.vue";
export default {
  components: { openApi },
  name: "App",

  data: () => ({
    drawer: false,
    selectedItem: 0,
    topPoint: 0,
    items: [
      { flag: "russia", state: "Russian" },
      { flag: "united-states", state: "English" },
    ],
    nav: [
      {
        title: "Politics",
        icon: "mdi-police-badge",
        to: "/politics",
      },
      {
        title: "Society",
        icon: "mdi-account-group",
        to: "/society",
      },
      {
        title: "Business",
        icon: "mdi-handshake",
        to: "/business",
      },

      {
        title: "Tech",
        icon: "mdi-cog",
        to: "/tech",
      },
      {
        title: "Culture",
        icon: "mdi-alpha-c-circle",
        to: "/culture",
      },
      {
        title: "Sport",
        icon: "mdi-weight-lifter",
        to: "/sport",
      },
    ],
  }),
  computed: {
    comin() {
      return this.topPoint > 250 ? true : false;
    },
    leavin() {
      return this.topPoint > 250 ? false : true;
    },
  },
  methods: {
    nop() {
      // nothing
    },
    routerLink(to) {
      this.$router.push(to);
    },
    scrollPos() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.topPoint = window.scrollY;
    });
  },
};
</script>

<template>
  <div>
    <div :class="{ rocketUp: comin, rocketDown: leavin }" @click="scrollPos()">
      <svg
        id="Capa_1"
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 490.52 256.01"
      >
        <path
          class="cls-1"
          d="M487.41,355.05,252.74,120.38a10.67,10.67,0,0,0-15.08,0L3,355.05a10.67,10.67,0,0,0,15.09,15.08L245.19,143,472.31,370.15a10.66,10.66,0,0,0,15.08-15.08Z"
          transform="translate(0 -117.26)"
        />
        <path
          d="M479.86,373.27a10.68,10.68,0,0,1-7.55-3.12L245.19,143,18.08,370.15A10.67,10.67,0,0,1,3,355.07L237.66,120.4a10.67,10.67,0,0,1,15.08,0L487.41,355.07a10.67,10.67,0,0,1-7.55,18.2Z"
          transform="translate(0 -117.26)"
        />
      </svg>
    </div>
    <v-app>
      <v-navigation-drawer width="276" v-model="drawer" temporary app>
        <div class="title py-3 pl-6"><h3>The News</h3></div>

        <openApi />
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
                <v-list-item-title
                  class="pl-2 text-start"
                  v-text="item.title"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="primary" dark flat>
        <v-app-bar-nav-icon
          class="d-md-none d-block"
          @click="drawer = !drawer"
        />

        <div class="d-flex align-center">
          <router-link class="ml-sm-4 ml-2" to="/" tag="button">
            <v-toolbar-title
              class="mr-sm-8 mr-5 d-flex align-center"
              style="opacity: 0.9"
              ><v-icon large>mdi-alpha-n-circle</v-icon>ews</v-toolbar-title
            >
          </router-link>
          <li class="d-md-flex d-none mt-1">
            <ol>
              <router-link class="white--text" to="/politics"
                >Politics</router-link
              >
            </ol>
            <ol>
              <router-link class="white--text" to="/society">
                Society</router-link
              >
            </ol>
            <ol>
              <router-link class="white--text" to="/business">
                Business
              </router-link>
            </ol>
            <ol>
              <router-link class="white--text" to="/tech">Tech</router-link>
            </ol>
            <ol>
              <router-link class="white--text" to="/culture">
                Culture</router-link
              >
            </ol>
            <ol>
              <router-link class="white--text" to="/sport"> Sport</router-link>
            </ol>
          </li>
        </div>

        <v-spacer></v-spacer>
        <v-btn icon class="mr-2">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-menu rounded offset-y>
          <template v-slot:activator="{ attrs, on }">
            <v-btn v-bind="attrs" v-on="on" icon class="mr-2">
              <v-icon>mdi-web</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              class="d-flex align-center"
              v-for="(item, index) in items"
              :key="index"
              link
            >
              <v-img
                :src="require(`@/assets/${item.flag}.png`)"
                width="20"
                class="mr-1"
              ></v-img>
              <v-list-item-title
                v-text="item.state"
                class="text-caption"
              ></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- <v-btn icon class="mr-2">
          <v-icon>mdi-web</v-icon>
        </v-btn> -->
        <!-- <v-btn icon class="mr-2">
          <v-icon>mdi-account</v-icon>
        </v-btn> -->
      </v-app-bar>

      <v-main>
        <div style="overflow: hidden">
          <div style="z-index: 1; position: relative">
            <router-view />
          </div>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Montserrat";
}
html {
  scroll-behavior: smooth;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.rocketUp {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #1976d2;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  animation: comingUp 0.5s linear;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 1px 0px 10px 0px #2976d2;
  }
  svg {
    width: 100%;
    max-width: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    path {
      fill: white;
    }
  }
}
.rocketDown {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #1976d2;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  animation: comingDown 0.5s linear forwards;
  &:hover {
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 1px 0px 20px 0px #2976d2;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    path {
      fill: white;
    }
  }
}
@keyframes comingUp {
  from {
    bottom: -50px;
    opacity: 0;
  }
  to {
    visibility: visible;
    bottom: 20px;
    opacity: 1;
  }
}
@keyframes comingDown {
  from {
    bottom: 20px;
    opacity: 1;
  }
  to {
    visibility: hidden;
    bottom: -50px;
    opacity: 0;
  }
}
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
