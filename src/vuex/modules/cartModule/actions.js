import { ajaxPost, ajaxGet } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api.js'

//请求三品王banner数据
export const getSPWBannerData = ({
    commit
}, obj) => {
    ajaxPost(apiUrl.banner, {
        type: 2
    }, res => {
        commit('changeSPWBanner', res.result.data);
    })
}

//请求三品王公司信息
export const getSPWCompanyData = ({
    commit
}, obj) => {
    ajaxPost(apiUrl.spwMsg, {}, res => {
        commit('changeSPWCompanyMsg', res.result.data);
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
        commit('changeSPWOriginList', res.result.data);
    })
}