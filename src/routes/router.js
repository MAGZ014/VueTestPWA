import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Regisro from "../components/Registro.vue";
import CuentaUser from "../components/CuentaUser.vue";
import Store from "../components/Store.vue";
// Definimos las rutas
const routes = [
  {
    path: "/",
    name: "Home",
  },
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
    path: "/Registro",
    name: "Registro",
    component: Regisro,
  },
  {
    path: "/Cuenta",
    name: "Cuenta",
    component: CuentaUser,
  },
  {
    path: "/Store",
    name: "Store",
    component: Store,
  },
];

// Crear instancia del router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
