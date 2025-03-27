<template>
    <div class="flex flex-col gap-5 w-2/5 card border border-solid border-slate-200 shadow-md rounded-md">
        <div class="flex flex-col gap-5">
            <div>
                <span class="text-2xl font-medium">Job Details:</span>
            </div>
            <div class="flex flex-col gap-3">
                <label class="text-xl font-medium" for="title"> Job Title :</label>
                <InputText id="title" v-model="title" placeholder="Title :" />
            </div>
            <div class="flex flex-col gap-3">
                <label class="text-xl font-medium" for="description"> Description :</label>
                <Textarea id="description" v-model="description" placeholder="Describe the job :" />
            </div>
            <div class="grid grid-cols-2 gap-5">
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">Job Type:</label>
                    <Dropdown id="type" v-model="type" :options="data" placeholder="In Office" class="w-full md:w-14rem" />
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">Job Categories:</label>
                    <Dropdown id="type" v-model="categories" :options="data" placeholder="In Office" class="w-full md:w-14rem" />
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">Salary:</label>
                    <Dropdown id="type" v-model="salary" :options="data" placeholder="In Office" class="w-full md:w-14rem" />
                </div>
                <div class="grid grid-cols-2 gap-5 items-end">
                    <div>
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-dollar"></i>
                            </InputGroupAddon>
                            <InputText placeholder="Username" type="number" />
                        </InputGroup>
                    </div>
                    <div>
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-dollar"></i>
                            </InputGroupAddon>
                            <InputText placeholder="Username" type="number" />
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
                <InputText id="title" v-model="title" placeholder="Web Developer :" />
            </div>
            <div class="grid grid-cols-2 gap-5">
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">Qualifications:</label>
                    <InputText id="type" v-model="Qualifications" placeholder="Qualifications" class="w-full md:w-14rem" />
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">Experience:</label>
                    <InputText id="type" v-model="Experience" placeholder="Experience" class="w-full md:w-14rem" />
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">Industry:</label>
                    <Dropdown id="type" v-model="salary" :options="data" placeholder="In Office" class="w-full md:w-14rem" />
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-5">
            <div>
                <span class="text-2xl font-medium">Skill & Experience:</span>
            </div>
            <div class="flex flex-col gap-3">
                <label class="text-xl font-medium" for="title">Address:</label>
                <InputText id="title" v-model="title" placeholder="Address" />
            </div>
            <div class="grid grid-cols-2 gap-5">
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">Country:</label>
                    <Dropdown id="type" v-model="salary" :options="data" placeholder="In Office" class="w-full md:w-14rem" />
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-xl font-medium" for="type">State:</label>
                    <Dropdown id="type" v-model="salary" :options="data" placeholder="In Office" class="w-full md:w-14rem" />
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-5">
            <iframe
                class="w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                title="mô-tả"
            ></iframe>
            <div class="grid grid-cols-3 gap-5">
                <Button label="POST" severity="info"></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
</style>