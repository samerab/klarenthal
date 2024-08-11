<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <RouterView />
  <div class="sam-center bg-black w-full">
    <Footer />
  </div>
  <!-- <div class="sam-center">
    <div class="max-w-screen-xl">

    </div>
  </div> -->
</template>
