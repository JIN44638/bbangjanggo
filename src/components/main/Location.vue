<template>
  <div class="store_select">
    <!-- 지도 선택 -->
    <div class="map_selection">
      <img v-if="selectStore" :src="selectedImage" alt="대구 지도" />
      <div class="pins pins--kyeongdae" v-show="selectedStoreName === '경대병원역점'">
        <h3>경대병원역점</h3>
        <p>대구 중구 달구벌대로 2190</p>
        <p>운영시간 : 11:00 ~ 20:00</p>
      </div>
      <div class="pins pins--banwoldang" v-show="selectedStoreName === '반월당역점'">
        <h3>반월당역점</h3>
        <p>대구 중구 달구벌대로 2100</p>
        <p>운영시간 : 11:00 ~ 20:00</p>
      </div>
      <div class="pins pins--dongdaegu" v-show="selectedStoreName === '동대구역점'">
        <h3>동대구역점</h3>
        <p>대구 동구 동대구로 550</p>
        <p>운영시간 : 11:00 ~ 20:00</p>
      </div>
      <div class="pins pins--seodaegu" v-show="selectedStoreName === '서대구역점'">
        <h3>서대구역점</h3>
        <p>대구 서구 와룡로 527</p>
        <p>운영시간 : 11:00 ~ 20:00</p>
      </div>
      <div class="pins pins--airport" v-show="selectedStoreName === '대구국제공항점'">
        <h3>대구국제공항점</h3>
        <p>대구 동구 공항로 221</p>
        <p>운영시간 : 11:00 ~ 20:00</p>
      </div>
    </div>
    <!-- 텍스트 선택 -->
    <div class="text_selection">
      <p class="store">선택한 지점</p>
      <div class="custom-select" @click="toggleStoreDropdown">
        <div class="select-trigger" :class="{ open: isStoreDropdownOpen }">
          <div v-if="selectedStoreName">
            <div class="label">
              <p>{{ selectedStoreName }}</p>
              <span>{{ selectedStoreAddress }}</span>
            </div>
          </div>
          <div v-else>
            <div class="label placeholder">지점을 선택해주세요</div>
          </div>
        </div>
        <div class="select-options" :class="{ open: isStoreDropdownOpen }">
          <div class="option" @click="selectStore('반월당역점', '반월당역점 (대구 중구 달구벌대로 2100)')">
            <p>반월당역점</p>
            <span>대구 중구 달구벌대로 2100</span>
          </div>
          <div class="option" @click="selectStore('경대병원역점', '경대병원역점 (대구 중구 달구벌대로 2190)')">
            <p>경대병원역점</p>
            <span>대구 중구 달구벌대로 2190</span>
          </div>
          <div class="option" @click="selectStore('동대구역점', '동대구역점 (대구 동구 동대구로 550)')">
            <p>동대구역점</p>
            <span>대구 동구 동대구로 550</span>
          </div>
          <div class="option" @click="selectStore('서대구역점', '서대구역점 (대구 서구 와룡로 527)')">
            <p>서대구역점</p>
            <span>대구 서구 와룡로 527</span>
          </div>
          <div class="option" @click="selectStore('대구국제공항역점', '대구국제공항점 (대구 동구 공항로 221)')">
            <p>대구국제공항점</p>
            <span>대구 동구 공항로 221</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

// 커스텀 드롭다운 상태
const isStoreDropdownOpen = ref(false);
const selectedStoreName = ref("");
const selectedStoreAddress = ref("");
const selectedImage = ref("/images/pje/pin_all.png");

// 드롭다운 토글
const toggleStoreDropdown = () => {
  isStoreDropdownOpen.value = !isStoreDropdownOpen.value;
};

// 지점별 이미지 매핑
const storeImages = {
  반월당역점: "/images/pje/pin_banwoldang.png",
  경대병원역점: "/images/pje/pin_kyeongdae.png",
  동대구역점: "/images/pje/pin_dongdaegu.png",
  서대구역점: "/images/pje/pin_seodaegu.png",
  // 대구국제공항점: "/images/pje/pin_airport.png",
};
// 지점 선택
const selectStore = (value, text) => {
  // text 는 "매장명 (주소)" 형태이므로 분리
  const match = text.match(/^(.*) \((.*)\)$/);
  if (match) {
    selectedStoreName.value = match[1];
    selectedStoreAddress.value = match[2];
  } else {
    selectedStoreName.value = text;
    selectedStoreAddress.value = "";
  }
  // 지점 선택시 이미지 변경
  selectedImage.value = storeImages[value] || "/images/pje/pin_airport.png";
  isStoreDropdownOpen.value = false;
};
</script>

<style lang="scss" scoped>
@use "/src/assets/variables" as *;
// 지점 선택
.store_select {
  .map_selection {
    position: relative;
    img {
      width: 80%;
      display: block;
      object-fit: cover;
      margin: auto;
    }
    .pins {
      position: absolute;
      background: white;
      border-radius: 8px;
      padding: 15px 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      white-space: nowrap;
      z-index: 10;
      // opacity: 0;
      transition: opacity 0.3s ease;
      h3 {
        font-size: $desc-text-font;
        font-family: "Cafe24Surround";
        font-weight: bold;
        margin-bottom: 5px;
        color: #000;
      }
      p {
        font-size: $mobile-text-font;
        color: #666;
      }
      &--kyeongdae {
        top: 47.5%;
        left: 59.5%;
      }
      &--banwoldang {
        top: 47.5%;
        left: 61.5%;
      }
      &--dongdaegu {
        top: 25.5%;
        left: 77.5%;
      }
      &--seodaegu {
        top: 43%;
        left: 51%;
      }
      &--airport {
        top: 10.5%;
        left: 81%;
      }
      // &:hover {
      //   opacity: 1;
      // }
    }
  }
  .text_selection {
    width: 100%;
    label {
      font-size: $desc-text-font;
      color: $font-color;
    }
  }
}
</style>
