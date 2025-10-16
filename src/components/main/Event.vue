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
@use "/src/assets/variables" as *;
.event {
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: $sub-color;
  h3 {
    text-align: center;
    font-size: $title-font;
    font-family: "Cafe24Surround";
    color: #fff;
    padding-bottom: 70px;
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
.event-swiper {
  position: relative;
}
</style>
