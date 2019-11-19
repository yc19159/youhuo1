<template>
  <div class="mine">
      <div :style="{height:'2.72rem',background:'white',overflow:'hidden'}">
     <div class="top">
          <router-link to="register">
         <!-- <img src="" alt="" class="news"> -->
          </router-link>
         <router-link to="setting">
         <img src="../assets/image/mine_setting.png" alt="" class="setting">
         </router-link>
     </div>
      <div class="bg-consume">
               <div class="consume">
                  
     <div v-if="isLogin" class="login">
           <!-- <Uploadavatar :username="isLogin"/> -->
          <img :src="userinfo.avatarUrl" alt="" class="userImg" >
          <div class="login-right">
                <p class="userName">{{userinfo.nickName}}</p>
                <img src="../assets/image/mine_kthuiyuan.png" class="clubber" alt="" @click="toVipMember">
                <router-link to="personaldata">
                <img src="../assets/image/more.png" class="more" alt="">
                </router-link>
          </div>

           
       </div>
       <div v-else class="unlogin">
           <!-- <Uploadavatar :username="isLogin"/> -->
            <p class="newfriend">HI，新朋友</p>
            <p class="sp">立即登录，享受更多服务</p>
            <button class="login" @click="gotoLogin">登录</button>
            
       </div>
       <div class="some-fun">
           <ul>
               <li>
                   <p>0</p>
                   <p>优惠卷</p>
               </li>
               <li>
                   <p>0</p>
                   <p>红包</p>
               </li>
               <li>
                   <p>0</p>
                   <p>余额</p>
               </li>
               <li>
                   <p>0</p>
                   <p>收藏夹</p>
               </li>
           </ul>
       </div>

      <div class="vipdiv">
       <div class="vipdiv-left">
           <p class="vipdiv-title">VIP权益卡</p>
           <p class="vipdiv-save">花0.85/每天，预计省<span :style="{color:'#95862D'}">2500</span> /每年</p>
       </div>
       <button class="vipdiv-right" @click="openVip">点击抢购</button>
      </div>
               </div>
      </div>
      </div>
     <div class="bg-myorder">
           <div class="myorder">
               <div class="allorder">
                   <p class="left">
                       我的订单
                   </p>
                    <router-link to="/myorder">
                    <p class="right">
                        全部订单
                    </p>
                    <img src="../assets/image/more.png" alt="" class="more">
                     </router-link>
               </div>
               <ul>
                   <li> 
                       <router-link :to="{name:'myorder',params:{active:1}}">
                       <img src="../assets/image/mine_daifukuan.png" alt="">
                       </router-link>
                       <p>待付款</p>
                   </li>
                     <li>
                        <router-link :to="{name:'myorder',params:{active:2}}">
                       <img src="../assets/image/mine_daifahuo.png" alt="">
                        </router-link>
                       <p>租用中</p>
                   </li>
                     <li>
                         <router-link :to="{name:'myorder',params:{active:3}}">
                       <img src="../assets/image/mine_daishouhuo.png" alt="">
                        </router-link>
                       <p>待结算</p>
                   </li>
                     <li>
                    <router-link :to="{name:'myorder',params:{active:4}}">
                       <img src="../assets/image/mine_yiwancheng.png" alt="">
                     </router-link>
                       <p>已完成</p>
                   </li>
               </ul>
           </div>
     </div>
           <div class="bg-service">
           <div class="service">
               <div class="allorder">
                   <p class="left">
                       我的服务
                   </p>
                   
               </div>
               <ul>
                   <li>
                       <img src="../assets/image/mine_youhuiquan.png" alt="">
                       <p>优惠券</p>
                   </li>
                     <li>
                       <img src="../assets/image/mine_qyzulin.png" alt="">
                       <p>企业租赁</p>
                   </li>
                     <li>
                       <img src="../assets/image/mine_yjfankui.png" alt="">
                       <p>意见反馈</p>
                   </li>
                     <li>
                       <img src="../assets/image/mine_cjwenti.png" alt="">
                       <p>常见问题</p>
                   </li>
               </ul>
           </div>
     </div>

     <div class="tuijian">
         <img src="../assets/image/mine_tuijian.png" alt="" class="tuijian-img">
         <p class="recommendForYou">为你推荐</p>
     </div>
     <div class="price">
      <ul class="glist">
        <li class="glist-item" @click="drawer = true">
          <img src="" class="glist-img"/>
          <p class="phont-type">AAAAA Ipone   X</p>
          <p :style="{color:'#3BAD38','font-size':'0.13rem','line-height':'0.16rem',height:'0.16rem',
          'margin-left':'0.12rem',border:'1px solid #25A721','border-radius':'0.02rem',width:'0.32rem',
          'text-align':'center',float:'left','margin-top':'0.05rem'}">全新</p>
              <p :style="{color:'#FB9F00','font-size':'0.13rem','line-height':'0.16rem',height:'0.16rem',
          'margin-left':'0.12rem',border:'1px solid #FCAC39','border-radius':'0.02rem',width:'0.44rem',
          'text-align':'center',float:'left','margin-top':'0.05rem'}">免押金</p>
          <p class="glist-price">￥9.99/天</p>
        </li>
         <li class="glist-item"></li>
          <li class="glist-item"></li>
      </ul>
    </div> 
       <Foot/>
  </div>
