<template>
    <div class="myorder">
        <Head></Head>
         <van-tabs v-model="active">
          <van-tab title="全部">
    <div class="bg-content" v-for="(item , i) in listsearch" :key="i">
         <div class="content" >
              <div class="store">
                    <img src="../assets/image/dianpu.png" alt="" class="store-img">
                    <span class="storename">{佳佳手机专营店}</span>
                    <img src="../assets/image/more.png" alt="" class="more">
                     <span class="state">交易成功</span>
             </div>
             <div class="goods-desc">
                      <img src="" alt="">
                     <div class="goods-right">
                         <p class="goods-name">Apple Iphone x11(A2322) 128Gb 黑色 移动联通电信4G手机 双卡双待</p>
                         <div class="goods-model">
                            <span v-bind="color">{{color}} </span>
                            <span>{规格：256GB}</span>
                            
                         </div>
                         <div>
                         <p class="goods-price" >
                           ￥<span :style="{'font-size':'0.18rem'}">9.99</span> 
                         </p>
                         <p class="goods-number">×200</p>
                         </div>
                     </div>
             </div> 
             <div class="total">
                  <span class="total-number">共200件</span>
                  <span class="xiaoji"> 小计：<span :style="{color:'#B3381D'}">￥</span>
                  <span :style="{color:'#B3381D','font-size':'0.17rem'}">999.00</span> </span>
             </div>
             <div class="operate">
            <button class="comment">评论</button>
            <button class="buyonce">再次购买</button>
               <!-- <button class="pay">去支付</button> -->
             </div>
             </div>
             
              </div>
    </van-tab>
  <van-tab title="待付款">内容 2</van-tab>
  <van-tab title="待收货">内容 3</van-tab>
  <van-tab title="已完成">内容 3</van-tab>
</van-tabs>
  
        
              
    </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
import Head from "@/components/Head.vue";
export default {
       
  data(){
        return{
            active:0,
            color:'黑色',
            listsearch: [],
        }
    },
    created() {
        
    },
     components: {
     Head,
    },
      methods: {
         ...mapMutations(['changeSearch']),
    },
    computed: {
         ...mapState(['searchShow']),
    },
    mounted() {
         this.changeSearch(true);
         this.$axios.post("/order/listSearch",{
             showType:"",
             page: 1,
             limit:100,
             sort:"update_time",
             order:"desc",
         }).then(res=>{
           
             this.listsearch=res.data.data.list;
               console.log( this.listsearch)
         })
    },
}
</script>

<style  scoped>
.myorder{
    width: 100%;
    height: auto;
    background: #F5F6FA;
}
.myorder::after{
    content:" ";
    display:block;
    clear:both;
    height:0; 
    overflow:hidden; 
    visibility:hidden; 
}
.van-tabs {
  height: 0.55rem;
    background: white;
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
    background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: linear-gradient(to left, #D50000, #FD9A28) !important;
}
 .van-tabs /deep/ .van-tab--active{
   color: #007BFF;
}
.van-tabs /deep/ .van-tabs__wrap{
   margin-left: 0;
   width: 100%;
}
.bg-content{
       width: 100%;
       background: white;
       margin-top: 0.12rem;
       border-radius: 0.2rem;
       overflow: hidden;
       margin-top: 0.2rem;
   }
   .content{
       width: 3.43rem;
       height: 2.55rem;
       margin: auto;
       overflow: hidden;
   }
   .content .goods-desc{
       width: 100%;
       height: 0.9rem;
       margin-top: 0.24rem;
   }
   .content .goods-desc img{
       width: 0.63rem;
       height: 0.88rem;
       border: 1px solid;
       float: left;
   }
   .content .goods-desc .goods-right{
       width: 2.51rem;
       height: 0.9rem;
       float: right;
       margin-left: 0.13rem;
   }
   .content .goods-desc .goods-name{
       font-size: 0.14rem;
       font-weight: bold;
       line-height: 0.23rem;
       margin-top: -0.04rem;
   }
   .content .goods-desc .goods-model span{
       font-size: 0.12rem;
       color: #C7C7C7;
       margin-left: 0.3rem;
   }
   .content .goods-desc .goods-model span:first-child{
          margin-left: 0;
   }
    .content .goods-desc .goods-right .goods-price{
        font-size: 0.13rem;
        font-weight: bold;
        color: #B3381D;
        margin-top: 0.06rem;
        float: left;
    }
     .content .goods-desc .goods-right .goods-number{
            float: right;
            margin-top: 0.14rem;
            color: #C7C7C7;
            font-size: 0.12rem;
     }
    .content .store{
        height: 0.2rem;
        margin-top: 0.2rem;  
    }
    .content .store .store-img{
            width: 0.15rem;
            height: 0.15rem;
            float: left; 
            margin-top: 0.02rem;
        }
    .content .store .storename{
            float: left;
            font-size: 0.13rem;
             margin-left: 0.1rem;
        }
    .content .store .more{
           float: left;
           width: 0.075rem;
           height: 0.12rem;
           margin-left: 0.08rem;
           margin-top: 0.05rem;
         }
    .content .store .state{
        float: right;
        font-size: 0.13rem;
        color: #007BFF;
    }
    .total{
        margin-top:  0.16rem;
    }
    .total .total-number{
        margin-left: 45%;
        color: #C7C7C7;
        font-size: 0.12rem;
    }
    .total .xiaoji{
        margin-left: 0.1rem;
        font-size: 0.13rem;
        font-weight: bold;
    }
     .content .operate{
         margin-top: 0.25rem;
     }
    .content .operate button{
        box-sizing: border-box;
        outline: none;
        border: 1px solid grey;
        background: white;
        color: #5E6165;
        height: 0.26rem;
        line-height: 0.22rem;
        font-size: 0.13rem;
        border-radius: 0.13rem;
        padding-left: 0.1rem;
        padding-right: 0.1rem;
        float: left;
    }
 .content .operate .comment{
     margin-left: 2rem;
 }
 .content .operate .buyonce{
    float: right;
 }
 .content .operate .pay{
     float: right;
     color:  #007BFF;
     border: 1px solid  #007BFF;

 }

</style>