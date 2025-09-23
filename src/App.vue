<template>
   <main>
      <Navbar />
      <div class="layout">
         <RouterView />
      </div>
      <Footer />
   </main>
</template>

<style lang="css" scoped>
@import '#main.css';

.layout {
   @apply mobile:min-h-[calc(100vh-200px)] flex min-h-[calc(100vh-140px)] w-full flex-col items-center justify-between gap-4 pt-28 pb-8;
}
</style>
