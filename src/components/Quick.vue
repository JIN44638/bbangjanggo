<template>
  <div class="quick">
    <div class="btnwrap">
      <!-- 맨 위로 버튼 -->
      <button v-show="show" class="quick-top" @click="gotop">
        <img src="/images/pjs/gotop3.png" alt="맨위로가기" />
      </button>

      <!-- ellipsis 버튼 -->
      <button class="ellipsis" @click="toggleExpand">
        <img :src="currentEllipsis" alt="ellipsis" />
      </button>

      <!-- 나머지 버튼 3개 -->
      <button class="sub-btn">
        <img src="/images/pjs/confirm.png" alt="confirm" />
        <span>예약확인</span>
      </button>
      <button class="sub-btn">
        <img src="/images/pjs/contact.png" alt="contact" />
        <span>문의하기</span>
      </button>
      <button class="sub-btn">
        <img src="/images/pjs/search.png" alt="search" />
        <span>지점찾기</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

// gotop 표시 여부
const show = ref(false);
// 스크롤 상태
const isScrolled = ref(false);
// ellipsis 클릭 시 확장 여부
const isExpanded = ref(true);

// 스크롤 이벤트
const handleScroll = () => {
  const y = window.scrollY;
  show.value = y > 200;
  isScrolled.value = y > 200;
};

// gotop 동작
const gotop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ellipsis 클릭 시 3개 버튼 숨기기/보이기
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
  const subBtns = document.querySelectorAll(".sub-btn");
  subBtns.forEach((btn) => {
    btn.style.display = isExpanded.value ? "flex" : "none";
  });
};

// ellipsis 이미지 변경
const currentEllipsis = computed(() =>
  isScrolled.value
    ? "/images/pjs/ellipsis5.png"
    : "/images/pjs/ellipsis-white.png"
);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
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
    box-shadow: none;
  }

  button {
    position: relative;
    width: 45px;
    height: 45px;
    font-size: 20px;
    cursor: pointer;
    border: none;
    background: transparent;
    border-radius: 50%;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
    span {
      display: none;
      position: absolute;
      top: 20px;
      left: -63px;
      font-size: $mobile-notice-font;
      width: 60px;
      background-color: $font-color;
      color: #fff;
      padding: 5%;
      border-radius: 10px;
      z-index: 20;
    }
    &:hover span {
      display: block;
    }
  }

  .ellipsis {
    width: 37px;
    height: 37px;
  }

  /* 📱 모바일일 때만 ellipsis 클릭 시 나머지 버튼 숨김/보임 */
  @media (max-width: 768px) {
    .sub-btn {
      display: none;
    }
  }
}
</style>
