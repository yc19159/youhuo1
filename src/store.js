import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchShow:true,
    active:0,
    activeOrder:0,
    list:[
      {img:"",content:"首页",isActive:true,luyou:'/'},
      {img:"",content:"送温暖",isActive:false,luyou:'givewarm'},
      {img:"",content:"我的",isActive:false,luyou:'mine'},
   ],
  
  },
  mutations: {
   changeSearch(state,searchShow){
       state.searchShow=searchShow;
   },
   changeActive(state,active){
    state.active=active;
   },
   changeActiveOrder(state,activeOrder){
    state.activeOrder=activeOrder;
   },
  },
  actions: {

  }
})
