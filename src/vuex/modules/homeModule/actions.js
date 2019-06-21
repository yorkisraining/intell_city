import { ajaxGet, ajaxPost } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api.js'

//请求首页banner数据
export const getHomeData = ({
    commit
}, obj) => {
    ajaxGet(apiUrl.homeData, {}, res => {
        commit('changeHomeData', res);
    })
}