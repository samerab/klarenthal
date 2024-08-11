<script lang="ts" setup>
// import SamIcon from './SamIcon.vue';

const props = defineProps({
  team: Object,
  id: String
})
</script>

<!---- Html ---------------------------------------------------->

<template>
  <div>
    <section class="entrance relative mb-10 overflow-hidden w-[190px] h-[190px] rounded-[50%]">
      <div ref="entrancePhoto" class="entrance-photo">
        <img :src="team?.teamPhoto" alt="" />
      </div>
      <div class="team-name flex flex-col justify-center items-center">
        <!-- <div ref="tBorder" class="border-t-4 border-white w-full mb-4"></div> -->
        <div ref="text" class="text-xl text-center font-bold">{{ team?.teamName }}</div>
        <!-- <div ref="bBorder" class="border-b-4 border-white w-full mt-4"></div> -->

        <RouterLink :to="'/team/' + props.id"><button class="btn">weiter</button></RouterLink>
      </div>
      <!-- <div class="icon" v-if="!isMobile && show" @click="scroll()">
        <SamIcon :size="50">material-symbols:arrow-circle-down</SamIcon>
      </div> -->
    </section>
  </div>
</template>

<!---- Style ---------------------------------------------------->

<style lang="scss" scoped>
.entrance {
  .entrance-photo::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background-color: rgb(254 0 0 / 50%);
    background-image: linear-gradient(rgb(0 0 0 / 89%), #ffffff);
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

.btn {
  margin: 0px;
  margin-top: 20px;
  width: 100px;
}
</style>
