<script setup lang="ts">
import type { widget } from 'aerosync-web-sdk-v110'
import type { EnvironmentV110 } from '~/interfaces/widget.interface'
import { openWidget } from 'aerosync-web-sdk-v110'
import { useToastify } from '~/composables/toast'

const widgetStore = useWidgetStore()
const toast = useToastify()

function getEnvironment(): EnvironmentV110 {
  return (widgetStore.widgetConfig.environment === 'qa')
    ? 'dev'
    : (widgetStore.widgetConfig.environment === 'staging')
        ? 'staging'
        : (widgetStore.widgetConfig.environment === 'sandbox')
            ? 'sandbox'
            : 'production'
}

function openAerosyncWidget() {
  const widgetRef: widget = openWidget({
    id: 'widget',
    iframeTitle: 'Connect',
    environment: getEnvironment(),
    token: widgetStore.widgetConfig.token,
    style: {
      width: '375px',
      height: '688px',
      bgColor: '#000000',
      opacity: 0.7,
    },
    handleMFA: widgetStore.widgetConfig.handleMFA,
    jobId: widgetStore.widgetConfig.jobId,
    userId: widgetStore.widgetConfig.connectionId,
    consumerId: widgetStore.widgetConfig.configurationId,
    onEvent(event: object, type: string) {
      toast.info(`Sync onevent: ${JSON.stringify(event)} | type: ${type}`)
      console.log('onEvent', JSON.stringify(event))
    },
    onLoad() {
      toast.info('Sync onload')
      console.log('onLoad')
    },
    onSuccess(event: object) {
      toast.success(`Sync onsuccess: ${JSON.stringify(event)}`)

      console.log('onSuccess', JSON.stringify(event))
    },
    onClose() {
      toast.info(`Sync onclose`)
    },
    onError(event: object) {
      console.log('onError', JSON.stringify(event))
    },
  })
  widgetRef.launch()
}
</script>

<template>
  <section grid h-full>
    <div v-if="widgetStore.isWidgetConfigSet" grid>
      <div mdLite:justify-items-center grid place-items-start gap-x-3 sm:grid-flow-row xl:grid-flow-col>
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
          <!-- regular widget -->
          <div>
            <button
              class="h-48px w-full rounded-md bg-blue-600 px-4 py-2 text-white font-semibold transition-colors sm:w-[550px] dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600"
              @click="openAerosyncWidget()"
            >
              <div grid="~ flow-col" place-content-center gap-x-3>
                <div i-carbon:account place-self-center />
                <div>Link new Bank</div>
                <div i-carbon-user place-self-center />
              </div>
            </button>
          </div>
          <div id="widget" />

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
          layout: false
          title: v1.1.1
  </route>
