<template>
    <div class="flex justify-center mt-32 relative mb-10">
        <div class=" w-4/5">
            <div>
                <h2 class="text-4xl text-center font-bold opacity-90">Latest Blog or News</h2>
                <p class="text-center opacity-75 pt-5">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
            </div>
            <div class="grid grid-cols-3 gap-4 mb-16 mt-10">
                <div>
                    <Card style=" overflow: hidden">
                        <template #header>
                            <div class="relative">
                                <div class="overflow-hidden rounded-t-md ">
                                    <img class="rounded-t-md transition-transform duration-300 ease-in-out" @mousemove="handleMouseMove"
                                            @mouseleave="handleMouseLeave"
                                            src="https://jobnova-shreethemes.vercel.app/static/media/01.77f204828e1974ac5467.jpg" />
                                </div>
                                <Tag class="absolute -bottom-3 left-4" severity="info" value="Arts"></Tag>
                            </div>
                        </template>
                        <template #subtitle>Card subtitle</template>
                        <template #title>11 Tips to Help You Get New Clients Through Cold Calling</template>
                        <template #footer>
                            <div class="flex gap-3 mt-1">
                                <p class="relative inline-block underline-hover font-semibold hover:text-blue-500">Read Now &#129122;</p>
                                <div class="shink-0"></div>
                                <Button label="By" class="flex-1" text />
                            </div>
                        </template>
                    </Card>
                </div>
                <div>
                    <Card style=" overflow: hidden">
                        <template #header>
                            <div class="relative">
                                <div class="overflow-hidden rounded-t-md ">
                                    <img class="rounded-t-md transition-transform duration-300 ease-in-out" @mousemove="handleMouseMove"
                                            @mouseleave="handleMouseLeave"
                                            src="https://jobnova-shreethemes.vercel.app/static/media/02.4be7e70c2b2a4948b34d.jpg" />
                                </div>
                                <Tag class="absolute -bottom-3 left-4" severity="info" value="IIIustration"></Tag>
                            </div>
                        </template>
                        <template #subtitle>Card subtitle</template>
                        <template #title>DigitalOcean launches first Canadian data centre in Toronto</template>
                        <template #footer>
                            <div class="flex gap-3 mt-1">
                                <p class="relative inline-block underline-hover font-semibold hover:text-blue-500">Read Now &#129122;</p>
                                <div class="shink-0"></div>
                                <Button label="By" class="flex-1" text />
                            </div>
                        </template>
                    </Card>
                </div>
                <div>
                    <Card style="overflow: hidden">
                        <template #header>
                            <div class="relative">
                                <div class="overflow-hidden rounded-t-md ">
                                    <img class="rounded-t-md transition-transform duration-300 ease-in-out" @mousemove="handleMouseMove"
                                            @mouseleave="handleMouseLeave"
                                            src="https://jobnova-shreethemes.vercel.app/static/media/03.af46bba7667e676029f3.jpg" /> 
                                </div>  
                                <Tag class="absolute -bottom-3 left-4" severity="info" value="Music"></Tag>
                            </div>
                        </template>
                        <template #subtitle>Card subtitle</template>
                        <template #title>
                            Using Banner Stands To Increase Trade Show Traffic
                        </template>
                        <template #footer>
                            <div class="flex gap-3 mt-1">
                                <p class="relative inline-block underline-hover font-semibold hover:text-blue-500">Read Now &#129122;</p>
                                <div class="shink-0"></div>
                                <Button label="By" class="flex-1" text />
                            </div>
                        </template>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const handleMouseMove = (e) => {
    e.target.classList.add('transform', 'scale-105', "opacity-90");
}
const handleMouseLeave = (e) => {
    e.target.classList.remove('transform', 'scale-105', "opacity-90");
}
</script>

<style scoped>
.underline-hover::after {
  content: '';
  @apply absolute bottom-[-1px] left-0 w-0 h-[2px] bg-blue-500 transition-[width] duration-300;
}

.underline-hover:hover::after {
  @apply w-full;
}
</style>