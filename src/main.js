import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
