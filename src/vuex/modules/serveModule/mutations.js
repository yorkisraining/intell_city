//修改ServeList中的数据
export const changeServeList = (state, obj) => {
    state.serveList.chooseServeList = obj.list;
    state.serveList.totalPrice = obj.total;
    state.serveList.originList = obj.origin;
};

//修改Serve商品列表中的数据，分页
export const changeServeOriginList = (state, obj) => {
    state.serveList.originList = obj;
};

//增加serveServe商品列表中的数据，分页
export const addServeOriginList = (state, obj) => {
    let arr = state.serveList.originList.concat(obj)
    state.serveList.originList = arr;
};

//修改Serve可用优惠价格
export const changeServeReduce = (state, obj) => {
    state.serveList.reduce = obj;
};

//修改Serve公司数据
export const changeServeCompanyMsg = (state, obj) => {
    state.serveCompanyMsg = obj;
};

//初始化数据
export const initServeList = (state, obj) => {
    state.serveList.chooseServeList = [];
    state.serveList.totalPrice = 0;
    state.serveList.originList = [];
    state.serveList.reduce = 0;
};