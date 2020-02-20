import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/home_btn.vue";
import About from "./components/about_btn.vue";
import Register from "./components/register_btn.vue";
import Login from "./components/login_btn.vue";
Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/register", component: Register },
  { path: "/login", component: Login }
];

export default routes;
