import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Layouts = () => import('components/content/layouts/Layouts')

const routes = [
    {
        path: '',
        redirect: '/home',
    },
    {
        path:'/home',
        component:Layouts
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
