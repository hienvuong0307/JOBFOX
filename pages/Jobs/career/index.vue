<template>
    <div class="bg-[white]">
        <div class="flex flex-col">
            <div
                class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                style="height: 500px; width: 100%"
            >
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 class="text-4xl text-white font-bold">Job Opening</h2>
                </div>
            </div>

            <div class="absolute top-0 w-full flex justify-center z-10 mt-[15rem]">
                <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
            </div>

            <div class="absolute top-[62%] left-1/2 transform -translate-x-1/2 text-center">
                <Breadcrumb style="background-color: transparent" :model="items" />
            </div>
        </div>

        <div class="mt-[3rem]">
            <ServiceJob></ServiceJob>
        </div>



        <div class="flex justify-center relative mt-16">
        <div class="flex justify-center w-4/5 mt-10 gap-16">
            <div class="relative">
                <img src="https://jobnova-shreethemes.vercel.app/static/media/ab01.016884c7bf778010e79c.jpg"
                    class="rounded-md w-9/12" />
                <div class="bg-white absolute flex top-60 justify-center items-center w-[55%] rounded-md left-[47%]">
                    <img class="rounded-md w-11/12 m-3"
                        src="https://jobnova-shreethemes.vercel.app/static/media/ab02.f851a3dde08585493f97.jpg" alt="">
                </div>
                <div
                    class="bg-white w-28 h-28 absolute top-48 right-[17%] rounded-full flex items-center justify-center">
                    <p class="text-blue-600 text-3xl">&#11208;</p>
                </div>
            </div>
            <div class="w-2/4 h-auto flex justify-center mt-10">
                <div class="w-4/5 mt-5">
                    <h3 class="text-[28px] font-semibold">
                          Millions of jobs.<br />
                        Find the one that's right for you.
                    </h3>
                    <div class="mt-5 w-[120%]">
                        <span class="text-slate-500 opacity-90 text-xl">
                            Search all the open positions on the web. Get your own personalized salary estimate.
                            Read
                            reviews
                            on
                            over 30000+ companies worldwide.<br /><br />
                        </span>
                    </div>
                    <div>
                        <i class="pi pi-check-circle" style="color: #3b82f6"></i><span class="text-xl opacity-80">
                            {{ " Digital Marketing Solutions for Tomorrow " }}<br /></span>
                        <i class="pi pi-check-circle" style="color: #3b82f6"></i><span class="text-xl opacity-80">
                            Our
                            {{ " Talented & Experienced Marketing Agency " }}<br /></span>
                        <i class="pi pi-check-circle" style="color: #3b82f6"></i><span class="text-xl opacity-80">
                            {{ " Create your own skin to match your brand" }}</span>
                    </div>
                    <div class="mt-10">
                        <Button :label="'tất cả'" severity="info" icon="pi pi-arrow-right" iconPos="right"
                            class="!text-xl" />
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="mt-[9rem] mb-[2rem] flex justify-center">
            <Oppening></Oppening>
        </div>

    </div>
</template>
  
  <script setup>
import { onMounted, ref, watch } from 'vue';
import ServiceJob from '~/components/Jobs/Career/ServicesJob.vue';
import Oppening from '~/components/Jobs/Career/Oppening.vue';

const items = ref([{ label: 'JOBNOVA' }, { label: 'CAREER' }]);

</script>
  
  <style>
</style>