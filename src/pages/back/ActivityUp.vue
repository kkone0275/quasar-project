<template>
  <h5 class="text-center">活動上架</h5>
  <q-btn class="add" style="background: #F3A308; color: white" @click="openAdd(-1)" label="新增揪團" />
  <div class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-1">
        <q-dialog v-model="form.dialog" persistent>
          <q-card style="min-width: 800px">
            <div class="text-h6" align="center">{{ form._id.length > 0 ? '編輯揪團' : '新增揪團' }}</div>
            <q-form @submit="submit">
              <div class="flex row justify-between" style="padding: 16px 50px 16px 50px;">
              <q-input class="col-12" style="padding:10px ;" filled v-model="form.name" label="活動名稱" lazy-rules :rules="[rules.required]"/>
              <q-input class="col-12" style="padding:10px ;" filled v-model="form.price" label="活動價格" lazy-rules :rules="[rules.required,rules.price]"/>
              <q-input class="col-12" style="padding: 10px;"
                v-model="form.description"
                filled clearable
                type="textarea"
                color="red-12"
                label="活動說明"
                hint="輸入內文"
                :shadow-text="textareaShadowText" @keydown="processTextareaFill" @focus="processTextareaFill"
                :rules="[rules.required]"
              />
              <q-btn class="col-12" style="padding: 10px;" flat label="Cancel" color="primary" v-close-popup />
              </div>
            </q-form>
          </q-card>
        </q-dialog>
    </div>
  </div>
</div>
</template>

<style scoped>
.add{
  position: absolute;
  right: 16%;
}
</style>

<script setup>
// import { apiAuth } from '../../boot/axios.js'
import { reactive } from 'vue'

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  price (value) {
    return value >= 0 || '價格錯誤'
  }
}

const form = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: undefined,
  sell: false,
  category: '',
  valid: false,
  loading: false,
  dialog: false
})

const openAdd = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.price = 0
    form.description = ''
    form.image = undefined
    form.sell = false
    form.category = ''
    form.valid = false
    form.loading = false
  } else {
    // form._id = products[idx]._id
    // form.name = products[idx].name
    // form.price = products[idx].price
    // form.description = products[idx].description
    // form.image = undefined
    // form.sell = products[idx].sell
    // form.category = products[idx].category
    // form.valid = false
    // form.loading = false
    // form.idx = idx
  }
  form.dialog = true
}
</script>

<style>
.q-card{
  height: 600px;
}

.text-h6{
  margin-top: 20px;
}
</style>
