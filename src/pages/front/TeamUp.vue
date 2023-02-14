<template>
  <h4 class="text-center">組隊揪夥</h4>
<div class="flex">
  <div v-for="product in products" :key="product._id" style="margin-top: 5rem;">
    <ProductCard v-bind="product"/>
  </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '../../boot/axios.js'
import Swal from 'sweetalert2'
import ProductCard from '../../components/ProductCard.vue'

const products = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>

<style>
.box{
  flex: auto;
}
</style>
