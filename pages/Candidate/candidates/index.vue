<template>
    <div>
        <div>
            <div>
                <div class="flex flex-col">
                    <div class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                        style="height: 500px; width: 100%"></div>
                    <div class="absolute top-0 w-full flex justify-center z-10 mt-[15rem]">
                        <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
                    </div>
                </div>
            </div>
            <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p class="text-3xl text-white text-center">Candidates</p>
            </div>
            <div class="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Breadcrumb style="background-color: transparent" :model="bread">
                    <template #item="{ item }">
                        <a class="!cursor-pointer" href=""><span class="text-slate-400 hover:text-white text-2xl">{{
                                item.label }}</span></a>
                    </template>
                </Breadcrumb>
            </div>
        </div>
        <div class="mt-48 flex justify-center">
            <DataView :value="data" paginator class="w-3/4" :rows="12">
                <template #list="slp">
                    <div class="grid grid-cols-12 gap-5">
                        <div v-for="item in slp.items" :key="item" class="col-span-3">
                            <div class="border rounded-md border-solid border-slate-200">
                                <div class="relative">
                                    <div
                                        class="absolute left-[-5px] top-[-6px] w-[75px] h-[75px] z-[2] overflow-hidden">
                                        <span
                                            class="absolute left-[-22px] top-[17px] rotate-[-45deg] w-[100px] text-white text-center bg-yellow-400 shadow-md text-sm font-semibold flex items-center justify-center">
                                            <i class="pi pi-star-fill"></i>
                                        </span>
                                    </div>


                                    <div
                                        class="absolute left-[-5px] top-[-6px] w-[75px] h-[75px] z-[2] overflow-hidden">
                                    </div>           
                                    <div class="absolute right-2 top-2">
                                        <i class="pi pi-heart-fill text-[#dee2e6] hover:text-red-500 cursor-pointer transition-colors duration-200"
                                            style="font-size: 1.5rem;"></i>
                                    </div>
                                </div>

                                <div class="flex flex-col gap-3">
                                    <div class="flex justify-center mt-5">
                                        <img class="w-20 h-20 rounded-full"
                                            src="https://jobnova-shreethemes.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg"
                                            alt="" />
                                    </div>
                                    <div class="flex justify-center">
                                        <p>Steven Townsend</p>
                                    </div>
                                    <div class="flex justify-center">
                                        <p>Marketing Director</p>
                                    </div>
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
        <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Footer from '~/components/Candidate/Candidates/Footer.vue';
const data = ref(Array.from({ length: 30 }, (value, index) => index + 1));
const bread = ref([{ label: 'Jobnova' }, { label: 'Candidates' }]);
</script>

<style></style>