<template>
    <PageLayout :title="vegetable.name">
      <div class="flex flex-col sm:flex-row gap-8 items-center sm:items-start mx-auto max-w-5xl p-4">
        <img :src="getImageURL(vegetable.image)" :alt="vegetable.name" class="w-full sm:w-1/2 lg:w-3/5 h-96 object-cover rounded-lg" />
        <p class="text-gray-700 text-lg leading-relaxed indent-4">{{ vegetable.description }}</p>
      </div>
    </PageLayout>
  </template>
  
  <script>
  import { onMounted, ref, watch } from 'vue';
  import axios from 'axios';
  import PageLayout from '@/layouts/PageLayout.vue';
  
  export default {
    name: 'VegetablePage',
    components: { PageLayout },
    setup() {
      const vegetable = ref({});
  
      const getVegetable = async (id) => {
        try {
          const response = await axios.get(`/vegetables/${id}`);
          vegetable.value = response.data;
        } catch (error) {
          console.error(error);
        }
      };
  
      watch(() => this.$route.params.vegetable, (newVal) => getVegetable(newVal));
      onMounted(() => getVegetable(this.$route.params.vegetable));
  
      return { vegetable };
    },
  };
  </script>
  