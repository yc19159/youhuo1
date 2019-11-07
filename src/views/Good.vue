<template>
    <div class="main">
         <Head></Head>
         <div class="item">
            <img 
           :src="1"
            alt="" class="item-img">
        </div>
       <div class="descript">
          <div class="descript-content">
               <div class="item-price">
                 <span class="price-span">￥<span :style="{'font-size':'0.2rem'}">{9.99}</span>/天</span>   
                 <span class="quanxin" :style="{color:'white','font-size':'0.13rem','line-height':'0.16rem',height:'0.16rem',
          'margin-left':'0.12rem','border-radius':'0.02rem',width:'0.32rem',
          'text-align':'center','margin-top':'0.05rem','font-weight':'normal',display:'block',float:'left'}" >全新</span>
           <span class="halfyear"> 半年起租</span>
               </div>
               <p class="item-phone">Apple Iphone x11(A2322) 128Gb 黑色 移动联通电信4G手机 双卡双待</p>
               <div class="sell">
                 <p class="sell-number">
                   销量：XXX件
                 </p>
                 <p class="heiger-yajin">
                   最高押金：￥5000
                 </p>
               </div>
               <div class="openMember">
                <span class="sp-first">开通会员下单预计可得 <span class="orange">200</span> 积分</span>
                <img src="../assets/image/more.png" class="more" alt="">
                <span class="sp-third">立即开通</span>
                
               </div>
               <div class="descript-bottom">
                 <img src="../assets/image/good_gou.png" class="gouImg" alt="">
                 <span class="sp1">免押金</span>
                 <img src="../assets/image/good_gou.png" class="gouImg gouImg2" alt="">
                 <span class="sp2">可续租</span>
                 <img src="../assets/image/more.png" class="more more2" alt="">
               </div>
          </div>
       </div>
       <div class="descript-sec">
           <div class="descript-sec-content">
                 <div class="descript-sec-taocan">
                   <p :style="{'font-size':'0.14rem','font-family':'NSimSun','font-weight':'bold',
                   width:'0.3rem',float:'left'}">套餐</p>
                   <p :style="{width:'2.9rem',float:'right',height:'0.55rem',
                  'box-sizing':'border-box','border-bottom':'1px solid #F5F6FA',
                  'font-size':'0.13rem',color:'#2F3031'}">{IphoneX s64 全新无锁一年起租起租}
                  <img src="../assets/image/more.png" class="more" alt=""></p>
                  
                 </div>
                 <div class="descript-sec-maiduan">
                 <p :style="{'font-size':'0.14rem','font-family':'NSimSun','font-weight':'bold',
                   width:'0.75rem',float:'left'}">
                   买断规则
                 </p>
                 <p :style="{width:'2.55rem',float:'right',height:'0.55rem',
                  'box-sizing':'border-box','border-bottom':'1px solid #F5F6FA',
                  'font-size':'0.13rem',color:'#2F3031'}">可<span :style="{color:'#D13717',
                  'font-size':'0.14rem'}"> ￥7999.00 </span>买断
                   <img src="../assets/image/more.png" class="more" alt=""></p>
                 </div>
           </div>
       </div>
        <div class="descript-third">
           <div class="descript-third-content">
                 <div class="descript-third-choose">
                   <p :style="{'font-size':'0.14rem','font-family':'NSimSun','font-weight':'bold',
                   width:'0.3rem',float:'left'}">选择</p>
                   <p :style="{width:'2.9rem',float:'right',height:'0.53rem',
                  'box-sizing':'border-box','border-bottom':'1px solid #F5F6FA',
                  'font-size':'0.13rem',color:'#2F3031'}">{IphoneX s64 全新无锁一年起租起租}
                  <img src="../assets/image/more.png" class="more" alt=""></p>
                  
                 </div>
                 <div class="descript-third-canshu">
                 <p :style="{'font-size':'0.14rem','font-family':'NSimSun','font-weight':'bold',
                   width:'0.3rem',float:'left'}">
                   参数
                 </p>
                 <p :style="{width:'2.9rem',float:'right',height:'0.53rem',
                  'box-sizing':'border-box','border-bottom':'1px solid #F5F6FA',
                  'font-size':'0.13rem',color:'#2F3031'}">可<span :style="{color:'#D13717',
                  'font-size':'0.14rem'}"> ￥7999.00 </span>买断
                   <img src="../assets/image/more.png" class="more" alt=""></p>
                 </div>
           </div>
       </div>
       <div class="bg_bottom">
          <div class="bottom">
            <p class="bottom-title">商品详情</p>
            <img src="../assets/image/good_zhouqi.png" alt="">
             <img src="../assets/image/good_liucheng.png" alt="">
              <img src="../assets/image/good_xuzu.png" alt="">
               <img src="../assets/image/good_maiduan.png" alt="">
                <img src="../assets/image/good_guihuan.png" alt="">
          </div>
       </div>
 
        <van-goods-action >
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-icon icon="chat-o" text="客服"  />
  <van-goods-action-icon icon="star-o" text="收藏"  />

  <van-goods-action-button type="danger" text="立即租"   @click="paynow" />
