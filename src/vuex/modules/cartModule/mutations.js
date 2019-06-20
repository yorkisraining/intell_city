//修改foodsList中的数据
export const changeFoodsList = (state, obj) => {
    state.foodsList.chooseFoodsList = obj.list;
    state.foodsList.totalPrice = obj.total;
    state.foodsList.originList = obj.origin;
};
export const changeFoodsReduce = (state, obj) => {
    state.foodsList.reduce = obj;
};

//修改CoffeList中的数据
export const changeCoffeeList = (state, obj) => {
    state.coffeeList.chooseCoffeeList = obj.list;
    state.coffeeList.totalPrice = obj.total;
    state.coffeeList.originList = obj.origin;
};
export const changeCoffeeReduce = (state, obj) => {
    state.coffeeList.reduce = obj;
};

//修改三品王ServeList中的数据
export const changeServeList = (state, obj) => {
    state.serveList.chooseServeList = obj.list;
    state.serveList.totalPrice = obj.total;
    state.serveList.originList = obj.origin;
};

//修改三品王商品列表中的数据
export const changeSPWOriginList = (state, obj) => {
    state.serveList.originList.push(obj);
};

//修改可用优惠价格
export const changeServeReduce = (state, obj) => {
    state.serveList.reduce = obj;
};

//修改三品王banner数据
export const changeSPWBanner = (state, obj) => {
    state.spwBanner = obj;
};

//修改三品王公司数据
export const changeSPWCompanyMsg = (state, obj) => {
    state.spwCompanyMsg = obj;
};