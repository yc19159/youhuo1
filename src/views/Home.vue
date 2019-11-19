<template>
  <div class="home">
    
 <van-search
  v-model="value"
  placeholder="请输入搜索关键词"
  show-action
  shape="round"
  @search="onSearch"
  id="topSearch"
>
  <div slot="action" @click="onSearch" id="seasearchrch">
      <img src="../assets/image/home_chat.png" alt="">
    </div>
</van-search>
<div class="bg_banner">
    <div class="banner">
      <router-link  to="list">
<van-swipe :autoplay="3000" indicator-color="white">
   
  <van-swipe-item ><img src="../assets/image/home_banner1.png" alt="" class="bannerImg"> </van-swipe-item>
  <van-swipe-item><img src="../assets/image/home_banner2.png" alt="" class="bannerImg"> </van-swipe-item>
  <van-swipe-item><img src="../assets/image/home_banner3.png" alt="" class="bannerImg"> </van-swipe-item>
</van-swipe>
 </router-link>
    </div>
    </div>
    <div class="mainContent">
  <div class="ban-list">
          <ul class="ban-list-ul">
            <li><img src="../assets/image/home_qiye.png" alt="" class="yuan"> <p>办公</p> </li>
            <li><img src="../assets/image/home_bangong.png" alt=""  class="yuan"><p>数码</p></li>
            <li><img src="../assets/image/home_jiadian.png" alt=""  class="yuan"><p>家电</p></li>
            <li><img src="../assets/image/home_shuma.png" alt=""  class="yuan"><p>游戏</p></li>
            <li>
              <router-link to="list">
                <img src="../assets/image/home_all.png" alt="" class="yuan">
              </router-link>
              <p>全部</p></li>
          </ul>
     </div>
     <div class="advertise">
       <img src="../assets/image/home_haibao.png"/>
     </div>
     <div class="content-bottom">
         <ul class="content-bottom-ul">
           <router-link :to="{name: 'search',params:{typeId:1}}">
           <li>
             <p class="strong">热门排行</p>
             <p class="small">热租爆品</p>
             <img src="../assets/image/home_hot.png" class="hot" alt="">
             <img src="../assets/image/home_remen.png" class="remen" alt="">
           </li>
            </router-link>
           <li>
              <p class="strong">优选租品</p>
              <p class="small">推荐租品</p>
              <img src="../assets/image/home_youxuan.png" class="youxuan" alt="">
           </li>
           <li>
              <p class="strong">租就送</p>
               <p class="small">白租不用还</p>
             <img src="../assets/image/home_song.png" class="song" alt="">
           </li>
          
         </ul>
     </div>
    </div>
  <Foot></Foot>
  </div>
  
</template>

<script>
// @ is an alias to /src
import {mapMutations,mapState} from "vuex";
import Foot from "@/components/Foot.vue"



export default {
  name: 'home',
  data(){
        return{
           value:"",
           tabPosition: 'left',
        }
    },
  components: {
  Foot,
  }, 
  computed: {
          ...mapState(['searchShow'])
    },
  methods: {
     ...mapMutations(['changeSearch']),
     onSearch(){
          console.log(this.value)
     },
      
  },
  mounted() {
    this.changeSearch(true);

  },
}
</script>

<style  scoped >
.home{
  width:100%;
  height: 100%;
  background: #F5F6FA;
}
#topSearch{
  width: 245px !important;
  height:28px;
  
}
 .van-search {
 width: 3.43;
 
} 
.van-search__action {
    padding: 0 0.14rem;
    color: #323233;
    font-size: 14px;
    line-height: 34px;
}
#search{
  width: 0.21rem;
  margin-left: 0.30rem;
  height: 0.26rem;
}
.bg_banner{
  width: 100%;
    height: 1.46rem;
  background: white;
  overflow: hidden;
}
.banner{
  border-radius: 0.15rem;
  /* border: 1px solid; */
  width: 3.43rem;
  height: 1.36rem;
  margin: auto;
  margin-top: 0.1rem;
  overflow: hidden;
}
.banner .van-swipe-item{
   width: 3.43rem;
  height: 1.36rem !important;
  text-align: center;
}
 .banner .bannerImg{
   width: 100%;
   height: 1.55rem;
 }
