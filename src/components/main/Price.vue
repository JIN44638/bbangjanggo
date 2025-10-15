<template>
  <div class="price">
    <h2>요금 안내</h2>
    <div class="inner">
      <div class="notice">
        <h3>무인(개인보관함)</h3>
        <div class="info">
          <div class="box">
            <p>냉장실</p>
            <p>3000원</p>
          </div>
          <div class="box">
            <p>상온</p>
            <p>2500원</p>
          </div>
          <div class="box">
            <p>4시간 초과시</p>
            <p>300원/10분당</p>
          </div>
          <div class="box">
            <p>최대보관시간</p>
            <p>24시간</p>
          </div>
        </div>
      </div>

      <div class="notice">
        <h3>기사(접수대행)</h3>
        <div class="info">
          <div class="box">
            <p>냉장실</p>
            <p>4,000원</p>
          </div>
          <div class="box">
            <p>상온</p>
            <p>3,000원</p>
          </div>
          <div class="box">
            <p>4시간 초과시</p>
            <p>300원/10분당</p>
          </div>
          <div class="box">
            <p>최대보관시간</p>
            <p>24시간</p>
          </div>
        </div>
      </div>
      <span>보냉백 (+1000) / 아이스팩 (+1,000) 추가시 요금이 부과됩니다.</span>
    </div>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
@use "/src/assets/variables" as * ;
.price {
  position: relative;
  background-color: #ffebc2;
  padding-bottom: 100px;
  padding-top: 50px;
  h2 {
    text-align: center;
    margin-bottom: 50px;
    color: #a36031;
  }
  .inner {
    display: flex;
    gap: 40px;

    span {
      position: absolute;
      color: #50311D;
      font-weight: bold;
      padding-top: 30px;
      bottom: 20px;
      left: 760px;
      margin-left: 109px;
      font-size: 16px;
    }
    h3 {
      width: 100%;
      border: solid #ba8e5f;
      border-radius: 15px 15px 0 0;
      background-color: #ba8e5f;
      text-align: center;
      padding: 10px 0;
      color: #fff8f8;
    }

    .box {
      padding-bottom: 21px;
      display: flex;
      font-size: $desc-text-font ;
      font-weight: bold;
      justify-content: space-between;
    }
    .notice {
      width: calc(100% / 2);
      /* height: 170px; */
      background-color: #ffffff;

      border-radius: 15px;
    }
    .notice h3 p {
      height: 398px;
      width: 610px;
      font-size:16px;
      margin-top: 75px;
      margin-left: 75px;
    }

    .info {
      padding: 15%;
    }
  }
}
</style>