</van-goods-action>


    <div class="goods-right-picker">
       <div class="detail">
          <div class="detail-content">
            <div class="d-content-top">
                  <img src="" alt="">
                    <span class="price-span">￥<span :style="{'font-size':'0.2rem'}">{9.99}</span>/天</span>   
                 <span class="quanxin" :style="{color:'white','font-size':'0.13rem','line-height':'0.16rem',height:'0.16rem',
          'margin-left':'0.12rem','border-radius':'0.02rem',width:'0.32rem',
          'text-align':'center','margin-top':'0.05rem','font-weight':'normal',display:'block',float:'left'
        ,'margin-top':'0.75rem'}">全新</span>
            </div>
            <div class="d-content-color">
                <p>颜色</p>
                <ul>
                  <li class="color-li">蓝色</li> 
                  <li class="color-li">黑色</li>
                  <li class="color-li">金色</li>
                  <li class="color-li">红色</li>
                  <li class="color-li">珊瑚色</li>
                </ul>
            </div>
              <div class="d-content-spec">
                <p>规格</p>
                <ul>
                  <li class="spec-li">64GB</li> 
                  <li class="spec-li">128GB</li>
                  <li class="spec-li">256GB</li>
               
                </ul>
            </div>
              <div class="d-content-day">
                <p>租用天数</p>
                <ul>
                  <li class="day-li">半年</li> 
                  <li class="day-li">一年</li>
                  <li class="day-li">两年</li>
               
                </ul>
            </div>
            <div class="d-content-from">
                <p>起租日期</p>
                <ul>
                  <li class="from-li">半年</li> 
                  <li class="from-li">一年</li>
                  <li class="from-li">两年</li>
               
                </ul>
            </div>
             <div class="d-content-num">
                <p>数量</p>
                <van-stepper v-model="value" />
            </div>
             <div class="d-content-sure" @click="confirm">
               确定
            </div>
          </div>
       </div>
    </div>
   
    </div>

</template>

