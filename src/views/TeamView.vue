<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import useTeams from '../composables/teams'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'
import SamIcon from '@/components/SamIcon.vue'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { useWindowSize } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md')
const team = ref(null)
const route = useRoute()
const teams = useTeams().allTeams
const tBorder = ref(null)
const bBorder = ref(null)
const text = ref(null)
const entrancePhoto = ref(null)
let show = ref(true)

watch(
  () => route.params.name,
  (name) => {
    setTeam(name)
    animateTitle()
  }
)

// Scroll by 100vh
const scroll = () => {
  const { height } = useWindowSize()
  window.scrollBy({
    top: height.value,
    behavior: 'smooth'
  })
}

window.addEventListener('scroll', () => {
  show.value = false
})
function setTeam(name) {
  team.value = teams[name]
}

function animateTitle() {
  if (tBorder.value) {
    gsap.from(tBorder.value, { translateX: '2000%', delay: 1, duration: 0.7, ease: 'power1.inOut' })
  }
  if (bBorder.value) {
    gsap.from(bBorder.value, {
      translateX: '-2000%',
      delay: 1,
      duration: 0.7,
      ease: 'power1.inOut'
    })
  }
  if (text.value) {
    gsap.from(text.value, { scale: 0, delay: 1, duration: 0.7, ease: 'power1.inOut' })
  }
  if (entrancePhoto.value) {
    let tl = gsap.timeline()
    tl.fromTo(
      '.entrance-photo',
      { scale: 0, rotate: '-360deg' },
      { scale: 1, rotate: 0, duration: 1, ease: 'power1.inOut' }
    )
      .to('.entrance-photo', { scale: 1.2, duration: 10 })
      .to('.entrance-photo', { scale: 1, duration: 10 })
  }
}

onMounted(() => {
  const name = route.params.name
  setTeam(name)
  animateTitle()
})
</script>

<!---- Html ---------------------------------------------------->

<template>
  <div>
    <section class="entrance relative mb-6 overflow-hidden md:h-screen">
      <div ref="entrancePhoto" class="entrance-photo">
        <img :src="team?.teamPhoto" alt="" />
      </div>
      <div class="team-name flex flex-col justify-center items-center">
        <div ref="tBorder" class="border-t-4 border-white w-full mb-4"></div>
        <div ref="text" class="text-3xl text-center">{{ team?.teamName }}</div>
        <div ref="bBorder" class="border-b-4 border-white w-full mt-4"></div>
      </div>
      <div class="icon" v-if="!isMobile && show" @click="scroll()">
        <SamIcon :size="50">material-symbols:arrow-circle-down</SamIcon>
      </div>
    </section>
    <section class="team-photo sam-center">
      <div class="inner sam-max-width">
        <div class="text-center">
          <h1>{{ team?.teamName }}</h1>
          <p>{{ team?.year }}</p>
        </div>

        <div>
          <img :src="team?.teamPhoto" alt="" />
        </div>
      </div>
    </section>
    <section class="trainers sam-center">
      <div class="sam-max-width">
        <div class="text-center">
          <h1>Trainer Team</h1>
          <p>Das Trainer Team der {{ team?.teamName }}</p>
        </div>

        <div class="trainers-info md:flex md:justify-around">
          <div
            class="trainer mb-8 md:mr-6 last:mr-0"
            v-for="trainer in team?.trainers"
            :key="trainer.trainerName"
          >
            <div class="trainer-img">
              <img :src="trainer.trainerPhoto" />
            </div>
            <div class="text-center">
              <h2>{{ trainer.trainerName }}</h2>
              <h3>{{ trainer.trainerPosition }}</h3>

              <a href="mailto:rasheedabla08@gmail.com"><button class="btn">Email</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="time">
      <h1 class="zeit">Trainigszeiten</h1>
      <div class="p-2 flex items-center justify-center flex-col">
        <p>{{ team?.trainingDay1 }}</p>
        <p>{{ team?.trainingTime1 }}</p>
      </div>
      <hr />
      <div class="p-2 flex items-center justify-center flex-col">
        <p>{{ team?.trainingDay2 }}</p>
        <p>{{ team?.trainingTime2 }}</p>
      </div>
    </section>
    <section class="matches"></section>
  </div>
</template>

<!---- Style ---------------------------------------------------->

<style lang="scss" scoped>
.zeit {
  margin-bottom: 12px;
  border-bottom: 2px solid;
  padding: 10px;
}

.entrance {
  .entrance-photo::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background-color: rgb(254 0 0 / 50%);
    background-image: linear-gradient(#f30909e3, #ffffff);
    z-index: 1;
    pointer-events: none;
  }
  .team-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: #fff;
  }
}
// .trainer:not(:last-child) {
//   margin-right: 25px;
// }

.time {
  background-image: linear-gradient(#ff00002e, white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
}

.icon {
  position: absolute;
  z-index: 3;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  animation: slideOutDown 1s ease-in-out 2;
}

@keyframes slideOutDown {
  from {
    transform: translate3d(-50%, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-50%, 100%, 0);
  }
}

.slideOutDown {
  animation-name: slideOutDown;
}
</style>
