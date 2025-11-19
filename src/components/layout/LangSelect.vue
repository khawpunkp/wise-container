<script setup lang="ts">
const { setLang, lang } = useLang();

const delaySetLang = (lang: 'th' | 'en') => {
   setTimeout(() => {
      setLang(lang);
   }, 300);
};
</script>

<template>
   <div class="relative ml-2 flex h-fit items-center rounded-sm bg-white p-1">
      <div
         class="bg-brand-orange absolute z-0 size-8 rounded transition-all duration-300"
         :class="[lang === 'th' ? 'left-1' : 'left-9']"
      />
      <button
         class="z-10 size-8 cursor-pointer transition-all duration-300"
         :class="{ 'text-white': lang === 'th' }"
         @click="delaySetLang('th')"
      >
         <Typography variant="Body1" weight="bold" class="mt-px">TH</Typography>
      </button>
      <button
         class="z-10 size-8 cursor-pointer transition-all duration-300"
         :class="{ 'text-white': lang === 'en' }"
         @click="delaySetLang('en')"
      >
         <Typography variant="Body1" weight="bold" class="mt-px">EN</Typography>
      </button>
   </div>
</template>
