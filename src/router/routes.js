export default [
    {
        path: '/student',
        component: () => import('@/components/Student'),
    },
    {
        path: '/school',
        component: () => import('@/components/School'),
    },
    {
        path: '/pag',
        name:'pag',
        component: () => import('@/pages/Pag'),
    },
    {
        path: '/',
        redirect: '/home',
    }
]