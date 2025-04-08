<script setup lang="ts">
import type { WidgetEventSuccessType, WidgetEventType } from 'aerosync-web-sdk'
import { AerosyncEnvironment, initAeroSyncWidget } from 'aerosync-web-sdk'
import { onMounted } from 'vue'

function openAerosyncWidget() {
  initAeroSyncWidget({
    elementId: 'widgetId',
    embeddedBankView: {
      elementId: 'embeddedId',
    },
    iframeTitle: 'Connect',
    environment: AerosyncEnvironment.Qa,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiOTQ4YTNkMGMzNzY0NmZhYjY1M2RmNjgyM2JmMTZmNCIsInVzZXJQYXNzd29yZCI6IjhiMzJhMTlhNDNkNjQyYTg5YjE3ZGFiMmE5MzEzOGE5IiwiQ2xpZW50SWQiOiJlMDU5YzE2OS1lNWRkLTRlN2UtYmY5ZC0xZWU3NWEzOTU0ZjMiLCJDbGllbnROYW1lIjoiU3ludGhldGljIFRlc3RpbmciLCJzZXNzaW9uSWQiOiIxNDQ2YTMxZjQ3YTY0NjcyYTcwZWJkZjA0M2RhMWE1MCJ9.8tPsVqHmn_Qy_KzpCGxV3GQSQniwbFf36BGvrrj8HAI',
    aeroPassUserUuid: 'aeroPassUserUuid',
    onEvent(event: WidgetEventType) {
      console.log('onEvent', event)
    },
    onLoad() {
      console.log('onLoad')
    },
    onSuccess(event: WidgetEventSuccessType) {
      console.log('onSuccess', event)
    },
    onClose() {
      console.log('onClose')
    },
    onError(event: string) {
      console.log('onError', event)
    },
  })
// widgetRef.launch();
}
onMounted(openAerosyncWidget)
</script>

<template>
  <section h-full grid="~ flow-col" place-items-start justify-items-center gap-x-3>
    <!-- select payment -->
    <div grid mt-15 gap-y-5>
      <div text-4xl>
        Select a payment method
      </div>
      <div grid="~ flow-col cols-[auto_auto_1fr] gap-x-2">
        <input type="radio" checked>
        <div i-carbon:piggy-bank place-self-center />
        <div text-lg>
          Pay by bank instantly and save 3%
        </div>
      </div>
      <div id="embeddedId" h-sm w-xl />
      <div id="widgetId" />

      <div grid="~ flow-col cols-[auto_auto_1fr] gap-x-2">
        <input type="radio" disabled>
        <div i-carbon:money place-self-center />
        <div text-lg>
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
