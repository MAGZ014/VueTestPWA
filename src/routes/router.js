import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
// Definimos las rutas
const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

// Crear instancia del router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