<script>
// console.log(sessionStorage.username)
import Head from '@/components/Head.vue'
import {mapState,mapMutations} from "vuex"
var username=sessionStorage.username;
export default {
    data(){
        return{
            value:1,
            show:true,
            detail:{},
            flag:false,
            count:1,
            total:0,
            num:5,
            
 
        }
    },
    components:{
       Head,
    },
    computed: {
      ...mapState(['searchShow']),
    },
    methods: {
        ...mapMutations(['changeSearch']),
      
        close(){
   document.getElementsByClassName('goods-right-picker')[0].style.display="none";
        },
         confirm(){
            //  console.log(this.value)
              var count=this.value
              
              document.getElementsByClassName('goods-right-picker')[0].style.display="none"; 
        //        this.$axios.post("/vue/addShopCar",{
        //        username: sessionStorage.username,
        //        goodId:this.$route.params.goodId,
        //        count:count,
        //        goodname:this.detail.goods_name,
        //        goodimg: this.detail.thumb_url,
        //        goodprice: this.detail.normal_price/100
        // }).then(res=>{
        //     this.total+=this.count
             this.$router.push({name:"jiesuan"})    
        // })
          },
          gotocart(){
            this.$router.push({name:"cart"})
           
          },
 
        paynow(){
          // location.href="https://chat.mqimg.com/dist/standalone.html?eid=173987&agentid=81117ee5efcbf5936481c8fae1d02bfd"
          console.log(this.$route.params)
          // if(username){
   document.getElementsByClassName('goods-right-picker')[0].style.display="block";
          // }else{
          //   this.$router.push({name: "login"})
          // }
        },
        confirmbuy(){
          sessionStorage.count=this.value;
            // this.$router.push({name:"pay"})
            sessionStorage.goodId=this.$route.params.goodId;
       this.$router.push({name:"jiesuan"})
        }
    },
    mounted(){
//        this.changeSearch(false);
//        document.onclick=function(e){
//        var event=e||event;
//        var target=event.targrt||event.srcElement;
//        if(target.className!=='detail'&&target.className=='goods-right-picker'){
//  document.getElementsByClassName('goods-right-picker')[0].style.display="none"; 
//       }
//        };
     console.log(this.$route.params.goodId)
        this.$axios.get('http://192.168.0.17:8080/wx/goods/detail',{
        params:{id:1017000,
               userId:"123"}
        }).then(res=>{
        console.log(res.data)
        })
  //       this.$axios.post("/vue/getShopcarInfo",{
  //     username:sessionStorage.username,
  // }).then(res=>{
      // this.total = res.data.total;
    //  this.getTotal(res.data.total)
  // })
      
    },
   
}
</script>
<style lang="scss" scoped>
.main{
  width: 100%;
  height:auto;
  background-color: #F5F6FA;
}
.van-search {
  display: none !important;
  box-sizing: border-box;
}
.item{
  width: 100%;
 height: 3.5rem;
 overflow: hidden;
}
.item-img {
 width: 1.92rem;
 height: 2.64rem;
 margin: auto;
margin-top: 0.43rem
}
.descript{
width: 100%;
height: 2.21rem;
background-color: white;
border-radius: 0.2rem;
overflow: hidden;
 }
