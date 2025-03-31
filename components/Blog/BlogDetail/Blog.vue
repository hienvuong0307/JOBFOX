
   <template>
    <div class="flex justify-center mt-32 relative mb-10">
        <div class="w-[90%] ml-[5rem]">
            <div class="grid grid-cols-3 gap-4 w-full]">
                <div class="col-span-2 mb-6">
                    <div class="col-span-2 mb-6 rounded-xl border-[1px] shadow-lg">
                        <img :src="'https://jobnova-shreethemes.vercel.app/static/media/01.77f204828e1974ac5467.jpg'" alt="" class="w-full h-[400px] rounded-md object-cover" />
                        <div class="p-7">
                            <div class="mt-3 gap-2 space-y-4 p-2">
                                <p class="text-[16px] text-muted text-[#94a3b8]">
                                    The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It
                                    contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative
                                    meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.
                                </p>

                                <p class="text-[16px] text-muted text-[#94a3b8]">
                                    Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts
                                    containing the various letters and symbols specific to the output language.
                                </p>
                                <p class="text-[90px] text-muted text-[#94a3b8] relative text-center">""</p>
                                <p class="text-[20px] text-muted font-normal relative text-center">The man who comes back through the door in the wall will never be quite the same as the man who went out.</p>
                                <p class="text-[20px] text-muted text-[#94a3b8] relative text-center">- Jobnova Template</p>
                                <p class="text-[16px] text-muted text-[#94a3b8]">
                                    There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny
                                    or nonsensical stories.
                                </p>
                                <div>
                                    <div class="space-x-2">
                                        <a class="text-center bg-[#3b82f6] text-white text-sm font-medium px-3 py-1 rounded-md transition-colors duration-30"> Minimal </a>

                                        <a class="text-center bg-[#3b82f6] text-white text-sm font-medium px-3 py-1 rounded-md transition-colors duration-30"> Interior </a>

                                        <a class="text-center bg-[#3b82f6] text-white text-sm font-medium px-3 py-1 rounded-md transition-colors duration-30"> Furniture </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-2 mb-6 rounded-xl border-[1px] shadow-lg">
                        <div class="p-6 bg-white rounded shadow">
                            <h5 class="text-xl font-bold mb-0">Comments :</h5>
                            <ul class="list-none mb-0">
                                <li v-for="comment in comments" :key="comment.id" class="mt-[3.5rem]">
                                    <div class="flex justify-between">
                                        <div class="flex items-center">
                                            <a class="pr-3" :href="comment.detailLink">
                                                <img :src="comment.image" alt="avatar" class="w-10 h-10 object-cover rounded-full shadow" />
                                            </a>
                                            <div class="ml-2">
                                                <h6 class="mb-0 font-semibold">
                                                    <a class="text-gray-900 hover:underline" :href="comment.detailLink">
                                                        {{ comment.author }}
                                                    </a>
                                                </h6>
                                                <small class="text-gray-500"></small>
                                            </div>
                                        </div>
                                        <a class="text-gray-500 hover:underline" :href="comment.detailLink"> <i class="mdi mdi-reply"></i> Reply </a>
                                    </div>
                                    <div class="mt-3">
                                        <p class="h-[86px] text-gray-500 italic p-3 bg-gray-100 rounded">"{{ comment.comment }}"</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                        <div class=" col-span-2 mb-6 border-[1px] shadow-[0_0_3px_#1e293b26] rounded-[6px] p-6 ] ">
                            
                            <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                                <span style="font-weight: 500; font-size: 1.2rem">Subject</span>
                                <InputText name="username" type="text" placeholder="Your Subject:" style="padding-left: 10px;width: 860px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                            </div>
                            <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                                <span style="font-weight: 500; font-size: 1.2rem">Comments<span style="color: crimson; margin-left: 0.2rem; font-size: 1.2rem">*</span></span>
                                <Textarea id="description" v-model="description" placeholder="Your Message:" class="" style="padding-top: 10px;padding-left: 10px;width: 860px;height: 117px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                            </div>
                            <div class="flex">
                                <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                                    <span style="font-weight: 500; font-size: 1.2rem">Your Name<span style="color: crimson; margin-left: 0.2rem; font-size: 1.2rem">*</span></span>
                                    <InputText name="username" type="text" placeholder="Your Name:" style="padding-left: 10px;width: 424px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                                </div>
                                <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem" class="ml-[1rem]">
                                    <span style="font-weight: 500; font-size: 1.2rem">Your Email<span style="color: crimson; margin-left: 0.2rem; font-size: 1.2rem">*</span></span>
                                    <InputText name="username" type="text" placeholder="Your Email:" style="padding-left: 10px;width: 424px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                                </div>
                            </div>
                            <div style="display: grid; align-items: center; justify-content: center; margin-top: 1.5rem; margin-left: 0.8rem">
                                <Button
                                    label="SEND MESSAGE"
                                    class="!h-12 text-white mr-2"
                                    style="width: 860px; background-color: #3b82f6 !important; border: 1px solid #3b82f6 !important; font-size: 12px; border: 1px solid #3b82f60d; box-shadow: 0 3px 5px 0 #3b82f61a; color: #fff"
                                />
                            </div>
                    </div>
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

const comments = [
    {
        id: 1,
        author: 'Lorenzo Peterson',
        image: 'https://jobnova-shreethemes.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        detailLink: '/blog-detail'
    },
    {
        id: 2,
        author: 'Tammy Camacho',
        image: 'https://jobnova-shreethemes.vercel.app/static/media/02.7df14e12e444ad660802.jpg',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        detailLink: '/blog-detail'
    },
    {
        id: 3,
        author: 'Tammy Camacho',
        image: 'https://jobnova-shreethemes.vercel.app/static/media/03.ba5f8794c055cc1488b5.jpg',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        detailLink: '/blog-detail'
    },
    {
        id: 4,
        author: 'Lorenzo Peterson',
        image: 'https://jobnova-shreethemes.vercel.app/static/media/04.35463172278c4051b5f4.jpg',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        detailLink: '/blog-detail'
    }
];

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