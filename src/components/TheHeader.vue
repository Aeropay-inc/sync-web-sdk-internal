<script setup lang="ts">
import { useThemeStore } from '~/stores/theme'

const { updateSideBarState } = useThemeStore()
onMounted(() => {
  const mobileMenu = document.getElementById('mobile-menu')
  const mobileNavItems = document.getElementById('mobile-nav-items')
  const toggleMobileMenu = () => {
    mobileNavItems?.classList.toggle('hidden')
  }
  mobileMenu?.addEventListener('click', () => {
    toggleMobileMenu()
  })
  mobileNavItems?.addEventListener('click', () => {
    toggleMobileMenu()
  })
})
</script>

<template>
  <header grid bg-indigo-600 p-4 text-white dark:bg-indigo-900>
    <div grid="~flow-col" xs:grid="~ flow-col cols-[1fr_auto_auto]" gap-x-4>
      <div grid="~ flow-col auto-cols-min" gap-x-2>
        <div id="desktop-menu" i-carbon:menu hidden cursor-pointer place-self-center lg:block @click="updateSideBarState()" />
        <div id="mobile-menu" i-carbon:menu block cursor-pointer place-self-center lg:hidden />
        <div text-xl font-semibold>
          <RouterLink to="/home">
            SyncroVibe
          </RouterLink>
        </div>
      </div>
      <TheSupport hidden xs:grid />
    </div>
    <div id="mobile-nav-items" class="hidden">
      <TheNavigation />
    </div>
  </header>
</template>
