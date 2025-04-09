<script setup lang="ts">
import type { WidgetEventSuccessType, WidgetEventType } from 'aerosync-web-sdk'
import { AerosyncEnvironment, initAeroSyncWidget } from 'aerosync-web-sdk'
import { onMounted } from 'vue'
import { useToastify } from '~/composables/toast'

const widgetStore = useWidgetStore()
const toast = useToastify()

function initAerosyncWidget() {
  initAeroSyncWidget({
    elementId: 'widgetId',
    embeddedBankView: {
      elementId: 'embeddedId',
    },
    iframeTitle: 'Connect',
    environment: AerosyncEnvironment.Qa,
    token: widgetStore.widgetConfig.token,
    aeroPassUserUuid: widgetStore.widgetConfig.aeroPassUserUuid,
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
onMounted(initAerosyncWidget)
</script>

<template>
  <section h-full grid="~ flow-col" place-items-start justify-items-center gap-x-3>
    <!-- select payment -->
    <div grid mt-3 gap-y-5>
      <div text-xl>
        Select a payment method
      </div>
      <div grid="~ flow-col cols-[auto_auto_1fr] gap-x-2">
        <input type="radio" checked>
        <div i-carbon:piggy-bank place-self-center />
        <div text-sm>
          Pay by bank instantly and save 3%
        </div>
      </div>
      <div id="embeddedId" h-sm w-xl border />
      <div id="widgetId" />

      <div grid="~ flow-col cols-[auto_auto_1fr] gap-x-2">
        <input type="radio" disabled>
        <div i-carbon:money place-self-center />
        <div text-base>
          Credit/Debit card
        </div>
      </div>
    </div>

    <!-- product -->
    <div grid mt-15 gap-x-2 gap-y-4>
      <div grid="~ flow-col" gap-x-3>
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
        <img src="/assets/images/cadillac.png" alt="product" max-w-xs>
      </div>

      <div grid="~ flow-col">
        <div i-carbon:vehicle-api />
        <div text-sm>
          Full liability insured motor vehicles - Collisions and property coverage
        </div>
      </div>

      <button class="h-48px w-250px" disabled place-self-center btn>
        Next: Review
      </button>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
    requireAuth: true
    layout: dashboard
    title: Payment
</route>
