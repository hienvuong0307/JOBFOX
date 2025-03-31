<script setup>
import logoLight from '~/assets/img/logo1.png';
import logoDark from '~/assets/img/logo2.png';
import { onMounted, onUnmounted, ref } from 'vue'
import { useLayout } from '~/composables/layout'

const { toggleMenu, toggleDarkMode, isDarkTheme } = useLayout()
const activeDropdown = ref(null)
const showSearch = ref(false)
const scrollY = ref(0)



const showDropdown = (menu) => {
    activeDropdown.value = menu;
};

const hideDropdown = () => {
    activeDropdown.value = null;
};

const toggleSearch = () => {
    showSearch.value = !showSearch.value;
};

const handleScroll = () => {
    scrollY.value = window.scrollY;
};

const showProfileMenu = ref(false);
const profileRef = ref(null);

const handleImageClick = () => {
    showProfileMenu.value = !showProfileMenu.value;
};

const searchRef = ref(null);
const searchButtonRef = ref(null);

const handleClickOutside = (event) => {
    if (profileRef.value && !profileRef.value.contains(event.target) && !event.target.closest('.profile-button')) {
        showProfileMenu.value = false;
    }
    if (searchRef.value && !searchRef.value.contains(event.target) && !searchButtonRef.value.contains(event.target)) {
        showSearch.value = false;
    }
};

const updateScroll = () => {
    scrollY.value = window.scrollY;
};

onMounted(() => {
    window.addEventListener('scroll', updateScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll);
});
</script>

