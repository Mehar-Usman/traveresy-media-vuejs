<template >
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 py-8 bg-[#161e2a]">
        <OverviewChild v-for="(card, index) in cards" :key="index" :imgSrc="card.imgSrc" :img-alt="card.imgAlt"
            :title="card.title" :info="card.info" />
    </div>
    <div class="bg-[#161E2AF9] py-12">
        <header>
            <h1 class="text-white text-center ">Course Overview Demo</h1>
        </header>
        <div class="flex justify-center mt-8 px-4 md:px-0 ">
            <img class=" w-full cursor-pointer md:w-1/2 rounded-md decoration-blue-50 hover:scale-105 hover:translate-x-[-5px] border-2 hover:border-blued transition-all duration-500 ease-in-out delay-100 "
                src="../assets/OverviewBanner.avif" alt="">
        </div>
    </div>
    <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-[#161e2a] py-12 gap-10 px-4 md:px-10 lg:px-10 xl:px-24">
        <OverviewFooterCards v-for="(card, index) in overviewFooterCard" :key="index" :CardImgSrc="card.CardImgSrc"
            :img-alt="card.imgAlt" :content="card.content" />
    </div>
</template>
<script setup>

import OverviewChild from '../components/OverviewChild.vue'
import OverviewFooterCards from './OverviewFooterCards.vue';

const cards = [
    {
        imgSrc: 'src/assets/overview-1.webp',
        imgAlt: 'Img 1',
        title: '100,000+',
        info: 'Students Enrolled'
    },
    {
        imgSrc: 'src/assets/overview-2.webp',
        imgAlt: 'Img 1',
        title: '4.7+',
        info: 'Rated'
    },
    {
        imgSrc: 'src/assets/overview-3.webp',
        imgAlt: 'Img 1',
        title: 'English',
        info: 'Course Language'
    },
    {
        imgSrc: 'src/assets/overview-4.webp',
        imgAlt: 'Img 1',
        title: 'Last Update',
        info: '02/2023'
    },
];

const overviewFooterCard = [
    {
        CardImgSrc: 'src/assets/box-1.webp',
        imgAlt: 'card-1',
        content: '37+ hours on-demand video'
    },
    {
        CardImgSrc: 'src/assets/box-2.webp',
        imgAlt: 'card-1',
        content: '20+ downloadable resources & docs'
    },
    {
        CardImgSrc: 'src/assets/box-3.webp',
        imgAlt: 'card-1',
        content: 'Full lifetime access'
    },
    {
        CardImgSrc: 'src/assets/box-4.webp',
        imgAlt: 'card-1',
        content: 'Access on mobile and TV'
    },
    {
        CardImgSrc: 'src/assets/box-5.webp',
        imgAlt: 'card-1',
        content: 'Certificate of completion'
    }
]
</script>
<style ></style>