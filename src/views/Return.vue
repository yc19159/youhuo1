<template>
    <div>
  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
   >
        <div :style="{background:'#F5F6FA'}">
    <div class="bg-content" v-for="(item , i) in allSearch" :key="i" ref="content">
         <div class="content" v-if="item.goodsList">
              <div class="store">
                  <router-link :to="{name:'dianpu', params:{shopId:item.goodsList[0].shopId}}">
                    <img src="../assets/image/dianpu.png" alt="" class="store-img">
                    <span class="storename">{{item.goodsList[0].shopName}}</span>
                    <img src="../assets/image/more.png" alt="" class="more">
                  </router-link>
                     <span class="state">{{item.orderStatusText}}</span>
             </div>
             <div class="goods-desc" >
                    <router-link  :to="{name:'good',params:{goodId:item.goodsList[0].id}}">
                      <img :src="item.goodsList[0].picUrl" alt="">
                    </router-link>
                    <router-link :to="{name:'dindan',params:{orderId:item.id}}">
                     <div class="goods-right">
                         <p class="goods-name">{{item.goodsList[0].goodsName}}</p>
                         <div class="goods-model">
                            <span v-bind:color="color">{{color}} </span>
                            <span>{规格：256GB}</span>
                         </div>
                         <div>
                         <p class="goods-price" >
                           ￥<span :style="{'font-size':'0.18rem'}">{{item.actualPrice.toFixed(2)}}</span> 
                         </p>
                         <p class="goods-number">×{{item.goodsList[0].number}}</p>
                         </div>
                     </div>
                    </router-link>
             </div> 
             <div class="total">
                  <span class="total-number">共{{item.goodsList[0].number}}件</span>
                  <span class="xiaoji"> 小计：<span :style="{color:'#B3381D'}">￥</span>
                  <span :style="{color:'#B3381D','font-size':'0.17rem'}">{{(item.actualPrice*item.goodsList[0].number).toFixed(2)}}</span> </span>
             </div>
             <div class="operate" v-if="item.goodsList[0]">  
                       <router-link v-if="item.orderStatusText=='待付款'" :to="{name: 'waitforpay',params:{orderId:item.id}}" >
                     <button  class="buyonce">前往付款</button>
                     </router-link>
                   <router-link v-else :to="{name:'good',params:{goodId:item.goodsList[0].id}}">
                     <button class="buyonce"  v-if="item.orderStatusText=='待收货'||item.orderStatusText=='租用中'||
                    item.orderStatusText=='待结算'|| item.orderStatusText=='已完成'||item.orderStatusText=='已取消'||item.orderStatusText=='已取消(系统)'">再次购买</button>
                   </router-link>
                     <router-link :to="{name:'return',params:{orderId:item.id}}">
                     <button v-if="item.orderStatusText=='租用中'||item.orderStatusText=='待结算'||item.orderStatusText=='已逾期'" class="return">归还</button>
                     </router-link >
                     <router-link :to="{name:'comment',params:{goodId:item.goodsList[0].id}}">
                      <button class="comment" v-if="item.orderStatusText=='已完成'">评论</button>
                     </router-link >
                     <button class="delete" v-if="item.orderStatusText=='已完成'||item.orderStatusText=='已取消(系统)'||item.orderStatusText=='已取消'" @click="del(i)">删除</button>
                     <button class="cancel" v-if="item.orderStatusText=='待付款'"  @click="onCancel(i)">取消</button>
                      <button class="confirmReceipt" v-if="item.orderStatusText=='待收货'"  @click="onCancel(i)">确认收货</button>
                     
               <!-- <button class="pay">去支付</button> -->
             </div>
             </div>
             
    </div>
</div>
</van-list>
  <audio src="" controls></audio>
    </div>
</template>

<script>
export default {
    data() {
        return {
            color:'',
            listsearch:[],
            allSearch:[],
            loading: false,
            finished: false,
            count:0,
            pages:0,
            data:[],
        }
    },
    methods: {
        onLoad() {
      // 异步更新数据
         this.$axios.post("/order/list",{
             showType:this.showType,
             page: this.count+1,
             limit:10,
             sort:"update_time",
             order:"desc",
         }).then(res=>{
             console.log(res)
             this.pages=res.data.data.pages;
            this.allSearch=this.allSearch.concat(res.data.data.list)
            //  this.allSearch=res.data.data.list.slice(0,2);
               this.count=this.count+1;
                // 加载状态结s
               this.loading = false;
               
                 // 数据全部加载完成
                if (this.count >= this.pages){
                     this.finished = true;
                   }
         });
         
      }
    },
    mounted() {
       this.data.concat([1,2])
       console.log(this.data);
        this.$axios.post("/order/list",{
             showType:this.showType,
             page:5,
             limit:10,
             sort:"update_time",
             order:"desc",
         }).then(res=>{
  console.log(res)
           })  
    },
}
</script>

<style  scoped>
 .bg-content{
       width: 100%;
       background: white;
       margin-top: 0.12rem;
       border-radius: 0.2rem;
       overflow: hidden;
       /* margin-top: 0.2rem; */
       overflow: hidden;
   }
   .content{
       width: 3.43rem;
       height: auto;
       margin: auto;
       overflow: hidden;
   }
   .content .goods-desc{
       width: 100%;
       margin-top: 0.24rem;
   }
   .content .goods-desc::after{
              content:" ";
              display:block;
              clear:both;
              height:0; 
              overflow:hidden; visibility:hidden; 
   }
   .content .goods-desc img{
       width: 0.8rem;
       height: 1rem;
       position: absolute;
   }
   .content .goods-desc .goods-right{
       width: 2.51rem;
       /* height: 0.9rem; */
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
            color: black;
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
        color: #EB5516;
    }
    .total{
        margin-top:  0.1rem;
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
        float: right;
    }
     .content .operate{
         margin-top: 0.25rem;
         height: 0.26rem;
         margin-bottom: 0.6rem;
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
        margin-left: 0.1rem;
        float: right;
    }
</style>