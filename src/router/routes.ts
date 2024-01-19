import type { RouteRecordRaw } from 'vue-router'
const routes: readonly RouteRecordRaw[] = [
  {
    path: "/",
    name: "index",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/Home.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/pages/NotFound.vue")
  },
]

export default routes
