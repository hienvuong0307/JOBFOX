<template>
    <div class="">
        <div class="flex flex-col">
            <div class="w-full h-24"></div>
        </div>
        <div class="flex justify-center">
            <div class="card w-4/5">
                <div
                    class="bg-[url('https://jobnova-shreethemes.vercel.app/static/media/bg5.634b5f6c21dce4640652.jpg')] flex justify-center items-center object-cover relative shadow-[0_0_3px_#1e293b26] rounded-md"
                    style="height: 250px; width: 100%; background-position: center 50%"
                ></div>

                <div class="absolute top-[45%] left-[21%] transform -translate-x-1/2 flex items-center gap-4 text-left">
                    <img src="https://jobnova-shreethemes.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg" alt="" class="w-[110px] h-[110px] rounded-full object-cover border-2 border-white shadow-lg" />
                    <div class="mt-[1rem]">
                        <p class="font-bold text-[18px]">Mr. Calvin Carlo</p>
                        <p class="text-[#94a3b8] text-[17px]">Web Designer</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center mt-[5.5rem]">
            <Profile></Profile>
        </div>

        <div class="mb-10"></div>
    </div>

    <div class="mt-[5.5rem] mb-[5.5rem]">
            <div>
                <h2 class="text-4xl text-center">Popular Categories</h2>
                <p class="text-center text-slate-500 opacity-90 pt-5">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>

        <div class="mt-20 flex justify-center">
            <DataView :value="data" paginator class="w-3/4 [&_.p-paginator-pages]:hidden [&_.p-paginator-first]:hidden [&_.p-paginator-prev]:hidden [&_.p-paginator-next]:hidden [&_.p-paginator-last]:hidden" :rows="4" >
                <template #list="slp">
                    <div class="grid grid-cols-12 gap-5">
                        <div v-for="item in slp.items" :key="item" class="col-span-3">
                            <div class="border rounded-md border-solid border-slate-200">
                                <div class="relative">
                                    <div class="absolute left-[-5px] top-[-6px] w-[75px] h-[75px] z-[2] overflow-hidden"></div>
                                    <div class="absolute right-2 top-2">
                                        <i class="pi pi-heart-fill text-[#dee2e6] hover:text-red-500 cursor-pointer transition-colors duration-200" style="font-size: 1.5rem;"></i>
                                    </div>
                                </div>

                                <div class="flex flex-col gap-3">
                                    <div class="flex justify-center mt-5">
                                        <img class="w-20 h-20 rounded-full" src="https://jobnova-shreethemes.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg" alt="" />
                                    </div>
                                    <div class="flex justify-center"><p>Steven Townsend</p></div>
                                    <div class="flex justify-center"><p>Marketing Director</p></div>
                                    <div class="flex justify-center gap-2">
                                        <Tag :value="'Design'" severity="info" />
                                        <Tag :value="'UI'" severity="info" />
                                        <Tag :value="'UX'" severity="info" />
                                        <Tag :value="'Digital'" severity="info" />
                                    </div>
                                    <div class="flex justify-center">
                                        <div class="flex">
                                            <div class="flex flex-col justify-center">
                                                <p class="text-center">Salary:</p>
                                                <p class="text-center">$5k - $6k</p>
                                            </div>
                                            <div class="flex flex-col justify-center">
                                                <p class="text-center">Experience:</p>
                                                <p class="text-center">{{ item }} Years</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-center mb-5">
                                        <div class="flex justify-center">
                                            <div class="flex gap-2">
                                                <Button label="VIEW PROFILE" severity="info" />
                                                <Button icon="pi pi-comment" severity="info" text />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </DataView>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import Profile from '~/components/Candidate/CandidateProfile/Profile.vue';
const data = ref(Array.from({ length: 30 }, (value, index) => index + 1));
</script>

<style>
</style>