<script setup lang="ts">
</script>

<template>
  <header grid="~ flow-col cols-[1fr_auto_auto]" gap-x-4 bg-indigo-600 p-4 text-white dark:bg-indigo-900>
    <div grid="~ flow-col auto-cols-min" gap-x-2>
      <div i-carbon:process-automate place-self-center />
      <div text-xl font-semibold>
        <RouterLink to="/home">
          SyncroVibe
        </RouterLink>
      </div>
    </div>
    <TheSupport />
  </header>
</template>
