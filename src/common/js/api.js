/*
 * api接口统一管理
 */

// 环境配置
const environment = {
    onLine: 'http://www.build.com:8080/', //生产环境请求地址
    dev: 'http://139.224.194.252:8504/', //开发环境请求地址
    text: 'http://139.224.194.252:8504/'
}

// 接口前缀
let host = location.host,
    baseHost = '/',
    baseURL = '';

if (host.indexOf('www.build.com') > -1) {
    // 线上环境
    baseHost = environment.onLine;
} else {
    // 1.1测试环境
    baseHost = environment.dev;
}

//baseURL = baseHost;
baseURL = environment.text;

// 接口集合
export const apiUrl = {
    baseURL: baseURL,
    //获取token
    token: baseURL + 'app/getToken', //ok
    testToken: baseURL + 'app/getTokenTest',
    //获取banner图 type 1:首页轮播；2 :三品王 ； 3:咖啡厅；4应用配置；5招商；6商务；7租赁
    banner: baseURL + 'app/banner/list', //ok
    //三品王信息
    spwMsg: baseURL + 'app/company/sanPinWang', //ok
    //三品王商品信息
    spwGoods: baseURL + 'app/good/sanPinWang', //ok
    //咖啡信息
    coffeeMsg: baseURL + 'app/company/coffee', //ok
    //咖啡商品信息
    coffeeGoods: baseURL + 'app/good/coffee', //ok
    //定制服务大类
    cusmadeSever: baseURL + 'app/good/cat/customService', //ok
    //获取首页所有数据
    homeData: baseURL + 'app/home/firstPage', //ok
    //商务信息首页
    inforBusiIndex: baseURL + 'app/infor/busi/home',
    //商务信息列表
    inforBusiList: baseURL + 'app/infor/busi/list',
    //招商信息首页
    inforPocilyIndex: baseURL + 'app/infor/pocily/home',
    //招商信息列表
    inforPocilyList: baseURL + 'app/infor/pocily/list',
    //租赁信息首页
    inforRentIndex: baseURL + 'app/infor/rent/home',
    //租赁信息列表
    inforRentList: baseURL + 'app/infor/rent/list',
    //下单
    pay: baseURL + 'app/goodOrder/order', //ok
    //微信支付
    wxPay: baseURL + 'app/pay/wx',
    //支付宝支付
    aliPay: baseURL + 'app/pay/alipay',
    //查询支付信息
    payResult: baseURL + 'app/pay/payResult',
    //查询退款信息
    refundResult: baseURL + 'app/pay/refundResult',
    //订单列表
    orderList: baseURL + 'app/goodOrder/my/list', //ok //未付款0;已付款1;已过期2;已撤销9;已接单3;已使用4;已退款5;已申请6
    //三品王订单列表
    spwOrderList: baseURL + 'app/goodOrder/my/list/sanPinWang',
    //咖啡订单列表
    coffeeOrderList: baseURL + 'app/goodOrder/my/list/coffee',
    //服务订单列表
    serveOrderList: baseURL + 'app/goodOrder/my/list/customService',
    //服务商品列表
    serveList: baseURL + 'app/good/list', //ok
    //未解决楼宇服务
    buildingNone: baseURL + 'app/building/list/nonProcess',
    //已解决楼宇服务
    buildingYes: baseURL + 'app/building/list/processed',
    //活动类型
    activityTye: baseURL + 'app/act/actType/list',
    //可分页活动列表
    activityList: baseURL + 'app/act/page',
    //已报名活动信息分页
    activitySignedList: baseURL + 'app/act/my/signed/list',
    //已审核活动信息分页
    activityAuditedList: baseURL + 'app/act/my/audited/list',
    //活动报名
    activitySignup: baseURL + 'app/act/sign',
    //退款
    refund: baseURL + 'app/pay/refund',
}