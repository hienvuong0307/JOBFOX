
   <template>
    <div class="flex justify-center mt-32 relative mb-10">
        <div class="w-4/5">
            <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 mb-6">
                    <DataView :value="blogData" class="mb-16 mt-10" paginator :rows="9">
                        <template #list="slotProps">
                            <div class="grid grid-cols-2 gap-4">
                                <div v-for="(item, index) in slotProps.items" :key="index" class="flex-1">
                                    <Card style="overflow: hidden; height: 450px">
                                        <template #header>
                                            <div class="relative">
                                                <div class="overflow-hidden rounded-t-md relative group">
                                                    <img
                                                        class="rounded-t-md w-full h-[200px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                                        @mousemove="handleMouseMove"
                                                        @mouseleave="handleMouseLeave"
                                                        :src="item.image"
                                                    />
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
                                            <span class="text-[19px] font-bold transition-colors duration-300 ease-in-out hover:text-[#0d6efd]"> {{ item.title }}</span>
                                        </template>
                                        <template #footer>
                                            <div class="flex gap-3">
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

                <div class="col-span-1 flex flex-col">
                    <div class="sticky top-[5rem] self-start">
                        <div class="w-full bg-white rounded-xl border-[1px] shadow-lg p-4">
                            <div class="mt-5 space-y-10 w-[25rem]">
                                <div class="space-y-7">
                                    <h6 class="pt-2 pb-2 bg-gray-100 rounded-md text-center text-[15px] font-semibold">Search</h6>
                                    <form class="relative w-full">
                                        <input
                                            type="text"
                                            class="w-full h-[44px] px-4 pr-12 text-[15px] font-medium text-gray-800 bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            name="s"
                                            placeholder="Search..."
                                        />
                                        <button type="submit" class="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"><span class="pi pi-search"></span></button>
                                    </form>
                                </div>

                                <div>
                                    <h6 class="pt-2 pb-2 bg-gray-100 rounded-md text-center text-[15px] font-semibold">Recent Post</h6>
                                    <div class="mt-6">
                                        <div v-for="(item, index) in blogs" :key="index" class="flex items-center mt-4 w-full">
                                            <img :src="item.image" alt="" class="w-[104px] h-[65px] rounded-md object-cover" />
                                            <div class="ml-4 flex-1">
                                                <a :href="item.link" class="text-[17px] block text-gray-900 font-semibold transition-colors duration-300 hover:text-blue-600">
                                                    {{ item.title }}
                                                </a>
                                                <span class="text-[14px] text-gray-500">{{ item.date }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h6 class="pt-2 pb-2 bg-gray-100 rounded-md text-center text-[15px] font-semibold">Tags Cloud</h6>
                                    <div class="mt-6 space-y-4">
                                        <div class="grid grid-cols-3 gap-2">
                                            <template v-for="(tag, index) in tags.slice(0, 3)" :key="index">
                                                <a :href="tag.link" class="text-center bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-md transition-colors duration-300 hover:bg-[#0d6efd] hover:text-white">
                                                    {{ tag.name }}
                                                </a>
                                            </template>
                                        </div>
                                        <div class="grid grid-cols-4 gap-2">
                                            <template v-for="(tag, index) in tags.slice(3, 7)" :key="index + 3">
                                                <a :href="tag.link" class="text-center bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-md transition-colors duration-300 hover:bg-[#0d6efd] hover:text-white">
                                                    {{ tag.name }}
                                                </a>
                                            </template>
                                        </div>

                                        <div class="grid grid-cols-3 gap-2">
                                            <template v-for="(tag, index) in tags.slice(7, 10)" :key="index + 7">
                                                <a :href="tag.link" class="text-center bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-md transition-colors duration-300 hover:bg-[#0d6efd] hover:text-white">
                                                    {{ tag.name }}
                                                </a>
                                            </template>
                                        </div>
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
import { ref } from 'vue';

const tags = [
    { name: 'Business', link: '/blog-sidebar' },
    { name: 'Finance', link: '/blog-sidebar' },
    { name: 'Marketing', link: '/blog-sidebar' },
    { name: 'Fashion', link: '/blog-sidebar' },
    { name: 'Bride', link: '/blog-sidebar' },
    { name: 'Lifestyle', link: '/blog-sidebar' },
    { name: 'Travel', link: '/blog-sidebar' },
    { name: 'Beauty', link: '/blog-sidebar' },
    { name: 'Video', link: '/blog-sidebar' },
    { name: 'Audio', link: '/blog-sidebar' }
];

const blogs = [
    {
        title: 'Consultant Business',
        image: 'https://jobnova-shreethemes.vercel.app/static/media/01.77f204828e1974ac5467.jpg',
        date: '13th March 2023',
        link: '/blog-sidebar'
    },
    {
        title: 'Grow Your Business',
        image: 'https://jobnova-shreethemes.vercel.app/static/media/02.4be7e70c2b2a4948b34d.jpg',
        date: '5th May 2023',
        link: '/blog-sidebar'
    },
    {
        title: 'Look On The Glorious Balance',
        image: 'https://jobnova-shreethemes.vercel.app/static/media/03.af46bba7667e676029f3.jpg',
        date: '19th June 2023',
        link: '/blog-sidebar'
    }
];

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

.card-container:hover img {
    transform: scale(1.05);
}
</style>