import Vue from 'vue'

import App from '@/App'
import store from '@/vuex'
import router from '@/router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

