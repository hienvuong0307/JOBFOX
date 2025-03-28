<template>
    <div class="">
        <div class="flex flex-col">
            <div class="w-full h-24"></div>
        </div>
        <div class="flex justify-center">
            <DetailThree></DetailThree>
        </div>

        <div class="mb-10">
            <Vacancies />
        </div>
    </div>
</template>
  
  <script setup>

import { onMounted, ref, watch } from 'vue';
import DetailThree from '~/components/Jobs/JobDetail/JobDetail3/DetailThree.vue';
import Vacancies from '~/components/Jobs/JobDetail/JobDetail3/Vacancies.vue';
</script>
  
  <style>
</style>