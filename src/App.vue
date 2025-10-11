<script setup lang="ts">
const route = useRoute();
</script>

<template>
   <main>
      <Navbar />
      <div
         class="mobile:min-h-[calc(100vh-200px)] flex min-h-[calc(100vh-140px)] w-full flex-col items-center"
      >
         <div v-if="route.path !== '/'" class="mobile:h-16 bg-brand-blue/50 h-21 w-full" />
         <RouterView />
      </div>
      <Footer />
   </main>
</template>
