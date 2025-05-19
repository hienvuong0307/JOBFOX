<template>
<td class="border border-gray-300 bg-slate-400 px-4 py-2"    >
    {{ props.header }}
</td>
</template>

<script setup lang="ts">
const props = defineProps({
  header: {
    type: String,
  },
  data: {
    type: Array,
  }
})
</script>

<style>

</style>