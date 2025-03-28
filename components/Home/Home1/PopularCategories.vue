<template>
      <div class="flex justify-center mt-40">
        <div>
            <div>
                <h2 class="text-4xl text-center">Popular Categories</h2>
                <p class="text-center text-slate-500 opacity-90 pt-5">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
        </div>
    </div>
    <div class="flex justify-center mt-16">
        <div class=" w-4/5">
             <Carousel :value="value1" :numVisible="5" :numScroll="1" :responsiveOptions="responsiveOptions" circular
                :autoplayInterval="3000"  :showIndicators="false">
                <template #item="slotProps">
                    <div
                        class=" w-auto h-72 !border-1 !border-solid !border-black rounded-lg shadow-1 m-2 p-3 bg-slate-50 shadow-lg flex items-center justify-center">
                        <div class="flex flex-col gap-6">
                            <div class="">
                                <div class="flex justify-center align-items-center">
                                    <Button style="color: #3b82f6; background-color: #3b82f60d; width: 50px; height: 50px" text raised :icon="`pi ${slotProps.data.icon}`" size="large" class=""></Button>
                                </div>
                            </div>
                            <div class=" font-medium">
                                <p class="text-center font-semibold text-xl">{{ slotProps.data.category }}</p>
                            </div>
                            <div class="flex justify-center align-items-center">
                                <p class="text-center opacity-75 text-xl">{{ 
                                    `${slotProps.data.jobs} jobs`
                                    }}</p>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref([
    {
        "icon": "pi-android",
        "category": "Software Engineering",
        "jobs": 60
    },
    {
        "icon": "pi-clone",
        "category": "Human Resource",
        "jobs": 74
    },
    {
        "icon": "pi-microchip",
        "category": "IT & Networking",
        "jobs": 20
    },
    {
        "icon": "pi-barcode",
        "category": "Sales & Marketing",
        "jobs": 35
    },
    {
        "icon": "pi-bitcoin",
        "category": "Marketing & Communication",
        "jobs": 20
    },
    {
        "icon": "pi-at",
        "category": "Project Management",
        "jobs": 35
    },
    {
        "icon": "pi-box",
        "category": "Customer Service",
        "jobs": 46
    },
    {
        "icon": "pi-building-columns",
        "category": "Software Engineering",
        "jobs": 60
    }
]);
</script>

<style>

</style>