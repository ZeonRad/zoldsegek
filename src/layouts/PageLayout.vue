<template>
    <div class="min-h-screen bg-[#e2eeb7] text-gray-800">
      <header>
        <NavBar />
      </header>
      <main class="p-4 max-w-7xl mx-auto">
        <h1 class="text-green-700 text-2xl font-bold tracking-wide uppercase mb-6">{{ title }}</h1>
        <slot />
      </main>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/layout/NavBar.vue';
  
  export default {
    name: 'PageLayout',
    components: { NavBar },
    props: {
      title: String,
    },
  };
  </script>
  