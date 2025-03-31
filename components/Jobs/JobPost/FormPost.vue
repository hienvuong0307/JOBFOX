<template>
    <div class="flex flex-col gap-5 w-2/5 card border border-solid border-slate-200 shadow-md rounded-md">
        <div class="flex flex-col gap-5">
            <div>
                <span class="text-2xl font-medium">Job Details:</span>
            </div>
            <div class="flex flex-col gap-3">
                <label class="text-xl font-medium" for="title"> Job Title :</label>
                <InputText id="title" v-model="title" placeholder="Title :" style="padding-left: 10px;width: 550px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
            </div>
            <div class="flex flex-col gap-3">
                <label class="text-xl font-medium" for="description"> Description :</label>
                <Textarea id="description" v-model="description" placeholder="Describe the job :" style="padding-left: 10px;width: 550px;height: 100px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
            </div>
            <div class="grid grid-cols-2 gap-5">
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">Job Type:</label>
                    <Dropdown id="type" v-model="type" :options="data" placeholder="In Office" style="padding-left: 10px;width: 267px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">Job Categories:</label>
                    <Dropdown id="type" v-model="categories" :options="data" placeholder="In Office" class="w-full md:w-14rem" style="padding-left: 10px;width: 267px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">Salary:</label>
                    <Dropdown id="type" v-model="salary" :options="data" placeholder="In Office" class="w-full md:w-14rem" style="padding-left: 10px;width: 267px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div class="grid grid-cols-2 gap-3 items-end">
                    <div>
                        <InputGroup>
                            <InputGroupAddon class="w-[10px] h-[40px] mt-2">
                                <i class="pi pi-dollar" style="font-size: 18px;"></i>
                            </InputGroupAddon>
                            <InputText placeholder="MAX" type="number" style="padding-left: 10px;width: 80px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 1px" />
                        </InputGroup>
                    </div>
                    <div>
                        <InputGroup>
                            <InputGroupAddon class="w-[10px] h-[40px] mt-2">
                                <i class="pi pi-dollar"></i>
                            </InputGroupAddon>
                            <InputText placeholder="MIN" type="number" style="padding-left: 10px;width: 80px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 1px" />
                        </InputGroup>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-5">
            <div>
                <span class="text-2xl font-medium">Skill & Experience:</span>
            </div>
            <div class="flex flex-col gap-3">
                <label class="text-xl font-medium" for="title">Skills:</label>
                <InputText id="title" v-model="title" placeholder="Web Developer :" style="padding-left: 10px;width: 550px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px"  />
            </div>
            <div class="grid grid-cols-2 gap-5">
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">Qualifications:</label>
                    <InputText id="type" v-model="Qualifications" placeholder="Qualifications" class="w-full md:w-14rem" style="padding-left: 10px;width: 267px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px"/>
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">Experience:</label>
                    <InputText id="type" v-model="Experience" placeholder="Experience" class="w-full md:w-14rem" style="padding-left: 10px;width: 267px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">Industry:</label>
                    <Dropdown id="type" v-model="salary" :options="data" placeholder="In Office" class="w-full md:w-14rem" style="padding-left: 10px;width: 267px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-5">
            <div>
                <span class="text-2xl font-medium">Skill & Experience:</span>
            </div>
            <div class="flex flex-col gap-3">
                <label class="text-xl font-medium" for="title">Address:</label>
                <InputText id="title" v-model="title" placeholder="Address" style="padding-left: 10px;width: 550px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
            </div>
            <div class="grid grid-cols-2 gap-5">
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">Country:</label>
                    <Dropdown id="type" v-model="salary" :options="data" placeholder="In Office" class="w-full md:w-14rem" style="padding-left: 10px;width: 267px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">State:</label>
                    <Dropdown id="type" v-model="salary" :options="data" placeholder="In Office" class="w-full md:w-14rem" style="padding-left: 10px;width: 267px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-5">
            <iframe
                class="w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                title="mô-tả"
            ></iframe>
            <div class="flex align-items-center gap-2 mt-4">
            <Button :label="'POST NOW'" style="background-color: #0b63f3; color: #ffffff" iconPos="right" class="text-[14px] px-6 py-3 w-[126   55px] h-[34px]" size="small" />
        </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
</style>