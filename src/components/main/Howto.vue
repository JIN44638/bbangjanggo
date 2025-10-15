<template>
  <div class="howto">
    <!-- 이용방법 -->
    <h1>이용방법</h1>
    <div class="inner">
       <ul>
        <div class="step1_2_3_4">
       
        <li>
          <img src="/public/images/kmj/step1.png" alt="" />
        </li>
        <li>
          <img src="/public/images/kmj/step2.png" alt="" />
        </li>
        <li>
          <img src="/public/images/kmj/step3.png" alt="" />
        </li>
        <li>
          <img src="/public/images/kmj/step4.png" alt="" />
        </li>
      </div></ul>
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
.howto {

  background-color: #BA8E5F;

  h1{
    padding-top: 50px;
    text-align: center;
    color: #fff;
    margin-bottom: 60px;
  }// width: 1000px;
}
.step1_2_3_4 {
  // padding-top: 150px;
  width: 100%;
  display: flex;
  gap: 48px;
  flex: 1;
    padding-bottom: 50px;
}
img{
  width: 100%;
}
</style>
