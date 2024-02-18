<template>
    <article class="card-body border border-white rounded-md py-6 px-4">
        <figure>
            <div class="flex flex-col items-center">
                <img :src="CardImgSrc" :alt="imgAlt">
                <figcaption>
                    <p class="text-white text-md lg:text-xl text-center mt-4">{{content}}</p>
                </figcaption>
            </div>
        </figure>
    </article>
</template>
<script setup>
    import {defineProps} from 'vue';
    const props = defineProps({
        CardImgSrc:String,
        imgAlt:String,
        content:String
    })
</script>
<style>
    
</style>