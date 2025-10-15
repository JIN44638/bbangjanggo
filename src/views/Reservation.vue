<template>
  <div class="reservation">
    <div class="inner">
      <h1>예약하기</h1>
      <form>
        <!-- 지점 선택 -->
        <div class="store_select">
          <h2>지점 선택</h2>
          <!-- 지도 선택 -->
          <div class="map_selection">
            <img v-if="selectStore" :src="selectedImage" alt="대구 지도" />
            <div class="pins pins--kyeongdae">
              <h3>경대병원역점</h3>
              <p>대구 중구 달구벌대로 2190</p>
              <p>운영시간 : 11:00 ~ 20:00</p>
            </div>
            <div class="pins pins--banwoldang">
              <h3>반월당역점</h3>
              <p>대구 중구 달구벌대로 2100</p>
              <p>운영시간 : 11:00 ~ 20:00</p>
            </div>
            <div class="pins pins--dongdaegu">
              <h3>동대구역점</h3>
              <p>대구 동구 동대구로 550</p>
              <p>운영시간 : 11:00 ~ 20:00</p>
            </div>
            <div class="pins pins--seodaegu">
              <h3>서대구역점</h3>
              <p>대구 서구 와룡로 527</p>
              <p>운영시간 : 11:00 ~ 20:00</p>
            </div>
            <div class="pins pins--airport">
              <h3>대구국제공항점</h3>
              <p>대구 동구 공항로 221</p>
              <p>운영시간 : 11:00 ~ 20:00</p>
            </div>
          </div>
          <!-- 텍스트 선택 -->
          <div class="text_selection">
            <label for="store_selection" class="store">선택한 지점</label>
            <div class="custom-select" @click="toggleStoreDropdown">
              <div class="select-trigger" :class="{ open: isStoreDropdownOpen }">
                <template v-if="selectedStoreName">
                  <div class="label">
                    <p>{{ selectedStoreName }}</p>
                    <span>{{ selectedStoreAddress }}</span>
                  </div>
                </template>
                <template v-else>
                  <div class="label placeholder">지점을 선택해주세요</div>
                </template>
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
        <!-- 날짜 선택 -->
        <div class="calendar">
          <h2>날짜 선택</h2>
          <div class="calendar__month">
            <div class="cal-month__previous">〈</div>
            <div class="cal-month__current"></div>
            <div class="cal-month__next">〉</div>
          </div>
          <div class="calendar__head">
            <div class="cal-head__day"></div>
            <div class="cal-head__day"></div>
            <div class="cal-head__day"></div>
            <div class="cal-head__day"></div>
            <div class="cal-head__day"></div>
            <div class="cal-head__day"></div>
            <div class="cal-head__day"></div>
          </div>
          <div class="calendar__body">
            <div class="cal-body__week">
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
            </div>
            <div class="cal-body__week">
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
            </div>
            <div class="cal-body__week">
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
            </div>
            <div class="cal-body__week">
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
            </div>
            <div class="cal-body__week">
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
            </div>
            <div class="cal-body__week">
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
              <div class="cal-body__day"></div>
            </div>
          </div>
        </div>
        <!-- 보관 방법 -->
        <div class="storage_method">
          <div class="method_title">
            <h2>보관 방법</h2>
            <p>(중복 선택 가능)</p>
          </div>
          <!-- 온도 -->
          <div class="temp">
            <p>온도</p>
            <div class="temp_option">
              <p>냉보관</p>
              <p>상온보관</p>
            </div>
          </div>
          <!-- 접수 방법 -->
          <div class="method_option">
            <p>접수 방법</p>
            <p>직접<br />맡길게요</p>
            <p>기사님께<br />맡길게요</p>
          </div>
        </div>
        <!-- 부가 서비스 -->
        <div class="extra_service">
          <h2>부가서비스</h2>
          <div class="service_option">
            <p>선택 안함</p>
            <p>아이스팩<br />+1,000</p>
            <p>보냉백<br />+5,000</p>
          </div>
        </div>
        <!-- 기사 보관 -->
        <div class="delivery">
          <h2>기사님께 맡길게요</h2>
          <div class="bakery_selection">
            <label for="bakery">방문 베이커리</label>
            <div class="custom-select" @click="toggleBakeryDropdown">
              <div class="select-trigger" :class="{ open: isBakeryDropdownOpen }">
                <template v-if="selectedBakeryName">
                  <div class="label">
                    <p>{{ selectedBakeryName }}</p>
                    <span>{{ selectedBakeryAddress }}</span>
                  </div>
                </template>
                <template v-else>
                  <div class="label placeholder">방문할 빵집을 선택해 주세요</div>
                </template>
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
            <p>방문 시간 (기본 4시간 적용)</p>
            <div class="visit_time">
              <p>11:00 ~ 11:30</p>
            </div>
            <div class="visit_time">
              <p>11:30 ~ 12:00</p>
            </div>
            <div class="visit_time">
              <p>12:00 ~ 12:30</p>
            </div>
            <div class="visit_time">
              <p>12:30 ~ 13:00</p>
            </div>
            <div class="visit_time">
              <p>13:00 ~ 13:30</p>
            </div>
            <div class="visit_time">
              <p>13:30 ~ 14:00</p>
            </div>
            <div class="visit_time">
              <p>14:00 ~ 14:30</p>
            </div>
            <div class="visit_time">
              <p>14:30 ~ 15:00</p>
            </div>
            <div class="visit_time">
              <p>15:00 ~ 15:30</p>
            </div>
            <div class="visit_time">
              <p>15:30 ~ 16:00</p>
            </div>
            <div class="visit_time">
              <p>16:00 ~ 16:30</p>
            </div>
            <div class="visit_time">
              <p>16:30 ~ 17:00</p>
            </div>
            <div class="visit_time">
              <p>17:00 ~ 17:30</p>
            </div>
            <div class="visit_time">
              <p>17:30 ~ 18:00</p>
            </div>
            <div class="visit_time">
              <p>18:00 ~ 18:30</p>
            </div>
            <div class="visit_time">
              <p>18:30 ~ 19:00</p>
            </div>
            <div class="visit_time">
              <p>19:00 ~ 19:30</p>
            </div>
            <div class="visit_time">
              <p>19:30 ~ 20:00</p>
            </div>
          </div>
        </div>
        <!-- 직접 보관 -->
        <div class="in_person">
          <h2>직접 맡길게요</h2>
          <p>이용 가능 락커 (기본 4시간 적용)</p>
          <div class="locker_selection">
            <p>락커</p>
            <p>256<span>/300</span></p>
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
            <button>-</button>
            {{}}
            <button>+</button>
          </div>
          <div class="price">
            <p>{{}}<span>/4시간</span></p>
          </div>
        </div>
        <button>예약하기</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import moment from "moment";
