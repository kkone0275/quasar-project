<template>
  <q-page class="bg">
    <div class="container">
    <h6 style="font-weight: 600;">消費者訂單紀錄</h6>
      <!-- list -->
      <div style="max-width: 100%">
        <div class="q-pa-md q-gutter-md">
          <q-item clickable v-ripple class="text-center">
            <q-item-section>商品ID</q-item-section>
            <q-item-section>日期</q-item-section>
            <q-item-section>總金額</q-item-section>
            <q-item-section>商品項目</q-item-section>
          </q-item>
          <q-separator />
          <!-- 下面的訂單們 -->
          <q-item clickable v-ripple class="text-center" style="background: #fff;" v-for="order in orders" :key="order._id">
            <q-item-section>{{ order._id }}</q-item-section>
            <q-item-section>
              {{ new Date(order.date).toLocaleDateString() }}
            </q-item-section>
            <q-item-section>{{ order.totalPrice }} 元</q-item-section>
            <q-item-section>
              <ul>
                <li v-for="product in order.products" :key="product._id">
                {{ product.quantity + ' 組 ' + product.p_id.name }}
              </li>
              </ul>
            </q-item-section>
          </q-item>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '../../boot/axios.js'
import Swal from 'sweetalert2'
const orders = reactive([]);
(async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((total, current) => total + current.p_id.price * current.quantity, 0)
      return order
    }))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得訂單失敗'
    })
  }
})()
</script>

<style lang="scss">
.bg {
  background: #F6F1EB;
  padding-top: -10rem;
}
.container{
  width: 80%;
  margin: auto;
}
</style>
