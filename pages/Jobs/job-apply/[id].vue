<template>
    <div class="relative">
        <div>
            <div class="flex flex-col">
                <div class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                    style="height: 500px; width: 100%">
                </div>
                <div class="absolute top-0 w-full flex justify-center z-10 mt-[15rem]">
                    <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
                </div>
            </div>
        </div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span class="text-3xl text-white">Apply For Job</span>
        </div>

        <div class="absolute top-[88%] left-1/2 transform -translate-x-1/2 text-center z-10">
            <Breadcrumb style="background-color: transparent" :model="items">
                <template #item="{ item }">
                    <NuxtLink 
                        :to="item.to" 
                        class="!cursor-pointer"
                    >
                        <span class="text-slate-400 hover:text-white text-2xl">
                            {{ item.label }}
                        </span>
                    </NuxtLink>
                </template>
            </Breadcrumb>
        </div>
    </div>

    <div class="flex justify-center mt-14 mb-14">
        <FormApply />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import FormApply from '~/components/Jobs/JobApply/FormApply.vue';

const route = useRoute();
const jobId = route.params.id;
provide('jobId', jobId);

// Update breadcrumb with proper navigation
const items = ref([
    { label: 'Jobnova', to: '/' },
    { label: 'Jobs', to: '/jobs' },
    { label: 'Apply', to: '' } // Current page doesn't need link
]);
</script>

<style scoped>
.breadcrumb-link {
    text-decoration: none;
    color: inherit;
}
</style>