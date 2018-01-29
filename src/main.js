// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store';

Vue.config.productionTip = false

Vue.use(store, router);

// store.commit('updateMessage', {isActive: false})
// const store = new Vuex.Store({ ...options })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
