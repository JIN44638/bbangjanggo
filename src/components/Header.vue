<template>
  <div class="header">
    <RouterLink to="/" class="header-logo">
      <!-- <img src="/images/pje/favicon_square.png" alt="빵장고 로고" /> -->
      <img src="/images/pje/logo_white.png" alt="빵장고 로고" />
    </RouterLink>
    <nav class="header-menu">
      <RouterLink to="/reservation">예약하기</RouterLink>
      <a href="#">지점안내</a>
      <a href="#">이용방법</a>
      <a href="#">요금안내</a>
      <a href="#">FAQ|문의</a>
    </nav>
    <div class="header-loginMenu">
      <RouterLink to="/login">로그인</RouterLink>
      <RouterLink to="/signup">회원가입</RouterLink>
      <RouterLink to="/mypage">마이페이지</RouterLink>
    </div>
  </div>
</template>
<script setup>

</script>

<style lang="scss" scoped>
@use "../assets/variables" as *;

.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 0 50px;
  height: 100px;
  z-index: 999999;
}
.header a{
    color: #fff;
}
.header-logo img {
  width: 70px;
  display: block;
}
.header-menu {
  display: flex;
  gap: 50px;
  font-size: $notice-text-font;
}
.header-loginMenu {
  display: flex;
  gap: 25px;
    font-size: $notice-text-font;
}
</style>
