<script setup>
  //import TheWelcome from '../components/TheWelcome.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import Masthead from '../components/Masthead.vue'
  import Servicios from '../components/Servicios.vue'


  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <img class="img-fluid" src="/img/header-bgBLU.jpg" alt="Instituto Alpha" >

  <Servicios />

  <Footer />
</template>

<style>

</style>
