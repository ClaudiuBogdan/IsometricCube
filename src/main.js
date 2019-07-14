import Vue from "vue";
// import App from "./components/Transition.vue";
import App from "./components/Colors.vue";

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");
