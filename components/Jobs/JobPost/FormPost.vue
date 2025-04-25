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
        <InputText id="salary" v-model="displaySalary" type="text" placeholder="Monthly Salary (VND)"
          class="input-field" @input="handleSalaryInput" />
      </div>
      <div class="flex flex-col">
        <label class="text-xl font-medium" for="companyLogo">Company Logo URL</label>
        <InputText 
          id="companyLogo" 
          v-model="companyLogoUrl" 
          placeholder="Enter logo URL (e.g. https://example.com/logo.png)" 
          class="input-field"
        />
        <span class="text-sm text-gray-500 mt-1">Enter direct URL to your company logo image</span>
        <img 
          v-if="companyLogoUrl" 
          :src="companyLogoUrl" 
          class="w-24 h-24 object-contain border rounded mt-2"
          @error="handleImageError"
          alt="Company logo preview" 
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
import { ref } from 'vue';
import apiService from '../../../service/api/api.service'


const companyName = ref('');
const companyTitle = ref('');
const description = ref('');
const email = ref('');
const website = ref('');
const companyContactNumber = ref('');
const location = ref('');
const jobTitle = ref('');
const positionName = ref('');
const experience = ref('');
const skillRequired = ref('');
const salary = ref('');
const loading = ref(false);
const errorMessage = ref('');
const displaySalary = ref('');
const companyLogoUrl = ref('');

const res = await apiService.get('/jobs')
console.log(res.data.value);

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateWebsite = (website) => {
  const websiteRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  return websiteRegex.test(website);
};

const validatePhone = (phone) => {
  const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  return phoneRegex.test(phone);
};

const validateImageUrl = (url) => {
  const urlRegex = /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i;
  return urlRegex.test(url);
};

const handleImageError = () => {
  errorMessage.value = "Không thể tải ảnh từ URL này!";
  companyLogoUrl.value = '';
};

const handlePostJob = async () => {
  errorMessage.value = "";

  if (!companyName.value || !jobTitle.value || !location.value || !salary.value) {
    errorMessage.value = "Vui lòng điền đầy đủ thông tin bắt buộc!";
    return;
  }

  if (companyName.value.length < 2 || companyName.value.length > 100) {
    errorMessage.value = "Tên công ty phải từ 2-100 ký tự!";
    return;
  }

  if (email.value && !validateEmail(email.value)) {
    errorMessage.value = "Email không đúng định dạng!";
    return;
  }

  if (website.value && !validateWebsite(website.value)) {
    errorMessage.value = "Website không hợp lệ!";
    return;
  }

  if (companyContactNumber.value && !validatePhone(companyContactNumber.value)) {
    errorMessage.value = "Số điện thoại không hợp lệ!";
    return;
  }

  if (description.value && description.value.length < 50) {
    errorMessage.value = "Mô tả công việc phải có ít nhất 50 ký tự!";
    return;
  }

  if (companyLogoUrl.value && !validateImageUrl(companyLogoUrl.value)) {
    errorMessage.value = "URL ảnh không hợp lệ! URL phải kết thúc bằng .jpg, .png, .gif,...";
    return;
  }

  loading.value = true;
  apiService.post('/jobs', {
    companyName: companyName.value,
    CompanyTitle: companyTitle.value,
    description: description.value,
    email: email.value,
    website: website.value,
    companyContactNumber: companyContactNumber.value,
    location: location.value,
    jobTitle: jobTitle.value,
    positionName: positionName.value,
    experience: experience.value,
    skillRequired: skillRequired.value.split(',').map(skill => skill.trim()),
    salary: parseInt(salary.value.replace(/,/g, '')),
    CompanyLogoUrl: companyLogoUrl.value || `https://placehold.co/56x56/3b82f6/ffffff?text=${companyName.value.charAt(0)}`,
    hiringManagers: {
      name: "Jane Doe",
      id: "66277c936f86cce14f86f441"
    }
  }).then((res) => {
    console.log('Response:', res.data.value);
    if (res.data.value) {
      alert("Đăng tin tuyển dụng thành công!");
      resetForm();
    } else {
      errorMessage.value = "Đăng tin thất bại!";
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

const resetForm = () => {
    companyName.value = '';
    companyTitle.value = '';
    description.value = '';
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
    companyLogoUrl.value = '';
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

input[type="file"].input-field {
  padding: 6px;
  height: auto;
}

.preview-image {
  max-width: 100px;
  max-height: 100px;
  object-fit: contain;
}
</style>