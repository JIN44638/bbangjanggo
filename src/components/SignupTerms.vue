<template>
  <!-- 회원가입 이용 약관 체크란 -->
  <div class="signupTerms-wrap">
    <!-- ✅약관 전체 동의 박스 -->
    <div class="checkAll-box">
      <div class="check-box">
        <div class="checkAll-label">
          <input type="checkbox" id="checkAll" v-model="allChecked" @click="toggleAll" />
          <label for="checkAll"><p>전체 동의하기</p> </label>
        </div>
        <span
          >실명 인증된 아이디로 가입, 위치기반서비스 이용약관(선택), 이벤트 및 혜택 정보 수신(선택)에 동의합니다. </span
        ><span class="terms-toggleBtn" @click="toggleTerms">{{ isExpended ? "접기" : "전체보기>" }}</span>
      </div>
    </div>

    <!-- ✅개별 이용약관 모음 -->
    <div class="terms-box" :class="{ expended: isExpended }">
      <div class="check-box" v-for="term in terms" :key="term.id">
        <input type="checkbox" :id="`term${terms.id}`" v-model="checkedTerms" :value="term.id" />
        <label :for="`term${term.id}`">{{ term.label }}</label>
        <div class="check-box-txt">
          <span v-html="term.content"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const checkedTerms = ref([]);
const allChecked = ref(false);

watch(checkedTerms, (newVal) => {
  allChecked.value = newVal.length === terms.length;
});

const toggleAll = () => {
  if (!allChecked.value) {
    checkedTerms.value = terms.map((t) => t.id);
    allChecked.value = true;
  } else {
    checkedTerms.value = [];
    allChecked.value = false;
  }
};

