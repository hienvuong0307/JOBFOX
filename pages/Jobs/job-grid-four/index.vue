<template>
    <div>
        <div class="flex flex-col">
            <div
                class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                style="height: 400px; width: 100%"
            ></div>

            <div class="absolute top-0  w-full flex justify-center z-10 mt-[8rem]">
                <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
            </div>
            <h2 class="absolute top-[25%] left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold z-20">Job Vacancies</h2>


            <div class="w-full h-24"></div>
        </div>
        <div class="flex justify-center">
            <GridFour></GridFour>
        </div>


        <div class="flex justify-center mb-6">
            <ServiceJob />
        </div>
    </div>
</template>
  
  <script setup>
import { onMounted, ref, watch } from 'vue';
import GridFour from '~/components/Jobs/JobGrid/JobGrid4/GridFour.vue';
import ServiceJob from '~/components/Jobs/JobGrid/JobGrid4/ServicesJob.vue';

</script>
  
  <style>
</style>