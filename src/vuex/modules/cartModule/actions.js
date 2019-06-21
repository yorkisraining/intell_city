import { ajaxPost, ajaxGet } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api.js'

//请求三品王banner数据
export const getSPWBannerData = ({
    commit
}, obj) => {
    ajaxPost(apiUrl.banner, {
        type: 2
    }, res => {
        commit('changeSPWBanner', res);
    })
}

//请求三品王公司信息
export const getSPWCompanyData = ({
    commit
}, obj) => {
    ajaxPost(apiUrl.spwMsg, {}, res => {
        commit('changeSPWCompanyMsg', res);
    })
}

//请求三品王商品列表
export const getSPWGoodsData = ({
    commit
}, obj) => {
    ajaxPost(apiUrl.spwGoods, {
        page: obj.page,
        limit: obj.limit
    }, res => {
        commit('changeSPWOriginList', res);
    })
}

//=====================================================

//请求三品王banner数据
export const getCoffeeBannerData = ({
    commit
}, obj) => {
    ajaxPost(apiUrl.banner, {
        type: 3
    }, res => {
        commit('changeCoffeeBanner', res);
    })
}

//请求三品王公司信息
export const getCoffeeCompanyData = ({
    commit
}, obj) => {
    ajaxPost(apiUrl.coffeeMsg, {}, res => {
        commit('changeCoffeeCompanyMsg', res);
    })
}

//请求三品王商品列表
export const getCoffeeGoodsData = ({
    commit
}, obj) => {
    ajaxPost(apiUrl.coffeeGoods, {
        page: obj.page,
        limit: obj.limit
    }, res => {
        commit('changeCoffeeOriginList', res);
    })
}