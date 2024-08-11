<template>
  <div ref="wrapper" class="slideshow w-full overflow-hidden">
    <div class="w-full h-full" v-for="(src, index) in slides" :key="index">
      <SamSlide :next="next" :show="index === currentIndex" :src="src" />
    </div>

    <button @click="prevSlide" class="prev">
      <SamIcon>material-symbols:arrow-back-ios</SamIcon>
    </button>
    <button @click="nextSlide" class="next">
      <SamIcon>material-symbols:arrow-forward-ios</SamIcon>
    </button>
  </div>
</template>

<script setup>
import SamSlide from './SamSlide.vue'
import SamIcon from './SamIcon.vue'
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
  height: { type: String, default: '200px' },
  autorun: { type: Boolean, default: false },
  slides: { type: Array }
})

const wrapper = ref(null)
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

const currentIndex = ref(0)

function prevSlide() {
  currentIndex.value = currentIndex.value === 0 ? props.slides.length - 1 : currentIndex.value - 1
  next.value = false
}

function nextSlide() {
  currentIndex.value = currentIndex.value === props.slides.length - 1 ? 0 : currentIndex.value + 1
  next.value = true
}

function setAutorun() {
  setInterval(() => {
    nextSlide()
  }, 3000)
}
</script>

<style scoped>
.slideshow {
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
}
</style>