import "moment/locale/ko";

// 커스텀 드롭다운 상태
const isStoreDropdownOpen = ref(false);
const selectedStoreName = ref("");
const selectedStoreAddress = ref("");
const selectedImage = ref("/images/pje/pin_all.png");

const isBakeryDropdownOpen = ref(false);
const selectedBakeryName = ref("");
const selectedBakeryAddress = ref("");

// 드롭다운 토글
const toggleStoreDropdown = () => {
  isStoreDropdownOpen.value = !isStoreDropdownOpen.value;
};

const toggleBakeryDropdown = () => {
  isBakeryDropdownOpen.value = !isBakeryDropdownOpen.value;
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

moment.locale("ko");
class Calendar {
  constructor() {
    this.monthDiv = document.querySelector(".cal-month__current");
    this.headDivs = document.querySelectorAll(".cal-head__day");
    this.bodyDivs = document.querySelectorAll(".cal-body__day");
    this.nextDiv = document.querySelector(".cal-month__next");
    this.prevDiv = document.querySelector(".cal-month__previous");
  }

  init() {
    moment.locale(window.navigator.userLanguage || window.navigator.language);

    this.month = moment();
    this.today = this.selected = this.month.clone();
    this.weekDays = ["일", "월", "화", "수", "목", "금", "토"];

    this.headDivs.forEach((day, index) => {
      day.innerText = this.weekDays[index];
    });

    this.nextDiv.addEventListener("click", (_) => {
      this.addMonth();
    });
    this.prevDiv.addEventListener("click", (_) => {
      this.removeMonth();
    });

    this.bodyDivs.forEach((day) => {
      day.addEventListener("click", (e) => {
        const clickedDay = parseInt(e.target.innerText, 10);
        if (Number.isNaN(clickedDay)) return;

        let baseMonth = this.month.clone();
        if (e.target.classList.contains("cal-day__month--next")) {
          baseMonth = baseMonth.add(1, "month");
        } else if (e.target.classList.contains("cal-day__month--previous")) {
          baseMonth = baseMonth.subtract(1, "month");
        }

        const clickedDate = baseMonth.clone().date(clickedDay);

        // 오늘 이전 날짜는 선택 불가
        if (clickedDate.isBefore(moment().startOf("day"))) {
          return;
        }

        this.selected = clickedDate;
        this.update();
      });
    });

    this.update();
  }

  update() {
    this.calendarDays = {
      first: this.month.clone().startOf("month").startOf("week").date(),
      last: this.month.clone().endOf("month").date(),
    };

    this.monthDays = {
      lastPrevious: this.month.clone().subtract(1, "months").endOf("month").date(),
      lastCurrent: this.month.clone().endOf("month").date(),
    };

    this.monthString = this.month.clone().format("YYYY.MM");

    this.draw();
  }

  addMonth() {
    this.month.add(1, "month");

    this.update();
  }

  removeMonth() {
    this.month.subtract(1, "month");

    this.update();
  }

  draw() {
    this.monthDiv.innerText = this.monthString;

    let index = 0;

    if (this.calendarDays.first > 1) {
      for (let day = this.calendarDays.first; day <= this.monthDays.lastPrevious; index++) {
        this.bodyDivs[index].innerText = day++;

        this.cleanCssClasses(false, index);

        this.bodyDivs[index].classList.add("cal-day__month--previous");
      }
    }

    let isNextMonth = false;
    for (let day = 1; index <= this.bodyDivs.length - 1; index++) {
      if (day > this.monthDays.lastCurrent) {
        day = 1;
        isNextMonth = true;
      }

      this.cleanCssClasses(true, index);

      if (!isNextMonth) {
        if (day === this.today.date() && this.today.isSame(this.month, "day")) {
          this.bodyDivs[index].classList.add("cal-day__day--today");
        }

        if (day === this.selected.date() && this.selected.isSame(this.month, "month")) {
          this.bodyDivs[index].classList.add("cal-day__day--selected");
        }

        this.bodyDivs[index].classList.add("cal-day__month--current");

        // 비활성화: 오늘 이전 날짜
        const currentDate = this.month.clone().date(day);
        if (currentDate.isBefore(moment().startOf("day"))) {
          this.bodyDivs[index].classList.add("cal-day__day--disabled");
        }
      } else {
        this.bodyDivs[index].classList.add("cal-day__month--next");

        // 비활성화: 과거 날짜
        const nextMonthDate = this.month.clone().add(1, "month").date(day);
        if (nextMonthDate.isBefore(moment().startOf("day"))) {
          this.bodyDivs[index].classList.add("cal-day__day--disabled");
        }
      }

      this.bodyDivs[index].innerText = day++;
    }
  }

  cleanCssClasses(selected, index) {
    this.bodyDivs[index].classList.contains("cal-day__month--next") &&
      this.bodyDivs[index].classList.remove("cal-day__month--next");
    this.bodyDivs[index].classList.contains("cal-day__month--previous") &&
      this.bodyDivs[index].classList.remove("cal-day__month--previous");
    this.bodyDivs[index].classList.contains("cal-day__month--current") &&
      this.bodyDivs[index].classList.remove("cal-day__month--current");
    this.bodyDivs[index].classList.contains("cal-day__day--today") &&
      this.bodyDivs[index].classList.remove("cal-day__day--today");
    this.bodyDivs[index].classList.contains("cal-day__day--disabled") &&
      this.bodyDivs[index].classList.remove("cal-day__day--disabled");
    if (selected) {
      this.bodyDivs[index].classList.contains("cal-day__day--selected") &&
        this.bodyDivs[index].classList.remove("cal-day__day--selected");
    }
  }
}
onMounted(() => {
  const cal = new Calendar();
  cal.init();
});
</script>

<style lang="scss" scoped>
@use "../assets/variables" as *;
h2 {
  font-size: $sub-font;
  font-family: "SpokaHanSansNeo";
  color: $font-color;
}
// 지점 선택
.store_select {
  .map_selection {
    position: relative;
    img {
      width: 80%;
      // height: 422.88px;
      display: block;
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
        top: 46%;
        left: 60%;
      }
      &--banwoldang {
        top: 46%;
        left: 62%;
      }
      &--dongdaegu {
        top: 24%;
        left: 78%;
      }
      &--seodaegu {
        top: 43%;
        left: 51%;
      }
      &--airport {
        top: 7%;
        left: 82%;
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

// 커스텀 드롭다운 스타일
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
.reservation {
  background-color: $bg-color;
  h1 {
    text-align: center;
    color: $point-color;
    font-family: "Cafe24Surround";
    font-size: 35px;
  }

  .calendar {
    // width: 350px;
    width: 100%;
    margin: 50px auto 0;
  }

  .calendar__month {
    font-size: 20px;
    font-weight: 800;
    padding: 10px 0;
    width: 100%;
    position: relative;
  }

  .cal-month__previous,
  .cal-month__next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    width: 30px;
    height: 30px;
    text-align: center;
    color: $sub-color;
  }
  .cal-month__previous {
    left: 20%;
  }
  .cal-month__next {
    right: 20%;
  }

  .cal-month__current {
    text-align: center;
    color: $font-color;
  }

  .cal-head__day,
  .cal-body__day {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    text-align: center;
    color: $font-color;
    font-family: "SpokaHanSansNeo";
    font-weight: 600;
  }

  .cal-body__week,
  .calendar__head {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    height: 50px;
    width: 100%;
    column-gap: 0;
  }

  .calendar__head {
    line-height: 50px;
    position: relative;
    width: 100%;
    max-width: 900px;

    &:after {
      content: " ";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      // background-color: #90caf9;
    }
  }
  .calendar__body {
    width: 100%;
  }

  .cal-body__day {
    color: transparent;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
  }

  .cal-day__month--current {
    color: $sub-color;
  }

  // 오늘 날짜 테두리 원 스타일
  .cal-day__day--today {
    border: 2px solid $font-color;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: $font-color;
  }

  .cal-day__day--selected {
    background-color: $font-color;
    box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.75);
    border-radius: 50%;
    color: #fff;
    width: 45px;
    height: 45px;
    margin: auto; // 셀 중앙 정렬
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // 과거 날짜 비활성화
  .cal-day__day--disabled {
    color: #c5c5c5;
    pointer-events: none;
  }
}
</style>
