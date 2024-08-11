<script lang="ts" setup>
import MenuItemsDesktop from './MenuItemsDesktop.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<!---- Html ---------------------------------------------------->

<template>
  <div class="w-full p-5 flex justify-between bg-black z-[3] select-none">
    <div @click="goHome()" class="logo">
      <img src="@/assets/logo2.ico" alt="" />
    </div>
    <MenuItemsDesktop />
  </div>
  <!-- <div class="max-w-screen-xl sam-center">
  </div> -->
</template>

<!---- Style ---------------------------------------------------->

<style scoped>
.logo {
  width: 85px;
  cursor: pointer;
  img {
    width: 100%;
  }
}
</style>
