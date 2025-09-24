<script lang="ts" setup>
import { PhList, PhX } from '@phosphor-icons/vue';
import { AnimatePresence, motion } from 'motion-v';

const menuList = [
   { label: 'nav.home', href: '/' },
   {
      label: 'nav.products',
      href: '/products',
      children: [
         {
            label: 'productA',
            href: '/products',
            children: [
               { label: 'productA1', href: '/products', ref: 'productA1' },
               { label: 'productA2', href: '/products', ref: 'productA2' },
               { label: 'productA3', href: '/products', ref: 'productA3' },
            ],
         },
         {
            label: 'productB',
            href: '/products',
         },
      ],
   },
   { label: 'nav.renting', href: '/renting' },
   { label: 'nav.works', href: '/works' },
   { label: 'nav.contact', href: '/contact-us' },
];

const menuOpen = ref(false);
</script>

<template>
   <nav
      class="mobile:px-6 mobile:h-16 bg-brand-blue fixed top-0 z-50 flex h-20 w-full items-center justify-center px-8 transition-all duration-500 ease-out"
   >
      <div class="flex w-full max-w-6xl items-center justify-between">
         <LogoWithText class="mobile:hidden flex" />
         <LogoWithText size="sm" class="mobile:flex hidden" />
         <div class="mobile:hidden flex items-center gap-4">
            <FlyoutDropdown v-for="(item, index) in menuList" :key="index" :item="item" />
            <LangSelect />
         </div>
         <div class="mobile:flex hidden items-center gap-4">
            <LangSelect />
            <button @click="menuOpen = !menuOpen" :class="cn(`block p-2 text-white`)">
               <Transition name="icon" mode="out-in">
                  <PhX v-if="menuOpen" :size="24" class="icon" />
                  <PhList v-else :size="24" class="icon" />
               </Transition>
            </button>
         </div>
      </div>
   </nav>
   <AnimatePresence>
      <motion.nav
         v-if="menuOpen"
         :initial="{ x: '100vw' }"
         :animate="{ x: 0 }"
         :exit="{ x: '100vw' }"
         :transition="{ duration: 0.5, ease: 'easeOut' }"
         class="fixed top-0 left-0 z-10 mt-16 flex h-dvh w-full flex-col bg-white"
         v-auto-animate
      >
         <template v-for="(item, index) in menuList" :key="index">
            <MobileListMenu :item="item" @navigate="menuOpen = false" />
            <div className="w-full px-6">
               <div className="w-full h-px bg-brand-orange/30" />
            </div>
         </template>
      </motion.nav>
   </AnimatePresence>
</template>

<style scoped>
.icon {
   transition: opacity 250ms ease;
}
.icon-enter-from,
.icon-leave-to {
   opacity: 0;
}
.icon-enter-to,
.icon-leave-from {
   opacity: 1;
}
</style>
