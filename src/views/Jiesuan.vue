<template>
    <div class="main-content">
       <Head ></Head> 
       <p class="title">填写订单</p>
       <div class="bg-address">
<div class="address">
    <img src="../assets/image/jiesuan_dingwei.png" alt="" class="position">
    <div :style="{'margin-left':'0.41rem'}">
       
    <div class="address-default">
         <span class="username">小橙子</span> 
        <span class="usertel">18834568888</span>
    </div>
    <div class="address-d" @click="gotoAddressManage">
        <p class="address-detail" v-if="dizhi">{{dizhi.address+dizhi.addressDetail}}</p>
        <p class="address-detail" v-else>请编辑地址</p>
        <img src="../assets/image/more.png" alt="" class="more">
    </div>
     <span class="sp1">收货不便时，可免费选择暂存服务</span>
    </div>
</div>
 </div>
     <div class="bg-content">
         <div class="content">
              <div class="store" v-if="detail.info">
                   <router-link :to="{name:'dianpu',params:{shopId:detail.info.shopId}}">
                    <img src="../assets/image/dianpu.png" alt="" class="store-img">
                    <span class="storename" >{{detail.info.shopName}}</span>
                     <img src="../assets/image/more.png" alt="" class="more">
                     </router-link>
             </div>
             <div class="goods-desc" v-if="detail.info">
                 <!-- v-if="detail.info.picUrl" :src="detail.info.picUrl"  detail.info.name -->
                      <img  alt="" :src="detail.info.picUrl">
                     <div class="goods-right" >
                         <p class="goods-name">{{detail.info.name}}</p>
                         <div class="goods-model">
                            <span >{{color}} </span>
                            <span>{{size}}</span>
                            
                         </div>
                         <div>
                         <p class="goods-price" >
                           ￥<span :style="{'font-size':'0.18rem'}">{{(price*1).toFixed(2)}}</span> 
                         </p>
                         <p class="goods-number">×{{count}}</p>
                         </div>
                     </div>
             </div>
             <div class="carrier">
                 <span class="carrier-p">运费</span>
                 <span class="carrier-arrive" :style="{color:''}">包邮</span>
             </div>
              <div class="daoqimd">
                 <span class="carrier-p maiduan">到期买断服务</span>
                 <span class="carrier-arrive">暂时不支持此服务</span>
             </div>
              <!-- <div class="yunxian">
                  <img src="../assets/image/jiesuan_wenhao.png" class="wenhao" alt="">
                 <span class="carrier-p sp3">运险费</span>
                 <span class="return">退换货可赔付</span>
                 <img src="../assets/image/jiesuan_choose.png" class="choose" alt="" ref="img"
                  @click="changeChoose">
                 <span class="carrier-arrive">￥10.00</span>
             </div> -->
              <div class="liuyan">
                 <span class="carrier-p sp4">订单留言</span>
                <input type="text" class="dd-liuyan" placeholder="选填，建议请先和商家协商一致" ref="liuyan"> 
             </div>
             <div class="total">
                  <span class="total-number">共{{count}}件 </span>
                  <span class="xiaoji"> 小计：<span 
                  :style="{color:'#B3381D'}">￥</span>
                  <span :style="{color:'#B3381D','font-size':'0.17rem'}">{{(totalPrice*1).toFixed(2)}}</span> </span>
             </div>
         </div>
     </div>
       <div class="bg-foot"> 
            <div class="foot">
                 <span class="heji"> 合计：<span 
                  :style="{color:'#B3381D'}">￥</span>
                  <span :style="{color:'#B3381D','font-size':'0.17rem'}">{{(totalPrice*1).toFixed(2)}}</span> </span>
                  <button class="submit" @click="submit">提交订单</button>
            </div>
       </div>
       <div class="pay">
       <div class="bg-paycontent">
          <div class="pay-content">
             <div class="pay-top">
                <span class="close" @click="close">×</span>
                <span class="payfor">确认付款</span>
             </div>
             <p class="paynum" >￥<span :style="{'font-size':'0.38rem'}">{{ (totalPrice*1).toFixed(2)}} </span> </p>
                 <div class="zifubao">
                      <img src="../assets/image/zhifubao.png" alt="" class="zhifubaoImg">
                      <span class="zfb-text">支付宝支付</span>
                      <img src="../assets/image/jiesuan_choose.png" @click="changePay"  ref="zhifubaoImg" alt="" id="chooseImg">
                 </div>
                   <div class="weixin">
                      <img src="../assets/image/weixin.png" alt="" class="weixinImg">
                      <span class="wx-text">微信支付</span>
                      <img src="../assets/image/jiesuan_unchoose.png" alt="" @click="changePaySec"  ref="weixinImg" id="unChooseImg">
                 </div>
                 <button class="pay-sure" @click="paySure">确认支付</button>
          </div>
       </div>
    </div>
    </div>
