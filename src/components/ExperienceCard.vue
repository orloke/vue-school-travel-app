<script setup lang="ts">
import { PropType } from 'vue'

type TExperience = {
  name: string
  slug: string
  image: string
  description: string
}

const props = defineProps({
  experience: { type: Object as PropType<TExperience>, required: true },
})
</script>

<template>
  <div class="card">
    <img :src="`/images/${props.experience.image}`" :alt="experience.name" />
    <span class="card__text">
      {{ experience.name }}
    </span>
  </div>
</template>
