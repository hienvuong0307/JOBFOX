
<template>
    <div class="bg-[#3b82f6] w-full h-[800px] flex justify-center ">
        <div class=" flex w-4/5 gap-6 mt-3 ">
            <div class="w-1/2 flex items-center">
                <div>
                    <div class="">
                        <h1 class="text-[48px] text-white font-bold max-w-[49%]">
                            Get hired
                        </h1>
                        <h1 class="text-[48px] text-white font-bold max-w-[60%]">
                            by the popular
                            candidates.
                        </h1>
                    </div>
                    <div class="mt-8">
                        <span class="text-[#ffffff80] text-[17px] opacity-90">
                            Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit
                            excellent applicants over the years.
                        </span>
                    </div>
                    <div class="mt-8">
                        <InputGroup class="w-[546px] h-[50px] bg-white rounded-full flex items-center px-4">
                            <div class="flex items-center gap-2 w-full">
                                <InputIcon class="pi pi-search text-[21px] text-[black]" />
                                <InputText v-model="searchValue"
                                    class="w-full bg-transparent text-gray-500 text-[14px] focus:outline-none"
                                    placeholder="Search jobs & candidates ..." />
                            </div>
                            <div class="absolute ml-[29.6rem]">
                                <Button label="Search" severity="info"
                                    class="ml-3 px-4 w-[105px] h-[46px] bg-[#3b82f6] rounded-full text-[white] text-[17px] "
                                    @click="handleSearch" />
                            </div>
                        </InputGroup>
                    </div>
                </div>
            </div>
            <div class="w-1/2 h-auto flex items-center justify-end">
                <img src="https://jobnova-shreethemes.vercel.app/static/media/hero1.a22879249c0e43ecdddf.png" alt=""
                    class="w-4/5 mt-20 mb-20">
            </div>
        </div>
    </div>
    <div class="flex justify-center relative">
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
    <PopularCategories></PopularCategories>
    <ExploreJob></ExploreJob>
    <ServiceJob></ServiceJob>
    <div class="flex justify-center mt-10 relative">
        <div class="flex justify-center w-4/5 mt-10 gap-16">
            <CompaniesJob></CompaniesJob>
            <div class="shrink-0"></div>
            <div class="relative">
                <div class="flex justify-end"><img
                        src="https://jobnova-shreethemes.vercel.app/static/media/ab03.2b6e24b09b3690407ec5.jpg"
                        class="rounded-md w-9/12 h-auto" /></div>
                <div class="bg-white absolute flex justify-center items-center w-[45%] rounded-md top-1/2 left-0">
                    <img class="rounded-md w-11/12 h-auto m-3"
                        src="https://jobnova-shreethemes.vercel.app/static/media/ab04.c122948ac7bf15368325.jpg" alt="">
                </div>
                <div
                    class="bg-white w-28 h-28 absolute top-[37%] left-[15%] rounded-full flex items-center justify-center">
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
import Blog from '~/components/Home/Home1/Blog.vue';
import CompaniesJob from '~/components/Home/Home1/CompaniesJob.vue';
import ExploreJob from '~/components/Home/Home1/ExploreJob.vue';
import PopularCategories from '~/components/Home/Home1/PopularCategories.vue';
import ServiceJob from '~/components/Home/Home1/ServicesJob.vue';
import { useRouter } from 'vue-router';
import {ref} from 'vue';
const router = useRouter();


</script>

<style></style>
