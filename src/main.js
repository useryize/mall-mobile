import Vue from 'vue'
import App from './App'

import { Button } from 'vant';
Vue.use(Button);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
