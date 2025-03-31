<template>
    <div class="grid grid-cols-4 gap-10 w-4/5">
        <div v-for="item in 4" :key="item">
            <Card class="overflow-hidden">
                <template #header>
                    <div>
                        <div class="flex justify-center items-center bg-slate-800 w-full h-44 relative">
                            <div>
                                <p class="text-white text-2xl text-center">Starter</p>
                                <p class="opacity-85 text-2xl font-light text-slate-200 text-center pt-4">Suitable for Starter</p>
                            </div>
                            <div class="absolute top-0 right-0 bg-yellow-400 w-20 h-20">
                                <div class="flex h-full items-center justify-center translate-x-3 -translate-y-3">
                                    <p class="origin-center rotate-45 text-white">Best</p>
                                </div>
                            </div>
                            <div class="absolute bg-slate-800 w-36 h-16 origin-center rotate-45 top-5 -right-1"></div>
                            <div class="absolute bg-slate-800 w-32 h-10 origin-center rotate-45 -top-3 -right-16"></div>
                        </div>
                        <div class="flex justify-center items-center bg-slate-200 w-full h-20">
                            <p class="text-center"><sup>$</sup> <span class="text-2xl">9.99 </span> /mo</p>
                        </div>
                    </div>
                </template>

                <template #content>
                    <p><span class="pi pi-arrow-circle-right"></span> Full Access</p>
                    <p><span class="pi pi-arrow-circle-right"></span> Enhanced Security</p>
                    <p><span class="pi pi-arrow-circle-right"></span> Source Files</p>
                    <p><span class="pi pi-arrow-circle-right"></span> 1 Domain Free</p>
                    <p><span class="pi pi-arrow-circle-right"></span> Free Appointments</p>
                    <p><span class="pi pi-arrow-circle-right"></span> Free Installment</p>
                </template>
                <template #footer>
                    <div class="flex gap-4 mt-1">
                        <Button label="Cancel" severity="secondary" outlined class="w-full" />
                        <Button label="Save" class="w-full" />
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const da = ref([]);
</script>

<style>
</style>