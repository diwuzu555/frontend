import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        signed: false,
        signedUsername: ''

    },
    mutations: {
        sign(state, username) {
            this.state.signed = true;
            this.state.signedUsername = username;

            console.log("登录成功");
            console.log(this.state.signedUsername);

        },



    }
})

export default store;