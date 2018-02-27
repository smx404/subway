//接口api
let api = {
    cityList: { url: 'api-customer/findCityAll' } //首页-城市列表
};

for (var k in api) {
    api[k].url = (process.env.NODE_ENV == 'development' ? '/proxy/' : window.config.apihost) + api[k].url;
}
export default api;
