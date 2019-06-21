//修改home中的数据
export const changeHomeData = (state, obj) => {
    state.imageList = obj.imageList
    state.activityUrl = obj.activityUrl;
    state.appList = obj.appList;
    state.companyPerformanceList = obj.companyPerformanceList;
    state.companyProjectList = obj.companyProjectList;
    state.inforList = obj.inforList;
    state.projectCenterUrl = obj.projectCenterUrl;
    state.sanPinWangUrl = obj.sanPinWangUrl;
    state.coffeeUrl = obj.coffeeUrl;
};