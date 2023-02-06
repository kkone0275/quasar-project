<template>
  <div class="bgc">
    <div class="q-pa-md row items-start q-gutter-md flex-center">
      <q-card class="my-card text-grey-6">
        <div class="flex">
          <p class="word-title">會員註冊</p>
          <p class="word-title-r">已經註冊</p>
          <a class="word-title-r" href="">登入</a>
        </div>
        <hr>
        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 500px">
            <q-card-section>
              <p>
                <q-icon name="person" />
                帳號 (限4-20碼英文數字)
              </p>
              <q-input outlined v-model="account" :dense="dense" />
              <p>
                <q-icon name="mail" />
                E-mail信箱
              </p>
              <q-input outlined v-model="email" :dense="dense" />
              <p>
                <q-icon name="key" />
                你的密碼
              </p>
              <q-input outlined v-model="password" :dense="dense" />
              <p>
                <q-icon name="password" />
                確認密碼
              </p>
              <q-input outlined v-model="password" :dense="dense" />
              <q-btn class="glossy" rounded color="deep-orange-5" label="會員註冊" />
            </q-card-section>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
/* #q-app{
  background-color: rgb(190, 188, 185);
} */
.bgc {
  width: 100%;
  height: 88.6vh;
  background-color: rgb(176, 176, 176);
}

.my-card {
  width: 28%;
  height: 650px;
  margin-top: 35px;
}

.word-title {
  color: #C01E6C;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 225px;
}

p {
  color: rgb(103, 102, 102);
  font-weight: bold;
  font-size: 18px;
}

.word-title-r {
  font-size: 20px;
  margin-top: 28px;
  margin-right: 8px;
}

.q-input {
  margin-bottom: 10px;
}

.glossy {
  font-size: 18px;
  width: 460px;
  height: 35px;
  margin-top: 12px
}
</style>

<script setup>
</script>
