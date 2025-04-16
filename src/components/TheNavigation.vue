<template>
  <div mt-8>
    <div grid="~ flow-col cols-[auto_1fr]">
      <div i-carbon:home place-self-center />
      <RouterLink to="/home" block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700>
        Home
      </RouterLink>
    </div>
    <div grid="~ flow-col cols-[auto_1fr]">
      <div i-carbon:delivery-settings place-self-center />
      <RouterLink to="/settings" block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700>
        Settings
      </RouterLink>
    </div>
    <div grid="~ flow-col cols-[auto_1fr]">
      <div i-carbon:3rd-party-connected place-self-center />
      <RouterLink to="/payment" block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700>
        Payment
      </RouterLink>
    </div>
    <div grid="~ flow-col cols-[auto_1fr]">
      <div i-carbon:help-filled place-self-center />
      <RouterLink to="/about" block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700>
        About
      </RouterLink>
    </div>
  </div>
</template>
