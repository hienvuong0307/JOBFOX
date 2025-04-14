<template>
    <div class="relative h-screen w-full">
        <BackGroundImage class="fixed top-0 left-0" />
        <div class="absolute flex justify-center top-24 left-1/2 -translate-x-1/2">
            <div class="flex items-center justify-center rounded-full w-[80px] h-[80px]">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU3OEUwMzE4NzdCNTExRUU5OUZCQzU0RDg3OTBDMjkwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU3OEUwMzE5NzdCNTExRUU5OUZCQzU0RDg3OTBDMjkwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTc4RTAzMTY3N0I1MTFFRTk5RkJDNTREODc5MEMyOTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTc4RTAzMTc3N0I1MTFFRTk5RkJDNTREODc5MEMyOTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7zCIATAAAGT0lEQVR42uxdaWwVVRS+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"
                    alt="Logo" class="" />
            </div>
        </div>
        <div class="absolute flex justify-center top-56 left-1/2 -translate-x-1/2">
            <div>
                <p class="text-5xl font-medium text-white text-center">We are back soon...</p>
                <p class="text-xl font-medium text-white text-center pt-8 opacity-90">Find Jobs, Employment & Career
                    Opportunities. Some of the companies we've</p>
                <p class="text-xl font-medium text-white text-center pt-1 opacity-90">helped recruit excellent
                    applicants over the years.</p>
            </div>
        </div>
        <div class="absolute flex justify-center top-72 translate-y-3/4 left-1/2 -translate-x-1/2">
            <div>
                <p class="text-7xl text-white">{{ time.min >= 10 ? time.min : '0' + time.min }} : {{ time.sec >= 10 ?
                    time.sec : '0' + time.sec }}</p>
                <p class="text-center text-2xl text-white pt-5">MINUTES</p>
            </div>
        </div>
        <div class="absolute flex justify-center bottom-60 translate-y-3/4 left-1/2 -translate-x-1/2">
            <div class="flex border border-solid border-slate-200 rounded-full !w-[500px] bg-white h-14">
                <input class="!outline-none m-3 flex-1" />
                <Button label="Đăng Ký" rounded class="mr-[2rem]" severity="info"></Button>
            </div>
        </div>
        <div class="absolute flex justify-center bottom-5 left-1/2 -translate-x-1/2">
            <p class="text-center text-white">© 2025 Jobnova. Design with <span class="text-red-600">&#10084; </span> by
                Shreethemes.</p>
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

<style></style>