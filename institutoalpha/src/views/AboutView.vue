<script setup>
  //import TheWelcome from '../components/TheWelcome.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import Masthead from '../components/Masthead.vue'
  import Linea from '../components/Linea.vue'


  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <img class="img-fluid" src="/img/header-bgPIK.jpg" alt="Instituto Alpha" >

  <Linea />

  <Footer />
</template>

<style>

</style>
