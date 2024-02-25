<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'

const route = useRoute()
const destination = ref({} as (typeof sourceData.destinations)[0])

const fetchData = async () => {
  const slug = route.params.slug as string
  try {
    const response = await fetch(
      `https://travel-dummy-api.netlify.app/${slug}.json`
    )
    const data = await response.json()
    destination.value = data
    return data
  } catch (error) {
    console.error(error)
  }
}

fetchData()
</script>

<template>
  <section v-if="destination.image" class="destination">
    <h1>{{ destination?.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination?.image}`" :alt="destination?.name" />
      <p>{{ destination?.description }}</p>
    </div>
  </section>
  <section v-if="destination.experiences?.length" class="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>
    <div class="cards">
      <router-link
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{name: 'experience.show', params:{experienceSlug: experience.slug}}"
      >
        <ExperienceCard :experience="experience" />
      </router-link>
    </div>
  </section>
</template>
