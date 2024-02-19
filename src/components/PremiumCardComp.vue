<template>
    <article class="px-4 md:px-16 lg:px-10 py-10 rounded"
        :class="{ 'bg-grayed hover:bg-white hover:text-black hover:scale-105 border-2 hover:border-grayed group transition-all ease-in-out duration-500  text-white shadow-2xl ': index % 2 === 0, 'bg-white text-grayed shadow-2xl hover:bg-grayed  hover:text-white hover:scale-105 border-2 border-grayed hover:border-white group transition-all ease-in-out duration-500': index % 2 !== 0 }">
        <header class="">
            <h3 class="text-center text-blued">
                {{ headTitle }}
            </h3>
            <h1 class=""
                :class="{ 'text-white text-center group-hover:text-black transition-all ease-in-out duration-500': index % 2 === 0, 'text-black text-center group-hover:text-white transition-all duration-500 ease-in-out': index % 2 !== 0 }">
                {{ title }}</h1>
            <p
                :class="{ 'text-white group-hover:text-grayed transition-all ease-in-out duration-500 text-center ': index === 0, 'text-black text-center group-hover:text-white transition-all ease-in-out duration-500': index === 1, 'text-white text-center group-hover:text-grayed transition-all ease-in-out duration-500': index === 2 }">
                {{ subTitle }}</p>
        </header>
        <div class="mt-6">
            <div class="" v-for="(content, idx) in nestedContent" :key="idx">
                <div class="flex gap-2 mt-2">
                    <div class="w-12 md:w-10">
                        <img src="../assets/tick.svg" alt="">
                    </div>
                    <div class="w-full">
                        <p class="text-lg">{{ content }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center mt-10">
            <button class="bg-blued text-white text-xl font-semibold  py-3 rounded"
                :class="{ 'w-40': index % 2 === 0, 'w-60': index % 2 !== 0 }">
                {{ btnBuyNow }}
            </button>
        </div>
    </article>
</template>
  
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    headTitle: String,
    title: String,
    subTitle: String,
    nestedContent: Array,
    btnBuyNow: String,
    index: Number
})
</script>
  
<style scoped></style>
  