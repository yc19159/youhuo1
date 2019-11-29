import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router';
import store from './store'
// import './registerServiceWorker'
// console.log("vue de main")
import "./utils/filters";
// import "./utils/mui";
import "./styles/index.scss"
import Vant from "vant";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { Sku } from 'vant';
import { Card } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Notify } from 'vant';
import { Area } from 'vant';
import { Popup } from 'vant';
import { List } from 'vant';
import { Toast } from 'vant';
import { Rate } from 'vant';
import { Stepper } from 'vant';
import { IndexBar, IndexAnchor } from 'vant';
import {GoodsAction, GoodsActionIcon, GoodsActionButton} from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Cell, CellGroup } from 'vant';
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}


Vue.use(Area);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(Notify);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Stepper);
Vue.use(IndexBar).use(IndexAnchor);
Vue.use(Swipe).use(SwipeItem);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Cell).use(CellGroup);
Vue.use(Card);
Vue.use(Rate);
Vue.use(List);
Vue.use(Sku);
Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);
import axios from "@/utils/axios.js";
// import axios from "axios";

Vue.prototype.$axios = axios;    // this==> Vue.prototype  this.$axios ==> axios ;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
