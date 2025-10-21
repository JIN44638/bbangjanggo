<template>
  <header :class="[{ scrolled: isScrolled }, { dark: isDark }, { 'not-home': !isHome }]">
    <div class="inner">
      <RouterLink to="/" class="header-logo" @click.prevent="handleLogoClick">
        <img src="/images/pje/logo_white.png" alt="빵장고 로고" class="logo" />
      </RouterLink>
      <div class="user-buttons">
        <router-link to="/login" class="loginIcon"><img src="/images/kms/login-icon.png" alt="" /></router-link>
        <router-link to="/mypage" class="mypageIcon"><img src="/images/kms/mypage-icon.png" alt="" /></router-link>
        <button
          class="hamburger"
          :class="{ active: isMenuOpen }"
          @click="toggleMenu"
          aria-label="모바일 메뉴 토글"
          aria-expanded="isMenuOpen.toString()"
        >
          <div class="line" v-for="n in 3" :key="n"></div>
        </button>
      </div>
      <nav class="header-menu">
        <RouterLink to="/reservation">예약하기</RouterLink>
        <a href="#location" @click.prevent="goToSection('location')">지점안내</a>
        <a href="#howto" @click.prevent="goToSection('howto')">이용방법</a>
        <a href="#price" @click.prevent="goToSection('price')">요금안내</a>
        <a href="#faq" @click.prevent="goToSection('faq')">FAQ|문의</a>
      </nav>
      <div class="header-loginMenu">
        <RouterLink to="/login">로그인</RouterLink>
        <RouterLink to="/signup">회원가입</RouterLink>
        <RouterLink to="/mypage">마이페이지</RouterLink>
      </div>
    </div>
    <div class="backdrop" :class="{ open: isMenuOpen }" @click="closeMenu"></div>
    <div class="mobile-menu" :class="{ open: isMenuOpen }">
      <nav class="mobile-nav">
        <RouterLink to="/reservation" @click="closeMenu">예약하기</RouterLink>
        <a href="#location" @click.prevent="goToSection('location')">지점안내</a>
        <a href="#howto" @click.prevent="goToSection('howto')">이용방법</a>
        <a href="#price" @click.prevent="goToSection('price')">요금안내</a>
        <a href="#faq" @click.prevent="goToSection('faq')">FAQ|문의</a>
      </nav>
      <div class="mobile-login">
        <RouterLink to="/login" @click="closeMenu">로그인</RouterLink>
        <RouterLink to="/signup" @click="closeMenu">회원가입</RouterLink>
        <RouterLink to="/mypage" @click="closeMenu">마이페이지</RouterLink>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

// 스크롤 상태 저장
const isScrolled = ref(false);

// 현재 라우트 감지
const router = useRouter()
const route = useRoute();
const isHome = computed(() => route.path === "/");

// 모바일 메뉴 상태
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
};
const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = "";
};



// 스크롤 이벤트 핸들러
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; // 50px 이상 스크롤하면 true로 변경
};

// 부모 (App.vue)에서 받은 값
const props = defineProps({
  isDark: Boolean,
});

// 페이지가 마운트될 때 스크롤 이벤트 리스너 추가
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// 페이지가 언마운트될 때 스크롤 이벤트 리스너 제거
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// 스크롤이동 적용하기
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  const header = document.querySelector('header'); // header 요소를 직접 참조
  
  if (element) {
    const headerOffset = header.offsetHeight;
    // const headerOffset = 90;  // 헤더 높이에 맞게 조정 (현재 header padding 감안해서 70~90px 정도)

    // 요소의 위치 계산
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    // 최종 스크롤 위치
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// 로고를 눌렀을 때 처음 화면으로 돌아가기
const handleLogoClick = () => {
  if (window.location.pathname === "/") {
    // 이미 메인페이지인 경우
    if (window.scrollY > 0) {
      // 스크롤이 0이 아닐 때만 부드럽게 맨 위로 이동
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  } else {
    // 다른 페이지에서는 홈으로 이동
    window.location.href = "/";
  }
};

// path이동 및 스크롤 이동
// 다른페이지에서 클릭 시 메인페이지 이동 후 해당 섹션으로 이동.

const goToSection = async (sectionId) => {
  closeMenu();

  if (route.path !== "/") {
    await router.push({ path: "/", hash: `#${sectionId}` });
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300);
  } else {
    scrollToSection(sectionId);
  }
};

</script>

<style lang="scss" scoped>
@use "../assets/variables" as *;

header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90;
  // max-width: 1000px;
  // padding: 15px 20px;
  padding: 15px 0;
  background-color: transparent;
  transition: all 0.3s;
  z-index: 999999;

  // 홈페이지 외 헤더 색상 지정하기
  &.not-home {
    position: relative;
    background-color: $point-color;

    a {
      color: #fff;
    }

    .header-logo img {
      filter: brightness(0) invert(1);
    }
  }

  // 스크롤하면
  &.scrolled {
    background-color: $point-color;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    a {
      color: #fff;
    }

    .header-logo img {
      filter: brightness(0) invert(1);
    }
  }

  // isDark dark가 더해지면
  &.dark {
    background-color: $font-color;

    a {
      color: #fff;
    }

    .header-logo img {
      filter: brightness(0) invert(1);
    }
  }

  .inner {
    width: 85%;
    max-width: 1000px;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;

    .header-logo img {
      width: 70px;
      display: block;
      cursor: pointer;
    }

    .header-menu {
      display: flex;
      gap: 35px;
      font-size: $notice-text-font;
    }

    .header-loginMenu {
      display: flex;
      gap: 25px;
      font-size: $notice-text-font;
    }
    a {
      color: #fff;
    }
  }

  // 모바일 레이아웃
  .user-buttons {
    display: none; // 기본적으로 숨김
    gap: 8px;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .mypageIcon,
    .loginIcon {
      width: 25px;
      margin: 10px 8px;
      img {
        width: 100%;
      }
    }
  }
  .hamburger {
    display: none;
    background: transparent;
    border: 0;
    padding: 8px;
    cursor: pointer;
    .line {
      width: 25px;
      height: 2px;
      background-color: $bg-color;
      margin: 8px 0;
      border-radius: 2px;
      transition: all 0.3s;
    }
    &.active .line:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }
    &.active .line:nth-child(2) {
      opacity: 0;
    }
    &.active .line:nth-child(3) {
      transform: translateY(-11px) rotate(-45deg);
    }
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    background: #fff;
    color: $font-color;
    font-size: $notice-text-font;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 9;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: space-between;

    .mobile-nav {
      display: flex;
      flex-direction: column;
      gap: 25px;
      a {
        color: $font-color;
        text-decoration: none;
        padding: 14px 8px;
      }
    }
    .mobile-login {
      display: flex;
      gap: 16px;
      a {
        color: $font-color;
        text-decoration: none;
        padding: 14px 8px;
      }
    }
    &.open {
      transform: translateX(0);
    }
  }

  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 8;
    &.open {
      opacity: 1;
      pointer-events: auto;
    }
  }

  @media (max-width: 1000px) {
    .user-buttons {
      display: flex;
    }

    .hamburger {
      display: block;
    }
    :deep(.header-menu),
    :deep(.header-loginMenu) {
      display: none !important;
    }
  }
}
</style>
