<template>
    <div class="main">
         <Head></Head>
         <div class="item">
           <van-swipe  indicator-color="white">
             <van-swipe-item ><img :src="detail.info.gallery[0]" alt="" class="item-img"></van-swipe-item>
             <van-swipe-item><img :src="detail.info.gallery[1]" alt="" class="item-img"></van-swipe-item>
             <van-swipe-item><img :src="detail.info.gallery[2]" alt="" class="item-img"></van-swipe-item>
            
</van-swipe>
            
        </div>
       <div class="descript">
          <div class="descript-content">
               <div class="item-price">
                 <span class="price-span">￥<span :style="{'font-size':'0.2rem'}">{{morenPrice.toFixed(2)}}</span>/天</span>   
                 <span class="quanxin" :style="{color:'white','font-size':'0.13rem','line-height':'0.16rem',height:'0.16rem',
          'margin-left':'0.12rem','border-radius':'0.02rem',width:'0.32rem',
          'text-align':'center','margin-top':'0.05rem','font-weight':'normal',display:'block',float:'left'}" >全新</span>
           <!-- <span class="halfyear"> 半年起租</span> -->
               </div>
               <p class="item-phone">{{detail.info.name}}</p>
               <div class="sell">
                 <p class="sell-number">
                   销量：{{detail.info.number}}件
                 </p>
                 <p class="heiger-yajin">
                   免押金
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
       <!-- <div class="descript-sec">
           <div class="descript-sec-content">
                 <div class="descript-sec-taocan">
                   <p :style="{'font-size':'0.14rem','font-family':'NSimSun','font-weight':'bold',
                   float:'left'}">套餐</p>
                   <p :style="{width:'2.9rem',float:'right',height:'0.53rem',
                  'box-sizing':'border-box','border-bottom':'1px solid #F5F6FA',
                  'font-size':'0.13rem',color:'#2F3031'}">{IphoneX s64 全新无锁一年起租起租}
                  <img src="../assets/image/more.png" class="more" alt=""></p>
                  
                 </div>
                 <div class="descript-sec-maiduan">
                 <p :style="{'font-size':'0.14rem','font-weight':'bold',
                 float:'left'}">
                   买断
                 </p>
                 <p :style="{width:'2.9rem',float:'right',height:'0.53rem',
                  'box-sizing':'border-box','border-bottom':'1px solid #F5F6FA',
                  'font-size':'0.13rem',color:'#2F3031'}">可<span :style="{color:'#D13717',
                  'font-size':'0.14rem'}"> ￥7999.00 </span>买断
                   <img src="../assets/image/more.png" class="more" alt=""></p>
                 </div>
           </div>
       </div> -->
        <div class="descript-third">
           <div class="descript-third-content">
                 <div class="descript-third-choose">
                   <p :style="{'font-size':'0.14rem','font-family':'NSimSun','font-weight':'bold',
                   float:'left'}">选择</p>
                   <p :style="{width:'2.9rem',float:'right',height:'0.53rem',
                  'box-sizing':'border-box','border-bottom':'1px solid #F5F6FA',
                  'font-size':'0.13rem',color:'#2F3031'}" @click="choose">点击选择颜色，型号，
                  <img src="../assets/image/more.png" class="more" alt=""></p>
                  
                 </div>
                 <div class="descript-third-canshu">
                 <p :style="{'font-size':'0.14rem','font-family':'NSimSun','font-weight':'bold',
                   float:'left'}">
                   参数
                 </p>
                 <p :style="{width:'2.9rem',float:'right',height:'0.53rem',
                  'box-sizing':'border-box','border-bottom':'1px solid #F5F6FA',
                  'font-size':'0.13rem',color:'#2F3031'}"  @click="choose">网络类型，品牌...
                   <img src="../assets/image/more.png" class="more" alt=""></p>
                 </div>
           </div>
       </div>
       <div class="bg_bottom">
          <div class="bottom">
            <div>
              <router-link :to="{name:'comment',params:{goodId:goodsId}}">
            <p class="bottom-comment">商品评价</p>
            <img src="../assets/image/zongse_more.png" alt="" class="zongse-more">
            <p class="screen-comment"> 点击查看评价</p>
            </router-link>
            </div>
            <p class="bottom-title">商品详情</p>
            <img src="../assets/image/good_zhouqi.png" alt="">
             <img src="../assets/image/good_liucheng.png" alt="">
              <img src="../assets/image/good_xuzu.png" alt="">
               <!-- <img src="../assets/image/good_maiduan.png" alt=""> -->
                <img src="../assets/image/good_guihuan.png" alt="">
          </div>
       </div>
 
        <van-goods-action >
  <van-goods-action-icon icon="shop-o" text="店铺" @click="toShop"/>
  <van-goods-action-icon icon="chat-o" text="客服"  />
  <van-goods-action-icon icon="star-o" text="收藏"  @click="collectGoods" />

  <van-goods-action-button type="danger" text="立即租"   @click="paynow" />
