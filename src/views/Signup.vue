<template>
  <FlowAd/>
  <!-- 회원가입 전체 -->
  <div class="signup">
    <div class="signup-inner">
      <!-- 타이틀 -->
      <h2>회원가입</h2>
      <!-- 회원가입 정보 입력란 -->
      <div class="signupInfo">
        <div class="infoBox">
          <p>성함</p>
          <input type="text" placeholder="한글 또는 영어 이름을 입력해주세요" />
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
        <div class="infoBox">
          <p>이메일</p>
          <input type="email" placeholder="you@email.com" />
        </div>
        <div class="infoBox">
          <p>비밀번호</p>
          <input type="password" placeholder="8자 이상, 영문자 + 숫자 포함" />
        </div>
        <div class="infoBox">
          <p>비밀번호 확인</p>
          <input type="password" placeholder="비밀번호를 재입력해주세요" />
        </div>
      </div>

      <SignupTerms />

      <!-- 회원가입 버튼 -->
      <router-link to="/login"><button class="signupBtn">회원 가입</button></router-link>
    </div>
  </div>
</template>
<script setup>
import FlowAd from '@/components/FlowAd.vue';
import SignupTerms from '@/components/SignupTerms.vue';


</script>

<style lang="scss" scoped>
@use "/src/assets/variables" as *;
@use "/src/assets/btn" as *;

.signup {
  background-color: $bg-color;
  .signup-inner {
    width: 85%;
    max-width: 500px;
    margin: auto;
    padding-top: 50px;

    h2 {
      font-family: "Cafe24Surround";
      color: $point-color;
      text-align: center;
      margin-bottom: 40px;
    }

    .signupInfo {
      margin-bottom: 25px;
      .infoBox {
        p {
          font-size: $desc-text-font;
          color: $font-color;
          font-weight: bold;
          margin-bottom: 5px;
        }
        input {
          width: 100%;
          background-color: #fff;
          border: none;
          box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
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
            background-color: #fff;
border: none;
box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
            border-radius: 8px;
            padding: 20px 30px;
          }
          button {
            width: 30%;
          }
        }
      }
    }
  }
  button {
    @include btn-style;
    height: 59px;
  }
}
// 회원가입 버튼
.signupBtn{
  margin: 25px 0;
}
</style>
