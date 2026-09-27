import { createRouter, createWebHistory } from "vue-router";
import { auth, onAuthStateChanged } from "@/auth";
import SignUp from "@/views/SignUp.vue";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "/signup",
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next();
      } else {
        next("/login");
      }
    });
  } else {
    next();
  }
});

export default router;