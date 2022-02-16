<template>
  <div id="app">

    <Header />
    <Register />
    <Login />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Login,
    Register,
    Footer,
  },

 
};
</script>