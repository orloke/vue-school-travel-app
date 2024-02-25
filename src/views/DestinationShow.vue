<script setup lang="ts">
import { useRoute } from 'vue-router'
import sourceData from '@/data.json'
import { computed } from 'vue';

const route = useRoute()

const destination = computed(() => {
  const id = +route.params.id
  return sourceData.destinations.find(item => item.id === id)
})
</script>

<template>
  <section class="destination">
    <h1>{{ destination?.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination?.image}`" :alt="destination?.name" />
      <p>{{ destination?.description }}</p>
    </div>
  </section>
</template>
