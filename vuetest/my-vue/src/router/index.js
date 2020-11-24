import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import HelloWorld from '@/components/HelloWorld'
import changePersonalImfornation from '@/components/changePersonalImfornation'
import sign from '@/components/sign'
import Account from '@/components/Account' //账户管理页面

import Issue_report_form from '@/components/Issue_report_form'
import list from '@/components/list'
import HelloWorld_xinIssue from '@/components/HelloWorld_xinIssue'

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
            path: '/Issue_report_form',
            name: 'Issue_report_form',
            component: Issue_report_form
        },
        {
            path: '/list',
            name: 'list',
            component: list
        },
        {
            path: '/HelloWorld_xinIssue',
            name: 'HelloWorld_xinIssue',
            component: HelloWorld_xinIssue
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