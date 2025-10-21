<template>
  <div class="home">
    <Visual />
    <Location :showPins="true" class="location" />
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
@use "/src/assets/variables" as *;

.location {
  h1 {
    text-align: center;
    font-size: $title-font;
    font-family: "Cafe24Surround";
    color: $point-color;
    padding-bottom: 50px;
  }
  padding: 100px 0;
}
</style>
