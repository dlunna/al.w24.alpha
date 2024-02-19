<script setup>
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  //import Masthead from '../components/Masthead.vue'
  //import Linea from '../components/Linea.vue'
  import Levels from '../components/Levels.vue'
  import Portfolio from '../components/Portfolio.vue'
  import Eventos from '../components/Eventos.vue'
  import Servicios from '../components/Servicios.vue'
  import Ubicacion from '../components/Ubicacion.vue'
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

        <a id="#top"></a>

        <Header />

        <img class="img-fluid" src="/img/head.jpg" alt="Instituto Alpha" >

        

        <Levels />

        <Portfolio />    

        

        

        
        <Eventos />


        <Ubicacion />

    <Footer />






</template>
