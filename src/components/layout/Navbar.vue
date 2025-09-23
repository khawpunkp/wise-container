<script lang="ts" setup>
import logo from '@/assets/images/logo.png';
import { PhCaretRight, PhList, PhX } from '@phosphor-icons/vue';
import { AnimatePresence, motion } from 'motion-v';

const { t, setLang, lang } = useLang();

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
            children: [
               { label: 'productB1', href: '/products', ref: 'productB1' },
               { label: 'productB2', href: '/products', ref: 'productB2' },
               { label: 'productB3', href: '/products', ref: 'productB3' },
            ],
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
   <nav class="navbar">
      <div class="flex w-full max-w-6xl items-center justify-between">
         <div class="flex items-center gap-3 text-white">
            <img :src="logo" class="mobile:h-8 h-12" />
            <div class="mobile:hidden flex flex-col">
               <Typography variant="BodyB">บริษัท ไวซ์ คอนเทนเนอร์ จำกัด</Typography>
               <div class="bg-brand-orange h-px" />
               <Typography variant="BodyB" class="mt-0.5">WISE CONTAINER CO., LTD</Typography>
            </div>
            <div class="mobile:flex mobile:flex-col hidden">
               <Typography variant="SubB">บริษัท ไวซ์ คอนเทนเนอร์ จำกัด</Typography>
               <div class="bg-brand-orange h-px" />
               <Typography variant="SubB" class="mt-0.5">WISE CONTAINER CO., LTD</Typography>
            </div>
         </div>

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
         class="fixed top-0 left-0 z-10 mt-14 flex h-dvh w-full flex-col bg-white"
      >
         <template v-for="(item, index) in menuList" :key="index">
            <RouterLink
               :to="item.href"
               @click="menuOpen = false"
               className="px-6 hover:scale-105 transition-all duration-500 min-w-[100px] py-6 text-foreground-primary items-center flex justify-between"
            >
               <Typography variant="TitleB">
                  {{ t(item.label) }}
               </Typography>
               <div className="p-2">
                  <PhCaretRight :size="24" color="#0A0A0A" />
               </div>
            </RouterLink>
            <div className="w-full px-6">
               <div className="w-full h-px bg-brand-orange/30" />
            </div>
         </template>
      </motion.nav>
   </AnimatePresence>
</template>

<style scoped>
@import '#main.css';

.navbar {
   @apply mobile:px-6 mobile:h-14 bg-brand-blue fixed top-0 z-50 flex h-20 w-full items-center justify-center px-8 transition-all duration-500 ease-out;
}

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
