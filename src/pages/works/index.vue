<script setup lang="ts">
import bg from '@/assets/images/header-works.png';
const { t } = useLang();
</script>

<template>
   <div
      class="bg-brand-orange/80 mobile:aspect-[450/100] flex aspect-[1500/200] w-full items-center justify-center"
      :style="{
         backgroundImage: `url(${bg})`,
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
         backgroundPosition: 'center bottom',
      }"
   >
      <Typography
         variant="H2"
         mobile-variant="H4"
         weight="bold"
         class="text-white text-shadow-lg/20"
      >
         {{ t('nav.works') }}
      </Typography>
   </div>
</template>
