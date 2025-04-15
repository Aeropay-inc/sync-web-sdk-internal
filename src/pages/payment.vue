<script setup lang="ts">
import type { AerosyncWidget, WidgetEventSuccessType, WidgetEventType } from 'aerosync-web-sdk'
import { AerosyncEnvironment, initAeroSyncWidget, WidgetThemeType } from 'aerosync-web-sdk'
import { onMounted, onUnmounted } from 'vue'
import { useToastify } from '~/composables/toast'

const widgetStore = useWidgetStore()
const toast = useToastify()
const isSyncReady = ref(true)
let widgetControls: AerosyncWidget | null = null

function widgetRef() {
  widgetControls = initAeroSyncWidget({
    elementId: 'widgetId',
    embeddedBankView: {
      elementId: 'embeddedId',
      onEmbedded() {
        isSyncReady.value = true
      },
    },
    iframeTitle: 'Connect',
    environment: AerosyncEnvironment.Qa,
    token: widgetStore.widgetConfig.token,
    aeroPassUserUuid: widgetStore.widgetConfig.aeroPassUserUuid,
    theme: WidgetThemeType.LIGHT,
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
onMounted(() => {
  if (widgetStore.isWidgetConfigSet) {
    widgetRef()
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
      <div v-show="isSyncReady" grid place-items-start gap-x-3 sm:grid-flow-row xl:grid-flow-col mmd:justify-items-center>
        <!-- select payment -->
        <div grid mt-3 w-full gap-y-5 md:w-auto>
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
          <div id="embeddedId" h-sm w-full border md:w-xl />
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
        <div grid mt-15 w-full gap-x-2 gap-y-4 mmd:w-auto>
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

          <div grid="~ flow-row" sm:grid-flow-col>
            <div i-carbon:vehicle-api />
            <div text-sm>
              Full liability insured motor vehicles - Collisions and property coverage
            </div>
          </div>

          <button class="h-48px w-full" disabled place-self-center btn ssm:w-250px>
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
