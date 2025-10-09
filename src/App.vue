<script setup lang="ts">
const route = useRoute();
</script>

<template>
   <main>
      <Navbar />
      <div
         class="mobile:min-h-[calc(100vh-200px)] flex min-h-[calc(100vh-140px)] w-full flex-col items-center"
         :class="{ 'mobile:pt-16 pt-20': route.path !== '/' }"
      >
         <RouterView />
      </div>
      <Footer />
   </main>
</template>
