
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <RouterLink to="/">
            <img class="logo" src="../assets/img/smalltalkc.png">
          </RouterLink>
          <img class="logo-show" src="../assets/img/show.png" to="/">
        </q-toolbar-title>
        <q-btn class="font-r" flat label="網站首頁" to="/"/>
        <q-btn class="font-r" flat label="組隊揪夥" to="/teamup" />
        <q-btn class="font-r" flat label="時間填空" />
        <q-btn class="font-r" flat label="關於我們" />
        <div class="q-pa-md q-gutter-sm" style="height: 80px">
          <q-btn flat round dense :icon="menu" class="q-mr-sm text-primary">
          <img :src="avatar" style="width: 45px; height: 45px;">
          </q-btn>
        <q-btn class="font-r" flat label="會員登出" @click="logout"/>
  </div>
        <!-- <q-btn class="btn-r" color="yellow-9" @click="prompt = true" label="會員登入" to="login"/> -->
        <!-- <q-btn class="btn-r" label="會員註冊" color="yellow-9" @click="register = true"/> -->

        <q-dialog v-model="register" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="address" autofocus @keyup.enter="register = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Add address" v-close-popup />
          <!-- <q-btn flat label="Cancel" v-close-popup /> -->
        </q-card-actions>
      </q-card>
    </q-dialog>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <div class="q-pa-md q-gutter-sm" style="height: 80px">
      <q-btn class="btn-left" unelevated rounded color="orange-6" label="會員中心" to="" /><br>
      <q-btn class="btn-left" unelevated rounded color="orange-6" label="揪團發佈" to="/member/addgang" /><br>
      <q-btn class="btn-left" unelevated rounded color="orange-6" label="填空上架" to="" /><br>
      <q-btn class="btn-left" unelevated rounded color="orange-6" label="會員登出" @click="logout" />
      <!-- <q-btn class="btn-r" style="background:#F3A308 ; color: white" label="會員登出" @click="logout"/> -->
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

import { ref } from 'vue'

export default {
  setup () {
    return {
      drawer: ref(false)
    }
  }
}
</script>

<style scoped>
.logo{
  margin-top: 0.6%;
  margin-left: 3%;
  width: 50px;
}
.logo-show{
  margin-top: 0.6%;
  margin-left: 0.8%;
  width: 65px;
}

.font-r{
color:#C01E6C;
font-size: 20px;
font-weight: bold;
}

.q-toolbar{
  background-color:#fac761;
}

.foot-font{
  color: #C01E6C;
  font-weight: bold;
  text-align: center;
}
.active {
border-bottom: 5px solid #FF775C;
}

.btn-l{
  margin-left: 1%;
  margin-right: 1.5%;
}

.btn-r{
  margin-right: 2%;
}

.btn-left{
  width: 200px;
}

</style>

<script setup>
// 登出鈕設定
import { useUserStore } from '../stores/user.js'
import { storeToRefs } from 'pinia'

const user = useUserStore()
const { avatar } = storeToRefs(user)
const { logout } = user
</script>
