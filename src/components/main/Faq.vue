<template>
  <div class="faq">
    <h3>FAQ/문의하기</h3>
    <div class="inner faqinner">
      <div class="question">
        <ul class="faq-list">
          <li v-for="(item, index) in faqs" :key="index" class="faq-item">
            <div class="faq-question" @click="toggle(index)">
              <span class="faq-q">Q. {{ item.question }}</span>
            </div>
            <transition
              name="faq"
              @before-enter="beforeEnter"
              @enter="enter"
              @after-enter="afterEnter"
              @before-leave="beforeLeave"
              @leave="leave"
              @after-leave="afterLeave"
            >
              <div v-show="openedIndex === index" class="faq-answer">
                <p>{{ item.answer }}</p>
                <p v-if="item.note" class="note">{{ item.note }}</p>
              </div>
            </transition>
          </li>
        </ul>
      </div>
      <div class="chat">
        <div class="img-cht">
          <a href="#"><img src="/images/pjs/chat_icon.png" alt="chaticon" /></a>
        </div>
        <div class="chat-text">
          <a href="#">
            <p>채팅상담 바로가기</p>
            <p>카카오톡 1:1 문의</p>
            <h6>빠른상담 09시-20시</h6>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqs = [
  {
    question: "하루종일 짐을 보관 할 수 있나요?",
    answer: `보관은 24시간 보관 및 연장 가능합니다.
짐 보관 후 24시간이 지났으면 보관이 불가합니다.
참고 부탁드립니다.`,
  },
  {
    question: "동대구역 근처에 보관소가 있나요?",
    answer: `네! 동대구역에서 도보 5분거리에 있습니다.`,
  },
  {
    question: "무인보관함 어떻게 이용하나요?",
    answer: `저희 웹페이지 사이트에 예약 완료 후 입장하여
해당 QR코드 또는 예약번호로 입장 후 보관소를 이용합니다.
무인보관소이기 때문에 QR코드로 출입하셔서 짐만 보관하시면 됩니다.`,
  },
  {
    question: "별도 포장 서비스가 있나요?",
    answer: `별도 포장 서비스는 제공하지 않습니다.
다만, 아이스박스에 보관을 원하실 경우에는
구매하시고, 짐을 해당 박스에 넣어 보관하실 수 있습니다.`,
  },
  {
    question: "어떻게 예약을 변경하고 취소하나요?",
    answer: `마이페이지 → 예약 내역에서 변경 및 취소가 가능합니다.
변경 가능한 시간은 '입장전'까지만 가능합니다.`,
  },
  {
    question: "짐 이외의 물품도 보관이 가능한가요?",
    answer: `가능합니다!
단, 음식물 보관 및 기타 안전에 저해 요소가 있는 제품군은 보관이 제한됩니다. 예) 위험성이 큰 폭죽이나 휘발유 등.`,
  },
  {
    question: "보관할 수 있는 짐 크기는 얼마나 되나요?",
    answer: `한 칸의 보관함 사이즈는 기준 한 짐까지 가능합니다.
과하게 큰 짐은 보관이 어려울 수 있으니
가급적 일반 캐리어 짐 기준으로 가져와 주세요.
※ 캐리어 기준 : 가로 35cm x 세로 45cm x 높이 55cm`,
  },
];

const openedIndex = ref(null);

function toggle(index) {
  openedIndex.value = openedIndex.value === index ? null : index;
}

// 트랜지션 함수들

function beforeEnter(el) {
  el.style.display = "block";
  el.style.height = "0";
  el.style.opacity = "0";
  el.style.paddingTop = "0";
  el.style.paddingBottom = "0";
  el.style.marginTop = "0";
  el.style.marginBottom = "0";
  el.style.transition = "none";
  el.style.willChange = "height, opacity";
}

function enter(el) {
  void el.offsetHeight;

  el.style.transition = "height 0.28s ease, opacity 0.2s ease";
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";
  el.style.paddingTop = "";
  el.style.paddingBottom = "";
  el.style.marginTop = "";
  el.style.marginBottom = "";
}

function afterEnter(el) {
  el.style.height = "auto";
  el.style.transition = "";
  el.style.willChange = "";
}

function beforeLeave(el) {
  el.style.height = el.scrollHeight + "px";
  el.style.opacity = "1";
}

function leave(el) {
  void el.offsetHeight;

  el.style.transition = "height 0.28s ease, opacity 0.2s ease";
  el.style.height = "0";
  el.style.opacity = "0";
  el.style.paddingTop = "0";
  el.style.paddingBottom = "0";
  el.style.marginTop = "0";
  el.style.marginBottom = "0";
}

function afterLeave(el) {
  el.style.display = "none";
  el.style.height = "";
  el.style.opacity = "";
  el.style.transition = "";
  el.style.willChange = "";
  el.style.paddingTop = "";
  el.style.paddingBottom = "";
  el.style.marginTop = "";
  el.style.marginBottom = "";
}
</script>

<style lang="scss" scoped>
@use "/src/assets/variables" as *;

.faq {
  padding: 100px 20px;
  background-color: $bg-color;

  h3 {
    position: sticky;
    top: 60px;
    z-index: 5;
    background: linear-gradient(180deg, $bg-color 70%, transparent 100%);
    text-align: center;
    font-size: clamp(20px, 4.5vw, $title-font);
    font-family: "Cafe24Surround";
    color: $point-color;
    padding: 10px 0 40px;
    margin: 0;
  }

  .faqinner {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 5%;
    max-width: 1200px;
    margin: auto;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
      gap: 50px;
    }
    .question {
      width: 50%;
      max-width: none;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        width: 70%;
        align-items: center;
        align-self: center;
      }
      .faq-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .faq-item {
        width: 100%;
        min-width: 250px;
        margin-bottom: 12px;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 2px rgba(80, 49, 29, 0.1);
        background-color: #fff;

        .faq-question {
          background-color: $main-color;
          padding: 14px 16px;
          font-weight: 500;
          font-family: "SpokaHanSansNeo";
          font-size: $desc-text-font;
          color: $font-color;
          cursor: pointer;
        }

        .faq-answer {
          background-color: #fff;
          padding: 16px;
          font-family: "SpokaHanSansNeo";
          font-size: $desc-text-font;
          color: #333;
          overflow: hidden;

          .note {
            margin-top: 8px;
            font-size: 13px;
            color: #666;
          }
        }
      }
    }

    .chat {
      width: 50%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: center;

      .img-cht {
        max-width: 210px;

        img {
          width: 100%;
        }
      }

      .chat-text {
        margin-top: 16px;

        a {
          display: flex;
          flex-direction: column;
          gap: 5px;
          text-decoration: none;

          p,
          h6 {
            color: $font-color;
            font-weight: 500;
            font-family: "SpokaHanSansNeo";
            font-size: $desc-text-font;
          }
        }
      }
    }
  }
}

/* 반응형 */
// @media screen and (max-width: 768px) {
//   .faqinner {
//     flex-direction: column;
//     align-items: stretch;

//     .question,
//     .chat {
//       width: 100%;
//       max-width: 100%;
//     }
//     .question {
//       text-align: left;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       align-self: center;
//     }
//     .chat {
//       margin-top: 30px;
//       align-self: stretch;
//     }
//   }
// }
</style>
