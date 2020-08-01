// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import VueRouter from 'vue-router';
import { Button, Icon, Popup, Col, Row, Field } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import Header from './components/pages/Header.vue';
import data from './store';
// import './assets/flexible';
Vue.config.productionTip = false;


Vue.use(Vuex);
Vue.use(VueRouter);

Vue.use(Button).use(Icon).use(Popup).use(Col).use(Field).use(Row);
Vue.use(Swipe);
Vue.use(SwipeItem);

let store = new Vuex.Store({
    modules: {
        data
    }
});



const router = new VueRouter({
    routes: [
        { path: '/', component: App },
        { path: '/Header', component: Header }
    ]
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    // template: '<App/>'
    render: h => h('router-view')
})
