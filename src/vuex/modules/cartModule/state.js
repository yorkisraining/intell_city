const state = {
    foodsList: {
        chooseFoodsList: [], //已选择的三品王
        originList: [{
            id: 54124321,
            price: 20,
            name: '麻辣牛腩粉',
            brief: '月销量八千，销量第一',
            count: 0
        },{
            id: 415241,
            price: 14,
            name: '酸辣牛肉粉',
            brief: '月销量300份',
            count: 0
        },{
            id: 5325632,
            price: 14.9,
            name: '高汤牛肉粉',
            brief: '日销50份，店长推荐',
            count: 0
        },{
            id: 5325635,
            price: 13.88,
            name: '高汤牛肉粉',
            brief: '日销50份，店长推荐',
            count: 0
        }], //所有的list
        totalPrice: 0, //总价
        reduce: 0, //优惠
    },
    coffeeList: {
        chooseCoffeList: [], //已选择的咖啡
        originList: [], //所有的list
        totalPrice: 0, //总价
        reduce: 0, //优惠
    },
    serveList: {
        chooseServeList: [], //已选择的服务
        originList: [], //所有的list
        totalPrice: 0, //总价
        reduce: 0,
    }
};
export default state;