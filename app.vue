<script setup lang="ts">
const route = useRoute();
const layout = computed(() => route.meta.layout || "default"); 
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>