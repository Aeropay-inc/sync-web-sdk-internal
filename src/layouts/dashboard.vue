<template>
  <main grid="~ rows-[auto_1fr]" h-full>
    <TheHeader />
    <div grid="~ flow-col cols-[auto_1fr]">
      <TheSidebar />
      <div grid="~ rows-[1fr_auto]">
        <div p-4>
          <RouterView />
        </div>
        <TheFooter />
      </div>
    </div>
  </main>
</template>
