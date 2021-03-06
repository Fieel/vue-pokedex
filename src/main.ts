import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Importing Bulma CSS framework and making it available everywhere
import './../node_modules/bulma/css/bulma.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
