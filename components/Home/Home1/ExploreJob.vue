<template>
    <div class="flex justify-center mt-20">
        <div class="w-4/5 flex justify-between">
            <div class="text-center mx-auto max-w-[600px] ml-[21rem]">
                <h1 class="text-4xl">Explore Jobs</h1>
                <p class="text-[#94a3b8] text-xl opacity-90 pt-5 max-w-[600px]">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
            <div class="grow"></div>
            <div class="flex items-center gap-3">
                <span class="relative inline-block underline-hover hover:text-blue-500 text-lg cursor-pointer">tiếp theo &#129122; </span>
            </div>
        </div>
    </div>
    <div class="flex justify-center mt-16">
        <div class="w-4/5">
            <div class="grid grid-cols-3 gap-10">
                <div v-for="job in jobListings" :key="job" class="bg-white rounded-lg shadow-1 p-4 shadow-md">
                    <div class="flex justify-between">
                        <div>
                            <div class="w-15 h-15 border-slate-100 border-solid rounded-lg absolute" style="box-shadow: 0 0 3px #1e293b26; border-radius: 6px">
                                <img :src="job.image" alt="" class="!w-14 !h-14 bg-white m-1 rounded-lg" style="height: 30px; width: 30px" />
                            </div>
                        </div>
                        <div class="mr-16">
                            <h1 class="text-xl font-bold">{{ job.company }}</h1>
                            <div class="flex items-center gap-2 mt-2">
                                <i class="pi pi-clock"></i>
                                <div>
                                    <span class="text-slate-500 opacity-90">{{ job.posted }}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Tag style="color: #3b82f6; background-color: #3b82f60d" :value="job.type"></Tag>
                        </div>
                    </div>
                    <div class="mt-4">
                        <h1 class="text-xl font-bold">{{ job.position }}</h1>
                        <div class="flex items-center gap-2 mt-2">
                            <i class="pi pi-map-marker"></i>
                            <span class="text-slate-500 opacity-90">{{ job.location }}</span>
                        </div>
                    </div>
                    <div class="mt-4">
                        <ProgressBar :value="50" :showValue="false" style="height: 6px; color: #3b82f6"></ProgressBar>
                    </div>
                    <div class="mt-4">
                        <div class="flex justify-between">
                            <div>
                                <span class="text-slate-500 opacity-90">{{ job.applied }} / {{ job.vacancy }} Applied</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const jobListings = ref([
    {
        company: 'Facebook',
        image: 'https://th.bing.com/th/id/OIP.0ZVtxCsGh9t7glXcX_DprQHaHa?rs=1&pid=ImgDetMain',
        posted: '2 days ago',
        type: 'Full Time',
        position: 'Web Designer / Developer',
        location: 'Australia',
        applied: 20,
        vacancy: 40
    },
    {
        company: 'Google',
        image: 'https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png',
        posted: '5 days ago',
        type: 'Part Time',
        position: 'Marketing Director',
        location: 'Russia',
        applied: 20,
        vacancy: 40
    },
    {
        company: 'Android',
        image: 'https://jobnova-shreethemes.vercel.app/static/media/android.7467c3318ee65ddf6461.png',
        name: 'Android',
        posted: '3 days ago',
        type: 'Remote',
        position: 'Application Developer',
        location: 'Germany',
        applied: 20,
        vacancy: 40
    },
    {
        company: 'Lenovo',
        image: 'https://jobnova-shreethemes.vercel.app/static/media/lenovo-logo.ad2ec171d6df96c88b9e.png',
        posted: '2 days ago',
        type: 'WFH',
        position: 'Senior Product Designer',
        location: 'Italy',
        applied: 20,
        vacancy: 40
    },
    {
        company: 'Spotify',
        image: 'https://static.vecteezy.com/system/resources/previews/018/930/750/large_2x/spotify-app-logo-spotify-icon-transparent-free-png.png',
        posted: '3 days ago',
        type: 'Full Time',
        position: 'C++ Developer',
        location: 'France',
        applied: 20,
        vacancy: 40
    },
    {
        company: 'Linkedin',
        image: 'https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png',
        posted: '7 days ago',
        type: 'Remote',
        position: 'Php Developer',
        location: 'Greece',
        applied: 20,
        vacancy: 40
    }
]);
</script>

<style scoped>
.underline-hover::after {
    content: '';
    @apply absolute bottom-[-3px] left-0 w-0 h-[2px] bg-blue-500 transition-[width] duration-300;
}

.underline-hover:hover::after {
    @apply w-full;
}

.bg-primary {
    background-color: #3b82f60d;
}
</style>