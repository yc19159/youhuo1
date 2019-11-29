<template>
<div class="main">
    <div class="bg-top">
        <div class="top">
      <Head></Head>
      <div class="wait-pay">
           <img src="../assets/image/wait_clock.png" alt="" class="clock">
           <p class="wiat-forpay">等待付款</p>
      </div>
         <div class="top-third">
             <!-- <span class="needpay">需付款：￥{{orderInfo.goodsPrice.toFixed(2)}}</span> -->
              <!-- <span class="havetime">剩余时间：XX小时XX分钟</span> -->
         </div>
       </div>  
       
    </div>
    <div class="bg-address">
        <div class="address">
            <div class="user-information">
               <img src="../assets/image/jiesuan_dingwei.png" alt="">
               <span class="username">{{orderInfo.consignee}}</span>
               <span class="usetel">{{orderInfo.mobile}}</span>
            </div>
           <div class="address-detail">
               <p >{{orderInfo.address}}</p>
           </div>
             <span class="sp1">收货不便时，可免费选择暂存服务</span>
           </div>
       </div>
           <div class="bg-content">
         <div class="content">
             <div class="store">
                 <router-link :to="{name:'dianpu',params:{shopId: orderGoods.shopId}}">
                    <img src="../assets/image/dianpu.png" alt="" class="store-img">
                    <span class="storename">1{{orderGoods.shopName}}</span>
                    <img src="../assets/image/more.png" alt="" class="more">
                </router-link>
             </div>
             <div class="goods-desc">
                 <router-link :to="{name:'good',params:{goodId:orderGoods.goodsId}}">
                      <img :src="orderGoods.picUrl" alt="">
                 </router-link>    
                     <div class="goods-right">
                         <p class="goods-name">{{orderGoods.goodsName}}</p>
                         <div class="goods-model">
                            <span >{{specification[0]}} </span>
                            <span v-if='specification.length>2'>{{specification[1]}}</span>
                            
                         </div> 
                         <div>
                         <p class="goods-price" >
                           ￥<span :style="{'font-size':'0.18rem'}">{{orderGoods.price.toFixed(2)}}</span> 
                         </p>
                         <p class="goods-number">×{{orderGoods.number}}</p>
                         </div>
                     </div> 
             </div>
            <div class="carrier">
                 <span class="carrier-p">运费</span>
                 <span class="carrier-arrive">到付</span>
             </div>
              <div class="daoqimd">
                 <span class="carrier-p maiduan">到期买断金额</span>
                 <span class="carrier-arrive">￥{19.00}</span>
             </div>
              <!-- <div class="yunxian">
                 <span class="carrier-p sp3">运险费</span>
                 <span class="return">退换货可赔付</span>
                 <img src="../assets/image/jiesuan_choose.png" alt="" class="chooseImg"> 
                 <span class="carrier-arrive">￥10.00</span>
             </div> -->
              <div class="liuyan">
                 <span class="carrier-p sp4">订单留言</span>
                <input type="text" class="dd-liuyan" placeholder="选填，建议请先和商家协商一致"> 
             </div>
             <div class="total">
                  <span class="total-number">共{{orderGoods.number}}件 </span>
                  <span class="xiaoji"> 小计：<span 
                  :style="{color:'#B3381D'}">￥</span>
                  <span :style="{color:'#B3381D','font-size':'0.17rem'}">{{orderInfo.goodsPrice.toFixed(2)}}</span> </span>
             </div>
         </div>
     </div>
     <div class="foot">
         <button class="cancel" @click="cancel">取消订单</button>
         <button class="tijiao" @click="paryRightaway">立即付款</button>
     </div>
     
    </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";
import Head from "@/components/Head.vue";
import { Dialog } from 'vant';

export default {
    
  data(){
        return{
            orderGoods:[],
            orderInfo:{},
            specification: '',
        }
    },
    components: {
     Head,
    },
    methods: {
         ...mapMutations(['changeSearch']),
         cancel(){
             Dialog.confirm({
       
              message: '确认取消？'
              }).then(() => {
            this.$axios.post('order/cancel',{
                orderId:this.$route.params.orderId,
            }).then(res=>{
                console.log(res)
                if(res.data.errno==0){
                this.$router.push({name:'good',params:{goodId:this.orderGoods.goodsId}})
                }else{
                     Dialog({message:'删除失败'})
                }
            })
             console.log(confirm)
             }).catch(() => {
             // on cancel
             console.log('cancel')
             });
            
         },
         paryRightaway(){
             
         }
    },
    computed: {
         ...mapState(['searchShow']),
    },
    mounted() {
         this.changeSearch(false);
         this.$axios.post('/order/detail',{
             orderId: this.$route.params.orderId,
         }).then(res=>{
             console.log(res)
             this.orderGoods=res.data.data.orderGoods[0];
             console.log(this.orderGoods)
             this.orderInfo=res.data.data.orderInfo
             this.specification=res.data.data.orderGoods[0].specifications
         })
    },
}
</script>

