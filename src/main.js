import Vue from "vue";
import App from "./App.vue";
import { store } from "./stores/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue } from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
