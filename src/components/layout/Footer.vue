<script lang="ts" setup>
import facebook from '@/assets/images/socials/facebook.png';
import instagram from '@/assets/images/socials/instagram.png';
import tiktok from '@/assets/images/socials/tiktok.png';
import LogoWithText from './LogoWithText.vue';

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
            <LogoWithText />
            <Typography variant="Caption" class="mobile:hidden flex">
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
         <Typography variant="Caption" class="mobile:flex hidden">
            {{ t('footer.copyright') }}
         </Typography>
      </div>
   </footer>
</template>
