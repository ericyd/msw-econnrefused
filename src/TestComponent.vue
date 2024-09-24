<script setup lang='ts'>
import { onMounted, ref } from 'vue';

const data = ref('');

onMounted(async () => {
  const response = await fetch('http://localhost:8000/account')
  data.value = await response.text()
})
</script>

<template>
  <pre>
    {{ data }}
  </pre>
</template>
