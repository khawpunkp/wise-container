// src/i18n/useLang.ts
import { messages, type Lang } from '../translations';

const lang = ref<Lang>((localStorage.getItem('lang') as Lang) || 'th');

watch(
   lang,
   (v) => {
      localStorage.setItem('lang', v);
      document.documentElement.lang = v;
   },
   { immediate: true },
);

export function useLang() {
   function setLang(next: Lang) {
      lang.value = next;
   }
   function t(key: string) {
      return messages[lang.value][key] ?? key;
   }
   return {
      lang: computed(() => lang.value),
      setLang,
      t,
   };
}