// 약관 배열 더미
const terms = [
  {
    id: 1,
    label: "빵장고 서비스 이용약관 (필수)",
    required: true,
    content: `
<strong>제1조 (목적)</strong><br />
          이 약관은 빵장고(이하 “회사”)가 제공하는 빵 보관 대행 및 관련 서비스(이하 “서비스”)의 이용과 관련하여 회사와
          이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. <br /><strong>제2조 (용어의 정의)</strong
          ><br />
          “서비스”라 함은 이용자가 일정한 장소에 빵이나 제과류 등 개인 소지품을 임시로 보관할 수 있도록 회사가 제공하는
          모든 서비스를 말합니다. “이용자”라 함은 본 약관에 따라 회사와 이용계약을 체결하고 서비스를 이용하는 자를
          말합니다. “보관소”라 함은 회사가 직접 운영하거나 제휴를 통해 제공하는 물품 보관 장소를 의미합니다. “예약”이라
          함은 이용자가 온라인 또는 오프라인을 통해 특정 장소와 시간을 지정하여 보관을 신청하는 행위를 말합니다.
          <br /><strong>제3조 (약관의 효력 및 변경)</strong><br />
          본 약관은 서비스를 이용하는 모든 이용자에게 적용됩니다. 회사는 필요한 경우 약관을 변경할 수 있으며, 변경 시
          사전 고지합니다. 이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다.
          <br /><strong>제4조 (이용계약의 성립)</strong><br />
          이용계약은 이용자가 본 약관에 동의하고, 회사가 정한 절차에 따라 이용 신청을 완료함으로써 성립합니다. 회사는
          서비스 품질 유지를 위해 이용 신청을 거절하거나 보류할 수 있습니다. <br /><strong>제5조 (서비스의 내용)</strong
          ><br />
          회사는 다음 각 호의 서비스를 제공합니다. ① 이용자의 빵 및 제과류 보관 서비스 ② 보관 예약, 결제 및 이용내역
          확인 서비스 ③ 보관소 위치 안내 및 이용 정보 제공 서비스 ④ 그 외 회사가 정하는 부가 서비스 회사는 서비스 개선을
          위해 제공 내용을 변경할 수 있습니다. <br /><strong>제6조 (이용자의 의무)</strong><br />
          이용자는 다음 각 호의 행위를 하여서는 안 됩니다. ① 부패·변질 가능성이 높은 음식물 또는 위험물 보관 ② 타인의
          물건을 허가 없이 보관하거나 부정 이용 ③ 고의로 보관소 설비를 훼손하거나 오염시키는 행위 이용자는 물품 인도 시
          물품의 내용물을 회사에 고지해야 하며, 분실·손상 시 사실과 다르게 신고해서는 안 됩니다.
          <br /><strong>제7조 (보관물품의책임 및 손해배상)</strong><br />
          회사는 정상적인 보관 상태에서 발생한 손해에 대해 책임을 부담합니다. 단, 이용자의 고의·과실 또는 약관 위반으로
          인한 손해는 책임을 지지 않습니다. 회사의 배상책임은 보관요금의 10배를 초과하지 않습니다.
          <br /><strong>제8조 (이용요금 및 결제)</strong><br />
          서비스 이용요금은 회사가 정한 기준에 따릅니다. 결제는 회사가 지정한 결제수단을 통해 이루어집니다. 결제 후
          이용자가 임의로 보관을 취소할 경우, 환불 기준은 회사의 환불정책에 따릅니다. <br /><strong
            >제9조 (보관기간 및 인수)</strong
          ><br />
          이용자는 예약 시 지정한 기간 내에 보관물을 인수해야 합니다. 인수 기간이 경과된 물품은 일정 기간 보관 후 폐기
          또는 처리될 수 있습니다. 폐기 처리 시 발생하는 비용은 이용자에게 청구될 수 있습니다. <br /><strong
            >제10조 (서비스의 변경 및 중단)</strong
          ><br />
          회사는 운영상·기술상의 필요에 따라 서비스의 전부 또는 일부를 변경하거나 중단할 수 있습니다. 이 경우 사전에
          이용자에게 공지합니다. <br /><strong>제11조 (면책조항)</strong><br />
          천재지변, 시스템 장애, 통신 두절 등 불가항력적 사유로 인한 서비스 중단에 대해서는 회사가 책임을 지지 않습니다.
          이용자의 귀책사유로 인한 손해에 대해서는 회사가 책임을 지지 않습니다.
          <br /><strong>제12조 (분쟁해결 및 관할법원)</strong><br />
          서비스 이용과 관련하여 분쟁이 발생할 경우, 회사와 이용자는 상호 협의하여 해결합니다. 협의로 해결되지 않을
          경우, 관할법원은 회사 본사 소재지 관할 법원으로 합니다.

    `,
  },
  {
    id: 2,
    label: "개인정보 수집 및 이용 (필수)",
    required: true,
    content: `
<strong>[빵장고 개인정보 수집 및 이용 동의 안내]</strong>
            <p></p>
            <br />개인정보보호법에 따라 빵장고 서비스에 회원가입을 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의
            수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을
            안내드리오니, 자세히 읽은 후 동의하여 주시기 바랍니다.<br />
            <p></p>
            <strong>1. 수집하는 개인정보</strong> <br />
            <p></p>
            이용자는 회원가입을 하지 않아도 일부 서비스를 이용할 수 있습니다. 다만, 개인화 혹은 회원제 서비스를 이용하기
            위해 회원가입을 할 경우, 빵장고는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다. 회원가입 시점에
            빵장고가 이용자로부터 수집하는 개인정보는 아래와 같습니다. 회원 가입 시 필수항목으로 아이디, 비밀번호, 이름,
            생년월일, 성별, 휴대전화번호를, 선택항목으로 본인확인 이메일주소를 수집합니다. 만 14세 미만 아동의 경우,
            법정대리인의 동의를 받고 있으며, 휴대전화번호 또는 아이핀 인증을 통해 법정대리인의 동의를 확인하고 있습니다.
            이 과정에서 법정대리인의 정보(이름, 중복가입확인정보(DI), 휴대전화번호(아이핀 인증인 경우 아이핀번호))를
            추가로 수집합니다. 서비스 이용 과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다. 회원정보 또는 개별
            서비스에서 프로필 정보(별명, 프로필 사진)를 설정할 수 있습니다. 개별 서비스 이용, 이벤트 응모 및 경품 신청
            과정에서 추가 개인정보 수집이 발생할 수 있으며, 이 경우 수집 시점에 이용자에게 ‘수집항목, 이용목적,
            보관기간’을 안내하고 동의를 받습니다. 또한 서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 기기정보,
            위치정보가 생성되어 수집될 수 있습니다.
            <br />
            <p></p>
            <strong>2. 수집한 개인정보의 이용 목적</strong>
            <p></p>
            <br />
            빵장고는 회원관리, 서비스 개발 및 제공, 안전한 이용환경 구축 등 아래의 목적으로 개인정보를 이용합니다.
            회원가입 의사 확인, 연령 및 본인 확인, 이용자 식별, 회원 탈퇴 의사 확인 등 회원관리를 위하여 개인정보를
            이용합니다. 서비스 제공 및 품질 향상, 맞춤형 콘텐츠 제공, 신규 서비스 개발, 이용자 간 커뮤니케이션 및 관계
            형성 등을 위하여 개인정보를 이용합니다. 법령 및 이용약관 위반에 대한 제재, 부정이용 방지, 계정 도용 및
            부정거래 방지, 민원처리, 분쟁 해결 등 이용자 보호를 위하여 개인정보를 이용합니다. 유료 서비스 제공 시
            본인인증, 구매 및 요금결제, 상품 및 서비스 배송을 위하여 개인정보를 이용합니다. 또한 이벤트, 프로모션,
            광고성 정보 제공 등 마케팅 목적으로 개인정보를 이용할 수 있습니다. 서비스 이용기록 및 접속 빈도 분석, 통계
            작성 등을 통해 맞춤 서비스 및 광고를 제공하는 데 개인정보를 이용합니다. <br />
            <p></p>
            <strong>3. 개인정보의 보유 및 이용기간</strong>
            <p></p>
            <br />
            빵장고는 원칙적으로 이용자의 개인정보를 회원 탈퇴 시 지체 없이 파기합니다. 단, 이용자에게 개인정보
            보관기간에 대해 별도의 동의를 얻은 경우나, 법령에서 일정 기간 보관 의무를 부과하는 경우에는 해당 기간 동안
            개인정보를 안전하게 보관합니다. 법령에 따른 보관 기간은 다음과 같습니다. 전자상거래 등에서의 소비자 보호에
            관한 법률에 따라 계약 또는 청약철회 등에 관한 기록은 5년, 대금결제 및 재화 등의 공급에 관한 기록은 5년,
            소비자의 불만 또는 분쟁처리에 관한 기록은 3년간 보관합니다. 통신비밀보호법에 따라 로그인 기록은 3개월간
            보관합니다.
            <p></p>
            <br /><strong>4. 개인정보 수집 및 이용 동의 거부권 안내</strong> <br />
            <p></p>
            이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만, 회원가입 시 수집하는 최소한의
            필수항목에 대한 동의를 거부하실 경우, 회원가입이 제한될 수 있습니다.
          </span>

    `,
  },
  {
    id: 3,
    label: "위치기반서비스 이용약관 (선택)",
    required: false,
    content: `
<span class="privacy-text">
            <strong class="strongTxt">[빵장고 위치기반서비스 이용약관 동의 안내]</strong>
            본 약관은 이용자가 빵장고(이하 “회사”)가 제공하는 위치기반서비스를 이용함에 있어 회사와 이용자 간의 권리,
            의무 및 책임사항을 규정함을 목적으로 합니다.
            <br /><br />
            <strong>1. 위치정보의 수집 및 이용 목적</strong><br />
            회사는 이용자의 위치정보를 다음과 같은 목적으로 수집·이용합니다.<br />
            - 사용자 주변 보관소 및 서비스 제공 위치 안내<br />
            - 예약 또는 픽업 서비스 이용 시 위치 기반 최적 경로 제공<br />
            - 이용자 맞춤형 콘텐츠 및 혜택 정보 제공
            <br /><br />
            <strong>2. 수집하는 위치정보의 종류 및 방법</strong><br />
            회사는 스마트폰, 태블릿 등 단말기의 GPS, Wi-Fi, 기지국 정보를 활용하여 이용자의 현재 또는 최근 위치정보를
            수집할 수 있습니다. 단, 위치정보는 서비스 이용 시점에 한해 수집되며, 별도의 저장 없이 목적 달성 후 즉시
            파기됩니다.
            <br /><br />
            <strong>3. 위치정보의 제3자 제공 및 보유기간</strong><br />
            회사는 원칙적으로 이용자의 동의 없이 위치정보를 제3자에게 제공하지 않습니다. 단, 아래의 경우에 한하여
            예외적으로 제공할 수 있습니다.<br />
            - 법령에 근거가 있는 경우<br />
            - 수사기관이 법적 절차에 따라 요청하는 경우<br />
            회사는 위치정보를 서비스 제공에 필요한 기간 동안만 보유하며, 목적 달성 후 지체 없이 파기합니다.
            <br /><br />
            <strong>4. 이용자의 권리 및 행사 방법</strong><br />
            이용자는 언제든지 위치정보 수집·이용·제공에 대한 동의를 철회할 수 있습니다. 또한 본인의 위치정보 열람, 정정,
            삭제를 요청할 수 있으며, 회사는 이에 지체 없이 조치합니다.
            <br /><br />
            <strong>5. 서비스 이용 제한 및 중지</strong><br />
            이용자가 동의를 철회하거나 단말기의 위치정보 기능을 비활성화할 경우, 일부 위치기반서비스의 이용이 제한될 수
            있습니다.
            <br /><br />
            <strong>6. 책임의 한계</strong><br />
            회사는 천재지변, 기술적 오류 등 불가항력적인 사유로 위치정보 제공이 지연되거나 중단된 경우 이에 대한 책임을
            지지 않습니다.
            <br /><br />
            <strong>7. 위치정보관리 책임자</strong><br />
            회사는 이용자의 위치정보를 적법하고 안전하게 관리하기 위해 위치정보관리책임자를 지정하고 있습니다.<br />
            성명: 김빵장<br />
            직책: 개인정보보호책임자<br />
            이메일: privacy@bbangjanggo.com
            <br /><br />
            <strong>8. 약관 변경에 대한 고지</strong><br />
            본 약관이 변경되는 경우, 회사는 개정 내용을 사전에 공지하며 이용자가 쉽게 확인할 수 있도록 합니다.
          </span>

    `,
  },
  {
    id: 4,
    label: "이벤트 및 혜택 정보 수신 (선택)",
    required: false,
    content: `
      <strong>[이벤트 및 혜택 정보 수신 동의 안내]</strong><br />
      회사는 서비스 이용자에게 이벤트, 프로모션, 할인 혜택 등의 정보를 제공할 수 있습니다.<br /><br />
      <strong>1. 수신 방법</strong><br />
      이메일, 문자(SMS), 푸시 알림 등으로 발송될 수 있습니다.<br /><br />
      <strong>2. 수신 거부</strong><br />
      이용자는 언제든지 수신 거부를 설정할 수 있습니다.
    `,
  },
];

