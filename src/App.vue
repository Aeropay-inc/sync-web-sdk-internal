<script setup lang="ts">
useHead({
  title: 'SyncroVibe',
  meta: [
    {
      name: 'description',
      content: 'Opinionated Vite Starter Template',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => '/favicon.png',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
