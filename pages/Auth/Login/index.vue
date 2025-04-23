<template>
  <div class="fixed inset-0 w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
    style="background-image: url('https://jobnova-shreethemes.vercel.app/static/media/bg3.b53090a36ed85cc017cd.jpg')">

    <div class="absolute inset-0 bg-gradient-to-b from-[#161c2d00] via-[#161c2d4d] to-[#161c2d]"></div>
    <div class="absolute justify-center">
      <div class="shadow-md rounded-lg p-6 w-[500px] bg-white">
        <div class="flex justify-center">
          <nuxt-link to="/" class="flex items-center">
            <img src="https://fox.ai.vn/wp-content/uploads/2024/07/Logo_Original-1.png" alt="Logo"
              class="h-[40px] w-[100px]" />
          </nuxt-link>
        </div>
        <div class="mt-4 text-center font-semibold text-lg">PLEASE SIGN IN</div>

        <TabView class="">
          <TabPanel header="Tìm việc">
            <div class="">
              <label class="font-semibold text-sm">Email</label>
              <input v-model="email" type="email" placeholder="example@website.com"
                class="border border-gray-300 rounded p-2 w-full mt-1" required />
            </div>
            <div class="mt-4">
              <label class="font-semibold text-sm">Password</label>
              <input v-model="password" type="password" placeholder="Password"
                class="border border-gray-300 rounded p-2 w-full mt-1" required />
            </div>
          </TabPanel>
          <TabPanel header="Nhà tuyển dụng">
            <div class="">
              <label class="font-semibold text-sm">Username</label>
              <input v-model="username" type="text" placeholder="example@website.com"
                class="border border-gray-300 rounded p-2 w-full mt-1" />
            </div>
            <div class="mt-4">
              <label class="font-semibold text-sm">Password</label>
              <input v-model="password" type="password" placeholder="Password"
                class="border border-gray-300 rounded p-2 w-full mt-1" />
            </div>
          </TabPanel>
        </TabView>



        <div class="flex justify-between text-gray-500 text-sm mt-4">
          <span>Remember Me</span>
          <nuxt-link to="/auth/forgotpass" class="cursor-pointer hover:underline">
            Forgot password?
          </nuxt-link>
        </div>
        <div class="mt-3">
          <button @click="handleLogin" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 w-full rounded"
            :disabled="loading">
            {{ loading ? 'ĐANG XỬ LÝ...' : 'ĐĂNG NHẬP' }}
          </button>
        </div>

        <div class="mt-4 flex items-center">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="mx-4 text-gray-500">Or Sign in with</span>
          <div class="flex-grow border-t border-gray-300"></div>
        </div>

        <div class="mt-4 flex justify-center space-x-4">
          <button @click="handleGoogleLogin"
            class="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-5 h-5 mr-2" alt="Google logo">
            <span>Google</span>
          </button>

          <button @click="handleFacebookLogin"
            class="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" class="w-5 h-5 mr-2" alt="Facebook logo">
            <span>Facebook</span>
          </button>
        </div>

        <div v-if="errorMessage" class="text-red-500 text-center text-sm mt-3">
          {{ errorMessage }}
        </div>
        <div class="flex justify-center mt-4 text-sm text-gray-500">
          <span>Don't have an account?</span>
          <nuxt-link to="/auth/signup" class="text-blue-500 font-medium hover:underline ml-2">
            Sign Up
          </nuxt-link>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { setAuthCookies } from "~/composables/authCookie";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const errorMessage = ref("");
const loading = ref(false);

const handleLogin = async () => {
  try {
    loading.value = true;
    errorMessage.value = "";

    if (!email.value || !password.value) {
      errorMessage.value = "Vui lòng điền đầy đủ thông tin!";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      errorMessage.value = "Email không hợp lệ!";
      return;
    }

    const response = await fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setAuthCookies(data.accessToken, data.refreshToken, {
        id: data.user.id,
        email: data.user.email,
        role: data.user.role,
        firstName: data.user.firstName,
        lastName: data.user.lastName
      });

      alert("Đăng nhập thành công!");
      router.push("/");
    } else {
      errorMessage.value = data.message || "Sai email hoặc mật khẩu!";
    }
  } catch (error) {
    console.error("Login error:", error);
    errorMessage.value = "Lỗi kết nối tới server!";
  } finally {
    loading.value = false;
  }
};

const handleGoogleLogin = async () => {
  try {
    const auth2 = await window.gapi.auth2.getAuthInstance();
    const googleUser = await auth2.signIn();

    const profile = googleUser.getBasicProfile();
    const googleToken = googleUser.getAuthResponse().id_token;

    const response = await fetch("YOUR_BACKEND_API/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: googleToken }),
    });

    if (!response.ok) throw new Error("Google login failed");

    const data = await response.json();
    setAuthCookies(data.accessToken, data.refreshToken, {
      id: data.id,
      email: profile.getEmail(),
      firstName: profile.getGivenName(),
      lastName: profile.getFamilyName(),
      image: profile.getImageUrl(),
    });

    alert("Đăng nhập Google thành công!");
    navigateTo("/");
  } catch (error) {
    console.error("Google login error:", error);
    errorMessage.value = "Đăng nhập Google thất bại!";
  }
};

const handleFacebookLogin = async () => {
  try {
    const response = await new Promise((resolve, reject) => {
      FB.login((response) => {
        if (response.authResponse) {
          resolve(response);
        } else {
          reject(new Error("Facebook login cancelled"));
        }
      }, { scope: 'email,public_profile' });
    });

    const profile = await new Promise((resolve) => {
      FB.api('/me', { fields: 'email,name,picture' }, (response) => {
        resolve(response);
      });
    });

    const apiResponse = await fetch("YOUR_BACKEND_API/auth/facebook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        accessToken: response.authResponse.accessToken,
        userID: response.authResponse.userID
      }),
    });

    if (!apiResponse.ok) throw new Error("Facebook login failed");

    const data = await apiResponse.json();
    setAuthCookies(data.accessToken, data.refreshToken, {
      id: data.id,
      email: profile.email,
      name: profile.name,
      image: profile.picture?.data?.url,
    });

    alert("Đăng nhập Facebook thành công!");
    navigateTo("/");
  } catch (error) {
    console.error("Facebook login error:", error);
    errorMessage.value = "Đăng nhập Facebook thất bại!";
  }
};
</script>
<style scoped>
input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
}
</style>