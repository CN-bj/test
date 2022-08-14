import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import store from '@/store/index';
import router from '@/router/index';

Vue.use(ElementUI);
/* Vue.component(Button.name, Button); */

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
})
