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
  <section grid h-full place-content-center px-6>
    <div grid max-w-2xl place-items-center>
      <h1 mb-4 text-xl font-extrabold leading-tight>
        Welcome to SyncroVibe
      </h1>
      <p mb-6 text-lg sm:text-lg>
        We're a forward-thinking company focused on bringing innovative solutions to the digital world. Join us as we sync the vibe for a better tomorrow.
      </p>
      <button place-self-center rounded-lg bg-indigo-500 px-6 py-1 text-lg text-white transition duration-300 hover:bg-indigo-700 @click="go">
        Learn More
      </button>
    </div>
  </section>
</template>

<route lang="yaml">
meta:
    requireAuth: true
    layout: dashboard
    title: SyncroVibe
</route>
