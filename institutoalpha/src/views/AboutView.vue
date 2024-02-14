<script setup>
  //import TheWelcome from '../components/TheWelcome.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import Masthead from '../components/Masthead.vue'

  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <Masthead />

  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <Footer />
</template>

<style>

</style>
