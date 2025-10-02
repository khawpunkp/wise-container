<script setup lang="ts">
const { setLang, lang } = useLang();
</script>

<template>
   <div class="ml-2 flex h-fit items-center gap-0.5 rounded-sm bg-white p-0.5">
      <button
         class="h-8 w-8 rounded transition-all duration-500"
         :class="{ 'bg-brand-orange text-white': lang === 'th' }"
         @click="setLang('th')"
      >
         <Typography variant="Body1" weight="bold" class="mt-px">TH</Typography>
      </button>
      <p>|</p>
      <button
         class="h-8 w-8 rounded transition-all duration-500"
         :class="{ 'bg-brand-orange text-white': lang === 'en' }"
         @click="setLang('en')"
      >
         <Typography variant="Body1" weight="bold" class="mt-px">EN</Typography>
      </button>
   </div>
</template>
