<script setup lang="ts">
import type { AeroSyncWebVersions } from '~/interfaces/widget.interface'
import { useToastify } from '~/composables/toast'
import { useWidgetStore } from '~/stores/widget'

const widgetStore = useWidgetStore()
const toast = useToastify()
const envOptions = ['qa', 'staging', 'sandbox', 'production']
const aeroSyncWebVersions: AeroSyncWebVersions[] = [
  { display: 'v1.1.3', key: 'v113' },
  { display: 'v2.1.2', key: 'v212' },
]
const widgetConfigForm = ref({ ...widgetStore.widgetConfig })
function save() {
  widgetStore.updateWidgetConfig(widgetConfigForm.value)
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

    <div grid-y-3 grid-flow-rows grid mt-5 gap-y-6 md:grid-cols-2>
      <div grid gap-y-3>
        <!-- token -->
        <div grid="~ flow-col" auto-cols-fr>
          <label block text-base text-gray-700 font-medium dark:text-white>Token<span class="text-red-500">*</span></label>
          <TheInput v-model="widgetConfigForm.token" />
        </div>
        <!-- environment -->
        <div grid="~ flow-col" auto-cols-fr>
          <label block text-base text-gray-700 font-medium dark:text-white>Environment<span class="text-red-500">*</span></label>
          <select
            v-model="widgetConfigForm.environment" rounded border="~ rounded gray-200 dark:gray-700" bg="transparent" p="x-4 y-2"
            outline="none active:none"
          >
            <option v-for="env in envOptions" :key="env" :value="env" :selected="env === 'qa'" text-gray-500>
              {{ env }}
            </option>
          </select>
        </div>
        <!-- Web SDK Versions -->
        <div grid="~ flow-col" auto-cols-fr>
          <label block text-base text-gray-700 font-medium dark:text-white>Version<span class="text-red-500">*</span></label>
          <select
            v-model="widgetConfigForm.sdkVersion" rounded border="~ rounded gray-200 dark:gray-700" bg="transparent" p="x-4 y-2"
            outline="none active:none"
          >
            <option v-for="version in aeroSyncWebVersions" :key="version.key" :value="version.key" :selected="version.key === 'v113'" text-gray-500>
              {{ version.display }}
            </option>
          </select>
        </div>
        <!-- config Id -->
        <div grid="~ flow-col" auto-cols-fr>
          <label block text-base text-gray-700 font-medium dark:text-white>Configuration Id</label>
          <TheInput v-model="widgetConfigForm.configurationId" />
        </div>
        <!-- aeropass Id -->
        <div grid="~ flow-col" auto-cols-fr>
          <label block text-base text-gray-700 font-medium dark:text-white>AeroPassUser Id</label>
          <TheInput v-model="widgetConfigForm.aeroPassUserUuid" gray-200 dark:gray-700 />
        </div>
        <!-- connection Id -->
        <div v-if="widgetConfigForm.handleMFA" grid="~ flow-col" auto-cols-fr>
          <label block text-base text-gray-700 font-medium dark:text-white>Connection Id (userId)
            <span class="text-red-500">*</span>
          </label>
          <TheInput v-model="widgetConfigForm.connectionId" gray-200 dark:gray-700 />
        </div>
        <!-- Job Id -->
        <div v-if="widgetConfigForm.handleMFA" grid="~ flow-col" auto-cols-fr>
          <label block text-base text-gray-700 font-medium dark:text-white>Job Id
            <span class="text-red-500">*</span>
          </label>
          <TheInput v-model="widgetConfigForm.jobId" gray-200 dark:gray-700 />
        </div>
      </div>

      <div grid grid-auto-rows-min gap-y-3>
        <!-- embedded or normal flow -->
        <div grid="~ flow-col" auto-cols-fr gap-x-3>
          <label block place-self-end text-base text-gray-700 font-medium dark:text-white>Embedded View</label>
          <div
            class="grid h-6 w-12 cursor-pointer items-center rounded-full bg-gray-300 p-1 transition-colors"
            :class="widgetConfigForm.isEmbeddedFlow ? 'bg-green-500' : 'bg-gray-300'"
            @click="widgetConfigForm.isEmbeddedFlow = !widgetConfigForm.isEmbeddedFlow"
          >
            <div
              class="h-4 w-4 transform rounded-full bg-white shadow-md transition-transform"
              :class="widgetConfigForm.isEmbeddedFlow ? 'translate-x-6' : 'translate-x-0'"
            />
          </div>
        </div>
        <!-- handle MFA? -->
        <div grid="~ flow-col" auto-cols-fr gap-x-3>
          <label block place-self-end text-base text-gray-700 font-medium dark:text-white>Handle MFA</label>
          <div
            class="grid h-6 w-12 cursor-pointer items-center rounded-full bg-gray-300 p-1 transition-colors"
            :class="widgetConfigForm.handleMFA ? 'bg-green-500' : 'bg-gray-300'"
            @click="widgetConfigForm.handleMFA = !widgetConfigForm.handleMFA"
          >
            <div
              class="h-4 w-4 transform rounded-full bg-white shadow-md transition-transform"
              :class="widgetConfigForm.handleMFA ? 'translate-x-6' : 'translate-x-0'"
            />
          </div>
        </div>
        <!-- CDN or NPM -->
        <div grid="~ flow-col" auto-cols-fr gap-x-3>
          <label block place-self-end text-base text-gray-700 font-medium dark:text-white>Handle MFA</label>
          <div
            class="grid h-6 w-12 cursor-pointer items-center rounded-full bg-gray-300 p-1 transition-colors"
            :class="widgetConfigForm.handleMFA ? 'bg-green-500' : 'bg-gray-300'"
            @click="widgetConfigForm.handleMFA = !widgetConfigForm.handleMFA"
          >
            <div
              class="h-4 w-4 transform rounded-full bg-white shadow-md transition-transform"
              :class="widgetConfigForm.handleMFA ? 'translate-x-6' : 'translate-x-0'"
            />
          </div>
        </div>
      </div>
    </div>

    <button mt-8 class="h-[38px] w-[150px]" place-self-center text-base btn @click="save">
      Save
    </button>
  </section>
</template>

<route lang="yaml">
    meta:
        requireAuth: true
        layout: dashboard
        title: Settings
</route>
