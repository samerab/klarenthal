<script lang="ts" setup>
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ref, watch, onBeforeUnmount } from 'vue'

const router = useRouter()
const subMenu = ref(null)
const props = defineProps({ list: Array, show: { default: false } })
let innerShow = ref(false)
function navigate(id: String) {
  router.push(`/team/${id}`)
}

watch(
  () => subMenu.value,
  (val) => {
    if (val) {
      gsap.to(val, { height: 'auto', duration: 0.3, ease: 'none' })
    }
  }
)
watch(
  () => props.show,
  (val) => {
    if (val) {
      innerShow.value = true
    } else {
      gsap.to(subMenu.value, {
        height: '0px',
        duration: 0.3,
        ease: 'none',
        onComplete: () => {
          innerShow.value = false
        }
      })
    }
  }
)
onBeforeUnmount(() => {})
</script>

<!---- Html ---------------------------------------------------->

<template>
  <div
    v-if="innerShow"
    ref="subMenu"
    class="sub-menu absolute h-0 overflow-hidden text-black bg-white"
  >
    <div class="inner-wrapper p-4">
      <div
        @click="navigate(item.id)"
        v-for="item in list"
        :key="item.id"
        class="sub-item hover:bg-primary hover:text-white"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<!---- Style ---------------------------------------------------->

<style lang="scss" scoped>
.sub-item {
  padding: 5px 20px;
  width: max-content;
}
.sub-menu {
  right: -22px;
  top: 45px;
  box-shadow: 8px 8px 24px 0px rgb(144 144 144);
  border-radius: 5px;
  z-index: 10;
}
</style>
