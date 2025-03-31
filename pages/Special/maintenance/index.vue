<template>
    <div class="relative h-screen w-full">
        <BackGroundImage class="fixed top-0 left-0" />
        <div class="absolute flex justify-center top-24 left-1/2 -translate-x-1/2">
            <div class="flex items-center justify-center bg-white rounded-full w-24 h-24">
                <p class="text-6xl text-center">&#129693;</p>
            </div>
        </div>
        <div class="absolute flex justify-center top-56 left-1/2 -translate-x-1/2">
            <div>
                <p class="text-5xl font-medium text-white text-center">We are back soon...</p>
                <p class="text-xl font-medium text-white text-center pt-8 opacity-90">Find Jobs, Employment & Career Opportunities. Some of the companies we've</p>
                <p class="text-xl font-medium text-white text-center pt-1 opacity-90">helped recruit excellent applicants over the years.</p>
            </div>
        </div>
        <div class="absolute flex justify-center top-72 translate-y-3/4 left-1/2 -translate-x-1/2">
            <div>
                <p class="text-7xl text-white">{{ time.min >= 10 ? time.min : '0' + time.min }} : {{ time.sec >= 10 ? time.sec : '0' + time.sec }}</p>
                <p class="text-center text-2xl text-white pt-5">MINUTES</p>
            </div>
        </div>
        <div class="absolute flex justify-center bottom-60 translate-y-3/4 left-1/2 -translate-x-1/2">
            <div class="flex border border-solid border-slate-200 rounded-full !w-[500px] bg-white h-14">
                <input class="!outline-none m-3 flex-1" />
                <Button label="Đăng Ký" rounded class="m-1" severity="info"></Button>
            </div>
        </div>
        <div class="absolute flex justify-center bottom-5 left-1/2 -translate-x-1/2">
            <p class="text-center text-white">© 2025 Jobnova. Design with <span class="text-red-600">&#10084; </span> by Shreethemes.</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BackGroundImage from '~/components/Sepcial/BackGroundImage.vue';

const time = ref({
    min: 59,
    sec: 59
});

let timer = null;

onMounted(() => {
    timer = setInterval(() => {
        if (time.value.sec < 1) {
            time.value.sec = 59;
            time.value.min--;
        } else {
            time.value.sec--;
        }
    }, 1000);
});

onUnmounted(() => {
    clearInterval(timer); 
});
</script>

<style>
</style>