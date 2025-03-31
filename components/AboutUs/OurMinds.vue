<template>
    <div class="flex justify-center">
        <div class="w-4/5">
            <div class="mt-16">
                <h2 class="text-4xl font-bold text-center">Our Minds</h2>
                <p class="text-center opacity-75 pt-5">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
            <div class="flex justify-center gap-10 mt-12 space-x-5">
                <div class="flex flex-col items-center">
                    <img src="https://jobnova-shreethemes.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg" class="rounded-full w-[200px] h-[200px]" alt="Description of Image">
                    <div class="mt-4 text-center">
                        <h1 class="text-[18px] font-plus-jakarta-sans font-semibold">Jack Joe</h1>
                        <h2 class="text-[#94a3b8] font-normal text-[15px]">Job Seeker</h2>
                    </div>
                </div>

                <div class="flex flex-col items-center">
                    <img src="https://jobnova-shreethemes.vercel.app/static/media/02.7df14e12e444ad660802.jpg" class="rounded-full w-[200px] h-[200px]" alt="Description of Image">
                    <div class="mt-4 text-center">
                        <h1 class="text-[18px] font-plus-jakarta-sans font-semibold">Krista John</h1>
                        <h2 class="text-[#94a3b8] font-normal text-[15px]">Job Seeker</h2>
                    </div>
                </div>

                <div class="flex flex-col items-center">
                    <img src="https://jobnova-shreethemes.vercel.app/static/media/03.ba5f8794c055cc1488b5.jpg" class="rounded-full w-[200px] h-[200px]" alt="Description of Image">
                    <div class="mt-4 text-center">
                        <h1 class="text-[18px] font-plus-jakarta-sans font-semibold">Roger Jackson</h1>
                        <h2 class="text-[#94a3b8] font-normal text-[15px]">Job Seeker</h2>
                    </div>
                </div>

                <div class="flex flex-col items-center">
                    <img src="https://jobnova-shreethemes.vercel.app/static/media/04.35463172278c4051b5f4.jpg" class="rounded-full w-[200px] h-[200px]" alt="Description of Image">
                    <div class="mt-4 text-center">
                        <h1 class="text-[18px] font-plus-jakarta-sans font-semibold">Johnny English</h1>
                        <h2 class="text-[#94a3b8] font-normal text-[15px]">Job Seeker</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped>
.underline-hover::after {
  content: '';
  @apply absolute bottom-[-2px] left-0 w-0 h-[2px] bg-blue-500 transition-[width] duration-300;
}

.underline-hover:hover::after {
  @apply w-full;
}
</style>