</van-goods-action>


    <div class="goods-right-picker">
       <div class="detail">
          <div class="detail-content">
            <span class="close" @click="close">×</span>
            <div class="d-content-top">
                  <img :src="detail.info.picUrl" alt="">
                    <span class="price-span">￥
                      <span  :style="{'font-size':'0.2rem'}">{{this.checkedSpecPrice}}</span>

                      /天</span>   
                 <span class="quanxin" :style="{color:'white','font-size':'0.13rem','line-height':'0.16rem',height:'0.16rem',
          'margin-left':'0.12rem','border-radius':'0.02rem',width:'0.32rem',
          'text-align':'center','margin-top':'0.05rem','font-weight':'normal',display:'block',float:'left'
        ,'margin-top':'0.75rem'}">全新</span>
            </div>
            <div class="d-content-color" v-for="(list , index) in this.specificationList" :key="index">
                <p>{{list.name}}</p>
                <ul>
                  <li class="color-li" v-for="(item , i) in list.valueList" 
                  :key="i" @click="clickSkuValue(index,i)" :class="{active: item.checked == true}" ref="chooseColor"
                  :valueId="item.id" :name="item.specification">{{item.value}}</li> 
                  
                </ul>
            </div >  

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
import { Dialog } from 'vant';
import { log } from 'util';
var username=sessionStorage.username;
export default {
    data(){
        return{
            value:1,
            detail:{},
            isActiveIndex: -1,
            isActiveIndexSize:-1,
            isActiveIndexDay:-1,
            color:"",
            size: "",
            goodsStock:[],
            stockId:"",
            daysId: "",
            price:"",
            morenPrice:"",
            totalPrice:"",
            rentAndPrice:[],
            specificationList:[],
            checkedSpecText: '规格数量选择',
            tmpSpecText: '请选择规格数量',
            soldout: false,
            checkedSpecPrice: 0,
            goods:{},
            productList: [],
            goodsId: this.$route.params.goodId,
            collected: '',
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
        choose(){
 document.getElementsByClassName('goods-right-picker')[0].style.display="block";
        },
      
        close(){
   document.getElementsByClassName('goods-right-picker')[0].style.display="none";
        },
        //  confirm(){
        //       // var count=this.value
        //       sessionStorage.count=this.value;
        //       this.goodsStock=this.detail.productList
        //       console.log(this.goodsStock)
        //       document.getElementsByClassName('goods-right-picker')[0].style.display="none";
        //       sessionStorage.stockId=this.stockId;
        //       sessionStorage.size=this.size;
        //       sessionStorage.color=this.color;
       
        
        //  if(this.detail.specificationList[1]){
        //     if(!this.color||!this.size){
        //        Dialog({message:'请选择颜色或规格'})
            
        //     }else{
        //        this.$axios.get('/order/goPay',{params:{
        //          userId:localStorage.token,
        //          id:this.$route.params.goodId,
        //          productId:this.stockId,
        //          rentId:this.daysId,
        //          number:this.value,
        //        }}).then(res=>{
        //          console.log(res)
        //          this.totalPrice=res.data.data.totalPrice;
        //          sessionStorage.totalPrice=this.totalPrice;
        //          sessionStorage.price=res.data.data.price;
        //          this.$router.push({name:'jiesuan',params:{goodId:this.$route.params.goodId}})
        //        })
        //       // location.href="/#/jiesuan/"+this.$route.params.goodId
              
        //     }
        //  }else{
        //    if(!this.size){
        //       Dialog({message:'请选择规格'})
        //    }else{
        //       this.$axios.get('/order/goPay',{params:{
        //          userId:localStorage.token,
        //          id:this.$route.params.goodId,
        //          productId:this.stockId,
        //          rentId:this.daysId,
        //          number:this.value,
        //        }}).then(res=>{
        //          console.log(res)
        //          this.totalPrice=res.data.data.totalPrice;
        //          sessionStorage.totalPrice=this.totalPrice;
        //          sessionStorage.price=res.data.data.price;
        //         this.$router.push({name:'jiesuan',params:{goodId:this.$route.params.goodId}})
        //        })
                
        //    }
        //  }
        //   },
       
       confirm(){
           sessionStorage.count=this.value;

             if (!this.isCheckedAllSpec()){
                Dialog({message:'请选择规格'})
             }else{
                  this.$axios.get('/order/goPay',{params:{
                 id:this.$route.params.goodId,
                 productId:this.stockId,
                 number:this.value,
               }}).then(res=>{
                 console.log(res)
                 this.totalPrice=res.data.data.totalPrice;
                 sessionStorage.totalPrice=this.totalPrice;
                 sessionStorage.price=res.data.data.price;
                 sessionStorage.size=res.data.data.productList.specifications[0]
                 if(res.data.data.productList.specifications.length>2){
                   sessionStorage.color=res.data.data.productList.specifications[1]
                 }
                this.$router.push({name:'jiesuan',params:{goodId:this.$route.params.goodId}})
               })
             }
       },
        paynow(){
      //判断是否有颜色及规格
     
       document.getElementsByClassName('goods-right-picker')[0].style.display="block";
        },
        collectGoods(){
           this.$axios.post('/collect/addordelete',{
             userId: localStorage.token,
             valueId: this.$route.params.goodId,
             type:0,
           }).then(res=>{

             var collect=document.getElementsByClassName('van-icon-star-o')[0];
             var collectText=document.getElementsByClassName('van-goods-action-icon')[2];
             console.log(this.collected)
             if(this.collected!=1){
                this.collected=1;
                // collect.style.color='red';
                collectText.innerHTML=`<div class="van-icon van-icon-star van-goods-action-icon__icon" style="color: red;">
                <!----></div> 已收藏`
                }else{
                  this.collected=0;
                  collectText.innerHTML=`<div class="van-icon van-icon-star-o van-goods-action-icon__icon" >
                <!----></div> 收藏`
                }
            //  this.$refs.collect.style.color='red'
           })
        },
        toShop(){
          this.$router.push({name: 'dianpu',params:{shopId:this.detail.info.shopId} })
        },
        // 规格选择
  clickSkuValue: function(index,i) {
    let that = this;
    let specName = event.currentTarget.getAttribute("name");
    let specValueId = event.currentTarget.getAttribute("valueId");

    //判断是否可以点击

    //TODO 性能优化，可在wx:for中添加index，可以直接获取点击的属性名和属性值，不用循环
    let _specificationList = this.specificationList;
    for (let i = 0; i < _specificationList.length; i++) {
      if (_specificationList[i].name === specName) {
        for (let j = 0; j < _specificationList[i].valueList.length; j++) {
          if (_specificationList[i].valueList[j].id == specValueId) {
            //如果已经选中，则反选
            if (_specificationList[i].valueList[j].checked) {
              _specificationList[i].valueList[j].checked = false;
              console.log(_specificationList[i].valueList[j]);
            } else {
              _specificationList[i].valueList[j].checked = true;
              console.log(_specificationList[i].valueList[j]);
            }
          } else {
            _specificationList[i].valueList[j].checked = false;
            console.log(_specificationList[i].valueList[j]);
          }
        }
      }
    }
      this.specificationList= _specificationList,

      this.detail.specificationList = _specificationList;
      this.$forceUpdate();
      console.log(this.specificationList);
      
    //重新计算spec改变后的信息
    this.changeSpecInfo(index,i);

    //重新计算哪些值不可以点击
  },

  //获取选中的团购信息
  getCheckedGrouponValue: function() {
    let checkedValues = {};
    let _grouponList = this.data.groupon;
    for (let i = 0; i < _grouponList.length; i++) {
      if (_grouponList[i].checked) {
        checkedValues = _grouponList[i];
      }
    }

    return checkedValues;
  },

  //获取选中的规格信息
  getCheckedSpecValue: function() {
    let checkedValues = [];
    let _specificationList = this.specificationList;
    for (let i = 0; i < _specificationList.length; i++) {
      let _checkedObj = {
        name: _specificationList[i].name,
        valueId: 0,
        valueText: ''
      };
      for (let j = 0; j < _specificationList[i].valueList.length; j++) {
        if (_specificationList[i].valueList[j].checked) {
          _checkedObj.valueId = _specificationList[i].valueList[j].id;
          _checkedObj.valueText = _specificationList[i].valueList[j].value;
        }
      }
      checkedValues.push(_checkedObj);
    }

    return checkedValues;
  },

  //判断规格是否选择完整
  isCheckedAllSpec: function() {
    return !this.getCheckedSpecValue().some(function(v) {
      if (v.valueId == 0) {
        return true;
      }
    });
  },

  getCheckedSpecKey: function() {
    let checkedValue = this.getCheckedSpecValue().map(function(v) {
      return v.valueText;
    });
    return checkedValue;
  },

  // 规格改变时，重新计算价格及显示信息
  changeSpecInfo: function(index,i) {
    let checkedNameValue = this.getCheckedSpecValue();

    //设置选择的信息
    let checkedValue = checkedNameValue.filter(function(v) {
      if (v.valueId != 0) {
        return true;
      } else {
        return false;
      }
    }).map(function(v) {
      return v.valueText;
    });
    if (checkedValue.length > 0) {
      this.tmpSpecText=checkedValue.join('　')
    } else {
      this.tmpSpecText= '请选择规格数量'
    }

    if (this.isCheckedAllSpec()) {
      this.checkedSpecText=this.tmpSpecText;

      // 规格所对应的货品选择以后
      let checkedProductArray = this.getCheckedProductItem(this.getCheckedSpecKey());
      if (!checkedProductArray || checkedProductArray.length <= 0) {
        this.soldout= true;
        console.error('规格所对应货品不存在');
        return;
      }

      let checkedProduct = checkedProductArray[0];
      if (checkedProduct.number > 0) {
        this.checkedSpecPrice= checkedProduct.price,
        this.stockId=checkedProduct.id,
        sessionStorage.stockId=checkedProduct.id,
        this.soldout= false
      } else {
        // console.log( this.specificationList[index])
        this.specificationList[index].valueList[i].checked= false;
        Dialog({message:'此商品已没有库存'});
      }

    } else {
      this.checkedSpecText= '规格数量选择',

      this.soldout= false;
    }
    this.$forceUpdate();
  },

  // 获取选中的产品（根据规格）
  getCheckedProductItem: function(key) {
    return this.productList.filter(function(v) {
      if (v.specifications.toString() == key.toString()) {
        return true;
      } else {
        return false;
      }
    });
  },

  // onLoad: function(options) {
  //   // 页面初始化 options为页面跳转所带来的参数
  //   if (options.id) {
  //     this.setData({
  //       id: parseInt(options.id)
  //     });
  //     this.getGoodsInfo();
  //   }

  //   if (options.grouponId) {
  //     this.setData({
  //       isGroupon: true,
  //     });
  //     this.getGrouponInfo(options.grouponId);
  //   }
  //   let that = this;
  //   wx.getSetting({
  //       success: function (res) {
  //           console.log(res)
  //           //不存在相册授权
  //           if (!res.authSetting['scope.writePhotosAlbum']) {
  //               wx.authorize({
  //                   scope: 'scope.writePhotosAlbum',
  //                   success: function () {
  //                       that.setData({
  //                           canWrite: true
  //                       })
  //                   },
  //                   fail: function (err) {
  //                       that.setData({
  //                           canWrite: false
  //                       })
  //                   }
  //               })
  //           } else {
  //               that.setData({
  //                   canWrite: true
  //               });
  //           }
  //       }
  //   })
  // },
  // onShow: function() {
  //   // 页面显示
  //   var that = this;
  //   util.request(api.CartGoodsCount).then(function(res) {
  //     if (res.errno === 0) {
  //       that.setData({
  //         cartGoodsCount: res.data
  //       });
  //     }
  //   });
  // },
      
    },
    mounted(){
       this.changeSearch(false);
//        document.onclick=function(e){
//        var event=e||event;
//        var target=event.targrt||event.srcElement;
//        if(target.className!=='detail'&&target.className=='goods-right-picker'){
//  document.getElementsByClassName('goods-right-picker')[0].style.display="none"; 
//       }
//        };
     console.log(this.$route.params.goodId)
        this.$axios.get('/goods/detail',{
        params:{id:this.$route.params.goodId,
               userId: localStorage.token}
        }).then(res=>{
          this.detail=res.data.data
          console.log(res.data)
          this.collected=this.detail.collect;

          this.specificationList = res.data.data.specificationList
          this.goods = res.data.data.info
          this.productList = res.data.data.productList
          this.morenPrice=this.detail.productList[0].price;
          
         
          if(this.collected==1){
           //收藏状态
           setTimeout(()=>{
            var collectText=document.getElementsByClassName('van-goods-action-icon')[2];
             collectText.innerHTML=`<div class="van-icon van-icon-star van-goods-action-icon__icon" style="color: red;">
                <!----></div> 已收藏`
           },0)
            
           console.log(1)
         
          }
          
          
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
.goback {
  margin-top: 0.23rem;
}
.main{
  width: 100%;
  height:auto;
  background-color: #F5F6FA;
}
.van-search {
  display: none !important;
  box-sizing: border-box;
}
.van-swipe .van-swipe__indicators {
    position: absolute;
    top: 3.14rem;
    left: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
.item{
  width: 100%;
 height: 3.5rem;
 overflow: hidden;
 background: -webkit-linear-gradient(to bottom, white, #F5F6FA) !important;
    background: -o-linear-gradient(to bottom, white, #F5F6FA) !important;
    background: -moz-linear-gradient(to bottom, white, #F5F6FA) !important;
    background: linear-gradient(to bottom, white, #F5F6FA) !important;
}
.item-img {
 width: 3.4rem;
 height: 3.14rem;
 margin: auto;
 border-radius: 0.2rem;
// margin-top: 0.23rem
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
   margin-top: 0.1rem;
   font-size: 0.17rem;
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
  .close{
      font-size: 0.2rem;
      font-weight: bold;
      float: right;
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
   height: 0.6rem;
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
           width: 0.9rem;
           height: 1rem;
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
        height: auto;
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
          .active{
            background: #FD9828;
          }
        }
      }
      .d-content-color::after{
              content:" ";
              display:block;
              clear:both;
              height:0; 
              overflow:hidden; visibility:hidden; 
      }
      .d-content-spec{
       height: auto;
       margin-top: 0.15rem;
         p{
          font-size: 0.13rem;
          font-weight: bold;
        }
        ul{
          .spec-li{
              float: left;
              background: #F5F6FA;
              color: #2F3031;
             
              line-height: 0.31rem;
              padding-left: 0.24rem;
              padding-right: 0.24rem;
              border-radius: 0.155rem;
              font-size: 0.13rem;
              margin-left: 0.1rem;
              margin-top: 0.15rem;
          }
          .activeSize{
            background: #FD9828;
          }
          
        }
      }
      .d-content-spec::after{
              content:" ";
              display:block;
              clear:both;
              height:0; 
              overflow:hidden; visibility:hidden; 
      }
      .d-content-day{
        height: 0.9rem;
        margin-top: 0.15rem;
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
              margin-left: 0.1rem;
              margin-right: 0.15rem;
              margin-top: 0.15rem;
          }
          .active{
             background: #FD9828;
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
    margin-top: 0.6rem;
    height: 0.14rem;
    line-height: 0.14rem;
    border-left: 3px solid #EB5516;
    padding-left: 0.05rem;
  }
  .bottom .zongse-more{
    float: right;
    width: 0.08rem;
    height: 0.12rem;
    padding-left: 0.05rem;
    padding: 0.08rem;
  }
  .bottom .bottom-comment{
    // width: 40%;
    font-size: 0.13rem;
    color: #EB5516;
    font-weight: bold;
    margin-top: 0.2rem;
    height: 0.14rem;
    line-height: 0.14rem;
    border-left: 3px solid #EB5516;
    padding-left: 0.05rem;
    float: left;
  }
   .bottom .screen-comment{
    font-size: 0.13rem;
    color: #EB5516;
    font-weight: bold;
    margin-top: 0.2rem;
    height: 0.14rem;
    line-height: 0.14rem;
    padding-left: 0.05rem;
    float: right;
   }
  .bottom img{
    width: 100%;
    margin-top: 0.12rem;
  }

</style>