<template>
    <div class="bg-white">
        <div class="flex flex-col">
 
            <div class="relative w-full">
    <div
        class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] 
        flex justify-center items-center object-cover relative"
        style="height: 350px; width: 100%"
    >
    </div>
    <div class="absolute top-0  w-full flex justify-center z-10 mt-[5rem]">
                <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
            </div>

    <div class="absolute top-[80%] left-1/2 transform -translate-x-1/2 w-[77%] border rounded-lg shadow-lg bg-white p-6 z-20">
        <div class="w-full flex items-center">
            <InputGroup class="!w-3/4">
                <div class="bg-white border w-25 h-20 border-slate-100 border-solid rounded-lg flex items-center justify-center">
                    <img src="https://jobnova-shreethemes.vercel.app/static/media/lenovo-logo.ad2ec171d6df96c88b9e.png" 
                        alt="Lenovo Logo" class="w-16 h-16 bg-white m-1 rounded-lg" />
                </div>
                <div class="ml-4">
                    <div class="text-2xl font-semibold">Lenovo</div>
                    <div class="flex items-center text-gray-500 mt-3">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="fea icon-sm me-1 text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div class="text-xl">Canberra, Australia</div>
                    </div>
                </div>
            </InputGroup>
            <div class="ml-16">
                <Button 
                    label="FOLLOW" 
                    class="!w-79 !h-12 text-white mr-2" 
                    style="background-color: #3b82f6; border: 1px solid #3b82f60d; box-shadow: 0 3px 5px 0 #3b82f61a; color: white; font-size: 12px; padding: 7px 16px"
                />
                <Button 
                    label="SEE JOBS" 
                    class="!w-79 !h-12 text-white mr-2" 
                    style="background-color: #3b82f60d; border: 1px solid #3b82f60d; box-shadow: 0 3px 5px 0 #3b82f61a; color: #3b82f6; font-size: 12px; padding: 7px 16px"
                />
            </div>
        </div>
    </div>
</div>

            <div class="w-full h-24"></div>
        </div>
        <div class="flex justify-center">
            <GridTProfile></GridTProfile>
        </div>
        <div class="grid justify-center text-center mt-14 gap-3">
            <div class="text-[28px] font-bold">Related Companies</div>
            <div class="text-slate-400">Search all the open positions on the web. Get your own personalized salary estimate.</div>
            <div class="text-slate-400">Read reviews on over 30000+ companies worldwide.</div>
        </div>
        <div class="flex justify-center">
            <LinkUp></LinkUp>
        </div>
    </div>
</template>

<script setup>
import GridTProfile from '~/components/Employers/EmployersProfile/GridProfile.vue';
import LinkUp from '~/components/Employers/EmployersProfile/LinkUp.vue';
</script>

<style>
.bg-white {
    background-color: white;
}
</style>