.banner .van-swipe /deep/ .van-swipe__indicators .van-swipe__indicator--active{
 width: 0.2rem ;
 border-radius: 0.06rem;
}

.mainContent{
  width: 100%;
  background: #F5F6FA;

}
.ban-list{
  width:  3.43rem;
   height: 1.04rem;
  overflow: hidden;
  margin: auto;
}
.ban-list-ul{
  width:  3.43rem;
  height: 1.04rem;
}
.ban-list-ul li{
  width: 20%;
  float: left;
  margin-top: 0.3rem;
  /* margin-right: 0.2rem; */
  text-align: center;
  font-size: 0.13rem;
}
.ban-list-ul li .yuan{
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin: auto;
}
.ban-list-ul li:last-child{
  margin-right: 0rem;

}
.advertise{
  margin: auto;
  
}
.advertise img{
 margin: auto;
 width:  3.43rem;
 height: 1.2rem;
}
.content-bottom{
 width:  3.43rem;
 height: 2.7rem;
 margin: auto;
 margin-bottom: 0.83rem;
}
.content-bottom .content-bottom-ul li{
  width: 1.66rem;
  height: 0.9rem;
  float: left;
  box-sizing: border-box;
  margin-top: 0.05rem;
  border-radius: 0.1rem;
  background: white;
  margin-left: 0.11rem;
}
.content-bottom .content-bottom-ul li:first-child{
   width: 1.66rem;
  height: 1.85rem;
   margin-left: 0rem;
   background: #FFE3CE;
   border-radius: 0.12rem;
   position: relative;
}
.content-bottom .content-bottom-ul li .hot{
  width: 0.6rem;
  height: 0.22rem;
 position: absolute;
 top: 0;
 right: 0;
}
.content-bottom .content-bottom-ul li .remen{
  margin-top: 0.15rem;
  margin-left: 0.3rem;
  width: 1.09rem;
  height: 1.09rem;
}
.content-bottom .content-bottom-ul li .youxuan,.content-bottom .content-bottom-ul li .song{
  float: right;
  margin-top: -0.3rem;
  margin-right: 0.15rem;
  width: 0.6rem;
  height: 0.6rem;
}
.content-bottom .content-bottom-ul li:nth-child(2){
  background: #CFEBFF;
}
.content-bottom .content-bottom-ul li:nth-child(3){
  background:#FFD7EC;
}
.content-bottom-ul::after{
    content:" ";
    display:block;
    clear:both;
    height:0; 
    overflow:hidden; visibility:hidden; 
}
.content-bottom .content-bottom-ul li .strong{
  /* width:0.6rem; */
  height: 0.15rem;
   margin-left: 0.115rem;
   font-weight: bold;
   font-size: 14px;
   /* font-family:"宋体"; */
   font-family: "PingFangSC-Semibold";
   color: #323334;
   line-height: 0.15rem;
   margin-top: 0.21rem;
}
.content-bottom .content-bottom-ul li .small{
  margin-left: 0.115rem;
  margin-top: 0.05rem;
  height: 0.1rem;
  font-size: 0.09rem;
  color: grey;
  font-family: "PingFangSC-Regular";
}

.content-bottom .content-bottom-ul li .look{
  border: 0;
  outline: 0;
  display: block;
  /* height: 0.2rem; */
  margin-top: 0.2rem;
  line-height: 0.2rem;
  border-radius: 0.06rem;
  /* width: 0.5rem; */
  font-size: 0.08rem;
-webkit-text-size-adjust:none;
-webkit-transform: scale(0.80);
 margin-left: 0.06rem;
}
.content-bottom .content-bottom-ul li .look-first{
background-color: #20C8B6;
color: #0DD6C2;


}
.content-bottom .content-bottom-ul li .look-second{
  background-color: #FC5451;
  color: #D5221E;
}
.content-bottom .content-bottom-ul li .look-third{
  background-color: #20C8B6;
  color: #23C478;
}
.content-bottom .content-bottom-ul li .look-fourth{
  background-color: #FDD130;
  color: #E4BA1C;
}
</style>
