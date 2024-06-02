<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Text'
  }
})
</script>
<template>
  <button class="btn">{{ title }}</button>
</template>
