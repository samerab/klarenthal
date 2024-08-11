<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import SamIcon from './SamIcon.vue'

function scroll() {
  window.scrollTo(0, 0)
}
</script>

<!---- Html ---------------------------------------------------->

<template>
  <div class="bg-black text-white py-4 md:flex md:justify-between max-w-screen-2xl w-full p-5">
    <section class="sam-center flex-col mb-4">
      <div class="text-[32px] text-center m-3">
        <div class="mb-0">DJK 1. SC Klarenthal</div>
        <div>1968 e.V.</div>
      </div>

      <div class="text-center text-[20px]">
        <div>Geschwister-Scholl-Straße 8</div>
        <div>65197 Wiesbaden</div>
      </div>
    </section>
    <section class="sam-center flex-col mb-4">
      <div class="text-[32px] text-center m-3">Navigation</div>
      <div class="sam-center flex-col mb-4 text-[20px]">
        <RouterLink @click="scroll()" class="item" to="/team/Alte-herren">Alte Herren</RouterLink>
        <RouterLink @click="scroll()" class="item" to="/aktuell">Aktuell</RouterLink>
        <RouterLink @click="scroll()" class="item" to="/kontakt">Kontakt</RouterLink>
        <RouterLink @click="scroll()" class="item" to="/impressum">Impressum</RouterLink>
        <RouterLink @click="scroll()" class="item" to="/datenschutz"
          >Datenschutzerklärung</RouterLink
        >
      </div>
    </section>
    <section class="sam-center flex-col">
      <div class="text-[32px] text-center m-3">Social Media</div>
      <div class="flex justify-between w-[125px]">
        <a href="https://www.instagram.com/sc.klarenthal.jugend/" target="_blank">
          <SamIcon :size="30" color="fff">skill-icons:instagram</SamIcon>
        </a>
        <a href="https://www.facebook.com/1SCKlarenthal/?locale=de_DE" target="_blank">
          <SamIcon :size="30" color="fff">logos:facebook</SamIcon>
        </a>
        <a href="https://www.tiktok.com/@1.sc.klarenthal" target="_blank">
          <SamIcon :size="30" color="fff">logos:tiktok-icon</SamIcon>
        </a>
      </div>
    </section>
  </div>
</template>

<!---- Style ---------------------------------------------------->

<style lang="scss" scoped>
section {
  justify-content: start;
}
</style>
