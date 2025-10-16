<template>
  <div class="login-wrap">
    <div class="flow-txt"></div>
    <div class="login-info-wrap">
      <h2>로그인</h2>
      <div class="login-input">
        <input type="text" placeholder="아이디 입력" />
        <input type="text" placeholder="비밀번호 입력" />
      </div>
      <div class="login-box">
        <p>간편 로그인</p>
        <div class="sns-login">
          <div class="sns-icon">
            <img src="/public/images/kms/sns-kakao.png" alt="카카오톡" />
            <img src="/public/images/kms/sns-google.png" alt="구글" />
            <img src="/public/images/kms/sns-naver.png" alt="네이버" />
          </div>
        </div>
        <div class="login-help">
          <router-link to="/searchid">아이디 찾기</router-link>
          <router-link to="/searchPass">비밀번호 찾기</router-link>
          <router-link to="/signup">회원가입</router-link>
        </div>
        <div class="login-btn"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="scss" scoped>
@use "/src/assets/variables" as *;

.login-wrap {
  .flow-txt {
    height: 60px;
    background-color: $font-color;
    margin-bottom: 50px;
  }
  .login-info-wrap {
    width: 80%;
    max-width: 1000px;
    margin: auto;

    h2 {
      font-family: "Cafe24Surround";
      color: $point-color;
      text-align: center;
      margin-bottom: 40px;
    }
    .login-input {
      display: flex;
      flex-direction: column;
      input {
        height: 70px;
        background-color: $bg-color;
        border-radius: 15px;
        padding: 0 30px;
        margin-bottom: 40px;
      }
    }
    .login-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        color: $font-color;
      .sns-login {
        display: flex;
        align-items: center;
        margin: auto;
        gap: 15px;
        .sns-icon {
          display: flex;
          img {
            width: 50px;
          }
        }
      }
      .login-help {
        display: flex;
        gap: 25px;
      }
    }
  }
}
</style>
