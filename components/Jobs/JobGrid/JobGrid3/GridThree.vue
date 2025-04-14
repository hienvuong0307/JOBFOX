<template>
 <div class="card w-4/5">
        <DataView :value="JobData" class="w-full"  paginator :rows="12">
            <template #list="slotProps">
                <div class="grid grid-cols-3 gap-4">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="">
                        <Card style="overflow: hidden">
                            <template #header>
                                <div class="flex items-center flex-1 m-5">
                                    <div class="bg-white border w-15 h-15 border-slate-100 border-solid rounded-lg">
                                        <img :src="item.image" alt="" class="!w-14 !h-14 bg-white m-1 rounded-lg">
                                    </div>
                                    <div class="grow"></div>
                                    <div class="flex gap-1 flex-1 justify-end">
                                        <p class="!text-slate-100 text-5xl cursor-pointer hover:!text-red-500 ">&#10084;</p>
                                            <Button class="w-14 h-10" icon="pi pi-bookmark" severity="info" text raised></Button>
                                            <Button  class="w-14 h-10" icon="pi pi-arrow-up-right" severity="info" text raised></Button>
                                    </div>
                                </div>
                            </template>
                            <template #title>
                                <p class="text-xl font-medium">{{ item.name }}</p>
                                <p class="text-xl font-medium">{{ item.title }}</p>
                            </template>
                            <template #subtitle>
                                <p class="text-xl opacity-75 ">{{ item.desc }}</p>
                            </template>
                            <template #footer>
                                <div class="flex gap-3 m-2">
                                    <Tag :value="item.type" />
                                    <Tag :value="item.city" />
                                    <Tag :value="item.salarytwo" />
                                </div>
                            </template>
                        </Card> 
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const JobData = ref([
    {
        id: 1,
        image: "https://img.freepik.com/premium-vector/social-media-icon-illustration-facebook-facebook-icon-vector-illustration_561158-2134.jpg?w=2000",
        name: 'Facebook',
        type: 'Full Time',
        title: 'Web Designer / Developer',
        city: 'Australia',
        desc: 'Looking for an experienced Web Designer for an our company.',
        salarytwo: '$4,000 - $4,500',
    },
    {
        id: 2,
        image: "https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png",
        name: 'Google',
        type: 'Part Time',
        title: 'Marketing Director',
        city: 'Australia',
        desc: 'Looking for an experienced Web Designer for an our company.',
        salarytwo: '$4,000 - $4,500',
    },
    {
        id: 3,
        image: "https://jobnova-shreethemes.vercel.app/static/media/android.7467c3318ee65ddf6461.png",
        name: 'Android',
        type: 'Remote',
        title: 'Application Developer',
        city: 'Australia',
        desc: 'Looking for an experienced Web Designer for an our company.',
        salarytwo: '$4,000 - $4,500',
    },
    {
        id: 4,
        image: "https://jobnova-shreethemes.vercel.app/static/media/lenovo-logo.ad2ec171d6df96c88b9e.png",
        name: 'Lenovo',
        type: 'WFH',
        title: 'Senior Product Designer',
        city: 'Australia',
        desc: 'Looking for an experienced Web Designer for an our company.',
        salarytwo: '$4,000 - $4,500',
    },
    {
        id: 5,
        image: "https://static.vecteezy.com/system/resources/previews/018/930/750/large_2x/spotify-app-logo-spotify-icon-transparent-free-png.png",
        name: 'Spotify',
        type: 'Full Time',
        title: 'C++ Developer',
        city: 'Australia',
        desc: 'Looking for an experienced Web Designer for an our company.',
        salarytwo: '$4,000 - $4,500',
    },
    {
        id: 6,
        image: "https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png",
        name: 'Linkedin',
        type: 'Remote',
        title: 'Php Developer',
        city: 'Australia',
        desc: 'Looking for an experienced Web Designer for an our company.',
        salarytwo: '$4,000 - $4,500',
    },
    {
        id: 7,
        image: "https://th.bing.com/th/id/OIP.NRvsQRItB4ipKPLo8E2noQHaHa?rs=1&pid=ImgDetMain",
        name: 'Circle CI',
        type: 'Full Time',
        title: 'Web Designer / Developer',
        city: 'Australia',
        desc: 'Looking for an experienced Web Designer for an our company.',
        salarytwo: '$4,000 - $4,500',
    },
    {
        id: 8,
        image: "https://jobnova-shreethemes.vercel.app/static/media/skype.ef82838bd043ebf691e8.png",
        name: 'Skype',
        type: 'Part Time',
        title: 'Marketing Director',
        city: 'Australia',
        desc: 'Looking for an experienced Web Designer for an our company.',
        salarytwo: '$4,000 - $4,500',
    },
    {
        id: 9,
        image: "https://jobnova-shreethemes.vercel.app/static/media/snapchat.3658a3d75aca5dfeec96.png",
        name: 'Snapchat',
        type: 'Remote',
        title: 'Application Developer',
        city: 'Australia',
        desc: 'Looking for an experienced Web Designer for an our company.',
        salarytwo: '$4,000 - $4,500',
    },
    {
        id: 10,
        image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/shree-4605561-3803486.png",
        name: 'Shreethemes',
        type: 'WFH',
        title: 'Senior Product Designer',
        city: 'Australia',
        desc: 'Looking for an experienced Web Designer for an our company.',
        salarytwo: '$4,000 - $4,500',
    },
    {
        id: 11,
        image: "https://static.vecteezy.com/system/resources/previews/018/930/479/large_2x/telegram-logo-telegram-icon-transparent-free-png.png",
        name: 'Telegram',
        type: 'Full Time',
        title: 'C++ Developer',
        city: 'Australia',
        desc: 'Looking for an experienced Web Designer for an our company.',
        salarytwo: '$4,000 - $4,500',
    },
    {
        id: 12,
        image: "https://static.vecteezy.com/system/resources/previews/016/716/480/original/whatsapp-icon-free-png.png",
        name: 'Whatsapp',
        type: 'Remote',
        title: 'Php Developer',
        city: 'Australia',
        desc: 'Looking for an experienced Web Designer for an our company.',
        salarytwo: '$4,000 - $4,500',
    }
])
</script>

<style>

</style>