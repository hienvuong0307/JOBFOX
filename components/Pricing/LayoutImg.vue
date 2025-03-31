<template>
    <div class="w-10/12 h-full relative">
        <div class="w-4/5 h-[90%] bg-slate-400 absolute rounded-lg top-0 left-0 overflow-hidden">
            <img :src="props.data[0]" alt="" class="!w-full !h-full" />
        </div>
        <div class="w-2/5 h-[45%] bg-slate-50 rounded-lg absolute bottom-0 right-0 overflow-hidden">
            <img :src="props.data[1]" alt="" class="scale-90 !w-full !h-full rounded-lg" />
        </div>
        <div class="absolute rounded-full w-24 h-24 bg-white flex justify-center items-center right-[12%] bottom-[38%]">
            <div class="flex justify-center items-center !text-blue-600"><p>&#9658;</p></div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps(['data']);
</script>

<style>
</style>