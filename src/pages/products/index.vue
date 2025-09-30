<script setup lang="ts">
import productList from '@/assets/product/product-list.json';
const { t } = useLang();
</script>

<template>
   <div class="bg-brand-orange/80 mobile:min-h-25 flex min-h-50 w-full items-center justify-center">
      <Typography variant="H2" mobile-variant="H4" weight="bold" class="text-white">
         {{ t('nav.products') }}
      </Typography>
   </div>
   <div class="mobile:p-6 flex w-full flex-1 flex-col items-center justify-start gap-16 px-8 py-16">
      <div
         v-for="(item, index) in productList"
         :key="index"
         :id="item.ref"
         class="flex w-full max-w-6xl flex-col gap-6"
      >
         <div class="flex gap-4">
            <div class="bg-brand-orange w-1 self-stretch rounded-full" />
            <Typography variant="H4" mobile-variant="H5" weight="bold" class="text-brand-blue">
               {{ t(item.label) }}
            </Typography>
         </div>
         <div class="flex py-90"></div>
      </div>
   </div>
</template>
