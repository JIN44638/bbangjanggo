<template>
  <div class="wrap">
    <Header />
    <main>
      <RouterView></RouterView>
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

</script>

<style lang="scss" scoped></style>
