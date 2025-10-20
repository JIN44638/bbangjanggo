<template>
  <div class="login-wrap">
    <div class="flow-txt">
      <div class="flowNotice">
        <div class="flowNotice-wrap">
          <p>WELCOM EVENTS 웰컴이벤트 참여시 쿠폰증정</p>
        </div>
      </div>
    </div>
    <div class="login-info-wrap">
      <h2>로그인</h2>
      <div class="login-input">
        <input type="text" placeholder="아이디 입력" />
        <input type="text" placeholder="비밀번호 입력" />
      </div>
      <div class="login-box">
        <div class="logBtn">
          <div class="login-btn">로그인</div>
          <router-link to="/signup" class="login-btn">회원가입</router-link>
        </div>

        <div class="login-help">
          <div class="loginHelp-top">
            <router-link to="/searchid">아이디 찾기</router-link>
            <div class="logline"></div>
            <router-link to="/searchPass">비밀번호 찾기</router-link>
            <div class="logline"></div>
            <router-link to="/">관리자 로그인</router-link>
          </div>
        </div>
        <div class="line"></div>
        <div class="sns-login">
          <p>간편 로그인</p>
          <div class="sns-login">
            <div class="sns-icon">
              <a href="#"><img src="/public/images/kms/sns-kakao.png" alt="카카오톡" /></a>
              <a href="#"><img src="/public/images/kms/sns-google.png" alt="구글" /></a>
              <a href="#"><img src="/public/images/kms/sns-naver.png" alt="네이버" /></a>
            </div>
          </div>
        </div>
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
@use "/src/assets/btn" as *;

.login-wrap {
  .flow-txt {
    .flowNotice {
      width: 100%;
      overflow: hidden;
      background: $font-color;
      padding: 20px;
      margin-bottom: 50px;
      color: $bg-color;
      font-size: $notice-text-font;
      p {
        display: inline-block;
        white-space: nowrap;
        padding-left: 100%;
        animation: marquee 15s linear infinite;
      }
    }
    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      } /* 왼쪽 끝까지 이동 */
    }
  }
  .login-info-wrap {
    width: 100%;
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
      margin: auto;
      width: 90%;
      max-width: 400px;

      input {
        background-color: $bg-color;
        border-radius: 8px;
        padding: 20px 30px;
        margin-bottom: 40px;
      }
    }
    .login-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 25px;
      color: $font-color;
      .line {
        height: 1px;
        width: 100%;
        max-width: 400px;
        background-color: #ccc;
        margin: 20px 0 10px 0;
      }
      .sns-login {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        max-width: 400px;
        gap: 20px;
        margin-bottom: 30px;
        .sns-icon {
          width: 100%;
          display: flex;
          justify-content: space-between;
          img {
            display: block;
            width: 100%;
            padding: 0 30%;
          }
        }
      }
      .login-help {
        display: flex;
        gap: 25px;
        align-items: center;
        justify-content: center;
        width: 100%;
        white-space: nowrap;
        .loginHelp-top {
          display: flex;
          gap: 10px;
          .logline {
            height: 15px;
            width: 1px;
            background-color: #ccc;
            margin: 3px;
          }
        }
      }
      .logBtn {
        display: flex;
        flex-direction: column;
        width: 90%;
        max-width: 400px;
        align-items: center;
        .login-btn {
          @include btn-style;
          max-width: 500px;
          text-align: center;
          padding: 20px 30px;
          margin: 20px 0 0 0;
          &:nth-child(2) {
            background-color: $main-color;
            color: $font-color;
          }
        }
      }
    }
  }
}

// 반응형
@media (max-width: 768px) {
  .login-help {
    display: flex;
    flex-direction: column;
    font-size: $mobile-text-font;
    .loginHelp-top {
      gap: 5px;
    }
  }
}
@media (max-width: 320px) {
  .login-help {
    display: flex;
    flex-direction: column;
    font-size: $mobile-notice-font;
    .loginHelp-top {
      gap: 3px;
    }
  }
  .logBtn {
    font-size: $mobile-notice-font;
  }
}
</style>
