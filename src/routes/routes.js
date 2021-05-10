import Vue from "vue";
import Router from "vue-router";

import MainView from "../views/MainView";

const path = "http://localhost:8000";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/portfolio/",
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView
    }
  ]
});
