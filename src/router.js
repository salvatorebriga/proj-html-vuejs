import { createRouter, createWebHistory } from "vue-router";

import aboutUs from "./pages/aboutUs.vue";
import contact from "./pages/contact.vue";
import homePage from "./pages/homePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: homePage,
    },
    {
      path: "/about",
      name: "aboutUs",
      component: aboutUs,
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
    },
  ],
});

export { router };
