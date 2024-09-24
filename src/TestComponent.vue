<script setup lang='ts'>
import { onMounted, ref } from 'vue';

onMounted(async () => {
  await fetch('http://localhost:8000/account')
  await fetch('http://localhost:8000/user')
  await fetch('http://localhost:8000/account')
  await fetch('http://localhost:8000/user')
})

</script>

<template>
  <pre>
  </pre>
</template>
