//修改foodsList中的数据
export const changeFoodsList = (state, obj) => {
    state.foodsList.chooseFoodsList = obj.list;
    state.foodsList.totalPrice = obj.total;
    state.foodsList.originList = obj.origin;
};

//增加三品王商品列表中的数据，分页
export const changeSPWOriginList = (state, obj) => {
    state.serveList.originList.push(obj);
};

//修改三品王可用优惠价格
export const changeFoodsReduce = (state, obj) => {
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

//======================================================

//修改CoffeList中的数据
export const changeCoffeeList = (state, obj) => {
    state.coffeeList.chooseCoffeeList = obj.list;
    state.coffeeList.totalPrice = obj.total;
    state.coffeeList.originList = obj.origin;
};

//修改Coffe可用优惠价格
export const changeCoffeeReduce = (state, obj) => {
    state.coffeeList.reduce = obj;
};

//增加Coffee商品列表中的数据，分页
export const changeCoffeeOriginList = (state, obj) => {
    state.coffeeList.originList.push(obj);
};

//修改Coffee banner数据
export const changeCoffeeBanner = (state, obj) => {
    state.coffeeBanner = obj;
};

//修改Coffee公司数据
export const changeCoffeeCompanyMsg = (state, obj) => {
    state.coffeeCompanyMsg = obj;
};