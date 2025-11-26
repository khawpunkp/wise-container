import { createRouter, createWebHistory, type RouterScrollBehavior } from 'vue-router';
import { routes } from 'vue-router/auto-routes';

function scrollToEl(selector: string, offset = 0) {
   const el = document.querySelector<HTMLElement>(selector);
   if (!el) return false;

   const top = el.getBoundingClientRect().top + window.scrollY - offset;
   window.scrollTo({ top, behavior: 'smooth' });
   return true;
}

function waitForEl(selector: string, tries = 10): Promise<boolean> {
   const HEADER_OFFSET = typeof window !== 'undefined' && window.innerWidth <= 600 ? 88 : 144;
   return new Promise((resolve) => {
      const tick = () => {
         if (scrollToEl(selector, HEADER_OFFSET)) return resolve(true);
         if (tries <= 0) return resolve(false);
         setTimeout(() => resolve(waitForEl(selector, tries - 1)), 50);
      };
      tick();
   });
}

const scrollBehavior: RouterScrollBehavior = async (to, from, savedPosition) => {
   if (savedPosition) return savedPosition;

   if (to.hash) {
      await waitForEl(to.hash);
      return false;
   }

   return { left: 0, top: 0 };
};

const router = createRouter({
   history: createWebHistory(),
   routes,
   scrollBehavior,
});

export default router;
