import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default  new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
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

