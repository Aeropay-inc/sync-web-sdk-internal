<script setup lang="ts">
import { useToastify } from '~/composables/toast'
import { useWidgetStore } from '~/stores/widget'

const widgetStore = useWidgetStore()
const toast = useToastify()

function save() {
  localStorage.setItem('widgetConfig', JSON.stringify(widgetStore.widgetConfig))
  toast.success('Configuration updated successfully!')
}
</script>

<template>
  <section grid gap-x-3>
    <div mt-3 text-xl>
      Application Settings
    </div>
    <div text-xs text-gray-500>
      Manage your details and personal preferences here
    </div>
    <div my-4 border-t border-gray-300 dark:border-gray-600 />

    <div grid mt-5 max-w-lg gap-y-3>
      <div grid="~ flow-col" auto-cols-fr>
        <label block text-lg text-gray-700 font-medium dark:text-white>Token<span class="text-red-500">*</span></label>
        <TheInput v-model="widgetStore.widgetConfig.token" />
      </div>
      <div grid="~ flow-col" auto-cols-fr>
        <label block text-lg text-gray-700 font-medium dark:text-white>Environment<span class="text-red-500">*</span></label>
        <TheInput v-model="widgetStore.widgetConfig.environment" />
      </div>
      <div grid="~ flow-col" auto-cols-fr>
        <label block text-lg text-gray-700 font-medium dark:text-white>Configuration Id</label>
        <TheInput v-model="widgetStore.widgetConfig.configurationId" />
      </div>
      <div grid="~ flow-col" auto-cols-fr>
        <label block text-lg text-gray-700 font-medium dark:text-white>AeroPassUser Id<span class="text-red-500">*</span></label>
        <TheInput v-model="widgetStore.widgetConfig.aeroPassUserUuid" />
      </div>
      <button mt-3 class="h-[38px] w-[150px]" place-self-center text-base btn @click="save">
        Save
      </button>
    </div>
  </section>
</template>

<route lang="yaml">
    meta:
        requireAuth: true
        layout: dashboard
        title: Settings
</route>
