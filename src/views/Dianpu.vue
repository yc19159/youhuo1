<template>
    <div>
        <div class="main">
            <!-- 头部返回标签搜索框 -->
            <div class="header">
                <i @click='back'  class="el-icon-back"></i>
                <input type="search" placeholder="华为nove 5z"
                       @change="onSearch"
                       v-model="keywords"
                       >
            </div>
            <!-- 店铺信息粉丝量关注 -->
            <div class="shop">
                <h2>华为自营官方旗舰店</h2>
                <div class="ziyi">
                   <li><span class="business">自营</span><span style="color:#fff;">粉丝数量247万</span></li>
                   <li class="follow"><i class="el-icon-star-off"></i>关注</li>
                </div>
            </div>
            <!-- tab滑动 -->
            <div class="header_tab">
                <van-tabs v-model="active">
                    <van-tab title="手机" style="flex-basis: 12%;">
                         <!--价格销量筛选 -->
                         <div class="price">
                                <ul>
                                    <li>价格</li>
                                    <li>销量</li>
                                    <li>筛选</li>
                                </ul>
                             </div>
                            <!-- 商品信息渲染 -->
                             <ul class="box">
                                 <li v-for="(item,index) in goodsList" :key="index">
                                    <p class="commodity_i"><img :src="item.picUrl" alt="商品照片"></p>
                                    <p class="commodity_name">{{item.name}}</p>
                                    <!-- <p class="size"> 
                                         <span>6.26英寸</span>|
                                         <span>超长待机</span>|
                                         <span>128GB</span>
                                    </p> -->
                                    <p class="commodity_price">&yen;<span>{{item.counterPrice}}</span>/天限时价</p>  
                                    <p class="all">
                                         <span class="new">全新</span>
                                         <span class="free">免押金</span>
                                         <span class="gift">赠</span>
                                    </p>
                                    <p class="people">
                                        <span>52.7万</span>人付款
                                        <span>99%</span>好评
                                    </p>
                                 </li>
                                
                             </ul>                 
                    </van-tab>
                    <van-tab title="游戏机" style="flex-basis: 12%;">
                           
                    </van-tab>
                    <van-tab title="电脑" style="flex-basis: 12%;">
                        <!--价格销量筛选 -->
                         <div class="price">
                           <ul>
                               <li>价格</li>
                               <li>销量</li>
                               <li>筛选</li>
                           </ul>
                        </div>
                       <!-- 商品信息渲染 -->
                        <ul class="box">
                            <li>
                               <!-- <p class="commodity_i"><img src="../assets/image/phone.png" alt="商品照片"></p> -->
                               <p class="commodity_name">Apple iPhone X</p>
                               <!-- <p class="size"> 
                                    <span>6.26英寸</span>|
                                    <span>超长待机</span>|
                                    <span>128GB</span>
                               </p> -->
                               <p class="commodity_price">&yen;<span>9.99</span>/天限时价</p>  
                               <p class="all">
                                    <span class="new">全新</span>
                                    <span class="free">免押金</span>
                                    <span class="gift">赠</span>
                               </p>
                               <p class="people">
                                   <span>52.7万</span>人付款
                                   <span>99%</span>好评
                               </p>
                            </li>
                        </ul>
                    </van-tab>
                    <van-tab title="相机" style="flex-basis: 12%;">内容 4</van-tab>
                   <van-tab title="办公用品" style="flex-basis: 12%;"></van-tab>
                </van-tabs>
            </div> 
        </div>
       
    </div>

</template>

<script>
export default {
    data(){
        return{
            goodsList:[],
            // search:'',
            keywords:''
        }
    },
    methods:{
        //返回上一级目录
        back(){
            this.$router.go(-1)
        },
        //商品数据
        getgoodsList(){
            this.$axios.get("http://192.168.0.18:8080/wx/goods/list",{params:{
                 keyword:this.keywords
            }})
                .then(res=>{
                    console.log(res.data.data.list);
                    this.goodsList=res.data.data.list;
                    console.log(this.goodsList);
                })
        },
        onSearch(){
            //获取到的值
            let keyword=this.keywords;
            this.$axios.get("http://192.168.0.18:8080/wx/goods/list",{params:{
                 keyword:this.keywords
            }})
                .then(res=>{
                    console.log(res.data.data.list);
                    this.goodsList=res.data.data.list;
                    console.log(this.goodsList);
                })

        }
       
        
    },
    //tab点击
    mounted(){
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
        }
    },
    created(){
        this.getgoodsList();
    }
   
   
    
}
</script>

