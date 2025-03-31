<template>
    <div class="relative">
        <div class="flex flex-col">
            <div class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                style="height: 500px; width: 100%">
                <div
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 class="text-4xl text-white font-bold">Job Categories</h2>
                </div>
            </div>

            <div class="absolute top-0 w-full flex justify-center z-10 mt-[15rem]">
                <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
            </div>

            <div class="absolute top-[24%] left-1/2 transform -translate-x-1/2 text-center">
                <Breadcrumb style="background-color: transparent" :model="items" />
            </div>
        </div>
        <div class="flex justify-center mt-16 mb-16">
            <FormPost />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import FormPost from '~/components/Jobs/JobPost/FormPost.vue';
const items = ref([{ label: 'Jobnova' }, { label: 'Job' }, { label: 'Job Post' }]);
</script>

<style></style>