import { createRouter, createWebHistory } from "vue-router";

import aboutUs from "../pages/aboutUs.vue";
import contact from "../pages/contact.vue";
import homepage from "../pages/homepage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "../pages/aboutUs",
      name: "aboutUs",
      component: aboutUs,
    },
    {
      path: "../pages/contact",
      name: "contact",
      component: contact,
    },
    {
      path: "../pages/homepage",
      name: "homepage",
      component: homepage,
    },
  ],
});

export { router };
