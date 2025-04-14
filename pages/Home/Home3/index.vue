<template>
    <div class="relative w-full h-auto flex justify-center">
        <div class="absolute inset-0 bg-[url('https://jobnova-shreethemes.vercel.app/static/media/bg3.b53090a36ed85cc017cd.jpg')] bg-cover bg-center brightness-50"></div>
        <div class="absolute top-0 left-0 w-full flex justify-center z-10 mt-[27rem]">
            <img style="height: 600px; width: 4000px" src="@/assets/SVG/Untitled.svg" alt="Banner" />
        </div>

        <div class="flex w-4/5 gap-6 mt-3 relative z-20 ml-[10rem]">
            <div class="w-1/2 flex items-center">
                <div>
                    <h1 class="text-[48px] text-white font-bold max-w-md">Find a new job and build career</h1>
                    <div class="mt-8">
                        <span class="text-[#ffffff80] opacity-90 text-[17px]"> Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years. </span>
                    </div>
                    <div class="mt-8">
                        <InputGroup class="w-[641px] h-[76px] bg-white rounded-lg flex items-center px-4">
                            <div class="flex items-center gap-2 w-full">
                                <InputIcon class="pi pi-search text-[21px] text-[#3b82f6] ml-4" />
                                <InputText v-model="searchValue"
                                    class="w-full bg-transparent text-gray-500 text-[14px] ml-2 focus:outline-none"
                                    placeholder="Search your keaywords" />
                            </div>
                            <div class="absolute ml-[29.6rem]">
                                <Button label="Search" severity="info"
                                    class="ml-[3.8rem] px-4 w-[150px] h-[60px] bg-[#3b82f6] rounded-lg text-[white] text-[17px] "
                                    @click="handleSearch" />
                            </div>
                        </InputGroup>
                    </div>
                    <div class="mt-8">
                        <span class="text-[#ffffff80] opacity-90 text-[17px]"> <span class="text-[#ffffff]">Popular Searches :</span>Designer, Developer, Web, IOS, PHP Senior Engineer</span>
                    </div>
                </div>
            </div>
            <div class="flex mt-[16rem] ml-[4rem] translate-y-20">
                <div class="w-[80%] h-[81%] flex items-center justify-center bg-white rounded shadow p-1" style="box-shadow: 0 0 3px #1e293b26; border-radius: 6px; padding: 0.5rem">
                    <img src="https://jobnova-shreethemes.vercel.app/static/media/hero.16132c41b7103b868ff0.jpg" alt="" class="w-[200%] mt-20 mb-20" />
                    <div class="bg-white w-28 h-28 absolute rounded-full flex items-center justify-center">
                        <p class="text-blue-600 text-3xl">&#11208;</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-center mt-[5rem]">
        <div class="grid grid-cols-3 gap-[15rem]">
            <div>
                <h1 class="text-[42px] font-bold font-plus-jakarta-sans text-center">{{ formatNumber(counters.jobFulfillment) }}+</h1>
                <h1 class="text-center text-[#94a3b8] text-[15px]">Job Fulfillment</h1>
            </div>
            <div>
                <h1 class="text-[42px] font-bold font-plus-jakarta-sans text-center">{{ counters.branches }}+</h1>
                <h1 class="text-center text-[#94a3b8] text-[15px]">Branches</h1>
            </div>
            <div>
                <h1 class="text-[42px] font-bold font-plus-jakarta-sans text-center">{{ counters.years }}+</h1>
                <h1 class="text-center text-[#94a3b8] text-[15px]">Years Experience</h1>
            </div>
        </div>
    </div>

    <div class="flex justify-center">
        <ExploreJob></ExploreJob>
    </div>

    <div class="flex justify-center relative">
        <div class="flex justify-center w-4/5 mt-[10rem] gap-16 mb-[10rem]">
            <div class="relative">
                <img src="https://jobnova-shreethemes.vercel.app/static/media/ab01.016884c7bf778010e79c.jpg" class="rounded-md w-9/12" />
                <div class="bg-white absolute flex top-60 justify-center items-center w-[55%] rounded-md left-[47%]">
                    <img class="rounded-md w-11/12 m-3" src="https://jobnova-shreethemes.vercel.app/static/media/ab02.f851a3dde08585493f97.jpg" alt="" />
                </div>
                <div class="bg-white w-28 h-28 absolute top-48 right-[17%] rounded-full flex items-center justify-center">
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
                        <span class="text-slate-500 opacity-90 text-xl"> Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.<br /><br /> </span>
                    </div>
                    <div>
                        <i class="pi pi-check-circle" style="color: #3b82f6"></i><span class="text-xl opacity-80"> {{ ' Digital Marketing Solutions for Tomorrow ' }}<br /></span> <i class="pi pi-check-circle" style="color: #3b82f6"></i
                        ><span class="text-xl opacity-80">
                            Our
                            {{ ' Talented & Experienced Marketing Agency ' }}<br
                        /></span>
                        <i class="pi pi-check-circle" style="color: #3b82f6"></i><span class="text-xl opacity-80"> {{ ' Create your own skin to match your brand' }}</span>
                    </div>
                    <div class="mt-10">
                        <Button :label="'tất cả'" severity="info" icon="pi pi-arrow-right" iconPos="right" class="!text-xl" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-16">
        <h2 class="text-4xl font-bold text-center">Browse by Categories</h2>
        <p class="text-center opacity-75 pt-5">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
    </div>
    <div class="flex justify-center">
        <ServiceJob></ServiceJob>
    </div>

    <div class="flex justify-center mt-10 relative">
        <div class="flex justify-center w-4/5 mt-10 gap-16">
            <CompaniesJob></CompaniesJob>
            <div class="shrink-0"></div>
            <div class="relative">
                <div class="flex justify-end"><img src="https://jobnova-shreethemes.vercel.app/static/media/ab03.2b6e24b09b3690407ec5.jpg" class="rounded-md w-9/12 h-auto" /></div>
                <div class="bg-white absolute flex justify-center items-center w-[45%] rounded-md top-1/2 left-0">
                    <img class="rounded-md w-11/12 h-auto m-3" src="https://jobnova-shreethemes.vercel.app/static/media/ab04.c122948ac7bf15368325.jpg" alt="" />
                </div>
                <div class="bg-white w-28 h-28 absolute top-[37%] left-[15%] rounded-full flex items-center justify-center">
                    <p class="text-blue-600 text-3xl">&#11208;</p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-center">
        <Blog></Blog>
    </div>
</template>

<script setup>
import Blog from '~/components/Home/Home3/Blog.vue'; 
import CompaniesJob from '~/components/Home/Home3/CompaniesJob.vue';
import ExploreJob from '~/components/Home/Home3/ExploreJob.vue';
import ServiceJob from '~/components/Home/Home3/ServicesJob.vue';

import { onMounted, ref } from 'vue';

const finalValues = {
    jobFulfillment: 1548,
    branches: 25,
    years: 9
};

const counters = ref({
    jobFulfillment: 0,
    branches: 0,
    years: 0
});

const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Hàm animate số
const animateCounter = (key, endValue, duration) => {
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = endValue / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
        currentStep++;
        counters.value[key] = Math.min(Math.round(increment * currentStep), endValue);

        if (currentStep >= steps) {
            clearInterval(timer);
        }
    }, stepDuration);
};


onMounted(() => {
    animateCounter('jobFulfillment', finalValues.jobFulfillment, 900);
    animateCounter('branches', finalValues.branches, 1000);
    animateCounter('years', finalValues.years, 1000);
});
</script>

<style></style>