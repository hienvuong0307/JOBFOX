<template>
    <div>
        <div class="flex flex-col">
            <div
                class="bg-[url('https://static.wixstatic.com/media/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg/v1/fill/w_1779,h_1282,al_c,q_90,enc_avif,quality_auto/b1136d_5f7d0629514747648c87ab658a35b96c~mv2.jpg')] flex justify-center items-center object-cover relative"
                style="height: 200px; width: 100%"
            ></div>

            <div class="absolute top-[8%] left-1/2 transform -translate-x-1/2 text-center">
                <img style="height: 100px; width: 200px" src="@/assets/img/logo3.png" alt="" />
            </div>

            <div class="absolute top-0 w-full flex justify-center z-10 mt-[-7rem]">
                <img style="height: 300px; width: 4000px" src="@/assets/SVG/banner10.svg" alt="Banner" />
            </div>
            <div class="w-full h-24"></div>
        </div>

        <div v-if="loading" class="flex justify-center py-8">
            <i class="pi pi-spin pi-spinner text-4xl text-blue-500"></i>
        </div>

        <div v-else-if="error" class="flex justify-center py-8">
            <p class="text-red-500">{{ error }}</p>
        </div>

        <div v-else class="flex justify-center">
            <DetailTwo v-if="jobData" :jobDetails="jobData"></DetailTwo>
        </div>

        <div class="">
            <Vacancies />
        </div>
    </div>
</template>
  
<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from '#app'
import DetailTwo from '~/components/Jobs/JobDetail/JobDetail2/DetailTwo.vue'
import apiService from '~/service/api/api.service'

const route = useRoute()
const jobData = ref(null)
const loading = ref(false)
const error = ref(null)

const fetchJobData = async (id) => {
    loading.value = true
    error.value = null

    try {
        const cached = sessionStorage.getItem(`job_${id}`)
        if (cached) {
            jobData.value = JSON.parse(cached)
            loading.value = false
            return
        }

        const res = await apiService.get(`/jobs/${id}`)
        if (res.data.value?.data) {
            jobData.value = res.data.value.data
            sessionStorage.setItem(`job_${id}`, JSON.stringify(res.data.value.data))
        }
    } catch (err) {
        console.error('Error fetching job:', err)
        error.value = 'Không thể tải thông tin công việc'
    } finally {
        loading.value = false
    }
}

watch(() => route.params.id, (newId) => {
    if (newId) {
        fetchJobData(newId)
    }
}, { immediate: true })

onMounted(() => {
    if (route.params.id && !jobData.value) {
        fetchJobData(route.params.id)
    }
})
</script>

<style scoped>

</style>