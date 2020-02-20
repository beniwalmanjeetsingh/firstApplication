import Vue from "vue";
import App from "./App.vue";
import routes from "../src/routes";
import VueRouter from "vue-router";

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
