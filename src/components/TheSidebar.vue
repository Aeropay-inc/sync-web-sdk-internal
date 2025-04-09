<template>
  <aside w-2xs w-48 bg-gray-300 p-4 text-gray-900 dark:bg-gray-800 dark:text-white>
    <ul mt-8>
      <li>
        <div grid="~ flow-col cols-[auto_1fr]">
          <div i-carbon:home place-self-center />
          <RouterLink to="/home" block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700>
            Home
          </RouterLink>
        </div>
      </li>
      <li>
        <div grid="~ flow-col cols-[auto_1fr]">
          <div i-carbon:delivery-settings place-self-center />
          <RouterLink to="/settings" block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700>
            Settings
          </RouterLink>
        </div>
      </li>
      <li>
        <div grid="~ flow-col cols-[auto_1fr]">
          <div i-carbon:3rd-party-connected place-self-center />
          <RouterLink to="/payment" block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700>
            Payment
          </RouterLink>
        </div>
      </li>
      <li>
        <div grid="~ flow-col cols-[auto_1fr]">
          <div i-carbon:help-filled place-self-center />
          <RouterLink to="/about" block px-4 py-2 text-base hover:bg-gray-100 dark:hover:bg-gray-700>
            About
          </RouterLink>
        </div>
      </li>
    </ul>
  </aside>
</template>
