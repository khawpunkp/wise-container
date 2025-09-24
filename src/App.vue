<template>
   <main>
      <Navbar />
      <div
         class="mobile:min-h-[calc(100vh-200px)] mobile:pt-16 flex min-h-[calc(100vh-140px)] w-full flex-col items-center justify-between gap-4 pt-20"
      >
         <RouterView />
      </div>
      <Footer />
   </main>
</template>
