<template>
    <div class="fixed inset-0 w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style="background-image: url('https://jobnova-shreethemes.vercel.app/static/media/bg3.b53090a36ed85cc017cd.jpg')">
        <div class="absolute inset-0 bg-gradient-to-b from-[#161c2d00] via-[#161c2d4d] to-[#161c2d]"></div>
        <div class="absolute mr-[55rem]">
            <div class="shadow-[0_0_3px_#1e293b26] rounded-[6px] p-6 w-[355px] h-auto bg-white">
                <div class="flex justify-center">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAASCAYAAACQCxruAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MjZCODBGOTNDQThFRDExOUVFN0M4QTNDNUQ1NTdERiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNkM1NUY0Mzc3QjMxMUVFODY2OEQyN0JBMDNCODg0QiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNkM1NUY0Mjc3QjMxMUVFODY2OEQyN0JBMDNCODg0QiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MkQ3REQyQjA0NzdFRTExQTVGMEMyMDEwMUFBRDE2OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MjZCODBGOTNDQThFRDExOUVFN0M4QTNDNUQ1NTdERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrnsFeAAAASxSURBVHja7FlNaBNREN6IP/gD5mCK4KHbgyB66Fa9KZiIBw9CtyAqiCQFQUTEKAoW1PQHEfTQCuJ104MevDQ96EGRbEUpCNp4lzbqQfCHRhAFlcZZOlvGcd57u0kLLXTgo+m+n33vzcw3b2YTe/p/WArZDtgL2AZYBXgLeAF4Bajzzs+vrrWWZfHJSuHZTkAP4CBgA2v7BXgGuAl4Ypo8lUo1s7Y0/q0iFrskAQ7+rgBqi2FRK9j/pwNnBBwWlBvIasABwGPAjZjvKqDn1/G3JDnABPYpI6YA0wAPYCvG1TWYUoyl68kr5i2TPmmFUgtkjeGap/FZAftQcdj6VHsaZHvgYrN5poV3/aPgU4C7gKhcexlwax6tv4yKcBTtofJzMee2yVhHc5hOzHkdnLNXoSQb2/h7K4yRXMX89PltQ3t4Rq6KoncoJqHyFLAG43IoFwE+4GGTCi4Lh1AiB+XiBpJoBDXSzqXIDjBPxgYe1aUYNwLoiEitNq6ZekwJ1x0q32V9O8i6SoQ1soAhwXhsNjeXrPCsE/f/n4KvoPJ0cgKwGfCaPR8APJIuXjGomyr3vLDhPlRA2M9Dw5KUMYxtobzBsZaCZqnSPI0BUPGIcms4xhfuECPMMDNkjXmmzKpCeRXhDmIrGCd0hBql6BbUvEnWKeg7sMxdTXgvpdxeQbnhRStDFp7UUJspFOjE1cRjerjUUCTlWvisiyncJkqraOjWZQar896SjvIDBbfHiLsq2d/gOE5FujBRY/SjMsosskIBY6tnoLq48dhl3uVr+voaRQ4rFMbPpGhwilG2r06u4DZhgi+ADzFod0sTlyt6GKb4NxrBG3PIBL0k/lKqj6IITzP/xpgGU4owliqVe2ctQnweFmh6TsEzwqLOAnYD/jBjmNGkKUtBPE1bNzlMBz15IaWq8G5XYdCWxgB4nM5RpU0qCiCfAJ/x/5/4e71ise/nYcPOPPUJYnWCIMMUp0qzKnjBo4fkLPCaOU1HuT27zEjSiIpkBCvwlvldsOaQzwNLPoSHdFKTQjUiPrs4mXLccwbrVr2DHlSrpm+R9U0awoSrKVTQFE+15iIzhEJMes6T4oor9QsU/BXwQLg03bFm688XAOOAfsAxYRPjaCRRckdTjNJdcLwI1t3o7Zkbd1XTzulwRDF/kqRnEiVbQj4fh55N4tI8+DrgCCtPngEcBXwEpDAHlqTHcLAOMgH1zncs76WFjDKmSmN4KA56bpqlU9WIlLiPHZzJGMO8dsJgBGVW0epjhY4CM8huzcXRNWQMqpRyTDCAHC2ghAqexFLlPTZgE0Il14SX8MMuCx5QZJvJkMpQEhevo9E+Q5oTla4tQzwe1MzTTS5tdoQLnK9hME/DauLtGFPKmmAYOUrTtBZ9H3Dcmi1am+S3NVuLHogZc4ukmsMPtE1htZTiujSeYPLKoYhVqlCGDDluEYs8pjy4w7Avqew6qihD6uKzFD6yCeF78FbAJZywhbV9s2Y/EwYfGV7SBul7cCqVauQTWhLpuJ280xfiFy8Lmi5a0p3AJodc0YQY0/rD6lYrCUG+Ff0zp83o3FewYZIYuy5EzZVRE/X6Uklhl6UR+SvAAO5USYx+wYKuAAAAAElFTkSuQmCC"
                        alt="Logo" class="h-5" />
                </div>

                <div class="mt-6 text-center font-semibold text-lg">REGISTER YOUR ACCOUNT</div>

                <div class="mt-4">
                    <label class="font-semibold">Your Name</label>
                    <input v-model="username" type="text" placeholder="Name" class="input-field" />
                </div>

                <div class="mt-4">
                    <label class="font-semibold">Your Email</label>
                    <input v-model="email" type="email" placeholder="example@website.com" class="input-field" />
                </div>

                <div class="mt-4">
                    <label class="font-semibold">Password</label>
                    <input v-model="password" type="password" placeholder="Password" class="input-field" />
                </div>

                <div class="flex justify-center mt-4 text-sm text-gray-600">
                    <span>I Accept <span class="text-blue-500 cursor-pointer">Terms And Conditions</span></span>
                </div>

                <div class="flex justify-center mt-4">
                    <button @click="handleSignup" class="register-button" :disabled="loading">
                        {{ loading ? 'PROCESSING...' : 'REGISTER' }}
                    </button>
                </div>

                <div v-if="errorMessage" class="text-red-500 text-center mt-2">
                    {{ errorMessage }}
                </div>

                <div class="flex justify-center mt-4 text-sm text-gray-600">
                    <span>Already have an account?</span>
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
const loading = ref(false);

const handleSignup = async () => {
    errorMessage.value = "";

    if (!username.value || !email.value || !password.value) {
        errorMessage.value = "Vui lòng điền đầy đủ thông tin!";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        errorMessage.value = "Email không hợp lệ!";
        return;
    }

    if (password.value.length < 6) {
        errorMessage.value = "Mật khẩu phải có ít nhất 6 ký tự!";
        return;
    }

    try {
        loading.value = true;

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
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
            console.log("Fake API response:", data);
            alert("Đăng ký thành công !");
            router.push("/auth/login");
        } else {
            errorMessage.value = "Đăng ký thất bại!";
        }
    } catch (error) {
        console.error("Lỗi đăng ký:", error);
        errorMessage.value = "Lỗi kết nối!";
    } finally {
        loading.value = false;
    }
};
</script>

<style scoped>
.input-field {
    width: 100%;
    height: 40px;
    margin-top: 0.5rem;
    padding: 0 10px;
    border: 1px solid lightgray;
    border-radius: 4px;
}

.register-button {
    width: 100%;
    height: 48px;
    font-weight: bold;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 4px;
    box-shadow: 0 3px 5px 0 #3b82f61a;
    cursor: pointer;
    transition: background-color 0.3s;
}

.register-button:hover {
    background-color: #2563eb;
}

.register-button:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
}
</style>