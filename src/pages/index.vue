<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const userName = ref('')
const password = ref('')
const user = useUserStore()

const router = useRouter()
function goToDashboard() {
  user.username = userName.value
  router.push(`/home`)
}

useHead({
  title: () => 'Login',
})
</script>

<template>
  <div grid gap-y-6>
    <div place-self-center text-2xl>
      SyncroVibe Login
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
    <button m-3 text-sm btn class="h-[42px]" :disabled="!userName || !password" @click="goToDashboard">
      Submit
    </button>
  </div>
</template>
