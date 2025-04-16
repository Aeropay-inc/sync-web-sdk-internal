<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useThemeStore } from '~/stores/theme'

const { updateSideBarState } = useThemeStore()
const { isSideBarOpen } = storeToRefs(useThemeStore())
const windowWidth = ref(window.innerWidth)

function updateWindowWidth() {
  windowWidth.value = window.innerWidth
}

watch(windowWidth, (newWidth) => {
  if (newWidth < 1024) {
    isSideBarOpen.value = true
  }
})

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth)
  updateWindowWidth()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})
</script>

<template>
  <aside :class="isSideBarOpen ? 'translate-x-0' : '-translate-x-full'" hidden bg-gray-300 p-4 text-gray-900 transition-all duration-300 lg:block dark:bg-gray-800 dark:text-white>
    <div i-carbon:drill-back cursor-pointer place-self-end @click="updateSideBarState()" />
    <TheNavigation />
  </aside>
</template>
