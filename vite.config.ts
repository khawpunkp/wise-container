import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import VueRouter from 'unplugin-vue-router/vite';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import MotionResolver from 'motion-v/resolver';

// https://vite.dev/config/
export default defineConfig({
   plugins: [
      VueRouter({
         dts: true,
      }),
      vue(),
      AutoImport({
         imports: ['vue', '@vueuse/core', VueRouterAutoImports],
         dirs: ['src/lang/**', 'src/utils/**'],
         vueTemplate: true,
         dts: true,
      }),
      Components({
         dirs: ['src/components/**'],
         resolvers: [MotionResolver()],
         dts: true,
      }),
      tailwindcss(),
   ],
   resolve: {
      alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
   },
});
