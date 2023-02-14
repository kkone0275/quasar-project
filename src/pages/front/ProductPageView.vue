<template>
  <h6>{{ product.name }}</h6>
  <hr>
    <div class="page">
      <img :src="product.image">
      <p>${{ product.price }}</p>
      <p style="white-space: pre;">{{ product.description }}</p>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '../../boot/axios'
import { useRoute, useRouter } from 'vue-router'
import { Swal } from 'sweetalert2'

const route = useRoute()
const router = useRouter()

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
});

(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.description = data.result.description
    product.image = data.result.image
    product.sell = data.result.sell
    product.category = data.result.category

    document.title = '揪團活動 | ' + product.name
    // document.querySelector('meta[property="og:title"]').setAttribute('content', product.name)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品失敗'
    })
    router.go(-1)
  }
})()
</script>

<style scoped>
  .page{
    position: absolute;
    text-align: left;
    right: 28%;
  }
  img{
    width: 50%;
  }
</style>
