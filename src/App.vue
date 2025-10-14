<template>
  <div class="wrap">
    <Header />
    <main>
      <RouterView></RouterView>
      <Quick />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Quick from "./components/Quick.vue";
</script>

<style lang="scss" scoped></style>
