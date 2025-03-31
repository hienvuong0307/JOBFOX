<template>
    <div>
        <div class="flex flex-col">
            <div
                class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                style="height: 500px; width: 100%"
            >
                <div class="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 class="text-[33px] text-white font-bold">Submit your Support Request</h2>
                </div>
            </div>

            <div class="absolute top-0 w-full flex justify-center z-10 mt-[15rem]">
                <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
            </div>

            <div class="absolute top-[62%] left-1/2 transform -translate-x-1/2 text-center">
                <Breadcrumb style="background-color: transparent" :model="items" />
            </div>
        </div>

        <div class="flex justify-center mt-[6rem] mb-[8rem]">
            <div class="mt-10">
                    <div class="shadow-[0_0_3px_#1e293b26] rounded-[6px] p-6 w-[53rem] ml-[2.5rem]">
                        <div class="flex">
                            <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                                <span style="font-weight: 500; font-size: 1.2rem">Your Name<span style="color: crimson; margin-left: 0.2rem; font-size: 1.2rem">*</span></span>
                                <InputText name="username" type="text" placeholder="Your Name:" style="padding-left: 10px;width: 340px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                            </div>
                            <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem" class="ml-[1rem]">
                                <span style="font-weight: 500; font-size: 1.2rem">Your Email<span style="color: crimson; margin-left: 0.2rem; font-size: 1.2rem">*</span></span>
                                <InputText name="username" type="text" placeholder="Your Email:" style="padding-left: 10px;width: 340px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                            </div>
                        </div>
                        <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                            <span style="font-weight: 500; font-size: 1.2rem">Subject</span>
                            <InputText name="username" type="text" placeholder="Your Subject:" style="padding-left: 10px;width: 695px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                        </div>
                        <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                            <span style="font-weight: 500; font-size: 1.2rem">Comments<span style="color: crimson; margin-left: 0.2rem; font-size: 1.2rem">*</span></span>
                            <Textarea id="description" v-model="description" placeholder="Your Message:" class="mt-[1rem]" style="padding-top: 10px;padding-left: 10px;width: 695px;height: 117px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                        </div>
                        <div style="display: grid; align-items: center; justify-content: center; margin-top: 1.5rem; margin-left: 0.8rem">
                            <Button
                                label="SEND MESSAGE"
                                class="!h-12 text-white mr-[1rem]"
                                style="width: 695px;background-color: #3b82f6 !important; border: 1px solid #3b82f6 !important; font-size: 12px; border: 1px solid #3b82f60d; box-shadow: 0 3px 5px 0 #3b82f61a; color: #fff"
                            />
                        </div>
                    </div>
                </div>
        </div>
     
    </div>
</template>
  
  <script setup>
import { ref } from 'vue';
const items = ref([{ label: 'JOBNOVA' }, { label: 'HELP CENTER' }]);

</script>
  
  <style>
</style>