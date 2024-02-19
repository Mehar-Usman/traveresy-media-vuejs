<template >
    <div class="bg-blued py-16">
        <header>
            <h1 class="text-center text-white">Join Our Premium Courses</h1>
            <p class="text-center text-white mt-3">Buy standalone courses or get access to all our courses as long as you
                have
                an active membership.</p>
        </header>
        <div
            class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 px-4 md:px-40 lg:px-12 text-white items-center mt-14">
            <div class="" v-for="(card, index) in memberShipCards" :key="index">
                <PremiumCardComp :headTitle="card.headTitle" :title="card.title" :subTitle="card.subTitle"
                    :nestedContent="card.nestedContent" :btnBuyNow="card.btnBuyNow" :index="index" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue'
import PremiumCardComp from './PremiumCardComp.vue';

const memberShipCards = reactive([
    {
        headTitle: 'Single Course',
        title: '$25/Course',
        subTitle: 'Buy once, own it forever',
        nestedContent: ['Purchase a Specific Course', 'Lifetime Course Access', 'Full HD Video & HQ Audio', 'Extra course attachments & exercises',
            'Certificate of Completion',
            'Access To Discord Community',
            'Risk-free: 15 Days Refund Period'],
        btnBuyNow: 'Buy Now'
    },
    {
        headTitle: 'Monthly Membership',
        title: '$25/Month',
        subTitle: 'Become a Pro Member',
        nestedContent: [" Access To All Courses",
            "  250+ Hours of Content",
            " Full HD Video & HQ Audio",
            "  Extra course attachments & exercises",
            " Certificate of Completion",
            " Access To Discord Community",
            " Priority Support",
            " Risk-free: 15 Days Refund Period",],
        btnBuyNow: 'Buy Now'
    },
    {
        headTitle: 'Yearly Membership',
        title: '$200/Year',
        subTitle: 'Become a VIP Member',
        nestedContent: ["Save 34% Compared to Monthly",
            "250+ Hours of Content",
            "Exclusive Content",
            "Full HD Video & HQ Audio",
            "Extra course attachments & exercises",
            "Certificate of Completion",
            "Access To Discord Community",
            "Priority Support",
            "Risk-free: 15 Days Refund Period",],
        btnBuyNow: 'Buy Now'
    }
])
</script>


<style ></style>