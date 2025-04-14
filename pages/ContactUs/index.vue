<template>
    <div>
        <div class="flex flex-col">
            <div class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                style="height: 500px; width: 100%">
                <div
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 class="text-[17px] text-white/50">Get in touch !</h2>
                    <h2 class="text-4xl text-white font-bold">Contact us</h2>
                </div>
            </div>

            <div class="absolute top-0  w-full flex justify-center z-10 mt-[15rem]">
                <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
            </div>

            <div class="absolute top-[55%] left-1/2 transform -translate-x-1/2 text-center">
                <Breadcrumb style="background-color: transparent" :model="items" />
            </div>

            <div class="card w-4/5 mt-[5rem]" style="margin-left: 15rem">
                <div class="flex gap-1 items-center">
                    <img class="max-w-full w-[550px] h-[560px]"
                        src="https://jobnova-shreethemes.vercel.app/static/media/contact.484ab30330e15fe0f16978ef279af06c.svg" />
                    <div class="shadow-[0_0_3px_#1e293b26] rounded-[6px] p-6 w-[490px] h-[510px]">
                        <div
                            style="display: flex; align-items: center; justify-content: space-between; margin-top: 1rem">
                            <span style="font-weight: 500; font-size: 22px; font-weight: 600">Get in touch !</span>
                        </div>
                        <div
                            style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                            <span style="font-weight: 500; font-size: 1.2rem">Your Name<span
                                    style="color: crimson; margin-left: 0.2rem; font-size: 1.2rem">*</span></span>
                            <InputText name="username" type="text" placeholder="Name:"
                                style="padding-left: 10px;width: 450px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                        </div>
                        <div
                            style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                            <span style="font-weight: 500; font-size: 1.2rem">Your Email<span
                                    style="color: crimson; margin-left: 0.2rem; font-size: 1.2rem">*</span></span>
                            <InputText name="username" type="text" placeholder="Email:"
                                style="padding-left: 10px;width: 450px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                        </div>
                        <div
                            style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                            <span style="font-weight: 500; font-size: 1.2rem">Subject</span>
                            <InputText name="username" type="text" placeholder="Subject:"
                                style="padding-left: 10px;width: 450px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                        </div>
                        <div
                            style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                            <span style="font-weight: 500; font-size: 1.2rem">Comments<span
                                    style="color: crimson; margin-left: 0.2rem; font-size: 1.2rem">*</span></span>
                            <InputText name="username" type="text" placeholder="Message:"
                                style="padding-left: 10px;width: 450px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                        </div>
                        <div
                            style="display: grid; align-items: center; justify-content: center; margin-top: 1.5rem; margin-left: 0.8rem;">
                            <Button label="SEND MESSAGE" class="!h-12 text-white mr-2"
                                style="width: 347px; background-color: #3b82f6 !important; border: 1px solid #3b82f6 !important; font-size: 12px; border: 1px solid #3b82f60d; box-shadow: 0 3px 5px 0 #3b82f61a; color: #fff" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center gap-1">
            <div class="grid justify-center text-center mt-14 gap-3 w-[24%]">
                <div class="">
                    <div
                        class="h-[60px] w-[60px] shadow-[0_0_3px_#1e293b26] rounded-[6px] bg-blue-500 bg-opacity-5 ml-[117px]">
                        <div class="flex justify-center"><i class="pi pi-phone mt-4"
                                style="font-size: 2rem; color: #3b82f6"></i></div>
                    </div>
                    <div class="mt-10 justify-center text-center">
                        <div class="mt-1 font-bold text-[18px]">Phone</div>
                        <div class="mt-5 text-[#94a3b8] text-[15px] font-plus-jakarta-sans max-w-[290px]">Start working
                            with Jobnova that can provide everything</div>
                        <div class="mt-5 text-[#3b82f6] text-[15px] font-plus-jakarta-sans">tel:+152534-468-854</div>
                    </div>
                </div>
            </div>
            <div class="grid justify-center text-center mt-14 gap-3 w-[24%]">
                <div class="">
                    <div
                        class="h-[60px] w-[60px] shadow-[0_0_3px_#1e293b26] rounded-[6px] bg-blue-500 bg-opacity-5 ml-[117px]">
                        <div class="flex justify-center"><i class="pi pi-envelope mt-4"
                                style="font-size: 2rem; color: #3b82f6"></i></div>
                    </div>
                    <div class="mt-10 justify-center text-center">
                        <div class="mt-1 font-bold text-[18px]">Email</div>
                        <div class="mt-5 text-[#94a3b8] text-[15px] font-plus-jakarta-sans max-w-[290px]">Start working
                            with Jobnova that can provide everything</div>
                        <div class="mt-5 text-[#3b82f6] text-[15px] font-plus-jakarta-sans">contact@example.com</div>
                    </div>
                </div>
            </div>
            <div class="grid justify-center text-center mt-14 gap-3 w-[24%]">
                <div class="">
                    <div
                        class="h-[60px] w-[60px] shadow-[0_0_3px_#1e293b26] rounded-[6px] bg-blue-500 bg-opacity-5 ml-[117px]">
                        <div class="flex justify-center"><i class="pi pi-map-marker mt-4"
                                style="font-size: 2rem; color: #3b82f6"></i></div>
                    </div>
                    <div class="mt-10 justify-center text-center">
                        <div class="mt-1 font-bold text-[18px]">Location</div>
                        <div class="mt-5 text-[#94a3b8] text-[15px] font-plus-jakarta-sans max-w-[290px]">Start working
                            with Jobnova that can provide everything</div>
                        <div class="mt-5 text-[#3b82f6] text-[15px] font-plus-jakarta-sans">View on Google map</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-full w-full mt-[7rem]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.19984200057!2d105.79554277508187!3d21.064679080593688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab471eee8117%3A0x14c4ba916c2e2937!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gQ8O0bmcgTmdo4buHIEZveEFJ!5e0!3m2!1svi!2s!4v1740369476127!5m2!1svi!2s"
                width="100%" height="550" style="border: 4rem" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
const items = ref([{ label: 'JOBNOVA' }, { label: 'CONTACT US' }]);
</script>

<style></style>