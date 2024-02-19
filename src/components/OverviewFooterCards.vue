<template>
    <article
        class="card-body  border-2 cursor-pointer border-white rounded-md py-6 px-4 hover:bg-white transition-all ease-in-out duration-500 delay-100 hover:scale-105 hover:translate-x-[-5px] hover:border-blued  group">
        <figure>
            <div class="flex flex-col items-center">
                <img :src="CardImgSrc" :alt="imgAlt">
                <figcaption>
                    <p
                        class="text-white text-md lg:text-xl text-center mt-4 group-hover:text-black transition-all duration-500 ease-in-out delay-100">
                        {{ content }}</p>
                </figcaption>
            </div>
        </figure>
    </article>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    CardImgSrc: String,
    imgAlt: String,
    content: String
})
</script>
<style></style>