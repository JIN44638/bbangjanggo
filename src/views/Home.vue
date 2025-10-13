<template>
  <div class="home">
    <div class="visual">
      <h1>비주얼 글씨확인</h1>
      <Visual />
    </div>
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
.visual {
  h1 {
    font-family: "Cafe24Surround";
    //  font-size: $font-main;
  }
}
</style>
