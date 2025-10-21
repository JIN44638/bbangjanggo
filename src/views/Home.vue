<template>
  <div class="home">
    <section id="visual" class="section"><Visual /></section>
    <section id="location" class="section">
      <h1>지점 안내</h1>
      <Location />
    </section>
    <section id="howto" class="section"><Howto /></section>
    <section id="price" class="section">
      <Price />
    </section>
    <section id="event" class="section"><Event /></section>
    <section id="review" class="section"><Review /></section>
    <section id="faq" class="section"><Faq /></section>
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

<style lang="scss" scoped></style>
