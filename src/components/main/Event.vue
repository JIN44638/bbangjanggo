<template>
  <section class="event">
    <div class="inner">
      <h3>프로모션</h3>
      <div class="event-swiper">
        <!-- Swiper 컴포넌트 -->
        <swiper
          class="eventSwiper"
          :modules="[Autoplay, Pagination, Navigation]"
          :slides-per-view="3"
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
            <img src="/images/pje/welcomeEvent.png" alt="slide" />
          </swiper-slide>
          <swiper-slide>
            <img src="/images/pje/banner_breadtime.png" alt="slide" />
          </swiper-slide>
          <swiper-slide>
            <img src="/images/pje/banner_stamp.png" alt="slide" />
          </swiper-slide>
          <swiper-slide>
            <img src="/images/pje/banner_festival.png" alt="slide" />
          </swiper-slide>
        </swiper>
        <!-- 네비게이션 버튼을 swiper 바깥으로 이동 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
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
.event {
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: rgba(186, 142, 95, 1);
}
.event h3 {
  text-align: center;
  font-size: 30px;
  font-family: "Cafe24Surround";
  color: #fff;
  padding-bottom: 70px;
}
.event img {
  width: 100%;
  display: block;
}
.inner {
  position: relative;
  margin: auto;
}
.event-swiper{
  position: relative;
}
// /* 네비게이션 버튼 스타일링 */
// .swiper-button-prev,
// .swiper-button-next {
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background-color: #5a3a29; /* 진한 갈색 */
//   color: white;
//   border-radius: 50%;
//   padding: 10px;
//   z-index: 10;
//   cursor: pointer;
//   font-size: 18px; /* 화살표 크기 조정 */
//   display: block; /* 버튼이 보이도록 강제 설정 */
// }

// .swiper-button-prev {
//   left: -10px; /* 왼쪽 버튼 위치 */
// }

// .swiper-button-next {
//   right: -10px; /* 오른쪽 버튼 위치 */
// }

// .swiper-button-prev:hover,
// .swiper-button-next:hover {
//   background-color: #4a2e1b; /* 버튼 호버시 진한 갈색 */
// }
</style>
