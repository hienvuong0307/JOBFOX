<template>
    <div class="">
        <div class="flex flex-col">
            <div class="w-full h-24"></div>
        </div>
        <div class="flex justify-center">
            <div class="card w-4/5">
                <div class="bg-[url('https://jobnova-shreethemes.vercel.app/static/media/bg5.634b5f6c21dce4640652.jpg')] flex justify-center items-center object-cover relative shadow-[0_0_3px_#1e293b26] rounded-md"
                    style="height: 250px; width: 100%; background-position: center 50%"></div>


                <div class="absolute top-[45%] left-[21%] transform -translate-x-1/2 flex items-center gap-4 text-left">
                    <input type="file" ref="fileInput" class="absolute w-full h-full opacity-[0.01] z-[11]"
                        @change="handleFileChange" />
                    <div class="relative inline-block">
                        <img :src="profileImage"
                            class="w-[110px] h-[110px] rounded-full object-cover border-4 border-white shadow-lg"
                            id="profile-image" alt="Profile Image" />
                        <label class="absolute bottom-0 right-0" for="pro-img">
                            <span
                                class="inline-flex items-center justify-center w-[34px] h-[34px] rounded-full bg-blue-500 text-white uppercase font-semibold transition-all duration-300 shadow-sm">
                                <i class="pi pi-camera" style="font-size: 16px"></i>
                            </span>
                        </label>
                    </div>
                    <div class="mt-[1rem]">
                        <p class="font-bold text-[18px]">Mr. Calvin Carlo</p>
                        <p class="text-[#94a3b8] text-[17px]">Web Designer</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center mt-[10rem] mb-[10rem]">
            <Setting />
        </div>

        <div class="mb-10"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Setting from '~/components/Candidate/ProfileSetting/Setting.vue';
const fileInput = ref(null);
const profileImage = ref("https://jobnova-shreethemes.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg");

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {

        const imageUrl = URL.createObjectURL(file);
        profileImage.value = imageUrl;
    }
};
</script>

<style></style>
