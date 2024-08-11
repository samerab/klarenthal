<script lang="ts" setup>
import NavBarMobile from './NavBarMobile.vue'
import NavBarDesktop from './NavBarDesktop.vue'

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('md')
</script>

<!---- Html ---------------------------------------------------->

<template>
  <NavBarMobile v-if="isMobile" />
  <NavBarDesktop v-else />
</template>

<!---- Style ---------------------------------------------------->

<style scoped></style>
