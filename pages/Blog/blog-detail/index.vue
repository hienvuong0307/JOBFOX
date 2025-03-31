<template>
    <div>
        <div class="flex flex-col">
            <div
                class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                style="height: 500px; width: 100%"
            >
                <div class="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 class="text-[17px] text-white/50">Latest News</h2>
                    <h2 class="text-[33px] text-white font-bold">Blogs & News</h2>
                </div>
            </div>

            <div class="absolute top-0 w-full flex justify-center z-10 mt-[15rem]">
                <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
            </div>

            <div class="absolute top-[62%] left-1/2 transform -translate-x-1/2 text-center">
                <Breadcrumb style="background-color: transparent" :model="items" />
            </div>
        </div>

        <div class="flex justify-center mb-[2rem]">
            <Blog></Blog>            
        </div>
     
    </div>
</template>
  
  <script setup>
import { ref } from 'vue';
import Blog from '~/components/Blog/BlogDetail/Blog.vue';
const items = ref([{ label: 'JOBNOVA' }, { label: 'BLOGS' }]);


</script>
  
  <style>
</style>