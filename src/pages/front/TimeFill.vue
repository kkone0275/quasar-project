<template>
  <h2 class="title01">時間填空</h2>
  <h5 class="smtitle03">活動類型</h5>
  <hr>
<div class="flex set">
  <div class="card" v-for="Time in Times" :key="Time._id" style="margin-top: 5rem;">
    <TimeCard v-bind="Time"/>
  </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '../../boot/axios.js'
import Swal from 'sweetalert2'
import TimeCard from '../../components/TimeCard.vue'

const Times = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/Times')
    Times.push(...data.result)
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
