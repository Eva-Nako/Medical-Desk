<!-- @format -->

<template>
  <v-app>
    <v-app-bar flat max-height="65">
      <Header />
    </v-app-bar>
    <Hero />
    <router-view></router-view>

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Hero from "./components/Hero.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Hero,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
* {
  font-family: Poppins;
  box-sizing: border-box;
  border: 0 solid;
  -webkit-font-smoothing: antialiased;
}
</style>
