<script setup lang="ts">
    const route = useRoute()
</script>
<template>
    <header grid="~ flow-col cols-[1fr_auto]" bg-indigo-600 dark:bg-indigo-900 text-white p-4>
      <div text-xl font-semibold>{{ route.meta.title }}</div>
      <TheSupport />
    </header>
</template>