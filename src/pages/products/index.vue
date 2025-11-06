<script setup lang="ts">
import bg from '@/assets/images/header-products.png';
import productList from '@/assets/data-list/products/product-list.json';
import { Image, Carousel } from 'primevue';
import line from '@/assets/images/socials/line.png';
import facebook from '@/assets/images/socials/facebook.png';
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
               class="flex w-full max-w-7xl flex-col gap-4"
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
                  v-for="(child, childIndex) in product.images"
                  :key="`${product.ref}-${childIndex}`"
                  :variants="positionYVariant"
                  initial="hidden"
                  in-view="visible"
                  :in-view-options="{ once: true }"
                  :transition="{ duration: 0.5, ease: 'easeOut' }"
                  v-dragscroll
                  container-class="mobile:flex hidden"
               >
                  <div
                     v-for="imageIndex in child.imagesLength"
                     :key="product.ref + imageIndex"
                     class="bg-brand-blue/50 flex aspect-square w-65 shrink-0 snap-center items-center justify-center overflow-hidden rounded-2xl"
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
               <Motion
                  v-for="(imagesSet, imagesSetIndex) in product.images"
                  :key="`${product.ref}-${imagesSetIndex}`"
                  :variants="positionYVariant"
                  initial="hidden"
                  in-view="visible"
                  :in-view-options="{ once: true }"
                  :transition="{ duration: 0.5, ease: 'easeOut' }"
                  class="mobile:hidden -mx-12 flex"
               >
                  <Carousel
                     :value="Array(imagesSet.imagesLength < 4 ? 4 : imagesSet.imagesLength)"
                     contentClass="flex gap-4"
                     :numVisible="4"
                     :numScroll="2"
                     :show-indicators="false"
                     :class="{ 'no-nav-buttons': imagesSet.imagesLength < 4 }"
                  >
                     <template #item="{ index: imageIndex }">
                        <div
                           v-if="imageIndex < imagesSet.imagesLength"
                           class="bg-brand-blue/50 mx-2 flex aspect-square shrink-0 items-center justify-center overflow-hidden rounded-2xl"
                        >
                           <Image
                              :src="`/images/products/${category.ref}/${product.ref}/${imagesSetIndex + 1}/${imageIndex + 1}.jpg`"
                              preview
                              class="size-full"
                              image-class="object-cover aspect-square"
                              :alt="`${product.label} - set ${imagesSetIndex + 1} - image ${imageIndex + 1}`"
                           />
                        </div>
                     </template>
                  </Carousel>
               </Motion>
            </div>
         </div>
      </div>
      <Motion
         :variants="positionYVariant"
         initial="hidden"
         in-view="visible"
         :in-view-options="{ once: true }"
         :transition="{ duration: 0.5, ease: 'easeOut' }"
         class="flex w-full flex-col items-center justify-center gap-4"
      >
         <Typography variant="H4" weight="bold">สอบถามรายละเอียดสินค้าเพิ่มเติม</Typography>
         <div class="flex gap-6">
            <a
               href="https://line.me/ti/p/%40wisecontainer"
               target="_blank"
               rel="noopener noreferrer"
               class="flex h-14 w-fit cursor-pointer items-center gap-3 rounded-2xl bg-[#06c755] pr-6 pl-3"
            >
               <img :src="line" class="size-10" />
               <div class="flex min-h-8 items-center">
                  <Typography variant="H6" weight="bold" class="text-white">
                     {{ t('contact.line') }}
                  </Typography>
               </div>
            </a>
            <a
               href="https://www.facebook.com/61575234320876"
               target="_blank"
               rel="noopener noreferrer"
               class="flex h-14 w-fit cursor-pointer items-center gap-3 rounded-2xl bg-[#0866ff] pr-6 pl-3"
            >
               <img :src="facebook" class="size-6.5" />
               <div class="flex min-h-8 items-center">
                  <Typography variant="H6" weight="bold" class="text-white">
                     {{ t('contact.facebook') }}
                  </Typography>
               </div>
            </a>
         </div>
      </Motion>
   </div>
</template>

<style scoped>
:deep(.p-button) {
   --p-button-text-secondary-hover-background: transparent;
   --p-button-text-secondary-active-background: transparent;
}

:deep(.no-nav-buttons .p-button),
:deep(.no-nav-buttons .p-button) {
   color: transparent !important;
}
</style>