<style lang="scss"  scoped>
.main{
    background: #F5F6FA;
    width: 100%;
    height: 7.57rem;
}
.head{
    background:rgba(0,0,0,0);;
}
 .bg-top{
    width: 100%;
    background: url("../assets/image/wait_bg.png") 0 0 no-repeat;
    background-size: 100% 100%;
    height: 2.2rem;
    color: white;
    overflow: hidden;
}
.wait-pay{
    width: 1.2rem;
    height: 0.22rem;
    margin: auto;
    margin-top: 0.22rem;
 .clock{
    width: 0.37rem;
    height: 0.37rem;
    margin-left: 30%;
    }
    .wiat-forpay{
        margin-left: 0.13rem;
        font-size: 0.19rem;
        height: 0.2rem;
        line-height: 0.2rem;
        margin-top: 0.16rem;
    }
}
.top-third{
margin-top: 0.6rem;
font-size: 0.13rem;
margin-left: 0.43rem;
.needpay{
    margin-left: 0.25rem;
}
}
.bg-address{
   width: 100%;
   height: 1.09rem;
   background: white;
   border-radius: 0.2rem;
   margin-top: -0.2rem;
   overflow: hidden;
   .address{
       width: 3.43rem;
       margin: auto;
       .user-information{
           margin-top: 0.2rem;
           height: 0.2rem;
           img{
               width: 0.2rem;
               height: 0.22rem;
               float: left;
               margin-top: 0.23rem;
           }
           .username{
               font-size: 0.16rem;
               font-weight: bold;
               margin-left: 0.2rem;
               float: left;
           }
           .usetel{
               margin-left: 0.12rem;
               font-size: 0.12rem;
               color: #5E6165;
               float: left;
               line-height: 0.22rem;
           }
       }
       .address-detail{
          margin-top: 0.05rem;
          margin-left: 0.1rem;
          p{
              font-size: 0.13rem;
              margin-left: 0.28rem;
              color: #5E6165;
          }
       }
   }
}
 .bg-content{
       height: 4.35rem;
       width: 100%;
       background: white;
       margin-top: 0.12rem;
       border-radius: 0.2rem;
       overflow: hidden;
         margin-bottom: 0.7rem;
   }
   .content{
       width: 3.43rem;
       height: 4.35rem;
       margin: auto;
       overflow: hidden;
     
   }
   .content .goods-desc{
       width: 100%;
       height: 0.9rem;
       margin-top: 0.24rem;
   }
   .content .goods-desc img{
       width: 0.8rem;
       height: 0.88rem;
       float: left;
   }
   .content .goods-desc .goods-right{
       width: 2.41rem;
       height: 0.9rem;
       float: right;
       margin-left: 0.13rem;
   }
   .content .goods-desc .goods-name{
       font-size: 0.14rem;
       font-weight: bold;
       line-height: 0.23rem;
       margin-top: -0.04rem;
       color: black;
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
     .carrier{
         margin-top: 0.46rem;
          height: 0.15rem;
     }
      .carrier-p{
         font-size: 0.13rem;
         font-weight: bold;
         float: left;
         line-height: 0.15rem;
         margin-left: 0.5rem;
     }
     .maiduan{
         margin-left: 0rem;
     }
     .sp3{
          margin-left: 0.4rem;
     }
     .sp4{
         margin-left: 0.29rem;
     }
     .yunxian .return{
      font-size: 0.12rem;
      margin-left: 0.12rem;
      color: #C7C7C7;
      margin-top: 0;
      float: left;
     }
     .yunxian .chooseImg{
         float: right;
         margin-left: 0.08rem;
         width: 0.15rem;
         height: 0.15rem;
     }
      .carrier-arrive{
         font-size: 0.12rem;
         color: #2F3031;
         float: right; 
         line-height: 0.15rem;
     }
     .daoqimd , .yunxian , .liuyan{
          margin-top: 0.3rem;
          height: 0.26rem;
     }
    .liuyan .dd-liuyan{
         outline: none;
         border: none;
         float: left;
         margin-left: 0.2rem;
         font-size: 0.14rem;
         color: black;
          margin-top: -0.02rem;
    }
    .dd-liuyan::-webkit-input-placeholder {
    color: #C7C7C7;
    font-size: 0.12rem;
    }
    .total{
        margin-top:  0.16rem;
    }
    .total .total-number{
        margin-left: 1.62rem;
        color: #C7C7C7;
        font-size: 0.12rem;
    }
    .total .xiaoji{
        // margin-left: 0.14rem;
        float: right;
        font-size: 0.13rem;
        font-weight: bold;
    }
    .content .store{
        height: 0.2rem;
        margin-top: 0.2rem;
        .store-img{
            width: 0.15rem;
            height: 0.15rem;
            float: left; 
            margin-top: 0.02rem;
        }
        .storename{
            float: left;
            font-size: 0.13rem;
            margin-left: 0.1rem;
            color:black;
        }
        .more{
            float: left;
            margin-top: 0.05rem;
            margin-left: 0.08rem;
        }
    }
    .foot{
      width: 100%;
      height: 0.56rem;
      background: white;
      position: fixed;
      bottom: 0;
      button{
          width: 1.35rem;
          height: 0.4rem;
          border-radius: 0.2rem;
          border: none;
          outline: none;
          margin-top: 0.09rem;
      }
      .cancel{
         background: white;
          margin-left: 0.58rem;
        border: 1px solid gray;
      }
      .tijiao{
          background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
          background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
          background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
          background: linear-gradient(to left, #D50000, #FD9A28) !important;
         margin-left: 0.3rem;
      }
    }
    .sp1{
      color: #FD9828;
      font-size: 0.12rem;
      padding: 0.03rem;
      float: left;
      padding-top: 0.03rem;
      margin-left: 0.14rem;
      margin-top: 0.03rem;
  }
</style>