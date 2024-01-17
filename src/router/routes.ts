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
  }
]

export default routes
