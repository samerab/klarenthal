<template>
  <div ref="wrapper " class="slideshow logos w-full overflow-hidden">
    <div class="logos-slide" v-for="(src, index) in slides" :key="index">
      <img :src="src" />
    </div>
    <div class="logos-slide" v-for="(src, index) in slides" :key="index + 100">
      <img :src="src" />
    </div>

    <!-- <button @click="prevSlide" class="prev">
      <SamIcon>material-symbols:arrow-back-ios</SamIcon>
    </button>
    <button @click="nextSlide" class="next">
      <SamIcon>material-symbols:arrow-forward-ios</SamIcon>
    </button> -->
  </div>
</template>

<script setup>
import SamIcon from './SamIcon.vue'
import slide from '@/assets/pitch.jpeg'
import slide3 from '@/assets/teamo.jpg'
import logo1 from '@/assets/sponsors/taunus.png'
import logo2 from '@/assets/sponsors/bn.png'
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  height: { type: String, default: '200px' },
  autorun: { type: Boolean, default: false },
  count: { default: 2 }
})
const wrapper = ref(null)
const slides = [
  'https://klarenthal.s3.eu-north-1.amazonaws.com/logos/bn.png',
  'https://klarenthal.s3.eu-north-1.amazonaws.com/logos/taunus.png',
  'https://klarenthal.s3.eu-north-1.amazonaws.com/logos/parusel.jpg'
]
const currentIndex = ref(0)
let next = ref(true)

watch(
  () => wrapper.value,
  (el) => {
    if (el) {
      el.style.height = props.height
    }
  }
)

onMounted(() => {
  if (props.autorun) {
    setAutorun()
  }
})

function prevSlide() {
  currentIndex.value = currentIndex.value === 0 ? slides.length - 1 : currentIndex.value - 1
  next.value = false
}

function nextSlide() {
  currentIndex.value = currentIndex.value === slides.length - 1 ? 0 : currentIndex.value + 1
  next.value = true
}

function setAutorun() {
  setInterval(() => {
    nextSlide()
  }, 3000)
}
</script>

<style scoped>
/* .slideshow {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
}

.slide img {
  width: 100%;
  display: block;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

button.prev {
  left: 10px;
}

button.next {
  right: 10px;
} */

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.logos {
  overflow: hidden;
  padding: 60px 0;
  background: white;
  white-space: nowrap;
  position: relative;
}

.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: '';
  z-index: 2;
}

.logos:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
}

.logos:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
}

.logos:hover .logos-slide {
  animation-play-state: paused;
}

.logos-slide {
  display: inline-block;
  animation: 10s slide infinite linear;
}

.logos-slide img {
  height: 50px;
  margin: 0 40px;
}
</style>
