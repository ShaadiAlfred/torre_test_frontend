import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: ":username", component: () => import("pages/UserDetails.vue") }
    ]
  },

  {
    path: "/:catchAll(.*)*",
    name: "not_found",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
