<script lang="ts" setup>
import useTeams from '../composables/teams'
import JugendWidget from '@/components/JugendWidget.vue'

const teams = useTeams().allTeams
</script>

<!---- Html ---------------------------------------------------->

<template>
  <section class="flex md:flex-row flex-col justify-center items-center md:justify-around my-5">
    <JugendWidget class="w-[190px]" id="A1" :team="teams['A1']" />
    <JugendWidget id="B1" :team="teams['B1']" />
    <JugendWidget id="Alte-herren" :team="teams['Alte-herren']" />
  </section>
</template>

<!---- Style ---------------------------------------------------->

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
