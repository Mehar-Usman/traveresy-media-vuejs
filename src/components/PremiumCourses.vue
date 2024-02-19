<template>
  <div class="bg-blued py-16">
    <header>
      <h1 class="text-center text-white">Join Our Premium Courses</h1>
      <p class="text-center text-white mt-3">Buy standalone courses or get access to all our courses as long as you have
        an active membership.</p>
    </header>
    <div
      class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 px-4 md:px-40 lg:px-12 text-white items-center mt-14">
      <div class="" v-for="(card, index) in memberShipCards" :key="index">
        <article class="px-4 md:px-16 lg:px-10 py-10 rounded"
          :class="{ 'bg-gray-900 text-white': index % 2 === 0, 'bg-white text-black': index % 2 !== 0 }">
          <header class="">
            <h3 class="text-center text-blued">
              {{ card.headTitle }}
            </h3>
            <h1 class=""
              :class="{ 'text-white text-center': index % 2 === 0, 'text-black text-center': index % 2 !== 0 }">{{
                card.title }}</h1>
            <p
              :class="{ 'text-blued text-center': index === 0, 'text-black text-center': index === 1, 'text-white text-center': index === 2 }">
              {{ card.subTitle }}</p>
          </header>
          <div class="mt-6">
            <div class="" v-for="(content, index) in card.nestedContent" :key="index">
              <div class="flex  gap-2 mt-2">
                <div class="w-12 md:w-10">
                  <img src="../assets/tick.svg" alt="">
                </div>
                <div class="w-full">
                  <p class="text-lg">{{ content }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center mt-10">
            <button class="bg-blued text-white text-xl font-semibold  py-3 rounded"
              :class="{ 'w-40': index % 2 === 0, 'w-60': index % 2 !== 0 }">
              {{ card.btnBuyNow }}
            </button>
          </div>

        </article>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { reactive } from 'vue'

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
    headTitle: 'Single Course',
    title: '$25/Course',
    subTitle: 'Buy once, own it forever',
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
    headTitle: 'Single Course',
    title: '$25/Course',
    subTitle: 'Buy once, own it forever',
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
  
<style scoped></style>
  