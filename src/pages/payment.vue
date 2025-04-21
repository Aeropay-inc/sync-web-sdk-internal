<script setup lang="ts">
import type { AerosyncWidget, WidgetEventSuccessType, WidgetEventType } from 'aerosync-web-sdk'
import { initAeroSyncWidget } from 'aerosync-web-sdk'
import { onMounted, onUnmounted } from 'vue'
import { useToastify } from '~/composables/toast'

const widgetStore = useWidgetStore()
const toast = useToastify()
const isSyncReady = ref(false)
let widgetControls: AerosyncWidget | null = null

function widgetRef() {
  widgetControls = initAeroSyncWidget({
    elementId: 'widgetId',
    ...(widgetStore.widgetConfig.isEmbeddedFlow)
    && { embeddedBankView: {
      elementId: 'embeddedId',
      onEmbedded() {
        // embedded ready
        isSyncReady.value = true
      },
      // width: '572px',
      // height: '348px'
    } },
    iframeTitle: 'Connect',
    environment: widgetStore.widgetConfig.environment,
    token: widgetStore.widgetConfig.token,
    theme: isDark.value ? 'dark' : 'light',
    consumerId: widgetStore.widgetConfig.configurationId,
    onEvent(event: WidgetEventType) {
      toast.info(`Sync onevent: ${event.payload.pageTitle}`)
    },
    onLoad() {
      toast.info('Sync onload')
    },
    onSuccess(event: WidgetEventSuccessType) {
      toast.success(`Sync onsuccess: ${JSON.stringify(event)}`)
    },
    onClose() {
      toast.info(`Sync onclose`)
    },
    onError(event: string) {
      console.log('onError', event)
    },
  })
}
function launchAerosyncWidget() {
  widgetControls?.launch()
}
watch(isDark, (newValue) => {
  widgetControls?.toggleTheme(newValue ? 'dark' : 'light')
})
onMounted(() => {
  if (widgetStore.isWidgetConfigSet) {
    widgetRef()
  }
  if (!widgetStore.widgetConfig.isEmbeddedFlow) {
    isSyncReady.value = true
  }
})
onUnmounted(() => {
  widgetControls?.destroy()
})
</script>

<template>
  <section grid h-full>
    <div v-if="widgetStore.isWidgetConfigSet" grid>
      <TheSpinner v-if="!isSyncReady" h-10 w-10 place-self-center />
      <div v-show="isSyncReady" mdLite:justify-items-center grid place-items-start gap-x-3 sm:grid-flow-row xl:grid-flow-col>
        <!-- select payment -->
        <div mdLite:w-auto grid mt-3 w-full gap-y-5>
          <div text-xl>
            Select a payment method
          </div>
          <div grid="~ flow-row gap-x-2" xs:grid-flow-col class="xs:cols-[auto_auto_1fr]">
            <input type="radio" checked>
            <div i-carbon:piggy-bank place-self-center />
            <div text-sm>
              Pay by bank instantly and save 3%
            </div>
          </div>
          <!-- embedded view -->
          <div
            v-if="widgetStore.widgetConfig.isEmbeddedFlow" id="embeddedId" mdLite:w-xl w-full border border-gray-300
            dark:border-gray-700
            class="h-[21.875rem]"
          />
          <!-- regular widget -->
          <div v-else>
            <button
              class="h-48px w-full rounded-md bg-blue-600 px-4 py-2 text-white font-semibold transition-colors sm:w-[550px] dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600"
              @click="launchAerosyncWidget()"
            >
              <div grid="~ flow-col" place-content-center gap-x-3>
                <div i-carbon:account place-self-center />
                <div>Link new Bank</div>
                <div i-carbon-user place-self-center />
              </div>
            </button>
          </div>
          <div id="widgetId" />

          <div grid="~ flow-row gap-x-2" xs:grid-flow-col class="xs:cols-[auto_auto_1fr]">
            <input type="radio" disabled>
            <div i-carbon:money place-self-center />
            <div text-base>
              Credit/Debit card
            </div>
          </div>
        </div>

        <!-- product -->
        <div mdLite:w-auto grid mt-15 w-full gap-x-2 gap-y-4>
          <div grid="~ flow-row" gap-x-3 sm:grid-flow-col>
            <div place-self-center>
              <div text-xl>
                2023 Cadillac CT5
              </div>
              <div text-sm>
                Premium Luxury 4D
              </div>
              <div text-sm>
                Sedan Gas
              </div>
            </div>
            <img src="/assets/images/cadillac.png" alt="product" w-150px place-self-center sm:w-200px>
          </div>

          <div grid="~ flow-row" gap-x-2 sm:grid-flow-col>
            <div i-carbon:vehicle-api />
            <div text-sm>
              Full liability insured motor vehicles - Collisions and property coverage
            </div>
          </div>

          <button class="h-48px w-full" disabled smLite:w-250px place-self-center btn>
            Next: Review
          </button>
        </div>
      </div>
    </div>
    <div v-else grid h-full place-content-center>
      <div max-w-2xl text-base>
        Please ensure that you have set up your widget configuration in the settings page before proceeding to payment.
      </div>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
    requireAuth: true
    layout: dashboard
    title: Payment
</route>
