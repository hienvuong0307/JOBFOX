<template>
    <div>
        <div class="flex flex-col">
            <div
                class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                style="height: 500px; width: 100%"
            >
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 class="text-4xl text-white font-semibold">Terms of Services</h2>
                </div>
            </div>

            <div class="absolute top-0 w-full flex justify-center z-10 mt-[15rem]">
                <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
            </div>

            <div class="absolute top-[62%] left-1/2 transform -translate-x-1/2 text-center">
                <Breadcrumb style="background-color: transparent" :model="items" />
            </div>
        </div>
    </div>
    <div class="flex justify-center mt-[6rem] mb-[10rem]">
        <div class="card max-w-[831px] w-full border-1 selection:card-body p-6 bg-white shadow rounded space-y-10">
            <div class="flex flex-col justify-start relative space-y-4">
                <span class="text-[20px] font-bold">Introduction :</span>
                <span class="text-[15px] text-[#94a3b8] leading-loose"
                    >It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</span
                >
            </div>

            <div class="flex flex-col justify-start relative space-y-4">
                <span class="text-[20px] font-bold">User Agreements :</span>
                <span class="text-[15px] text-[#94a3b8] leading-loose"
                    >The most well-known dummy text is the 'Lorem Ipsum', which is said to have <span class="text-[#ef4444] font-bold">originated</span> in the 16th century. Lorem Ipsum is <span class="text-[#ef4444] font-bold">composed</span> in a
                    pseudo-Latin language which more or less <span class="text-[#ef4444] font-bold">corresponds</span> to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also
                    <span class="text-[#ef4444] font-bold">incomprehensible</span>, but it imitates the rhythm of most European languages in Latin script. The <span class="text-[#ef4444] font-bold">advantage</span> of its Latin origin and the
                    relative <span class="text-[#ef4444] font-bold">meaninglessness</span> of Lorum Ipsum is that the text does not attract <span class="text-[#ef4444] font-bold">attention</span> to itself or distract the viewer's attention from the
                    layout.</span
                >
                <span class="text-[15px] text-[#94a3b8] leading-loose"
                    >There is now an <span class="text-[#ef4444] font-bold">abundance</span> of readable dummy texts. These are usually used when a text is <span class="text-[#ef4444] font-bold">required purely</span> to fill a space. These
                    alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or <span class="text-[#ef4444] font-bold">nonsensical</span> stories.</span
                >
                <span class="text-[15px] text-[#94a3b8] leading-loose"
                    >It seems that only <span class="text-[#ef4444] font-bold">fragments</span> of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at
                    various positions within the text.</span
                >
            </div>

            <div class="flex flex-col justify-start relative space-y-4">
                <div class="text-[20px] font-bold">Restrictions :</div>
                <div class="mt-3 gap-2 space-y-4">
                    <p class="text-[16px] text-[#94a3b8]">You are specifically restricted from all of the following :</p>
                    <div class="space-y-1">
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #94a3b8; margin-right: 1rem"></i>Digital Marketing Solutions for Tomorrow</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #94a3b8; margin-right: 1rem"></i>Our Talented & Experienced Marketing Agency</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #94a3b8; margin-right: 1rem"></i>Create your own skin to match your brand</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #94a3b8; margin-right: 1rem"></i>Digital Marketing Solutions for Tomorrow</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #94a3b8; margin-right: 1rem"></i>Our Talented & Experienced Marketing Agency</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #94a3b8; margin-right: 1rem"></i>Create your own skin to match your brand</p>
                    </div>
                </div>
            </div>

            <div class="text-[20px] font-bold">Users Question & Answer :</div>
            <div class="flex justify-center relative mb-[15rem]">
                <div class="flex flex-col items-center w-full">
                    <div class="w-full flex justify-center">
                        <div class="w-full">
                            <div class="pt-2" id="buyingquestion">
                                <div v-for="(item, index) in faqItems" :key="index" class="mt-2 flex justify-center">
                                    <div class="w-full">
                                        <h2 class="w-full flex justify-center">
                                            <button
                                                class="text-[18px] flex items-center justify-between text-left bg-gray-100 px-4 py-2 w-full h-[57px] rounded-xl transition-all duration-300"
                                                :class="{ 'bg-[#f3f4f6]': activeIndex !== index, 'text-[#3b82f6]': activeIndex === index }"
                                                @click="toggle(index)"
                                            >
                                                {{ item.question }}
                                                <i :class="['pi transition-transform duration-300 ease-in-out', activeIndex === index ? 'pi-angle-up rotate-180' : 'pi-angle-down rotate-180']" style="margin-left: auto" />
                                            </button>
                                        </h2>
                                        <div :id="'collapse' + index" class="" :class="{ block: activeIndex === index, hidden: activeIndex !== index }">
                                            <div class="w-full h-[57px] text-[16px] p-4 bg-white !text-slate-400">{{ item.answer }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8 space-x-2">
                <Button :label="'ACCEPT'" class="w-[107px] h-[38px] custom-btn1 !text-[17px] !font-bold rounded-full px-6 py-3" icon="" iconPos="right" style="color: #fff ; background-color: #3b82f6; border: 1px solid #3b82f6" />
                <Button :label="'DECILINE'" class=" w-[107px] h-[38px] custom-btn2  !text-[17px] !font-bold rounded-full px-6 py-3" icon="" iconPos="right" style="color: #0b63f3; background-color: #fff; border: 1px solid #3b82f6" />
            </div>
        </div>
    </div>
</template>
  
  <script setup>
import { onMounted, ref, watch } from 'vue';

const items = ref([{ label: 'JOBNOVA' }, { label: 'T&C' }]);
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
  .custom-btn2:hover {
    color: #fff !important;
    background-color: #3b82f6 !important;
}

.custom-btn1:hover {
    color: #fff !important;
    background-color: #0b63f3  !important;
}
</style>