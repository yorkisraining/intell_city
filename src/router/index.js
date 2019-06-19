import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/'
import serve from '@/views/serve/'
import serveHistory from '@/views/serve/building/serveHistory'  
import paySuccess from '@/components/paySuccess'
import payFail from '@/components/payFail'
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
        name: '企业服务',
        component: serve,
        props: {
            returnBtn: true,
            ifShowHeader: false
        }
    }, {
        path: '/serveHistory',
        name: '服务记录',
        component: serveHistory,
        props: {
            returnBtn: true,
            ifShowHeader: true
        }
    }, {
        path: '/paySuccess',
        name: '支付成功',
        component: paySuccess,
        props: {
            returnBtn: true,
            ifShowHeader: true
        }
    }, {
        path: '/payFail',
        name: '支付失败',
        component: payFail,
        props: {
            returnBtn: true,
            ifShowHeader: true
        }
    }, {
        path: '/confirmOrder',
        name: '订单信息确认',
        component: confirmOrder,
        props: {
            returnBtn: true,
            ifShowHeader: true
        }
    }, {
        path: '/serveClassify',
        name: '定制服务',
        component: serveClassify,
        props: {
            returnBtn: true,
            ifShowHeader: false
        }
    }, {
        path: '/serveDetail',
        name: 'serveDetail',
        component: serveDetail,
        props: {
            returnBtn: true,
            ifShowHeader: false
        }
    }, {
        path: '/foods',
        name: 'foods',
        component: foods,
        props: {
            returnBtn: true,
            ifShowHeader: false
        }
    }, {
        path: '/foodsHistory',
        name: '订单记录',
        component: foodsHistory,
        props: {
            returnBtn: true,
            ifShowHeader: true
        }
    }, {
        path: '/foodsOrderComfirm',
        name: '订单信息确认',
        component: foodsOrderComfirm,
        props: {
            returnBtn: true,
            ifShowHeader: true
        }
    }, ]
})

export default router