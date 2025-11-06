<script setup lang="ts">
import bg from '@/assets/images/header-products.png';
import productList from '@/assets/data-list/products/product-list.json';
import { PhImageSquare } from '@phosphor-icons/vue';
import { Image, Carousel } from 'primevue';
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
         v-for="(category, index) in productList"
         :key="index"
         :id="category.ref"
         class="flex w-full max-w-7xl flex-col gap-6"
      >
         <Motion
            :variants="positionYVariant"
            initial="hidden"
            in-view="visible"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, ease: 'easeOut' }"
            class="flex gap-4"
         >
            <div class="bg-brand-orange w-1 self-stretch rounded-full" />
            <Typography variant="H4" mobile-variant="H5" weight="bold" class="text-brand-blue">
               {{ t(category.label) }}
            </Typography>
         </Motion>
         <div class="flex flex-col gap-6">
            <div
               v-for="(product, productIndex) in category.children"
               :key="productIndex"
               :id="product.ref"
               class="mobile:gap-2 flex w-full max-w-7xl flex-col gap-4"
            >
               <Motion
                  :variants="positionYVariant"
                  initial="hidden"
                  in-view="visible"
                  :in-view-options="{ once: true }"
                  :transition="{ duration: 0.5, ease: 'easeOut' }"
               >
                  <Typography variant="H5" mobile-variant="H6" weight="medium">
                     {{ t(product.label) }}
                     <Typography variant="Body1" mobile-variant="Body2" weight="medium">
                        <template v-if="lang === 'th'">
                           {{
                              'เริ่มต้น ' +
                              numberFormatter(product.price) +
                              ' บาท พร้อมอุปกรณ์และระบบไฟ'
                           }}
                        </template>
                        <template v-else>
                           {{
                              'Starting from THB ' +
                              numberFormatter(product.price) +
                              ', complete with equipment and electrical system.'
                           }}
                        </template>
                     </Typography>
                  </Typography>
               </Motion>
               <HorizontalScrollContainer
                  v-for="(child, childIndex) in product.children"
                  :key="`${product.ref}-${childIndex}`"
                  :variants="positionYVariant"
                  initial="hidden"
                  in-view="visible"
                  :in-view-options="{ once: true }"
                  :transition="{ duration: 0.5, ease: 'easeOut' }"
                  v-dragscroll
               >
                  <div
                     v-for="imageIndex in child.imagesLength"
                     :key="product.ref + imageIndex"
                     class="bg-brand-blue/50 mobile:max-w-65 flex aspect-square w-80 shrink-0 snap-center items-center justify-center overflow-hidden rounded-2xl"
                  >
                     <Image
                        :src="`/images/products/${category.ref}/${product.ref}/${childIndex + 1}/${imageIndex}.jpg`"
                        preview
                        class="size-full"
                        image-class="object-cover aspect-square"
                        :alt="`${product.label} - set ${childIndex + 1} - image ${imageIndex}`"
                     />
                  </div>
               </HorizontalScrollContainer>
            </div>
         </div>
      </div>
   </div>
</template>
