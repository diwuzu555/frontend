import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        signed: false,

        signedUsername: '',

        signedidentity1: '',
        signedId: '',
        edit: false,
        founder: false,
        selected: false,
        submit: true,
        title: 'a',
        issueId: '',
        iCreateTime: '',
        planTime: '',
        actualTime: '',
        type: '',
        grade: '',
        version: '',
        step: '',
        reviser: '',
        solution: '1'

    },

    mutations: {
        sign(state, username, id) {
            this.state.signed = true;
            this.state.signedUsername = username;
            this.state.signedId = id;

            // this.state.signedidentity1 = identity;

            console.log("登录成功");
            console.log(this.state.signedUsername);

        },

        body(state, identity) {
            this.state.signed = true;
            this.state.signedidentity1 = identity;
        },
        editFun(state, res) {



            this.state.title = res.data[0].title;
            this.state.issueId = res.data[0].issueId;
            this.state.iCreateTime = res.data[0].iCreateTime;
            this.state.planTime = res.data[0].planTime;
            this.state.actualTime = res.data[0].actualTime;
            this.state.type = res.data[0].type;
            this.state.grade = res.data[0].grade;
            this.state.version = res.data[0].version;
            this.state.step = res.data[0].step;
            this.state.reviser = res.data[0].reviser;
            this.state.solution = res.data[0].solution;

            this.state.edit = true;
            this.state.selected = true;
            this.state.founder = false;
            this.state.submit = false;







        },
        founFun(state, res) {




            this.state.title = res.data[0].title;
            this.state.issueId = res.data[0].issueId;
            this.state.iCreateTime = res.data[0].iCreateTime;
            this.state.planTime = res.data[0].planTime;
            this.state.actualTime = res.data[0].actualTime;
            this.state.type = res.data[0].type;
            this.state.grade = res.data[0].grade;
            this.state.version = res.data[0].version;
            this.state.step = res.data[0].step;
            this.state.reviser = res.data[0].reviser;
            this.state.solution = res.data[0].solution;

            this.state.selected = true;
            this.state.founder = true;
            this.state.edit = false;
            this.state.submit = false;



        },
        seleFun(state, res) {

            this.state.title = res.data[0].title;
            this.state.issueId = res.data[0].issueId;
            this.state.iCreateTime = res.data[0].iCreateTime;
            this.state.planTime = res.data[0].planTime;
            this.state.actualTime = res.data[0].actualTime;
            this.state.type = res.data[0].type;
            this.state.grade = res.data[0].grade;
            this.state.version = res.data[0].version;
            this.state.step = res.data[0].step;
            this.state.reviser = res.data[0].reviser;
            this.state.solution = res.data[0].solution;

            this.state.selected = false;
            this.state.edit = false;
            this.state.submit = false;
            this.state.founder = false;

        },
        submitIssue() {
            this.state.selected = false;
            this.state.edit = false;
            this.state.submit = true;
            this.state.founder = false;


            this.state.title = '';
            this.state.issueId = '';
            this.state.iCreateTime = '';
            this.state.planTime = '';
            this.state.actualTime = '';
            this.state.type = '';
            this.state.grade = '';
            this.state.version = '';
            this.state.step = '';
            this.state.reviser = '';
            this.state.solution = '';


        }



    }
})

export default store;