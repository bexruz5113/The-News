<template>
  <div>
    <v-btn depressed color="primary" @click="changeName()"> {{ text }} </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
      default: () => "",
    },
    id: {
      type: Number,
      required: true,
      default: () => "",
    },
  },
  methods: {
    changeName() {
      this.$emit("exchange");
    },
  },
};
</script>

<style></style>
