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
            <img src="/public/images/pjs/review1.png" alt="slide" />
          </swiper-slide>
          <swiper-slide>
            <img src="/public/images/pjs/review2.png" alt="slide" />
          </swiper-slide>
          <swiper-slide>
            <img src="/public/images/pjs/review3.png" alt="slide" />
          </swiper-slide>
          <swiper-slide>
            <img src="/public/images/pjs/review4.png" alt="slide" />
          </swiper-slide>
          <swiper-slide>
            <img src="/public/images/pjs/review5.png" alt="slide" />
          </swiper-slide>
          <swiper-slide>
            <img src="/public/images/pjs/review6.png" alt="slide" />
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
.review {
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: rgba(255, 251, 242, 1);
}

.review h3 {
  text-align: center;
  font-size: 30px;
  font-family: "Cafe24Surround";
  color: rgba(163, 96, 49, 1);
  padding-bottom: 50px;
}

.review img {
  width: 100%;
  display: block;
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
  background-color: #5a3a29; /* 진한 갈색 */
  color: white;
  border-radius: 50%;
  padding: 10px;
  z-index: 10;
  cursor: pointer;
  font-size: 18px; /* 화살표 크기 조정 */
  display: block; /* 버튼이 보이도록 강제 설정 */
  margin: 0 10px; /* 양쪽 화살표를 옆으로 붙이기 위한 간격 설정 */
}

/* 화살표가 호버될 때 색상 변경 */
.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: #4a2e1b; /* 버튼 호버시 진한 갈색 */
}

.swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 86%);
    right: auto;}
.swiper-button-prev, .swiper-button-next {
    top: var(--swiper-navigation-top-offset, 8%);}
</style>
