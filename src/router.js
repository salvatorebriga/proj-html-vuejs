import { createRouter, createWebHistory } from "vue-router";

import aboutUs from "../pages/aboutUs.vue";
import contact from "../pages/contact.vue";
import homepage from "../pages/homepage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "aboutUs",
      component: aboutUs,
    },
    {
      path: "/",
      name: "contact",
      component: contact,
    },
    {
      path: "/",
      name: "homepage",
      component: homepage,
    },
  ],
});

export { router };
