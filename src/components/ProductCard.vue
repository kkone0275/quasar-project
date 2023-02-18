<template>
  <q-card class="my-card">
      <img :src="image">

      <q-card-section>
        <!-- <q-item-label>
          <router-link :to="'/products/' + _id">{{ name }}</router-link>
        </q-item-label> -->
        <div class="text-subtitle2">{{ name }}</div>
        <div class="text-subtitle2">${{ price }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none ">
        {{ description }}
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-btn class="q-px-lg" color="pink-5" :to="'/products/' + _id" label="More" @click="opendis = true" />
        <q-btn class="like" round color="deep-orange" icon="favorite" @click="editCart({_id, quantity: 1})" />
      </q-card-section>
    </q-card>
</template>

<script setup>
import { useUserStore } from 'src/stores/user'

const user = useUserStore()
const { editCart } = user

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
  }
})

</script>

<style>
.q-card{
  width: 300px;
  margin-top: -3rem;
}

.like{
  margin-left: 135px;
}
</style>