<template>
    <div :class="['layout-topbar', scrollY === 0 ? 'bg-transparent' : 'bg-white shadow-md']"
        class="py-2 px-4 flex justify-end">
        <div class="flex items-center justify-end w-full">
            <div class="layout-topbar-logo-container flex justify-end">
                <nuxt-link to="/home/home2" class="flex items-center">
                    <svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-2"></svg>
                    <div class="flex w-full justify-end items-center">
                        <img :src="scrollY === 0 ? logoLight : logoDark" alt="Logo" class="h-5" />
                    </div>
                </nuxt-link>
            </div>

            <div class="flex items-center space-x-9 ml-[29rem]">
                <div class="dropdown-container">
                    <div @mouseover="showDropdown('home')" @mouseleave="hideDropdown" class="h-full">
                        <p to="/"
                            :class="['text-[13.5px] font-semibold flex items-center', $route.path.includes('/home') || $route.path === '/' ? 'text-[#0b63f3]' : '', scrollY === 0 ? 'hover:text-white' : 'hover:text-[#0b63f3]']">
                            HOME <i class="pi pi-sort-down-fill" style="font-size: 45%"></i>
                        </p>
                        <div class="invisible-zone"></div>
                        <div v-if="activeDropdown === 'home'" class="dropdown-menu w-[12rem] h-[9.5rem] mt-[0.5rem]">
                            <div class="absolute top-[15%] space-y-5">
                                <nuxt-link to="/home/home1" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]"> HERO ONE
                                </nuxt-link>
                                <nuxt-link to="/home/home2" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]"> HERO TWO
                                </nuxt-link>
                                <nuxt-link to="/home/home3" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]"> HERO
                                    THREE </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dropdown-container">
                    <div @mouseover="showDropdown('jobs')" @mouseleave="hideDropdown" class="h-full">
                        <p to="/"
                            :class="['text-[13.5px] font-semibold flex items-center', $route.path.includes('/job') || $route.path === '/jobs' ? 'text-[#0b63f3]' : '', scrollY === 0 ? 'hover:text-white' : 'hover:text-[#0b63f3]']">
                            JOBS <span class="pi pi-sort-down-fill ml-1" style="font-size: 45%"></span>
                        </p>
                        <div class="invisible-zone"></div>
                        <div v-if="activeDropdown === 'jobs'" class="dropdown-menu w-[14rem] h-[20rem] mt-[0.5rem]">
                            <div class="absolute top-[9%] space-y-5">
                                <nuxt-link to="/jobs/job-categories" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]">JOB
                                    CATEGORIES</nuxt-link>
                                <div class="relative group">
                                    <p to="/"
                                        :class="['text-[12.5px] font-semibold flex items-center justify-between hover:text-[#0b63f3]', $route.path.includes('/jobgrid') || $route.path === '/jobgrids' ? 'text-[#0b63f3]' : '']">
                                        JOB GRIDS
                                        <span class="pi pi-chevron-right ml-[6rem]" style="font-size: 55%"></span>
                                    </p>
                                    <div class="absolute top-0 left-full w-[5.5rem] h-full"></div>
                                    <div class="absolute left-full top-0 ml-[1.77rem] hidden group-hover:block">
                                        <div class="bg-white rounded-lg shadow-lg w-[14rem] p-4">
                                            <div class="space-y-4">
                                                <nuxt-link to="/jobs/job-grid-one" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">JOB
                                                    GRID ONE </nuxt-link>
                                                <nuxt-link to="/jobs/job-grid-two" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">JOB
                                                    GRID TWO </nuxt-link>
                                                <nuxt-link to="/jobs/job-grid-three" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">JOB
                                                    GRID THREE </nuxt-link>
                                                <nuxt-link to="/jobs/job-grid-four" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">JOB
                                                    GRID FOUR </nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative group">
                                    <p to="/"
                                        :class="['text-[12.5px] font-semibold flex items-center justify-between hover:text-[#0b63f3]', $route.path.includes('/joblist') || $route.path === '/joblists' ? 'text-[#0b63f3]' : '']">
                                        JOB LIST
                                        <span class="pi pi-chevron-right ml-[6rem]" style="font-size: 55%"></span>
                                    </p>
                                    <div class="absolute top-0 left-full w-[5.5rem] h-full"></div>
                                    <div class="absolute left-full top-0 ml-[1.66rem] hidden group-hover:block">
                                        <div class="bg-white rounded-lg shadow-lg w-[14rem] p-4">
                                            <div class="space-y-4">
                                                <nuxt-link to="/jobs/job-list-one" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">JOB
                                                    LIST ONE </nuxt-link>
                                                <nuxt-link to="/jobs/job-list-two" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]"> JOB
                                                    LIST TWO </nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative group">
                                    <p to="/"
                                        :class="['text-[12.5px] font-semibold flex items-center justify-between hover:text-[#0b63f3]', $route.path.includes('/jobdetail') || $route.path === '/jobdetails' ? 'text-[#0b63f3]' : '']">
                                        JOB DETAIL
                                        <span class="pi pi-chevron-right ml-[6rem]" style="font-size: 55%"></span>
                                    </p>
                                    <div class="absolute top-0 left-full w-[5.5rem] h-full"></div>
                                    <div class="absolute left-full top-0 ml-[1.5rem] hidden group-hover:block">
                                        <div class="bg-white rounded-lg shadow-lg w-[14rem] p-4">
                                            <div class="space-y-4">
                                                <nuxt-link to="/jobs/job-detail-one" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">JOB
                                                    DETAIL ONE </nuxt-link>
                                                <nuxt-link to="/jobs/job-detail-two" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">JOB
                                                    DETAIL TWO </nuxt-link>
                                                <nuxt-link to="/jobs/job-detail-three" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">JOB
                                                    DETAIL THREE </nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <nuxt-link to="/jobs/job-apply" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]">JOB
                                    APPLY</nuxt-link>
                                <nuxt-link to="/jobs/job-post" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]">JOB
                                    POST</nuxt-link>
                                <nuxt-link to="/jobs/career" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]">CAREER</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- EMPLOYERS dropdown -->
                <div class="dropdown-container">
                    <div @mouseover="showDropdown('employers')" @mouseleave="hideDropdown" class="h-full">
                        <p
                            :class="['text-[13.5px] font-semibold flex items-center', $route.path.includes('/employer') || $route.path === '/employers' ? 'text-[#0b63f3]' : '', scrollY === 0 ? 'hover:text-white' : 'hover:text-[#0b63f3]']">
                            EMPLOYERS <span class="pi pi-sort-down-fill ml-1" style="font-size: 45%"></span>
                        </p>
                        <div class="invisible-zone"></div>
                        <div v-if="activeDropdown === 'employers'" class="dropdown-menu w-[16rem] h-[7rem] mt-[0.5rem]">
                            <div class="absolute top-[19%] space-y-5">
                                <nuxt-link to="/employers/employers" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]">
                                    EMPLOYERS </nuxt-link>
                                <nuxt-link to="/employers/employer-profile" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]">
                                    EMPLOYER PROFILE </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CANDIDATES dropdown -->
                <div class="dropdown-container">
                    <div @mouseover="showDropdown('candidates')" @mouseleave="hideDropdown" class="h-full">
                        <p
                            :class="['text-[13.5px] font-semibold flex items-center', $route.path.includes('/candidate') || $route.path === '/candidates' ? 'text-[#0b63f3]' : '', scrollY === 0 ? 'hover:text-white' : 'hover:text-[#0b63f3]']">
                            CANDIDATE <span class="pi pi-sort-down-fill ml-1" style="font-size: 45%"></span>
                        </p>
                        <div class="invisible-zone"></div>
                        <div v-if="activeDropdown === 'candidates'"
                            class="dropdown-menu w-[16rem] h-[10rem] mt-[0.5rem]">
                            <div class="absolute top-[18%] space-y-5">
                                <nuxt-link to="/candidate/candidates" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]">
                                    CANDIDATES </nuxt-link>
                                <nuxt-link to="/candidate/candidate-profile" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]">
                                    CANDIDATES PROFILE </nuxt-link>
                                <nuxt-link to="/candidate/profile-setting" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]">
                                    CANDIDATES SETTING </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- PAGE dropdown -->
                <div class="dropdown-container">
                    <div @mouseover="showDropdown('page')" @mouseleave="hideDropdown" class="h-full">
                        <p
                            :class="['text-[13.5px] font-semibold flex items-center', $route.path.includes('/page') || $route.path === '/pages' ? 'text-[#0b63f3]' : '', scrollY === 0 ? 'hover:text-white' : 'hover:text-[#0b63f3]']">
                            PAGE <span class="pi pi-sort-down-fill ml-1" style="font-size: 45%"></span>
                        </p>
                        <div class="invisible-zone"></div>
                        <div v-if="activeDropdown === 'page'" class="dropdown-menu w-[16rem] h-[23rem] mt-[0.5rem]">
                            <div class="absolute top-[7%] space-y-5">
                                <nuxt-link to="/aboutus" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]"> ABOUT US
                                </nuxt-link>
                                <nuxt-link to="/services" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]">SERVICES</nuxt-link>
                                <nuxt-link to="/pricing" active-class="text-[#0b63f3]"
                                    class="text-[12.5px] font-semibold flex items-center hover:text-[#0b63f3]">PRICING</nuxt-link>

                                <div class="relative group">
                                    <p to="/"
                                        :class="['text-[12.5px] font-semibold flex items-center justify-between hover:text-[#0b63f3]', $route.path.includes('/joblist') || $route.path === '/joblists' ? 'text-[#0b63f3]' : '']">
                                        HELPCENTER
                                        <span class="pi pi-chevron-right ml-[6rem]" style="font-size: 55%"></span>
                                    </p>
                                    <div class="absolute top-0 left-full w-[5.5rem] h-full"></div>
                                    <div class="absolute left-full top-0 ml-[1.66rem] hidden group-hover:block">
                                        <div class="bg-white rounded-lg shadow-lg w-[10rem] p-4 ml-[1rem]">
                                            <div class="space-y-4">
                                                <nuxt-link to="/helpcenter/overview" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">OVERVIEW</nuxt-link>
                                                <nuxt-link to="/helpcenter/faqs" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">FAQS</nuxt-link>
                                                <nuxt-link to="/helpcenter/guides" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">GUIDES</nuxt-link>
                                                <nuxt-link to="/helpcenter/support" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">SUPPORT</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative group">
                                    <p to="/"
                                        :class="['text-[12.5px] font-semibold flex items-center justify-between hover:text-[#0b63f3]', $route.path.includes('/joblist') || $route.path === '/joblists' ? 'text-[#0b63f3]' : '']">
                                        BLOG
                                        <span class="pi pi-chevron-right ml-[6rem]" style="font-size: 55%"></span>
                                    </p>
                                    <div class="absolute top-0 left-full w-[5.5rem] h-full"></div>
                                    <div class="absolute left-full top-0 ml-[1.66rem] hidden group-hover:block">
                                        <div class="bg-white rounded-lg shadow-lg w-[10rem] p-4 ml-[1rem]">
                                            <div class="space-y-4">
                                                <nuxt-link to="/blog/blogs" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">BLOGS</nuxt-link>
                                                <nuxt-link to="/blog/blog-sidebar" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">BLOG
                                                    SIDEBAR</nuxt-link>
                                                <nuxt-link to="/blog/blog-detail" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">BLOG
                                                    DETAIL</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative group">
                                    <p to="/"
                                        :class="['text-[12.5px] font-semibold flex items-center justify-between hover:text-[#0b63f3]', $route.path.includes('/joblist') || $route.path === '/joblists' ? 'text-[#0b63f3]' : '']">
                                        AUTH PAGES
                                        <span class="pi pi-chevron-right ml-[6rem]" style="font-size: 55%"></span>
                                    </p>
                                    <div class="absolute top-0 left-full w-[5.5rem] h-full"></div>
                                    <div class="absolute left-full top-0 ml-[1.66rem] hidden group-hover:block">
                                        <div class="bg-white rounded-lg shadow-lg w-[12rem] ml-[1rem] p-4">
                                            <div class="space-y-4">
                                                <nuxt-link to="/auth/Login" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">LOGIN</nuxt-link>
                                                <nuxt-link to="/auth/Signup" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">SIGNUP</nuxt-link>
                                                <nuxt-link to="/auth/forgotpass" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">FORGOT
                                                    PASSWORD</nuxt-link>
                                                <nuxt-link to="/auth/lockscreen" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">LOCK
                                                    SCREEN</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative group">
                                    <p to="/"
                                        :class="['text-[12.5px] font-semibold flex items-center justify-between hover:text-[#0b63f3]', $route.path.includes('/joblist') || $route.path === '/joblists' ? 'text-[#0b63f3]' : '']">
                                        UTILITY
                                        <span class="pi pi-chevron-right ml-[6rem]" style="font-size: 55%"></span>
                                    </p>
                                    <div class="absolute top-0 left-full w-[5.5rem] h-full"></div>
                                    <div class="absolute left-full top-0 ml-[1.66rem] hidden group-hover:block">
                                        <div class="bg-white rounded-lg shadow-lg w-[12rem] ml-[1rem] p-4">
                                            <div class="space-y-4">
                                                <nuxt-link to="/utility/terms" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">TERM
                                                    OF SERVICES</nuxt-link>
                                                <nuxt-link to="/utility/privacy" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">PRIVACY
                                                    POLICY</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative group">
                                    <p to="/"
                                        :class="['text-[12.5px] font-semibold flex items-center justify-between hover:text-[#0b63f3]', $route.path.includes('/joblist') || $route.path === '/joblists' ? 'text-[#0b63f3]' : '']">
                                        SPECIAL
                                        <span class="pi pi-chevron-right ml-[6rem]" style="font-size: 55%"></span>
                                    </p>
                                    <div class="absolute top-0 left-full w-[5.5rem] h-full"></div>
                                    <div class="absolute left-full top-0 ml-[1.66rem] hidden group-hover:block">
                                        <div class="bg-white rounded-lg shadow-lg w-[10rem] ml-[1rem] p-4">
                                            <div class="space-y-4">
                                                <nuxt-link to="/special/comingsoon" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">COMMING
                                                    SOON</nuxt-link>
                                                <nuxt-link to="/special/maintenance" active-class="text-[#0b63f3]"
                                                    class="text-[12.5px] font-semibold block hover:text-[#0b63f3]">MAINTENANCE</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CONTACT US -->
                <div class="dropdown-container">
                    <div @mouseover="showDropdown('contact')" @mouseleave="hideDropdown" class="h-full">
                        <nuxt-link to="/contactus"
                            :class="['text-[13.5px] font-semibold flex items-center', $route.path === '/contactus' ? 'text-[#0b63f3]' : '', scrollY === 0 ? 'hover:text-white' : 'hover:text-[#0b63f3]']">
                            CONTACT US
                        </nuxt-link>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button ref="searchButtonRef" @click="toggleSearch"
                        class="p-button p-button-rounded p-button-icon-only border-2"
                        style="width: 2.5rem; height: 2.5rem;border-color: #0b63f3; background: #0b63f3">
                        <i class="pi pi-search" style="color: #ffffff"></i>
                    </button>
                    <button @click="handleImageClick"
                        class="profile-button p-button p-button-rounded p-button-icon-only bg-cover bg-center border-2"
                        style="border-color: #0b63f3; background-image: url('https://jobnova-shreethemes.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg'); width: 2.5rem; height: 2.5rem; background-size: cover; background-position: center"></button>

                    <div v-if="showProfileMenu" ref="profileRef"
                        class="dropdown-menu absolute right-4 mt-3 w-48 bg-white rounded-sm shadow-lg border border-gray-200"
                        style="top: 4rem; z-index: 1000; width: 160px; height: 160px">
                        <div class="absolute top-[6px] mr-[1rem]">
                            <a href="/blog-sidebar/candidate-profile"
                                class="flex items-center px-4 py-2 text-[14px] font-medium text-black rounded-t-lg hover:text-[#0d6efd] group">
                                <i class="pi pi-user text-lg mr-2 group-hover:text-[#0d6efd]"></i>
                                <span>Profile</span>
                            </a>
                            <a href="/blog-sidebar/candidate-profile-setting"
                                class="flex items-center px-4 py-2 text-[14px] font-medium text-black hover:text-[#0d6efd] group">
                                <i class="pi pi-cog text-lg mr-2 group-hover:text-[#0d6efd]"></i>
                                <span>Settings</span>
                            </a>
                            <div class="border-t w-[11.4rem] border-gray-200 mx-[-1rem]"></div>
                            <a href="/blog-sidebar/lock-screen"
                                class="flex items-center px-4 py-2 text-[14px] font-medium text-black hover:text-[#0d6efd] group">
                                <i class="pi pi-lock text-lg mr-2 group-hover:text-[#0d6efd]"></i>
                                <span>Lockscreen</span>
                            </a>
                            <a href="/blog-sidebar/login"
                                class="flex items-center px-4 py-2 text-[14px] font-medium text-black hover:text-[#0d6efd] group">
                                <i class="pi pi-sign-out text-lg mr-2 group-hover:text-[#0d6efd]"></i>
                                <span>Logout</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div v-if="showSearch" ref="searchRef" class="absolute top-full w-full bg-white p-2 shadow-lg rounded"
                    style="width: 20rem; margin-left: 25rem">
                    <div class="relative w-full">
                        <input type="text" placeholder="Search..."
                            class="w-full pr-10 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <i class="pi pi-search absolute right-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                    </div>
                </div>
            </div>

            <div class="layout-topbar-actions flex items-center space-x-4">
                <div class="relative">
                    <AppConfigurator />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.layout-topbar {
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    height: 5rem;
}

