<template>
    <div>
        <Navbar/>
        <ModernCourses/>
        <CoursesOverview/>
        <OfferTime/>
        <CoureseDescription/>
        <Accordian/>
    </div>
</template>

<script setup>
    import Accordian from '../components/Accordian.vue';
import CoureseDescription from '../components/CoureseDescription.vue';
import CoursesOverview from '../components/CoursesOverview.vue';
import ModernCourses from '../components/ModernCourses.vue';
import Navbar from '../components/Navbar.vue';
import OfferTime from '../components/OfferTime.vue';
</script>

<style lang="">
    /* Add your styles here */
</style>
