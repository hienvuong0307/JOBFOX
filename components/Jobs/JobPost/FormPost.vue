<template>
    <div class="flex flex-col gap-5 w-2/5 card border border-solid border-slate-200 shadow-md rounded-md">
        <div class="flex flex-col gap-5">
            <div>
                <span class="text-4xl font-semibold flex justify-center">Create Job</span>
            </div>
            <div class="flex flex-col">
                <label class="text-xl font-medium" for="companyName">Company Name</label>
                <InputText id="companyName" v-model="companyName" placeholder="Name Company" class="input-field" />
            </div>
            <div class="flex flex-col">
                <label class="text-xl font-medium" for="companyTitle">Company Title</label>
                <InputText id="companyTitle" v-model="companyTitle" placeholder="Title Company" class="input-field" />
            </div>
            <div class="flex flex-col">
                <label class="text-xl font-medium" for="description">Description</label>
                <Textarea id="description" v-model="description" placeholder="Describe the job" class="input-field"
                    rows="4" />
            </div>
            <div class="grid grid-cols-2 gap-5">
                <div class="flex flex-col">
                    <label class="text-xl font-medium" for="email">Email</label>
                    <InputText id="email" v-model="email" placeholder="Contact Email" class="input-field-half" />
                </div>
                <div class="flex flex-col">
                    <label class="text-xl font-medium" for="website">Website</label>
                    <InputText id="website" v-model="website" placeholder="Company Website" class="input-field-half" />
                </div>
            </div>
            <div class="flex flex-col">
                <label class="text-xl font-medium" for="companyContactNumber">Contact Number</label>
                <InputText id="companyContactNumber" v-model="companyContactNumber" type="tel"
                    placeholder="Company Phone Number" class="input-field" />
            </div>
            <div class="flex flex-col">
                <label class="text-xl font-medium" for="location">Location</label>
                <InputText id="location" v-model="location" placeholder="Job Location" class="input-field" />
            </div>
            <div class="grid grid-cols-2 gap-5">
                <div class="flex flex-col">
                    <label class="text-xl font-medium" for="jobTitle">Job Title</label>
                    <InputText id="jobTitle" v-model="jobTitle" placeholder="Job Title" class="input-field-half" />
                </div>
                <div class="flex flex-col">
                    <label class="text-xl font-medium" for="positionName">Position</label>
                    <InputText id="positionName" v-model="positionName" placeholder="Position Name"
                        class="input-field-half" />
                </div>
            </div>
            <div class="flex flex-col">
                <label class="text-xl font-medium" for="experience">Experience</label>
                <InputText id="experience" v-model="experience" placeholder="Required Experience" class="input-field" />
            </div>
            <div class="flex flex-col">
                <label class="text-xl font-medium" for="skillRequired">Skills Required</label>
                <InputText id="skillRequired" v-model="skillRequired"
                    placeholder="Required Skills (separate with commas)" class="input-field" />
            </div>
            <div class="flex flex-col">
                <label class="text-xl font-medium" for="salary">Salary</label>
                <InputText 
                    id="salary" 
                    v-model="displaySalary" 
                    type="text" 
                    placeholder="Monthly Salary (VND)"
                    class="input-field" 
                    @input="handleSalaryInput"
                />
            </div>
        </div>
        <div v-if="errorMessage" class="text-red-500 text-sm mt-2">
            {{ errorMessage }}
        </div>
        <div class="flex align-items-center gap-2 mt-4">
            <Button :label="loading ? 'ĐANG XỬ LÝ...' : 'POST NOW'" :disabled="loading" @click="handlePostJob"
                style="background-color: #0b63f3; color: #ffffff" class="text-[14px] px-6 py-3 w-[126px] h-[34px]"
                size="small" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// Form fields
const companyName = ref('');
const companyTitle = ref('');
const description = ref('');
const companyLogoUrl = ref('');
const email = ref('');
const website = ref('');
const companyContactNumber = ref('');
const location = ref('');
const jobTitle = ref('');
const positionName = ref('');
const experience = ref('');
const skillRequired = ref([]);
const salary = ref('');
const loading = ref(false);
const errorMessage = ref('');

const formatVND = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const displaySalary = ref('');

const handleSalaryInput = (event) => {
    let value = event.target.value.replace(/[^\d,]/g, '');
    value = value.replace(/,/g, '');
    if (value) {
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        displaySalary.value = value;
        salary.value = value.replace(/,/g, ''); 
    } else {
        displaySalary.value = '';
        salary.value = '';
    }
};

