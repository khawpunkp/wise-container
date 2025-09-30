<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, type RouteLocationRaw } from 'vue-router';
import { PhCaretDown } from '@phosphor-icons/vue';
import { motion } from 'motion-v';

defineOptions({ name: 'MobileListMenu' });

type Node = { label: string; href?: string; ref?: string; children?: Node[] };

const props = defineProps<{ item: Node; isChild?: boolean }>();
const open = ref(false);
const toggle = () => (open.value = !open.value);

const { t } = useLang();
const emit = defineEmits<{ (e: 'navigate'): void }>();

function buildTo(n: Node): RouteLocationRaw {
   return { path: props.item.href || '/', hash: n.ref ? `#${n.ref}` : '' };
}
</script>

<template>
   <div>
      <div
         class="flex h-18 items-center justify-between px-6 py-4 transition-all duration-500 hover:scale-105"
      >
         <RouterLink :to="buildTo(item)" @click="emit('navigate')" class="flex-1">
            <Typography variant="H6" :weight="isChild ? 'medium' : 'bold'">
               {{ t(item.label) }}
            </Typography>
         </RouterLink>

         <button v-if="item.children?.length" @click.stop="toggle" class="p-2">
            <PhCaretDown
               :size="24"
               class="transition-transform duration-300"
               :class="{ '-rotate-180': open }"
               weight="bold"
            />
         </button>
      </div>

      <div :aria-expanded="open" class="overflow-hidden pl-8">
         <motion.div
            v-for="child in item.children"
            :key="child.label"
            :initial="{ height: 0, opacity: 1 }"
            :animate="{ transition: { type: 'tween', duration: 0.15 }, height: open ? 'auto' : 0 }"
            :exit="{ height: 0, opacity: 1 }"
         >
            <MobileListMenu
               :item="{ ...child, href: item.href }"
               is-child
               @navigate="emit('navigate')"
            />
         </motion.div>
      </div>
   </div>
</template>
