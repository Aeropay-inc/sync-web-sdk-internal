<script setup lang="ts">
defineOptions({
  name: 'HomePage',
})

useHead({
  title: () => 'Home',
})
</script>

<template>
  <div>
    data incoming.....
  </div>
</template>

<route lang="yaml">
meta:
    requireAuth: true
    layout: dashboard
</route>