</template>

<script>
import {mapMutations,mapState} from "vuex";
import Foot from "@/components/Foot.vue";
import Uploadavatar from "@/components/Uploadavatar.vue";
export default {
    data(){
        return{
            isLogin:false,
            userinfo:[],
            username:"",
        }
    },
    components:{
     Foot,
     Uploadavatar,
    },
    methods: {
        openVip(){
          this.$router.push({name:'vipmember'})
        },
        gotoLogin(){
            this.$router.push({name:'login'})
        },
        leave(){
            sessionStorage.removeItem('username') 
            this.isLogin=false
        },
        toVipMember(){
            this.$router.push({name: 'vipmember'})
        }
    },
      computed: {
          ...mapState(['searchShow'])
        // leave(){
        //     sessionStorage.removeItem('username') 
        //     this.isLogin=false
        // } 
    },
    mounted() {
        // var username=sessionStorage.username;
        if(localStorage.token){
            this.isLogin=true;
          
        };
       
        this.$axios.post("/user/info").then(res=>{
            console.log(res)
            this.userinfo=res.data.data;
            localStorage.info=JSON.stringify({"avatar":this.userinfo.avatarUrl,"username":this.userinfo.nickName});
            console.log(this.userinfo)
        })
         
    },

}

</script>

<style scoped>
.mine{
    width: 100%;
    height: auto;
    background: #F5F6FA;
    overflow: hidden;
}
.top{
    width: 3.43rem;
    height: 0.22rem;
    margin: auto;
    margin-top: 0.2rem;
    background: white;
}
.top .news{
    float: right;
    width: 0.18rem;
    height: 0.2rem;
    background: grey;
}
.top .setting{
    float: right;
    width: 0.18rem;
    height: 0.19rem;
}
.bg-consume{
    width: 100%;
    height: 2.2rem;
    margin-top: 0.15rem;
    background: white;
}
.consume{
    width: 3.43rem;
    height: 2.2rem;
    margin: auto;
}
.unlogin{
    width: 3.43rem;
    height: 0.8rem;
    position: relative;
    
}

