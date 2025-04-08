<script setup lang="ts">
defineOptions({
  name: 'AboutPage',
})

useHead({
  title: () => 'About',
})
</script>

<template>
      <section h-full grid place-content-center px-6>
    <div max-w-2xl grid place-items-center>
      <h1 text-4xl sm:text-5xl font-extrabold leading-tight mb-4>About Us</h1>
      <p text-lg sm:text-xl mb-6 text-align-center>At SyncroVibe, we believe in the power of technology to connect people and enhance the way we interact with the world. Our team of innovators, designers, and engineers work tirelessly to create cutting-edge solutions that make a lasting impact. We're not just building products; we're shaping the future.</p>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
    requireAuth: true
    layout: dashboard
    title: SyncroVibe 
</route>
