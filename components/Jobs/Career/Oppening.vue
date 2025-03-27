<template>
    <div class="card mt-1 w-4/5">
        <div class="mt-16 ">
                <h2 class="text-[30px] font-semibold text-center">Job Openings</h2>
                <p class="text-center text-xl opacity-75 pt-5 max-w-[80%] ml-[8.5rem]">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews
                    on over 30000+ companies worldwide.</p>
            </div>
        <div class="flex justify-center mt-14">
            <div class="space-y-8">
            <div class="overflow-hidden shadow-sm border rounded-lg w-[926px] h-[110px]">
                <div class="flex justify-between items-center mt-[1.5rem] mx-[3rem]">
                    <div class="space-y-2">
                        <p class="text-[20px] font-bold">Frontend Developer</p>
                        <p class="text-[16px] text-[#94a3b8]">Total Openings: 1</p>
                    </div>
                    <Button :label="'APPLY NOW'" class="custom-btn !text-xl rounded-full px-6 py-3" icon="pi pi-arrow-right" iconPos="right" style="color: #0b63f3; background-color: #3b82f60d ; border: 2px solid #3b82f60d " />
                </div>
            </div>


            <div class="overflow-hidden shadow-sm border rounded-lg w-[926px] h-[110px]">
                <div class="flex justify-between items-center mt-[1.5rem] mx-[3rem]">
                    <div class="space-y-2">
                        <p class="text-[20px] font-bold">Backend Developer</p>
                        <p class="text-[16px] text-[#94a3b8]">Total Openings: 3</p>
                    </div>
                    <Button :label="'APPLY NOW'" class="custom-btn !text-xl rounded-full px-6 py-3" icon="pi pi-arrow-right" iconPos="right" style="color: #0b63f3; background-color: #3b82f60d ; border: 2px solid #3b82f60d " />
                </div>
            </div>


            <div class="overflow-hidden shadow-sm border rounded-lg w-[926px] h-[110px]">
                <div class="flex justify-between items-center mt-[1.5rem] mx-[3rem]">
                    <div class="space-y-2">
                        <p class="text-[20px] font-bold">Web Developer</p>
                        <p class="text-[16px] text-[#94a3b8]">Total Openings: 2</p>
                    </div>
                    <Button :label="'APPLY NOW'" class="custom-btn !text-xl rounded-full px-6 py-3" icon="pi pi-arrow-right" iconPos="right" style="color: #0b63f3; background-color: #3b82f60d ; border: 2px solid #3b82f60d " />
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style>
.custom-btn:hover {
    color: #fff !important;
    background-color: #0b63f3 !important;
}
</style>