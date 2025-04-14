<template>
    <div class="">
        <div class="flex flex-col">
            <div class="w-full h-24"></div>
        </div>
        <div class="flex justify-center">
            <DetailTwo></DetailTwo>
        </div>

        <div class="">
            <Vacancies />
        </div>
    </div>
</template>
  
  <script setup>
import { onMounted, ref, watch } from 'vue';
import DetailTwo from '~/components/Jobs/JobDetail/JobDetail2/DetailTwo.vue';
import Vacancies from '~/components/Jobs/JobDetail/JobDetail2/Vacancies.vue';
</script>
  
  <style>
</style>