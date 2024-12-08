<template>
    <div class="shadow-lg p-4 rounded-lg bg-white transition hover:shadow-2xl">
      <img :src="getImageURL(vegetable.image)" :alt="vegetable.name" class="w-full h-48 object-cover rounded-t-lg" />
      <h5 class="text-center text-green-700 text-xl font-semibold mt-4">{{ vegetable.name }}</h5>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseCard',
    props: {
      vegetable: Object,
    },
    methods: {
      getImageURL(filename) {
        return `images/${filename}`;
      },
    },
  };
  </script>
  