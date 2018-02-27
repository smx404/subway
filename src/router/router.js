const router = [
    {
        path: '/',
        component: resolve => require(['@/views/layout'], resolve),
        children: [
            {
                name: 'index',
                path: 'index',
                component: resolve => require(['@/views/home'], resolve)
            },
            {
                path: '/',
                redirect: '/index'
            }
        ]
    },
    {
        name: '404',
        path: '/404',
        component: resolve => require(['@/views/404'], resolve)
    },
    {
        path: '*',
        redirect: '/404'
    }
];

export default router;
