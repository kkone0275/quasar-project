<template>
  <div class="btn-set">
    <q-btn class="glossy" icon-right="play_arrow" rounded color="teal-6" label="時間填空"/>
    <q-btn class="glossy" icon-right="play_arrow" rounded color="deep-orange-5" label="組隊揪夥"/>
  </div>

  <q-footer elevated class="bg-grey-8 text-white">
    <q-toolbar>
      <q-toolbar-title>
        <div class="foot-font">泰山前端網站開發</div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<style scoped>
.btn-set{
  position: absolute;
  top: 65%;
  left: 12%;
}
.q-btn{
  letter-spacing :3px;
  font-size: 22px;
  width: 190px;
  height: 60px;
  margin-right: 40px;
}
.q-toolbar{
  background-color:#fac761;
}
.foot-font{
  color: #C01E6C;
  font-weight: bold;
  text-align: center;
}
</style>

<script setup>

</script>
