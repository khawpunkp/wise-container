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

const { t } = useLang();
</script>

<template>
   <footer
      class="bg-brand-blue mobile:h-50 flex h-35 w-full flex-col items-center justify-center gap-4 text-white"
   >
      <div class="mobile:flex-col flex w-full max-w-6xl items-center justify-between gap-6">
         <div class="flex flex-col gap-2">
            <div class="flex items-center gap-3">
               <img :src="logo" class="h-12" />
               <div class="flex flex-col">
                  <Typography variant="BodyB">บริษัท ไวซ์ คอนเทนเนอร์ จำกัด</Typography>
                  <div class="bg-brand-orange h-px" />
                  <Typography variant="BodyB" class="mt-0.5">WISE CONTAINER CO., LTD</Typography>
               </div>
            </div>
            <Typography variant="CaptionR" class="mobile:hidden flex">
               {{ t('footer.copyright') }}
            </Typography>
         </div>
         <div class="flex items-center gap-6">
            <a
               v-for="(item, index) in socials"
               :href="item.link"
               :key="index"
               target="_blank"
               rel="noopener noreferrer"
               class="flex items-center justify-center"
            >
               <img :src="item.logo" class="size-6 object-contain" />
            </a>
         </div>
         <Typography variant="CaptionR" class="mobile:flex hidden">
            {{ t('footer.copyright') }}
         </Typography>
      </div>
   </footer>
</template>
