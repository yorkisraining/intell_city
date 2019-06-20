const state = {
    foodsList: {
        chooseFoodsList: [], //已选择的三品王
        originList: [{
            id: 54124321,
            price: 20,
            name: '麻辣牛腩粉',
            brief: '月销量八千，销量第一',
            count: 0,
            src: require('@/assets/th.jpg')
        }, {
            id: 415241,
            price: 14,
            name: '酸辣牛肉粉',
            brief: '月销量300份',
            count: 0,
            src: require('@/assets/th.jpg')
        }, {
            id: 5325632,
            price: 14.9,
            name: '高汤牛肉粉',
            brief: '日销50份，店长推荐',
            count: 0,
            src: require('@/assets/th.jpg')
        }, {
            id: 5325635,
            price: 13.88,
            name: '高汤牛肉粉',
            brief: '日销50份，店长推荐',
            count: 0,
            src: require('@/assets/th.jpg')
        }], //所有的list
        totalPrice: 0, //总价
        reduce: 0, //优惠
    },
    coffeeList: {
        chooseCoffeeList: [], //已选择的咖啡
        originList: [{
            id: 54124321,
            price: 20,
            name: '拿铁',
            brief: '月销量八千，销量第一',
            count: 0,
            src: require('@/assets/coffe.png')
        }, {
            id: 415241,
            price: 14,
            name: '拿铁',
            brief: '月销量300份',
            count: 0,
            src: require('@/assets/coffe.png')
        }, {
            id: 5325632,
            price: 14.9,
            name: '拿铁',
            brief: '日销50份，店长推荐',
            count: 0,
            src: require('@/assets/coffe.png')
        }, {
            id: 5325635,
            price: 13.88,
            name: '拿铁',
            brief: '日销50份，店长推荐',
            count: 0,
            src: require('@/assets/coffe.png')
        }], //所有的list
        totalPrice: 0, //总价
        reduce: 0, //优惠
    },
    serveList: {
        chooseServeList: [], //已选择的服务
        originList: [], //所有的list
        totalPrice: 0, //总价
        reduce: 0,
    },
    spwBanner: [{
        "createTime": "2019-06-20T08:49:21.203Z",
        "id": 1,
        "image": require('@/assets/fj.jpg'),
        "remark": "string",
        "sort": 0,
        "status": 0,
        "title": "string",
        "type": 0,
        "url": "string"
    }, {
        "createTime": "2019-06-20T08:49:21.203Z",
        "id": 2,
        "image": require('@/assets/fj.jpg'),
        "remark": "string",
        "sort": 0,
        "status": 0,
        "title": "string",
        "type": 0,
        "url": "string"
    }, {
        "createTime": "2019-06-20T08:49:21.203Z",
        "id": 3,
        "image": require('@/assets/fj.jpg'),
        "remark": "string",
        "sort": 0,
        "status": 0,
        "title": "string",
        "type": 0,
        "url": "string"
    }],
    spwCompanyMsg: {
        "companyName": "三品王",
        "createTime": "2019-06-20T09:25:16.400Z",
        "createUserId": 0,
        "id": 0,
        "inTime": "2019-06-20T09:25:16.400Z",
        "linkMan": "string",
        "linkPhone": "15478451242",
        "outTime": "2019-06-20T09:25:16.400Z",
        "scope": "string",
        "shortName": "string",
        "status": 0,
        "type": "string",
        "updateTime": "2019-06-20T09:25:16.400Z",
        "updateUserId": 0
    }
};
export default state;