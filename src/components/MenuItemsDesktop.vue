<script lang="ts" setup>
import { ref } from 'vue'
import useTeams from '../composables/teams'
import SubMenu from './SubMenu.vue'
import { onClickOutside } from '@vueuse/core'

const showActive = ref(false)
const showJugende = ref(false)
const jugendeList = useTeams().jugendeList
const aktiveList = useTeams().aktiveList
const aktiveTarget = ref(null)
const jugendeTarget = ref(null)

onClickOutside(aktiveTarget, (_) => (showActive.value = false))
onClickOutside(jugendeTarget, (_) => (showJugende.value = false))

function toggleAktiveSubMenu() {
  showActive.value = !showActive.value
  showJugende.value = false
}

function toggleJugendeSubMenu() {
  showJugende.value = !showJugende.value
  showActive.value = false
}
</script>

<!---- Html ---------------------------------------------------->

<template>
  <div
    class="wrapper w-[65%] lg:w-[60%] xl:w-[45%] 2xl:w-[30%] flex items-center justify-around text-white"
  >
    <div ref="aktiveTarget" @click="toggleAktiveSubMenu()" class="item has-items">
      Aktive
      <SubMenu :list="aktiveList" :show="showActive" />
    </div>
    <div ref="jugendeTarget" @click="toggleJugendeSubMenu()" class="item has-items">
      Jugend
      <SubMenu :list="jugendeList" :show="showJugende" />
    </div>
    <RouterLink class="item" to="/team/Alte-herren">Alte Herren</RouterLink>
    <RouterLink class="item" to="/aktuell">Aktuell</RouterLink>
  </div>
</template>

<!---- Style ---------------------------------------------------->

<style lang="scss" scoped>
.has-items {
  position: relative;
  cursor: pointer;
}
.has-items::before {
  content: '';
  position: absolute;
  right: -21px;
  top: 54%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 8px solid #ffffff;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.sub-item {
  width: 155px;
  transform: translateX(-25%);
  text-align: center;
  padding: 5px;
}

.item:hover {
  color: #fe0000;
}
</style>
