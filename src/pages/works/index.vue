<script setup lang="ts">
import Image from 'primevue/image';
import bg from '@/assets/images/header-works.png';
import workList from '@/assets/data-list/works/works-list.json';
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
         {{ t('works.title') }}
      </Typography>
   </div>
   <div
      class="mobile:p-6 mobile:gap-10 flex w-full flex-1 flex-col items-center justify-start gap-16 px-8 py-16"
   >
      <div
         v-for="(work, workIndex) in workList"
         :key="workIndex"
         :id="work.ref"
         class="flex w-full max-w-400 flex-col gap-6"
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
               {{ t(work.title) }}
            </Typography>
         </Motion>
         <div class="mobile:grid-cols-1 mobile:gap-4 grid grid-cols-3 gap-6">
            <Motion
               v-for="imageIndex in work.images"
               :key="workIndex + '-' + imageIndex"
               :variants="positionYVariant"
               initial="hidden"
               in-view="visible"
               :in-view-options="{ once: true }"
               :transition="{ duration: 0.5, ease: 'easeOut' }"
               class="bg-brand-blue/50 flex aspect-[3/2] items-center justify-center overflow-hidden rounded-2xl text-white"
            >
               <Image :src="`/images/works/${workIndex + 1}/${imageIndex}.jpg`" preview />
            </Motion>
         </div>
      </div>
   </div>
</template>
