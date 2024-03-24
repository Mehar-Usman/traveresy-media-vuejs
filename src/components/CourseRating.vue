<template>
    <div class="bg-grayed py-10">
        <header>
            <h1 class="text-center text-white">Course Ratings</h1>
            <p class="text-center text-white text-lg">Some of the Latest Reviews</p>
        </header>
    </div>
    <div class="bg-grayedSky py-12">
        <div
            class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-10 sm:gap-12 md:gap-3 lg:gap-5 px-4 md:px-4 lg:px-10">
            <div v-for="(ratingCard, index) in ratingCards" :key="index">
                <header>
                    <figure class="flex justify-center">
                        <img class="w-16 h-16" :src="ratingCard.imgSrc" alt="">
                    </figure>
                    <section>
                        <div class="flex justify-center mt-4">
                            <div v-for="(star, index) in ratingCard.starRating" :key="index">
                                <img :src="star" alt="">
                            </div>
                        </div>
                        <div>
                            <h1 class="text-center text-white">{{ ratingCard.title }}</h1>
                            <p class="text-white text-center text-[17px] mt-4">{{ ratingCard.description }}</p>
                        </div>
                    </section>
                </header>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue'

const ratingCards = reactive([
    {
        imgSrc: 'assets/LI.webp',
        starRating: ['assets/star.svg', 'assets/star.svg', 'assets/star.svg', 'assets/star.svg', 'assets/star.svg'],
        title: 'Leandro I.',
        description: 'Wow, This course is really easy to follow. Brad is very clear and concise, he goes into small details and I love how organised his file structure is. The final product is a real estate website that is pretty much ready to be deployed. I would definitely recommend this course to other students.'
    },
    {
        imgSrc: 'assets/Al.webp',
        starRating: ['assets/star.svg', 'assets/star.svg', 'assets/star.svg', 'assets/star.svg', 'assets/star.svg'],
        title: 'Alexey L.',
        description: 'Watching a lot of videos from Brad and am always happy with his extraordinary tutoring abilities. He keeps things dead simple and nothing is missed, so learning new things is easy and fast. Thank you Brad for sharing your experience with us!'
    },
    {
        imgSrc: 'assets/JW.webp',
        starRating: ['assets/star.svg', 'assets/star.svg', 'assets/star.svg', 'assets/star.svg', 'assets/star.svg'],
        title: 'Josef W.',
        description: "The course is very well structured. All chapters are understandable. It also becomes clear that you can separate frontend and backend development, which is important to know. Finally, I would like to say that I like Brad's relaxed way of explaining things. Thanks Brad!"
    },
])
</script>
  
<style scoped>
/* Add your styles */
</style>
  