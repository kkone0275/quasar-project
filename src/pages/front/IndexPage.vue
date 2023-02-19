<template>
  <img class="fish" src="../../images/fishw.png" alt="fish-w">
  <img class="phone" src="../../images/phone.png" alt="phone">
  <img class="gift" src="../../images/gift.png" alt="gift">
  <img class="group" src="../../images/group.png" alt="group">
  <img class="person" src="../../images/person.png" alt="person">
  <img class="person02" src="../../images/person02.png" alt="person02">
  <p class="word01">享受生活</p>
  <p class="word03">看見你的需求</p>
  <div class="title01">
  <h1 class="title02">讓空閒釋放</h1>
  <h1 class="title02">充滿生活樂趣</h1>
  </div>
  <div class="btn-set">
    <q-btn class="glossy" icon-right="play_arrow" rounded color="teal-6" label="時間填空" to="/timefill"/>
    <q-btn class="glossy" icon-right="play_arrow" rounded color="deep-orange-5" label="組隊揪夥" to="/teamup" />
  </div>
  <p class="word02">
    出租者除了租自己時間陪伴外，不論男女有不同專業與專長的也<br>
    可以提供給其他人，像是教語言、學電腦、練健身、學專長等等。
  </p>
  <div>
    <img class="people" src="../../images/people.png" alt="people" />
  </div>

  <q-btn class="link" color="orange-4" push>
    <div class="row items-center no-wrap">
      <q-icon left name="share" />
      <div class="text-center link-word">
        釋放空閒<br>填空樂趣
      </div>
    </div>
  </q-btn>

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

.on-right {
    margin-left: 0px;
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
  font-weight: 550;
  position: absolute;
  top: 55%;
  left: 10%;
  color: #9396A0;
}

.word03{
  font-size: 38px;
  font-weight: 800;
  position: absolute;
  letter-spacing:4rem;
  top: 80%;
  left: 36%;
  color: #000000;
}
.fish{
  width: 110px;
  height: 60px;
  position: absolute;
  top:16%;
  left: 24%;
  rotate:calc(330deg)
}

.phone{
  width: 96px;
  height: 96px;
  position: absolute;
  top: 42%;
  left: 46%;
  rotate: calc(330deg);
}

.gift{
  width: 80px;
  height: 80px;
  position: absolute;
  top: 74%;
  left: 6%;
  rotate: calc(30deg);
}

.link{
  width: 210px;
  height: 80px;
  border-radius:10%,10%,10%,10%;
  position: absolute;
  top: 60%;
  right: 26%;
}

.group{
  width: 100px;
  height: 80px;
  position: absolute;
  top: 74%;
  right: 6%;
  rotate: calc(20deg);
}

.link-word{
  font-size: 25px;
}

.person{
  width: 155px;
  height: 120px;
  position: absolute;
  top: 20%;
  right: 48%;
}

.person02{
  width: 85px;
  height: 165px;
  position: absolute;
  top: 60%;
  right: 50%;
}
</style>

<script setup>

</script>
