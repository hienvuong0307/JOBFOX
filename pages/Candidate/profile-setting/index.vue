 <template>
    <div class="">
        <div class="flex flex-col">
            <div class="w-full h-24"></div>
        </div>
        <div class="flex justify-center">
            <div class="card w-4/5">
                <div
                    class="bg-[url('https://jobnova-shreethemes.vercel.app/static/media/bg5.634b5f6c21dce4640652.jpg')] flex justify-center items-center object-cover relative shadow-[0_0_3px_#1e293b26] rounded-md"
                    style="height: 250px; width: 100%; background-position: center 50%"
                ></div>

                <div class="absolute top-[45%] left-[21%] transform -translate-x-1/2 flex items-center gap-4 text-left">
                    <img src="https://jobnova-shreethemes.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg" alt="" class="w-[110px] h-[110px] rounded-full object-cover border-4 border-white shadow-lg" />
                    <div class="mt-[1rem]">
                        <p class="font-bold text-[18px]">Mr. Calvin Carlo</p>
                        <p class="text-[#94a3b8] text-[17px]">Web Designer</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center mt-[10rem] mb-[10rem]">
            <Setting />
        </div>

        <div class="mb-10"></div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import Setting from '~/components/Candidate/ProfileSetting/Setting.vue';
</script>

<style>
</style>
