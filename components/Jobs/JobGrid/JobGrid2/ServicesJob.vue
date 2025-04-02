<template>
    <div class="flex justify-center">
        <div class="w-[90%]">
            <div class="mt-16">
              <h2 class="text-[28px] font-bold text-center"> Here's why you'll love it Jobnova</h2>
                <p class="text-center text-[14px] pt-4 text-[#94a3b8] max-w-[40rem] mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews
                  on over 30000+ companies worldwide.</p>
            </div>
            <div class="grid grid-cols-4 gap-10 mt-10">
                <div v-for="slot in jobFeatures":key="slot" class="">
                  <Card style=" overflow: hidden">
                      <template #header>
                        <div class="flex justify-center mt-6">
                            <Button :icon="`pi ${slot.icon}`" style="color:#3b82f6; background-color: #3b82f60d;" class="text-4xl !w-[49px] !h-[49px]"  text raised ></Button>
                        </div>
                      </template>
                      <template #title><h1 class="text-xl font-bold text-center pt-6">{{ slot.title }}</h1></template>
                      <template #subtitle>
                        <div class="flex"> 
                        <span class="text-center opacity-75 pt-6 ">{{ slot.description }}</span>
                        </div>
                      </template>
                      <template #footer>
                          <div class="flex gap-3 mt-1 items-center">
                            <div class="flex ml-[6rem]">  
                               <p class="inline-block underline-hover text-xl font-medium hover:text-blue-500 cursor-pointer ">Read More &#129122;</p> 
                            </div>
                              </div>
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
  {
    icon: "pi-phone",
    title: "24/7 Support",
    description: "Many desktop publishing now use and a search for job.",
  },
  {
    icon:"pi-microchip",
    title: "Tech & Startup Jobs",
    description: "Many desktop publishing now use and a search for job.",
  },
  {
    icon: "pi-wave-pulse",
    title: "Quick & Easy",
    description: "Many desktop publishing now use and a search for job.",
  },
  {
    icon:  "pi-clock",
    title: "Save Time",
    description: "Many desktop publishing now use and a search for job.",
  },
]);
</script>

<style scoped>
.underline-hover::after {
  content: '';
  @apply absolute bottom-[-2px] left-0 w-0 h-[2px] bg-blue-500 transition-[width] duration-300;
}

.underline-hover:hover::after {
  @apply w-full;
}
</style>