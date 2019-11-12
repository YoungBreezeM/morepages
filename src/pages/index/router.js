import Vue from 'vue';
import VueRouter from "vue-router";

import store from "../../store/store";
import * as types from "../../store/types";
import LogFail from "@/pages/index/view/LogFail";
import Admin from "@/pages/index/view/Admin";
Vue.use(VueRouter);//全局注册路由

let routes = [
    {
        path:'/',
        redirect:"/admin"

    },
    {
        path: '/admin',
        name:'admin',
        meta: {
            requireAuth: true,  // 该路由项需要权限校验
        },
        component:Admin
    },
    {
        path:"/logFail",
        name:'logFail',
        component:LogFail
    }
];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'))
}


let router =  new VueRouter({
    mode:'history',
    routes: routes
});


router.beforeEach((to, from, next) => {
    if (to.matched.some((r) => r.meta.requireAuth)) {
        // eslint-disable-next-line no-undef
        if (localStorage.token) {   //判断是否已经登录
            next();
        } else {
            next({
                path: '/logFail',
                query: { redirect: to.fullPath }
            });
        }
    } else {
        next();
    }
});
export default router;