<script setup lang="ts">
defineOptions({
  name: 'HomePage',
})
useHead({
  title: () => 'Home',
})
const router = useRouter()
function go() {
  router.push(`/about`)
}
</script>

<template>
  <section h-full grid place-content-center px-6>
    <div max-w-2xl grid place-items-center>
      <h1 text-4xl sm:text-5xl font-extrabold leading-tight mb-4>Welcome to SyncroVibe</h1>
      <p text-lg sm:text-xl mb-6 text-align-center>We're a forward-thinking company focused on bringing innovative solutions to the digital world. Join us as we sync the vibe for a better tomorrow.</p>
      <button bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg text-xl transition duration-300 @click="go" place-self-center>Learn More</button>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
    requireAuth: true
    layout: dashboard
    title: SyncroVibe 
</route>
