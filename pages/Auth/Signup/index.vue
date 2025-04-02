<template>
    <div class="fixed inset-0 w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style="background-image: url('https://jobnova-shreethemes.vercel.app/static/media/bg3.b53090a36ed85cc017cd.jpg')">
        <div class="absolute inset-0 bg-gradient-to-b from-[#161c2d00] via-[#161c2d4d] to-[#161c2d]"></div>

        <div class="absolute mr-[55rem]">
            <div class="shadow-[0_0_3px_#1e293b26] rounded-[6px] p-6 w-[355px] h-auto bg-white">
                <div class="flex justify-center ml-0">
                    <img :src="logoSrc" alt="Logo" class="h-5" />
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 2rem">
                    <span style="font-weight: 600; font-size: 1.2rem">REGISTER YOUR ACCOUNT</span>
                </div>

                <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                    <span style="font-weight: 600; font-size: 1.2rem">Your Name</span>
                    <input v-model="username" type="text" placeholder="Name"
                        class="input-field" />
                </div>

                <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                    <span style="font-weight: 600; font-size: 1.2rem">Your Email</span>
                    <input v-model="email" type="text" placeholder="example@website.com"
                        class="input-field" />
                </div>

                <div style="display: grid; align-items: center; justify-content: space-between; margin-top: 1rem">
                    <span style="font-weight: 600; font-size: 1.2rem">Password</span>
                    <input v-model="password" type="password" placeholder="Password"
                        class="input-field" />
                </div>

                <div class="flex justify-center mt-4">
                    <span class="text-[1.1rem] font-light text-[#94a3b8]">
                        I Accept <span class="text-[#2372f5]">Terms And Conditions</span>
                    </span>
                </div>

                <div class="flex justify-center mt-4">
                    <button @click="handleSignup" 
                        class="register-button">
                        REGISTER
                    </button>
                </div>

                <div v-if="errorMessage" class="text-red-500 text-center mt-2">
                    {{ errorMessage }}
                </div>

                <div class="flex justify-center mt-4">
                    <span class="text-[1rem] text-[#94a3b8]">Already have an account?</span>
                    <nuxt-link to="/auth/login" class="ml-2 font-semibold text-blue-500 hover:underline">
                        Sign In
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const email = ref("");
const password = ref("");
const errorMessage = ref("");
const logoSrc = "data:image/png;base64,iVBORw0K..."; // Base64 logo

const handleSignup = async () => {
  if (!username.value || !email.value || !password.value) {
    errorMessage.value = "Please fill in all fields!";
    return;
  }

  try {
    const response = await fetch("https://dummyjson.com/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      router.push("/auth/login"); // ✅ Chuyển hướng sang trang đăng nhập
    } else {
      errorMessage.value = data.message || "Signup failed!";
    }
  } catch (error) {
    errorMessage.value = "Network error!";
  }
};
</script>

<style scoped>
.input-field {
    padding-left: 10px;
    width: 315px;
    height: 40px;
    margin-top: 0.5rem;
    border: 1px solid lightgray;
    border-radius: 4px;
}

.register-button {
    width: 315px;
    height: 48px;
    font-weight: bold;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 4px;
    box-shadow: 0 3px 5px 0 #3b82f61a;
    cursor: pointer;
}

.register-button:hover {
    background-color: #2563eb;
}
</style>
