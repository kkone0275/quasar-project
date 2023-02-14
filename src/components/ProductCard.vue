<template>
  <q-card class="my-card">
      <img :src="image">

      <q-card-section>
        <q-item-label>
          <router-link :to="'/products/' + _id">{{ name }}</router-link>
        </q-item-label>
        <div class="text-subtitle2">${{ price }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ description }}
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn class="q-px-lg" color="pink-5" label="More" @click="opendis = true" to="/" />
      </q-card-section>
    </q-card>
</template>

<script setup>
defineProps({

  _id: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  },
  volume: {
    type: String,
    default: ''
  }
})

</script>

<style>
.q-card{
  width: 300px;
}
</style>
