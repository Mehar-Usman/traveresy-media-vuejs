<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p class="text-lg text-center mb-8">Oops! The page you're looking for doesn't exist.</p>
      <router-link to="/" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Go Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  