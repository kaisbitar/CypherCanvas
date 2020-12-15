import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueNeo4j from "vue-neo4j";
import NeoVis from "neovis.js";
import ForceGraph3D from "3d-force-graph";

Vue.config.productionTip = false;
Vue.use(VueNeo4j);
Vue.use(ForceGraph3D);

new Vue({
  router,
  store,
  // Cloudinary,
  NeoVis,
  vuetify,
  render: h => h(App)
}).$mount("#app");
