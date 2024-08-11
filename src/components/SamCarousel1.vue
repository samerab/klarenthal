<template>
  <div ref="container" class="carousel-container">
    <div v-if="showSlides" class="carousel" ref="carousel">
      <div
        v-for="(src, index) in sponsors"
        :key="index"
        :style="{ width: `${slideWidth}px` }"
        class="carousel-slide px-3"
      >
        <a href="https://vueuse.org/core/useIntersectionObserver/" target="_blank">
          <img :src="src" class="sponsor-image" />
        </a>
      </div>
    </div>
    <!-- <button class="absolute left-3 top-24" @click="prevSlide">❮</button>
    <button class="absolute right-3 top-24" @click="nextSlide">❯</button> -->
  </div>
</template>

<script lang="ts" setup>
import logo1 from '@/assets/sponsors/taunus.png'
import logo2 from '@/assets/sponsors/bn.png'
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import { useIntersectionObserver, useWindowSize } from '@vueuse/core'

const props = defineProps({
  slidesCount: { type: Number, default: 1 }
})

const carousel = ref<HTMLElement>(null)
const container = ref<HTMLElement>(null)
let showSlides = ref(false)
let slideWidth = null
const activeIndex = ref(0)
const sponsorsOrigin = ref([
  'https://klarenthal.s3.eu-north-1.amazonaws.com/logos/parusel.jpg',
  'https://klarenthal.s3.eu-north-1.amazonaws.com/logos/bn.png',
  'https://klarenthal.s3.eu-north-1.amazonaws.com/logos/taunus.png'
])
const sponsors = ref([
  'https://klarenthal.s3.eu-north-1.amazonaws.com/logos/parusel.jpg',
  'https://klarenthal.s3.eu-north-1.amazonaws.com/logos/bn.png',
  'https://klarenthal.s3.eu-north-1.amazonaws.com/logos/taunus.png'
])
let interval = null
const { stop } = useIntersectionObserver(container, ([{ isIntersecting }], observerElement) => {
  if (isIntersecting) {
    showSlides.value = true
    setAutorun()
  } else {
    if (showSlides.value) {
      clearInterval(interval)
      activeIndex.value = 0
      showSlides.value = false
      sponsors.value.splice(0, sponsors.value.length)
      sponsors.value.push(...sponsorsOrigin.value)
    }
  }
})

onMounted(() => {
  const { width } = useWindowSize()
  slideWidth = width.value / props.slidesCount
})

function prevSlide() {
  activeIndex.value = (activeIndex.value - 1 + sponsors.value.length) % sponsors.value.length
  if (carousel.value) {
    // const w =
    gsap.to('.carousel', {
      translateX: `-${activeIndex.value * slideWidth}px`,
      ease: 'back.in',
      duration: 0.1
    })
  }
}

function nextSlide() {
  //activeIndex.value = (activeIndex.value + 1) % sponsors.length
  activeIndex.value = activeIndex.value + 1
  const f = sponsors.value[0]
  const s = sponsors.value[1]
  sponsors.value.push(f)
  sponsors.value.push(s)
  if (carousel.value) {
    gsap.to('.carousel', {
      translateX: `-${activeIndex.value * slideWidth}px`,
      ease: 'back.in',
      duration: 0.1
    })
  }
}

function setAutorun() {
  nextSlide()
  interval = setInterval(() => {
    nextSlide()
  }, 3000)
}
</script>

<!---- Style ---------------------------------------------------->

<style lang="scss" scoped>
.carousel-container {
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 40px 0;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: max-content;
}

.carousel-slide {
  transition: opacity 0.5s ease-in-out;
}

.carousel-slide.active {
  opacity: 1;
}

.sponsor-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
