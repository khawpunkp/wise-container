<script lang="ts" setup>
import logoText from '@/assets/images/home/logo-text.png';
import bannerBg from '@/assets/images/home/banner-bg.png';
import visionBg from '@/assets/images/home/vision-bg.png';
import review from '@/assets/images/home/review.png';
import trade from '@/assets/images/home/service/trade.png';
import transport from '@/assets/images/home/service/transport.png';
import design from '@/assets/images/home/service/design.png';
import yard from '@/assets/images/home/service/yard.png';
import freezone from '@/assets/images/home/service/freezone.png';
import freight from '@/assets/images/home/service/freight.png';
import customs from '@/assets/images/home/service/customs.png';
import qrCode from '@/assets/images/qr.png';
import line from '@/assets/images/socials/line.png';
import {
   PhBlueprint,
   PhCaretRight,
   PhClockUser,
   PhHandshake,
   PhTruckTrailer,
   PhEnvelope,
   PhMapPin,
   PhPhone,
   PhImageSquare,
   PhGlobeHemisphereWest,
   PhWarehouse,
   PhListChecks,
} from '@phosphor-icons/vue';
import productList from '@/assets/data-list/products/product-list.json';
import workList from '@/assets/data-list/works/works-list.json';
import { motion, stagger } from 'motion-v';

const { t, lang } = useLang();

const servicesList = [
   { bg: trade, icon: PhHandshake, desc: 'home.services.trade' },
   { bg: transport, icon: PhTruckTrailer, desc: 'home.services.transport' },
   { bg: design, icon: PhBlueprint, desc: 'home.services.design' },
   { bg: yard, icon: PhClockUser, desc: 'home.services.yard' },
   { bg: freight, icon: PhGlobeHemisphereWest, desc: 'home.services.freight' },
   { bg: freezone, icon: PhWarehouse, desc: 'home.services.freezone' },
   { bg: customs, icon: PhListChecks, desc: 'home.services.customs' },
];
</script>

