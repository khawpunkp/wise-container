<script setup lang="ts">
import { cn } from '@/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'vue';

const baseStyle = 'text-inherit whitespace-pre-line leading-normal';

const typoVariants = cva(baseStyle, {
   variants: {
      variant: {
         H1: 'text-[96px]',
         H2: 'text-[60px]',
         H3: 'text-[48px]',
         H4: 'text-[34px]',
         H5: 'text-[24px]',
         H6: 'text-[20px]',

         Body1: 'text-[16px]',
         Body2: 'text-[14px]',

         Caption: 'text-[12px]',
      },
      weight: {
         bold: 'font-[700]',
         medium: 'font-[500]',
         regular: 'font-[400]',
         light: 'font-[300]',
      },
   },
   defaultVariants: {
      variant: 'Body1',
      weight: 'regular',
   },
});

type TypoVariants = VariantProps<typeof typoVariants>;

interface Props {
   mobileVariant?: TypoVariants['variant'];
   variant?: TypoVariants['variant'];
   weight?: TypoVariants['weight'];
   as?: keyof HTMLElementTagNameMap;
   class?: HTMLAttributes['class'];
}

const props = withDefaults(defineProps<Props>(), {
   as: 'p',
});

const appliedVariant =
   typeof window !== 'undefined' && window.innerWidth <= 600
      ? props.mobileVariant || props.variant
      : props.variant;
</script>

<template>
   <component :is="as" :class="cn(typoVariants({ variant: appliedVariant, weight }), props.class)">
      <slot />
   </component>
</template>
