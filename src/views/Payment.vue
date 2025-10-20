<template>
  <div class="payment">
    <div class="inner">
      <h1>결제하기</h1>
      <div class="reserve_confirm">
        <h2>예약확인</h2>
        <!-- 예약 페이지 정보 들고 오기 -->
        <div class="reserve_info">
          <div class="name">
            <p>이름</p>
            <p>김빵장</p>
          </div>
          <div class="number">
            <p>전화번호</p>
            <p>010-1234-1234</p>
          </div>
          <div class="reserved_options_list" v-if="reservedOptions.length > 0">
            <p>선택한 옵션</p>
            <div v-for="(option, index) in reservedOptions" :key="index" class="reserved_option">
              <div class="selected_options">
                <h3>[{{ option.location }}] {{ option.temp }} / {{ option.method }}</h3>
                <p v-if="option.bakery">방문 빵집 : {{ option.bakery }}</p>
                <p>방문 일시 : {{ option.date }} [{{ option.time }}]</p>
                <p>부가서비스 : {{ option.service }}</p>
              </div>
              <p class="quantity">수량 : {{ option.quantity }}</p>
            </div>
          </div>
          <div class="price">
            <p>총 결제 금액</p>
            <div class="total_price">
              <p class="pay_price">{{ totalPrice.toLocaleString() }}원<span>/4시간</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="reserve_notice">
        <h3>!확인해 주세요!</h3>
        <ul>
          <li>접수 및 수령시, QR코드 / 예약번호 중 하나만 보여주시면 됩니다.</li>
          <li>취소와 변경은 방문 1일 전까지 가능합니다.</li>
          <li>방문 당일에는 취소와 변경이 어렵습니다.</li>
          <li>예약 내역은 마이페이지에서 확인하실 수 있습니다.</li>
          <li>기본 이용 시간 초과 시, 추가금이 부과됩니다.</li>
        </ul>
      </div>
      <div class="payment_method">
        <h2>결제 방법</h2>
        <div class="pay_online">
          <img src="/images/pje/pay_card.png" alt="지금결제" />
          <p>지금 결제할게요</p>
          <p>예약할때 바로 결제</p>
        </div>
        <div class="pay_offline">
          <img src="/images/pje/pay_later.png" alt="현장결제" />
          <p>가서 결제할게요</p>
          <p>픽업할때 함께 결제</p>
        </div>
      </div>
      <RouterLink to="/complete" @click="goComplete" class="pay_btn">결제하기</RouterLink>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

// 로컬스토리지에서 예약 정보 불러오기
const reservedOptions = ref([]);
onMounted(() => {
  const saved = localStorage.getItem("reservedOptions");
  if (saved) {
    reservedOptions.value = JSON.parse(saved);
  }
});

// 가격 정보 (같은 기준)
const prices = {
  무인: {
    냉보관: 3000,
    상온보관: 2500,
  },
  기사: {
    냉보관: 4000,
    상온보관: 3000,
  },
  부가서비스: {
    "아이스팩 +1,000": 1000,
    "보냉백 +5,000": 5000,
    "선택 안함": 0,
  },
};

// 개별 가격 계산 함수
const calculatePrice = (option) => {
  let price = 0;
  if (option.method === "직접 맡길게요") {
    price = option.temp === "냉보관" ? prices.무인.냉보관 : prices.무인.상온보관;
  } else if (option.method === "기사님께 맡길게요") {
    price = option.temp === "냉보관" ? prices.기사.냉보관 : prices.기사.상온보관;
  }
  price += prices.부가서비스[option.service] || 0;
  return price * option.quantity;
};

// 총 금액 계산
const totalPrice = computed(() => reservedOptions.value.reduce((sum, item) => sum + calculatePrice(item), 0));

const router = useRouter();

// 결제 완료 시 홈으로 이동
// const goToHome = () => {
//   alert("✅ 결제가 완료되었습니다!");
//   localStorage.removeItem("reservedOptions");
//   router.push("/");
// };
// 결제 버튼 눌렀을시
const goComplete = () => {
  alert("결제 완료! \n접수/픽업 시, QR코드나 예약번호를 꼭 지참해 주세요!");
};
</script>

<style lang="scss" scoped>
@use "../assets/variables" as *;
@use "../assets/btn" as *;

h2 {
  font-size: $sub-font;
  font-family: "SpokaHanSansNeo";
  color: $font-color;
  margin-top: 30px;
  // margin-bottom: 15px;
}
p {
  font-family: "SpokaHanSansNeo";
  color: $font-color;
}

.payment {
  background-color: $bg-color;
  h1 {
    text-align: center;
    color: $point-color;
    font-family: "Cafe24Surround";
    font-size: 35px;
    padding: 30px 0;
  }
  .reserve_confirm {
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
  }
  .pay_btn {
    @include btn-style;
    display: block;
    text-align: center;
    width: 100%;
    margin-top: 30px;
  }
  // 선택한 옵션
  .reserved_option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    // background-color: #fff;
    // border-radius: 10px;
    // box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    // padding: 20px;
    margin-bottom: 15px;
    position: relative;

    .remove_btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background: transparent;
      border: none;
      font-size: $mobile-notice-font;
      color: #949494;
      cursor: pointer;
      padding: 5px;
      line-height: 1;

      &:hover {
        color: $font-color;
      }
    }

    .selected_options {
      h3 {
        font-size: $notice-text-font;
        margin-bottom: 10px;
        color: $font-color;
      }

      p {
        font-size: $desc-text-font;
        color: #666;
        margin-bottom: 5px;
      }
    }
  }
  .quantity {
  }
  // 총 결제 금액
  .price {
    display: flex;
    justify-content: space-between;
    align-items: end;
    border-top: 1px solid rgba(186, 142, 95, 0.3);
    padding-top: 20px;

    .pay_price {
      p {
        font-size: $sub-font;
        font-weight: bold;
        color: $font-color;

        span {
          font-size: $desc-text-font;
          font-weight: normal;
          color: #949494;
        }
      }
    }
  }
}
</style>
