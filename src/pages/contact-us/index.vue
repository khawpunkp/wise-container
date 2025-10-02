<script setup lang="ts">
import bg from '@/assets/images/header-contact.png';
import qrCode from '@/assets/images/qr.png';
import line from '@/assets/images/socials/line.png';
import { PhEnvelope, PhMapPin, PhPhone } from '@phosphor-icons/vue';

const { t } = useLang();

const data = [
   {
      title: 'contact.yard1.title',
      name: 'contact.yard1.name',
      opening: 'contact.yard1.opening',
      map: 'contact.yard1.map',
      address: 'contact.yard1.address',
      clickAddress: () => {
         window.open('https://maps.app.goo.gl/gGtJfgrwB2kvpxVJ7', '_blank', 'noopener');
      },
      tel: 'contact.yard1.tel',
      clickTel: () => {
         window.open(`tel:0944819722`);
      },
      email: 'wisecontainer9@gmail.com',
      clickMail: () => {
         window.open(`mailto:wisecontainer9@gmail.com`);
      },
      line: '@wisecontainer',
      lineQr: qrCode,
      clickLine: () => {
         window.open(`https://line.me/ti/p/%40wisecontainer`, '_blank', 'noopener');
      },
   },
   {
      title: 'contact.yard3.title',
      name: 'contact.yard3.name',
      opening: 'contact.yard3.opening',
      map: 'contact.yard3.map',
      address: 'contact.yard3.address',
      clickAddress: () => {
         window.open('https://maps.app.goo.gl/ykqUdxHUrbSjLBUNA', '_blank', 'noopener');
      },
      tel: 'contact.yard3.tel',
      clickTel: () => {
         window.open(`tel:0633567001`);
      },
      email: 'wisecontainer9@gmail.com',
      clickMail: () => {
         window.open(`mailto:wisecontainer9@gmail.com`);
      },
      line: '@wisecontainer',
      lineQr: qrCode,
      clickLine: () => {
         window.open(`https://line.me/ti/p/%40wisecontainer`, '_blank', 'noopener');
      },
   },
];
</script>

<template>
   <div
      class="bg-brand-orange/80 mobile:h-25 flex h-50 w-full items-center justify-center"
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
         {{ t('nav.contact') }}
      </Typography>
   </div>
   <div class="mobile:p-6 flex w-full flex-col items-center justify-center gap-16 px-8 py-16">
      <div v-for="(item, index) in data" :key="index" class="flex w-full max-w-6xl flex-col gap-6">
         <div class="flex gap-4">
            <div class="bg-brand-orange w-1 self-stretch rounded-full" />
            <Typography variant="H4" mobile-variant="H5" weight="bold" class="text-brand-blue">
               {{ t(item.title) }}
            </Typography>
         </div>
         <div class="mobile:flex-col flex w-full gap-6">
            <div class="mobile:w-full w-6/10">
               <div class="aspect-[5/4] overflow-hidden rounded-2xl">
                  <iframe
                     :src="t(item.map)"
                     width="100%"
                     height="100%"
                     loading="lazy"
                     referrerpolicy="no-referrer-when-downgrade"
                  />
               </div>
            </div>
            <div class="flex flex-1 flex-col items-start gap-4">
               <Typography variant="H5" mobile-variant="H6" weight="medium">
                  {{ t(item.name) }}
                  <Typography variant="Body1" mobile-variant="Body2" weight="medium">
                     {{ t(item.opening) }}
                  </Typography>
               </Typography>
               <div class="info-card" @click="item.clickAddress">
                  <PhMapPin weight="fill" size="32" color="#f38e12" class="shrink-0" />
                  <div class="flex min-h-8 items-center">
                     <Typography>
                        {{ t(item.address) }}
                     </Typography>
                  </div>
               </div>

               <div class="info-card" @click="item.clickTel">
                  <PhPhone weight="fill" size="32" color="#f38e12" class="shrink-0" />
                  <div class="flex min-h-8 items-center">
                     <Typography>{{ t(item.tel) }}</Typography>
                  </div>
               </div>
               <div class="info-card" @click="item.clickMail">
                  <PhEnvelope weight="fill" size="32" color="#f38e12" class="shrink-0" />
                  <div class="flex min-h-8 items-center">
                     <Typography>{{ item.email }}</Typography>
                  </div>
               </div>
               <div class="flex w-full justify-center">
                  <img :src="qrCode" class="border-brand-blue size-40 rounded-2xl border-2" />
               </div>
               <div
                  class="flex h-14 w-full cursor-pointer items-center gap-3 rounded-2xl bg-[#06c755] px-3 transition-all duration-300 hover:scale-102"
                  @click="item.clickLine"
               >
                  <img :src="line" class="size-10" />
                  <div class="flex min-h-8 items-center">
                     <Typography weight="bold" class="text-white">
                        {{ t('contact.line') }} {{ item.line }}
                     </Typography>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style lang="css" scoped>
@import '#main.css';

.info-card {
   @apply mobile:pointer-events-auto pointer-events-none flex w-full items-start gap-3 rounded-2xl bg-black/5 p-3;
}
</style>
