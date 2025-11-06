<script setup lang="ts">
import Image from 'primevue/image';
import bg from '@/assets/images/header-works.png';
import workList from '@/assets/data-list/works/works-list.json';
import facebook from '@/assets/images/socials/facebook.png';
const { t } = useLang();
</script>

<template>
   <div
      class="bg-brand-orange/80 mobile:aspect-[450/100] flex aspect-[1900/200] w-full items-center justify-center bg-cover bg-bottom bg-no-repeat"
      :style="{
         backgroundImage: `url(${bg})`,
      }"
   >
      <Typography
         variant="H2"
         mobile-variant="H4"
         weight="bold"
         class="text-white text-shadow-lg/20"
      >
         {{ t('works.title') }}
      </Typography>
   </div>
   <div
      class="mobile:p-6 mobile:gap-10 flex w-full flex-1 flex-col items-center justify-start gap-16 px-8 py-16"
   >
      <div
         v-for="(work, workIndex) in workList"
         :key="workIndex"
         :id="work.ref"
         class="flex w-full max-w-400 flex-col gap-6"
      >
         <Motion
            :variants="positionYVariant"
            initial="hidden"
            in-view="visible"
            :in-view-options="{ once: true }"
            :transition="{ duration: 0.5, ease: 'easeOut' }"
            class="flex gap-4"
         >
            <div class="bg-brand-orange w-1 self-stretch rounded-full" />
            <Typography variant="H4" mobile-variant="H5" weight="bold" class="text-brand-blue">
               {{ t(work.title) }}
            </Typography>
         </Motion>
         <div class="mobile:grid-cols-1 mobile:gap-4 grid grid-cols-3 gap-6">
            <Motion
               v-for="imageIndex in work.imagesLength"
               :key="workIndex + '-' + imageIndex"
               :variants="positionYVariant"
               initial="hidden"
               in-view="visible"
               :in-view-options="{ once: true }"
               :transition="{ duration: 0.5, ease: 'easeOut' }"
               class="bg-brand-blue/50 flex aspect-[3/2] items-center justify-center overflow-hidden rounded-2xl"
            >
               <Image :src="`/images/works/${work.ref}/${imageIndex}.jpg`" preview />
            </Motion>
         </div>
      </div>
      <a
         href="https://www.facebook.com/61575234320876"
         target="_blank"
         rel="noopener noreferrer"
         class="flex h-14 w-fit cursor-pointer items-center gap-3 rounded-2xl bg-[#0866ff] pr-6 pl-3"
      >
         <img :src="facebook" class="size-6" />
         <div class="flex min-h-8 items-center">
            <Typography variant="H6" weight="bold" class="text-white">
               {{ t('works.seemore') }}
            </Typography>
         </div>
      </a>
   </div>
</template>

<style scoped>
/* let's shape */
.see-more span.shape {
   height: 60px;
   width: 250px;
   position: absolute;
   top: 0;
   left: 0;
   @media (max-width: 600px) {
      height: 44px;
      width: 190px;
   }
}

.see-more span span {
   content: '';
   position: absolute;
   margin: auto;
   height: 8px;
   width: 2px;
   background: #002c7e;
   opacity: 0;
}

.see-more span span:nth-of-type(1) {
   top: -10px;
   left: 0;
   right: 0;
}

.see-more span span:nth-of-type(2) {
   bottom: -10px;
   left: 0;
   right: 0;
}

.see-more span span:nth-of-type(3) {
   top: 0;
   bottom: 0;
   left: -5px;
}

.see-more span span:nth-of-type(4) {
   top: 0;
   bottom: 0;
   right: -5px;
}

.see-more span span:nth-of-type(5) {
   top: -10px;
   left: -70%;
   right: 0;
   transform: rotate(-30deg);
}

.see-more span span:nth-of-type(6) {
   top: -10px;
   left: 0;
   right: -70%;
   transform: rotate(30deg);
}

.see-more span span:nth-of-type(7) {
   bottom: -10px;
   right: 0;
   left: -70%;
   transform: rotate(30deg);
}

