import Vue from 'vue'
import Vuex from 'vuex'
import homeModule from './modules/homeModule' //首页数据

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        homeModule
    },
    strict: debug,
})