<template>
    <div>
        <div class="relative">
            <div class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                style="height: 500px; width: 100%">
                <div
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 class="text-4xl text-white font-bold">Pricing Plans</h2>
                </div>
            </div>

            <div class="absolute top-0  w-full flex justify-center z-10 mt-[15rem]">
                <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
            </div>

            <div class="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 text-center z-10">
                <Breadcrumb style="background-color: transparent" :model="items">
                    <template #item="{ item }">
                        <a class="!cursor-pointer" href=""><span class="text-slate-400 hover:text-white text-xl">{{
                                item.label }}</span></a>
                    </template>
                </Breadcrumb>
            </div>
        </div>
        <div class="flex justify-center mt-28 mb-28">
            <Services />
        </div>
        <div class="flex justify-center mt-10 mb-10 ">
            <div class="grid grid-cols-2 w-4/5 gap-9">
                <div>
                    <LayoutImg :data="da" />
                </div>
                <div class="flex flex-col gap-5">
                    <div class=" h-auto flex justify-center mt-[-2rem]">
                        <div class="w-4/5 mt-5">
                            <h3 class="text-[28px] font-semibold">Frequently Asked Questions</h3>
                            <div class="mt-5 w-[120%]">
                                <span class="text-slate-500 opacity-90 text-xl">Search all the open positions on the
                                    web. Get
                                    your own personalized salary estimate. Read reviews on over 30000+ companies
                                    worldwide.<br /><br /> </span>
                            </div>

                            <div class="pt-2" id="buyingquestion">
                                <div v-for="(item, index) in faqItems" :key="index" class="mt-2 h-full">
                                    <h2 class="">
                                        <button
                                            class="text-[17px] font-medium flex items-center justify-between text-left bg-gray-100 px-4 py-2 w-[530px] h-[57px] rounded-xl transition-all duration-300"
                                            :class="{ 'bg-[#f3f4f6]': activeIndex !== index, 'text-[#3b82f6]': activeIndex === index }"
                                            @click="toggle(index)">
                                            {{ item.question }}
                                            <i :class="['pi transition-transform duration-300 ease-in-out', activeIndex === index ? 'pi-angle-up rotate-180' : 'pi-angle-down rotate-180']"
                                                style="margin-left: auto;" />
                                        </button>
                                    </h2>
                                    <div :id="'collapse' + index" class=""
                                        :class="{ block: activeIndex === index, hidden: activeIndex !== index }">
                                        <div class="w-[530px] h-[57px text-[16px]  p-4 bg-white !text-slate-400">{{
                                            item.answer
                                            }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LayoutImg from '~/components/Pricing/LayoutImg.vue';
import Services from '~/components/Pricing/Services.vue';
const items = ref([{ label: 'Jobnova' }, { label: 'PRICING' }]);
const da = ref(['https://jobnova-shreethemes.vercel.app/static/media/ab01.016884c7bf778010e79c.jpg', 'https://jobnova-shreethemes.vercel.app/static/media/ab02.f851a3dde08585493f97.jpg']);
const faqItems = ref([
    { question: 'How does it work ?', answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
    { question: 'Do I need a designer to use Jobnova ?', answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
    { question: 'What do I need to do to start selling ?', answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' },
    { question: 'What happens when I receive an order ?', answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.' }
]);

const activeIndex = ref(0);

const toggle = (index) => {
    if (activeIndex.value !== index) {
        activeIndex.value = index;
    }
};
</script>

<style></style>