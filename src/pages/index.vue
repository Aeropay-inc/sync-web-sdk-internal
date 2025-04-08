<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const userName = ref('')
const password = ref('')
// const user = useUserStore()

// const router = useRouter()
// function go() {
//     router.push(`/hi/${encodeURIComponent(name.value)}`)
// }

useHead({
  title: () => 'Login',
})
</script>

<template>
  <div grid gap-y-6>
    <div place-self-center text-2xl>
      TruSync Login
    </div>
    <TheInput
      v-model="userName"
      placeholder="Username"
      autocomplete="false"
    />
    <TheInput
      v-model="password"
      placeholder="Password"
      autocomplete="false"
    />
    <button m-3 text-sm btn :disabled="!userName || !password">
      Submit
    </button>
  </div>
</template>
