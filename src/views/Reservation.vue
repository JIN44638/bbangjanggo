<template>
  <div class="reservation">
    <div class="inner">
      <h1>예약하기</h1>
      <div>
        <!-- 지점 선택 -->
        <h2>지점 선택</h2>
        <Location />
        <!-- 날짜 선택 -->
        <h2>날짜 선택</h2>
        <Calender />
        <!-- 보관 방법 -->
        <div class="storage_method">
          <div class="method_title">
            <h2>보관 방법</h2>
            <p>(중복 선택 가능)</p>
          </div>
          <div class="option_list">
            <!-- 온도 -->
            <div class="temp">
              <p>온도</p>
              <div class="temp_option">
                <p class="opt_btn">냉보관</p>
                <p class="opt_btn">상온보관</p>
              </div>
            </div>
            <!-- 접수 방법 -->
            <div class="method">
              <p>접수 방법</p>
              <div class="method_option">
                <p class="opt_btn">직접 맡길게요</p>
                <p class="opt_btn">기사님께 맡길게요</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 부가 서비스 -->
        <div class="extra_service">
          <h2>부가서비스</h2>
          <div class="service_option">
            <p class="opt_btn">선택 안함</p>
            <p class="opt_btn">아이스팩 +1,000</p>
            <p class="opt_btn">보냉백 +5,000</p>
          </div>
        </div>
        <!-- 기사 보관 -->
        <div class="delivery">
          <h2>기사님께 맡길게요</h2>
          <div class="bakery_selection">
            <p class="store">방문 베이커리</p>
            <div class="custom-select" @click="toggleBakeryDropdown">
              <div class="select-trigger" :class="{ open: isBakeryDropdownOpen }">
                <div v-if="selectedBakeryName">
                  <div class="label">
                    <p>{{ selectedBakeryName }}</p>
                    <span>{{ selectedBakeryAddress }}</span>
                  </div>
                </div>
                <div v-else>
                  <div class="label placeholder">방문할 빵집을 선택해 주세요</div>
                </div>
              </div>
              <div class="select-options" :class="{ open: isBakeryDropdownOpen }">
                <div class="option" @click="selectBakery('소베', '소베 (대구 중구 중앙대로79길 6 1층)')">
                  <p>소베</p>
                  <span>대구 중구 중앙대로79길 6 1층</span>
                </div>
                <div
                  class="option"
                  @click="
                    selectBakery('따끈따끈베이커리', '따끈따끈베이커리 (대구 중구 중앙대로 395 1F 따끈따끈베이커리)')
                  "
                >
                  <p>따끈따끈베이커리</p>
                  <span>대구 중구 중앙대로 395 1F 따끈따끈베이커리</span>
                </div>
                <div class="option" @click="selectBakery('공주당', '공주당 (대구 중구 동성로 6-2)')">
                  <p>공주당</p>
                  <span>대구 중구 동성로 6-2</span>
                </div>
                <div class="option" @click="selectBakery('네쥬', '네쥬 (대구 중구 남성로 55 neige 네쥬)')">
                  <p>네쥬</p>
                  <span>대구 중구 남성로 55 neige 네쥬</span>
                </div>
                <div class="option" @click="selectBakery('윈드윈', '윈드윈 (대구 중구 달구벌대로405길 42 1층)')">
                  <p>윈드윈</p>
                  <span>대구 중구 달구벌대로405길 42 1층</span>
                </div>
                <div class="option" @click="selectBakery('따따따', '따따따 (대구 중구 동덕로36길 127 1층)')">
                  <p>따따따</p>
                  <span>대구 중구 동덕로36길 127 1층</span>
                </div>
                <div class="option" @click="selectBakery('고려베이커리', '고려베이커리 (대구 남구 자유6길 45-2)')">
                  <p>고려베이커리</p>
                  <span>대구 남구 자유6길 45-2</span>
                </div>
                <div class="option" @click="selectBakery('르배', '르배 (대구 수성구 화랑로8길 11-11 1층)')">
                  <p>르배</p>
                  <span>대구 수성구 화랑로8길 11-11 1층</span>
                </div>
                <div
                  class="option"
                  @click="selectBakery('화이트리에 성서점', '화이트리에 성서점 (대구 달서구 성서로 420 1층 106호)')"
                >
                  <p>화이트리에 성서점</p>
                  <span>대구 달서구 성서로 420 1층 106호</span>
                </div>
                <div class="option" @click="selectBakery('보밀당', '보밀당 (대구 달서구 상화로7길 38 1층)')">
                  <p>보밀당</p>
                  <span>대구 달서구 상화로7길 38 1층</span>
                </div>
              </div>
            </div>
          </div>
          <div class="time_selection">
            <p class="store">방문 시간 (기본 4시간 적용)</p>
            <swiper
              class="timeSwiper"
              :slides-per-view="6.7"
              :space-between="10"
              :breakpoints="{
                320: { slidesPerView: 2.3, spaceBetween: 8 },
                390: { slidesPerView: 3.3, spaceBetween: 8 },
                768: { slidesPerView: 5.3, spaceBetween: 10 },
                1020: { slidesPerView: 6.7, spaceBetween: 10 },
              }"
            >
              <swiper-slide class="opt_btn">11:00 ~ 11:30</swiper-slide>
              <swiper-slide class="opt_btn">11:30 ~ 12:00</swiper-slide>
              <swiper-slide class="opt_btn">12:00 ~ 12:30</swiper-slide>
              <swiper-slide class="opt_btn">12:30 ~ 13:00</swiper-slide>
              <swiper-slide class="opt_btn">13:00 ~ 13:30</swiper-slide>
              <swiper-slide class="opt_btn">13:30 ~ 14:00</swiper-slide>
              <swiper-slide class="opt_btn">14:00 ~ 14:30</swiper-slide>
              <swiper-slide class="opt_btn">14:30 ~ 15:00</swiper-slide>
              <swiper-slide class="opt_btn">15:00 ~ 15:30</swiper-slide>
              <swiper-slide class="opt_btn">15:30 ~ 16:00</swiper-slide>
              <swiper-slide class="opt_btn">16:00 ~ 16:30</swiper-slide>
              <swiper-slide class="opt_btn">16:30 ~ 17:00</swiper-slide>
              <swiper-slide class="opt_btn">17:00 ~ 17:30</swiper-slide>
              <swiper-slide class="opt_btn">17:30 ~ 18:00</swiper-slide>
              <swiper-slide class="opt_btn">18:00 ~ 18:30</swiper-slide>
              <swiper-slide class="opt_btn">18:30 ~ 19:00</swiper-slide>
              <swiper-slide class="opt_btn">19:00 ~ 19:30</swiper-slide>
              <swiper-slide class="opt_btn">19:30 ~ 20:00</swiper-slide>
            </swiper>
          </div>
        </div>
        <!-- 직접 보관 -->
        <div class="in_person">
          <h2>직접 맡길게요</h2>
          <p class="store">이용 가능 락커 (기본 4시간 적용)</p>
          <div class="locker_selection opt_btn">
            <p>락커 256<span>/300</span></p>
          </div>
          <p>락커 사이즈 : 35*35*55cm (종이백 2개 / 케이크(1단) 1박스 보관 가능)</p>
        </div>
        <!-- 선택한 옵션 띄우기 -->
        <div class="selected_option">
          <h3>[{{}}] {{}} / {{}}</h3>
          <p>방문 빵집 : {{}}</p>
          <p>방문 일시 : {{}} [{{}}]</p>
          <p>부가서비스 : {{}}</p>
          <div class="quantity">
            <button @click="changeQuantity(-1)">-</button>
            <input v-model="quantity" />
            <button @click="changeQuantity(1)">+</button>
          </div>
          <div class="price">
            <p>{{}}<span>/4시간</span></p>
          </div>
        </div>
        <button class="reserve_btn">예약하기</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import Location from "@/components/main/Location.vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import Calender from "@/components/Calender.vue";

