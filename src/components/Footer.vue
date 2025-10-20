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
        <div class="copy-wrap">
          <span class="copy">&copy; 빵장고 2025 All Rights Reserved.</span>
          <span class="copy created">Created by PJS PJE KMS and KMJ.</span>
        </div>
      </div>

      <div class="footer-icon">
        <div class="android icon">
          <img src="/images/pjs/googleplay.png" alt="안드로이드" />
          <p>Android 전용</p>
        </div>
        <div class="iso icon">
          <img src="/images/pjs/apple.png" alt="iso" />
          <p>iso 전용</p>
        </div>
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
  padding: 1% 0;

  .foot-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3%;
    flex-wrap: wrap;

    .logo {
      width: 15%;
      min-width: 150px;
      img {
        width: 100%;
      }
    }

    .footer-text {
      color: #fff;
      font-family: "SpokaHanSansNeo";
      font-size: $mobile-notice-font;
      font-weight: 300;
  
      p {
        padding-bottom: 5px;
      }

      .footer-text-title {
        font-weight: 500;
        padding-bottom: 5px;
      }

      .copy-wrap {
        display: flex;
        flex-wrap: nowrap;
        gap: 10px;

        .copy {
          font-size: $mobile-notice-font;
        }
      }
    }

    .footer-icon {
      .sns {
        width: 100%;
        display: flex;
        gap: 15px;
        align-items: center;
        justify-content: center;
        padding: 3% 5%;
        img {
          height: clamp(16px, 2.6vw, 24px);
          width: auto;
          flex: 0 1 auto;
        }
      }
    }

    .icon {
      width: 110px;
      background-color: $sub-color;
      display: flex;
      padding: 3px 5px;
      border-radius: 7px;
      align-items: center;
      gap: 5px;

      img:first-child {
        width: 20px;
      }

      p {
        color: #fff;
        font-family: "SpokaHanSansNeo";
        font-size: $mobile-notice-font;
        font-weight: 100;
      }
    }

    .icon:first-child {
      margin-bottom: 5px;
    }
  }
}

/* ✅ 반응형: copy 문장만 줄바꿈 */
@media screen and (max-width: 768px) {
  .footer-text {
    .copy-wrap {
      flex-direction: column; /* 👈 두 문장만 세로로 */
      align-items: flex-start;
      gap: 3px;

      .copy {
        display: block;
      }
    }
  }
}
@media screen and (max-width: 560px) {
  .footer-text {
    padding: 20px 0;
  }
}
</style>
