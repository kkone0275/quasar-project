<template>
  <h2 class="title01">組團揪夥</h2>
  <h5 class="smtitle03">活動類型</h5>
  <hr>
<div class="flex set">
  <div class="card" v-for="product in products" :key="product._id" style="margin-top: 5rem;">
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

<style scoped>
.box{
  flex: auto;
}

.title01{
  margin-top: 1%;
  margin-bottom: 1%;
  font-weight: 550;
  color: #8A8888;
  margin-left: 8%;
}

.smtitle03{
  color:#C01E6C;
  font-weight: 550;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 10%;
}

hr{
  border: 12px solid #FFE5B4;
}

.set{
  margin-left: 5%;
}

.card{
  margin-left: 2%;
}
</style>
