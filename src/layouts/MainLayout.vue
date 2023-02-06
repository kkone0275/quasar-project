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
        <q-btn class="font-r" flat label="網站首頁" :class="changeActiveClass('/')" to="/"/>
        <q-btn class="font-r" flat label="組隊揪夥" :class="changeActiveClass('/1')"/>
        <q-btn class="font-r" flat label="時間填空" :class="changeActiveClass('/2')"/>
        <q-btn class="font-r" flat label="關於我們" :class="changeActiveClass('/3')"/>
        <q-btn class="btn-r" style="background:#F3A308 ; color: white" label="會員註冊" to="register"/>
        <q-btn class="btn-r" label="會員登入" color="yellow-9" @click="prompt = true"/>
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

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="foot-font">泰山前端網站開發</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

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

</style>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const register = ref(false)

const address = ref('')

const route = useRoute()

const changeActiveClass = (path) => {
  return route.path === path ? 'active' : ''
}

</script>
