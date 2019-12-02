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
      component: Search,
    },
    {
      path: '/tosearch/:keyWords?',
      name: 'tosearch',
      component: ()=> import('./views/ToSearch.vue')
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
      path: '/list/:activeDescript?',
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
      path: '/jiesuan/:goodId',
      name: 'jiesuan',
      component: ()=> import('./views/Jiesuan.vue'),
    },
    {
      path: '/waitforpay/:orderId',
      name: 'waitforpay',
      component: ()=> import('./views/WaitForPay.vue'),
    },
    {
      path: '/paysuccess/:orderId',
      name: 'paysuccess',
      component: ()=> import('./views/PaySuccess.vue'),
    },
    {
      path: '/myorder/:active?',
      name: 'myorder',
      component: ()=> import('./views/MyOrder.vue'),
    },
    {
      path: '/orderdetail/:orderId',
      name: 'orderdetail',
      component: ()=> import('./views/OrderDetail.vue'),
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
    {
      path: '/addressedit',
      name: 'addressedit',
      component: ()=> import('@/views/Addressedit.vue'),
    },
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
      path: '/resetpwd',
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
      path: '/dianpu/:shopId',
      name: 'dianpu',
      component: ()=> import('@/views/Dianpu.vue'),
    },
    {
      path: '/vipmember',
      name: 'vipmember',
      component: ()=> import('@/views/VipMember.vue'),
    },
    {
      path: '/dindan/:orderId',
      name: 'dindan',
      component: ()=> import('@/views/Dindan.vue'),
    },
    {
      path: '/return/:orderId',
      name: 'return',
      component: ()=> import('@/views/Return.vue'),
    },
      {
        path: '/comment/:goodId',
        name: 'comment',
        component: ()=> import('@/views/Comment.vue'),
      },
   {
        path: '/chatbook',
        name: 'chatbook',
        component: ()=> import('@/views/ChatBook.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: ()=> import('@/views/Test.vue'),
 },
 {
  path: '/flowerwait/:orderId',
  name: 'flowerwait',
  component: ()=> import('@/views/FlowerWait.vue'),
},
{
  path: '/flowerpaysuccess/:orderId',
  name: 'flowerpaysuccess',
  component: ()=> import('@/views/FlowerPaysuccess.vue'),
},

  ]
})