watch(salary, (newValue) => {
    if (newValue) {
        const plainNumber = newValue.toString().replace(/,/g, '');
        if (!isNaN(plainNumber)) {
            displaySalary.value = formatVND(plainNumber);
        }
    } else {
        displaySalary.value = '';
    }
});

const handlePostJob = async () => {
    try {
        loading.value = true;
        errorMessage.value = '';

        if (!companyName.value || !jobTitle.value || !location.value || !salary.value) {
            errorMessage.value = 'Vui lòng điền đầy đủ thông tin bắt buộc: Tên công ty, Vị trí, Địa điểm, Mức lương';
            loading.value = false;
            return;
        }

        if (companyName.value.length < 2 || companyName.value.length > 100) {
            errorMessage.value = 'Tên công ty phải từ 2-100 ký tự';
            loading.value = false;
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value && !emailRegex.test(email.value)) {
            errorMessage.value = 'Email không hợp lệ';
            loading.value = false;
            return;
        }

        const websiteRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        if (website.value && !websiteRegex.test(website.value)) {
            errorMessage.value = 'Website không hợp lệ';
            loading.value = false;
            return;
        }

        const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
        if (companyContactNumber.value && !phoneRegex.test(companyContactNumber.value)) {
            errorMessage.value = 'Số điện thoại không hợp lệ (VD: 0912345678)';
            loading.value = false;
            return;
        }

        if (jobTitle.value.length < 5 || jobTitle.value.length > 200) {
            errorMessage.value = 'Tiêu đề công việc phải từ 5-200 ký tự';
            loading.value = false;
            return;
        }

        if (description.value && description.value.length < 50) {
            errorMessage.value = 'Mô tả công việc phải có ít nhất 50 ký tự';
            loading.value = false;
            return;
        }

        const salaryNum = parseInt(salary.value.toString().replace(/,/g, ''));
        if (isNaN(salaryNum) || salaryNum < 1000000 || salaryNum > 100000000) {
            errorMessage.value = 'Mức lương phải từ 1,000,000 đến 100,000,000 VNĐ';
            loading.value = false;
            return;
        }

        if (skillRequired.value) {
            const skillsArray = skillRequired.value.split(',').map(skill => skill.trim());
            if (skillsArray.some(skill => skill.length < 2)) {
                errorMessage.value = 'Mỗi kỹ năng phải có ít nhất 2 ký tự';
                loading.value = false;
                return;
            }
        }

        const jobData = {
            companyName: companyName.value,
            CompanyTitle: companyTitle.value,
            description: description.value,
            CompanyLogoUrl: companyLogoUrl.value,
            email: email.value,
            website: website.value,
            companyContactNumber: companyContactNumber.value,
            location: location.value,
            jobTitle: jobTitle.value,
            positionName: positionName.value,
            experience: experience.value,
            skillRequired: skillRequired.value.split(',').map(skill => skill.trim()),
            salary: salaryNum,
            applierInfo: [],
            hiringManagers: {
                name: "Jane Doe",
                id: "66277c936f86cce14f86f441"
            }
        };

        const response = await fetch('http://localhost:8000/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobData)
        });

        const data = await response.json();

        if (response.ok) {
            alert('Đăng tin tuyển dụng thành công!');
            resetForm();
        } else {
            errorMessage.value = data.message || 'Có lỗi xảy ra khi đăng tin!';
        }
    } catch (error) {
        console.error('Error posting job:', error);
        errorMessage.value = 'Lỗi kết nối tới server!';
    } finally {
        loading.value = false;
    }
};

const resetForm = () => {
    companyName.value = '';
    companyTitle.value = '';
    description.value = '';
    companyLogoUrl.value = '';
    email.value = '';
    website.value = '';
    companyContactNumber.value = '';
    location.value = '';
    jobTitle.value = '';
    positionName.value = '';
    experience.value = '';
    skillRequired.value = '';
    salary.value = '';
    displaySalary.value = '';
};
</script>

<style scoped>
.input-field {
    width: 550px;
    height: 40px;
    margin-top: 0.5rem;
    padding: 0 10px;
    border: 1px solid lightgray;
    border-radius: 4px;
}

.input-field-half {
    width: 267px;
    height: 40px;
    margin-top: 0.5rem;
    padding: 0 10px;
    border: 1px solid lightgray;
    border-radius: 4px;
}

textarea.input-field {
    height: 100px;
    padding: 10px;
}
</style>