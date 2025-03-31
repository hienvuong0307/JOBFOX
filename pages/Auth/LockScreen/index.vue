<template>
    <div class="fixed inset-0 w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat" style="background-image: url('https://jobnova-shreethemes.vercel.app/static/media/bg3.b53090a36ed85cc017cd.jpg')">
        <div class="absolute inset-0 bg-gradient-to-b from-[#161c2d00] via-[#161c2d4d] to-[#161c2d]"></div>

        <div class="absolute inset-0"></div>

        <div class="absolute mr-[55rem]">
            <div class="shadow-[0_0_3px_#1e293b26] rounded-[6px] p-6 w-[355px] h-auto bg-white">
                <div class="flex justify-center">
                    <div class="flex flex-col items-center">
                        <img src="https://jobnova-shreethemes.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg" alt="" class="w-[80px] h-[80px] rounded-full object-cover border-white shadow-lg" />
                        <div class="mt-4 text-[16px] font-bold text-center">NAME USER</div>
                    </div>
                </div>

                <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                    <span style="font-weight: 600; font-size: 1.2rem">Password</span>
                    <InputText name="username" type="password" placeholder="Password" style="padding-left: 10px;width: 315px;height: 40px; margin-top: 0.5rem; border: 1px solid lightgray; border-radius: 4px" />
                </div>

                <div class="flex justify-between mt-4">
                    <span class="text-[1rem] text-[#94a3b8]">Remember Me</span>
                    <span class="text-[1rem] text-[#94a3b8]">Forgot password ?</span>
                </div>
                <div style="display: grid; align-items: center; justify-content: center; margin-top: 1.5rem; margin-left: 0.8rem">
                    <Button
                        label="SIGN IN"
                        class="!h-12 text-white mr-2"
                        style="width: 315px; background-color: #3b82f6 !important; border: 1px solid #3b82f6 !important; font-size: 12px; border: 1px solid #3b82f60d; box-shadow: 0 3px 5px 0 #3b82f61a; color: #fff"
                    />
                </div>
            </div>
        </div>

        <div></div>
    </div>
</template>

<script>
</script>

<style>
</style>