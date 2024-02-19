<template>
    <div class="bg-blued py-20">
        <header>
            <h1 class="text-white text-center">Courses Project</h1>
            <p class="text-white text-center text-md">Let's take a look at a few of the projects</p>
        </header>
    </div>
    <div class="bg-white py-10">
        <div
            class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 md:gap-10 lg:gap-8 xl:gap-12 2xl:gap-20  px-4 md:px-12">
            <div v-for="(card, index) in cards " :key="index">
                <article
                    class="shadow-2xl cursor-pointer  border-2 border-grayed rounded p-2 lg:p-10 h-full w-full hover:bg-grayed group transition-all ease-in-out duration-500 hover:scale-105 ">
                    <header>
                        <figure>
                            <img class="rounded-md group group-hover:scale-105  transition-all ease-in-out duration-500"
                                :src="card.imgSrc" alt="">
                        </figure>
                    </header>
                    <section class="mt-2">
                        <h2
                            class="text-center transition-all ease-in-out duration-500 group-hover:text-white group-hover:scale-105">
                            {{ card.title }}</h2>
                    </section>
                    <footer class="mt-2">
                        <p
                            class="text-grayed text-lg text-center transition-all ease-in-out duration-500 group-hover:text-gray-300 group-hover:scale-105 ">
                            {{ card.description }}</p>
                    </footer>
                </article>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'

const cards = reactive([
    { imgSrc: 'src/assets/CorProject_1.webp', title: 'Flixx', description: 'Movie listing UI using a public API for movies/TV shows. Search, pagination and custom router features.' },
    { imgSrc: 'src/assets/CorProject_2.webp', title: 'Tracalorie', description: 'Object oriented project with classes, private properties, static methods, local storage and Bootstrap UI components.' },
    { imgSrc: 'src/assets/CorProject_3.webp', title: 'RandomIdeas', description: 'Full stack app using Express/MongoDB on the server. Webpack tooling and custom modules and components on the client.' },
]);
</script>
<style></style>