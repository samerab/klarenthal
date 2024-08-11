<script setup lang="ts">
import SamIcon from './SamIcon.vue'
import MenuItemsMobile from './MenuItemsMobile.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const showItems = ref(false)
const MenuItems = ref<HTMLElement | null>(null)
const router = useRouter()

function goHome() {
  router.push('/')
}

function toggle() {
  showItems.value = !showItems.value
}
</script>
<template>
  <div class="container sticky z-[3]">
    <div @click="goHome()" class="logo">
      <img src="@/assets/logo2.ico" alt="" />
    </div>
    <div class="menu" @click="toggle()">
      <SamIcon :size="30" color="fff">simple-line-icons:menu</SamIcon>
    </div>
  </div>
  <!-- //--- -->
  <div v-if="showItems">
    <Teleport to="body">
      <MenuItemsMobile @close="toggle()" />
    </Teleport>
  </div>
  <!--  -->
  <!-- <MenuItemsMobile v-if="showItems" @close="toggle()" /> -->
  <div ref="MenuItems"></div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #000;
}

.logo {
  width: 50px;
  img {
    width: 100%;
  }
}
</style>
