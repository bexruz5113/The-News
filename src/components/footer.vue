<template>
  <div>
    <v-container fluid class="mx-auto px-sm-12 px-6">
      <v-row class="py-sm-8 py-3">
        <v-col cols="12" sm="6" class="d-flex justify-start"
          >All rights reserved © <b class="primary--text">BB</b> , 2022
        </v-col>
        <v-col cols="12" sm="6" class="d-flex justify-end mt-sm-0 mt-2">
          <a href="https://www.instagram.com/baxronov_b_/">Instagram</a>
          <a class="px-3" href="https://www.facebook.com/bexruz.baxronov.14"
            >Facebook</a
          >
          <a href="https://t.me/bexruz_baxronov">Telegram</a>
        </v-col>
      </v-row></v-container
    >
    <!-- <v-container>
      <v-row>
        <v-col cols="12">
          <div class="positionRelative">
            <span class="textSt">BEXRUZ</span>
          </div>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}
.positionRelative {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 300px;
  // background: green;

  background-image: url(https://uic.group/img/pictures/text_bg.gif);
}
.textSt {
  width: 100%;
  height: 100%;
  font-size: 60px;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  background: black;
  mix-blend-mode: multiply;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
