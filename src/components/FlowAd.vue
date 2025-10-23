<template>
  <div class="flow-txt">
    <div class="flowNotice">
      <div class="flowNotice-wrap">
        <p>WELCOME EVENTS 웰컴이벤트 참여시 쿠폰증정</p>
        <p>대구 가을 축제한정 10% 할인</p>
        <p>11AM  / 3PM BREAD TIME SALE</p>
        <p>스탬프 모으고 무료쿠폰 받자</p>
        <p>WELCOME EVENTS 웰컴이벤트 참여시 쿠폰증정</p>
        <p>대구 가을 축제한정 10% 할인</p>
        <p>11AM  / 3PM BREAD TIME SALE</p>
        <p>스탬프 모으고 무료쿠폰 받자</p>
        <p>WELCOME EVENTS 웰컴이벤트 참여시 쿠폰증정</p>
        <p>대구 가을 축제한정 10% 할인</p>
        <p>11AM  / 3PM BREAD TIME SALE</p>
        <p>스탬프 모으고 무료쿠폰 받자</p>
        <p>WELCOME EVENTS 웰컴이벤트 참여시 쿠폰증정</p>
        <p>대구 가을 축제한정 10% 할인</p>
        <p>11AM  / 3PM BREAD TIME SALE</p>
        <p>스탬프 모으고 무료쿠폰 받자</p>
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
.flow-txt {
  .flowNotice {
    width: 100%;

    overflow: hidden;

    background: $font-color;
    padding: 10px;
    color: $bg-color;
    font-size: $mobile-notice-font;
    .flowNotice-wrap {
      display: flex;
      gap: 100px;
      white-space: nowrap;
      flex-wrap: nowrap;
      
      /* 텍스트를 두 번 반복해서 연결 */
      &::after {
        content: "";
      }

      animation: marquee 12s linear infinite;

      will-change: transform;
      p {
        flex-shrink: 0;
      }
    }
  }
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
}
</style>
