<script setup lang="ts">
import sourceData from '@/data.json'
const destinations = sourceData.destinations
</script>

<template>
  <div id="nav">
    <router-link id="logo" to="/">Vue School Travel App</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="`/destination/${destination.id}`"
      >{{ destination.name }}</router-link
    >
  </div>
</template>
