<template>
  <div class="price">
    <h2>요금 안내</h2>
    <div class="inner p_inner">
      <div class="notice_wrap">
        <div class="notice">
          <h3>직접 맡길게요</h3>
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
          <h3>기사님께 맡길게요</h3>
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
      </div>
      <span>보냉백 (+1000) / 아이스팩 (+1,000) 추가시 요금이 부과됩니다.</span>
    </div>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
@use "/src/assets/variables" as *;

.price {
  position: relative;
  background-color: #ffebc2;
  padding-bottom: 100px;
  padding-top: 50px;
  text-align: center;
  h2 {
    text-align: center;
    font-family: "Cafe24Surround";
    margin-bottom: 50px;
    color: #a36031;
    font-size: 32px;
  }
  .notice_wrap {
    // display: flex;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    // flex-wrap: wrap;
    gap: 40px;
    padding-bottom: 20px;

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
      font-size: $desc-text-font;
      font-weight: bold;
      justify-content: space-between;
    }
    .notice {
      /* height: 170px; */
      background-color: #ffffff;

      border-radius: 15px;
    }
    .notice h3 p {
      // height: 398px;
      // width: 610px;
      font-size: 16px;
      margin-top: 75px;
      margin-left: 75px;
    }

    .info {
      padding: 15%;
    }
  }
  span {
    color: #50311d;
    font-weight: bold;
    padding-top: 30px;

    text-align: center;
    font-size: 16px;
  }
} /* 모바일 화면일 때 토글 */
@media (max-width: 768px) {
  .mobile {
    padding-top: 70px;
    padding-bottom: 70px;
    img {
      width: 100%;
    }
    display: block;
    padding-bottom: 80px;
    h2 {
      font-size: 20px;
    }
  } /* 모바일 이미지 보여줌 */
}
@media (max-width: 390px) {
  .mobile {
    img {
      width: 100%;
    }
    display: block;
    padding-bottom: 80px;
  } /* 모바일 이미지 보여줌 */
  h2 {
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 12px;
  }
}
</style>
