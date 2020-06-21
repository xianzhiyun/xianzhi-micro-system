
export const constantRoutes = [
  {
    path: '/redirect/:path(.*)',
    component: () => import('@/views/redirect/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/index'),
    name: 'Dashboard',
    meta: { title: '首页', icon: 'dashboard', affix: true }
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  }
]