// 베이커리 선택
const selectBakery = (value, text) => {
  // text 는 "매장명 (주소)" 형태이므로 분리
  const match = text.match(/^(.*) \((.*)\)$/);
  if (match) {
    selectedBakeryName.value = match[1];
    selectedBakeryAddress.value = match[2];
  } else {
    selectedBakeryName.value = text;
    selectedBakeryAddress.value = "";
  }
  isBakeryDropdownOpen.value = false;
};

const isBakeryDropdownOpen = ref(false);
const selectedBakeryName = ref("");
const selectedBakeryAddress = ref("");

// 드롭다운 토글
const toggleBakeryDropdown = () => {
  isBakeryDropdownOpen.value = !isBakeryDropdownOpen.value;
};
// 수량 상태
const quantity = ref(1);
// 수량 변경 함수
const changeQuantity = (amount) => {
  //   console.log(amount);
  if (quantity.value + amount > 0 && quantity.value + amount <= 5) {
    quantity.value += amount;
  }
};
// const totalPrice = computed(() => {
//   return product.value.price * quantity.value;
// });
</script>

<style lang="scss" scoped>
@use "../assets/variables" as *;
@use "../assets/btn" as *;

h2 {
  font-size: $sub-font;
  font-family: "SpokaHanSansNeo";
  color: $font-color;
}
p {
  font-family: "SpokaHanSansNeo";
  // color: $font-color;
}

