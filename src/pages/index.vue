<script lang="ts" setup>
import logoText from '@/assets/images/home/logo-text.png';
import bannerBg from '@/assets/images/home/banner-bg.png';
import visionBg from '@/assets/images/home/vision-bg.png';
import review from '@/assets/images/home/review.png';
import qrCode from '@/assets/images/qr.png';
import line from '@/assets/images/socials/line.png';
import {
   PhBlueprint,
   PhCaretRight,
   PhClockUser,
   PhHandCoins,
   PhHandshake,
   PhTruckTrailer,
   PhWrench,
   PhEnvelope,
   PhMapPin,
   PhPhone,
   PhImageSquare,
} from '@phosphor-icons/vue';

const { t } = useLang();

const clickAddress = () => {
   window.open('https://maps.app.goo.gl/gGtJfgrwB2kvpxVJ7', '_blank', 'noopener');
};
const clickTel = () => {
   window.open(`tel:0944819722`);
};
const clickMail = () => {
   window.open(`mailto:wisecontainer9@gmail.com`);
};
const clickLine = () => {
   window.open(`https://line.me/ti/p/%40wisecontainer`, '_blank', 'noopener');
};
</script>

<template>
   <!-- Banner -->
   <div class="mobile:h-auto relative flex h-dvh w-full flex-col items-center justify-center">
      <div
         class="mobile:p-6 flex aspect-square max-h-160 w-full items-center justify-center"
         :style="{
            backgroundImage: `url(${bannerBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
         }"
      >
         <div class="flex w-full max-w-[100rem] flex-col text-white">
            <Typography variant="H2" mobile-variant="H4" weight="bold" class="mobile:text-center">
               {{ t('banner.company-name') }}
            </Typography>
            <Typography variant="H6" mobile-variant="Body2" class="mobile:text-center mt-0.5">
               {{ t('banner.detail1') }}
            </Typography>
         </div>
      </div>
      <img
         :src="logoText"
         class="mobile:relative mobile:aspect-square mobile:size-full mobile:mt-6 mobile:p-0 pointer-events-none absolute right-0 bottom-0 size-180 shrink-0 object-contain p-20"
      />
      <div class="mobile:p-6 flex w-full max-w-[100rem] flex-1 items-center justify-start">
         <typography
            variant="H4"
            mobile-variant="H5"
            weight="semibold"
            class="text-brand-blue text-center"
         >
            {{ t('banner.detail2') }}
         </typography>
      </div>
   </div>
   <!-- Service -->
   <div class="mobile:p-6 relative flex w-full items-center justify-center px-8 py-16">
      <div
         class="mobile:gap-4 flex w-full max-w-[100rem] flex-col items-center justify-center gap-24"
      >
         <div class="flex flex-col items-center gap-4">
            <Typography variant="H3" mobile-variant="H5" weight="semibold" class="text-brand-blue">
               {{ t('services.title') }}
            </Typography>
            <RouterLink to="/products" class="mobile:hidden w-fit">
               <div
                  class="bg-brand-orange relative flex w-fit items-center gap-2 rounded-full px-6 py-2 text-white"
               >
                  <Typography variant="H6" weight="semibold" class="mt-0.5">
                     {{ t('home.seemore') }}
                  </Typography>
                  <PhCaretRight :size="24" weight="bold" />
               </div>
            </RouterLink>
         </div>
         <div class="service-card-container">
            <div class="service-card mb-21">
               <div class="position-top flex gap-8">
                  <div class="icon-container size-20">
                     <PhHandCoins class="mobile:size-8 size-10" weight="regular" />
                  </div>
                  <div class="icon-container mobile:!hidden size-20">
                     <PhHandshake class="size-10" weight="regular" />
                  </div>
                  <div class="icon-container mobile:!hidden size-20">
                     <PhWrench class="size-10" weight="regular" />
                  </div>
               </div>
               <Typography
                  variant="H5"
                  mobile-variant="Body1"
                  weight="semibold"
                  class="text-brand-blue"
               >
                  {{ t('services.trade') }}
               </Typography>
            </div>
            <div class="service-card mt-12">
               <div class="icon-container position-top">
                  <PhTruckTrailer class="mobile:size-8 size-10" weight="regular" />
               </div>
               <Typography
                  variant="H5"
                  mobile-variant="Body1"
                  weight="semibold"
                  class="text-brand-blue"
               >
                  {{ t('services.transport') }}
               </Typography>
            </div>
            <div class="service-card mb-12">
               <div class="icon-container position-top">
                  <PhBlueprint class="mobile:size-8 size-10" weight="regular" />
               </div>
               <Typography
                  variant="H5"
                  mobile-variant="Body1"
                  weight="semibold"
                  class="text-brand-blue"
               >
                  {{ t('services.build') }}
               </Typography>
            </div>
            <div class="service-card mt-21">
               <div class="icon-container position-top">
                  <PhClockUser class="mobile:size-8 size-10" weight="regular" />
               </div>
               <Typography
                  variant="H5"
                  mobile-variant="Body1"
                  weight="semibold"
                  class="text-brand-blue"
               >
                  {{ t('services.yard') }}
               </Typography>
            </div>
         </div>
         <RouterLink to="/products" class="mobile:flex hidden w-full">
            <div
               class="bg-brand-orange relative flex w-full items-center justify-center gap-2 rounded-full border px-6 py-2 text-white"
            >
               <Typography variant="Body2" weight="semibold">{{ t('services.seeall') }}</Typography>
            </div>
         </RouterLink>
      </div>
   </div>
   <!-- Vision -->
   <div class="mobile:p-6 relative flex w-full items-center justify-center px-8 py-16">
      <div
         class="mobile:gap-6 mobile:flex-col flex w-full max-w-[100rem] items-center justify-center gap-16"
      >
         <div
            class="mobile:p-6 flex aspect-square w-full flex-col items-start justify-end rounded-4xl p-10 text-white"
            :style="{
               backgroundImage: `url(${visionBg})`,
               backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
               backgroundPosition: 'center bottom',
            }"
         >
            <Typography variant="H4" mobile-variant="H5" weight="semibold">
               {{ t('vision.title') }}
            </Typography>
            <Typography variant="H5" mobile-variant="Body2" weight="medium">
               {{ t('vision.desc') }}
            </Typography>
         </div>
         <div class="flex w-full flex-col">
            <div class="mobile:gap-0 flex flex-col gap-4">
               <Typography variant="H4" mobile-variant="H5" weight="semibold">
                  {{ t('mission.title') }}
               </Typography>
               <Typography
                  variant="H5"
                  mobile-variant="Body2"
                  weight="medium"
                  class="text-[#606D85]"
               >
                  {{ t('mission.desc') }}
               </Typography>
            </div>
            <Typography
               variant="H3"
               mobile-variant="H5"
               weight="semibold"
               class="text-brand-blue mobile:p-0 mobile:mt-12 py-20 text-center"
            >
               {{ t('about.quote') }}
            </Typography>
         </div>
      </div>
   </div>
   <!-- Our Works -->
   <div class="mobile:p-6 relative flex w-full items-center justify-center px-8 py-16">
      <div
         class="mobile:gap-4 flex w-full max-w-[100rem] flex-col items-center justify-center gap-10"
      >
         <div class="flex w-full flex-col">
            <div class="flex w-full items-start justify-between">
               <Typography
                  variant="H3"
                  mobile-variant="H5"
                  weight="semibold"
                  class="text-brand-blue"
               >
                  {{ t('works.title') }}
               </Typography>
               <RouterLink to="/works" class="mobile:hidden w-fit">
                  <div
                     class="bg-brand-orange relative flex w-fit items-center gap-2 rounded-full px-6 py-2 text-white"
                  >
                     <Typography variant="H6" weight="semibold" class="mt-0.5">
                        {{ t('home.seemore') }}
                     </Typography>
                     <PhCaretRight :size="24" weight="bold" />
                  </div>
               </RouterLink>
            </div>
            <Typography variant="Body1" mobile-variant="Body2" class="text-[#606D85]">
               {{ t('works.desc1') }}

               <br class="mobile:hidden" />
               {{ t('works.desc2') }}
            </Typography>
         </div>
         <div
            class="mobile:overflow-y-auto scrollbar-none mobile:flex mobile:gap-4 grid w-full grid-cols-3 gap-10"
         >
            <RouterLink to="/works" class="relative flex flex-col items-end justify-end gap-6">
               <div
                  class="bg-brand-blue/50 mobile:min-w-65 flex aspect-square w-full items-center justify-center rounded-2xl text-white"
               >
                  <PhImageSquare :size="32" />
               </div>
               <div
                  class="text-brand-blue mobile:absolute mobile:right-2 mobile:bottom-2 mobile:text-white flex w-fit items-center gap-2"
               >
                  <Typography variant="H6" mobile-variant="Body2" weight="semibold" class="mt-0.5">
                     ผลงานที่ 1
                  </Typography>
                  <PhCaretRight class="mobile:size-4 size-6" weight="bold" />
               </div>
            </RouterLink>
            <RouterLink to="/works" class="relative flex flex-col items-end justify-end gap-6">
               <div
                  class="bg-brand-blue/50 mobile:min-w-65 flex aspect-square w-full items-center justify-center rounded-2xl text-white"
               >
                  <PhImageSquare :size="32" />
               </div>
               <div
                  class="text-brand-blue mobile:absolute mobile:right-2 mobile:bottom-2 mobile:text-white flex w-fit items-center gap-2"
               >
                  <Typography variant="H6" mobile-variant="Body2" weight="semibold" class="mt-0.5">
                     ผลงานที่ 2
                  </Typography>
                  <PhCaretRight class="mobile:size-4 size-6" weight="bold" />
               </div>
            </RouterLink>
            <RouterLink to="/works" class="relative flex flex-col items-end justify-end gap-6">
               <div
                  class="bg-brand-blue/50 mobile:min-w-65 flex aspect-square w-full items-center justify-center rounded-2xl text-white"
               >
                  <PhImageSquare :size="32" />
               </div>
               <div
                  class="text-brand-blue mobile:absolute mobile:right-2 mobile:bottom-2 mobile:text-white flex w-fit items-center gap-2"
               >
                  <Typography variant="H6" mobile-variant="Body2" weight="semibold" class="mt-0.5">
                     ผลงานที่ 3
                  </Typography>
                  <PhCaretRight class="mobile:size-4 size-6" weight="bold" />
               </div>
            </RouterLink>
         </div>
         <RouterLink to="/products" class="mobile:flex hidden w-full">
            <div
               class="bg-brand-orange relative flex w-full items-center justify-center gap-2 rounded-full border px-6 py-2 text-white"
            >
               <Typography variant="Body2" weight="semibold">{{ t('works.seeall') }}</Typography>
            </div>
         </RouterLink>
      </div>
   </div>
   <!-- Review -->
   <div
      class="bg-brand-light-blue relative flex min-h-[calc(100dvh-84px)] w-full items-center justify-center p-6"
   >
      <div
         class="mobile:gap-4 flex w-full max-w-[100rem] flex-col items-center justify-center gap-10"
      >
         <Typography variant="H3" mobile-variant="H5" weight="semibold" class="text-brand-blue">
            {{ t('review.title') }}
         </Typography>
         <div class="mobile:flex-col mobile:gap-4 flex w-full items-center justify-center gap-25">
            <div class="mobile:gap-4 flex flex-col gap-12">
               <div class="review-card">
                  <Typography class="mobile:text-[16px] text-[28px]">
                     {{
                        '#รีวิวส่งตู้ #Update หน้างานลูกค้าให้ดูค่า เช้าฝนตก สายๆฟ้าเริ่มโปร่ง\nทางแคบแค่ไหนก็ไม่เป็นผลเลยย ขนส่งเราเก่งอยู่แล้วว'
                     }}
                  </Typography>
               </div>
               <div class="flex flex-col gap-4">
                  <div class="review-card mobile:ml-8 ml-12">
                     <Typography variant="H6" mobile-variant="Body2">
                        {{
                           '#รีวิวที่พัก ส่งมอบเรียบร้อยอีกหนึ่งออเดอร์ #บ้านพักคนงานจากตู้คอนเทนเนอร์\n2 ตู้ และตู้เปล่า #ตู้คอนเทนเนอร์เก็บของ\nฝนตกไม่มีฝนต่อการขนส่งและติดตั้งค่า ขอบคุณลูกค้าหน้างาน จังหวัดนนทบุรีมากๆเลยนะคะ'
                        }}
                     </Typography>
                  </div>
                  <div class="review-card mobile:ml-0 mobile:mr-8 ml-30">
                     <Typography variant="H6" mobile-variant="Body2">
                        {{
                           '#ตู้คอนเทนเนอร์ บ้านพักคนงาน.. โอน 50% ที่เหลือ พร้อยยกตู้ขึ้นหางเลยค่า'
                        }}
                     </Typography>
                  </div>
                  <div class="review-card ml-12">
                     <Typography variant="H6" mobile-variant="Body2">
                        {{
                           '#ตู้ใส่วัตถุมงคล Ep.1 ขนาด 20STD แบบประตูบานม้วน\n#Update หน้างานฉบับงานเร่งง !!'
                        }}
                     </Typography>
                  </div>
               </div>
            </div>
            <img :src="review" class="card-shadow max-h-150 shrink-0 rounded-4xl" />
         </div>
      </div>
   </div>
   <!-- Contact -->
   <div class="mobile:p-6 flex w-full flex-col items-center justify-center gap-16 px-8 py-16">
      <div class="mobile:flex-col mobile:gap-4 flex w-full max-w-[100rem] gap-16">
         <div class="mobile:w-full mobile:aspect-square w-5/10">
            <div class="h-full w-full overflow-hidden rounded-2xl">
               <iframe
                  :src="t('contact.yard1.map')"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
               />
            </div>
         </div>
         <div class="flex flex-1 flex-col items-start">
            <Typography
               variant="H3"
               mobile-variant="H5"
               weight="semibold"
               class="text-brand-blue mb-2"
            >
               {{ t('contact.yard1.name') }}
               <Typography variant="Body1" mobile-variant="Body2" class="text-[#606D85]">
                  {{ t('contact.detail') }}
               </Typography>
            </Typography>
            <div class="info-card" @click="clickAddress">
               <PhMapPin weight="fill" size="28" color="#f38e12" class="shrink-0" />
               <div class="flex min-h-8 items-center">
                  <Typography>
                     {{ t('contact.yard1.address') }}
                  </Typography>
               </div>
            </div>

            <div class="info-card" @click="clickTel">
               <PhPhone weight="fill" size="28" color="#f38e12" class="shrink-0" />
               <div class="flex min-h-8 items-center">
                  <Typography>{{ t('contact.yard1.tel') }}</Typography>
               </div>
            </div>
            <div class="info-card" @click="clickMail">
               <PhEnvelope weight="fill" size="28" color="#f38e12" class="shrink-0" />
               <div class="flex min-h-8 items-center">
                  <Typography>{{ 'wisecontainer9@gmail.com' }}</Typography>
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
   </div>
</template>

<style scoped>
@import '#main.css';

.service-card-container {
   @apply mobile:flex-col mobile:gap-4 flex h-full w-full flex-1 items-center justify-center gap-10;
}

.service-card {
   box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.05);

   @apply bg-brand-light-blue mobile:p-4 mobile:min-w-0 mobile:m-0 mobile:text-start mobile:justify-start mobile:rounded-2xl relative flex w-full min-w-92 items-center justify-center gap-4 rounded-4xl py-12 text-center;
}

.icon-container {
   @apply border-brand-orange text-brand-orange mobile:size-12 mobile:border-2 flex size-20 items-center justify-center rounded-full border-[3px] bg-white;
}

.position-top {
   @apply mobile:relative mobile:top-0 absolute -top-12;
}

.card-shadow {
   box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.05);
}

.review-card {
   box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.05);
   @apply w-fit rounded-2xl bg-white px-6 py-4 text-[#606D85];
}

.info-card {
   @apply mobile:pointer-events-auto mobile:py-2 pointer-events-none flex w-full items-start gap-3 py-3;
}
</style>
