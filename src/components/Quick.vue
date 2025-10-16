<template>
  <div class="quick">
    <div class="btnwrap">
      <button v-show="show" class="quick-top" @click="gotop">
        <img src="/images/pjs/gotop3.png" alt="검색하기" />
      </button>
      <button class="ellipsis">
        <img src="/images/pjs/ellipsis5.png" alt="ellipsis" />
      </button>
      <button>
        <img src="/images/pjs/confirm.png" alt="confirm" />
        <span>예약확인</span>
      </button>
      <button>
        <img src="/images/pjs/contact.png" alt="contact" />
        <span>문의하기</span>
      </button>
      <button>
        <img src="/images/pjs/search.png" alt="search" />
        <span>검색하기</span>
      </button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
// gotop 상태 저장
const show = ref(false);
// 스크롤을 체크 해서 일정 높이 이상이면 버튼 보이기
const handleScroll = () => {
  show.value = window.scrollY > 200; //200px이상이면 gotop버튼 보임
};
// 맨위로 가기
const gotop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
@use "/src/assets/variables" as *;
.quick {
  position: relative;
  .btnwrap {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 10;
    gap: 20px;
    align-items: center;
  }
  .quick-top {
    width: 30px;
    height: 30px;
    box-shadow:none
  }
  button {
    position: relative;
    width: 60px;
    height: 60px;
    font-size: 20px;
    cursor: pointer;
    border: none;
    background: transparent;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
    &:hover span {
      display: block;
    }
    img {
      width: 100%;
    }
    span {
      display: none;
      position: absolute;
      top: 20px;
      right: 65px;
      font-size: $mobile-notice-font;
      width: 60px;
      background-color: $font-color;
      color: #fff;
      padding: 5%;
      border-radius: 10px;
    }
  }
  .ellipsis {
    width: 37px;
    height: 37px;
  }
}
</style>
