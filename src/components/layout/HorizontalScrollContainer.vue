<script setup lang="ts">
import { Motion } from 'motion-v';

const props = defineProps<{ class?: string; containerClass?: string; data?: any[] }>();

const scrollContainerRef = ref<HTMLElement | null>(null);
const showBlur = reactive({ left: false, right: true });

const handleScroll = () => {
   const el = scrollContainerRef.value;
   if (!el) return;
   showBlur.left = el.scrollLeft > 0;
   showBlur.right = el.scrollLeft + el.clientWidth < el.scrollWidth;
};

onMounted(() => {
   const el = scrollContainerRef.value;

   if (el) {
      handleScroll();
      el.addEventListener('scroll', () => handleScroll());
   }
});

onBeforeUnmount(() => {
   scrollContainerRef.value?.removeEventListener('scroll', handleScroll);
});

watch(
   () => props.data,
   () => {
      nextTick(() =>
         setTimeout(() => {
            handleScroll();
         }, 100),
      );
   },
);
</script>

<template>
   <Motion
      :variants="positionYVariant"
      initial="hidden"
      in-view="visible"
      :in-view-options="{ once: true }"
      :transition="{ duration: 0.5, ease: 'easeOut' }"
      :class="cn('relative -m-4 rounded-2xl p-4', containerClass)"
   >
      <div
         class="absolute top-0 -left-0.5 z-10 h-full w-8 bg-linear-to-r from-white via-white via-60% to-transparent transition-all duration-100"
         :class="[showBlur.left ? 'opacity-100' : 'opacity-0']"
      />

      <!-- Scrollable card container inside -->
      <div
         ref="scrollContainerRef"
         :class="
            cn(
               'scrollbar-none relative z-0 flex flex-row gap-4 overflow-x-auto overflow-y-hidden whitespace-nowrap',
               props.class,
            )
         "
      >
         <slot />
      </div>
      <div
         class="absolute top-0 -right-0.5 z-10 h-full w-8 bg-linear-to-l from-white via-white via-60% to-transparent transition-all duration-100"
         :class="[showBlur.right ? 'opacity-100' : 'opacity-0']"
      />
   </Motion>
</template>
