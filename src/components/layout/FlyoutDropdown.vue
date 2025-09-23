<script setup lang="ts">
import { PhCaretDown, PhCaretRight } from '@phosphor-icons/vue';
import type { RouteLocationRaw } from 'vue-router';

type Node = { label: string; href?: string; ref?: string; children?: Node[] };

const props = withDefaults(
   defineProps<{
      item: Node;
      closeDelay?: number;
      childCloseDelay?: number;
   }>(),
   {
      closeDelay: 150,
      childCloseDelay: 150,
   },
);

const { t } = useLang();
const open = ref(false);
const openChildIndex = ref<number | null>(null);

let hideTimer: number | undefined;
let childHideTimer: number | undefined;

function clearRootTimer() {
   if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = undefined;
   }
}
function clearChildTimer() {
   if (childHideTimer) {
      clearTimeout(childHideTimer);
      childHideTimer = undefined;
   }
}

const onEnterRoot = () => {
   if (props.item.children?.length) {
      clearRootTimer();
      open.value = true;
   }
};
const onLeaveRoot = () => {
   clearRootTimer();
   hideTimer = window.setTimeout(() => {
      open.value = false;
      openChildIndex.value = null;
   }, props.closeDelay);
};

const enterChild = (i: number) => {
   clearChildTimer();
   openChildIndex.value = i;
};
const leaveChild = () => {
   clearChildTimer();
   childHideTimer = window.setTimeout(() => {
      openChildIndex.value = null;
   }, props.childCloseDelay);
};

const onSelect = () => {
   clearRootTimer();
   clearChildTimer();
   open.value = false;
   openChildIndex.value = null;
};

function toggleRoot() {
   clearRootTimer();
   open.value = !open.value;
   if (!open.value) openChildIndex.value = null;
}

function buildTo(n: Node): RouteLocationRaw {
   return { path: n.href || '/', hash: n.ref ? `#${n.ref}` : '' };
}

onUnmounted(() => {
   clearRootTimer();
   clearChildTimer();
});
</script>

<template>
   <div class="relative text-white" @mouseenter="onEnterRoot" @mouseleave="onLeaveRoot">
      <!-- Header row: link + separate caret button (for touch) -->
      <div class="relative flex items-center">
         <!-- Parent: navigates on click -->
         <RouterLink v-if="item.href" :to="buildTo(item)" class="flex items-center gap-2 px-4">
            <Typography variant="BodyR">{{ t(item.label) }}</Typography>
            <PhCaretDown
               v-if="item.children?.length"
               class="transition-transform duration-300"
               :class="{ 'rotate-180': open }"
               weight="bold"
            />
         </RouterLink>
      </div>

      <!-- Flyout (shows on hover, closes after delay) -->
      <Transition name="menu">
         <div
            v-if="open && item.children?.length"
            class="absolute top-[calc(100%+4px)] left-0 z-50 w-56 rounded-xl border border-gray-200 bg-white p-1 shadow-lg ring-1 ring-black/5"
            role="menu"
         >
            <ul class="flex flex-col">
               <li v-for="(child, i) in item.children" :key="child.label" class="relative">
                  <!-- Leaf -->
                  <RouterLink
                     v-if="!child.children?.length && child.href"
                     :to="buildTo(child)"
                     class="block rounded-lg px-3 py-2.5 text-sm text-gray-800 hover:bg-gray-100"
                     @click="onSelect"
                  >
                     {{ t(child.label) }}
                  </RouterLink>

                  <!-- Has children -->
                  <div
                     v-else
                     class="group relative flex cursor-default items-center justify-between rounded-lg px-3 py-2.5 text-sm text-gray-800 hover:bg-gray-100"
                     @mouseenter="enterChild(i)"
                     @mouseleave="leaveChild"
                  >
                     <!-- Parent with children: label still navigates -->
                     <RouterLink
                        :to="buildTo(child)"
                        class="absolute inset-0 z-0"
                        @click="onSelect"
                        aria-label="Open {{ child.label }}"
                     />
                     <span class="pointer-events-none relative z-10">{{ t(child.label) }}</span>

                     <!-- caret to hint submenu -->
                     <PhCaretRight />

                     <!-- Submenu -->
                     <Transition name="submenu">
                        <div
                           v-if="openChildIndex === i"
                           class="absolute -top-1 left-[calc(100%+8px)] z-50 w-56 rounded-xl border border-gray-200 bg-white p-1 shadow-lg ring-1 ring-black/5"
                           role="menu"
                        >
                           <ul class="flex flex-col">
                              <li v-for="grand in child.children" :key="grand.label">
                                 <RouterLink
                                    v-if="grand.href"
                                    :to="buildTo(grand)"
                                    class="block rounded-lg px-3 py-2.5 text-sm whitespace-nowrap text-gray-800 hover:bg-gray-100"
                                    @click="onSelect"
                                 >
                                    {{ grand.label }}
                                 </RouterLink>
                              </li>
                           </ul>
                        </div>
                     </Transition>
                  </div>
               </li>
            </ul>
         </div>
      </Transition>
   </div>
</template>

<style scoped>
.menu-enter-from,
.menu-leave-to {
   opacity: 0;
   transform: translateY(4px) scale(0.98);
}
.menu-enter-active,
.menu-leave-active {
   transition:
      transform 300ms cubic-bezier(0.2, 0.7, 0.2, 1),
      opacity 300ms ease;
}
.submenu-enter-from,
.submenu-leave-to {
   opacity: 0;
   transform: translateX(6px) scale(0.98);
}
.submenu-enter-active,
.submenu-leave-active {
   transition:
      transform 300ms cubic-bezier(0.2, 0.7, 0.2, 1),
      opacity 300ms ease;
}
</style>
