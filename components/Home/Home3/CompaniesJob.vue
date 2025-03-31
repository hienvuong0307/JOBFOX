<template>
    <div class="w-1/3 flex items-center">
        <div class="absolute mb-[25rem]">
                <h2 class="text-4xl text-left font-bold opacity-90">Latest Blog or News</h2>
                <p class="text-left opacity-75 pt-5 max-w-[440px]">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-[4rem]">
            <div v-for="x in img" :key="x" class="">
                <Card style=" overflow: visible" class="h-[67px] w-[200px] bg-[#f8f9fc] ">
                    <template #content>
                        <div class="flex justify-center gap-5 items-center">
                            <div>
                                <div
                                    class="bg-white !border-solid !border-slate-200 rounded-md border w-14 h-14  absolute -mt-[2.6rem] -ml-11 justify-center ">
                                    <img :src="x.img" class="w-10 h-10 m-2 rounded-md" alt="">
                                </div>
                            </div>
                            <div class="-mt-7 ml-5">
                                <h2 class="font-bold text-xl">{{ x.name }}</h2>
                                <span class="opacity-80">{{ x.vacan }}</span>
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
    const img = ref([{img:'https://brandpalettes.com/wp-content/uploads/2018/05/Facebook-Logo-JPG.jpg',name:"Facebook",
    vacan: "40 Vacancy",},
    {img:"https://jobnova-shreethemes.vercel.app/static/media/google-logo.28878765ba39f327cf3e.png",
        name:"Google",
        vacan: "40 Vacancy",
    },
    {img:'https://jobnova-shreethemes.vercel.app/static/media/android.7467c3318ee65ddf6461.png',
        name:"Android",
        vacan: "40 Vacancy",
    },
    {img:"https://jobnova-shreethemes.vercel.app/static/media/lenovo-logo.ad2ec171d6df96c88b9e.png",
        name:"Lenovo",
        vacan: "40 Vacancy",
    },
    {img:'https://logospng.org/download/spotify/logo-spotify-icon-4096.png',
        name:"Spotify",
        vacan: "40 Vacancy",
    },
    {img:"https://static.vecteezy.com/system/resources/previews/018/930/587/large_2x/linkedin-logo-linkedin-icon-transparent-free-png.png",name:"Linkedin",
    vacan: "40 Vacancy",}]);
</script>

<style>

</style>