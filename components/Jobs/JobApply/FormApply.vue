<template>
    <div class="flex flex-col gap-5 w-2/5 card border border-solid border-slate-200 shadow-md rounded-md">
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="name">Name<span class="text-red-500">*</span></label>
            <InputText id="name" v-model="name" placeholder="Name" class="input-field" />
        </div>
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="email">Email:<span class="text-red-500">*</span></label>
            <InputText id="email" v-model="email" placeholder="example@techfox.la" class="input-field" />
        </div>
        <div class="flex flex-col gap-3">
            <label class="text-xl font-medium" for="phone">Phone:<span class="text-red-500">*</span></label>
            <InputText id="phone" v-model="contactNumber" placeholder="Phone Number" class="input-field" />
        </div>
        <div v-if="errorMessage" class="text-red-500 text-sm mt-2">
            {{ errorMessage }}
        </div>
        <div class="flex align-items-center gap-2">
            <Button :label="loading ? 'ĐANG XỬ LÝ...' : 'LƯU THÔNG TIN'" :disabled="loading" @click="handleSave"
                style="background-color: #0b63f3; color: #ffffff" class="text-[14px] px-6 py-3" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import apiService from '../../../service/api/api.service'

const route = useRoute();
const jobId = ref(route.params.id); 

const name = ref('');
const email = ref('');
const contactNumber = ref('');
const errorMessage = ref('');
const loading = ref(false);

const res = await apiService.get('/manager/jobs')
console.log(res.data.value);

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePhone = (phone) => {
    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    return phoneRegex.test(phone);
};

const handleSave = async () => {
    errorMessage.value = "";

    if (!name.value) {
        errorMessage.value = "Vui lòng nhập họ tên!";
        return;
    }

    if (!email.value) {
        errorMessage.value = "Vui lòng nhập email!";
        return;
    }
    if (!validateEmail(email.value)) {
        errorMessage.value = "Email không đúng định dạng!";
        return;
    }

    if (!contactNumber.value) {
        errorMessage.value = "Vui lòng nhập số điện thoại!";
        return;
    }
    if (!validatePhone(contactNumber.value)) {
        errorMessage.value = "Số điện thoại không hợp lệ!";
        return;
    }

    loading.value = true;

    apiService.post('/manager/jobs', {
        name: name.value,
        email: email.value,
        contactNumber: contactNumber.value.startsWith('0') 
            ? parseInt('84' + contactNumber.value.substring(1)) 
            : parseInt(contactNumber.value),
        jobPosts: [jobId.value] // Thêm jobId vào mảng jobPosts
    }).then((res) => {
        console.log('Response:', res.data.value);
        if (res.data.value) {
            alert("Ứng tuyển thành công!");
            resetForm();
        } else {
            errorMessage.value = "Ứng tuyển thất bại!";
        }
    })
    .catch((err) => {
        console.log(err);
        errorMessage.value = "Không thể kết nối đến server!";
    })
    .finally(() => {
        loading.value = false;
    });
};

const resetForm = () => {
    name.value = '';
    email.value = '';
    contactNumber.value = '';
    errorMessage.value = '';
};
</script>

<style scoped>
.input-field {
    padding-left: 10px;
    width: 550px;
    height: 40px;
    margin-top: 0.5rem;
    border: 1px solid lightgray;
    border-radius: 4px;
}
</style>