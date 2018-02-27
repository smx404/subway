import Vue from 'vue';
import api from './api';
import store from '../store';
// import MintUI from 'mint-ui';
import router from '../router';

let xhr = ({ method = 'post', name, options = {}, userId = true, cusError = false }) => {
    let promise;
    let str = '';
    let time = new Date();
    let loading = true;
    let headerOptions = {
        emulateJSON: api[name].version != 2,
        headers: {
            session: api[name].session === false ? '' : store.getters.session
        }
    };

    if (userId) {
        options.userId = store.getters.userId || '';
    }

    for (var i in options) {
        str += i + '=' + options[i] + '&';
    }
    str = str.slice(0, -1);
    if (api[name].version == 2) {
        options = JSON.stringify(options);
    }

    //加载动画
    setTimeout(() => {
        if (loading) {
            // MintUI.Indicator.open({
            //     text: '加载中',
            //     spinnerType: 'triple-bounce'
            // });
        }
    }, 2000);

    function loginError() {
        // MintUI.Toast('登录失效，请重新登录');
        loading = false;
        // MintUI.Indicator.close();
        store._actions._userInfo[0]({
            userId: store.getters.userId
        });
        setTimeout(() => {
            router.push('login');
        }, 1000);
        return false;
    }

    function errHandler(data, error, msg) {
        // MintUI.Indicator.close();

        if (data.status == 401) {
            loginError();
        } else if (cusError) {
            error(data);
        } else if (msg) {
            // MintUI.Toast(msg);
        }

        setTimeout(() => {
            // MintUI.Indicator.close();
        }, 3000);
    }

    function successV1({ data, success, error }) {
        if (data.data.header && data.data.header.statusCode && ~~data.data.header.statusCode) {
            success(data.data.body);
            console.log(api[name].url.replace('/proxy', '') + '?' + str, JSON.parse(JSON.stringify(data.data.body)), new Date() - time); //eslint-disable-line
        } else {
            errHandler(data, error, data.data.header.errorMsg.errorDesc);
        }
        loading = false;
        // MintUI.Indicator.close();
    }

    function successV2({ data, success, error }) {
        if (data.data.code && data.data.code == 200) {
            success(data.data.body);
            console.log(api[name].url.replace('/proxy', '') + '?' + str, JSON.parse(JSON.stringify(data.data.body)), new Date() - time); //eslint-disable-line
        } else {
            errHandler(data, error, data.data.msg);
        }
        loading = false;
        // MintUI.Indicator.close();
    }

    function successHandler(data, success, error) {
        let params = { data, success, error };

        if (api[name].version == 2) {
            successV2(params);
        } else {
            successV1(params);
        }
    }

    switch (method) {
        case 'get':
            promise = new Promise(function(resolve, reject) {
                Vue.http.get(api[name].url, { params: options }, headerOptions).then(data => successHandler(data, success => resolve(success), error => reject(error)), data => errHandler(data, reject));
            });
            return promise;
        case 'post':
            promise = new Promise(function(resolve, reject) {
                Vue.http.post(api[name].url, options, headerOptions).then(data => successHandler(data, success => resolve(success), error => reject(error)), data => errHandler(data, reject));
            });
            return promise;
        default:
    }
};

export { xhr, api };
