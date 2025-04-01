<template>
    <div>
        <div class="flex flex-col">
            <div
                class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                style="height: 500px; width: 100%"
            >
                <div class="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 class="text-[33px] text-white font-bold">Hello!</h2>
                    <h2 class="text-[33px] text-white font-bold">How can we help you?</h2>
                </div>
            </div>
            <div class="absolute top-[32%] left-[30%]">
                <div class="flex justify-center mt-10">
                    <form class="mx-auto relative w-[600px] max-w-lg">
                        <input type="text" id="help" name="name" class="rounded-full bg-[#fffc] border border-gray-300 px-4 py-2 w-[600px] h-[50px] pr-[60px]" placeholder="Search your questions or topic..." />
                        <button type="submit" class="absolute left-[35.2rem]  top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 h-[46px] w-[105px]  rounded-full">Search</button>
                    </form>
                </div>
            </div>

            <div class="absolute top-0 w-full flex justify-center z-10 mt-[15rem]">
                <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
            </div>

            <div class="absolute top-[62%] left-1/2 transform -translate-x-1/2 text-center">
                <Breadcrumb style="background-color: transparent" :model="items" />
            </div>
        </div>
        <div class="mt-[6rem] mb-[4rem]">
            <h2 class="text-4xl font-bold text-center">Find the help you need</h2>
            <p class="text-center opacity-75 pt-5">We are a huge marketplace dedicated to connecting great artists of all Jobnova with their fans and unique token collectors!</p>
        </div>

        <div class="flex justify-center gap-1">
            <div class="grid justify-center text-center mt-14 gap-3 w-[24%]">
                <div class="">
                    <div class="h-[60px] w-[60px] shadow-[0_0_3px_#1e293b26] rounded-[6px] bg-blue-500 bg-opacity-5 ml-[117px]">
                        <div class="flex justify-center"><i class="pi pi-question-circle mt-4" style="font-size: 2rem; color: #3b82f6"></i></div>
                    </div>
                    <div class="mt-10 justify-center text-center">
                        <div class="mt-1 font-bold text-[18px]">FAQs</div>
                        <div class="mt-5 text-[#94a3b8] text-[15px] font-plus-jakarta-sans max-w-[290px]">The phrasal sequence of the is now so that many campaign and benefit</div>
                        <div class="mt-5 text-[#3b82f6] text-[15px] font-plus-jakarta-sans">Read More<i class="pi pi-arrow-right absolute" style="font-size: 1rem; margin-left: 1rem; margin-top: 0.4rem"></i></div>
                    </div>
                </div>
            </div>
            <div class="grid justify-center text-center mt-14 gap-3 w-[24%]">
                <div class="">
                    <div class="h-[60px] w-[60px] shadow-[0_0_3px_#1e293b26] rounded-[6px] bg-blue-500 bg-opacity-5 ml-[117px]">
                        <div class="flex justify-center"><i class="pi pi-bookmark mt-4" style="font-size: 2rem; color: #3b82f6"></i></div>
                    </div>
                    <div class="mt-10 justify-center text-center">
                        <div class="mt-1 font-bold text-[18px]">Guides / Support</div>
                        <div class="mt-5 text-[#94a3b8] text-[15px] font-plus-jakarta-sans max-w-[290px]">The phrasal sequence of the is now so that many campaign and benefit</div>
                        <div class="mt-5 text-[#3b82f6] text-[15px] font-plus-jakarta-sans">Read More<i class="pi pi-arrow-right absolute" style="font-size: 1rem; margin-left: 1rem; margin-top: 0.4rem"></i></div>
                    </div>
                </div>
            </div>
            <div class="grid justify-center text-center mt-14 gap-3 w-[24%]">
                <div class="">
                    <div class="h-[60px] w-[60px] shadow-[0_0_3px_#1e293b26] rounded-[6px] bg-blue-500 bg-opacity-5 ml-[117px]">
                        <div class="flex justify-center"><i class="pi pi-cog mt-4" style="font-size: 2rem; color: #3b82f6"></i></div>
                    </div>
                    <div class="mt-10 justify-center text-center">
                        <div class="mt-1 font-bold text-[18px]">Support Request</div>
                        <div class="mt-5 text-[#94a3b8] text-[15px] font-plus-jakarta-sans max-w-[290px]">The phrasal sequence of the is now so that many campaign and benefit</div>
                        <div class="mt-5 text-[#3b82f6] text-[15px] font-plus-jakarta-sans">Read More<i class="pi pi-arrow-right absolute" style="font-size: 1rem; margin-left: 1rem; margin-top: 0.4rem"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-[10rem]">
            <h2 class="text-4xl font-bold text-center">Get Started</h2>
            <p class="text-center opacity-75 pt-5">We are a huge marketplace dedicated to connecting great artists of all Jobnova with their fans and unique token collectors!</p>
        </div>
        <div class="flex justify-center relative mb-[10rem] mr-[38rem]">
            <div class="flex justify-center w-4/5 mt-24 gap-16">
                <div class="w-2/4 h-auto flex justify-center mt-[-2rem]">
                    <div class="w-4/5">
                        <div class="pt-2" id="buyingquestion">
                            <div v-for="(item, index) in faqItems" :key="index" class="mt-2 h-full">
                                <h2 class="">
                                    <button
                                        class="text-[16px] flex items-center justify-between text-left bg-gray-100 px-4 py-2 w-[831px] h-[56px] rounded-xl transition-all duration-300"
                                        :class="{ 'bg-[#f3f4f6]': activeIndex !== index, 'text-[#3b82f6]': activeIndex === index }"
                                        @click="toggle(index)"
                                    >
                                        {{ item.question }}
                                        <i :class="['pi transition-transform duration-300 ease-in-out', activeIndex === index ? 'pi-angle-up rotate-180' : 'pi-angle-down rotate-180']" style="margin-left: auto" />
                                    </button>
                                </h2>
                                <div :id="'collapse' + index" class="" :class="{ block: activeIndex === index, hidden: activeIndex !== index }">
                                    <div class="w-[831px] h-[56px] text-[16px] p-4 bg-white !text-slate-400">{{ item.answer }}</div>
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
const items = ref([{ label: 'JOBNOVA' }, { label: 'HELP CENTER' }]);
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
  
  <style>
</style>