<template>
    <div class="flex justify-center mt-40">
        <div>
            <div>
                <h2 class="text-4xl font-bold text-center">Trending Services</h2>
                <p class="text-center opacity-75 pt-5">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
        </div>
    </div>
    <div class="flex justify-center mt-16">
        <div class="w-4/5">
            <Carousel :value="value1" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="4000"  :showIndicators="false">
                <template #item="slotProps">
                    <div class="relative w-[210px] h-[276px] !border-1 !border-solid !border-black rounded-lg shadow-1 m-2 p-4 bg-cover bg-center bg-no-repeat flex items-center justify-center group" :style="`background-image: url(${slotProps.data.image})`">
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#161c2de6] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>

                        <div class="relative flex flex-col items-start justify-center font-semibold w-full h-full mt-[13rem]">
                            <p class="relative text-[19px] font-bold z-10 text-white transition-colors duration-500 ease-in-out group-hover:text-blue-500">
                                {{ slotProps.data.category }}
                            </p>
                            <p class="relative text-[19px] font-bold z-10 text-white transition-colors duration-500 ease-in-out group-hover:text-blue-500">
                                {{ slotProps.data.jobs }}
                            </p>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref([
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/01.505f19f275234d37ae32.jpg',
        category: 'Product & Branding',
        jobs: 'Design'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/02.b483e9502d81d8a68583.jpg',
        category: 'Wordpress',
        jobs: 'Development'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/03.c538ca3b9bc8f2a5378d.jpg',
        category: 'Audio & Video',
        jobs: 'Editing'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/04.411571f01d1c369b26cf.jpg',
        category: 'Admin & Video',
        jobs: 'Support'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/05.5b3d1c4f08cc1fa2f8a4.jpg',
        category: 'UX/UI Designer'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/06.296e0ddb4aa6faa9d579.jpg',
        category: 'Digital Marketing'
    }
]);
</script>

<style>
</style>