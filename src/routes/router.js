import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Regisro from "../components/Registro.vue";
// Definimos las rutas
const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Regisro",
    name: "Regisro",
    component: Regisro,
  },
];

// Crear instancia del router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