<style  scoped>
    li{
        list-style: none;
    }
    .main{
        background-image: url("../assets/image/main_bng.png") ;
        background-color: #F8F9FB;
        background-repeat: no-repeat;
        background-position: -0.5rem -0.1rem;
        background-size: 5.0rem 5.0rem;
    }
    .header{
        padding: 0.15rem;
    }
    .header i{
        font-size: 0.26rem;
    }
    .header input{
        border-radius: 2rem;
        width:79%;
        color:#000000;
        line-height: 0.28rem;
        padding-left: 0.2rem;
        margin-top: 0.1rem;
        margin-left: 0.2rem;
    }
    .shop{
        padding: 0.1rem;
        padding-left: 0.26rem;
        padding-right: 0.2rem;
    }
    .shop h2{
        color:#fff;
        font-size: 0.16rem;
        font-weight: 500;
    }
    .ziyi{
        margin-top: 0.1rem;
        display: flex;
        justify-content: space-between;
    }
    .business{   
        color:#EB5516;
        border-radius: 0.1rem;
        border:1px solid #ED9636;
        font-size: 0.13rem;
        background-color: #fff;
        padding: 0.01rem;
        padding-left: 0.03rem;
        padding-right: 0.03rem;
    }
    .follow{
        color:#fff;
        border-radius: 0.1rem;
        border:1px solid #fff;
        font-size: 0.13rem;
        background-color: #7A7A7A;
        padding: 0.01rem;
        padding-left: 0.03rem;
        padding-right: 0.03rem;
    }
   
    /*tab 点击 样式*/
    .van-tabs /deep/ .van-tabs__line {
          position: absolute;
          width: 0.2rem !important;
          bottom: 0.15rem;
          left: 0;
          z-index: 1;
          height: 0.03rem;
          background-color: #f44;
          border-radius: 0.03rem;
          background: -webkit-linear-gradient(to left, #fff, #fff) !important;
          background: -o-linear-gradient(to left, #fff, #fff) !important;
          background: -moz-linear-gradient(to left, #fff, #fff) !important;
          background: linear-gradient(to left, #fff, #fff) !important;
   }
  .van-tabs /deep/ .van-tabs__wrap{
         margin-left: 0;
         width: 100%;
  }
  .van-tabs /deep/ .van-tabs__nav{
        background:rgba(0,0,0,.01);
  }
  .van-tabs /deep/ [class*=van-hairline]::after{
       border:1px solid rgba(0,0,0,.01);
  }
  .van-tabs /deep/ .van-tab--active {
      color: #fff;
      font-weight: 500;
  }
  .van-tabs /deep/ .van-tab{
      color: #fff;
      flex-basis: 20% !important;
  }
  /* 价格销量筛选 */
  .price ul{
      display: flex;
      justify-content: space-around;
  }
  .price ul li{
      color:#5E6165;
      font-size: 0.14rem;
      padding-top: 0.1rem;
  }
  /*商品信息渲染*/
  .ii li{
      margin-top: 30px;
  }  
  .box{
      width: 100%;
      overflow: hidden;
  }
  .box li{
      width: 1.6rem;
      overflow: hidden;
      overflow: auto;
      border-radius: 0.2rem;
      float:left;
      border:1px solid #ccc;
      margin-top: 20px;
      margin-left: 20px;
      background-color: #fff;
  }
  .commodity_i{
      width: 1.3rem;
      height: 1.4rem;
      padding: 0.18rem;
  } 
  .commodity_i>img{
      width: 100%;
  }
 
  .commodity_name{
      font-weight: 600;
      font-size: 0.12rem;
      padding-top: 0.2rem;
      padding-left: 0.12rem;
  }
  .size{
      background-color: #F2F2F2;
      margin-top: 0.1rem;
      margin-left: 0.06rem;
      margin-right: 0.06rem;
      font-size: 0.01rem;
  }
  .size span{
      margin-left: 0.001rem;
  }
  .commodity_price{
      padding-left: 0.1rem;
      color:#B3381D;
      margin-top: 0.06rem;
  }
  .commodity_price span{
      font-weight:bold;
  }
  .all{
      margin-top: 0.08rem;
  }
  .new{
      background-color: #EE6226;
      color:#fff;
      font-size: 0.06rem;
      padding: 0.02rem;
      margin-left: 0.1rem;
  }
  .free{
      color:#46A8F2;
      border:1px solid #46A8F2;
      font-size: 0.06rem;
      padding: 0.01rem;
      margin-left: 0.1rem;
  }
  .gift{
      color:#F08E26;
      border:1px solid #F08E26;
      font-size: 0.06rem;
      padding: 0.01rem;
      margin-left: 0.1rem;
  }
  .people{
      margin-top: 0.1rem;
      color:#CFCFCF;
      font-size: 0.1rem;
      padding-left: 0.12rem;
      padding-bottom: 0.12rem;
  }
</style>