.reservation {
  background-color: $bg-color;
  h1 {
    text-align: center;
    color: $point-color;
    font-family: "Cafe24Surround";
    font-size: 35px;
  }
}

.reserve_btn {
  @include btn-style;
}
// 옵션 선택 공통 스타일
.opt_btn {
  @include option-btn;
}
.option_list,
.temp_option,
.method_option,
.service_option {
  display: flex;
  gap: 10px;
}
// 보관 방법
.method_title {
  display: flex;
  align-items: end;
  gap: 10px;
  margin-bottom: 15px;
  p {
    font-size: $desc-text-font;
    color: $font-color;
  }
}
.option_list {
  gap: 50px;
  .temp {
    p {
      margin-bottom: 15px;
      font-size: $desc-text-font;
      color: $font-color;
    }
  }
  .method {
    p {
      margin-bottom: 15px;
      font-size: $desc-text-font;
      color: $font-color;
    }
  }
}

// 부가서비스
// 기사 보관
.bakery_selection {
  .store {
    color: $font-color;
  }
}
// 커스텀 드롭다운 스타일
.store {
  margin-bottom: 15px;
}
.custom-select {
  position: relative;
  width: 100%;

  .select-trigger {
    width: 100%;
    border: 2px solid $font-color;
    border-radius: 8px;
    padding: 15px 20px;
    background: #fff;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "SpokaHanSansNeo";
    font-size: $desc-text-font;
    transition: all 0.25s ease;
    position: relative;
    // color: #111;

    .label {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      p {
        font-size: $notice-text-font;
        line-height: 1.2;
        color: #111;
      }
      span {
        font-size: $mobile-notice-font;
        color: #949494;
        line-height: 1.2;
      }
      &.placeholder {
        color: #9fa3a7;
        font-size: $desc-text-font;
      }
    }

    // 화살표를 ::after로 만들기
    &::after {
      content: "";
      position: absolute;
      right: 20px;
      top: 50%;
      margin-top: -6px; // 화살표 높이의 절반만큼 위로 이동
      width: 12px;
      height: 12px;
      background: url(/images/pje/arrow.png) no-repeat center/12px;
      transition: transform 0.25s ease;
    }

    // 드롭다운이 열릴 때 화살표만 회전 (위치는 고정)
    &.open::after {
      transform: rotate(180deg);
    }
  }

  .select-options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    // border: 2px solid $font-color;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
    border-top: none;
    // border-radius: 0 0 8px 8px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 5;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.25s ease;

    &.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .option {
      padding: 15px 20px;
      cursor: pointer;
      font-family: "SpokaHanSansNeo";
      font-size: $notice-text-font;
      color: #111;
      transition: background-color 0.25s;

      &:hover {
        background-color: #f5f5f5;
      }

      &:last-child {
        border-radius: 0 0 6px 6px;
      }

      // 모든 옵션의 span에 적용
      span {
        font-size: $mobile-notice-font;
        color: #949494;
      }
    }
  }
}
.time_selection {
  .store {
    color: $font-color;
  }
}
.timeSwiper {
  text-align: center;
  .opt_btn {
    // white-space: nowrap;
  }
}
// 직접 보관
.in_person {
  .store {
    color: $font-color;
  }
  .locker_selection {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 153.85px;
    p {
      span {
        color: #949494;
      }
    }
  }
}
// 선택한 옵션
</style>
