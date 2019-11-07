<template>
    <div class="give-warm-detali">
       <div class="bg-want">
           <Head></Head>
       <div class="want-buy">
            
              <p class="want-goods">填写想要购买商品</p>
              <input type="text" placeholder="点击输入商品要求，例如康乃馨一束" class="require" v-model="value">
              <ul class="goodsChoose">
                  <li>百合</li> 
                  <li>康乃馨</li>
                  <li>向日葵</li> 
                  <li>玫瑰</li>
                  <li>郁金香</li> 
                  <li>马蹄莲</li>
              </ul>
       </div>
       </div>
       <div class="address">
           <div class="from-address">
               <div :style="{height:'0.2rem',}">
               <img src="../assets/image/gwdetail_buy.png" alt="" class="buy">
               <p class="buy-address">街道口书香门第1906</p>
               </div >
               <div class="from-info">
               <span class="from-name">王雨肖</span>
               <span class="from-tel">13255889986</span>
               <img src="../assets/image/more.png" alt="" class="more">
               </div>
           </div>
           <div class="to-address">
               <div :style="{height:'0.2rem',}">
               <img src="../assets/image/gwdetail_song.png" alt="" class="deliver">
     <p class="deliver-address">江汉路书香门第1906</p>
               </div >
               <div class="to-info">
               <span class="to-name">王小二</span>
               <span class="to-tel">13255889986</span>
               <img src="../assets/image/more.png" alt="" class="more">
               </div>

           </div>
       </div>
       
         <div class="goods-about">
           <div class="about-price">
                
               <img src="../assets/image/gwdetail_price.png" alt="" class="price-img">
               <p class="goods-price">商品价格
               <img src="../assets/image/more.png" alt="" class="more">
               </p>
           </div>
           <div class="about-time">
    <img src="../assets/image/gwdetail_shijian.png" alt="" class="price-img"> 
               <p class="goods-price">送达时间
               <img src="../assets/image/more.png" alt="" class="more">
               </p>
           </div>
       </div>
       <div class="beizhu">
             <p class="bz-beizhu">
              备注
             </p>
             <textarea name="" id="bz-descript" cols="33" rows="2" placeholder="请留下想说的话，来表达信息"
             :style="{'margin-left':'0.2rem','margin-top':'0.1rem','text-indent':'0',
             'text-align':'left',border:'none'}">
             </textarea>
       </div>
       <div class="bg-bottom"></div>
        <div class="bg-foot"> 
            <div class="foot">
                 <span class="heji"> 合计：<span 
                  :style="{color:'#B3381D'}">￥</span>
                  <span :style="{color:'#B3381D','font-size':'0.17rem'}">999.00</span> </span>
                  <button class="submit" @click="submit">提交订单</button>
            </div>
       </div>
    </div>
</template>

