<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  src: String,
  show: { default: false },
  duration: { type: Number, default: 0.5 },
  next: { type: Boolean, default: true },
  animation: { type: String, default: 'slideX' }
})
const innerShow = ref(false)
const wrapper = ref(null)

const slideX = { from: { x: '100vw' }, to: { x: '-100vw' } }
const slideY = { from: { y: '-100vh' }, to: { y: '100vh' } }
const slideXY = { from: { x: '100vw' }, to: { y: '-100vh' } }
const slideYX = { from: { y: '-100vh' }, to: { x: '100vw' } }
// const opacity = { from: { opacity: 1 }, to: { opacity: 0 } }
const fade = { from: { opacity: 0 }, to: { opacity: 0 } }
const scale = { from: { scale: 0 }, to: { scale: 0 } }

let enter = null
let leave = null
let animationObj = {
  slideX,
  slideXY,
  slideYX,
  fade,
  slideY,
  scale
}

function setAnimation(animation) {
  enter = props.next ? animation.from : animation.to
  leave = props.next ? animation.to : animation.from
}

watchEffect(() => {
  if (props.show) {
    innerShow.value = true
    if (wrapper.value) {
      setAnimation(animationObj[props.animation])
      gsap.from(wrapper.value, { ...enter, duration: props.duration, zIndex: 1 })
    }
  } else {
    if (wrapper.value) {
      setAnimation(animationObj[props.animation])
      gsap.to(wrapper.value, {
        ...leave,
        duration: props.duration,
        zIndex: -1,
        onComplete: () => {
          innerShow.value = false
        }
      })
    }
  }
})
</script>

<!---- Html ---------------------------------------------------->

<template>
  <div
    v-if="innerShow"
    ref="wrapper"
    class="absolute top-0 w-full flex items-center justify-center"
  >
    <img class="w-full h-full object-cover" :src="src" />
  </div>
</template>

<!---- Style ---------------------------------------------------->

<style lang="scss" scoped></style>