.descript-content{
width: 3.34rem;
height: 1.95rem;
margin: auto;
margin-top: 0.22rem;
overflow: hidden;
 }
 .item-price{
   height: 0.25rem;
 }
 .item-price .price-span{
   display: block;
   float: left;
    font-size: 0.15rem;
    font-family: 'DIN-Bold';
    color: #B3381D;
    font-weight: bold;
 }
 .item-price .quanxin{
   background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: linear-gradient(to left, #D50000, #FD9A28) !important;
 }
 .item-price .halfyear{
   display: block;
   float: right;
   color: #C7C7C7;
   font-size: 0.12rem;
   line-height: 0.32rem;
 }
 .item-phone{
   margin-top: 0.07rem;
   font-size: 0.15rem;
   line-height: 0.24rem;
   font-family: 'NSimSun';
  //  font-family: '微软雅黑';
   font-weight: bold;
 }
 .sell{
   width: 100%;
    height: 0.2rem;
    margin-top: 0.1rem;
   .sell-number{
     color: #C7C7C7;
     float: left;
     font-size: 0.12rem;
   }
   .heiger-yajin{
      color: #C7C7C7;
     float: right;
     font-size: 0.12rem;
   }
 }

 .openMember{
   width: 100%;
   height: 0.3rem;
   background: #EAF5FD;
   margin-top: 0.1rem;
   border-radius: 0.06rem;
   span{
     font-size: 0.12rem;
     line-height: 0.3rem;
     color: #5E6165;
   }
   .sp-first{
    margin-left: 0.12rem;
   }
   .orange{
     color: #E2A15E;
   }
   .more{
     float: right;

     margin-top: 0.1rem;
     margin-right: 0.1rem;
   }
   .sp-third{
     float: right;
     margin-right: 0.1rem;
    
   }
 }
 .descript-bottom{
   height: 0.12rem;
   margin-top: 0.1rem;
     span{
       float: left;
       font-size: 0.12rem;
       margin-left: 0.05rem;
       color: #C7C7C7;
     }
     .sp2{
       margin-left: 0;
     }
     .gouImg{
       float: left;
       margin-top: 0.04rem;
     }
     .gouImg2{
       margin-left: 0.3rem;
     }
 }
 .more2{
    margin-top: 0.1rem !important;
 }
  .more{
       float: right;
       margin-top: 0.2rem;
     }
 .descript-sec{
   width: 100%;
   height: 1.2rem;
   background-color: white;
   margin-top: 0.12rem;
   border-radius: 0.2rem;
   .descript-sec-content{
   width: 3.34rem;
   height: 1.2rem;
   margin: auto;
   overflow: hidden;
   .descript-sec-taocan{
     width: 100%;
     height: 0.55rem;
     line-height: 0.55rem;
   }
   .descript-sec-maiduan{
      width: 100%;
     height: 0.65rem;
     line-height: 0.65rem;
   }
   }
 }
 .descript-third{
   width: 100%;
   height: 1.06rem;
   background-color: white;
   margin-top: 0.12rem;
  //  margin-bottom: 0.7rem;
   border-radius: 0.2rem;
   .descript-third-content{
   width: 3.34rem;
   height: 1.06rem;
   margin: auto;
   overflow: hidden;
   .descript-third-choose{
     width: 100%;
     height: 0.53rem;
     line-height: 0.53rem;
   }
    .descript-third-canshu{
     width: 100%;
     height: 0.53rem;
     line-height: 0.53rem;
   }
   }
 }
 .van-goods-action-icon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    min-width: 0.65rem;
    height:0.5rem;
    color: #7d7e80;
    font-size:0.1rem;
    line-height: 1;
    text-align: center;
    background-color: #fff;
}
.van-goods-action-button {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 0.5rem;
    font-weight: 500;
    font-size: 0.14rem;
    line-height: 0.5rem;
    border: 0;
    border-radius: 0 !important;
    background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: linear-gradient(to left, #D50000, #FD9A28) !important;
} 

.goods-right-picker {
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 100;
  max-width: 3.75rem;
  background-color: hsla(0, 0%, 43.1%, 0.5);
  .detail{
    width: 100%;
    height: 83%;
    background: white;
    position: relative;
    top: 17%;
    border-radius: 0.2rem 0.2rem 0 0;
    overflow-y:scroll;
    .detail-content{
      width: 3.43rem;
      margin: auto;
      height: auto;
      overflow: hidden;
      .d-content-top{
      margin-top: 0.2rem;
      height: 1rem;
         img{
           width: 0.72rem;
           height: 1rem;
           border: 1px solid;
           float: left;
         }
         .quanxin{
         background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
         background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
         background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
         background: linear-gradient(to left, #D50000, #FD9A28) !important;
         }
    .price-span{
    display: block;
    float: left;
    font-size: 0.15rem;
    font-family: 'DIN-Bold';
    color: #B3381D;
    font-weight: bold;
    margin-top: 0.7rem;
    margin-left: 0.25rem;
    }
    }
      .d-content-color{
        margin-top: 0.2rem;
        height: 1.4rem;
        p{
          font-size: 0.13rem;
          font-weight: bold;
        }
        ul{
          .color-li{
              float: left;
              background: #F5F6FA;
              color: #2F3031;
              height: 0.31rem;
              line-height: 0.31rem;
              padding-left: 0.24rem;
              padding-right: 0.24rem;
              border-radius: 0.155rem;
              font-size: 0.13rem;
              margin-right: 0.15rem;
              margin-top: 0.15rem;
          }
           .color-li:nth-child(4){
             margin-right: 0;
           }
        }
      }
      .d-content-spec{
        height: 0.9rem;
         p{
          font-size: 0.13rem;
          font-weight: bold;
        }
        ul{
          .spec-li{
              float: left;
              background: #F5F6FA;
              color: #2F3031;
              height: 0.31rem;
              line-height: 0.31rem;
              padding-left: 0.24rem;
              padding-right: 0.24rem;
              border-radius: 0.155rem;
              font-size: 0.13rem;
              margin-right: 0.15rem;
              margin-top: 0.15rem;
          }
        }
      }
      .d-content-day{
        height: 0.9rem;
         p{
          font-size: 0.13rem;
          font-weight: bold;
        }
        ul{
          .day-li{
              float: left;
              background: #F5F6FA;
              color: #2F3031;
              height: 0.31rem;
              line-height: 0.31rem;
              padding-left: 0.24rem;
              padding-right: 0.24rem;
              border-radius: 0.155rem;
              font-size: 0.13rem;
              margin-right: 0.15rem;
              margin-top: 0.15rem;
          }
        }
      }
      .d-content-from{
        height: 0.9rem;
         p{
          font-size: 0.13rem;
          font-weight: bold;
        }
        ul{
          .from-li{
              float: left;
              background: #F5F6FA;
              color: #2F3031;
              height: 0.31rem;
              line-height: 0.31rem;
              padding-left: 0.24rem;
              padding-right: 0.24rem;
              border-radius: 0.155rem;
              font-size: 0.13rem;
              margin-right: 0.15rem;
              margin-top: 0.15rem;
          }
        }
      }
       .d-content-num{
        height: 0.5rem;
         p{
          font-size: 0.13rem;
          font-weight: bold;
          float: left;
        }
    .van-stepper {
    font-size: 0;
    width: 1rem;
    -ms-user-select: none;
    user-select: none;
    float: right !important;
//     .van-stepper__input {
//     -webkit-box-sizing: border-box;
//     box-sizing: border-box;
//     width: 0.42rem;
//     height: 0.28rem;
//     margin: 0 2px !important;
//     padding: 0;
//     color: #323233;
//     font-size: 14px;
//     text-align: center;
//     vertical-align: middle;
//     background-color: #f2f3f5;
//     border: 0;
//     border-width: 1px 0;
//     border-radius: 0;
//     -webkit-appearance: none;
// }
    .van-stepper__minus, .van-stepper__plus {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 20px;
    height: 28px;
    margin: 0;
    padding: 5px;
    color: #323233;
    vertical-align: middle;
    background-color: white;
    border: none;
}
.van-stepper__minus--disabled, .van-stepper__plus--disabled {
    color: #c8c9cc;
    background-color: white;
}
 
       }
     
       }
         .d-content-sure{
         width: 3.43rem;
         height: 0.44rem;
         text-align: center;
         line-height: 0.44rem;
          background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
          background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
         background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
         background: linear-gradient(to left, #D50000, #FD9A28) !important;
         border-radius: 0.22rem;
         color: white;
       }
    }
  }
}
 .bg_bottom{
   width: 100%;
   background: white;
   margin-top: 0.12rem;
   margin-bottom: 0.5rem;
 }

  .bottom{
    width: 3.43rem;
    overflow: hidden;
    margin: auto;
  }
  .bottom .bottom-title{
    font-size: 0.13rem;
    color: #EB5516;
    font-weight: bold;
    margin-top: 0.2rem;
    height: 0.14rem;
    line-height: 0.14rem;
    border-left: 3px solid #EB5516;
    padding-left: 0.05rem;
  }
  .bottom img{
    width: 100%;
    margin-top: 0.12rem;
  }

</style>