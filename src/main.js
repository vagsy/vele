// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResourse from 'vue-resource';
import 'common/stylus/index.styl';
import vConsole from 'common/js/vconsole';
Vue.config.productionTip = false;

Vue.use(VueResourse);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