<template>
   <!-- Banner -->
   <div class="mobile:h-auto relative flex h-dvh w-full flex-col items-center justify-center">
      <div
         class="mobile:p-6 flex aspect-square max-h-160 w-full items-center justify-center bg-cover bg-bottom bg-no-repeat"
         :style="{
            backgroundImage: `url(${bannerBg})`,
         }"
      >
         <div class="flex w-full max-w-400 flex-col text-white">
            <Typography variant="H2" mobile-variant="H4" weight="bold" class="mobile:text-center">
               {{ t('home.banner.company-name') }}
            </Typography>
            <Typography variant="H6" mobile-variant="Body2" class="mobile:text-center mt-0.5">
               {{ t('home.banner.detail1') }}
            </Typography>
         </div>
      </div>
      <img
         :src="logoText"
         class="mobile:relative mobile:aspect-square mobile:size-full mobile:mt-6 mobile:p-0 pointer-events-none absolute right-0 bottom-0 size-180 shrink-0 object-contain p-20"
      />
      <div class="mobile:p-6 flex w-full max-w-400 flex-1 items-center justify-start">
         <typography
            variant="H4"
            mobile-variant="H5"
            weight="semibold"
            class="text-brand-blue text-center"
         >
            {{ t('home.banner.detail2') }}
         </typography>
      </div>
   </div>
   <!-- Service -->
   <div class="mobile:p-6 relative flex w-full items-center justify-center px-8 py-16">
      <div class="mobile:gap-4 flex w-full max-w-400 flex-col items-center justify-center gap-10">
         <Motion
            :variants="positionYVariant"
            initial="hidden"
            in-view="visible"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, ease: 'easeOut' }"
            class="flex flex-col items-center gap-4"
         >
            <Typography variant="H3" mobile-variant="H5" weight="semibold" class="text-brand-blue">
               {{ t('home.services.title') }}
            </Typography>
            <RouterLink to="/services" class="mobile:hidden w-fit">
               <div
                  class="bg-brand-orange relative flex w-fit items-center gap-2 rounded-full px-6 py-2 text-white"
               >
                  <Typography variant="H6" weight="semibold" class="mt-0.5">
                     {{ t('home.seemore') }}
                  </Typography>
                  <PhCaretRight :size="24" weight="bold" />
               </div>
            </RouterLink>
         </Motion>

         <div class="service-card-container">
            <Motion
               v-for="i in 4"
               :variants="positionYVariant"
               initial="hidden"
               in-view="visible"
               :in-view-options="{ once: true }"
               :transition="{ duration: 0.5, ease: 'easeOut' }"
               :key="'service-1-' + i"
               class="service-card"
               :style="{
                  backgroundImage: `url(${servicesList[i - 1]?.bg})`,
               }"
            >
               <div class="icon-container">
                  <component
                     :is="servicesList[i - 1]?.icon"
                     class="mobile:size-8 size-10"
                     weight="regular"
                  />
               </div>
               <Typography
                  variant="H5"
                  mobile-variant="Body1"
                  weight="semibold"
                  class="text-white text-shadow-black/50 text-shadow-md"
               >
                  {{ t(servicesList[i - 1]?.desc ?? '') }}
               </Typography>
            </Motion>
         </div>
         <div class="service-card-container">
            <Motion
               v-for="i in 3"
               :variants="positionYVariant"
               initial="hidden"
               in-view="visible"
               :in-view-options="{ once: true }"
               :transition="{ duration: 0.5, ease: 'easeOut' }"
               :key="'service-1-' + i"
               class="service-card"
               :style="{
                  backgroundImage: `url(${servicesList[i + 3]?.bg})`,
               }"
            >
               <div class="icon-container">
                  <component
                     :is="servicesList[i + 3]?.icon"
                     class="mobile:size-8 size-10"
                     weight="regular"
                  />
               </div>
               <Typography
                  variant="H5"
                  mobile-variant="Body1"
                  weight="semibold"
                  class="text-white text-shadow-black/50 text-shadow-md"
               >
                  {{ t(servicesList[i + 3]?.desc ?? '') }}
               </Typography>
            </Motion>
         </div>
         <Motion
            :variants="positionYVariant"
            initial="hidden"
            in-view="visible"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, ease: 'easeOut' }"
         >
            <RouterLink to="/services" class="mobile:flex hidden w-full">
               <div
                  class="bg-brand-orange relative flex w-full items-center justify-center gap-2 rounded-full border px-6 py-2 text-white"
               >
                  <Typography variant="Body2" weight="semibold">
                     {{ t('home.services.seeall') }}
                  </Typography>
               </div>
            </RouterLink>
         </Motion>
      </div>
   </div>
   <!-- Products -->
   <div class="mobile:p-6 relative flex w-full items-center justify-center px-8 py-16">
      <div class="mobile:gap-4 flex w-full max-w-400 flex-col items-center justify-center gap-10">
         <Motion
            :variants="positionYVariant"
            initial="hidden"
            in-view="visible"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, ease: 'easeOut' }"
            class="flex w-full flex-col"
         >
            <div class="flex w-full items-start justify-between">
               <Typography
                  variant="H3"
                  mobile-variant="H5"
                  weight="semibold"
                  class="text-brand-blue"
               >
                  {{ t('home.products.title') }}
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
            <Typography variant="Body1" mobile-variant="Body2" class="text-[#606D85]">
               {{ t('home.products.desc1') }}
               <br class="mobile:hidden" />
               {{ t('home.products.desc2') }}
            </Typography>
         </Motion>
         <Motion
            :variants="positionYVariant"
            initial="hidden"
            in-view="visible"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, ease: 'easeOut' }"
            class="mobile:overflow-y-auto scrollbar-none mobile:flex mobile:gap-4 grid w-full grid-cols-3 gap-10"
         >
            <RouterLink
               v-for="(item, index) in productList"
               :key="index"
               :to="{ path: '/products', hash: `#${item.ref}` }"
               class="relative flex flex-col items-end justify-end gap-6"
            >
               <div
                  class="bg-brand-blue/50 mobile:min-w-65 flex aspect-square w-full items-center justify-center rounded-2xl text-white"
               >
                  <PhImageSquare :size="32" />
               </div>
               <div
                  class="text-brand-blue mobile:absolute mobile:right-2 mobile:bottom-2 mobile:text-white flex w-fit items-center gap-2"
               >
                  <Typography variant="H6" mobile-variant="Body2" weight="semibold" class="mt-0.5">
                     {{ t(item.label) }}
                  </Typography>
                  <PhCaretRight class="mobile:size-4 size-6" weight="bold" />
               </div>
            </RouterLink>
         </Motion>
         <Motion
            :variants="positionYVariant"
            initial="hidden"
            in-view="visible"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, ease: 'easeOut' }"
         >
            <RouterLink to="/products" class="mobile:flex hidden w-full">
               <div
                  class="bg-brand-orange relative flex w-full items-center justify-center gap-2 rounded-full border px-6 py-2 text-white"
               >
                  <Typography variant="Body2" weight="semibold">
                     {{ t('home.works.seeall') }}
                  </Typography>
               </div>
            </RouterLink>
         </Motion>
      </div>
   </div>
   <!-- Vision -->
   <div class="mobile:p-6 relative flex w-full items-center justify-center px-8 py-16">
      <Motion
         :variants="{
            visible: { opacity: 1, transition: { delayChildren: stagger(0.5), duration: 1 } },
            hidden: { opacity: 0 },
         }"
         initial="hidden"
         in-view="visible"
         :in-view-options="{ once: true }"
         :transition="{ duration: 0.5, ease: 'easeOut' }"
         class="mobile:gap-6 mobile:flex-col flex w-full max-w-400 items-center justify-center gap-16"
      >
         <Motion
            :variants="positionYVariant"
            :transition="{ duration: 0.5, ease: 'easeOut' }"
            class="mobile:p-6 flex aspect-square w-full flex-col items-start justify-end rounded-4xl bg-cover bg-center bg-no-repeat p-10 text-white"
            :style="{
               backgroundImage: `url(${visionBg})`,
            }"
         >
            <Typography
               variant="H4"
               mobile-variant="H5"
               weight="semibold"
               class="text-shadow-black/50 text-shadow-md"
            >
               {{ t('home.vision.title') }}
            </Typography>
            <Typography
               variant="H5"
               mobile-variant="Body2"
               weight="medium"
               class="text-shadow-black/50 text-shadow-md"
            >
               {{ t('home.vision.desc') }}
            </Typography>
         </Motion>
         <Motion
            :variants="{
               visible: { opacity: 1, transition: { delayChildren: stagger(1) } },
               hidden: { opacity: 1 },
            }"
            class="flex w-full flex-col"
         >
            <Motion
               :variants="positionYVariant"
               :transition="{ duration: 0.5, ease: 'easeOut', delay: 0.5 }"
               class="mobile:gap-0 flex flex-col gap-4"
            >
               <Typography variant="H4" mobile-variant="H5" weight="semibold">
                  {{ t('home.mission.title') }}
               </Typography>
               <Typography
                  variant="H5"
                  mobile-variant="Body2"
                  weight="medium"
                  class="text-[#606D85]"
               >
                  {{ t('home.mission.desc') }}
               </Typography>
            </Motion>
            <Motion :variants="positionYVariant" :transition="{ duration: 0.5, ease: 'easeOut' }">
               <Typography
                  variant="H3"
                  mobile-variant="H5"
                  weight="semibold"
                  class="text-brand-blue mobile:p-0 mobile:mt-12 py-20 text-center"
               >
                  {{ t('home.about.quote') }}
               </Typography>
            </Motion>
         </Motion>
      </Motion>
   </div>
   <!-- Our Works -->
   <div class="mobile:p-6 relative flex w-full items-center justify-center px-8 py-16">
      <div class="mobile:gap-4 flex w-full max-w-400 flex-col items-center justify-center gap-10">
         <Motion
            :variants="positionYVariant"
            initial="hidden"
            in-view="visible"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, ease: 'easeOut' }"
            class="flex w-full flex-col"
         >
            <div class="flex w-full items-start justify-between">
               <Typography
                  variant="H3"
                  mobile-variant="H5"
                  weight="semibold"
                  class="text-brand-blue"
               >
                  {{ t('home.works.title') }}
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
               {{ t('home.works.desc1') }}

               <br class="mobile:hidden" />
               {{ t('home.works.desc2') }}
            </Typography>
         </Motion>
         <Motion
            :variants="positionYVariant"
            initial="hidden"
            in-view="visible"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, ease: 'easeOut' }"
            class="mobile:overflow-y-auto scrollbar-none mobile:flex mobile:gap-4 grid w-full grid-cols-3 gap-10"
         >
            <RouterLink
               v-for="(work, index) in workList.slice(0, 3)"
               :key="index"
               :to="{ path: '/works', hash: `#${work.ref}` }"
               class="relative flex flex-col items-end justify-end gap-4"
            >
               <img
                  :src="`/images/works/${work.ref}/1.jpg`"
                  class="bg-brand-blue/50 mobile:min-w-65 flex aspect-[3/2] w-full items-center justify-center rounded-2xl text-white"
               />

               <div
                  class="text-brand-blue mobile:absolute mobile:right-2 mobile:bottom-2 mobile:text-white mobile:bg-black/40 mobile:py-0.5 mobile:px-2 mobile:rounded-full flex w-fit items-center gap-2"
               >
                  <Typography variant="H6" mobile-variant="Body2" weight="semibold" class="mt-0.5">
                     {{ t('home.seemore') }}
                  </Typography>
                  <PhCaretRight class="mobile:size-4 size-6" weight="bold" />
               </div>
            </RouterLink>
         </Motion>
         <Motion
            :variants="positionYVariant"
            initial="hidden"
            in-view="visible"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, ease: 'easeOut' }"
         >
            <RouterLink to="/products" class="mobile:flex hidden w-full">
               <div
                  class="bg-brand-orange relative flex w-full items-center justify-center gap-2 rounded-full border px-6 py-2 text-white"
               >
                  <Typography variant="Body2" weight="semibold">
                     {{ t('home.works.seeall') }}
                  </Typography>
               </div>
            </RouterLink>
         </Motion>
      </div>
   </div>
   <!-- Review -->
   <div
      class="bg-brand-light-blue relative flex min-h-[calc(100dvh-84px)] w-full items-center justify-center p-6"
   >
      <div class="mobile:gap-4 flex w-full max-w-400 flex-col items-center justify-center gap-10">
         <Motion
            :variants="positionYVariant"
            initial="hidden"
            in-view="visible"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, ease: 'easeOut' }"
         >
            <Typography variant="H3" mobile-variant="H5" weight="semibold" class="text-brand-blue">
               {{ t('home.review.title') }}
            </Typography>
         </Motion>
         <Motion
            :variants="{
               visible: { opacity: 1, transition: { delayChildren: stagger(2) } },
               hidden: { opacity: 0 },
            }"
            initial="hidden"
            in-view="visible"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, ease: 'easeOut' }"
            class="mobile:flex-col mobile:gap-4 flex w-full items-center justify-center gap-25"
         >
            <Motion
               :variants="{
                  visible: { opacity: 1, transition: { delayChildren: stagger(0.5) } },
                  hidden: { opacity: 0 },
               }"
               :transition="{ duration: 0.5, ease: 'easeOut' }"
               class="mobile:gap-4 flex flex-col gap-12"
            >
               <Motion
                  :variants="opacityVariant"
                  :transition="{ duration: 0.5, ease: 'easeOut' }"
                  class="review-card"
               >
                  <Typography class="mobile:text-[16px] text-[28px]">
                     {{
                        '#รีวิวส่งตู้ #Update หน้างานลูกค้าให้ดูค่า เช้าฝนตก สายๆฟ้าเริ่มโปร่ง\nทางแคบแค่ไหนก็ไม่เป็นผลเลยย ขนส่งเราเก่งอยู่แล้วว'
                     }}
                  </Typography>
               </Motion>
               <Motion
                  :variants="opacityVariant"
                  :transition="{ duration: 0.5, ease: 'easeOut' }"
                  class="review-card mobile:ml-8 ml-12"
               >
                  <Typography variant="H6" mobile-variant="Body2">
                     {{
                        '#รีวิวที่พัก ส่งมอบเรียบร้อยอีกหนึ่งออเดอร์ #บ้านพักคนงานจากตู้คอนเทนเนอร์\n2 ตู้ และตู้เปล่า #ตู้คอนเทนเนอร์เก็บของ\nฝนตกไม่มีฝนต่อการขนส่งและติดตั้งค่า ขอบคุณลูกค้าหน้างาน จังหวัดนนทบุรีมากๆเลยนะคะ'
                     }}
                  </Typography>
               </Motion>
               <Motion
                  :variants="opacityVariant"
                  :transition="{ duration: 0.5, ease: 'easeOut' }"
                  class="review-card mobile:ml-0 mobile:mr-8 ml-30"
               >
                  <Typography variant="H6" mobile-variant="Body2">
                     {{ '#ตู้คอนเทนเนอร์ บ้านพักคนงาน.. โอน 50% ที่เหลือ พร้อยยกตู้ขึ้นหางเลยค่า' }}
                  </Typography>
               </Motion>
               <Motion
                  :variants="opacityVariant"
                  :transition="{ duration: 0.5, ease: 'easeOut' }"
                  class="review-card ml-12"
               >
                  <Typography variant="H6" mobile-variant="Body2">
                     {{
                        '#ตู้ใส่วัตถุมงคล Ep.1 ขนาด 20STD แบบประตูบานม้วน\n#Update หน้างานฉบับงานเร่งง !!'
                     }}
                  </Typography>
               </Motion>
            </Motion>
            <motion.img
               :variants="opacityVariant"
               :transition="{ duration: 0.5, ease: 'easeOut' }"
               :src="review"
               class="max-h-150 shrink-0 rounded-4xl shadow-md"
            />
         </Motion>
      </div>
   </div>
   <!-- Contact -->
   <Motion
      :variants="opacityVariant"
      initial="hidden"
      in-view="visible"
      :in-view-options="{ once: true }"
      :transition="{ duration: 1.25, ease: 'easeOut' }"
      class="mobile:p-6 flex w-full flex-col items-center justify-center gap-16 px-8 py-16"
   >
      <div class="mobile:flex-col mobile:gap-4 flex w-full max-w-400 gap-16">
         <div class="mobile:w-full mobile:aspect-square w-5/10">
            <div class="h-full w-full overflow-hidden rounded-2xl">
               <iframe
                  :src="t('contact.yard0.map')"
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
               <template v-if="lang === 'th'">บริษัท ไวซ์ คอนเทนเนอร์ จำกัด</template>
               <template v-else>WISE CONTAINER CO., LTD</template>
               <Typography
                  variant="Body1"
                  mobile-variant="Body2"
                  class="break-words text-[#606D85]"
               >
                  <template v-if="lang === 'th'">
                     มีสำนักงานใหญ่ตั้งอยู่ที่จังหวัดชลบุรี
                     <br class="mobile:flex hidden" />
                     ที่เปิดให้บริการด้านธุรกิจโลจิสติกส์แบบครบวงจร
                  </template>
                  <template v-else>
                     Our head office is located in Chonburi Province,
                     <br class="mobile:flex hidden" />
                     providing comprehensive logistics services.
                  </template>
               </Typography>
            </Typography>
            <div class="info-card">
               <PhMapPin weight="fill" size="28" color="#f38e12" class="shrink-0" />
               <div class="flex min-h-8 items-center">
                  <Typography>
                     {{ t('contact.yard0.address') }}
                  </Typography>
               </div>
            </div>

            <div class="info-card">
               <PhPhone weight="fill" size="28" color="#f38e12" class="shrink-0" />
               <div class="flex min-h-8 items-center">
                  <Typography>{{ '094-481-9722' }}</Typography>
               </div>
            </div>
            <div class="info-card">
               <PhEnvelope weight="fill" size="28" color="#f38e12" class="shrink-0" />
               <div class="flex min-h-8 items-center">
                  <Typography>{{ 'info@wisecontainers.com' }}</Typography>
               </div>
            </div>
            <div
               class="mobile:gap-4 mobile:flex-col-reverse mobile:mt-2 mobile:items-center flex w-full items-end gap-10"
            >
               <div
                  class="mobile:w-full flex h-14 w-fit cursor-pointer items-center gap-3 rounded-2xl bg-[#06c755] pr-6 pl-3 transition-all duration-300 hover:scale-102"
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
</template>

<style scoped>
@import '#main.css';

.service-card-container {
   @apply mobile:flex-col mobile:gap-4 flex h-full w-full flex-wrap items-center justify-center gap-10;
}

.service-card {
   box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.05);

   @apply bg-brand-blue mobile:p-4 mobile:flex-row mobile:min-w-0 mobile:m-0 mobile:text-start mobile:justify-start mobile:w-full mobile:rounded-2xl mobile:aspect-auto relative flex aspect-[3/2] w-92 flex-col items-center justify-center gap-4 rounded-4xl bg-cover bg-center bg-no-repeat p-6 text-center;
}

.icon-container {
   @apply border-brand-blue text-brand-blue mobile:size-16 mobile:border-2 flex size-20 shrink-0 items-center justify-center rounded-full border-[3px] bg-white;
}

.position-top {
   @apply mobile:relative mobile:top-0 absolute -top-12;
}

.review-card {
   @apply w-fit rounded-2xl bg-white px-6 py-4 text-[#606D85] shadow-md;
}

.info-card {
   @apply mobile:pointer-events-auto mobile:py-2 pointer-events-none flex w-full items-start gap-3 py-3;
}
</style>
