<script setup lang="ts">
import bg from '@/assets/images/header-products.png';
import productList from '@/assets/product/product-list.json';
import { PhImageSquare } from '@phosphor-icons/vue';
const { t, lang } = useLang();
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
         {{ t('products.title') }}
      </Typography>
   </div>
   <div
      class="mobile:p-6 mobile:gap-10 flex w-full flex-1 flex-col items-center justify-start gap-16 px-8 py-16"
   >
      <div
         v-for="(itemCategory, index) in productList"
         :key="index"
         :id="itemCategory.ref"
         class="flex w-full max-w-6xl flex-col gap-6"
      >
         <div class="flex gap-4">
            <div class="bg-brand-orange w-1 self-stretch rounded-full" />
            <Typography variant="H3" mobile-variant="H5" weight="bold" class="text-brand-blue">
               {{ t(itemCategory.label) }}
            </Typography>
         </div>
         <div class="flex flex-col gap-6">
            <div
               v-for="(product, index) in itemCategory.children"
               :key="index"
               :id="product.ref"
               class="mobile:gap-2 flex w-full max-w-6xl flex-col gap-4"
            >
               <Typography variant="H4" mobile-variant="H6" weight="medium">
                  {{ t(product.label) }}
                  <Typography variant="Body1" mobile-variant="Body2" weight="medium">
                     <template v-if="lang === 'th'">
                        {{ 'ราคา ' + numberFormatter(product.price) + ' บาท' }}
                     </template>
                     <template v-else>
                        {{ 'THB ' + numberFormatter(product.price) }}
                     </template>
                  </Typography>
               </Typography>
               <div class="mobile:grid-cols-2 mobile:gap-4 grid grid-cols-4 gap-6">
                  <div
                     v-for="(image, index) in product.images"
                     :key="product.ref + index"
                     class="bg-brand-blue/50 flex aspect-square items-center justify-center rounded-2xl text-white"
                  >
                     <PhImageSquare :size="32" />
                  </div>
               </div>
            </div>
            <div
               v-if="itemCategory.images"
               class="mobile:grid-cols-2 mobile:gap-4 grid grid-cols-4 gap-6"
            >
               <div
                  v-for="(image, index) in itemCategory.images"
                  :key="itemCategory.ref + index"
                  class="bg-brand-blue/50 flex aspect-square items-center justify-center rounded-2xl text-white"
               >
                  <PhImageSquare :size="32" />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
