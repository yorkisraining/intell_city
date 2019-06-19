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
export const changeCoffeList = (state, obj) => {
    state.coffeeList.chooseCoffeList = obj.list;
    state.coffeeList.totalPrice = obj.total;
    state.coffeeList.originList = obj.origin;
};
export const changeCoffeeReduce = (state, obj) => {
    state.coffeeList.reduce = obj;
};

//修改ServeList中的数据
export const changeServeList = (state, obj) => {
    state.serveList.chooseServeList = obj.list;
    state.serveList.totalPrice = obj.total;
    state.serveList.originList = obj.origin;
};
export const changeServeReduce = (state, obj) => {
    state.serveList.reduce = obj;
};