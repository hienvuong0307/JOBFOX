<template>
    <div>
        <div class="flex flex-col">
            <div
                class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                style="height: 400px; width: 100%"
            ></div>

            <div class="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-center">
                <img style="height: 300px; width: 400px" src="@/assets/img/logo3.png" alt="" />
            </div>

            <div class="absolute top-0 w-full flex justify-center z-10 mt-[8rem]">
                <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
            </div>
            <h2 class="absolute top-[30%] left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold z-20">Back-End Developer</h2>

            <div class="absolute top-[48%] left-1/2 transform -translate-x-1/2 text-center">
                <Breadcrumb style="background-color: transparent" :model="items" />
            </div>
            <div class="w-full h-24"></div>
        </div>
        <div class="flex justify-center">
            <DetailOne></DetailOne>
        </div>

        <div class="mb-[10rem]">
            <Vacancies />
        </div>
    </div>
</template>
  
  <script setup>
  definePageMeta({
  layout: 'client'
});
import { onMounted, ref, watch } from 'vue';
import DetailOne from '~/components/Jobs/JobDetail/JobDetail1/DetailOne.vue';
import Vacancies from '~/components/Jobs/JobDetail/JobDetail1/Vacancies.vue';
const items = ref([{ label: 'JOBNOVA' }, { label: 'JOBS' }, { label: 'JOB DETAIL' }]);
</script>
  
  <style>
</style>