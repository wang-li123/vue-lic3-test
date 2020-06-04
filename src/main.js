import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import '@/assets/scss/index.scss'
import '@/utils/vant'
import IconFont from './components/globalRef/InconFont';
Vue.component('IconFont', IconFont);

import FastClick from 'fastclick'
FastClick.attach(document.body);
//修改原型 解决fastClick 在ios 11.3 中input框点击键盘弹出迟，或者弹不出
FastClick.prototype.focus = function(targetElement) {
  targetElement.focus();
};



import vCosole from 'vconsole';
window.vConsole=new vCosole();

var VueTouch = require('vue-touch');
Vue.use(VueTouch, {name: 'v-touch'});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
