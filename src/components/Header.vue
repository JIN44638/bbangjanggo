<template>
<div class="header">
    <RouterLink to="/">logo</RouterLink>
    <nav>
     <RouterLink to="/reservation">예약하기</RouterLink>
     <a href="#">지점안내</a>
     <a href="#">이용방법</a>
     <a href="#">요금안내</a>
     <a href="#">FAQ|문의</a>
    </nav>
    <div class="login">
         <RouterLink to="/login">로그인</RouterLink>
         <RouterLink to="/signup">회원가입</RouterLink>
         <RouterLink to="/mypage">마이페이지</RouterLink>
    </div>
</div>
</template>
<script setup></script>

<style lang="scss" scoped></style>
