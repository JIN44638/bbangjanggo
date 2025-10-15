<template>
  <div class="visual">
    <div class="visual-txt">
      <h1>빵은 저희에게 맡기고 <br />편히 여행하세요</h1>
      <div class="reserBtn">
        <RouterLink to="/reservation" class="btn btn-direct">
          <div class="btn-content">
            <span class="btn-text">직접<br />맡길게요</span>
            <div class="btn-image"></div>
          </div>
        </RouterLink>
        <RouterLink to="/reservation" class="btn btn-delivery">
          <div class="btn-content">
            <span class="btn-text">기사님께<br />맡길게요</span>
            <div class="btn-image"></div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@use "@/assets/variables" as *;

.visual {
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/public/images/kms/main-img.png") center/cover no-repeat;

  .visual-txt {
    width: 80%;
    height: 100%;
    max-width: 1000px;
    min-width: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    margin: auto;
    h1 {
      font-family: "Cafe24Surround";
      color: white;
      font-size: 48px;
      z-index: 1;
    }
    .reserBtn {
      width: 100%;
      display: flex;
      gap: 20px;
      margin-top: 180px;
      margin-bottom: 18%;

      .btn {
        // width: 300px
        flex: 1;
        height: 150px;
        border-radius: 20px;
        background-color: $sub-color;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: all 0.3s ease;
        transition: all 0.5s;
        &:hover {
          // transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          background-color: darken($color: $sub-color, $amount: 10);
          .btn-content {
            .btn-image {
              transform: scale(1.02);
              width: 150px;
              height: 150px;
            }
          }
        }
        //

        .btn-content {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 0 50px;

          .btn-text {
            font-family: "Cafe24Surround";
            color: $bg-color;
            font-size: $sub-font;
            font-weight: bold;
            line-height: 1.2;
            flex: 1;
          }

          .btn-image {
            transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
            width: 140px;
            height: 140px;
            flex-shrink: 0;
          }
        }
      }

      .btn-direct {
        .btn-image {
          background: url(/images/kms/self.png) center/contain no-repeat;
        }
      }

      .btn-delivery {
        .btn-image {
          background: url(/images/kms/delivery.png) center/contain no-repeat;
        }
      }
    }
  }
}
</style>
