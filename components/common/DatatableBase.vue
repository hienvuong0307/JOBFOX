<template>
  <div class="overflow-x-auto">
    <table class="min-w-full table-fixed border border-gray-300">
      <thead>
        <slot></slot>
      </thead>
      <tbody>
        <tr v-for="(item, index) in props.data" :key="index">
          <td v-for="col, i in slots?.default()" :key="i" class="border border-gray-300 px-4 py-2" >
            {{   item[col.props.field] }}
          </td>
        </tr>
      </tbody>
    </table>
    {{  }}
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, computed, watch } from 'vue'
 import {useSlots} from 'vue';
    const slots = useSlots();

const props = defineProps<{
  data: Record<string, any>[]
}>()
</script>
