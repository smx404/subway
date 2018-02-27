import { xhr } from '@/http';

export default {
    _ajax(state, { name, ...options }) {
        return new Promise(function(resolve, reject) {
            xhr({ name, ...options }).then(res => resolve(res), err => reject(err));
        });
    }
};