.unlogin .newfriend{
    font-size: 0.21rem;
    font-weight: bold;
}
.unlogin .sp{
  font-size: 0.14rem;
  color: #C7C7C7;
  margin-top: 0.12rem;
}
.unlogin .login{
    position: absolute;
    right: 0;
    top: 0.2rem;
    border: none;
    outline: none;
    width: 0.7rem;
    height: 0.31rem;
    border-radius: 0.155rem;
    color: white;
    font-size: 0.14rem;
    background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: linear-gradient(to left, #D50000, #FD9A28) !important;
}
.login{
     width: 3.43rem;
    height: 0.8rem;
    position: relative;
}
.consume .some-fun{
    width: 100%;
    margin-top: 0.20rem;
    height: 0.35rem;
}
.consume .some-fun ul{
    height: 0.35rem;
}
.consume .some-fun ul li{
    text-align: center;
    float: left;
    width: 25%;
}
.consume .some-fun ul li p:first-child{
    font-size: 0.14rem;
    font-weight: bold;
}
.consume .some-fun ul li p:nth-child(2){
    font-size: 0.12rem;
    font-weight: normal;
    color: #C7C7C7;
}
.consume .vipdiv{
    width: 100%;
    height: 0.6rem; 
    border-radius: 0.12rem;
    background:url("../assets/image/mine_bg.png") 0 0  no-repeat;
    background-size:100%;
    margin-top: 0.15rem;
}
.vipdiv .vipdiv-left{
    float: left;
    margin-left: 0.2rem;
}
.vipdiv .vipdiv-left .vipdiv-title{
    font-size: 0.17rem;
    color: white;
    margin-top: 0.1rem;
}
.vipdiv .vipdiv-left .vipdiv-save{
    font-size: 0.12rem;
    margin-top: 0.05rem;
}
.vipdiv .vipdiv-right{
    float: right;
    border: 0;
    background: #F5F6FA;
    font-size: 0.13rem;
    padding: 0.06rem 0.17rem;
    border-radius: 0.14rem;
    margin-top: 0.15rem;
    margin-right: 0.25rem;
}
.bg-myorder{
    width: 3.43rem;
    height: 1.2rem;
    margin: auto;
    margin-top: 0.24rem;
    background: white;
    border-radius: 0.2rem;
    overflow: hidden;
}
.myorder{
    width: 3.08rem;
    height: 1.2rem;
    margin: auto;
}
.allorder{
width: 100%;
height: 0.18rem;
margin-top: 0.15rem;

}
.allorder .left{
 font-size: 0.15rem;
 font-weight: bold;
 float: left;
}
.allorder .right{
 font-size: 0.12rem;
 margin-left: 2.46rem;
 width: 0.5rem;
 color: black;
}
.allorder .more{
  float: right;
  width: 0.08rem;
  height: 0.12rem;
  margin-top: -0.15rem;
}
.bg-myorder .myorder ul{
width: 3.43rem;
height: 0.55rem;
margin: auto;
margin-top: 0.2rem;
}

.bg-myorder .myorder ul li{
  width: 25%;
  float: left;
  text-align: center;
  font-size: 0.12rem;
  color: #5E6165;
  margin-left: 0;
  height: 0.55rem;
}

.myorder ul li img{
    width: 0.23rem;
    height: 0.2rem;
    margin-left: 0.26rem;
}
.myorder ul li p{
    width: 0.73rem;
    margin-top: 0.13rem;
}
.bg-service{
    width: 3.43rem;
    height: 1.2rem;
    margin: auto;
    margin-top: 0.24rem;
    background: white;
    border-radius: 0.2rem;
    overflow: hidden;
}
.service{
    width: 3.08rem;
    height: 1.2rem;
    margin: auto;
}
.bg-service .service ul{
width: 3.43rem;
height: 0.55rem;
margin: auto;
margin-top: 0.2rem;
}

.bg-service .service ul li{
  width: 25%;
  float: left;
  text-align: center;
  font-size: 0.12rem;
  color: #5E6165;
  margin-left: 0;
  height: 0.55rem;
}

.service ul li img{
    width: 0.22rem;
    height: 0.19rem;
    margin-left: 0.26rem;
}
.service ul li p{
    width: 0.73rem;
    margin-top: 0.13rem;
}
.tuijian{
    width: 0.8rem;
    height: 0.2rem;
    margin-left: 1.5rem;
    margin-top: 0.22rem;
}
.tuijian .tuijian-img{
    width: 0.15rem;
    height: 0.16rem;
    float: left;
    margin-top: 0.03rem;
}
.tuijian .recommendForYou{
    font-weight: bold;
    font-size: 0.15rem;
    float: left;
    margin-left: 0.05rem;
}
 .price{
    width: 100%;
    background: #F5F6FA;
    border-radius: 0.2rem;
    margin-top: 0.15rem;
    margin-bottom: 1rem;
  }
  .glist{
    width: 3.43rem;
    margin: auto;
    height: 100%;
  }
  .glist::after, .clear::after{
    content:" .";
    display:block;
    clear:both;
    height:0; 
    overflow:hidden; visibility:hidden; 
  }
  .glist .glist-item{
     width: 1.6rem;
     height: 2.53rem;
     background: white;
     border-radius: 0.16rem;
     float: left;
     margin-top: 0.25rem;
     /* margin-bottom: 0.2rem; */
     overflow: hidden;
  }
  .glist .glist-item:nth-child(2n){
    margin-left: 0.23rem;
  }
  .glist-img{
       border: 1px solid;
       /* display: block; */
       width: 0.9rem;
       height: 1.2rem;
       margin: auto;
        margin-top: 0.22rem;
  }
 .phont-type{
   margin-left: 0.12rem;
   margin-top: 0.25rem;
   font-size: 0.14rem;
   font-family: "PingFangSC-Semibold";
   font-weight: bold;
 }
 .glist-price{
    margin-top: 0.28rem;
    font-size: 0.15rem;
    font-family: 'DIN-Bold';
    color: #B3381D;
    font-weight: bold;
    margin-left: 0.12rem;

 }
 .login .userImg{
     float: left;
     width: 0.8rem;
     height: 0.8rem;
     border-radius: 50%;
 }
 .login .login-right{
     float: left;
     margin-left: 0.15rem;
     width: 2.47rem;
    
 }
 .login .login-right .userName{
     font-size: 0.23rem;
     font-weight: 610;
     margin-top: 0.15rem;
     height: 0.3rem;
 }
 .login .login-right .clubber{
  width: 0.88rem;
  height: 0.25rem;
  margin-top: 0.15rem;
 }
 .login .login-right .more{
     float: right;
     margin-top: -0.3rem;
 }
</style>