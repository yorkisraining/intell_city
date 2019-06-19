// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './vuex'
import remAndPhoneConfig from './common/js/rem'
import { Tab, Tabs, Popup, DatetimePicker  } from 'vant';
import 'vant/lib/index.css';

Vue.use(Tab).use(Tabs).use(Popup).use(DatetimePicker);

Vue.use(ElementUI);
remAndPhoneConfig();

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
