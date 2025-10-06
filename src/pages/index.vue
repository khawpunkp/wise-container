<script lang="ts" setup>
import logoText from '@/assets/images/logo-text.png';
const { t } = useLang();
</script>

<template>
   <div
      class="mobile:h-auto bg-brand-orange/20 mobile:flex-col mobile:p-6 flex h-[calc(100dvh-80px)] w-full items-center justify-between p-16"
   >
      <div class="mobile:ml-0 ml-16 flex flex-col">
         <Typography variant="H2" mobile-variant="H4" weight="bold" class="mobile:text-center">
            {{ t('home.company-name') }}
         </Typography>
         <Typography variant="H6" mobile-variant="Body2" class="mobile:text-center mt-0.5">
            {{ t('home.detail1') }}
         </Typography>
         <typography
            variant="H4"
            mobile-variant="Body1"
            weight="semibold"
            class="mobile:text-center mt-6"
         >
            {{ t('home.detail2') }}
         </typography>
      </div>
      <img :src="logoText" class="mobile:size-full size-180 shrink-0" />
   </div>
</template>
