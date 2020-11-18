import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import HelloWorld from '@/components/HelloWorld'
import changePersonalImfornation from '@/components/changePersonalImfornation'
import sign from '@/components/sign'
import Account from '@/components/Account' //账户管理页面
import AccountInq from '@/components/AccountInq' //账户管理查询页面
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },


        {
            path: '/register',
            name: 'register',
            component: register
        },

        {
            path: '/changePersonalImfornation',
            name: 'changePersonalImfornation',
            component: changePersonalImfornation
        },

        {
            path: '/sign',
            name: 'sign',
            component: sign
        },
        {
            path: '/Account',
            name: 'Account',
            component: Account
        },
        {
            path: '/AccountInq',
            name: 'AccountInq',
            component: AccountInq
        },


    ]
});




// Vue.use(VueRouter);

// const routes = [
//     { path: '/', component:HelloWorld }

// ];

// const router = new Router({
//     routes
// });

// export default router;