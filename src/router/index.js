import Vue from "vue";
import VueRouter from "vue-router";
import AllApplications from "../views/AllApplications.vue";

Vue.use(VueRouter);

const routes = [
{
    path: "/",
    component: () =>
        import(/* webpackChunkName: "" */ "../views/AllApplications.vue") // Lazy loading
    },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue") // Lazy loading
  },
  {
    path: "/edit",
    name: "EditRecord",
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/EditRecord.vue") // Lazy loading
  },
  {
    path: "/add",
    name: "AddRecord",
    component: () =>
      import(/* webpackChunkName: "add" */ "../views/AddRecord.vue") // Lazy loading
  }
];

const router = new VueRouter({
  routes
});

export default router;
