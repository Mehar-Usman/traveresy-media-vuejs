<template >
    <div class="bg-img py-20 px-2">
        <div class="flex  justify-center items-center mt-10">
            <div class="bg-[#eceb98] p-1 ">
                <p class="text-md md:text-xl">Best Selling Course & Just Revamped</p>
            </div>
        </div>
        <div class="mt-6">
            <h1 class="text-center text-white ">Modern JavaScript 2.0 Course</h1>
        </div>
        <div class="flex justify-center mt-6 px-4 md:px-0 ">
            <img class="w-[500px]" src="../assets/modernCoursesImg.jpg" alt="">
        </div>
        <div class="mt-6">
            <h1 class=" text-center text-white">Learn Modern JavaScript From The Beginning</h1>
            <p class="text-white text-center text-xl mt-3">A 37-hour master course to take you from beginner to advanced</p>
        </div>
        <div class="flex justify-center mt-6">
            <LearningBtn/>
        </div>
    </div>
</template>
<script>
import LearningBtn from './LearningBtn.vue';

export default {
    components: { LearningBtn }
}
</script>
<style scoped>
.bg-img {
    background-image: url(../assets/bgHome.avif);
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
}


</style>