<template>
  <div class="home">
    <div class="visual">
      <h1>빵은 저희에게 맡기고 <br />편히 여행하세요</h1>
      <div class="reserBtn">
        <button>직접<br />맡길게요</button>
        <button>기사님께<br />맡길게요</button>
      </div>
    </div>
    <Visual />
    <Location />
    <Howto />
    <Price />
    <Event />
    <Review />
    <Faq />
  </div>
</template>
<script setup>
import Location from "@/components/main/Location.vue";
import Visual from "@/components/main/Visual.vue";
import Howto from "@/components/main/Howto.vue";
import Price from "@/components/main/Price.vue";
import Event from "@/components/main/Event.vue";
import Review from "@/components/main/Review.vue";
import Faq from "@/components/main/Faq.vue";
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  top: -100px;
}

.visual {
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/public/images/kms/main-img.png") center/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  h1 {
    font-family: "Cafe24Surround";
    color: white;
    font-size: 3rem;
    z-index: 1;
  }
  .reserBtn {
    button {
      width: 600px;
    }
  }
}
</style>
