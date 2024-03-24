<template>
    <div class="flex flex-col gap-4 md:flex md:flex-row  items-start md:items-center justify-between bg-grayed py-6 px-8">
        <div>
            <img src="/assets/logo.webp" alt="Logo">
        </div>
        <div>
            <p class="text-white text-lg">© 2024 Traversy Media. All Rights Reserved</p>
        </div>
        <div class="flex gap-2">
            <div v-for="(link, index) in footerLinks" :key="index">
                <a :href="getLink(link)" target="_blank">
                    <img :src="getIcon(link)" alt="Social Media Icon">
                </a>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { reactive } from 'vue';

const footerLinks = reactive([
    { twitterHref: 'https://twitter.com/traversymedia', twitterIcon: 'twitter.svg' },
    { instaHref: 'https://www.instagram.com/traversymedia/', instaIcon: 'insta.svg' },
    { youtubeHref: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA', youtubeIcon: 'youtube.svg' },
    { githubHref: 'https://github.com/bradtraversy', githubIcon: 'github.svg' },
    { linkedinHref: 'https://www.linkedin.com/in/bradtraversy/', linkedinIcon: 'linkedin.svg' },
]);

const getLink = (link) => {
    // Determine which property is present in the link object
    if (link.twitterHref) return link.twitterHref;
    if (link.instaHref) return link.instaHref;
    if (link.youtubeHref) return link.youtubeHref;
    if (link.githubHref) return link.githubHref;
    if (link.linkedinHref) return link.linkedinHref;
};

const getIcon = (link) => {
    // Determine which property is present in the link object
    if (link.twitterIcon) return `assets/${link.twitterIcon}`;
    if (link.instaIcon) return `assets/${link.instaIcon}`;
    if (link.youtubeIcon) return `assets/${link.youtubeIcon}`;
    if (link.githubIcon) return `assets/${link.githubIcon}`;
    if (link.linkedinIcon) return `assets/${link.linkedinIcon}`;
};
</script>
  
<style scoped>
/* Add your styles */
</style>
  