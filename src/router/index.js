import VueRouter from 'vue-router';
import routes from './router';

const router = new VueRouter({
    mode: 'hash',
    linkActiveClass: 'is-active',
    routes
});

export default router;
