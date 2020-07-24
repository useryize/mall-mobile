// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import VueRouter from 'vue-router';
import { Button, Icon, Popup } from 'vant';
import Header from './components/pages/Header.vue';

Vue.use(Button).use(Icon).use(Popup).use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
      { path: '/', component: App},
      { path: '/Header', component: Header}
    ]
  })


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    // template: '<App/>'
    render: h => h('router-view')
})
