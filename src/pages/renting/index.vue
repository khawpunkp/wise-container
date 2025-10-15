<script setup lang="ts">
import bg from '@/assets/images/header-renting.png';
const { t } = useLang();
</script>

<template>
   <div
      class="bg-brand-orange/80 mobile:aspect-[450/100] flex aspect-[1900/200] w-full items-center justify-center bg-cover bg-bottom bg-no-repeat"
      :style="{
         backgroundImage: `url(${bg})`,
      }"
   >
      <Typography
         variant="H2"
         mobile-variant="H4"
         weight="bold"
         class="text-white text-shadow-lg/20"
      >
         {{ t('nav.renting') }}
      </Typography>
   </div>
</template>
