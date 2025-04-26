<template>
    <div v-if="loading" class="flex justify-center items-center min-h-[400px]">
        <i class="pi pi-spin pi-spinner text-4xl text-blue-500"></i>
    </div>

    <div v-else-if="error" class="flex justify-center items-center min-h-[400px]">
        <p class="text-red-500">{{ error }}</p>
    </div>

    <div v-else-if="jobDetails" class="card w-4/5">
        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 mb-6">
                <div class="ml-[1.5rem]">
                    <div class="flex flex-col md:flex-row border-[1px] items-center p-4 rounded-lg shadow bg-white mb-4 w-[716px] h-[158px]">
                        <img :src="jobDetails.CompanyLogoUrl || 'https://placehold.co/110x110'" 
                             class="w-[110px] h-[110px] rounded-full shadow bg-white p-2" 
                             :alt="jobDetails.companyName" />
                        <div class="md:ml-4 mt-3 md:mt-0">
                            <h4 class="text-[22px] font-bold">{{ jobDetails.jobTitle }}</h4>
                            <ul class="list-none m-0 p-0">
                                <div class="flex items-center text-gray-500 mb-1 gap-x-6 mt-3">
                                    <div class="flex items-center">
                                        <i class="pi pi-table text-blue-500 mr-2"></i>
                                        <span class="text-[#94a3b8]">{{ jobDetails.companyName }}</span>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="pi pi-map-marker text-blue-500 mr-2"></i>
                                        <span class="text-[#94a3b8]">{{ jobDetails.location }}</span>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div class="text-[18px] font-semibold">Job Description:</div>
                        <div class="mt-3 gap-2 space-y-4">
                            <p class="text-[16px] text-[#94a3b8]">{{ jobDetails.description }}</p>
                        </div>
                    </div>

                    <div class="mt-10">
                        <div class="text-[18px] font-semibold">Required Skills:</div>
                        <div class="mt-3 gap-2 space-y-4">
                            <div class="space-y-1">
                                <p v-for="skill in jobDetails.skillRequired" 
                                   :key="skill" 
                                   class="text-[16px] text-[#94a3b8]">
                                    <i class="pi pi-arrow-right" style="color: #3b82f6; margin-right: 1rem"></i>
                                    {{ skill }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <NuxtLink :to="`/Jobs/job-apply/${jobDetails._id}`">
                            <Button label="APPLY NOW" 
                                   class="custom-btn !text-xl rounded-full px-6 py-3" 
                                   icon="pi pi-send" 
                                   iconPos="right" 
                                   style="color: #0b63f3; background-color: #fff; border: 2px solid #0b63f3" />
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="col-span-1 flex flex-col">
                <div class="sticky top-[5rem] self-start">
                    <div class="w-full bg-white rounded-xl border-[1px] shadow-lg p-4">
                        <div class="mt-5 space-y-5 w-[25rem]">
                            <div>
                                <div class="flex justify-between text-[19px] font-bold">Job Information</div>
                            </div>

                            <div class="w-full h-[1px] bg-slate-100 mt-5"></div>
                            <div class="space-y-5 ml-[1.5rem]">
                                <div class="flex items-center gap-4">
                                    <i class="pi pi-table" style="font-size: 1.5rem"></i>
                                    <div class="">
                                        <p class="text-[15px] font-bold">Company Name:</p>
                                        <p class="text-[15px] text-[#3b82f6]">{{ jobDetails.companyName }}</p>
                                    </div>
                                </div>

                                <div class="flex items-center gap-4">
                                    <i class="pi pi-user-plus" style="font-size: 1.5rem"></i>
                                    <div class="">
                                        <p class="text-[15px] font-bold">Position:</p>
                                        <p class="text-[15px] text-[#3b82f6]">{{ jobDetails.positionName }}</p>
                                    </div>
                                </div>

                                <div class="flex items-center gap-4">
                                    <i class="pi pi-map-marker" style="font-size: 1.5rem"></i>
                                    <div class="">
                                        <p class="text-[15px] font-bold">Location:</p>
                                        <p class="text-[15px] text-[#3b82f6]">{{ jobDetails.location }}</p>
                                    </div>
                                </div>

                                <div class="flex items-center gap-4">
                                    <i class="pi pi-briefcase" style="font-size: 1.5rem"></i>
                                    <div class="">
                                        <p class="text-[15px] font-bold">Experience:</p>
                                        <p class="text-[15px] text-[#3b82f6]">{{ jobDetails.experience }}</p>
                                    </div>
                                </div>

                                <div class="flex items-center gap-4">
                                    <i class="pi pi-dollar" style="font-size: 1.5rem"></i>
                                    <div class="">
                                        <p class="text-[15px] font-bold">Salary:</p>
                                        <p class="text-[15px] text-[#3b82f6]">{{ formatSalary(jobDetails.salary) }}</p>
                                    </div>
                                </div>

                                <div class="flex items-center gap-4">
                                    <i class="pi pi-clock" style="font-size: 1.5rem"></i>
                                    <div class="">
                                        <p class="text-[15px] font-bold">Date posted:</p>
                                        <p class="text-[15px] text-[#3b82f6]">{{ formatDate(jobDetails.createdAt) }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from '#app'
import apiService from '../../../../service/api/api.service'

const route = useRoute()
const jobDetails = ref(null)
const loading = ref(false)
const error = ref(null)

const fetchJobDetails = async (id) => {
    if (!id) return
    
    loading.value = true
    error.value = null

    try {
        const cached = sessionStorage.getItem(`job_${id}`)
        if (cached) {
            jobDetails.value = JSON.parse(cached)
            loading.value = false
            return
        }

        const res = await apiService.get(`/jobs/${id}`)
        if (res.data.value?.data) {
            jobDetails.value = res.data.value.data
            sessionStorage.setItem(`job_${id}`, JSON.stringify(res.data.value.data))
        }
    } catch (err) {
        console.error('Error fetching job:', err)
        error.value = 'Could not load job details'
    } finally {
        loading.value = false
    }
}

watch(() => route.params.id, (newId) => {
    if (newId) fetchJobDetails(newId)
}, { immediate: true })

const formatSalary = (salary) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(salary)
}

const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('vi-VN')
}
</script>

<style>
.custom-btn:hover {
    @apply bg-blue-600 text-white;
}
</style>