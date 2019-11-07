<template>
  <div class="search">
       <Head></Head>
       <!-- <input type="text" class=" searchInput" > -->
       <van-tabs v-model="active">
  <van-tab title="价格">
    <div class="price">
      <ul class="glist">
       <li class="glist-item" @click="drawer = true">
          <img src="../assets/image/a.png" class="glist-img"/>
          <p class="phont-type">S 01</p>
           <span class="glist-price"><span :style="{'font-size':'0.14rem','font-weight':'normal'}">￥</span> 9.99 <span :style="{'font-size':'0.14rem','font-weight':'normal'}">/天</span></span> 
          <span :style="{color:'grey','font-size':'0.13rem','margin-left':'0.03rem'}">销量：298</span>
          <p :style="{'font-size':'0.13rem','line-height':'0.16rem',height:'0.16rem',
          'margin-left':'0.12rem','border-radius':'0.02rem',width:'0.32rem',
          'text-align':'center',float:'left','margin-top':'0.1rem'}" class="new">全新</p>
              <p :style="{color:'#269CF0','font-size':'0.13rem','line-height':'0.16rem',height:'0.16rem',
          'margin-left':'0.12rem',border:'1px solid #269CF0','border-radius':'0.02rem',width:'0.44rem',
          'text-align':'center',float:'left','margin-top':'0.1rem'}">免押金</p>
          <p :style="{color:'#FB9F00','font-size':'0.13rem','line-height':'0.16rem',height:'0.16rem',
          'margin-left':'0.12rem',border:'1px solid #FCAC39','border-radius':'0.02rem',width:'0.2rem',
          'text-align':'center',float:'left','margin-top':'0.1rem'}">赠</p> <br/>
          <span class="pay">万人已付款</span> <span class="haoping">99%好评</span>
          <p class="shop">荣耀京东自营旗舰店</p>
          <p class="toshop">进店</p>
          <img src="../assets/image/more.png" alt="" class="more">

        </li>
         <li class="glist-item">
           

         </li>
          <li class="glist-item">
            

          </li>
          <li class="glist-item">
            

          </li>
      </ul>
    </div> 
    </van-tab>
  <van-tab title="销量 ">  <div class="price">
      <ul class="glist">
        <li class="glist-item" @click="drawer = true">
          
        </li>
         <li class="glist-item">
          
         </li>
          <li class="glist-item">
           
          </li>
          <li class="glist-item">
           
          </li>
      </ul>
    </div> </van-tab>
  <van-tab title="筛选">内容 3</van-tab>
 
</van-tabs>
<el-drawer
  title=""
  :visible.sync="drawer"
  :direction="direction"
  
  >
  <div class="alert-content">
      <div class="zujin ">
        <span class="strong-t">租金</span>
        <span class="normal-c">(元/天)</span>
        <div class="between-price ">
              <p class="l-price">最低价</p>
              <p class="crossing"></p>
               <p class="m-price">最高价</p>
        </div>
      </div>
        <div class="days ">
        <span class="strong-t">租用天数</span>
        <span class="normal-c">(元/天)</span>
        <div class="between-price ">
              <p class="small-day">半年</p>
              <p class="middle-day">一年</p>
              <p class="large-day">两年</p>
        </div>
      </div>

       <div class="sendfrom">
        <span class="strong-t">发货地</span>
        <span class="normal-c">(元/天)</span>
        <div class="between-price ">
              <p class="l-price">上海</p>
               <p class="m-price">武汉</p>
        </div>
      </div>
      <div class="makesure">
        <button class="reset">重置</button>
        <button class="sure">确定</button>
      </div>
  </div>
