// 子应用到菜单
export const appsMains = [
  {
    path: '/client',
    children: [
      {
        path: 'doc',
        name: 'Dashboard',
        meta: { title: '客户端-文档', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/client/profile',
    children: [
      {
        path: 'index',
        name: 'Profile',
        meta: { title: '客户端-个人中心', icon: 'user', noCache: true }
      }
    ]
  }
]
