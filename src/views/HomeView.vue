<script setup lang="ts">
import { computed, onMounted } from 'vue'
import SlideShow from '../components/SlideShow.vue'
import TeamWidget from '../components/TeamWidget.vue'
import SamCarousel from '../components/SamCarousel.vue'
import useTeams from '../composables/teams'
import gsap from 'gsap'
import Pitch from '../components/Pitch.vue'
import Numbers from '@/components/Numbers.vue'

const awsUrl = 'https://klarenthal.s3.eu-north-1.amazonaws.com/homeSlides/'
const slides = ['football1.jpg', 'football2.jpg', 'football3.png', 'football4.jpg']

const src = computed(() => {
  const arr = []
  for (let slide of slides) {
    arr.push(awsUrl + slide)
  }
  return arr
})

const teams = useTeams().allTeams
const jugend = {
  teamPhoto:
    'https://www.sg-germania-wiesbaden.de/wp-content/uploads/2023/10/Kadir_Deniz_Yalcinkaya.jpg',
  teamName: 'Klarenthal Jugend'
}

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { duration: 0.5, ease: 'back' }
  })
  tl.from('.s', { y: '-100vh', rotate: 360, stagger: 0.1 })
    .from('.c', {
      y: '100vh',
      rotate: 360,
      stagger: 0.1
    })
    .from('.ball', {
      y: '-100vh',
      x: '-100vh',
      rotate: 90
    })
    .from('.letter', {
      x: '100vw',
      stagger: 0.1,
      rotate: 180
    })
    .to(
      '.ball',
      {
        y: '-100vh',
        x: '-100vh',
        display: 'none',
        rotate: 90
      },
      1.7
    )
    .to('.s-container > *:not(:first-child)', { x: '-100vh', rotate: 360, stagger: 0.1 })
    .to('.c-container > *:not(:first-child)', { x: '-100vh', rotate: 360, stagger: 0.1 })
    .from('.ball2', {
      y: '-100vh',
      x: '-100vh',
      rotate: 360
    })
    .to('.ball2', {
      rotate: 360,
      duration: 1,
      ease: 'none',
      repeat: -1
    })
})
</script>

<template>
  <main>
    <section class="club-name h-[400px]">
      <!-- <div class="playground">
        <img
          src="https://nwscdn.com/media/catalog/product/cache/all/thumbnail/800x/0dc2d03fe217f8c83829496872af24a0/i/c/iconfootball_lifestyle01_11.jpg"
          alt=""
        />
      </div> -->
      <div
        class="tex-container anton flex items-center justify-center w-full h-full bg-primary text-white text-3xl"
      >
        <div class="texts text-[67px]">
          <div class="s-container flex">
            <div class="s mb-4">S</div>
            <div class="s mb-4">p</div>
            <div class="s mb-4">o</div>
            <div class="s mb-4">r</div>
            <div class="s mb-4">t</div>
          </div>
          <div class="c-container flex">
            <div class="c mb-5">C</div>
            <div class="c mb-5">l</div>
            <div class="c mb-5">u</div>
            <div class="c mb-5">b</div>
          </div>
          <div class="klarenthal flex relative">
            <div class="flex">
              <div class="letter">K</div>
              <div class="letter">l</div>
              <div class="letter">a</div>
              <div class="letter">r</div>
              <div class="letter">e</div>
              <div class="letter">n</div>
              <div class="letter">t</div>
              <div class="letter">h</div>
              <div class="letter">a</div>
              <div class="letter">l</div>
            </div>
          </div>
        </div>

        <div class="ball w-12 ml-2 absolute">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/013/362/736/small/football-soccer-transparent-free-png.png"
            alt=""
          />
        </div>
      </div>
      <div class="ball2 absolute">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/013/362/736/small/football-soccer-transparent-free-png.png"
          alt=""
        />
      </div>
    </section>
    <section>
      <Pitch />
    </section>
    <!-- <div class="parallax-wrapper">
      <div class="parallax-background"></div>
      <div class="transparent-overlay">
        <h1>Mehr als ein Verein</h1>
      </div>
    </div> -->

    <section
      class="flex md:flex-row flex-col justify-center items-center md:justify-around my-28 flex-wrap"
    >
      <TeamWidget id="1M" :team="teams['1M']" />
      <TeamWidget id="2M" :team="teams['2M']" />
      <TeamWidget id="Alte-herren" :team="teams['Alte-herren']" />
      <TeamWidget id="jugend" :team="jugend" />
    </section>
    <section class="md:mb-[180px]">
      <SlideShow height="400px" autorun :slides="src" />
    </section>
    <section class="sam-center numbers">
      <Numbers />
    </section>
    <section>
      <SamCarousel />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.numbers {
  background: #00000026;
  padding: 100px;
}

.playground {
  border-radius: 50%;
  border: 13px solid white;
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: absolute;
  top: 322px;
  left: 60px;
}
.parallax {
  background-image: url('https://nwscdn.com/media/catalog/product/cache/all/thumbnail/800x/0dc2d03fe217f8c83829496872af24a0/i/c/iconfootball_lifestyle01_11.jpg');
  min-height: 200px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.klarenthal {
  div div {
    // background: #000000;
    padding-right: 3px;
  }
}
.ball {
  bottom: 519px;
  left: 30px;
}

.ball2 {
  top: 165px;
  left: calc(50% - 60px);
  width: 120px;
}

@media (min-width: 768px) {
  .ball2 {
    top: 232px;
    left: calc(50% - 70px);
    width: 140px;
  }
}

.parallax-wrapper {
  position: relative;
  height: 285px;
  overflow: hidden;
}

.parallax-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%; /* Height greater than 100% for parallax effect */
  background-image: url('https://nwscdn.com/media/catalog/product/cache/all/thumbnail/800x/0dc2d03fe217f8c83829496872af24a0/i/c/iconfootball_lifestyle01_11.jpg'); /* Replace with your image URL */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  z-index: -1; /* Behind the overlay */
}

.transparent-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75); /* 50% black transparency */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

h1 {
  font-size: 30px;
  z-index: 1;
}
</style>