</el-drawer>
 <!-- <ul>
           <li class="glist-item" v-for="(list,keys) in goods " :key="keys">
                <router-link
            :to="{name:'good',params:{goodId:list.goods_id}}">
        
               <img :src="list.thumb_url" alt="">
               <p>{{list.goods_name}}</p>
               <span class="goods-price">￥<span>{{list.group_price/100}}</span></span>
               <span class="goods-mprice">￥<span>{{list.market_price/100}}</span></span>
                </router-link>
            </li>

           
       </ul> -->
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
import Head from "@/components/Head.vue";
export default {
  data(){
    return{
    //  value:'',
    //  goods:[],
     drawer: false,
      direction: 'rtl',
    }
  },
  components:{
  Head,
  },
  methods: {
    ...mapMutations(['changeSearch']),
    onSearch(){
     this.$axios.get('/vue/getGoods',{
       params:{value:this.value}
     }).then(res=>{
      this.goods=res.data.result;
     })
    }
  },
  computed: {
     ...mapState(['searchShow']),
  },
  mounted() {
    this.changeSearch(true);
    document.onclick=function(e){
      var smallDay=document.querySelector('.small-day');
      var middleDay=document.querySelector('.middle-day');
      var largeDay=document.querySelector('.large-day');
      var event=e||event;
      var target=event.targrt||event.srcElement;
      if(target.className==='small-day'){
        target.style.backgroundColor="#C7E8FF";
        target.style.color="#1385FF";
        middleDay.style.backgroundColor="#F5F6FA";
        middleDay.style.color='black';
        largeDay.style.backgroundColor="#F5F6FA";
        largeDay.style.color='black';
      }
       if(target.className==='middle-day'){
        target.style.backgroundColor="#C7E8FF";
        target.style.color="#1385FF";
        smallDay.style.backgroundColor="#F5F6FA";
        smallDay.style.color='black';
        largeDay.style.backgroundColor="#F5F6FA";
        largeDay.style.color='black';
      }
       if(target.className==='large-day'){
        target.style.backgroundColor="#C7E8FF";
        target.style.color="#1385FF";
        middleDay.style.backgroundColor="#F5F6FA";
        middleDay.style.color='black';
        smallDay.style.backgroundColor="#F5F6FA";
        smallDay.style.color='black';
      }
   
    },
    this.$axios.get("http://192.168.0.17:8080/wx/brand/list",{
      params:{
        id:1006002,
        userId: 12 ,
      }
    }).then(res=>{
      console.log(res)
    })
  },
}
</script>

