<template>
    <div>
        <div class="flex flex-col">
            <div
                class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                style="height: 500px; width: 100%"
            >
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 class="text-4xl text-white font-semibold">Privacy Policy</h2>
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
                <span class="text-[20px] font-bold">Overview :</span>
                <span class="text-[15px] text-[#94a3b8] leading-loose"
                    >It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</span
                >
                <span class="text-[15px] text-[#94a3b8] leading-loose"
                    >In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the
                    text were subsequently included in DTP programmes such as PageMaker etc.</span
                >
                <span class="text-[15px] text-[#94a3b8] leading-loose"
                    >There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical
                    stories.</span
                >
            </div>

            <div class="flex flex-col justify-start relative space-y-4">
                <div class="text-[20px] font-bold">We use your information to :</div>
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

            <div class="flex flex-col justify-start relative space-y-4">
                <span class="text-[20px] font-bold">User Agreements :</span>
                <span class="text-[15px] text-[#94a3b8] leading-loose"
                    >In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the
                    text were subsequently included in DTP programmes such as PageMaker etc.</span
                >
            </div>
                <div class="space-x-2">
                    <Button :label="'PRINT'" class="w-[90px] h-[38px] custom-btn !text-[14px] !font-bold rounded-full px-6 py-3" icon="" iconPos="right" style="color: #fff; background-color: #3b82f6; border: 1px solid #3b82f6" />
                </div>
            </div>
    </div>
</template>
  
  <script setup>
import { onMounted, ref, watch } from 'vue';

const items = ref([{ label: 'JOBNOVA' }, { label: 'PRIVACY' }]);
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
.custom-btn:hover {
    color: #fff !important;
    background-color: #0b63f3 !important;
}
</style>