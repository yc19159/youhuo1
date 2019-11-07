import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Search from './views/Search.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path:"/",redirect:{name:'home'}},
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search/:typeId',
      name: 'search',
      component: Search
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: ()=> import('./views/Register.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: ()=> import('./views/Mine.vue')
    },
    {
      path: '/list/:active?',
      name: 'list',
      component: ()=> import('./views/Alllist.vue')
    },
    {
      path: '/good/:goodId',
      // path:'/good',
      name: 'good',
      component: ()=> import('./views/Good.vue')
    },
    {
      path: '/postal',
      name: 'postal',
      component: ()=> import('./views/Postal.vue')
    },
    {
      path: '/jiesuan',
      name: 'jiesuan',
      component: ()=> import('./views/Jiesuan.vue'),
    },
    {
      path: '/waitforpay',
      name: 'waitforpay',
      component: ()=> import('./views/WaitForPay.vue'),
    },
    {
      path: '/paysuccess',
      name: 'paysuccess',
      component: ()=> import('./views/PaySuccess.vue'),
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: ()=> import('./views/MyOrder.vue'),
    },
    {
      path: '/givewarm',
      name: 'givewarm',
      component: ()=> import('./views/GiveWarm.vue'),
    },
    {
      path: '/givewarmdetail',
      name: 'givewarmdetail',
      component: ()=> import('./views/GiveWarmDetail.vue'),
    },
    // {
    //   path: '/addressedit',
    //   name: 'addressedit',
    //   component: ()=> import('@/views/Addressedit.vue'),
    // },
    {
     path: '/personaldata',
      name: 'personaldata',
      component: ()=> import('@/views/PersonalData.vue'),
    },
    {
      path: '/setting',
      name: 'setting',
      component: ()=>import('@/views/Setting'),
    },
    {
      path: '/resetpwd',redirect:"/resetpwd",
      name: 'resetpwd',
      component: ()=>import('@/views/ResetPwd'),
    },{
      path: '/suggested',
      name: 'suggested',
      component: ()=>import('@/views/Suggested')
    },
    {
      path: '/addaddress',
      name: 'addaddress',
      component: ()=> import('@/views/Addaddress.vue'),
    },
    {
      path: '/addressmanage',
      name: 'addressmanage',
      component: ()=> import('@/views/AddressManage.vue'),
    },
    {
      path: '/dianpu',
      name: 'dianpu',
      component: ()=> import('@/views/Dianpu.vue'),
    },
    {
      path: '/vipmember',
      name: 'vipmember',
      component: ()=> import('@/views/VipMember.vue'),
    },
  ]
})
