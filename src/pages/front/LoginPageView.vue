<template>
  <div class="bgc">
    <div class="q-pa-md row items-start q-gutter-md flex-center">
      <q-card class="my-card text-grey-6">
        <div class="flex">
          <p class="word-title">會員登入</p>
          <p class="word-title-r">沒有帳號</p>
          <q-btn class="sin" color="deep-orange-5" label="註冊" />
        </div>
        <hr>
        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 500px">
            <q-card-section text-center class="box">
              <q-form v-model="valid" @submit="login" class="q-gutter-md">
                <p>
                  <q-icon name="account_circle" />
                  帳號 (限4-20碼英文數字)
                </p>
                <q-input v-model="form.account" type="text" :rules="[rules.required, rules.length]" outlined :dense="dense" counter maxlength="20" />
                <p>
                  <q-icon name="key" />
                  你的密碼
                </p>
                <q-input v-model="form.password" type="password" :rules="[rules.required, rules.length]" outlined :dense="dense" counter maxlength="20" />

                <q-btn class="glossy text-center" :loading="loading" rounded color="deep-orange-5" type="submit" label="會員登入" />

              </q-form>
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
  height: 100vh;
  background-color: rgb(176, 176, 176);
}

.my-card {
  width: 28%;
  height: 500px;
  margin-top: 35px;
}

.word-title {
  color: #C01E6C;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 200px;
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

.sin {
  font-weight: bold;
  font-size: 18px;
  height: 20px;
  margin-top: 18px;
}

.glossy {
  font-weight: bold;
  font-size: 18px;
  width: 460px;
  height: 35px;
  margin-top: 12px
}

.box{
  display: flex;
}
</style>

<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '../../stores/user'

const user = useUserStore()

const valid = ref(false)
const loading = ref(false)
const form = reactive({
  account: '',
  password: ''
})

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 20) || '長度必須為 4 ~ 20 個字'
  }
}

const login = async () => {
  loading.value = true
  await user.login(form)
  loading.value = false
}

</script>
