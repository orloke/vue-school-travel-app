<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import sourceData from '@/data.json'

type TExperience = {
  name: string
  slug: string
  image: string
  description: string
}

const route = useRoute()
const experience = ref({} as TExperience)

const fetchData = async () => {
  const slug = route.params.slug as string
  const slugExperience = route.params.experienceSlug as string
  try {
    const response = await fetch(
      `https://travel-dummy-api.netlify.app/${slug}.json`
    )
    const data = await response.json() as (typeof sourceData.destinations)[0]

    const findExperience = data.experiences.find(experience => experience.slug == slugExperience)

    experience.value = findExperience as TExperience
    return data
  } catch (error) {
    console.error(error)
  }
}

fetchData()
</script>

<template>
  <section>
    <h1>{{experience.name}}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name">
    <p>{{experience.description}}</p>
  </section>
</template>
