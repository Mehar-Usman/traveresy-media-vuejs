<template>
  <header class="bg-gray-900 w-full  fixed sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0 ">
      <router-link to="/">
        <img class="" src="/assets/logo.webp" alt="Workcation">
      </router-link>
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block text-white focus:text-white focus:outline-none">
          <svg class="h-10 w-10 fill-current transition-all duration-500 delay-400 ease-in-out" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            <path v-if="!isOpen" fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
    </div>
    <!-- Small screen navigation -->
    <nav :class="{ 'translate-y-[35%]': isOpen, 'translate-y-[-100%]': !isOpen }"
      class="md:hidden fixed top-[-6.3%] right-0 w-full bg-inherit transition-transform duration-[0.5s] delay-100 ease-in-out overflow-y-auto">
      <ul class="flex flex-col p-4 items-center ">
        <li>
          <router-link to="/"
            class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Courses</router-link>
        </li>
        <li>
          <router-link to="/"
            class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">eBook</router-link>
        </li>
        <li>
          <router-link to="/" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Freelance
            Mastery</router-link>
        </li>
        <li>
          <router-link to="/"
            class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Youtube</router-link>
        </li>
        <li>
          <router-link to="/"
            class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">FAQ</router-link>
        </li>
        <li>
          <router-link to="/"
            class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Blog</router-link>
        </li>
        <li>
          <router-link to="/"
            class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Guide</router-link>
        </li>
        <li>
          <router-link to="/" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Log
            In</router-link>
        </li>
      </ul>
    </nav>
    <!-- Large screen navigation -->
    <nav class="hidden md:flex justify-center items-center space-x-1 lg:space-x-3 xl:space-x-6 2xl:space-x-12">
      <router-link to="/" class="block px-2 py-1 text-white font-semibold rounded hover:bg-blued">Courses</router-link>
      <router-link to="/"
        class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blued ">eBook</router-link>
      <router-link to="/" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blued ">Freelance
        Mastery</router-link>
      <router-link to="/"
        class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blued ">Youtube</router-link>
      <router-link to="/" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blued ">FAQ</router-link>
      <router-link to="/" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blued ">Blog</router-link>
      <router-link to="/"
        class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blued ">Guide</router-link>
      <router-link to="/" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-blued ">Log
        In</router-link>
    </nav>
  </header>
</template>
  
<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>
  