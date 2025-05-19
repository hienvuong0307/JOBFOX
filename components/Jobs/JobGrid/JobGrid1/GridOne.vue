<template>
  <!-- <div class="flex justify-center">
    <div class="card mt-10 w-4/5">
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-4">
          <DataView :value="jobListings" class="w-full" paginator :rows="12">
            <template #list="slotProps">
              <div class="grid grid-cols-4 gap-5">
                <div v-for="(item, index) in slotProps.items" :key="index" class="p-1 mt-[4rem]">
                  <NuxtLink :to="`/jobs/job-detail-two/${item.id}`" class="">
                    <Card style="overflow: hidden; box-shadow: 0 0 3px #1e293b26">
                      <template #header>
                        <div class="flex items-center flex-1 m-5">
                          <div
                            class="bg-white border w-15 h-15 border-slate-100 border-solid rounded-lg absolute mb-[4rem]"
                            style="box-shadow: 0 5px 13px #1e293b33; border-radius: 6px">
                            <img :src="item.image" :alt="item.company" class="!w-14 !h-14 bg-white m-1 rounded-lg" />
                          </div>
                          <div class="grow"></div>
                        </div>
                      </template>
<template #title>
                        <p class="text-[18px] font-bold">{{ item.company }}</p>
                      </template>
<template #subtitle>
                        <p class="text-[14px] opacity-75">{{ item.CompanyTitle }}</p>
                        <div class="w-full h-[1px] bg-slate-100 mt-5"></div>
                        <div class="mt-2 gap-2 mb-8">
                          <p class="text-[15px] font-bold">{{ item.position }}</p>
                          <p class="text-[15px] ">{{ item.positionName }}</p>

                          <p class="text-[13px] opacity-75 flex items-center mt-2">
                            <i class="pi pi-map-marker max-w-[200%]" style="color: #94a3b8"></i>
                            {{ item.location }}
                          </p>
                          <tag class="text-[12px] text-white mt-2 ">{{ item.salary }}</tag>
                        </div>
                        <div class>
                          <div class="absolute ml-[4.5rem]">
                            <NuxtLink :to="`/jobs/job-apply/${item.id}`" class="p-button p-button-primary text-white">
                              Apply Now
                            </NuxtLink>
                          </div>
                        </div>
                      </template>
</Card>
</NuxtLink>
</div>
</div>
</template>
</DataView>
</div>
</div>
</div>
</div> -->

  <div class="flex justify-center">
    <div class="card mt-1 w-4/5">
      <DataView :value="jobListings" class="w-full" paginator :rows="12">
        <template #list="slotProps">
          <div class="grid grid-cols-1 gap-4">
            <div v-for="(item, index) in slotProps.items" :key="index" class="">
              <NuxtLink :to="`/jobs/job-detail-two/${item.id}`" class="">
                <Card
                  class="h-[125px] overflow-hidden shadow-sm border rounded-lg transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5">
                  <template #title>
                    <div class="flex items-center gap-4 p-5">
                      <div
                        class="w-16 h-16 border border-slate-100 rounded-lg flex items-center justify-center shadow-sm">
                        <img :src="item.image" :alt="item.company" class="w-14 h-14 rounded-lg bg-white p-1" />
                      </div>

                      <div class="flex flex-col flex-1">
                        <p class="text-[18px] font-bold">{{ item.company }}</p>
                      </div>

                      <div class="flex flex-col flex-1">
                        <span class="text-[18px]"><i class="pi pi-chevron-right"></i> {{item.position}}</span>
                        <span class="text-[15px] font-medium opacity-75"><i class="pi pi-chevron-right opacity-75 text-[13px]"></i>{{item.positionName}}</span>
                      </div>

                      <div class="flex flex-col flex-1">
                        <div class="text-[16px] flex items-center text-gray-500 gap-1"><i
                            class="pi pi-map-marker text-gray-400"></i> {{ item.location }}</div>
                        <span class="text-[16px] opacity-75 flex items-center gap-1"> <i
                            class="pi pi-dollar text-blue-500"></i> {{ item.salary }}/mo </span>
                      </div>

                      <div class="flex items-center gap-3">
                        <NuxtLink :to="`/jobs/job-apply/${item.id}`" class="p-button p-button-primary text-white">
                          Apply Now
                        </NuxtLink>
                      </div>
                    </div>
                  </template>
                </Card>
              </NuxtLink>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import apiService from '../../../../service/api/api.service';

const jobListings = ref([]);
const loading = ref(false);
const errorMessage = ref('');

onMounted(async () => {
  const cachedJobs = localStorage.getItem('jobListings');
  if (cachedJobs) {
    jobListings.value = JSON.parse(cachedJobs);
  }

  try {
    loading.value = true;
    const res = await apiService.get('/jobs?page=1&limit=12');

    if (res.data.value?.data) {
      const formattedJobs = res.data.value.data.map(job => ({
        id: job._id,
        company: job.companyName,
        image: job.CompanyLogoUrl || 'https://placehold.co/56x56/3b82f6/ffffff?text=' + job.companyName.charAt(0),
        posted: formatDate(job.createdAt),
        type: 'Full Time',
        position: job.jobTitle,
        positionName: job.positionName,
        location: job.location,
        CompanyTitle: job.CompanyTitle,
        description: job.description,
        salary: formatSalary(job.salary),
        experience: job.experience,
        skillRequired: job.skillRequired
      }));

      localStorage.setItem('jobListings', JSON.stringify(formattedJobs));
      jobListings.value = formattedJobs;
    }
  } catch (err) {
    console.error('Error:', err);
    errorMessage.value = 'Không thể tải danh sách công việc';
  } finally {
    loading.value = false;
  }
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} days ago`;
};

const formatSalary = (salary) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(salary);
};
</script>

<style scoped>
.underline-hover::after {
  content: '';
  @apply absolute bottom-[-3px] left-0 w-0 h-[2px] bg-blue-500 transition-[width] duration-300;
}

.underline-hover:hover::after {
  @apply w-full;
}

.bg-primary {
  background-color: #3b82f60d;
}
</style>