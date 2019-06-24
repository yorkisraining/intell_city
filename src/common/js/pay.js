import Vue from 'vue'
import Router from 'vue-router'
import { ajaxPost, ajaxGet } from './public'
import { apiUrl } from './api'
import { Toast } from 'vant'

const router = new Router({
    mode: 'history'
});

//支付宝
/* 
    1. 向后台发起支付请求
    2. 后台返回预支付凭证Charge对象
    3. 前端调用client_sdk
    4. 发起支付->客户端支付
    5. 返回支付结果
*/

export const aliPay = (param, id, module) => {
    YBB.hybrid.util.getIP().then(function(response) {
        const ip = response.clientIP;
        param['clientIp'] = ip;
        ajaxPost(apiUrl.aliPay, param, res => {
            if (res) {
                const params = res; // 由后台提供的字符串
                var type = 'Pay'; // type 'Pay'
                YBB.hybrid.util.pay(params, type).then(function(response) {
                    /* response = {
                        stateCode ? : number; // 1. 支付成功 2.支付失败 3.用户主动取消支付 4.版本不支持或 type 不支持
                        errCode ? : any; // 支付出错时，支付平台返回的errorCode，具体值参考：
                        // 支付宝：https://docs.open.alipay.com/204/105301/
                        // 微信：https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=8_5
                        resultDes ? : string; // 结果描述，具体描述为各个支付平台对应的错误描述
                    } */
                    switch (response.stateCode) {
                        case 1:
                            //支付成功，查询支付情况
                            ajaxPost(apiUrl.payResult, {
                                orderId: id
                            }, res => {
                                if (data) {
                                    //支付成功
                                    router.push(`/paySuccess?module=${module}`);
                                } else {
                                    //支付失败
                                    router.push(`/payFail?id=${id}&module=${module}`);
                                }
                            })

                            break;
                        case 2:
                            //支付失败，跳转失败界面
                            router.push(`/payFail?id=${id}&module=${module}`);
                            break;
                        case 3:
                            //取消支付，不动
                            break;
                        case 4:
                            //不支持，错误提示
                            Toast.fail('支付出错');
                            break;
                    }
                    if (errCode) {
                        console.log(`支付出错：：${errCode} -- ${resultDes}`);
                    }
                    console.log('支付宝支付response：：', response);
                });
            }
        }, res => {
            console.warn('err::', res);
            Toast.fail('服务器错误');
        })
    });
}


//微信
/* 
    1. 向后台发起支付请求
    2. 后台返回预支付凭证Charge对象
    3. 前端调用mweb_url
    4. 调起支付界面
    5. 微信调起原浏览器，回到页面
    6. 看回到状态向后台请求支付结果
    7. 后台返回支付结果
 */
export const wxPay = (params, id, modules) => {
    Promise.all([hybrid.util.fingerprint(), hybrid.util.getIP()]).then(result => {
        const fingerprint = result[0];
        const ip = result[1].clientIP;

        // 此处 http 可以换成其它框架或类库的 ajax 方法，如：$.ajax
        /* return this.http.post('此URL为商户生成预支付charge对象后端服务地址', {
            fingerprint,
            ip
        }); */
        params['fingerprint'] = fingerprint;
        params['clientIp'] = ip;
        //请求后端，发起支付
        return ajaxPost(apiUrl.wxPay, params, res => {
            console.log('wxpay:', res);
        })
    }).then((response) => {
        // 若 failureCode 为 null 即为预支付成功
        // 若 failureCode 不为 null 则预支付生成存在异常，具体异常信息请查看 response.failureMsg
        if (response.failureCode === null) {
            // 获得到订单号
            const orderNo = response.orderNo;
            // 经过encodeURIComponent转义
            const url = encodeURIComponent(`${apiUrl.baseURL}paySuccess?orderNo=${orderNo}&id=${id}&module=${modules}`);

            location.href = response.credential.wx.mweb_url + '&redirect_url=' + url;
        } else {
            //预支付失败

        }
    });
}