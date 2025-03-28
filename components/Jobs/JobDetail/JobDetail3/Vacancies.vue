<template>
    <div class="flex justify-center mt-20 ">
        <div class="w-4/5 flex justify-between">
            <div class="text-center mx-auto max-w-[600px] ml-[21rem]">
                <h1 class="text-4xl">Related Vacancies</h1>
                <p class="text-[#94a3b8] text-xl opacity-90 pt-5 max-w-[600px]">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
        </div>
    </div>
    <div class="flex justify-center mt-[4rem]">
      <div class="w-4/5">
        <DataView :value="JobData" class="w-full">
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
    }
])
</script>

<style scoped>
.underline-hover::after {
  content: '';
  @apply absolute bottom-[-2px] left-0 w-0 h-[2px] bg-blue-500 transition-[width] duration-300;
}

.underline-hover:hover::after {
  @apply w-full;
}
</style>