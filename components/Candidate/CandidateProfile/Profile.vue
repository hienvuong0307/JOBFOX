<template>
    <div class="card w-[82%]">
        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 mb-6">
                <div class="ml-[1.5rem]">
                    <div>
                        <div class="text-[18px] font-semibold">Introduction:</div>
                        <div class="mt-3 gap-2 space-y-4">
                            <p class="text-[16px] text-[#94a3b8]">
                                Obviously I'M Web Developer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it
                                look like readable English.
                            </p>

                            <p class="text-[16px] text-[#94a3b8]">
                                Data Structures and Algorithms are the heart of programming. Initially most of the developers do not realize its importance but when you will start your career in software development, you will find your code is either
                                taking too much time or taking too much space.
                            </p>
                        </div>
                    </div>

                    <div class="mt-10">
                        <div class="text-[18px] font-semibold">Responsibilities and Duties:</div>
                        <div class="grid grid-cols-2 gap-3 mt-4">
                            <div v-for="(bar, index) in progressBars" :key="index" class="relative card mb-4 p-4">
                                <Toast></Toast>
                                <div class="text-[15px] mb-2 font-semibold">{{ bar.name }}</div>
                                <div class="relative w-full bg-gray-200 rounded-full" style="height: 7px">
                                    <div class="absolute top-[-28px] text-[15px] font-semibold transition-all duration-300 ease-out" :style="{ left: `calc(${bar.value}% - 15px)` }">{{ bar.value }}%</div>

                                    <div class="h-full bg-blue-500 rounded-full transition-all duration-300 ease-out" :style="{ width: `${bar.value}%` }"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-10">
                        <div class="text-[18px] font-semibold">Required Experience, Skills and Qualifications:</div>
                        <div class="space-y-10 p-4">
                            <div v-for="(experience, index) in experiences" :key="index" class="mt-4 flex gap-5">
                                <div>
                                    <div class="flex flex-col justify-center w-16">
                                        <img :src="experience.imageSrc" alt="" class="object-cover bg-white shadow p-1 rounded" />
                                        <h6 class="text-[#94a3b8] mt-2 text-[14px">{{ experience.years }}</h6>
                                    </div>
                                </div>
                                <div class="space-y-3">
                                    <div>
                                        <h6 class="mb-0 font-bold text-[15px]">{{ experience.title }}</h6>
                                        <p class="text-[#94a3b8] text-[14px]">{{ experience.company }}</p>
                                    </div>
                                    <p class="text-[#94a3b8] mb-0 text-[14px">
                                        {{ experience.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <div class="shadow-[0_0_3px_#1e293b26] rounded-[6px] p-6 w-[53rem] ml-[2.5rem]">
                        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1rem">
                            <span style="font-weight: 500; font-size: 22px; font-weight: 600">Get in touch !</span>
                        </div>
                        <div class="flex">
                            <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                                <span style="font-weight: 500; font-size: 1.2rem">Your Name<span style="color: crimson; margin-left: 0.2rem; font-size: 1.2rem">*</span></span>
                                <InputText name="username" type="text" placeholder="Name:" style="padding-left: 10px;width: 343px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                            </div>
                            <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem" class="ml-[1rem]">
                                <span style="font-weight: 500; font-size: 1.2rem">Your Email<span style="color: crimson; margin-left: 0.2rem; font-size: 1.2rem">*</span></span>
                                <InputText name="username" type="text" placeholder="Email:" style="padding-left: 10px;width: 343px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                            </div>
                        </div>
                        <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                            <span style="font-weight: 500; font-size: 1.2rem">Subject</span>
                            <InputText name="username" type="text" placeholder="Subject:" style="padding-left: 10px;width: 702px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                        </div>
                        <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                            <span style="font-weight: 500; font-size: 1.2rem">Comments<span style="color: crimson; margin-left: 0.2rem; font-size: 1.2rem">*</span></span>
                            <Textarea id="description" v-model="description" placeholder="Message:" class="" style="padding-top: 10px;padding-left: 10px;width: 702px;height: 100px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                        </div>
                        <div style="display: grid; align-items: center; justify-content: center; margin-top: 1.5rem; margin-left: 0.8rem">
                            <Button
                                label="SEND MESSAGE"
                                class="!h-12 text-white mr-2"
                                style="width: 700px; background-color: #3b82f6 !important; border: 1px solid #3b82f6 !important; font-size: 12px; border: 1px solid #3b82f60d; box-shadow: 0 3px 5px 0 #3b82f61a; color: #fff"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-1 flex flex-col">
                <div class="sticky top-[5rem] self-start">
                    <div class="w-full bg-[#f8f9fc] rounded-xl border-[1px] shadow-lg p-4">
                        <div class="mt-5 space-y-5 w-[24.9rem]">
                            <div>
                                <div class="mb-[2.5rem]">
                                    <p class="text-[20px] font-bold">Personal Detail:</p>
                                </div>
                            </div>
                            <div>
                                <div class="space-y-5">
                                    <div class="flex justify-between">
                                        <p class="font-medium text-[17px] text-[#94a3b8]"><i class="pi pi-envelope"></i> Email:</p>
                                        <span class="text-[15px] font-semibold">thomas@mail.com</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <p class="font-medium text-[17px] text-[#94a3b8]"><i class="pi pi-gift"></i> D.O.B.:</p>
                                        <span class="text-[15px] font-semibold">31st Dec, 1996</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <p class="font-medium text-[17px] text-[#94a3b8]"><i class="pi pi-home"></i> Address:</p>
                                        <span class="text-[15px] font-semibold">15 Razy street</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <p class="font-medium text-[17px] text-[#94a3b8]"><i class="pi pi-map-marker"></i> City:</p>
                                        <span class="text-[15px] font-semibold">London</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <p class="font-medium text-[17px] text-[#94a3b8]"><i class="pi pi-globe"></i> Country:</p>
                                        <span class="text-[15px] font-semibold">UK</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <p class="font-medium text-[17px] text-[#94a3b8]"><i class="pi pi-phone"></i> Mobile:</p>
                                        <span class="text-[15px] font-semibold">(+125) 1542-8452</span>
                                    </div>

                                    <div class="flex justify-between text-gray-600">
                                        <span class="font-medium text-[17px] text-[#94a3b8]">Socials:</span>
                                        <div class="flex gap-3">
                                            <Button icon="pi pi-facebook" class="rounded-full shadow-md" style="color: black; background-color: white; border-color: #d1d5db" />
                                            <Button icon="pi pi-twitter" class="rounded-full shadow-md" style="color: black; background-color: white; border-color: #d1d5db" />
                                            <Button icon="pi pi-instagram" class="rounded-full shadow-md" style="color: black; background-color: white; border-color: #d1d5db" />
                                            <Button icon="pi pi-linkedin" class="rounded-full shadow-md" style="color: black; background-color: white; border-color: #d1d5db" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-3 rounded shadow bg-white mt-[2.5rem]">
                            <div class="flex items-center justify-start mb-2">
                                <i class="pi pi-file-plus" style="font-size: 3rem"></i>
                                <h6 class="ml-2 text-[15px] font-bold">calvin-carlo-resume.pdf</h6>
                            </div>
                            <Button label="Download CV" icon="pi pi-download" iconPos="left" class="custom-btn w-100" @click="downloadCV" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const progressBars = ref([
    { name: 'HTML', value: 0, target: 84, interval: null },
    { name: 'CSS', value: 0, target: 90, interval: null },
    { name: 'JQuery', value: 0, target: 75, interval: null },
    { name: 'WordPress', value: 0, target: 95, interval: null },
    { name: 'Figma', value: 0, target: 65, interval: null },
    { name: 'Illustration', value: 0, target: 80, interval: null }
]);

const startProgress = (index) => {
    if (progressBars.value[index].interval) {
        clearInterval(progressBars.value[index].interval);
    }
    progressBars.value[index].interval = setInterval(() => {
        let newValue = progressBars.value[index].value + 1;

        if (newValue >= progressBars.value[index].target) {
            newValue = progressBars.value[index].target;
            clearInterval(progressBars.value[index].interval);
            progressBars.value[index].interval = null;
        }

        progressBars.value[index].value = newValue;
    }, 13);
};

onMounted(() => {
    progressBars.value.forEach((bar, index) => {
        startProgress(index);
    });
});

onBeforeUnmount(() => {
    progressBars.value.forEach((bar) => {
        if (bar.interval) {
            clearInterval(bar.interval);
        }
    });
});

function downloadCV() {
    const link = document.createElement('a');
    link.href = '/static/media/calvin-carlo-resume.a745b9df8fa2e77f280c.pdf';
    link.download = 'pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const experiences = [
    {
        years: '2019-22',
        title: 'Full Stack Developer',
        company: 'Linkedin - U.S.A.',
        description: 'It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.',
        imageSrc:
            'data:image/png;base64,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'
    },
    {
        years: '2017-19',
        title: 'Back-end Developer',
        company: 'Lenovo - China',
        description: 'It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.',
        imageSrc: 'https://jobnova-shreethemes.vercel.app/static/media/lenovo-logo.ad2ec171d6df96c88b9e.png'
    }
];
</script>

<style>
.custom-btn:hover {
    color: #fff !important;
    background-color: #0b63f3 !important;
}

.custom-btn {
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    outline: none;
    padding: 8px 22px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s;
    background-color: #3b82f6 !important;
    border: 1px solid #3b82f6 !important;
    box-shadow: 0 3px 5px 0 #3b82f61a;
    color: #fff !important;
}

.w-100 {
    width: 100% !important;
}
</style>