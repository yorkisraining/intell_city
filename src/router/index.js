import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/'
import serve from '@/views/serve/'
import serveHistory from '@/views/serve/building/serveHistory'
import paySuccess from '@/views/serve/building/serveHistory/paySuccess'
import payFail from '@/views/serve/building/serveHistory/payFail'
import confirmOrder from '@/views/serve/building/serveHistory/confirmOrder'
import serveClassify from '@/views/serve/building/serveClassify'
import serveDetail from '@/views/serve/building/serveClassify/serveDetail'
import foods from '@/views/foods'
import foodsHistory from '@/views/foods/foodsHistory'
import foodsOrderComfirm from '@/views/foods/foodsOrderComfirm'

Vue.use(Router)

const router = new Router({
    mode: 'hash', //要配置成history https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90
    linkActiveClass: 'is-active',
    routes: [{
        path: '/',
        name: '中国-东盟新型智慧城市协同创新中心',
        component: home,
        props: {
            returnBtn: false,
            ifShowHeader: true
        }
    }, {
        path: '/serve',
        name: 'serve',
        component: serve,
        props: {
            returnBtn: false,
            ifShowHeader: true
        }
    }, {
        path: '/serveHistory',
        name: 'serveHistory',
        component: serveHistory,
        props: {
            returnBtn: true,
            ifShowHeader: true
        }
    }, {
        path: '/paySuccess',
        name: 'paySuccess',
        component: paySuccess,
        props: {
            returnBtn: false,
            ifShowHeader: false
        }
    }, {
        path: '/payFail',
        name: 'payFail',
        component: payFail,
        props: {
            returnBtn: false,
            ifShowHeader: true
        }
    }, {
        path: '/confirmOrder',
        name: 'confirmOrder',
        component: confirmOrder,
        props: {
            returnBtn: false,
            ifShowHeader: true
        }
    }, {
        path: '/serveClassify',
        name: 'serveClassify',
        component: serveClassify,
        props: {
            returnBtn: false,
            ifShowHeader: true
        }
    }, {
        path: '/serveDetail',
        name: 'serveDetail',
        component: serveDetail,
        props: {
            returnBtn: false,
            ifShowHeader: true
        }
    }, {
        path: '/foods',
        name: 'foods',
        component: foods,
        props: {
            returnBtn: false,
            ifShowHeader: true
        }
    }, {
        path: '/foodsHistory',
        name: 'foodsHistory',
        component: foodsHistory,
        props: {
            returnBtn: false,
            ifShowHeader: true
        }
    }, {
        path: '/foodsOrderComfirm',
        name: 'foodsOrderComfirm',
        component: foodsOrderComfirm,
        props: {
            returnBtn: false,
            ifShowHeader: true
        }
    }, ]
})

export default router