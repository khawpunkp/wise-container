<script setup lang="ts">
const { t } = useLang();
</script>

<template>
   <div class="bg-brand-orange/80 mobile:h-25 flex h-50 w-full items-center justify-center">
      <Typography variant="H2" mobile-variant="H4" weight="bold" class="text-white">
         {{ t('nav.works') }}
      </Typography>
   </div>
</template>
