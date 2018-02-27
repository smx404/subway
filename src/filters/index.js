import Vue from 'vue';
import { formatPrice, formatDistance } from '../utils';

//金额
Vue.filter('currency', money => formatPrice(money));
Vue.filter('distance', val => formatDistance(val));
Vue.filter('address', item => {
    if (item.length > 4) {
        item = item.substr(0, 4) + '...';
    }
    return item + ' ';
});
