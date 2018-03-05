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
      },
      {
        name: 'alarmCauseList',
        path: 'alarmCauseList',
        component: resolve => require(['@/views/alarmCauseList'], resolve)
      },
      {
        name: 'alarmEvent',
        path: 'alarmEvent',
        component: resolve => require(['@/views/alarmEvent'], resolve)
      },
      {
        name: 'alarmList',
        path: 'alarmList',
        component: resolve => require(['@/views/alarmList'], resolve)
      },
      {
        name: 'backlog',
        path: 'backlog',
        component: resolve => require(['@/views/backlog'], resolve)
      },
      {
        name: 'commonDetail',
        path: 'commonDetail',
        component: resolve => require(['@/views/commonDetail'], resolve)
      },
      {
        name: 'equRunTimeList',
        path: 'equRunTimeList',
        component: resolve => require(['@/views/equRunTimeList'], resolve)
      },
      {
        name: 'equStateList',
        path: 'equStateList',
        component: resolve => require(['@/views/equStateList'], resolve)
      },
      {
        name: 'fanInfo',
        path: 'fanInfo',
        component: resolve => require(['@/views/fanInfo'], resolve)
      },
      {
        name: 'inspect',
        path: 'inspect',
        component: resolve => require(['@/views/inspect'], resolve)
      },
      {
        name: 'siteInfo',
        path: 'siteInfo',
        component: resolve => require(['@/views/siteInfo'], resolve)
      },
      {
        name: 'siteList',
        path: 'siteList',
        component: resolve => require(['@/views/siteList'], resolve)
      },
      {
        name: 'technicalIndex',
        path: 'technicalIndex',
        component: resolve => require(['@/views/technicalIndex'], resolve)
      },
      {
        name: 'shieldDoorInfo',
        path: 'shieldDoorInfo',
        component: resolve => require(['@/views/shieldDoorInfo'], resolve)
      },
      {
        name: 'stationStaffList',
        path: 'stationStaffList',
        component: resolve => require(['@/views/stationStaffList'], resolve)
      },
      {
        name: 'setup',
        path: 'setup',
        component: resolve => require(['@/views/setup'], resolve)
      },
      {
        name: 'escalatorInfo',
        path: 'escalatorInfo',
        component: resolve => require(['@/views/escalatorInfo'], resolve)
      },
      {
        name: 'search',
        path: 'search',
        component: resolve => require(['@/views/search'], resolve)
      },
      {
        name: 'mine',
        path: 'mine',
        component: resolve => require(['@/views/mine'], resolve)
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: resolve => require(['@/views/login'], resolve)
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
