<template>
  <div class="card w-4/5">
      <DataView :value="JobData" class="w-full">
          <template #list="slotProps">
              <div class="grid grid-cols-5 gap-5">
                  <div v-for="(item, index) in slotProps.items" :key="index" class="">
                      <Card style="overflow: hidden; box-shadow: 0 0 3px  #1e293b26; height: 110px; background-color: #f8f9fc;">
                          <template #header>
                              <div class="">  
                                <div class="flex items-center m-5 mt-1 text-[18px] font-bold">{{ item.title }}</div>
                                  <div class="text-[15px] opacity-75 text-[#94a3b] ml-[1rem] ">{{ item.desc }}</div>
                                  <div class="text-[15px] text-[#3b82f6] text-center font-medium flex mt-[0.4rem] ml-[1rem]">Explore Jobs<i class="pi pi-arrow-right mt-[0.4rem] ml-[0.5rem]" style="color: #3b82f6 "></i></div>
                              </div>
                          </template>
                      </Card>
                  </div>
              </div>
          </template>
      </DataView>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const JobData = ref([
  {
      id: 1,
      title: 'Human Resource',
      desc: '90 Jobs Available'
  },
  {
      id: 2,
      image: 'https://imagepng.org/wp-content/uploads/2019/08/google-icon-1.png',
      title: 'It & Networking',
      desc: '90 Jobs Available'
  },
  {
      id: 3,
      title: 'Sales & Marketing',
      desc: '90 Jobs Available'
  },
  {
      id: 4,
      title: 'Accounting',
      desc: '90 Jobs Available'
  },
  {
      id: 5,
      title: 'Delivery Boy',
      desc: '90 Jobs Available'
  },
  {
      id: 6,
      title: 'Data Science',
      desc: '90 Jobs Available'
  },
  {
      id: 7,
      title: 'Project Manager',
      desc: '90 Jobs Available'
  },
  {
      id: 8,
      title: 'Engineering',
      desc: '90 Jobs Available'
  },
  {
      id: 9,
      title: 'Help Center',
      desc: '90 Jobs Available'
  },
  {
      id: 10,
      title: 'Full Stack Developer',
      desc: '90 Jobs Available'
  }
]);
</script>

<style>
</style>