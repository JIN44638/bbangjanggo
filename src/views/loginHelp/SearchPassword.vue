<template>
  <div class="searchId">
    <div class="searchId-inner">
      <h2>비밀번호 찾기</h2>
      <div class="infoBox">
        <p>이메일</p>
        <input type="text" placeholder="you@email.com" />
      </div>
      <div class="infoBox-a">
        <p>휴대폰 번호</p>
        <div class="info-txt-box">
          <input type="text" placeholder="010-1234-5678" />
          <button>인증번호 발송</button>
        </div>
      </div>
      <div class="infoBox">
        <p>인증번호 입력</p>
        <input type="text" placeholder="인증번호 6자리 입력" />
      </div>
      <button>다음</button>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
@use "/src/assets/variables" as *;
@use "/src/assets/btn" as *;

.searchId {
  .searchId-inner {
    max-width: 500px;
    width: 90%;
    margin: auto;
    margin-top: 50px;
    h2 {
      font-family: "Cafe24Surround";
      color: $point-color;
      text-align: center;
      margin-bottom: 40px;
    }
    .infoBox {
      p {
        font-size: $desc-text-font;
        color: $font-color;
        font-weight: bold;
        margin-bottom: 5px;
      }
      input {
        width: 100%;
        background-color: $bg-color;
        border-radius: 8px;
        padding: 20px 30px;
        margin-bottom: 20px;
      }
    }
    .infoBox-a {
      p {
        font-size: $desc-text-font;
        color: $font-color;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .info-txt-box {
        display: flex;
        margin-bottom: 20px;
        gap: 10px;
        input {
          width: 70%;
          background-color: $bg-color;
          border-radius: 8px;
          padding: 20px 30px;
        }
        button {
          width: 30%;
        }
      }
    }
    button {
      @include btn-style;
      height: 59px;
    }
  }
}
</style>
