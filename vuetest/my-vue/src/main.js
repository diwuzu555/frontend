// import Account from './components/Account.vue';
// import AccountInq from './components/AccountInq.vue';
// import changePersonalImfornation from './components/changePersonalImfornation.vue';
// import HelloWorld from './components/HelloWorld.vue';

// import register from './components/register.vue';
// import sign from './components/sign.vue';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    data:{},
    store,
    
    render: h => h(App),
  
});
























{
    /* <template>
      <div id="app">
        <router-view/>
      </div>
    </template>

    <script>
    export default {
      name: 'App'
    }
    </script> */
}