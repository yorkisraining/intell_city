import { ajaxGet } from '@/common/js/public.js'

//请求首页banner数据
export const getHomeData = ({
    commit
}, obj) => {
    ajaxGet("/app/home/firstPage", res => {
        commit('changeHomeData', res.result.data);
    })
}