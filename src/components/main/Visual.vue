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
    justify-content: flex-start;
    margin: auto;

    @media (max-width: 830px) {
      max-width: 500px;
    }
    h1 {
      font-family: "Cafe24Surround";
      color: white;
      font-size: 48px;
      z-index: 1;
      padding-top: 40%;
      @media (max-width:768px){
        padding-top: 60%;
      }
      @media (max-width:390px){
        padding-top: 90%;
      }
    }
    .reserBtn {
      width: 100%;
      display: flex;
      gap: 20px;
      margin-top: 180px;
      margin-bottom: 18%;
      @media (max-width: 830px) {
        margin-top: 100px;
      }

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
          // background-color: darken($color: $point-color, $amount: 10);
          background-color: rgb(133, 99, 63);
          // .btn-content {
          //   .btn-image {
          //     transform: scale(1.02);
          //     width: 150px;
          //     height: 150px;
          //   }
          // }
        }
        //

        .btn-content {
          // position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 170px;
          padding: 0 50px;
          @media (max-width: 980px) {
            padding: 0 30px;
          }
          @media (max-width: 390px) {
            padding: 0 20px;
          }
          .btn-text {
            font-family: "Cafe24Surround";
            color: $bg-color;
            font-size: $sub-font;
            font-weight: bold;
            line-height: 1.2;
            flex: 1;
            @media (max-width: 390px) {
              font-size: $f-a-q-text-font;
            }
          }

          .btn-image {
            // position: absolute;
            // top: 50%;
            // right: 50px;
            // transform: translateY(-50%);
            transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
            width: 160px;
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
@media (max-width: 830px) {
  .visual {
    .visual-txt {
      h1 {
        font-size: 30px;
      }
    }
  }

  .reserBtn {
    flex-direction: column;
  }
}
@media (max-width: 390px) {
  .visual {
    .visual-txt {
      h1 {
        font-size: $mobile-title-font;
      }
    }
  }

  // :deep(.btn-content).btn-image {
  //   right: 10px;
  // }
}
</style>
