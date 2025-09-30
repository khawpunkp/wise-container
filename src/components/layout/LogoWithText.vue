<script setup lang="ts">
import logo from '@/assets/images/logo.png';

withDefaults(defineProps<{ size?: 'lg' | 'sm' }>(), {
   size: 'lg',
});
</script>

<template>
   <div v-if="size === 'lg'" class="flex items-center gap-3 text-white">
      <img :src="logo" class="h-12" />
      <div class="flex flex-col">
         <Typography variant="Body1" weight="bold">บริษัท ไวซ์ คอนเทนเนอร์ จำกัด</Typography>
         <div class="bg-brand-orange h-px" />
         <Typography variant="Body1" weight="bold" class="mt-0.5">
            WISE CONTAINER CO., LTD
         </Typography>
      </div>
   </div>
   <img v-else :src="logo" class="h-8" />
</template>
