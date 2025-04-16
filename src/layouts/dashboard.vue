<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useThemeStore } from '~/stores/theme'

const { isSideBarOpen } = storeToRefs(useThemeStore())
</script>

<template>
  <main grid="~ rows-[auto_1fr]" h-full>
    <TheHeader />
    <div grid="~ flow-col" transition-transform duration-500 ease-in-out class="lg:cols-[12rem_1fr]">
      <TheSidebar />
      <div grid="~ rows-[1fr_auto]" class="transition-all duration-300" :class="isSideBarOpen ? 'ml-0' : 'ml-[-12rem]'">
        <div p-4 transition-transform duration-500 ease-in-out>
          <RouterView />
        </div>
        <TheFooter />
      </div>
    </div>
  </main>
</template>
