import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      signed: false,
      
    },
    mutations: {
      sign(){
        this.state.signed=true;
        console.log("登录成功");
      },
      
     
      
    }
  })
 
  export default store;