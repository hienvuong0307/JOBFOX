
   <template>
    <div class="flex justify-center mt-32 relative mb-10">
        <div class="w-4/5">
            <DataView :value="blogData" class="mb-16 mt-10" paginator :rows="9">
                <template #list="slotProps">
                    <div class="grid grid-cols-3 gap-4">
                        <div v-for="(item, index) in slotProps.items" :key="index" class="flex-1 h-[500px]">
                            <Card style="overflow: hidden; height: 450px">
                                <template #header>
                                    <div class="relative">
                                        <div class="overflow-hidden rounded-t-md relative group">
                                            <img class="rounded-t-md w-full h-[200px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" :src="item.image" />
                                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#161c2de6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                        </div>

                                        <Tag class="absolute -bottom-3 left-4" severity="info" :value="item.tag"></Tag>
                                    </div>
                                    <div class="ml-[1.5rem]">
                                        <div class="flex items-center gap-4 text-sm text-gray-500 mt-7">
                                            <div class="flex items-center gap-1">
                                                <i class="pi pi-calendar" style="font-weight: 500; color: black"></i>
                                                <span>{{ item.date }}</span>
                                            </div>
                                            <div class="flex items-center gap-1">
                                                <i class="pi pi-clock" style="font-weight: 500; color: black"></i>
                                                <span>{{ item.clock }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template #subtitle> </template>
                                <template #title>
                                    <span class="text-[19px] font-bold transition-colors duration-300 ease-in-out hover:text-[#0d6efd]">
                                        {{ item.title }}</span>
                                    </template>
                                <template #footer>
                                    <div class="flex gap-3 ">
                                        <p class="relative text-[16px] ml-1 inline-block underline-hover font-semibold hover:text-blue-500">Read Now &#129122;</p>
                                        <div class="flex items-center gap-1 ml-[11rem]">
                                            <span class="text-[15px]">By</span>
                                            <span class="text-[15px] text-[#8596ae]">{{ item.app || 'Unknown' }}</span>
                                        </div>
                                    </div>
                                </template>
                            </Card>
                        </div>
                    </div>
                </template>
            </DataView>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const blogData = ref([
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/01.77f204828e1974ac5467.jpg',
        tag: 'Arts',
        title: '11 Tips to Help You Get New Clients Through Cold Calling',
        app: 'Google',
        date: '13th July 2023',
        clock: '2 min read'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/02.4be7e70c2b2a4948b34d.jpg',
        tag: 'IIIustration',
        title: 'DigitalOcean launches first Canadian data centre in Toronto',
        app: 'Facebook',
        date: '29th Nov 2023',
        clock: '5 min read'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/03.af46bba7667e676029f3.jpg',
        tag: 'Music',
        title: 'Using Banner Stands To Increase Trade Show Traffic',
        app: 'Linkedin',
        date: '29th Dec 2023',
        clock: '5 min read'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/04.722f4b31b7d8026d6114.jpg',
        tag: 'Arts',
        title: '11 Tips to Help You Get New Clients Through Cold Calling',
        app: 'Google',
        date: '13th March 2023',
        clock: '5 min read'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/05.46a6b68834c5ad68f569.jpg',
        tag: 'IIIustration',
        title: 'DigitalOcean launches first Canadian data centre in Toronto',
        app: 'Facebook',
        date: '13th July 2023',
        clock: '2 min read'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/06.59242e95a2d437185c41.jpg',
        tag: 'Music',
        title: 'Using Banner Stands To Increase Trade Show Traffic',
        app: 'Linkedin',
        date: '5th May 2023',
        clock: '10 min read'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/07.67c72a711ee8d2867518.jpg',
        tag: 'Arts',
        title: '11 Tips to Help You Get New Clients Through Cold Calling',
        app: 'Google',
        date: '20th June 2023',
        clock: '5 min read'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/08.e9a1c757488cf33d5d1e.jpg',
        tag: 'IIIustration',
        title: 'DigitalOcean launches first Canadian data centre in Toronto',
        app: 'Facebook',
        date: '31st Aug 2023',
        clock: '5 min read'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/09.346afccb50b0d2a30c8b.jpg',
        tag: 'Music',
        title: 'Using Banner Stands To Increase Trade Show Traffic',
        app: 'Linkedin',
        date: '1st Sep 2024',
        clock: '2 min read'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/08.e9a1c757488cf33d5d1e.jpg',
        tag: 'IIIustration',
        title: 'DigitalOcean launches first Canadian data centre in Toronto',
        app: 'Facebook',
        date: '31st Aug 2023',
        clock: '5 min read'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/08.e9a1c757488cf33d5d1e.jpg',
        tag: 'IIIustration',
        title: 'DigitalOcean launches first Canadian data centre in Toronto',
        app: 'Facebook',
        date: '31st Aug 2023',
        clock: '5 min read'
    },
    {
        image: 'https://jobnova-shreethemes.vercel.app/static/media/08.e9a1c757488cf33d5d1e.jpg',
        tag: 'IIIustration',
        title: 'DigitalOcean launches first Canadian data centre in Toronto',
        app: 'Facebook',
        date: '31st Aug 2023',
        clock: '5 min read'
    }
]);

const handleMouseMove = (e) => {
    e.target.classList.add('transform', 'scale-105', 'opacity-90');
};

const handleMouseLeave = (e) => {
    e.target.classList.remove('transform', 'scale-105', 'opacity-90');
};
</script>

<style scoped>
.underline-hover::after {
    content: '';
    @apply absolute bottom-[-1px] left-0 w-0 h-[2px] bg-blue-500 transition-[width] duration-300;
}

.underline-hover:hover::after {
    @apply w-full;
}

.card-container:hover .card-overlay {
    opacity: 1;
}

/* Optional: Adjust image transition on hover */
.card-container:hover img {
    transform: scale(1.05);
}
</style>