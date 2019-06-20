/*
 * api接口统一管理
 */

// 环境配置
const environment = {
    onLine: 'http://www.build.com:8080/', //生产环境请求地址
    dev: 'http://192.168.3.229:3000/', //开发环境请求地址
    koa: '/',
}

// 接口前缀
let host = location.host,
    baseHost = '',
    baseURL = '';

if (host.indexOf('www.build.com') > -1) {
    // 线上环境
    baseHost = environment.onLine;
} else {
    // 1.1测试环境
    baseHost = environment.dev;
}

baseURL = baseHost;
//baseURL = environment.koa;

// 接口集合
export const apiUrl = {
    //获取token
    token: baseURL + 'app/getToken',
    //微信支付
    wxPay: baseURL + '',
    //支付宝支付
    alipPay: baseURL + '',
    //获取banner图 1:首页轮播；2 :三品王 ； 3:咖啡厅；4应用配置
    banner: baseURL + 'app/banner/list',
    //三品王信息
    spwMsg: baseURL + 'app/company/sanPinWang',
    //三品王商品信息
    spwGoods: baseURL + 'app/good/sanPinWang'
}