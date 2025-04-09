<template>
  <nav grid="~ gap-4 flow-col" auto-cols-min place-content-center text-xl>
    <button icon-btn title="Toggle dark mode" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a href="https://www.aeropay.com/support" target="_blank">
      <div i-carbon:help />
    </a>
  </nav>
</template>