<style  scoped>
.searchInput{
  width: 3.02rem;
  height: 0.32rem;
  border: none;
  outline: none;
  background:#F5F6FA;
  border-radius: 0.16rem;
  margin-left: 0.38rem;
  margin-top: 0.1rem;
}
.van-tabs /deep/ .van-tabs__line {
    position: absolute;
    width: 0.2rem !important;
    bottom: 0.15rem;
    left: 0;
    z-index: 1;
    height: 0.03rem;
    background-color: #f44;
    border-radius: 0.03rem;
    background: -webkit-linear-gradient(to left, #3FE699, #007BFF) !important;
    background: -o-linear-gradient(to left, #3FE699, #007BFF) !important;
    background: -moz-linear-gradient(to left, #3FE699, #007BFF) !important;
    background: linear-gradient(to left, #3FE699, #007BFF) !important;
}
.van-tabs /deep/ .van-tabs__wrap{
   margin-left: 0;
   width: 100%;
}
  .price{
    width: 100%;
    background: #F5F6FA;
    border-radius: 0.2rem;
    margin-top: 0.15rem;
  }
  .glist{
    width: 100%;
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
     width: 1.825rem;
     height: 3.53rem;
     background: white;
     border-radius: 0.16rem;
     float: left;
     margin-top: 0.25rem;
     /* margin-bottom: 0.2rem; */
     overflow: hidden;
  }
  .glist .glist-item:nth-child(2n){
    margin-left: 0.1rem;
  }
  .glist .glist-item .new{
    color: white;
    background: -webkit-linear-gradient(to left, #F06726, #D6242C) !important;
    background: -o-linear-gradient(to left, #F06726, #D6242C) !important;
    background: -moz-linear-gradient(to left, #F06726, #D6242C) !important;
    background: linear-gradient(to left, #F06726, #D6242C) !important;
  }
  .glist .glist-item .pay{
    float: left;
    font-size: 0.12rem;
    color: #C7C7C7;
    line-height: 0.3rem;
    margin-left: 0.16rem;
  }
  .glist .glist-item .shop{
    float: left;
    font-size: 0.12rem;
    color: #C7C7C7;
    margin-left: 0.16rem;
    width: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .glist .glist-item .toshop{
    font-size: 0.12rem;
    font-weight: bold;
    float: left;
  }
  .glist .glist-item .more{
    /* width: 0.08rem;
    height: 0.12rem; */

    float: left;
    margin-left: 0.05rem;
    margin-top: 0.05rem;
  }
  .glist .glist-item .haoping{
    float: left;
    font-size: 0.12rem;
    color: #C7C7C7;
    line-height: 0.3rem;
    margin-left: 0.1rem;
  }
  .glist-img{
       /* border: 1px solid; */
       /* display: block; */
       width: 1.3rem;
       height: 1.7rem;
       margin: auto;
       margin-top: 0.17rem;
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
    font-size: 0.18rem;
    color: #B3381D;
    font-weight: bold;
    margin-left: 0.12rem;

 }
 .el-dialog__wrapper /deep/.el-drawer{
   width: 3.05rem !important;
   height: 93%;
   top: 7%;
   border-radius: 0.2rem 0 0 0.2rem;
 }
 .alert-content{
   width: 2.7rem;
   height: 100%;
   margin-top: 0.24rem;
   margin: auto;
 }
 .alert-content .strong-t{
   font-size: 0.13rem;
   font-weight: bold;
   font-family: "PingFangSC-Semibold";
 }
 .normal-c{
   margin-left: 0.05rem;
    font-size: 0.13rem;
    color: grey;
 }
 .between-price{
  margin-top: 0.15rem;
 }  
.l-price{
   float: left;
   width: 1.2rem;
   height: 0.31rem;
   border-radius: 0.155rem;
   text-align: center;
   line-height: 0.31rem;
   background-color: #F5F6FA;
  
 }
 .crossing{
      width: 0.15rem;
      height: 0.02rem;
      float: left;
      background-color: #000000;
      margin-top: 0.145rem;
      margin-left: 0.07rem; 
      /* margin-right: 0.07rem; */ 
 }
 .m-price{
  float: left;
   width: 1.2rem;
   height: 0.31rem;
   border-radius: 0.155rem;
   text-align: center;
   line-height: 0.31rem;
   background-color: #F5F6FA;
     margin-left: 0.07rem;
 }
 .zujin{
   height: 0.6rem;
   width: 2.7rem;
 }
 .sendfrom{
   margin-top: 0.48rem;
   height: 0.6rem;
   width: 2.7rem;
 }
 .makesure{
   width: 2.7rem;
   height: 0.38rem;
   margin-top: 60%;
 }
 .makesure .reset{
   border: none;
   width: 1.2rem;
   height: 0.38rem;
   border-radius: 0.19rem;
 }
 .makesure .sure{
   border: none;
   margin-left: 0.3rem;
    width: 1.2rem;
    height: 0.38rem;
    border-radius: 0.19rem;
    background: -webkit-linear-gradient(to left, #D50000,#FD9A28) !important;
    background: -o-linear-gradient(to left, #D50000,#FD9A28) !important;
    background: -moz-linear-gradient(to left, #D50000,#FD9A28) !important;
    background: linear-gradient(to left, #D50000,#FD9A28) !important;
 }
 .days{
   margin-top: 0.48rem;
   height: 0.6rem;
   width: 2.7rem;
 }
 .small-day, .middle-day, .large-day{
   width:0.78rem;
   height: 0.31rem;
   line-height: 0.31rem;
   background-color: #F5F6FA;
   float: left;
   margin-left: 0.15rem;
   text-align: center;
   border-radius: 1.55rem;
 }
 .small-day{
    margin-left: 0;
 }
</style>
