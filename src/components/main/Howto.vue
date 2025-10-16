<template>
  <div class="howto">
    <!-- 이용방법 -->
    <h1>이용방법</h1>
    <div class="inner">
      <!-- 웹 -->
      <div class="step1_2_3_4">
        <ul class="web">
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
        </ul>
      </div>
      <!-- 모바일 -->
      <div class="step1_2_3_4">
        <ul class="mobile">
          <img src="/public/images/kmj/howto-mobile.png" alt="모바일 이용방법" />
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
.howto {
  display: grid;
  background-color: #ba8e5f;

  h1 {
    padding-top: 50px;
    text-align: center;
    color: #fff;
    margin-bottom: 60px;
  } // width: 1000px;
}
/* 기본: PC 이미지만 보이게 */
.web {
   display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px; /* 칸 사이 간격 */
    li{
      img{
        width: 100%;
      }
      padding-bottom: 50px;
    }
}
.mobile {
  display: none;
}

/* 모바일 화면일 때 토글 */
@media (max-width: 768px) {
  .web {
    display: none;
  } /* PC 이미지 숨김 */
  .mobile {
    img {
      width: 100%;
    }
    display: block;
    padding-bottom: 80px;
  } /* 모바일 이미지 보여줌 */
}
</style>
