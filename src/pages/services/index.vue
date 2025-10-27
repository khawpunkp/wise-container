<script setup lang="ts">
import bg from '@/assets/images/header-renting.png';
import { PhImageSquare } from '@phosphor-icons/vue';

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
         {{ t('services.title') }}
      </Typography>
   </div>
   <div
      class="mobile:p-6 mobile:gap-10 flex w-full flex-1 flex-col items-center justify-start gap-16 px-8 py-16"
   >
      <div class="flex w-full max-w-6xl flex-col gap-6">
         <div class="flex gap-4">
            <div class="bg-brand-orange w-1 self-stretch rounded-full" />
            <Typography variant="H3" mobile-variant="H5" weight="bold" class="text-brand-blue">
               ซื้อ-ขาย-เช่า-ซ่อม ตู้คอนเทนเนอร์
            </Typography>
         </div>
         <div class="mobile:flex-col mobile:gap-4 flex gap-10">
            <img
               src="/images/services/repair.png"
               class="bg-brand-blue/50 mobile:min-w-0 mobile:w-full aspect-square w-150 shrink-0 rounded-2xl"
            />

            <Typography variant="H6" mobile-variant="Body1">
               {{
                  'Wafer chocolate gummies cheesecake lemon drops powder sesame snaps cake chocolate. Pastry lemon drops pie oat cake jelly-o jelly chocolate bar gingerbread. Jelly-o cake chocolate macaroon shortbread donut icing biscuit pie.\n\nCake tootsie roll croissant toffee liquorice. Danish sesame snaps biscuit macaroon cake lemon drops. Wafer tootsie roll dessert cotton candy cake pudding muffin. Jelly icing halvah candy canes cupcake toffee halvah cake.'
               }}
            </Typography>
         </div>
      </div>
      <div class="flex w-full max-w-6xl flex-col gap-6">
         <div class="flex gap-4">
            <div class="bg-brand-orange w-1 self-stretch rounded-full" />
            <Typography variant="H3" mobile-variant="H5" weight="bold" class="text-brand-blue">
               ขนส่งตู้คอนเทนเนอร์
            </Typography>
         </div>
         <div class="mobile:flex-col mobile:gap-4 flex gap-10">
            <img
               src="/images/services/transport.png"
               class="bg-brand-blue/50 mobile:min-w-0 mobile:w-full aspect-square w-150 shrink-0 rounded-2xl"
            />
            <Typography variant="H6" mobile-variant="Body1">
               {{
                  'Wafer chocolate gummies cheesecake lemon drops powder sesame snaps cake chocolate. Pastry lemon drops pie oat cake jelly-o jelly chocolate bar gingerbread. Jelly-o cake chocolate macaroon shortbread donut icing biscuit pie.\n\nCake tootsie roll croissant toffee liquorice. Danish sesame snaps biscuit macaroon cake lemon drops. Wafer tootsie roll dessert cotton candy cake pudding muffin. Jelly icing halvah candy canes cupcake toffee halvah cake.'
               }}
            </Typography>
         </div>
      </div>
      <div class="flex w-full max-w-6xl flex-col gap-6">
         <div class="flex gap-4">
            <div class="bg-brand-orange w-1 self-stretch rounded-full" />
            <Typography variant="H3" mobile-variant="H5" weight="bold" class="text-brand-blue">
               ออกแบบ-ผลิต-จำหน่าย ตู้ประเภทต่าง ๆ
            </Typography>
         </div>
         <div class="mobile:flex-col mobile:gap-4 flex gap-10">
            <img
               src="/images/services/design.png"
               class="bg-brand-blue/50 mobile:min-w-0 mobile:w-full aspect-square w-150 shrink-0 rounded-2xl"
            />
            <Typography variant="H6" mobile-variant="Body1">
               {{
                  'Wafer chocolate gummies cheesecake lemon drops powder sesame snaps cake chocolate. Pastry lemon drops pie oat cake jelly-o jelly chocolate bar gingerbread. Jelly-o cake chocolate macaroon shortbread donut icing biscuit pie.\n\nCake tootsie roll croissant toffee liquorice. Danish sesame snaps biscuit macaroon cake lemon drops. Wafer tootsie roll dessert cotton candy cake pudding muffin. Jelly icing halvah candy canes cupcake toffee halvah cake.'
               }}
            </Typography>
         </div>
      </div>
      <div class="flex w-full max-w-6xl flex-col gap-6">
         <div class="flex gap-4">
            <div class="bg-brand-orange w-1 self-stretch rounded-full" />
            <Typography variant="H3" mobile-variant="H5" weight="bold" class="text-brand-blue">
               ลานฝากตู้เปิดให้บริการ 24 ชั่วโมง
            </Typography>
         </div>
         <div class="mobile:flex-col mobile:gap-4 flex gap-10">
            <img
               src="/images/services/yard.png"
               class="bg-brand-blue/50 mobile:min-w-0 mobile:w-full aspect-square w-150 shrink-0 rounded-2xl"
            />
            <Typography variant="H6" mobile-variant="Body1">
               {{
                  'Wafer chocolate gummies cheesecake lemon drops powder sesame snaps cake chocolate. Pastry lemon drops pie oat cake jelly-o jelly chocolate bar gingerbread. Jelly-o cake chocolate macaroon shortbread donut icing biscuit pie.\n\nCake tootsie roll croissant toffee liquorice. Danish sesame snaps biscuit macaroon cake lemon drops. Wafer tootsie roll dessert cotton candy cake pudding muffin. Jelly icing halvah candy canes cupcake toffee halvah cake.'
               }}
            </Typography>
         </div>
      </div>
      <div class="flex w-full max-w-6xl flex-col gap-6">
         <div class="flex gap-4">
            <div class="bg-brand-orange w-1 self-stretch rounded-full" />
            <Typography variant="H3" mobile-variant="H5" weight="bold" class="text-brand-blue">
               บริการขนส่งสินค้าระหว่างประเทศครบวงจร
            </Typography>
         </div>
         <div class="mobile:flex-col mobile:gap-4 flex gap-10">
            <img
               src="/images/services/freight.png"
               class="bg-brand-blue/50 mobile:min-w-0 mobile:w-full aspect-square w-150 shrink-0 rounded-2xl"
            />
            <Typography variant="H6" mobile-variant="Body1">
               {{
                  'Wafer chocolate gummies cheesecake lemon drops powder sesame snaps cake chocolate. Pastry lemon drops pie oat cake jelly-o jelly chocolate bar gingerbread. Jelly-o cake chocolate macaroon shortbread donut icing biscuit pie.\n\nCake tootsie roll croissant toffee liquorice. Danish sesame snaps biscuit macaroon cake lemon drops. Wafer tootsie roll dessert cotton candy cake pudding muffin. Jelly icing halvah candy canes cupcake toffee halvah cake.'
               }}
            </Typography>
         </div>
      </div>
      <div class="flex w-full max-w-6xl flex-col gap-6">
         <div class="flex gap-4">
            <div class="bg-brand-orange w-1 self-stretch rounded-full" />
            <Typography variant="H3" mobile-variant="H5" weight="bold" class="text-brand-blue">
               พื้นที่เขตปลอดอากรสำหรับสินค้าก่อนนำเข้า-ส่งออก
            </Typography>
         </div>
         <div class="mobile:flex-col mobile:gap-4 flex gap-10">
            <img
               src="/images/services/freezone.png"
               class="bg-brand-blue/50 mobile:min-w-0 mobile:w-full aspect-square w-150 shrink-0 rounded-2xl"
            />
            <Typography variant="H6" mobile-variant="Body1">
               {{
                  'Wafer chocolate gummies cheesecake lemon drops powder sesame snaps cake chocolate. Pastry lemon drops pie oat cake jelly-o jelly chocolate bar gingerbread. Jelly-o cake chocolate macaroon shortbread donut icing biscuit pie.\n\nCake tootsie roll croissant toffee liquorice. Danish sesame snaps biscuit macaroon cake lemon drops. Wafer tootsie roll dessert cotton candy cake pudding muffin. Jelly icing halvah candy canes cupcake toffee halvah cake.'
               }}
            </Typography>
         </div>
      </div>
      <div class="flex w-full max-w-6xl flex-col gap-6">
         <div class="flex gap-4">
            <div class="bg-brand-orange w-1 self-stretch rounded-full" />
            <Typography variant="H3" mobile-variant="H5" weight="bold" class="text-brand-blue">
               บริการด้านพิธีการศุลกากร
            </Typography>
         </div>
         <div class="mobile:flex-col mobile:gap-4 flex gap-10">
            <img
               src="/images/services/customs.png"
               class="bg-brand-blue/50 mobile:min-w-0 mobile:w-full aspect-square w-150 shrink-0 rounded-2xl"
            />
            <Typography variant="H6" mobile-variant="Body1">
               {{
                  'Wafer chocolate gummies cheesecake lemon drops powder sesame snaps cake chocolate. Pastry lemon drops pie oat cake jelly-o jelly chocolate bar gingerbread. Jelly-o cake chocolate macaroon shortbread donut icing biscuit pie.\n\nCake tootsie roll croissant toffee liquorice. Danish sesame snaps biscuit macaroon cake lemon drops. Wafer tootsie roll dessert cotton candy cake pudding muffin. Jelly icing halvah candy canes cupcake toffee halvah cake.'
               }}
            </Typography>
         </div>
      </div>
   </div>
</template>
