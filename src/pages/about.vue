<script setup lang="ts">
defineOptions({
  name: 'AboutPage',
})

useHead({
  title: () => 'About',
})
</script>

<template>
  <section grid h-full place-content-center px-6>
    <div grid max-w-2xl place-items-center>
      <h1 mb-4 text-4xl font-extrabold leading-tight sm:text-4xl>
        About Us
      </h1>
      <p mb-6 text-lg sm:text-xl>
        At SyncroVibe, we believe in the power of technology to connect people and enhance the way we interact with the world. Our team of innovators, designers, and engineers work tirelessly to create cutting-edge solutions that make a lasting impact. We're not just building products; we're shaping the future.
      </p>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
    requireAuth: true
    layout: dashboard
    title: SyncroVibe
</route>
