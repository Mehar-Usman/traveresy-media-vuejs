<template >
    <article class="card">
        <figure class="flex justify-center">
            <img :src="imgSrc" :alt="imgAlt">
        </figure>
        <section>
            <div >
                <h2 class="text-center text-white">{{ title }}</h2>
            </div>
            <div >
                <p class="text-center text-white">{{ info }}</p>
            </div>
        </section>
    </article>
</template>
<script setup>
    import {defineProps} from 'vue';

    const props = defineProps({
        imgSrc:String,
        imgAlt:String,
        title:String,
        info:String
    })
</script>
<style scoped>
    
</style>