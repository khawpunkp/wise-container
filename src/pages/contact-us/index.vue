<script setup lang="ts">
import bg from '@/assets/images/header-bg.png';
import qrCode from '@/assets/images/qr.png';
import line from '@/assets/images/socials/line.png';
import { PhEnvelopeSimple, PhMapPin, PhPhone } from '@phosphor-icons/vue';

const { t } = useLang();

const data = [
   {
      title: 'ลานตู้คอนเทนเนอร์',
      name: 'บริษัท ไวซ์ คอนเทนเนอร์ จำกัด',
      address: '6/2 หมู่ที่ 7 ตำบลบางละมุง อำเภอบางละมุง จังหวัดชลบุรี 20150',
      email: 'test@mail.com',
      tel: '099-999-9999',
      line: '@WISECONTAINER',
      lineQr: qrCode,
   },
   {
      title: 'ลานตู้ 24 ชั่วโมง',
      name: 'บริษัท ไวซ์ คอนเทนเนอร์ จำกัด (ลาน 2)',
      address: '35 ตำบลหนองขาม อำเภอศรีราชา จังหวัดชลบุรี 20230',
      email: 'test@mail.com',
      tel: '099-999-9999',
      line: '@WISECONTAINER',
      lineQr: qrCode,
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
               {{ item.title }}
            </Typography>
         </div>
         <div class="mobile:flex-col flex w-full gap-6">
            <div class="mobile:w-full w-6/10">
               <div
                  class="bg-brand-blue/50 flex aspect-[4/3] items-center justify-center rounded-2xl text-white"
               >
                  Map
               </div>
            </div>
            <div class="flex flex-1 flex-col items-start gap-4">
               <Typography variant="H5" mobile-variant="H6" weight="medium">
                  {{ item.name }}
               </Typography>
               <div
                  class="flex w-full cursor-pointer items-start gap-3 rounded-2xl bg-black/5 p-3 transition-all duration-300 hover:scale-102"
               >
                  <PhMapPin weight="fill" size="32" color="#f38e12" />
                  <div class="flex min-h-8 items-center">
                     <Typography>
                        {{ item.address }}
                     </Typography>
                  </div>
               </div>
               <div
                  class="flex w-full cursor-pointer items-start gap-3 rounded-2xl bg-black/5 p-3 transition-all duration-300 hover:scale-102"
               >
                  <PhEnvelopeSimple weight="fill" size="32" color="#f38e12" />
                  <div class="flex min-h-8 items-center">
                     <Typography>{{ item.email }}</Typography>
                  </div>
               </div>
               <div
                  class="flex w-full cursor-pointer items-start gap-3 rounded-2xl bg-black/5 p-3 transition-all duration-300 hover:scale-102"
               >
                  <PhPhone weight="fill" size="32" color="#f38e12" />
                  <div class="flex min-h-8 items-center">
                     <Typography>{{ item.tel }}</Typography>
                  </div>
               </div>
               <img :src="qrCode" class="border-brand-blue/20 size-40 rounded-2xl border" />
               <div
                  class="flex h-14 w-full cursor-pointer items-center gap-3 rounded-2xl bg-[#06c755] px-3 transition-all duration-300 hover:scale-102"
               >
                  <img :src="line" class="size-10" />
                  <div class="flex min-h-8 items-center">
                     <Typography weight="bold" class="text-white">
                        ติดต่อผ่านไลน์ {{ item.line }}
                     </Typography>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
