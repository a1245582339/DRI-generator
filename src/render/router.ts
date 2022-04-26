import Dashboard from "./page/Dashboard.vue";
import TicketDetail from "./page/TicketDetail.vue";
import * as VueRouter from "vue-router";

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: "/", name: 'dashboard', component: Dashboard },
    { path: "/ticket", name: 'ticket', component: TicketDetail },
  ],
});