</template>



<script>
//  console.log( sessionStorage.goodId)
import {mapState,mapMutations} from "vuex";
import Head from "@/components/Head.vue";
import ChooseImg from "@/assets/image/jiesuan_choose.png";
import UnChooseImg from "@/assets/image/jiesuan_unchoose.png";
import "@/utils/api.js"

export default {
    data(){
        return{
            chosenAddressId: '1',
            count: sessionStorage.count,
            dizhi:"",
            detail:{},
            totalPrice:"",
            color:"",
            size:"",
            check:"zfb",
            dinDanId:"",
            price:'',
        }
    },
   components:{
       Head,
   },
   computed: {
        
   },
   created() {
   
   },
     methods: {
         ...mapMutations(['changeSearch']),
         gotoAddressManage(){
             this.$router.push({name:"addressmanage"})
         },
         submit(){
            // 
           document.getElementsByClassName('pay')[0].style.display="block";
             this.$axios.post('order/submitOrder',{
                    rentId:sessionStorage.rentId,
                    id: this.$route.params.goodId,
                    productId:sessionStorage.stockId,
                    number:sessionStorage.count,
                    message: this.$refs.liuyan.value,
                    addressId:this.dizhi.id,
               }
            
               ).then(res=>{
               console.log(res)
               this.dinDanId=res.data.data.orderId;
               console.log(this.dinDanId)
               })
          
              document.onclick=function(e){
              var event=e||window.event;
              var target=event.target || event.srcElement;
              if(target.className=="pay"&&target.className!="bg-paycontent"){
                   document.getElementsByClassName('pay')[0].style.display="none";
              }
           }
  
            
           
         },
         close(){
    document.getElementsByClassName('pay')[0].style.display="none";
    this.$router.push({name:"waitforpay"})
         },
         paySure(){
        document.getElementsByClassName('pay')[0].style.display="none";
        var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0aGlzIGlzIGxpdGVtYWxsIHRva2VuIiwiYXVkIjoiTUlOSUFQUCIsImlzcyI6IkxJVEVNQUxMIiwidXNlcklkIjoxOCwiaWF0IjoxNTczNzE5MTAwfQ.Si0y8IXc_sqtDahLlMPNjG6xeQEG-nmxVoLl2lSl9RA';
        var dinDanId=this.dinDanId;
        console.log(dinDanId)
       console.log(token)
        console.log(this.check);
        console.log(dinDanId);
        if(this.check=='zfb'){
             api.ajax({
                url: 'http://114.116.230.27:8080/wx/pay/alipayVip',  //url+模块
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Litemall-Token': token
                    },
                data: {
                    body: {
                        vipPriceId:1
                    }
                }
            },function(ret, err){

                  //开发者通过 payOrder 方法来进行支付，自己处理订单信息以及签名过程
                  console.log(JSON.stringify(ret));
                  var aliPayPlus = api.require('aliPayPlus');
                  aliPayPlus.payOrder({
                      orderInfo:ret.data.info.orderInfo
                  }, function(ret, err) {
                      api.alert({
                          title: '支付结果',
                          msg: ret.code,
                          buttons: ['确定']
                      });
                  });

                });
        }else if(this.check=='wx'){
            api.ajax({
            url: 'http://114.116.230.27:8080/wx/pay/wxpayVip',
            method: 'post',
            headers: {
                    'Content-Type': 'application/json',
                    'X-Litemall-Token': token
                    },
            data:{
                    body:{
                        vipPriceId:1
                    }
                
            }
        },function(ret, err){
                    //   alert(ret.sign);
            var wxPayPlus = api.require('wxPayPlus');
          wxPayPlus.payOrder({
            apiKey: ret.data.info.appid,
            orderId: ret.data.info.prepayid,
            mchId: ret.data.info.partnerid,
            nonceStr: ret.data.info.noncestr,
            timeStamp: ret.data.info.timestamp,
            package: ret.data.info.package,
            sign: ret.data.info.sign}), function(ret, err) {
              console.log(JSON.stringify(ret));
              if (ret.status) {
                  //支付成功
              } else {
                  alert(err.code);
              }
          }
        });

        }
        
          
        // this.$router.push({name:"paysuccess"})
         },
         onEdit(){
        //   addaddress
          this.location.href="addaddress"
              },
        // changeChoose(){
        //      if(this.$refs.img.className=="choose"){
                 
        //          this.$refs.img.src=UnChooseImg;
        //          this.$refs.img.className="unchoose"
                
        //      }else{
    
        //          this.$refs.img.src=ChooseImg;
        //          this.$refs.img.className="choose"
        //      }
        // },
        changePay(){
             if(this.$refs.weixinImg.id=="chooseImg"){
                 this.$refs.zhifubaoImg.src=ChooseImg;
                 this.$refs.zhifubaoImg.id="chooseImg";
                 this.$refs.weixinImg.src=UnChooseImg;
                 this.$refs.weixinImg.id="unChooseImg";
                 this.check='zfb';
                 console.log(this.check)
             }
        },
        changePaySec(){
              if(this.$refs.zhifubaoImg.id=="chooseImg"){
                 this.$refs.zhifubaoImg.src=UnChooseImg;
                 this.$refs.zhifubaoImg.id="unChooseImg"
                 this.$refs.weixinImg.src=ChooseImg;
                 this.$refs.weixinImg.id="chooseImg";
                 this.check='wx';
                 console.log(this.check)
             }
        },
       
        onAdd(){
          this.$router.push({name:"addaddress"})
        }
     },
     computed: {
         ...mapState(['searchShow']),
        
     },
     mounted() {
         this.changeSearch(false);
         this.totalPrice=sessionStorage.totalPrice;
         this.price=sessionStorage.price;
         this.color=sessionStorage.size;
         this.size=sessionStorage.color;
         console.log(this.$refs.liuyan.value)
       
          this.$axios.get('/goods/detail',{
        params:{id:this.$route.params.goodId,
               userId: localStorage.token}
        }).then(res=>{
            console.log(res)
            setTimeout(()=>{
             this.detail=res.data.data;
             console.log( this.detail);
             console.log(this.detail.info.shopName)
            },300)
        
       
        })

        this.$axios.get('address/listDfault',{
              params:{
                  userId:localStorage.token,
                  isDefault: 1,
              }
         }
           ).then(res=>{
            console.log(res)
            this.dizhi=res.data.data.list[0]
            console.log(this.dizhi)
          })
       
     },
}
</script>
<style scoped lang="scss">
.head{
    background: #F5F6FA;
}
 .title{
  float: right;
  height: 0.2rem;
  width: 0.8rem;
  font-size: 0.18rem;
  line-height: 0.2rem;
  font-weight: bold;
  position: absolute;
  top: 0.38rem;
  left: 0.5rem;
 }
 .main-content{
   background: #F5F6FA;
   width: 100%;
   height: 100%;
   overflow: hidden;
 }
  .address{
      width: 3.43rem;
      margin: auto;
      background: white;
      overflow: hidden;
      margin-top: 0.20rem;
  }
  .bg-address{
      width: 100%;
      height: 1.09rem;
     background: white;
     overflow: hidden;
     border-radius: 0.2rem;
     margin-top: 0.1rem;
  }
  .position{
      width: 0.2rem;
      height: 0.22rem;
      float: left;
      margin-top: 0.2rem;
  }
 .address-default{
     height: 0.2rem;
     line-height: 0.2rem;
 }
  .address-d{
    float: left;
    
  }
  .address .address-detail{
      font-size: 0.14rem;
      margin-top: 0.06rem;
      float: left;
      width: 2.8rem;
  }

  .address .more{
      float: right;
      margin-top: 0.11rem;
  }
  .sp1{
      color: #FD9828;
      font-size: 0.12rem;
      padding-top: 0.03rem;
      float: left;
      margin-top: 0;
  }
  .address .username{
      display: block;
      width: 0.5rem;
      font-size: 0.16rem;
      color: #2F3031;
      float: left;
      font-weight: bold;
  }
   .address .usertel{
      display: block;
      margin-top: 0rem;
      font-size: 0.12rem;
      color: #5E6165;
      float: left;
   }
   .bg-content{
       height: 3.96rem;
       width: 100%;
       background: white;
       margin-top: 0.12rem;
       border-radius: 0.2rem;
       overflow: hidden;
   }
   .content{
       width: 3.43rem;
       height: 3.96rem;
       margin: auto;
       overflow: hidden;
   }
   .content .goods-desc{
       width: 100%;
       height: 0.9rem;
       margin-top: 0.24rem;
   }
   .content .goods-desc img{
       width: 0.7rem;
       height: 0.88rem;
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
         margin-left: 0.27rem;
     }
      .choose{
          width: 0.15rem;
          height: 0.15rem;
          float: right;
      }
      .unchoose{
           width: 0.15rem;
          height: 0.15rem;
          float: right;
      }
      .carrier-arrive{
         font-size: 0.12rem;
         color: grey;
         float: right; 
         line-height: 0.15rem;
         margin-right: 0.05rem;
     }
     .daoqimd , .yunxian , .liuyan{
          margin-top: 0.3rem;
          height: 0.26rem;
     }
     .yunxian .wenhao{
         float: left;
         margin-left: 0.17rem;
     }
     .yunxian .return{
      font-size: 0.12rem;
      margin-top: 0.12rem;
      color: #C7C7C7;
      margin-left: 0.23rem;
      line-height: 0.1rem;
     }
     .yunxian .sp3{
         margin-left: 0.06rem;
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
        margin-left: 1.6rem;
        color: #C7C7C7;
        font-size: 0.12rem;
    }
    .total .xiaoji{
        float: right;
        font-size: 0.13rem;
        font-weight: bold;
    }
    .bg-foot{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 0.5rem;
        background: white;
        line-height: 0.5rem;
    }
    .foot{
        width: 3.43rem;
        margin: auto;
    }
    .foot .heji{
        margin-left: 0.05rem;
        font-size: 0.14rem;
        font-weight: bold;
        float: left;
    }
    .foot .submit{
        border: none;
        outline: none;
        float: right;
        width: 1.35rem;
        height: 0.4rem;
        margin-top: 0.05rem;
        border-radius: 0.2rem;
        line-height: 0.4rem;
         background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
         background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
         background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
         background: linear-gradient(to left, #D50000, #FD9A28) !important;
    }
    .pay{
  display: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 100;
  max-width: 3.75rem;
//   background-color: hsla(0, 0%, 80%, 0.39);
 background:rgba(0,0,0,0.6);;

  .bg-paycontent{
      opacity: 1 !important;
    width: 100%;
    height: 68%;
    background: white;
    position: relative;
    top: 32%;
    border-radius: 0.2rem 0.2rem 0 0;
    .pay-content{
      width: 3.43rem;
      margin: auto;
      height: auto;
      overflow: hidden;
      .pay-top{
          width: 100%;
          height: auto;
          margin-top: 0.15rem;
      .close{
      font-size: 0.2rem;
      font-weight: bold;
      }
      .payfor{
      font-size: 0.17rem;
      font-weight: bold;
      text-align: center;
      margin-left: 1.2rem;
      }
      }
      .paynum{
        //   width: 1.51rem;
          margin-left: 30%;
          margin-top: 0.7rem;
          font-size: 0.22rem;
          font-weight: bold;
      }
      .zifubao{
          width: 100%;
          height: 0.3rem;
          line-height: 0.3rem;
          margin-top: 0.3rem;
          .zhifubaoImg{
              width: 0.3rem;
              height: 0.3rem;
              border-radius: 50%;
              float: left;
              
          }
          .zfb-text{
                  margin-left: 0.12rem;
              }   
          }
      .weixin{
          width: 100%;
          height: 0.3rem;
          line-height: 0.3rem;
          margin-top: 0.3rem;
          .weixinImg{
              width: 0.3rem;
              height: 0.3rem;
              border-radius: 50%;
              float: left;
          }
          .wx-text{
                  margin-left: 0.12rem;
              }
              }
      
    .pay-sure{
        width: 3.43rem;
        height: 0.44rem;
        border-radius: 0.22rem;
        outline: none;
        border: none;
        position: absolute;
        bottom: 0.36rem;
        color: white;
        background: -webkit-linear-gradient(to left, #007BFF, #3FE699) !important;
         background: -o-linear-gradient(to left, #007BFF, #3FE699) !important;
         background: -moz-linear-gradient(to left, #007BFF, #3FE699) !important;
         background: linear-gradient(to left, #007BFF, #3FE699) !important;
    }
    }
  }
}
 #unChooseImg{
              width: 0.15rem;
              height: 0.15rem;

              border-radius: 50%;
              float: right;
              margin-top: 0.07rem;
          }
 #chooseImg{
              width: 0.15rem;
              height: 0.15rem;
              border-radius: 50%;
              float: right;
              margin-top: 0.07rem;
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
            color: #2F3031;
        }
        .more{
            margin-top: 0.04rem;
            margin-left: 0.05rem;
            float: left;
        }
    }
</style>