<template>
  <div class="-inline-block -cursor-pointer">
    <img id="icon" :width="size" :height="size" :src="src" />
    <div ref="iconNameElement" class="-hidden">
      <slot />
    </div>
  </div>
</template>

<!---- Script ---------------------------------------------------->

<script lang="ts" setup>
import { computed, ref } from 'vue'

const iconNameElement = ref<HTMLElement>()

const props = defineProps({
  name: { default: 'ic:outline-insert-emoticon' },
  color: { default: '000000' },
  size: { default: 32 }
})

const src = computed(() => {
  let iconName
  let elem = iconNameElement.value
  if (elem) {
    let name = elem.textContent
    if (name) {
      iconName = name
    } else {
      iconName = props.name
    }
    elem.remove()
  }
  return `https://api.iconify.design/${iconName}.svg?color=%23${props.color}`
})
</script>
