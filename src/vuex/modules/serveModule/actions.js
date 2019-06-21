import { ajaxPost, ajaxGet } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api.js'

//请求服务大类列表
export const getServeGoodsData = ({
    commit
}, obj) => {
    ajaxPost(apiUrl.cusmadeSever, {}, res => {
        commit('changeServeCardMsg', res);
    })
}