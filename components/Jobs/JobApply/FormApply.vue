<template>
    <div class="flex flex-col gap-5 w-2/5 card border border-solid border-slate-200 shadow-md rounded-md">
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="email"> Your Email :<span class="text-red-500">*</span></label>
            <InputText id="email" v-model="email" placeholder="Your email :" />
        </div>
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="phone"> Your Phone no. :<span class="text-red-500">*</span></label>
            <InputText id="phone" v-model="phone" placeholder="Your phone no. :" />
        </div>
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="title"> Job Title :<span class="text-red-500">*</span></label>
            <InputText id="title" v-model="title" placeholder="Title :" />
        </div>
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="type"> Types of jobs :</label>
            <Dropdown id="type" v-model="type" :options="data" placeholder="In Office" class="w-full md:w-14rem" />
        </div>
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="description"> Description :</label>
            <Textarea id="description" v-model="description" placeholder="Describe the job :" />
        </div>
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="upload"> Upload Your Cv / Resume :</label>
            <div class="">
                <InputText type="file" v-model="file" class="w-full"></InputText>
            </div>
        </div>
        <div class="flex align-items-center gap-2">
            <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
            <label for="ingredient1" class="">I Accept <span class="text-blue-500">Terms And Condition</span> </label>
        </div>
        <div class="flex align-items-center gap-2">
            <Button label="APPLY NOW" severity="info" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const data = ref(['All Job', ' Full Time', 'Half Time', 'Remote', 'In Ofice']);
</script>

<style>
</style>