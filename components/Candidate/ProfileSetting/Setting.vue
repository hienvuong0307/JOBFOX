<template>
    <div class="flex flex-col w-full ml-[13rem]">
        <div class="flex flex-col gap-5 w-[87%] card border border-solid border-slate-200 shadow-md rounded-md">
            <div class="text-[20px] font-bold">Personal Detail :</div>
            <div class="grid grid-cols-2">
                <div class="flex flex-col gap-3 mt-[1.5rem]">
                    <label class="text-xl font-medium" for="email"> First Name:<span class="text-red-500">*</span></label>
                    <InputText id="email" v-model="title" placeholder="First Name:" style="padding-left: 10px;width: auto;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div class="flex flex-col gap-3 ml-[2rem] mt-[1.5rem]">
                    <label class="text-xl font-medium" for="phone"> Last Name:<span class="text-red-500">*</span></label>
                    <InputText id="phone" v-model="title" placeholder="Last Name:" style="padding-left: 10px;width: auto;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div class="flex flex-col gap-3 mt-[1.5rem]">
                    <label class="text-xl font-medium" for="title"> Your Email:<span class="text-red-500">*</span></label>
                    <InputText id="title" v-model="email" placeholder="Your Email:" style="padding-left: 10px;width: auto;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div class="flex flex-col gap-3 ml-[2rem] mt-[1.5rem]">
                    <label class="text-xl font-medium" for="type"> Occupation</label>
                    <Dropdown id="type" v-model="type" :options="dataw" placeholder="Wep Designer" class="w-full md:w-14rem" style="padding-left: 10px;width: auto;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div class="flex flex-col gap-3 mt-[1.5rem]">
                    <label class="text-xl font-medium" for="type"> Location:</label>
                    <Dropdown id="type" v-model="type" :options="data" placeholder="USA" class="w-full md:w-14rem" style="padding-left: 10px;width: auto;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div class="flex flex-col gap-3 ml-[2rem] mt-[1.5rem]">
                    <label class="text-xl font-medium" for="upload"> Upload Your Cv / Resume :</label>
                    <div class="">
                        <div class="relative flex items-center">
                            <button class="absolute left-0 bg-[#f8f9fc] text-black px-4 h-[40px] py-[9px] rounded-l-md border border-gray-300 transition mt-2" @click="triggerFileInput">Choose File</button>

                            <input id="fileUpload" type="text" class="block w-full border border-gray-300 rounded-md shadow-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500" :value="fileName" readonly style="padding-left: 10px;width: 550px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />

                            <input ref="fileInput" type="file" class="hidden" @change="handleFileUpload" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3">
                <label class="text-xl font-medium" for="description"> Introduction :</label>
                <Textarea id="description" class="h-[8rem]" v-model="description" placeholder="Introduction :" style="padding-left: 10px;width: auto;height: 100px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
            </div>
            <Button label="SEND MESSAGE" class="w-[10rem] bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition" style="background-color: #0b63f3; border-color: #0b63f3; color: #fff" />
        </div>

        <div class="flex flex-col gap-5 w-[87%] card border border-solid border-slate-200 shadow-md rounded-md">
            <div class="flex">
                <div class="text-[20px] font-bold">Contact Info :</div>
                <div class="text-[20px] font-bold ml-[32.5rem] mt-1">Change password :</div>
            </div>
            <div class="grid grid-cols-2">
                <div class="flex flex-col gap-3 mt-[1.5rem]">
                    <label class="text-xl font-medium" for="email"> Phone No. :</label>
                    <InputText id="email" v-model="number" placeholder="Phone No. :" style="padding-left: 10px;width: auto;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div class="flex flex-col gap-3 ml-[2rem] mt-[1.5rem]">
                    <label class="text-xl font-medium" for="phone"> Old password :</label>
                    <InputText id="phone" v-model="password" placeholder="Old password :"style="padding-left: 10px;width: auto;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div class="flex flex-col gap-3 mt-[1.5rem]">
                    <label class="text-xl font-medium" for="title"> Website :</label>
                    <InputText id="title" v-model="text" placeholder="Website :" style="padding-left: 10px;width: auto;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div class="flex flex-col gap-3 ml-[2rem] mt-[1.5rem]">
                    <label class="text-xl font-medium" for="type"> New password :</label>
                    <InputText id="phone" v-model="password" placeholder="New password :" style="padding-left: 10px;width: auto;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div class="flex flex-col gap-3 mt-[1.5rem]">
                    <Button label="ADD" class="w-[6rem] bg-[#3b82f6] text-white py-3 rounded-md hover:bg-[#3b82f6] transition" style="background-color: #3b82f6; border-color: #3b82f6; color: #fff" />
                </div>
                <div class="flex flex-col gap-3 ml-[2rem] mt-[1.5rem]">
                    <label class="text-xl font-medium" for="type"> Re-type New password :</label>
                    <InputText id="phone" v-model="password" placeholder="Re-type New password :" style="padding-left: 10px;width: auto;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div></div>
                <div class="flex flex-col gap-3 mt-[1.5rem] ml-8">
                    <Button label="SAVE PASSWORD" class="w-[10rem] bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition" style="background-color: #3b82f6; border-color: #3b82f6; color: #fff" />
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-5 w-[87%] card border border-solid border-slate-200 shadow-md rounded-md">
            <div class="">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="text-[20px] font-bold mb-3">Account Notifications</h3>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-[16px] font-semibold">When someone mentions me</span>
                            <Checkbox v-model="accountNoti1" :binary="true" />
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-[16px] font-semibold">When someone follows me</span>
                            <Checkbox v-model="accountNoti2" :binary="true" checked />
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-[16px] font-semibold">When shares my activity</span>
                            <Checkbox v-model="accountNoti3" :binary="true" />
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-[16px] font-semibold">When someone messages me</span>
                            <Checkbox v-model="accountNoti4" :binary="true" />
                        </div>
                    </div>

                    <div>
                        <h3 class="text-[20px] font-bold mb-3">Marketing Notifications</h3>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-[16px] font-semmibold">There is a sale or promotion</span>
                            <Checkbox v-model="marketingNoti1" :binary="true" />
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-[16px] font-semibold">Company news</span>
                            <Checkbox v-model="marketingNoti2" :binary="true" />
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-[16px] font-semibold">Weekly jobs</span>
                            <Checkbox v-model="marketingNoti3" :binary="true" checked />
                        </div>
                        <div class="flex justify-between items-center py-2">
                            <span class="text-[16px] font-semibold">Unsubscribe News</span>
                            <Checkbox v-model="marketingNoti4" :binary="true" checked />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-5 w-[87%] card border border-solid border-slate-200 shadow-md rounded-md">
            <div class="flex flex-col space-y-6">
                <div class="text-[20px] font-bold text-[#ef4444]">Delete Account</div>
                <span class="text-[16px] font-semibold">Do you want to delete the account? Please press below "Delete" button</span>
                <Button label="DELETE ACCOUNT" class="w-[15rem] text-white py-3 rounded-md transition" style="background-color: #ef4444; border-color: #ef4444; color: #fff" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const data = ref(['USA', ' Canada', 'China']);
const dataw = ref(['Web Designer', ' Wep Developer', 'UI/UX Designer']);

const fileName = ref('No file chosen');
const fileInput = ref(null);
const accountNoti1 = ref(false);
const accountNoti2 = ref(true);
const accountNoti3 = ref(false);
const accountNoti4 = ref(false);
const marketingNoti1 = ref(false);
const marketingNoti2 = ref(false);
const marketingNoti3 = ref(true);
const marketingNoti4 = ref(true);

const triggerFileInput = () => {
    fileInput.value.click();
};

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        fileName.value = file.name;
    }
};
</script>

<style>
</style>