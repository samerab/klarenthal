<template>
  <div ref="container" class="carousel-container">
    <div v-if="showSlides" class="carousel" ref="carousel">
      <div
        v-for="(src, index) in sponsors"
        :key="index"
        :style="{ width: `${slideWidth}px` }"
        class="carousel-slide px-3 sam-center"
      >
        <div class="xl:w-[400px]">
          <a href="https://vueuse.org/core/useIntersectionObserver/" target="_blank">
            <img :src="awsUrl + src" class="sponsor-image w-full" />
          </a>
        </div>
      </div>
    </div>
    <!-- <button class="absolute left-3 top-24" @click="prevSlide">❮</button>
      <button class="absolute right-3 top-24" @click="nextSlide">❯</button> -->
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { onMounted, ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

const awsUrl = 'https://klarenthal.s3.eu-north-1.amazonaws.com/logos/'

const props = defineProps({
  slidesCount: { type: Number, default: 1 }
})

const carousel = ref<HTMLElement>(null)
const container = ref<HTMLElement>(null)
let showSlides = ref(false)
let slideWidth = null
const activeIndex = ref(0)
const sponsors = ref(['parusel.jpg', 'bn.png', 'taunus.png', 'naspa.jpg'])

onMounted(() => {
  const { width } = useWindowSize()
  slideWidth = width.value / props.slidesCount
  showSlides.value = true
  setAutorun()
})

// function prevSlide() {
//   //   activeIndex.value = (activeIndex.value - 1 + sponsors.value.length) % sponsors.value.length
//   activeIndex.value = (activeIndex.value - 1) % sponsors.value.length
//   if (carousel.value) {
//     // const w =
//     gsap.to('.carousel', {
//       translateX: `-${activeIndex.value * slideWidth}px`,
//       ease: 'back.in',
//       duration: 0.1
//     })
//   }
// }

function nextSlide() {
  activeIndex.value = (activeIndex.value + 1) % sponsors.value.length
  //   activeIndex.value = activeIndex.value + 1
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
  setInterval(() => {
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
  align-items: center;
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
  // width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