.bg-transparent {
    background-color: transparent;
}

.bg-white {
    background-color: white;
}

.shadow-md {
    box-shadow: 0 0 3px rgba(30, 41, 59, 0.15);
}

.text-black {
    color: black;
}

.layout-topbar-actions {
    display: flex;
    align-items: center;
}

.layout-topbar-action {
    margin-left: 1rem;
}

.dropdown-menu {
    position: absolute;
    background-color: white;
    color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding-top: 3rem;
    padding-right: 5rem;
    padding-left: 1rem;
    padding-bottom: 3rem;
    z-index: 1000;
    border-radius: 1rem;
    text-align: left;
}

.dropdown-menu a {
    transition: all 0.3s ease;
}

.dropdown-container {
    position: relative;
}

.invisible-zone {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 120px;
    background: transparent;
}

.dropdown-menu {
    position: absolute;
    top: calc(100% + 20px);
    background-color: white;
    color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding-top: 3rem;
    padding-right: 5rem;
    padding-left: 1rem;
    padding-bottom: 3rem;
    z-index: 1000;
    border-radius: 1rem;
    text-align: left;
}

.dropdown-menu {
    transition: opacity 0.2s ease;
}

.router-link-active {
    color: #0b63f3;
}

.router-link-exact-active {
    color: #0b63f3;
}

.group:hover .hidden {
    display: block;
}

.group-hover\:block {
    transition: all 0.2s ease-in-out;
}

.group {
    position: relative;
}

.group:hover>div {
    display: block;
}

.group::after {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    width: 5.5rem;
    height: 100%;
    background: transparent;
}

.group:hover::after {
    pointer-events: auto;
}

.absolute.left-full {
    z-index: 1001;
}

.dropdown-container>div {
    transition: color 0.3s ease;
}
</style>
