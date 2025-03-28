<template>
    <div class="relative w-full h-auto flex justify-center">
        <div
            class="absolute inset-0 bg-cover bg-center"
            style="height: 1000px; width: 100%; background-image: linear-gradient(0deg, #3b82f6 0%, #161c2d80 100%), url('https://jobnova-shreethemes.vercel.app/static/media/bg.9f5fc6c84f7a4eb68e0c.jpg')"
        ></div>
        <div class="absolute top-0 left-0 w-full flex justify-center z-10 mt-[36rem]">
            <img style="height: 500px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
        </div>
        <div class="flex flex-col items-center justify-center w-full relative z-20 mt-[19rem]">
            <div class="w-4/5 text-center ">
                <h1 class="text-[48px] text-white font-bold mx-auto max-w-[40%]">Find & Hire Experts for any Job</h1>

                <p class="mt-4 text-slate-300 opacity-90 text-[17px] max-w-[45%] mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>
            </div>

            <div class="relative w-full flex justify-center mt-8">
                <div class="w-[70%] bg-white shadow-lg rounded-lg p-6">
                    <div class="w-full flex">
                        <InputGroup class="w-3/4 flex">
                            <IconField iconPosition="left" class="w-1/3">
                                <InputIcon class="pi pi-search"></InputIcon>
                                <InputText class="w-full h-16" v-model="value1" placeholder="Search" />
                            </IconField>

                            <IconField iconPosition="right" @mousedown="toggle" class="w-1/3" aria-haspopup="true" aria-controls="overlay_menu">
                                <InputIcon class="pi pi-map-marker"></InputIcon>
                                <InputText class="w-full h-16" v-model="selectCountry" placeholder="Location" />
                                <InputIcon class="pi pi-chevron-down"></InputIcon>
                            </IconField>
                            <Menu ref="menu" id="overlay_menu" :popup="true">
                                <template #start>
                                    <Listbox v-model="selectCountry" @click="toggle" :options="country" class="w-full md:w-14rem" />
                                </template>
                            </Menu>

                            <IconField iconPosition="right" @mousedown="toggle2" class="w-1/3" aria-haspopup="true" aria-controls="overlay_menu2">
                                <InputIcon class="pi pi-briefcase"></InputIcon>
                                <InputText class="w-full h-16" v-model="selectJobType" placeholder="Job Type" />
                                <InputIcon class="pi pi-chevron-down"></InputIcon>
                            </IconField>
                            <Menu ref="menu2" id="overlay_menu2" :popup="true">
                                <template #start>
                                    <Listbox v-model="selectJobType" @click="toggle2" :options="jobType" class="w-full md:w-14rem" />
                                </template>
                            </Menu>
                        </InputGroup>

                        <Button label="SEARCH" class="w-1/4 h-16 bg-[#0b63f3] text-white font-semibold rounded-lg ml-2" style="background-color: #3b82f6" />
                    </div>
                </div>
            </div>
            <div class="w-4/5 text-center flex justify-center">
                <p class="mt-4 text-[#ffffff80] text-[16px] opacity-90"><span class="text-white font-semibold">Popular Searches:</span> Designer, Developer, Web, IOS, PHP Senior Engineer</p>
            </div>
        </div>
    </div>



    <div class="mt-[30rem]">
        <PopularCategories></PopularCategories>
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


    
    <div class="flex justify-center">
        <ExploreJob></ExploreJob>
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
import { onMounted, ref, watch } from 'vue';
import Blog from '~/components/Home/Home2/Blog.vue'; 
import CompaniesJob from '~/components/Home/Home2/CompaniesJob.vue';
import ExploreJob from '~/components/Home/Home2/ExploreJob.vue';
import PopularCategories from '~/components/Home/Home2/PopularCategories.vue';

const menu = ref();
const selectCountry = ref();
const selectJobType = ref();
const menu2 = ref();
const country = ref([]);
const jobType = ref([]);
const data = ref(['Afghanistan', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Canada', 'Cape Verde', 'Denmark', 'Djibouti', 'Eritrea', 'Estonia', 'Gambia']);
const data2 = ref(['Part Time', 'Freelancer', 'Remote Work', 'Office Work']);
onMounted(() => {
    country.value = data.value;
    jobType.value = data2.value;
});
watch(selectCountry, (newselectCountry) => {
    if (newselectCountry === '') {
        country.value = data.value;
    } else if (newselectCountry !== '' && !data.value.includes(newselectCountry)) {
        country.value = data.value.filter((x) => x.toLowerCase().includes(newselectCountry.toLowerCase()));
    } else {
        country.value = data.value;
    }
});

watch(selectJobType, (newselectJobType) => {
    if (newselectJobType === '') {
        jobType.value = data2.value;
    } else if (newselectJobType !== '' && !data.value.includes(newselectJobType)) {
        jobType.value = data2.value.filter((x) => x.toLowerCase().includes(newselectJobType.toLowerCase()));
    } else {
        jobType.value = data2.value;
    }
});

const toggle = (event) => {
    menu.value.toggle(event);
};
const toggle2 = (event) => {
    menu2.value.toggle(event);
};
</script>

<style></style>