<script lang="ts" setup>
import logo from '@/assets/images/logo.png';
import facebook from '@/assets/images/socials/facebook.png';
import instagram from '@/assets/images/socials/instagram.png';
import tiktok from '@/assets/images/socials/tiktok.png';

const socials = [
   { logo: facebook, link: 'https://www.facebook.com/61575234320876' },
   { logo: instagram, link: 'https://www.instagram.com/wise.container' },
   { logo: tiktok, link: 'https://www.tiktok.com/@wise.container' },
];
</script>

<template>
   <div class="footer">
      <div class="footer__content">
         <div class="footer__logo-side">
            <div class="logo-side__logo-container">
               <img :src="logo" class="h-12" />
               <div class="flex flex-col">
                  <Typography variant="BodyB">บริษัท ไวซ์ คอนเทนเนอร์ จำกัด</Typography>
                  <div class="bg-brand-orange h-px" />
                  <Typography variant="BodyB" class="mt-0.5">WISE CONTAINER CO., LTD</Typography>
               </div>
            </div>
            <Typography variant="CaptionR" class="mobile:hidden flex">
               Copyright © 2025 WISE CONTAINER CO., LTD
            </Typography>
         </div>
         <div class="footer__social-side">
            <a
               v-for="(item, index) in socials"
               :href="item.link"
               :key="index"
               target="_blank"
               rel="noopener noreferrer"
               class="flex items-center justify-center"
            >
               <img :src="item.logo" class="size-8 object-contain" />
            </a>
         </div>
         <Typography variant="CaptionR" class="mobile:flex hidden">
            Copyright © 2025 WISE CONTAINER CO., LTD
         </Typography>
      </div>
   </div>
</template>

<style scoped>
@import '#main.css';

.footer {
   @apply bg-brand-blue mobile:h-50 flex h-35 w-full flex-col items-center justify-center gap-4 text-white;
}

.footer__content {
   @apply mobile:flex-col flex w-full max-w-6xl items-center justify-between gap-6;
}

.footer__logo-side {
   @apply flex flex-col gap-2;
}

.logo-side__logo-container {
   @apply flex items-center gap-3;
}

.footer__social-side {
   @apply flex items-center gap-6;
}
</style>
