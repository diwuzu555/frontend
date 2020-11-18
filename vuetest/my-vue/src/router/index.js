import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import HelloWorld from '@/components/HelloWorld'
import changePersonalImfornation from '@/components/changePersonalImfornation'
import sign from '@/components/sign'
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