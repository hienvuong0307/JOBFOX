<template>
    <div class="card w-4/5">
        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-1 flex flex-col">
                <div class="sticky top-[5rem] self-start">
                    <div class="w-full rounded-2xl  bg-white shadow-[0_0_3px_#1e293b26] p-4">
                        <div class="mt-5 space-y-5">
                            <div>
                                <div class="flex justify-between text-[15px] font-bold">Search Properties</div>
                                <IconField>
                                    <InputText
                                        v-model="value3"
                                        type="text"
                                        size="large"
                                        placeholder="Search..."
                                        class="mt-2 w-[25rem]"
                                        style="background-color: #fff; border: 1px solid #f1f5f9; border-radius: 6px; color: #1e293b; font-size: 15px; font-weight: 500; line-height: 26px"
                                    />
                                    <InputIcon class="pi pi-search" />
                                </IconField>
                            </div>

                            <div>
                                <div class="flex justify-between text-[15px] font-bold">Categories</div>
                                <select
                                    style="background-color: #fff; border: 1px solid #f1f5f9; border-radius: 6px; color: #1e293b; font-size: 15px; font-weight: 500; line-height: 26px"
                                    class="form-select form-control border mt-2 w-[25rem] h-[45px]"
                                    aria-label="Default select example"
                                >
                                    <option v-for="(job, index) in jobOptions" :key="index" :value="job.value">
                                        {{ job.label }}
                                    </option>
                                </select>
                            </div>

                            <div>
                                <div class="flex justify-between text-[15px] font-bold">Location</div>
                                <select
                                    style="background-color: #fff; border: 1px solid #f1f5f9; border-radius: 6px; color: #1e293b; font-size: 15px; font-weight: 500; line-height: 26px"
                                    class="form-select form-control border mt-2 w-[25rem] h-[45px]"
                                    aria-label="Default select example"
                                >
                                    <option v-for="(job, index) in jobLocation" :key="index" :value="job.value">
                                        {{ job.label }}
                                    </option>
                                </select>
                            </div>
                            
                            <div>
                                <div class="flex justify-between text-[15px] font-bold">Job Types</div>
                                <div class="card flex justify-start ml-[-1rem] mt-[-1rem]">
                                    <div class="flex flex-col gap-4">
                                        <div v-for="category in categories" :key="category.key" class="flex items-center w-[22rem]">
                                            <div class="flex items-center gap-2 flex-grow">
                                                <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
                                                <label :for="category.key">{{ category.name }}</label>
                                            </div>
                                            <span class="bg-[#3b82f60d] text-[#3b82f6] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full ml-auto">
                                                {{ category.count }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div class="flex justify-between text-[15px] font-bold">Salary</div>
                                <div class="card flex justify-start ml-[-1rem] mt-[-1rem]">
                                    <div class="flex flex-col gap-4">
                                        <div v-for="salary in salaries" :key="salary.key" class="flex items-center w-[22rem]">
                                            <div class="flex items-center gap-2 flex-grow">
                                                <Checkbox v-model="selectedCategories" :inputId="salary.key" name="salary" :value="salary.name" />
                                                <label :for="salary.key">{{ salary.name }}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button label="SEND MESSAGE" class="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition" style="background-color: #0b63f3; border-color: #0b63f3; color: #fff" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-2 mb-6">
                <DataView :value="JobData" class="w-full" paginator :rows="12">
                    <template #list="slotProps">
                        <div class="grid grid-cols-2 gap-4">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="">
                                <Card style="overflow: hidden; box-shadow: 0 0 3px #1e293b26; border: 2rem">
                                    <template #header>
                                        <div class="flex items-center flex-1 m-5"></div>
                                    </template>
                                    <template #title>
                                        <p class="text-[18px] font-bold">{{ item.title }}</p>
                                    </template>
                                    <template #subtitle>
                                        <div class="">
                                            <span class="text-[15px] opacity-75"><i class="pi pi-clock" style="color: #3b82f6"></i> {{ item.desc }}</span>
                                        </div>
                                    </template>
                                    <template #footer>
                                        <div class="flex gap-3 m-2">
                                            <Tag style="background-color: #3b82f60d; color: #3b82f6" :value="item.type" />
                                            <span class="text-[14px] opacity-75 ml-[10rem]"><i class="pi pi-dollar" style="color: #3b82f6"></i> {{ item.salarytwo }}/mo</span>
                                        </div>
                                        <div class="w-full h-[1px] bg-slate-100 mt-5"></div>
                                        <div class="flex items-center mb-5">
                                            <div class="w-15 h-15 border-slate-100 border-solid rounded-lg mt-12" style="box-shadow: 0 0 3px #1e293b26; border-radius: 6px">
                                                <img :src="item.image" alt="" class="!w-14 !h-14 bg-white m-1 rounded-lg" style="height: 65px; width: 65px" />
                                            </div>
                                            <div class="grid mt-[2rem] ml-[1rem]">
                                                <div class="text-xl font-medium flex mt-[1rem]">{{ item.name }}</div>
                                                <div class="text-[15px] text-[#94a3b8] font-medium flex mt-[0.4rem] gap-2"><i class="pi pi-map-marker mt-[0.3rem]" style="color: #94a3b8"></i>{{ item.country }}</div>
                                            </div>
                                        </div>
                                    </template>
                                </Card>
                            </div>
                        </div>
                    </template>
                </DataView>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const jobOptions = ref([{ label: 'Web Designer' }, { label: 'Web Developer' }, { label: 'UI / UX Designer' }]);

const jobLocation = ref([{ label: 'New York' }, { label: 'North Caroline' }, { label: 'South Caroline' }]);

const categories = ref([
    { name: 'Full Time', key: 'A', count: 3 },
    { name: 'Part Time', key: 'M', count: 7 },
    { name: 'Freelancing', key: 'P', count: 4 },
    { name: 'Fixed Price', key: 'R', count: 6 },
    { name: 'Remote', key: 'P', count: 7 },
    { name: 'Hourly Basis', key: 'R', count: 44 }
]);

const salaries = ref([
    { name: '10k - 15k', key: 'A', },
    { name: '15k - 25k', key: 'M', },
    { name: 'more than 25K', key: 'P', }
]);

const JobData = ref([
    {
        id: 1,
        image: 'data:image/png;base64,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',
        name: 'Facebook',
        type: 'Full Time',
        title: 'Web Designer / Developer',
        desc: 'Posted 2 Days ago',
        country: 'Australia',
        salarytwo: '950 - 1100'
    },
    {
        id: 2,
        image: 'https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png',
        name: 'Google',
        type: 'Part Time',
        title: 'Marketing Director',
        desc: 'Posted 5 Days ago',
        country: 'Russia',
        salarytwo: '950 - 1100'
    },
    {
        id: 3,
        image: 'https://jobnova-shreethemes.vercel.app/static/media/android.7467c3318ee65ddf6461.png',
        name: 'Android',
        type: 'Remote',
        title: 'Application Developer',
        desc: 'Posted 3 Days ago',
        country: 'Germany',
        salarytwo: '950 - 1100'
    },
    {
        id: 4,
        image: 'https://jobnova-shreethemes.vercel.app/static/media/lenovo-logo.ad2ec171d6df96c88b9e.png',
        name: 'Lenovo',
        type: 'WFH',
        title: 'Senior Product Designer',
        desc: 'Posted 7 Days ago',
        country: 'India',
        salarytwo: '950 - 1100'
    },
    {
        id: 5,
        image: 'https://static.vecteezy.com/system/resources/previews/018/930/750/large_2x/spotify-app-logo-spotify-icon-transparent-free-png.png',
        name: 'Spotify',
        type: 'Full Time',
        title: 'C++ Developer',
        desc: 'Posted 4 Days ago',
        country: 'USA',
        salarytwo: '950 - 1100'
    },
    {
        id: 6,
        image: 'https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png',
        name: 'Linkedin',
        type: 'Remote',
        title: 'Php Developer',
        desc: 'Posted 2 Days ago',
        country: 'Canada',
        salarytwo: '950 - 1100'
    },
    {
        id: 7,
        image: 'https://th.bing.com/th/id/OIP.NRvsQRItB4ipKPLo8E2noQHaHa?rs=1&pid=ImgDetMain',
        name: 'Circle CI',
        type: 'Full Time',
        title: 'Web Designer / Developer',
        desc: 'Posted 2 Days ago',
        country: 'Australia',
        salarytwo: '950 - 1100'
    },
    {
        id: 8,
        image: 'https://jobnova-shreethemes.vercel.app/static/media/skype.ef82838bd043ebf691e8.png',
        name: 'Skype',
        type: 'Part Time',
        title: 'Marketing Director',
        desc: 'Posted 9 Days ago',
        country: ' Italy',
        salarytwo: '950 - 1100'
    },
    {
        id: 9,
        image: 'https://jobnova-shreethemes.vercel.app/static/media/snapchat.3658a3d75aca5dfeec96.png',
        name: 'Snapchat',
        type: 'Remote',
        title: 'Application Developer',
        desc: 'Posted 3 Days ago',
        country: 'UK',
        salarytwo: '950 - 1100'
    },
    {
        id: 10,
        image: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/shree-4605561-3803486.png',
        name: 'Shreethemes',
        type: 'WFH',
        title: 'Senior Product Designer',
        desc: 'Posted 6 Days ago',
        country: 'Nepal',
        salarytwo: '950 - 1100'
    },
    {
        id: 11,
        image: 'https://static.vecteezy.com/system/resources/previews/018/930/479/large_2x/telegram-logo-telegram-icon-transparent-free-png.png',
        name: 'Telegram',
        type: 'Full Time',
        title: 'C++ Developer',
        desc: 'Posted 8 Days ago',
        country: 'China',
        salarytwo: '950 - 1100'
    },
    {
        id: 12,
        image: 'https://static.vecteezy.com/system/resources/previews/016/716/480/original/whatsapp-icon-free-png.png',
        name: 'Whatsapp',
        type: 'Remote',
        title: 'Php Developer',
        desc: 'Posted 2 Days ago',
        country: 'Japan',
        salarytwo: '950 - 1100'
    },
    {
        id: 13,
        image: 'https://static.vecteezy.com/system/resources/previews/018/930/479/large_2x/telegram-logo-telegram-icon-transparent-free-png.png',
        name: 'Telegram',
        type: 'Full Time',
        title: 'C++ Developer',
        desc: 'Posted 8 Days ago',
        country: 'China',
        salarytwo: '950 - 1100'
    },
    {
        id: 14,
        image: 'https://static.vecteezy.com/system/resources/previews/018/930/479/large_2x/telegram-logo-telegram-icon-transparent-free-png.png',
        name: 'Telegram',
        type: 'Full Time',
        title: 'C++ Developer',
        desc: 'Posted 8 Days ago',
        country: 'China',
        salarytwo: '950 - 1100'
    },
    {
        id: 15,
        image: 'https://static.vecteezy.com/system/resources/previews/016/716/480/original/whatsapp-icon-free-png.png',
        name: 'Whatsapp',
        type: 'Remote',
        title: 'Php Developer',
        desc: 'Posted 2 Days ago',
        country: 'Japan',
        salarytwo: '950 - 1100'
    }
]);
</script>

<style>
</style>