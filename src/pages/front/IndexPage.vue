<template>
  <img class="fish" src="../../images/fishw.png" alt="fish-w">
  <p class="word01">享受生活</p>
  <div class="title01">
  <h1 class="title02">讓空閒釋放</h1>
  <h1 class="title02">充滿生活樂趣</h1>
  </div>
  <div class="btn-set">
    <q-btn class="glossy" icon-right="play_arrow" rounded color="teal-6" label="時間填空"/>
    <q-btn class="glossy" icon-right="play_arrow" rounded color="deep-orange-5" label="組隊揪夥"/>
  </div>
  <p class="word02">
    出租者除了租自己時間陪伴外，不論男女有不同專業與專長的也<br>
    可以提供給其他人，哪怕是當工具人、教語言、學電腦、練健身、學專長等。
  </p>
  <div>
    <img class="people" src="../../images/people.png" alt="people" />
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

.people{
  width: 650px;
  top: 18%;
  right: 5%;
  position: absolute;
}

.on-right{
  margin-left: 2px;
}

.title01{
  position: absolute;
  top: 30%;
  left: 10%;
}

.title02{
  margin: 0;
  margin-bottom: 18px;
  font-weight: bold;
  font-family:"微軟正黑體";
}

.q-btn{
  font-weight: bold;
}

.word01{
  font-size: 28px;
  font-weight: 800;
  position: absolute;
  letter-spacing:1rem;
  top: 25%;
  left: 11%;
  color: #EC684B;
}

.word02{
  font-size: 20px;
  font-weight: 550;
  position: absolute;
  top: 55%;
  left: 10%;
  color: #9396A0;
}
.fish{
  width: 110px;
  height: 60px;
  position: absolute;
  top:16%;
  left: 24%;
  rotate:calc(330deg)
}
</style>

<script setup>

</script>
