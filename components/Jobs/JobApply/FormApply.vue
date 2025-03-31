<template>
    <div class="flex flex-col gap-5 w-2/5 card border border-solid border-slate-200 shadow-md rounded-md">
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="email"> Your Email :<span class="text-red-500">*</span></label>
            <InputText id="email" v-model="email" placeholder="Your email :" style="padding-left: 10px;width: 550px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
        </div>
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="phone"> Your Phone no. :<span class="text-red-500">*</span></label>
            <InputText id="phone" v-model="phone" placeholder="Your phone no. :"  style="padding-left: 10px;width: 550px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
        </div>
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="title"> Job Title :<span class="text-red-500">*</span></label>
            <InputText id="title" v-model="title" placeholder="Title :"  style="padding-left: 10px;width: 550px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
        </div>
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="type"> Types of jobs :</label>
            <Dropdown id="type" v-model="type" :options="data" placeholder="In Office" class="w-full md:w-14rem"  style="padding-left: 10px;width: 550px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
        </div>
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="description"> Description :</label>
            <Textarea id="description" v-model="description" placeholder="Describe the job :"  style="padding-left: 10px;width: 550px;height: 70px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
        </div>
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="upload"> Upload Your Cv / Resume :</label>
            <div class="">
                <InputText type="file" v-model="file" class=""  style="width: 550px;height: 28px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" ></InputText>
            </div>
        </div>
        <div class="flex align-items-center gap-2">
            <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
            <label for="ingredient1" class="">I Accept <span class="text-blue-500">Terms And Condition</span> </label>
        </div>
        <div class="flex align-items-center gap-2">
            <Button :label="'APPLY NOW'" style="background-color: #0b63f3; color: #ffffff" iconPos="right" class="text-[14px] px-6 py-3 w-[126   55px] h-[34px]" size="small" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const data = ref(['All Job', ' Full Time', 'Half Time', 'Remote', 'In Ofice']);
</script>

<style>
</style>