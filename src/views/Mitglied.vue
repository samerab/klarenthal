<script lang="ts" setup>
import pdfLink from '@/assets/aufnahmeantrag.pdf'
</script>

<!---- Html ---------------------------------------------------->

<template>
  <div>
    <h1>View PDF</h1>
    <a :href="pdfLink" target="_blank" rel="noopener noreferrer">Open PDF in New Tab</a>
  </div>
</template>

<!---- Style ---------------------------------------------------->

<style lang="scss" scoped>
a {
  color: blue;
  text-decoration: underline;
}
</style>
