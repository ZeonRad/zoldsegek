<template>
    <nav class="bg-[#754d3c] text-white py-3 px-6">
      <div class="container mx-auto flex items-center justify-between">
        <h1 class="text-2xl font-bold">Zöldségek</h1>
        <ul class="flex gap-4">
          <li><RouterLink to="/" class="hover:bg-[#35231a] px-3 py-1 rounded">Főoldal</RouterLink></li>
          <li v-for="vegetable in vegetables" :key="vegetable.id">
            <RouterLink :to="`/vegetables/${vegetable.id}`" class="hover:bg-[#35231a] px-3 py-1 rounded">
              {{ vegetable.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'NavBar',
    setup() {
      const vegetables = ref([]);
  
      const fetchVegetables = async () => {
        try {
          const response = await axios.get('/vegetables');
          vegetables.value = response.data;
        } catch (error) {
          console.error(error);
        }
      };
  
      onMounted(fetchVegetables);
  
      return { vegetables };
    },
  };
  </script>
  