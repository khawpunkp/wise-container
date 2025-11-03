<script setup lang="ts">
import bg from '@/assets/images/header-contact.png';
import qrCode from '@/assets/images/qr.png';
import line from '@/assets/images/socials/line.png';
import { PhEnvelope, PhMapPin, PhPhone } from '@phosphor-icons/vue';

const { t } = useLang();

const data = [
   {
      title: 'contact.yard0.title',
      name: 'contact.yard0.name',
      map: 'contact.yard0.map',
      mapUrl: 'https://maps.app.goo.gl/gGtJfgrwB2kvpxVJ7',
      address: 'contact.yard0.address',
      opening: 'contact.opening.normal',
      tel: ['094-481-9722'],
   },
   {
      title: 'contact.yard1.title',
      name: 'contact.yard1.name',
      map: 'contact.yard1.map',
      mapUrl: 'https://maps.app.goo.gl/K6tYFM4Nv96qJaTk7',
      address: 'contact.yard1.address',
      opening: 'contact.opening.normal',
   },
   {
      title: 'contact.yard2.title',
      name: 'contact.yard2.name',
      map: 'contact.yard2.map',
      mapUrl: 'https://maps.app.goo.gl/WExHmeBMLkrBqTU6A',
      address: 'contact.yard2.address',
      opening: 'contact.opening.normal',
      tel: ['094-481-9722', '082-283-2152'],
   },
   {
      title: 'contact.yard3.title',
      name: 'contact.yard3.name',
      map: 'contact.yard3.map',
      mapUrl: 'https://maps.app.goo.gl/uCPzXubFiERqHam76',
      address: 'contact.yard3.address',
      opening: 'contact.opening.24',
      tel: ['094-481-9722', '061-174-0622'],
   },
   {
      title: 'contact.yard4.title',
      name: 'contact.yard4.name',
      map: 'contact.yard4.map',
      mapUrl: 'https://maps.app.goo.gl/4CMTGX4GZrp4CnJy6',
      address: 'contact.yard4.address',
      opening: 'contact.opening.24',
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
         {{ t('nav.contact') }}
      </Typography>
   </div>
   <div class="mobile:p-6 flex w-full flex-col items-center justify-center gap-16 px-8 py-16">
      <Motion
         :variants="opacityVariant"
         initial="hidden"
         in-view="visible"
         :in-view-options="{ once: true }"
         :transition="{ duration: 1.25, ease: 'easeOut' }"
         v-for="(item, index) in data"
         :key="index"
         class="flex w-full max-w-7xl flex-col gap-6"
      >
         <div class="flex gap-4">
            <div class="bg-brand-orange w-1 self-stretch rounded-full" />
            <Typography variant="H3" mobile-variant="H5" weight="bold" class="text-brand-blue">
               {{ t(item.title) }}
            </Typography>
         </div>
         <div class="mobile:flex-col mobile:min-h-0 flex min-h-125 w-full gap-6">
            <div class="mobile:w-full mobile:aspect-square aspect-[4/3] w-5/10">
               <div class="h-full w-full overflow-hidden rounded-2xl">
                  <iframe
                     :src="t(item.map)"
                     width="100%"
                     height="100%"
                     loading="lazy"
                     referrerpolicy="no-referrer-when-downgrade"
                  />
               </div>
            </div>
            <div class="justify-betweent flex flex-1 flex-col">
               <div class="flex flex-1 flex-col items-start">
                  <Typography variant="H4" mobile-variant="H6" weight="semibold">
                     {{ t(item.name) }}
                     <Typography
                        variant="Body1"
                        mobile-variant="Body2"
                        weight="medium"
                        class="text-[#606D85]"
                     >
                        {{ t(item.opening) }}
                     </Typography>
                  </Typography>
                  <div class="info-card">
                     <PhMapPin weight="fill" size="32" color="#f38e12" class="shrink-0" />
                     <div class="flex min-h-8 items-center">
                        <Typography>
                           {{ t(item.address) }}
                        </Typography>
                     </div>
                  </div>

                  <div v-for="(tel, index) in item.tel" :key="index" class="info-card">
                     <PhPhone weight="fill" size="32" color="#f38e12" class="shrink-0" />
                     <div class="flex min-h-8 items-center">
                        <Typography>{{ tel }}</Typography>
                     </div>
                  </div>
                  <div class="info-card">
                     <PhEnvelope weight="fill" size="32" color="#f38e12" class="shrink-0" />
                     <div class="flex min-h-8 items-center">
                        <Typography>{{ 'info@wisecontainers.com' }}</Typography>
                     </div>
                  </div>
               </div>
               <div
                  class="mobile:gap-4 mobile:flex-col-reverse mobile:mt-2 mobile:items-center flex w-full items-end gap-10"
               >
                  <div
                     class="flex h-14 w-fit cursor-pointer items-center gap-3 rounded-2xl bg-[#06c755] pr-6 pl-3 transition-all duration-300 hover:scale-102"
                     @click="clickLine"
                  >
                     <img :src="line" class="size-10" />
                     <div class="flex min-h-8 items-center">
                        <Typography weight="bold" class="text-white">
                           {{ t('contact.line') }} {{ '@wisecontainer' }}
                        </Typography>
                     </div>
                  </div>
                  <img :src="qrCode" class="size-50 rounded-2xl border-2" />
               </div>
            </div>
         </div>
      </Motion>
   </div>
</template>

<style lang="css" scoped>
@import '#main.css';

.info-card {
   @apply mobile:pointer-events-auto pointer-events-none flex w-full items-start gap-3 py-3;
}
</style>
