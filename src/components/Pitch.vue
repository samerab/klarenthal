<script lang="ts" setup>
import gsap from 'gsap'
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'

const wrapper = ref(null)

watch(
  () => wrapper.value,
  (elem) => {
    if (elem) {
      const tl = gsap.timeline()
      tl.to('button', {
        scale: 1.2,
        duration: 1,
        delay: 5,
        repeat: 2
      }).to('button', {
        scale: 1
      })
    }
  }
)
</script>

<!---- Html ---------------------------------------------------->

<template>
  <div>
    <div ref="wrapper" class="parallax-wrapper">
      <!-- <div class="parallax-background"></div> -->
      <div class="transparent-overlay">
        <img src="@/assets/pitch.jpg" alt="" />
        <h1 class="md:hidden">1. SC KLARENTHAL</h1>
        <h1 class="md:hidden" style="margin: 0 0 18px 0">1968 E.V</h1>
        <h1 class="hidden md:block mb-[18px]">1. SC KLARENTHAL 1968 E.V</h1>
        <p>Dein Verein.</p>
        <p>Dein Spiel.</p>
        <p>Deine Zukunft.</p>
        <RouterLink to="/download"><button>Anmelden</button></RouterLink>
      </div>
    </div>
  </div>
</template>

<!---- Style ---------------------------------------------------->

<style lang="scss" scoped>
.parallax-wrapper {
  position: relative;
  height: 415px;
  overflow: hidden;
}
img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.parallax-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%; /* Height greater than 100% for parallax effect */
  background-image: url('@/assets/pitch.jpeg'); /* Replace with your image URL */
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom center;
  z-index: -1; /* Behind the overlay */
}

.transparent-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background: #000000b8;
  top: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

h1 {
  font-size: 30px;
  z-index: 1;
  color: white;
}

button {
  /* background: linear-gradient(45deg, #ff6b6b, #f06595); */
  background-color: #fe0000;
  border: none;
  border-radius: 12px;
  color: white;
  padding: 10px 20px;
  text-transform: uppercase;
  /* font-weight: bold; */
  cursor: pointer;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  font-size: 17px;
  font-weight: bold;
  font-family: Roboto Slab;
  margin: 18px 0px 0px 20px;
  width: 210px;
}
</style>
