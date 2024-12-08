<template>
    <PageLayout :title="$route.meta.title">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <BaseCard
          v-for="vegetable in vegetables"
          :key="vegetable.id"
          :vegetable="vegetable"
        />
      </div>
    </PageLayout>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
  import PageLayout from '@/layouts/PageLayout.vue';
  import BaseCard from '@/components/BaseCard.vue';
  
  export default {
    name: 'IndexPage',
    components: { PageLayout, BaseCard },
    setup() {
      const vegetables = ref([]);
  
      const getVegetables = async () => {
        try {
          const response = await axios.get('/vegetables');
          vegetables.value = response.data;
        } catch (error) {
          console.error(error);
        }
      };
  
      onMounted(getVegetables);
  
      return { vegetables };
    },
  };
  </script>
  