.see-more span span:nth-of-type(8) {
   bottom: -10px;
   left: 0;
   right: -70%;
   transform: rotate(-30deg);
}

/* let's animate this */
@keyframes bounce {
   0% {
      transform: scale(1);
   }
   50% {
      transform: scale(1.1);
   }
   100% {
      transform: scale(1);
   }
}

.see-more.active {
   animation: bounce 0.3s ease-out 1;
}

.see-more.active span span:nth-of-type(1) {
   animation: anim1 0.4s ease-out 1;
}
.see-more.active span span:nth-of-type(2) {
   animation: anim2 0.4s ease-out 1;
}
.see-more.active span span:nth-of-type(3) {
   animation: anim3 0.4s ease-out 1;
}
.see-more.active span span:nth-of-type(4) {
   animation: anim4 0.4s ease-out 1;
}
.see-more.active span span:nth-of-type(5) {
   animation: anim5 0.4s ease-out 1;
}
.see-more.active span span:nth-of-type(6) {
   animation: anim6 0.4s ease-out 1;
}
.see-more.active span span:nth-of-type(7) {
   animation: anim7 0.4s ease-out 1;
}
.see-more.active span span:nth-of-type(8) {
   animation: anim8 0.4s ease-out 1;
}

@keyframes anim1 {
   0% {
      transform: scaleY(0.5);
      opacity: 0;
   }
   50% {
      transform: translateY(-10px) scaleY(1.4);
      opacity: 1;
   }
   100% {
      transform: translateY(-20px) scaleY(0.5);
      opacity: 0;
   }
}
@keyframes anim2 {
   0% {
      transform: scaleY(1);
      opacity: 0;
   }
   50% {
      transform: translateY(10px) scaleY(1.4);
      opacity: 1;
   }
   100% {
      transform: translateY(20px) scaleY(0.5);
      opacity: 0;
   }
}
@keyframes anim3 {
   0% {
      transform: rotate(90deg) scaleX(0.5);
      opacity: 0;
   }
   50% {
      transform: rotate(90deg) translateY(10px) scaleX(1.4);
      opacity: 1;
   }
   100% {
      transform: rotate(90deg) translateY(20px) scaleX(0.5);
      opacity: 0;
   }
}
@keyframes anim4 {
   0% {
      transform: rotate(90deg) scaleX(0.5);
      opacity: 0;
   }
   50% {
      transform: rotate(90deg) translateY(-10px) scaleX(1.4);
      opacity: 1;
   }

   100% {
      transform: rotate(90deg) translateY(-20px) scaleX(0.5);
      opacity: 0;
   }
}
@keyframes anim5 {
   0% {
      transform: rotate(-30deg) scaleY(0.5);
      opacity: 0;
   }
   50% {
      transform: rotate(-30deg) translateY(-8px) scaleY(1.4);
      opacity: 1;
   }
   100% {
      transform: rotate(-30deg) translateY(-16px) scaleY(0.5);
      opacity: 0;
   }
}
@keyframes anim6 {
   0% {
      transform: rotate(30deg) scaleY(0.5);
      opacity: 0;
   }
   50% {
      transform: rotate(30deg) translateY(-8px) scaleY(1.4);
      opacity: 1;
   }
   100% {
      transform: rotate(30deg) translateY(-16px) scaleY(0.5);
      opacity: 0;
   }
}
@keyframes anim7 {
   0% {
      transform: rotate(30deg) scaleY(0.5);
      opacity: 0;
   }
   50% {
      transform: rotate(30deg) translateY(8px) scaleY(1.4);
      opacity: 1;
   }
   100% {
      transform: rotate(30deg) translateY(16px) scaleY(0.5);
      opacity: 0;
   }
}
@keyframes anim8 {
   0% {
      transform: rotate(-30deg) scaleY(0.5);
      opacity: 0;
   }
   50% {
      transform: rotate(-30deg) translateY(8px) scaleY(1.4);
      opacity: 1;
   }
   100% {
      transform: rotate(-30deg) translateY(16px) scaleY(0.5);
      opacity: 0;
   }
}
</style>