// 전체 동의 약관에서 개별약관을 펼치기(토글기능)
const isExpended = ref(false);
const toggleTerms = () => {
  isExpended.value = !isExpended.value;
};
</script>

<style scoped lang="scss">
@use "/src/assets/variables" as *;
@use "/src/assets/btn" as *;

// 약관 전체 레이아웃
.signupTerms-wrap {
  display: flex;
  flex-direction: column;
  gap: 25px;

  //   ✅약관 전체 동의 박스
  .checkAll-box {
    box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
    background-color: #fff;
    border-radius: 15px;
    padding: 30px;
    .check-box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;

      .checkAll-label {
        display: flex;
        label {
          margin-left: 15px;
          p {
            font-family: "Cafe24Surround";
            color: $font-color;
            font-size: $f-a-q-text-font;
          }
        }
      }
    }
  }

  //   ✅개별 이용약관 모음

  .terms-box {
    display: flex;
    flex-direction: column;
    gap: 25px;
    position: relative;
    height: 0;
    overflow: hidden;
    transition: all 0.3s;
    &.expended {
      height: auto;
    }
    .check-box {
      input {
        margin-bottom: 25px;
        background-color: #fff;
      }
      label {
        font-family: "Cafe24Surround";
        color: $font-color;
        font-size: $f-a-q-text-font;

        margin-left: 15px;
        margin-bottom: 25px;
      }
      .check-box-txt {
        padding: 30px;
        background-color: #fff;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        span {
          .strongTxt {
            margin-bottom: 20px;
          }
        }

        max-height: 200px;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: $sub-color transparent;
      }
    }
  }
}

.terms-toggleBtn {
  cursor: pointer;
  color: $sub-color;
  font-weight: bold;
  // text-decoration: underline;
}
</style>
