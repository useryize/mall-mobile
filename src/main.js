// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Button, Icon, Popup } from 'vant';
Vue.use(Button);
Vue.use(Icon);
Vue.use(Popup);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
