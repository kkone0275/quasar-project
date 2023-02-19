<template>
  <h6>{{ time.name }}</h6>
  <hr>
    <div class="page">
      <img :src="time.image">
      <p>${{ time.price }}</p>
      <p style="white-space: pre;">{{ time.description }}</p>
      <q-form v-model="valid" @submit="submitCart">
          <q-input v-model.number="quantity" type="number" label="數量" :rules="[rules.required, rules.number]" />
          <q-btn label="加入購物車" type="submit" color="primary" />
        </q-form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { api } from '../../boot/axios'
import { useRoute, useRouter } from 'vue-router'
import { Swal } from 'sweetalert2'

import { useUserStore } from 'src/stores/user'

const user = useUserStore()
const { editCart } = user

const route = useRoute()
const router = useRouter()

const valid = ref(false)
const quantity = ref(0)

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  number (value) {
    return value > 0 || '數量錯誤'
  }
}

const time = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
})

const submitCart = () => {
  if (valid.value) return

  editCart({ _id: time._id, quantity: quantity.value })
}

(async () => {
  try {
    const { data } = await api.get('/times/' + route.params.id)
    time._id = data.result._id
    time.name = data.result.name
    time.price = data.result.price
    time.description = data.result.description
    time.image = data.result.image
    time.sell = data.result.sell
    time.category = data.result.category

    document.title = '揪團活動 | ' + time.name
    // document.querySelector('meta[property="og:title"]').setAttribute('content', time.name)
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
