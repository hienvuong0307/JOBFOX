<template>
  <div class="flex justify-center">
    <div class="w-4/5">
      <div class="grid grid-cols-5 gap-6 mt-12">
        <div v-for="slot in jobFeatures" :key="slot.title" class="flex justify-center">
          <Card class="w-[210px] h-[270px] flex flex-col items-center text-center rounded-lg">
            <template #header>
              <div class="mt-[4rem]">
              <div class="flex justify-center">
                <div
                  class="text-4xl w-[50px] h-[50px] flex items-center justify-center text-[#3b82f6] bg-[#3b82f60d] rounded-lg !shadow-xl border border-transparent">
                  <i :class="`pi ${slot.icon}`"></i> 
                </div>
              </div>
              </div>
            </template>
            <template #title>
              <div class="mt-[1rem]">
                <h1 class="text-[18px] font-bold text-gray-800 ">{{ slot.title }}</h1>
              </div>
            </template>
            <template #subtitle>
              <span class="text-gray-500">{{ slot.description }}</span>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const jobFeatures = ref([
  { icon: "pi-desktop", title: "Business Development", description: "74 Jobs" },
  { icon: "pi-verified", title: "Marketing & Communication", description: "20 Jobs" },
  { icon: "pi-at", title: "Project Management", description: "35 Jobs" },
  { icon: "pi-objects-column", title: "Customer Service", description: "46 Jobs" },
  { icon: "pi-bullseye", title: "Software Engineering", description: "60 Jobs" },
  { icon: "pi-clone", title: "Human Resource HR", description: "74 Jobs" },
  { icon: "pi-microchip", title: "It & Networking", description: "20 Jobs" },
  { icon: "pi-inbox", title: "Sales & Marketing", description: "35 Jobs" },
  { icon: "pi-thumbs-up-fill", title: "Project Manager", description: "46 Jobs" },
  { icon: "pi-chart-scatter", title: "Data Science", description: "60 Jobs" },
]);
</script>
<style>

</style>