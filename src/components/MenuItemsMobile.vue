<script lang="ts" setup>
import SamIcon from './SamIcon.vue'
import { RouterLink } from 'vue-router'
import MenuItemsJugend from './MenuItemsJugend.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import MenuItemsAktive from './MenuItemsAktive.vue'

const showItemsJugend = ref(false)
const showItemsAktive = ref(false)
const emit = defineEmits(['close'])
const MenuItems = ref<HTMLElement | null>(null)

onMounted(() => {
  // window.addEventListener('wheel', preventScroll, { passive: false })
  if (MenuItems.value) {
    gsap.fromTo(
      MenuItems.value,
      { scale: 0, transformOrigin: 'right top' },
      { scale: 1, duration: 0.3, ease: 'power1.inOut' }
    )
  }
})

onBeforeUnmount(() => {
  // window.removeEventListener(
  //   'wheel',
  //   () => {
  //     console.log('removed')
  //   },
  //   false
  // )
})

function emitClose() {
  emit('close')
}

function close() {
  gsap.to(MenuItems.value, {
    scale: 0,
    transformOrigin: 'right top',
    duration: 0.3,
    ease: 'power1.inOut',
    onComplete: emitClose
  })
}
function toggleJugend() {
  showItemsJugend.value = !showItemsJugend.value
}

function toggleAktive() {
  showItemsAktive.value = !showItemsAktive.value
}

function preventScroll(event) {
  event.preventDefault()
}

// Prevent scrolling with the mouse wheel
</script>

<!---- Html ---------------------------------------------------->

<template>
  <div ref="MenuItems" class="wrapper">
    <div @click="close()" class="close">
      <SamIcon color="ffffff">material-symbols:cancel</SamIcon>
    </div>
    <div class="items">
      <div @click="toggleAktive()" class="item has-items">Aktive</div>
      <div @click="toggleJugend()" class="item has-items">Jugend</div>
      <RouterLink class="item" @click="close()" to="/team/Alte-herren">Alte Herren</RouterLink>
      <RouterLink class="item" @click="close()" to="/aktuell">Aktuell</RouterLink>
      <RouterLink class="item" @click="close()" to="/kontakt">kontakt</RouterLink>
      <RouterLink class="item" @click="close()" to="/impressum">Impressum</RouterLink>
      <RouterLink class="item" @click="close()" to="/datenschutz">Datenschutzerklärung</RouterLink>
    </div>
  </div>
  <MenuItemsJugend @close-all="close()" @close="toggleJugend()" v-if="showItemsJugend" />
  <MenuItemsAktive @close-all="close()" @close="toggleAktive()" v-if="showItemsAktive" />
</template>

<!---- Style ---------------------------------------------------->

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  background-image: linear-gradient(#858181, #f8f8f6);
  color: #000000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  user-select: none;
  z-index: 10;
  .close {
    position: absolute;
    top: 30px;
    right: 30px;
  }
  .items {
    margin: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .item {
      margin: 5px;
      background-color: #fff;
      padding: 3px;
      border-radius: 50px;
      min-width: 325px;
      text-align: center;
    }
    .has-items {
      position: relative;
    }
  }
}

.has-items::before {
  content: '';
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 8px solid #000000;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent; /* Change the color here */
}
</style>
