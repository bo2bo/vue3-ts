import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { getToken } from '@/utils/auth'

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/views/index.vue')
        },
        {
            path: '/map',
            name: 'Map',
            component: () => import('@/views/Map.vue')
        }, {
            path: '/charts',
            name: 'Charts',
            component: () => import('@/views/Charts.vue')
        }, {
            path: '/form',
            name: 'Form',
            component: () => import('@/views/Form.vue'),

        }, {
            path: '/table',
            name: 'Table',
            component: () => import('@/views/Table.vue')
        }
    ]
}, {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
const whiteList: Array<string> = ['/login', '/bind', '/register'];
router.beforeEach((to, from, next) => {
    if (getToken()) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login?redirect=${to.fullPath}`)
        }
    }
})

export default router