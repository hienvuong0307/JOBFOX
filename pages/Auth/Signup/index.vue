<template>
    <div class="fixed inset-0 w-full h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style="background-image: url('https://jobnova-shreethemes.vercel.app/static/media/bg3.b53090a36ed85cc017cd.jpg')">
        <div class="absolute inset-0 bg-gradient-to-b from-[#161c2d00] via-[#161c2d4d] to-[#161c2d]"></div>
        <div class="absolute justify-center">
            <div class="shadow-[0_0_3px_#1e293b26] rounded-[6px] p-6 w-[500px] bg-white">
                <div class="flex justify-center">
                    <nuxt-link to="/" class="flex items-center">
                        <img src="https://fox.ai.vn/wp-content/uploads/2024/07/Logo_Original-1.png" alt="Logo"
                            class="h-[40px] w-[100px]" />
                    </nuxt-link>
                </div>

                <div class="mt-6 text-center font-semibold text-lg">REGISTER YOUR ACCOUNT</div>
                <TabView class="">
                    <TabPanel header="Tìm việc">
                        <div class="flex gap-4">
                            <div class="w-1/2">
                                <label class="font-semibold">First Name</label>
                                <input v-model="firstName" type="text" placeholder="First Name" class="input-field"
                                    minlength="2" maxlength="50" required />
                            </div>
                            <div class="w-1/2">
                                <label class="font-semibold">Last Name</label>
                                <input v-model="lastName" type="text" placeholder="Last Name" class="input-field"
                                    minlength="2" maxlength="50" required />
                            </div>
                        </div>

                        <div class="mt-4">
                            <label class="font-semibold">Contact Number</label>
                            <input v-model="contactNumber" type="tel" placeholder="Phone Number" class="input-field"
                                pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" />
                        </div>

                        <div class="mt-4">
                            <label class="font-semibold">Email</label>
                            <input v-model="email" type="email" placeholder="example@website.com" class="input-field"
                                pattern="[^\s@]+@[^\s@]+\.[^\s@]+" title="Vui lòng nhập email hợp lệ" required />
                        </div>

                        <div class="mt-4">
                            <label class="font-semibold">Password</label>
                            <input 
                                v-model="password" 
                                type="password" 
                                placeholder="Password" 
                                class="input-field"
                                pattern="^[a-zA-Z0-9]{6,}$"
                                title="Mật khẩu phải có ít nhất 6 ký tự và không chứa ký tự đặc biệt"
                                required 
                            />
                        </div>

                        <div class="mt-4">
                            <label class="font-semibold">Confirm Password</label>
                            <input v-model="confirmPassword" type="password" placeholder="Confirm Password"
                                class="input-field" required />
                        </div>

                    </TabPanel>
                    <TabPanel header="Nhà tuyển dụng">
                        <div class="flex gap-4">
                            <div class="w-1/2">
                                <label class="font-semibold">First Name</label>
                                <input v-model="firstName" type="text" placeholder="First Name" class="input-field"
                                    minlength="2" maxlength="50" required />
                            </div>
                            <div class="w-1/2">
                                <label class="font-semibold">Last Name</label>
                                <input v-model="lastName" type="text" placeholder="Last Name" class="input-field"
                                    minlength="2" maxlength="50" required />
                            </div>
                        </div>

                        <div class="mt-4 flex gap-4">
                            <div class="w-1/2">
                                <label class="font-semibold">Company</label>
                                <input v-model="company" type="text" placeholder="Name Company" class="input-field" />
                            </div>
                            <div class="w-1/2">
                                <label class="font-semibold">Contact Number</label>
                                <input v-model="contactNumber" type="tel"
                                    placeholder="Nhập số điện thoại (VD: 0912345678)" class="input-field"
                                    pattern="(84|0[3|5|7|8|9])+([0-9]{8})"
                                    title="Vui lòng nhập số điện thoại Việt Nam hợp lệ (VD: 0912345678)" />
                            </div>
                        </div>

                        <div class="mt-4">
                            <label class="font-semibold">Email</label>
                            <input v-model="email" type="email" placeholder="example@website.com" class="input-field"
                                pattern="[^\s@]+@[^\s@]+\.[^\s@]+" title="Vui lòng nhập email hợp lệ" required />
                        </div>


                        <div class="mt-4">
                            <label class="font-semibold">Password</label>
                            <input 
                                v-model="password" 
                                type="password" 
                                placeholder="Password" 
                                class="input-field"
                                pattern="^[a-zA-Z0-9]{6,}$"
                                title="Mật khẩu phải có ít nhất 6 ký tự và không chứa ký tự đặc biệt"
                                required 
                            />
                        </div>

                        <div class="mt-4">
                            <label class="font-semibold">Confirm Password</label>
                            <input v-model="confirmPassword" type="password" placeholder="Confirm Password"
                                class="input-field" required />
                        </div>
                    </TabPanel>
                </TabView>

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
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const firstName = ref("");
const lastName = ref("");
const contactNumber = ref("");
const errorMessage = ref("");
const loading = ref(false);

const handleSignup = async () => {
    try {
        loading.value = true;
        errorMessage.value = "";

        if (!email.value || !password.value || !confirmPassword.value ||
            !firstName.value || !lastName.value || !contactNumber.value) {
            errorMessage.value = "Vui lòng điền đầy đủ thông tin!";
            loading.value = false;
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            errorMessage.value = "Email không hợp lệ!";
            loading.value = false;
            return;
        }

        if (firstName.value.length < 2 || firstName.value.length > 50) {
            errorMessage.value = "Họ phải từ 2-50 ký tự!";
            loading.value = false;
            return;
        }

        if (lastName.value.length < 2 || lastName.value.length > 50) {
            errorMessage.value = "Tên phải từ 2-50 ký tự!";
            loading.value = false;
            return;
        }

        const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
        if (!phoneRegex.test(contactNumber.value)) {
            errorMessage.value = "Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại Việt Nam (VD: 0912345678)";
            loading.value = false;
            return;
        }

        const passwordRegex = /^[a-zA-Z0-9]{6,}$/;
        if (!passwordRegex.test(password.value)) {
            errorMessage.value = "Mật khẩu phải có ít nhất 6 ký tự và không chứa ký tự đặc biệt!";
            loading.value = false;
            return;
        }

        if (password.value !== confirmPassword.value) {
            errorMessage.value = "Mật khẩu xác nhận không khớp!";
            loading.value = false;
            return;
        }

        const testConnection = await fetch("http://localhost:8000/");
        if (!testConnection.ok) {
            throw new Error("Server not responding");
        }

        const response = await fetch("http://localhost:8000/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
                firstName: firstName.value,
                lastName: lastName.value,
                contactNumber: contactNumber.value, 
                role: "employer",
                status: "active"
            })
        });

        const data = await response.json();
        console.log('Server response:', data);

        if (response.ok) {
            alert("Đăng ký thành công!");
            router.push("/auth/login");
        } else {
            errorMessage.value = data.message || "Đăng ký thất bại!";
        }
    } catch (error) {
        console.error("Connection error:", error);
        errorMessage.value = "Không thể kết nối đến server. Vui lòng kiểm tra lại kết nối!";
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