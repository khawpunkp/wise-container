<script setup lang="ts">
import { cn } from '@/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'vue';

const baseStyle = 'text-inherit whitespace-pre-line';

const typoVariants = cva(baseStyle, {
   variants: {
      variant: {
         TitleB: 'text-[18px] font-[700] leading-normal',
         TitleM: 'text-[18px] font-[500] leading-normal',
         TitleR: 'text-[18px] font-[400] leading-normal',
         TitleL: 'text-[18px] font-[300] leading-normal',
         BodyB: 'text-[16px] font-[700] leading-normal',
         BodyM: 'text-[16px] font-[500] leading-normal',
         BodyR: 'text-[16px] font-[400] leading-normal',
         BodyL: 'text-[16px] font-[300] leading-normal',
         CaptionB: 'text-[14px] font-[700] leading-normal',
         CaptionM: 'text-[14px] font-[500] leading-normal',
         CaptionR: 'text-[14px] font-[400] leading-normal',
         CaptionL: 'text-[14px] font-[300] leading-normal',
         SubB: 'text-[12px] font-[700] leading-normal',
         SubM: 'text-[12px] font-[500] leading-normal',
         SubR: 'text-[12px] font-[400] leading-normal',
         SubL: 'text-[12px] font-[300] leading-normal',
      },
   },
   defaultVariants: {
      variant: 'BodyL',
   },
});

type TypoVariants = VariantProps<typeof typoVariants>;

interface Props {
   variant?: TypoVariants['variant'];
   as?: keyof HTMLElementTagNameMap;
   class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
   as: 'p',
});
</script>

<template>
   <component :is="as" :class="cn(typoVariants({ variant }), props.class)">
      <slot />
   </component>
</template>
