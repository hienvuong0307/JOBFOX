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

            <div class="absolute top-[43%] left-1/2 transform -translate-x-1/2 w-[70%] z-20 bg-white shadow-lg rounded-lg p-6">
                <div class="w-full flex">
                    <InputGroup class="!w-3/4">
                        <IconField iconPosition="left" class="!w-1/3">
                            <InputIcon class="pi pi-search"></InputIcon>
                            <InputText class="w-full !h-16 ml-9" v-model="value1" placeholder="Search" />
                        </IconField>
                        <IconField iconPosition="right" @mousedown="toggle" class="!w-1/3" aria-haspopup="true" aria-controls="overlay_menu">
                            <InputIcon class="pi pi-map-marker"></InputIcon>
                            <InputText class="w-full !h-16 ml-7" v-model="selectCountry" placeholder="Search" />
                            <InputIcon class="pi pi-chevron-down"></InputIcon>
                        </IconField>
                        <Menu ref="menu" id="overlay_menu" :popup="true">
                            <template #start>
                                <Listbox v-model="selectCountry" @click="toggle" :options="country" class="w-full md:w-14rem" :pt="{ root: { style: { border: 'none', 'box-shadow': 'none' } } }" />
                            </template>
                        </Menu>
                        <IconField iconPosition="right" @mousedown="toggle2" class="!w-1/3" aria-haspopup="true" aria-controls="overlay_menu2">
                            <InputIcon class="pi pi-briefcase"></InputIcon>
                            <InputText class="w-full !h-16 ml-9" v-model="selectJobType" placeholder="Search" />
                            <InputIcon class="pi pi-chevron-down"></InputIcon>
                        </IconField>
                        <Menu ref="menu2" id="overlay_menu2" :popup="true">
                            <template #start>
                                <Listbox v-model="selectJobType" @click="toggle2" :options="jobType" class="w-full md:w-14rem" :pt="{ root: { style: { border: 'none', 'box-shadow': 'none' } } }" />
                            </template>
                        </Menu>
                    </InputGroup>
                    <Button label="SEARCH" class="!w-1/4 !h-16 bg-[#0b63f3] text-[white] text-[15px]" severity="info" />
                </div>
            </div>
        <div class="w-full h-24"></div>
    </div>
    <div class="flex justify-center">
        <GridThree></GridThree>
    </div>
    <div class="flex justify-center mb-[10rem]">
        <ServiceJob/>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import ServiceJob from '~/components/Jobs/JobGrid/JobGrid3/ServicesJob.vue';
import GridThree from '~/components/Jobs/JobGrid/JobGrid3/GridThree.vue';
const menu = ref();
const selectCountry = ref();
const selectJobType = ref();
const menu2 = ref();
const country = ref([]);
const jobType = ref([]);
const data = ref(['Afghanistan', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Canada', 'Cape Verde', 'Denmark', 'Djibouti', 'Eritrea', 'Estonia', 'Gambia']);
const data2 = ref(['Part Time', 'Freelancer', 'Remote Work', 'Office Work']);
onMounted(()=>{
    country.value = data.value;
    jobType.value = data2.value;
});
watch(selectCountry, (newselectCountry)=>{
    if(newselectCountry === ""){
        country.value = data.value;
    }else if(newselectCountry !== "" && !data.value.includes(newselectCountry)){
        country.value = data.value.filter(x => x.toLowerCase().includes(newselectCountry.toLowerCase()));
    }else{
        country.value = data.value;
    }
});

watch(selectJobType, (newselectJobType)=>{
    if(newselectJobType === ""){
        jobType.value = data2.value;
    }else if(newselectJobType !== "" && !data.value.includes(newselectJobType)){
        jobType.value = data2.value.filter(x => x.toLowerCase().includes(newselectJobType.toLowerCase()));
    }else{
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

<style>

</style>