<script>
import Head from '@/components/Head.vue';
import  {mapState,mapMutations} from 'vuex';
export default {
    data() {
        return {
           value: "", 
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
    },
    mounted() {
         this.changeSearch(false);
    },

}
</script>

<style  scoped>
 .give-warm-detali{
   width: 100%;
   height: auto;
   background: #F5F6FA;

 }
 .bg-want{
     height: 2.74rem;
     background: url("../assets/image/gwdetail_bg.png") 0 0 no-repeat;
     background-size: 100% 100%;
     border-radius: 0 0 0.2rem 0.2rem;
 }
 .head{
    background:  rgba(0,0,0,0);
 }
 .want-buy{
     width: 3.43rem;
     height: 2rem;
     background: white;
     margin: auto;
     margin-top: 0.6rem;
     overflow: hidden;
     border-radius: 0.2rem;
 }
  .want-buy .want-goods{
      font-size: 0.17rem;
      margin-left: 0.2rem;
      margin-top: 0.25rem;
      font-weight: bold;
  }
  .want-buy .require{
   margin-top: 0.2rem;
   margin-left: 0.2rem;
   border: 0;
   outline: 0;
   width: 3.2rem;
  }
  .want-buy .require::-webkit-input-placeholder{
  font-size: 0.14rem;
  color: #C7C7C7;
  }
  .want-buy .goodsChoose{
      margin-left: 0.2rem;
      margin-top: 0.2rem;
  }
  .want-buy .goodsChoose li{
   float: left;
   padding-left: 0.15rem;
   padding-right: 0.15rem;
   height: 0.26rem;
   border-radius: 0.13rem;
   background: #F5F6FA;
   color: #5E6165;
   margin-left: 0.12rem;
    margin-top: 0.12rem;
  }
  .address{
      width: 3.43rem;
      height: 1.54rem;
     background: white;
     margin: auto;
     margin-top: 0.6rem;
     overflow: hidden;
     border-radius: 0.12rem;
  }
  .address .from-address{
       margin-top: 0.2rem;
       margin-left: 0.2rem;

  }
  .address .buy{
      width: 0.22rem;
      height: 0.22rem;
     border-radius: 50%;
     float: left;
     margin-top: 0.02rem;
  }
 .address .buy-address{
     font-size: 0.15rem;
     font-weight: bold;
     float: left;
     margin-left: 0.16rem;
 }
 .address .from-info{
 margin-left: 0.38rem;
 width: 2.66rem;
 height: 0.35rem;
 border-bottom: 1px solid #EFEFEF;
 }
 .address .from-info .more{
     width: 0.08rem;
     height: 0.12rem;
     float: right;
     margin-top: -0.08rem;
 }
 .address .from-name{
    font-size: 0.13rem;
    color: #5E6165;
   
 }
 .address .from-tel{
    font-size: 0.13rem;
    color: #5E6165;
    margin-left: 0.08rem;
 }
 .address .to-address{
       margin-top: 0.2rem;
       margin-left: 0.2rem;
 }
 .address .to-address .deliver{
      width: 0.22rem;
      height: 0.22rem;
     border-radius: 50%;
     float: left;
     margin-top: 0.02rem;
 }
 .address .to-address .deliver-address{
     font-size: 0.15rem;
     font-weight: bold;
     float: left;
     margin-left: 0.16rem;
 }
 .address .to-info{
 margin-left: 0.38rem;
 width: 2.66rem;
 height: 0.35rem;

 }
 .address .to-info .more{
     width: 0.08rem;
     height: 0.12rem;
     float: right;
     margin-top: -0.08rem;
 }
 .address .to-name{
    font-size: 0.13rem;
    color: #5E6165;
   
 }
 .address .to-tel{
    font-size: 0.13rem;
    color: #5E6165;
    margin-left: 0.08rem;
 }

  .goods-about{
    width: 3.43rem;
    height: 1.11rem;
     background: white;
     margin: auto;
     margin-top: 0.2rem;
     overflow: hidden;
     border-radius: 0.12rem;
  }
  .goods-about .about-price{
       margin-top: 0.2rem;
       margin-left: 0.2rem;
       height: 0.3rem;
  }
  .goods-about .about-price .price-img{
        width: 0.2rem;
      height: 0.2rem;
     border-radius: 50%;
     float: left;
     margin-top: 0.02rem;
  }
  .goods-about .about-price .goods-price{
     font-size: 0.15rem;
     font-weight: bold;
     float: left;
     margin-left: 0.16rem;
     height: 0.3rem;
     border-bottom: 1px solid #EFEFEF;
     width: 2.66rem;
  }
 .goods-about .about-price .goods-price .more{
     width: 0.08rem;
     height: 0.12rem;
     float: right;
     margin-top: 0.04rem;
    }
     .goods-about .about-time{
       margin-top: 0.2rem;
       margin-left: 0.2rem;
       height: 0.3rem;
  }
  .goods-about .about-time .price-img{
     width: 0.2rem;
     height: 0.2rem;
     border-radius: 50%;
     float: left;
     margin-top: 0.02rem;
  }
  .goods-about .about-time .goods-price{
     font-size: 0.15rem;
     font-weight: bold;
     float: left;
     margin-left: 0.16rem;
     height: 0.3rem;
      border-bottom: 1px solid #EFEFEF;
      width: 2.66rem;
  }
 .goods-about .about-time .goods-price .more{
     width: 0.08rem;
     height: 0.12rem;
     float: right;
     margin-top: 0.04rem;
    }
  .beizhu{
     width: 3.43rem;
    height: 0.89rem;
     background: white;
     margin: auto;
     margin-top: 0.2rem;
     overflow: hidden;
     border-radius: 0.12rem;
  }
  .beizhu .bz-beizhu{
      margin-left: 0.2rem;
      margin-top: 0.2rem;
      height: 0.2rem;
     font-size: 0.15rem;
     font-weight: bold;
  }
  .beizhu .bz-beizhu textarea{
       margin-left: 0.2rem;
       border: none;
       outline: none;
       margin-top: 0.1rem;
  }

  .bg-bottom{
      width: 100%;
      height: 0.8rem;
      background: #F5F6FA;
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
</style>