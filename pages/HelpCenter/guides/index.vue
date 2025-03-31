<template>
    <div>
        <div class="flex flex-col">
            <div
                class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                style="height: 500px; width: 100%"
            >
                <div class="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 class="text-[33px] text-white font-bold">Guides & Support</h2>
                </div>
            </div>

            <div class="absolute top-0 w-full flex justify-center z-10 mt-[15rem]">
                <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
            </div>

            <div class="absolute top-[62%] left-1/2 transform -translate-x-1/2 text-center">
                <Breadcrumb style="background-color: transparent" :model="items" />
            </div>
        </div>

        <div class="flex flex-wrap justify-center gap-1 mb-[6rem] mt-[6rem] ml-[4rem]">
            <div class="mt-10 w-[30%]">
                <div class="text-[18px] font-semibold">Getting started</div>
                <div class="mt-5 gap-2 space-y-4">
                    <div class="space-y-1">
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Deciding to purchase</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>List your space</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Landing an experience or adventure</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Top uses questions</p>
                    </div>
                </div>
            </div>

            <div class="mt-10 w-[30%]">
                <div class="text-[18px] font-semibold">Your calendar</div>
                <div class="mt-5 gap-2 space-y-4">
                    <div class="space-y-1">
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Pricing & availability</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Booking settings</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Responding to enquiries & requests</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Snoozing or deactivating your listing</p>
                    </div>
                </div>
            </div>

            <div class="mt-10 w-[30%]">
                <div class="text-[18px] font-semibold">Your listing</div>
                <div class="mt-5 gap-2 space-y-4">
                    <div class="space-y-1">
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Updating your listing</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Neighbourhoods</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Listing photos & photography</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Jobnova Plus</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>API-connected software</p>
                    </div>
                </div>
            </div>

            <div class="mt-10 w-[30%]">
                <div class="text-[18px] font-semibold">How payouts work</div>
                <div class="mt-5 gap-2 space-y-4">
                    <div class="space-y-1">
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Getting paid</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Adding payout info</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Your payout status</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Donations</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Taxes</p>
                    </div>
                </div>
            </div>

            <div class="mt-10 w-[30%]">
                <div class="text-[18px] font-semibold">Your reservations</div>
                <div class="mt-5 gap-2 space-y-4">
                    <div class="space-y-1">
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Jobnova safely</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Jobnova Experiences and Adventures</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Changing a reservation</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Cancelling a reservation</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Long-term reservations</p>
                    </div>
                </div>
            </div>

            <div class="mt-10 w-[30%]">
                <div class="text-[18px] font-semibold">Reservation help</div>
                <div class="mt-5 gap-2 space-y-4">
                    <div class="space-y-1">
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Help with a reservation or guest</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Guest cancellations</p>
                    </div>
                </div>
            </div>

            <div class="mt-10 w-[30%] mr-[63rem]">
                <div class="text-[18px] font-semibold">Your account</div>
                <div class="mt-5 gap-2 space-y-4">
                    <div class="space-y-1">
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Your profile</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Account security</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Identification & verifications</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Reviews</p>
                        <p class="text-[16px] text-[#94a3b8]"><i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>Superhost status</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script setup>
import { ref } from 'vue';
const items = ref([{ label: 'JOBNOVA' }, { label: 'HELP CENTER' }, { label: 'GUIDES' }]);
</script>
  
  <style>
</style>