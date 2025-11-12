<script setup lang="ts">
import bg from '@/assets/images/header-renting.png';

const { t } = useLang();

const servicesList = [
   {
      title: 'services.trade.title',
      imgSrc: '/images/services/repair.png',
      desc: 'services.trade.desc',
   },
   {
      title: 'services.transport.title',
      imgSrc: '/images/services/transport.png',
      desc: 'services.transport.desc',
   },
   {
      title: 'services.design.title',
      imgSrc: '/images/services/design.png',
      desc: 'services.design.desc',
   },
   {
      title: 'services.yard.title',
      imgSrc: '/images/services/yard.png',
      desc: 'services.yard.desc',
   },
   {
      title: 'services.freight.title',
      imgSrc: '/images/services/freight.png',
      desc: 'services.freight.desc',
   },
   {
      title: 'services.freezone.title',
      imgSrc: '/images/services/freezone.png',
      desc: 'services.freezone.desc',
   },
   {
      title: 'services.customs.title',
      imgSrc: '/images/services/customs.png',
      desc: 'services.customs.desc',
   },
   {
      title: 'services.agentyard.title',
      imgSrc: '/images/services/agentyard.png',
      desc: 'services.agentyard.desc',
   },
];
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
         {{ t('home.services.title') }}
      </Typography>
   </div>
   <div
      class="mobile:p-6 mobile:gap-10 flex w-full flex-1 flex-col items-center justify-start gap-16 px-8 py-16"
   >
      <Motion
         v-for="(item, index) in servicesList"
         :key="index"
         :variants="positionYVariant"
         initial="hidden"
         in-view="visible"
         :in-view-options="{ once: true }"
         :transition="{ duration: 0.5, ease: 'easeOut' }"
         class="flex w-full max-w-270 flex-col gap-6"
      >
         <div class="flex gap-4">
            <div class="bg-brand-orange w-1 self-stretch rounded-full" />
            <Typography variant="H3" mobile-variant="H5" weight="bold" class="text-brand-blue">
               {{ t(item.title) }}
            </Typography>
         </div>
         <div class="mobile:flex-col mobile:gap-4 flex gap-10">
            <img
               :src="item.imgSrc"
               class="bg-brand-blue/50 mobile:min-w-0 mobile:w-full aspect-square w-120 shrink-0 rounded-2xl"
            />
            <Typography variant="H6" mobile-variant="Body1">{{ t(item.desc) }}</Typography>
         </div>
      </Motion>
   </div>
</template>
