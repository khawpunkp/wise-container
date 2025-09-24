<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { PhCaretDown } from '@phosphor-icons/vue';
import { motion } from 'motion-v';

type Node = { label: string; href?: string; children?: Node[] };

defineProps<{
   item: Node;
   isChild?: boolean;
}>();

const open = ref(false);

const toggle = () => {
   open.value = !open.value;
};

const { t } = useLang();

const emit = defineEmits<{ (e: 'navigate'): void }>();
</script>

<template>
   <div>
      <div
         class="flex h-18 items-center justify-between px-6 py-4 transition-all duration-500 hover:scale-105"
      >
         <!-- Label navigates -->
         <RouterLink :to="String(item.href)" @click="emit('navigate')" class="flex-1">
            <Typography variant="H6" :weight="isChild ? 'medium' : 'bold'">
               {{ t(item.label) }}
            </Typography>
         </RouterLink>

         <!-- Caret toggles submenu -->
         <button v-if="item.children?.length" @click.stop="toggle" class="p-2">
            <PhCaretDown
               :size="24"
               class="transition-transform duration-300"
               :class="{ '-rotate-180': open }"
               weight="bold"
            />
         </button>
      </div>

      <!-- Recursive children -->
      <div :aria-expanded="open" class="overflow-hidden pl-8">
         <motion.div
            :initial="{ height: 0, opacity: 1 }"
            :animate="{
               transition: { type: 'tween', duration: 0.15 },
               height: open ? 'auto' : 0,
            }"
            :exit="{ height: 0, opacity: 1 }"
            v-for="child in item.children"
            :key="child.label"
         >
            <MobileListMenu :item="child" is-child />
         </motion.div>
      </div>
   </div>
</template>

<style scoped></style>
