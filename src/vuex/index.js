import Vue from 'vue'
import Vuex from 'vuex'
import homeModule from './modules/homeModule'
import cartModule from './modules/cartModule'
import serveModule from './modules/serveModule'
import inforModule from './modules/inforModule'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        homeModule,
        cartModule,
        serveModule,
        inforModule,
    },
    strict: debug,
})