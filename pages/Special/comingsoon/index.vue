<template>
    <div class="relative h-screen w-full">
        <BackGroundImage class="fixed top-0 left-0" />
        <div class="absolute flex justify-center top-16 left-1/2 -translate-x-1/2">
            <div class="flex items-center justify-center bg-white rounded-full w-24 h-24">
                <p class="text-6xl text-center">&#129693;</p>
            </div>
        </div>
        <div class="absolute flex justify-center top-56 left-1/2 -translate-x-1/2">
            <div>
                <p class="text-5xl font-medium text-white text-center">We are coming soon...</p>
                <p class="text-xl font-medium text-white text-center pt-8 opacity-90">Find Jobs, Employment & Career Opportunities.</p>
                <p class="text-xl font-medium text-white text-center pt-1 opacity-90">Some of the companies we've helped recruit excellent applicants over the years.</p>
            </div>
        </div>
        
        <div v-if="countdown" class="absolute flex justify-center top-80 translate-y-3/4 left-1/2 -translate-x-1/2">
            <div class="grid grid-cols-4 gap-10">
                <div v-for="(value, key) in countdown" :key="key" class="w-36 h-36 flex justify-center items-center border-4 border-solid border-white/30 rounded-lg bg-white/30 backdrop-invert backdrop-opacity-20">
                    <div>
                        <p class="text-white text-5xl text-center">{{ value }}</p>
                        <p class="mt-3 text-center text-white text-2xl">{{ key.toUpperCase() }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute flex justify-center bottom-5 left-1/2 -translate-x-1/2">
            <p class="text-center text-white">© 2025 Jobnova. Design with <span class="text-red-600">&#10084;</span> by Shreethemes.</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BackGroundImage from '~/components/Sepcial/BackGroundImage.vue';

const countdown = ref(null);
const targetDate = new Date('2025-06-01T00:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        countdown.value = { day: 0, hours: 0, min: 0, sec: 0 };
        clearInterval(timer);
        return;
    }

    countdown.value = {
        day: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        min: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        sec: Math.floor((timeLeft % (1000 * 60)) / 1000),
    };
};

let timer = null;
onMounted(() => {
    countdown.value = { day: 0, hours: 0, min: 0, sec: 0 }; 
    updateCountdown();
    timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
    clearInterval(timer);
});
</script>
