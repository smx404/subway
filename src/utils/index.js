import store from '../store';

//get params from url
export function getParams(url) {
    url = url || window.location.href;
    if (url.indexOf('#') != -1) {
        url = url.split('#')[1];
    }

    let params = '';

    if (url.indexOf('?') != -1) {
        params = url.substr(url.indexOf('?') + 1);
    }

    let obj = {};

    if (params) {
        let arr = [];

        if (params.indexOf('&') == -1) {
            arr = [params];
        } else {
            arr = params.split('&');
        }
        for (let i = 0; i < arr.length; i++) {
            let s = arr[i].split('=');

            obj[s[0]] = decodeURIComponent(s[1]);
        }
    }
    return obj;
}

//set session
export function setSen(k, val) {
    if (typeof val == 'string') {
        sessionStorage.setItem(k, val);
        return val;
    }
    sessionStorage.setItem(k, JSON.stringify(val));
    return val;
}

//get session
export function getSen(k) {
    let uu = sessionStorage.getItem(k);

    try {
        if (typeof JSON.parse(uu) != 'number') {
            uu = JSON.parse(uu);
        }
    } catch (e) {}
    return uu;
}

//set local
export function setLoc(k, val) {
    if (typeof val == 'string') {
        localStorage.setItem(k, val);
        return val;
    }
    localStorage.setItem(k, JSON.stringify(val));
    return val;
}

//get local
export function getLoc(k) {
    let uu = localStorage.getItem(k);

    try {
        if (typeof JSON.parse(uu) != 'number') {
            uu = JSON.parse(uu);
        }
    } catch (e) {}
    return uu;
}

//clear session
export function clearKey(k) {
    if (k) {
        sessionStorage.removeItem(k);
    } else {
        sessionStorage.clear();
    }
}

//获取屏幕宽度高度
export function getClient() {
    let clientWidth = document.documentElement.clientWidth;
    let clientHeight = document.documentElement.clientHeight;

    return {
        clientWidth,
        clientHeight
    };
}

//格式化距离
export function formatDistance(distance) {
    if (distance < 0.1) {
        return '<100m';
    } else if (distance >= 0.1 && distance < 1) {
        return distance * 1000 + 'm';
    } else if (distance >= 1) {
        return distance.toFixed(1) + 'km';
    }
}

//序列化对象和数组
export function serialize(data) {
    if (data != null && data != '') {
        try {
            return JSON.parse(JSON.stringify(data));
        } catch (e) {
            if (data instanceof Array) {
                return [];
            }
            return {};
        }
    }
    return data;
}

//计算金额加减时防止金额失去精度
export function calculatePrice(price = 0) {
    if (typeof price === 'string') {
        price = parseFloat(price);
    }

    if (isNaN(price)) {
        return 0;
    }

    return Math.round(price * 100) / 100;
}

//格式化金额
export function formatPrice(price = 0) {
    if (typeof price === 'string') {
        price = parseFloat(price);
    }

    if (isNaN(price)) {
        return 0;
    }

    if (parseInt(price) === price) {
        return price;
    }

    return price.toFixed(2);
}

//判断当前运行的浏览器环境
export function browser() {
    let os = {};
    let ua = window.navigator.userAgent.toLowerCase();

    os.isAndroid = /android/.test(ua); //browser,wechat,android
    os.isIOS = /iphone|ipad|ipod/.test(ua); //browser,wechat,ios
    os.isBrowser = /macintel|win32/.test(navigator.platform.toLowerCase()); //browser
    os.isWeixin = ua.indexOf('micromessenger') != -1; //wechat
    os.isAlipay = ua.indexOf('alipayclient') != -1; //ali
    os.isApp = function() {
        return (this.isAndroid || this.isIOS) && !this.isWeixin && !this.isBrowser && !this.isAlipay;
    };

    return os;
}

//格式化日期
Date.prototype.format = function(fmt) {
    let o = {
        'M+': this.getMonth() + 1, //月份
        'd+': this.getDate(), //日
        'h+': this.getHours(), //小时
        'm+': this.getMinutes(), //分
        's+': this.getSeconds(), //秒
        'q+': Math.floor((this.getMonth() + 3) / 3), //季度
        S: this.getMilliseconds() //毫秒
    };

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, String(this.getFullYear()).substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(String(o[k]).length));
        }
    }
    return fmt;
};

//格式化日期
export function formatDate(nS, format) {
    //日期格式化
    if (!nS) {
        return '';
    }
    format = format || 'yyyy-MM-dd hh:mm:ss';
    return new Date(nS).format(format);
}

//验证手机号码
export function checkPhone(phone) {
    return Boolean(/^1[3578]\d{9}$/.test(phone));
}

//验证密码
export function checkPassword(pwd) {
    return Boolean(/^[a-z0-9_-]{6,16}$/.test(pwd));
}

//验证验证吗
export function checkVerify(code) {
    return Boolean(/^\d{4}$/.test(code));
}

//去除字符串左右两边的空格
export function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
}

//获取域名
export function dirPath() {
    // var uu = window.location;
    // var mu = uu.pathname.split('/');

    // uu = uu.origin + '/' + mu[1];
    // return {
    //     project: mu[1],
    //     path: uu
    // };
    return window.location.origin + '/wechat';
}

//类似于findIndex
Array.prototype.indexOfArr = function(obj) {
    let res = -1;

    this.filter(function(e, i) {
        let keys = '';

        for (let key in obj) {
            keys = key;
        }
        if (obj[keys] == e[keys]) {
            res = i;
        }
    });
    return res;
};

//重写findIndex(某些手机不支持findIndex)
Array.prototype.findIndex = function(func) {
    let result = -1;

    this.forEach((item, index) => {
        var flag = func(item);

        if (flag) {
            result = index;
        }
    });
    return result;
};

//生成随机字符串 @randomFlag是否生成确定长度的字符串
export function randomWord(randomFlag, min, max) {
    var str = '',
        pos,
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
        pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
}

//时间倒计时格式 返回结果 [天数，时分秒，是否结束]
export function countDown(time) {
    if (!time || time < 0) {
        return [0, '00:00:00', 0];
    }
    var d = Math.floor(time / 60 / 60 / 24);
    var h = Math.floor((time / 60 / 60) % 24);
    var m = Math.floor((time / 60) % 60);
    var s = time % 60;

    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    return [d, h + ':' + m + ':' + s, 1];
}

window.console.print = function(e) {
    let custom = store.getters.custom;

    custom.console.push(e);
    store._actions._custom[0](custom);
};
