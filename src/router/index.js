import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Complete from '@/views/Complete.vue';
import Login from '@/views/Login.vue';
import Mypage from '@/views/Mypage.vue';
import Payment from '@/views/Payment.vue';
import Reservation from '@/views/Reservation.vue';
import Signup from '@/views/Signup.vue';
import SearchId from '@/views/loginHelp/SearchId.vue';
import SearchPassword from '@/views/loginHelp/SearchPassword.vue';
const routes = [
  { path: "/", component: Home  },
  { path: "/complete", component: Complete },
  { path: "/login", component: Login },
  { path: "/mypage", component: Mypage },
  { path: "/payment", component: Payment },
  { path: "/reservation", component: Reservation },
  { path: "/signup", component: Signup },
  { path: "/searchid", component: SearchId },
  { path: "/searchPass", component: SearchPassword },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
