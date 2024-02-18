<template>
    <div class="bg-white py-10">
      <div class=" block md:flex items-center justify-center gap-10 px-4 md:px-10">
        <article class="shadow-2xl py-8 px-4 rounded-md w-full md:w-2/3">
          <header>
            <h3 class="text-[#3195ff]">What you'll learn</h3>
          </header>
          <section class="mt-8">
            <div v-for="(item, index) in learningItems" :key="index" class="flex gap-4  mt-4">
              <div class=" w-1/6 lg:w-10">
                <img src="../assets/tick.svg" alt="">
              </div>
              <div class="w-5/6 md:w-full">
                  <div v-html="item" class=" text-sm md:text-lg text-gray-600"></div>
              </div>
            </div>
          </section>
        </article>
        <article class="py-6 shadow-2xl  rounded-md w-full md:w-1/3">
            <header class="">
                <h3 class="text-center text-blued">Limited Time Offer</h3>
                <h1 class="text-center ">$25.00</h1>
                <p class="text-center ">Hurry Up! Now</p>
            </header>
            <div class="flex items-center justify-center ">
                <LearningBtn/>
            </div>
        </article>
      </div>
    </div>
  </template>
  
  <script setup>
import LearningBtn from './LearningBtn.vue';

  const learningItems = [
    "All of the fundamentals, including variables, data types, functions, scope, etc",
    "DOM Manipulation, events and creating dynamic UIs",
    "Under the hood topics, like execution context and the call stack",
    "Asynchronous JS including callbacks, promises, async/await",
    "Web APIs like geolocation, audio/video, canvas and speech",
    "OOP including classes and prototypes",
    "<strong>Bonus:</strong> Complete full-stack application with Node.js/Express & Webpack"
  ];
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  