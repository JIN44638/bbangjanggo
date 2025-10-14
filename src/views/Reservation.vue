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
            <img src="/images/pje/daegu_map.png" alt="대구 지도" />
            <div class="pins pins--kyungdae">
              <img src="/images/pje/position.png" alt="핀" />
              <div class="store_desc">
                <h3>경대병원역점</h3>
                <p>대구 중구 달구벌대로 2190</p>
                <p>운영시간 : 11:00 ~ 20:00</p>
              </div>
            </div>
            <div class="pins pins--banwoldang">
              <img src="/images/pje/position.png" alt="핀" />
              <div class="store_desc">
                <h3>반월당역점</h3>
                <p>대구 중구 달구벌대로 2100</p>
                <p>운영시간 : 11:00 ~ 20:00</p>
              </div>
            </div>
            <div class="pins pins--dongdaegu">
              <img src="/images/pje/position.png" alt="핀" />
              <div class="store_desc">
                <h3>동대구역점</h3>
                <p>대구 동구 동대구로 550</p>
                <p>운영시간 : 11:00 ~ 20:00</p>
              </div>
            </div>
            <div class="pins pins--seodaegu">
              <img src="/images/pje/position.png" alt="핀" />
              <div class="store_desc">
                <h3>서대구역점</h3>
                <p>대구 서구 와룡로 527</p>
                <p>운영시간 : 11:00 ~ 20:00</p>
              </div>
            </div>
            <div class="pins pins--airport">
              <img src="/images/pje/position.png" alt="핀" />
              <div class="store_desc">
                <h3>대구국제공항점</h3>
                <p>대구 동구 공항로 221</p>
                <p>운영시간 : 11:00 ~ 20:00</p>
              </div>
            </div>
          </div>
          <!-- 텍스트 선택 -->
          <div class="text_selection">
            <label for="store_selection" class="store">선택한 지점</label>
            <select id="store_selection">
              <option value="반월당역점">반월당역점 (대구 중구 달구벌대로 2100)</option>
              <option value="경대병원역점">경대병원역점 (대구 중구 달구벌대로 2190)</option>
              <option value="동대구역점">동대구역점 (대구 동구 동대구로 550)</option>
              <option value="서대구역점">서대구역점 (대구 서구 와룡로 527)</option>
              <option value="대구국제공항역점">대구국제공항점 (대구 동구 공항로 221)</option>
            </select>
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
            <p>방문 베이커리</p>
            <select id="bakery">
              <option value="소베">
                <h3>소베</h3>
                <p>대구 중구 중앙대로79길 6 1층</p>
              </option>
              <option value="따끈따끈베이커리">
                <h3>따끈따끈베이커리</h3>
                <p>대구 중구 중앙대로 395 1F 따끈따끈베이커리</p>
              </option>
              <option value="공주당">
                <h3>공주당</h3>
                <p>대구 중구 동성로 6-2</p>
              </option>
              <option value="네쥬">
                <h3>네쥬</h3>
                <p>대구 중구 남성로 55 neige 네쥬</p>
              </option>
              <option value="윈드윈">
                <h3>윈드윈</h3>
                <p>대구 중구 달구벌대로405길 42 1층</p>
              </option>
              <option value="따따따">
                <h3>따따따</h3>
                <p>대구 중구 동덕로36길 127 1층</p>
              </option>
              <option value="고려베이커리">
                <h3>고려베이커리</h3>
                <p>대구 남구 자유6길 45-2</p>
              </option>
              <option value="르배">
                <h3>르배</h3>
                <p>대구 수성구 화랑로8길 11-11 1층</p>
              </option>
              <option value="화이트리에 성서점">
                <h3>화이트리에 성서점</h3>
                <p>대구 달서구 성서로 420 1층 106호</p>
              </option>
              <option value="보밀당">
                <h3>보밀당</h3>
                <p>대구 달서구 상화로7길 38 1층</p>
              </option>
            </select>
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
import { onMounted } from "vue";
import moment from "moment";
import "moment/locale/ko";

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
        const date = +e.target.innerHTML < 10 ? `0${e.target.innerHTML}` : e.target.innerHTML;

        if (e.target.classList.contains("cal-day__month--next")) {
          this.selected = moment(`${this.month.add(1, "month").format("YYYY-MM")}-${date}`);
        } else if (e.target.classList.contains("cal-day__month--previous")) {
          this.selected = moment(`${this.month.subtract(1, "month").format("YYYY-MM")}-${date}`);
        } else {
          this.selected = moment(`${this.month.format("YYYY-MM")}-${date}`);
        }

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
      } else {
        this.bodyDivs[index].classList.add("cal-day__month--next");
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
.reservation {
  background-color: $bg-color;
  h1 {
    text-align: center;
    color: $point-color;
    font-family: "Cafe24Surround";
    font-size: 35px;
  }
  // 지점 선택
  .store_select {
    .map_selection {
      position: relative;
      img {
        width: 80%;
      }
      .pins {
        position: absolute;
        cursor: pointer;
        img {
          width: 27%;
        }
        .store_desc {
          position: absolute;
          background: white;
          border-radius: 8px;
          padding: 15px 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          white-space: nowrap;
          z-index: 10;
          opacity: 0;
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
        }
        &:hover .store_desc {
          opacity: 1;
        }
        // 핀 위치 조정 (이미지 기준)
        .pins--kyungdae {
          top: 45%;
          left: 39%;
          .store_desc {
            left: 40px;
            top: -10px;
          }
        }
        .pins--banwoldang {
          top: 45%;
          left: 54%;
          transform: translateX(-50%);
          .store_desc {
            left: 40px;
            top: -10px;
          }
        }
        .pins--dongdaegu {
          top: 45%;
          left: 65%;
          .store_desc {
            right: 40px;
            top: -10px;
          }
        }

        .pins--seodaegu {
          top: 58%;
          left: 58%;
          .store_desc {
            right: 40px;
            top: -10px;
          }
        }

        .pins--airport {
          top: 75%;
          left: 48%;
          transform: translateX(-50%);
          .store_desc {
            left: 40px;
            top: -10px;
          }
        }
      }
    }
    .text_selection {
      width: 100%;
      label {
        font-size: $desc-text-font;
        color: $font-color;
      }
      select,
      ::picker(select) {
        appearance: base-select;
        font: -webkit-small-control;
      }

      /* hide checkmark */
      option::checkmark {
        display: none;
      }

      /* change from button to select itelf to style the button */
      select {
        width: 100%;
        border: 2px solid $font-color;
        border-radius: 8px;
        padding: 15px 20px;
        transition-duration: 0.25s;
        font-family: "SpokaHanSansNeo";
        font-size: $desc-text-font;
        align-items: center;
        background: #fff url(/images/pje/arrow.png) no-repeat 97% center/12px;
        &:focus {
          outline: none;
        }
      }

      option {
        font-size: $desc-text-font;
        display: grid;
        grid-template-columns: 2rem auto;
        gap: 0.5rem;
        padding: 15px 20px;
        transition-duration: 0.25s;
        /*  reset UA styles, can remove these two lines with patch landing soon  */
        place-items: initial;
        align-items: center;
      }

      select::picker-icon {
        display: none;
      }

      ::picker(select) {
        border: none;
        padding: 0.5rem 0;
        overflow-x: hidden;
        border-radius: 8px;
        width: 94.8%;
        max-width: 900px;
        transition: width 0.5s;
        /*  resets from UA  */
        min-inline-size: 0;
        box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
      }

      select:has(:popover-open) button {
        background: lightgray;
      }
    }
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

  .cal-month__next {
    right: 0;
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

  .cal-day__day--today {
    font-weight: 800;
    color: $point-color;
  }

  .cal-day__day--selected {
    background-color: $font-color;
    box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.75);
    border-radius: 50%;
    color: #fff;
    width: 40px;
    height: 40px;
    margin: 5px auto 0; // 셀 중앙 정렬
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
