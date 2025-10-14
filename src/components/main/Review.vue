<template>
  <section class="review">
    <div class="inner">
      <h3>리뷰</h3>
      <div class="review-swiper">
        <!-- Swiper 컴포넌트 -->
        <swiper
          class="reviewSwiper"
          :modules="[Autoplay, Pagination, Navigation]"
          :slides-per-view="5.5"
          :space-between="10"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :loop="true"
        >
          <swiper-slide>
            <img src="/images/pjs/review1.png" alt="slide" />
          </swiper-slide>
          <swiper-slide>
            <img src="/images/pjs/review2.png" alt="slide" />
          </swiper-slide>
          <swiper-slide>
            <img src="/images/pjs/review3.png" alt="slide" />
          </swiper-slide>
          <swiper-slide>
            <img src="/images/pjs/review4.png" alt="slide" />
          </swiper-slide>
          <swiper-slide>
            <img src="/images/pjs/review5.png" alt="slide" />
          </swiper-slide>
          <swiper-slide>
            <img src="/images/pjs/review6.png" alt="slide" />
          </swiper-slide>
        </swiper>
      </div>
      <!-- 네비게이션 버튼을 스와이퍼 아래로 배치 -->
      <div class="swiper-navigation">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
</script>

<style lang="scss" scoped>
@use "/src/assets/variables" as * ;
.review {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: $bg-color;
  h3 {
    text-align: center;
    font-size: $title-font;
    font-family: "Cafe24Surround";
    color: $point-color;
    padding-bottom: 50px;
  }
  img {
    width: 100%;
    display: block;
  }
}

.inner {
  position: relative;
  margin: auto;
}

.review-swiper {
  position: relative;
}

/* 네비게이션 버튼들을 스와이퍼 아래에 배치 */
.swiper-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* 스와이퍼와 버튼 사이의 간격 */
}

.swiper-button-prev,
.swiper-button-next {
  background-color: $font-color;
  color: white;
  border-radius: 50%;
  padding: 6px;
  z-index: 10;
  cursor: pointer;
  display: block;
  margin: 0 6px;
  width: 30px; // 버튼 크기 제한
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 화살표 아이콘 크기 줄이기 */
.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 14px !important; // 기본은 44px라 매우 큼
}

/* 호버 시 색상 변경 */
.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: #4a2e1b;
}
.swiper-button-prev {
  left: var(--swiper-navigation-sides-offset, 90%);
  right: auto;
}
.swiper-button-prev,
.swiper-button-next {
  top: var(--swiper-navigation-top-offset, 12%);
}
</style>
