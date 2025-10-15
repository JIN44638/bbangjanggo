<template>
  <footer>
    <div class="inner foot-inner">
      <div class="logo">
        <img src="/images/pjs/logo_white(hor.).png" alt="logo" />
      </div>
      <div class="footer-text">
        <p class="footer-text-title">주식회사 빵장고</p>
        <p>대구 중구 중앙대로 394 TEL.053-568-5857</p>
        <p>사업자등록번호 : 504-85-25999</p>
        <p class="copy">&copy; 빵장고 2025 All Rights Reserved. Created by PJS, PJE, KMS, and KMJ.</p>
      </div>
      <div class="footer-icon">
        <img src="/images/pjs/android.png" alt="android" />
        <img src="/images/pjs/iso.png" alt="iso" />
        <div class="sns">
          <img src="/images/pjs/twiter.png" alt="sns" />
          <img src="/images/pjs/facebook.png" alt="sns" />
          <img src="/images/pjs/instagram.png" alt="sns" />
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup></script>

<style lang="scss" scoped>
@use "/src/assets/variables" as *;

footer {
  background-color: $point-color;
  padding: 2% 0;
  .foot-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3%;
    .logo {
      width: 20%;
      img {
        width: 100%;
      }
    }
    .footer-text {
      color: #fff;
      font-family: "SpokaHanSansNeo";
      font-size: $notice-text-font;
      font-weight: 300;
      p{
        padding-bottom: 5px;
      }
      .footer-text-title{
        font-weight: 500;
        padding-bottom: 5px;
      }
      .copy{
        padding-top: 5px;
        font-size: small;
      }
    }
    .footer-icon {
      width: 15%;
      img {
        width: 100%;
      }
      .sns {
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-end;
        padding: 1% 5%;
        img {
          max-width: 100%;
          height: 24px;
          width: auto;
          flex: 0 0 auto;
        }
      }
    }
  }
}
</style>
