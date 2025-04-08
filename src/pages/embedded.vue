<script setup lang="ts">
</script>

<template>
    <section h-full grid="~ flow-col" place-items-start justify-items-center gap-x-3>
        <!-- select payment -->
        <div grid gap-y-5 mt-15>
            <div text-4xl>Select a payment method</div>
            <div grid="~ flow-col cols-[auto_auto_1fr] gap-x-2">
                <input type="radio" checked>
                <div i-carbon:piggy-bank place-self-center/>
                <div text-lg> Pay by bank instantly and save 3%</div>
            </div>


            <div grid="~ flow-col cols-[auto_auto_1fr] gap-x-2">
                <input type="radio" disabled>
                <div i-carbon:money place-self-center/>
                <div text-lg> Credit/Debit card</div>
            </div>
        </div>

        <!-- product -->
        <div grid gap-x-2 gap-y-4 mt-15>
            <div grid="~ flow-col" gap-x-3>
                <div place-self-center>
                        <div text-xl>2023 Cadillac CT5</div>
                        <div text-sm>Premium Luxury 4D</div>
                        <div text-sm>Sedan Gas</div>
                </div>
                <img src="/assets/images/cadillac.png" alt="product" max-w-xs />
            </div>

            <div grid="~ flow-col">
                <div i-carbon:vehicle-api />
                <div text-sm>Full liability insured motor vehicles - Collisions and property coverage</div>
            </div>

            <button btn class="h-48px w-250px" place-self-center disabled>Next: Review</button>
        </div>        
    </section>
</template>

<route lang="yaml">
meta:
    requireAuth: true
    layout: dashboard
    title: Embedded
</route>