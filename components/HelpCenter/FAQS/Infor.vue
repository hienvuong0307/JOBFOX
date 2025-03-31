<template>
    <div class="card w-4/5">
        <div class="grid grid-cols-3 gap-4">
            <!-- Sidebar -->
            <div class="col-span-1 flex flex-col">
                <div class="sticky top-[5rem] self-start">
                    <div class="w-full bg-white rounded-xl border-[1px] shadow-lg p-4">
                        <div class="mt-5 w-[25rem] mb-[1rem]">
                            <div class="space-y-4 ml-[2rem]">
                                <p 
                                    v-for="section in sections" 
                                    :key="section.id"
                                    :class="{ 'text-[#3b82f6]': activeSection === section.id }"
                                    class="text-[16px] font-bold cursor-pointer"
                                    @click="scrollToSection(section.id)"
                                >
                                    {{ section.label }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nội dung FAQ -->
            <div class="col-span-2 mb-6">
                <div class="ml-[1.5rem] space-y-20">
                    <div 
                        v-for="section in sections"
                        :key="section.id"
                        :id="section.id"
                        class="faq-section"
                    >
                        <div class="text-[25px] font-bold mb-[2rem]">
                            {{ section.label }}
                        </div>
                        <div class="pt-2">
                            <div v-for="(item, index) in faqItems" :key="index" class="mt-2 h-full">
                                <h2>
                                    <button
                                        class="text-[18px] flex items-center justify-between text-left bg-gray-100 px-4 py-2 w-full h-[57px] rounded-xl transition-all duration-300"
                                        :class="{ 'bg-[#f3f4f6]': activeIndex !== index, 'text-[#3b82f6]': activeIndex === index }"
                                        @click="toggle(index)"
                                    >
                                        {{ item.question }}
                                        <i :class="['pi transition-transform duration-300 ease-in-out', activeIndex === index ? 'pi-angle-up rotate-180' : 'pi-angle-down rotate-180']" style="margin-left: auto;" />
                                    </button>
                                </h2>
                                <div v-show="activeIndex === index" class="p-4 bg-white text-slate-400">
                                    {{ item.answer }}
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
import { ref, onMounted } from 'vue';

const faqItems = ref([
    { question: 'How does it work?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'Do I need a designer to use Jobnova?', answer: 'Yes, but you can also use our built-in templates.' },
    { question: 'What do I need to do to start selling?', answer: 'Simply sign up and list your products on our platform.' },
    { question: 'What happens when I receive an order?', answer: 'You will be notified and can manage it from your dashboard.' }
]);

const activeIndex = ref(null);
const activeSection = ref('');
const sections = ref([
    { id: 'buying', label: 'Buying Questions' },
    { id: 'general', label: 'General Questions' },
    { id: 'payments', label: 'Payments Questions' },
    { id: 'support', label: 'Support Questions' }
]);

const toggle = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

onMounted(() => {
    if (process.client) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        activeSection.value = entry.target.id;
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.value.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });
    }
});
</script>

<style>
.faq-section {
    padding-top: 2rem;
}
</style>
