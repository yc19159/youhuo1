<template>
<<<<<<< HEAD
    <div class="main">
        <div class="header">
            <i @click='back'  class="el-icon-back"></i>
            <p class="title">归还</p>
        </div>
        <div class="return_list">
             <p>订单号</p>
             <div> 
                <input type="text" class="number" v-model="returnSn">
             </div>
             <p>手机号</p>
             <div>
                <input type="text" class="phone" v-model="phone">
             </div>
             <p>快递公司</p>
             <div>
                 <el-select v-model="value" placeholder="请选择" @change="changeValue">
                     <el-option
                         v-for="item in express" :key="item.value"
                         :label="item.label" :value="item.value">

                     </el-option>
                 </el-select>   
             </div> 
             <!--快递信息备注信息-->            
             <p class="remarks">
                <span style="padding-right: 0.06rem;">温馨提示&nbsp;:
                </span>请填写正确的物流信息,仅接受上述选择框提供的物流公司
                              归还物流
             </p>
             <button @click="Return">
                 <span>确定</span>
             </button>

        </div>
=======
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
>>>>>>> 37068188bfc8add439f6e8a053cb5f9e31a6b45f
    </div>
</template>

<script>
export default {
<<<<<<< HEAD
    data(){
        return{
            returnSn:'',//订单号
            phone:'',//手机号码
            returnChannel:'',//快递公司
            value:'',
            express:[
             {value: '选项1',label: '顺丰速运',row:'SF'},
             {value: '选项2',label: '百世快递',row:'HTKY'},
             {value: '选项3',label: '中通快递',row:'ZTO'},
             {value: '选项4',label: '申通快递',row:'STO'},
             {value: '选项5',label: '圆通快递',row:'YTO'},
             {value: '选项6',label: '韵达速递',row:'YD'},
             {value: '选项7',label: '邮政快递包',row:'YZPY'},
             {value: '选项8',label: 'EMS',row:'EMS'},
             {value: '选项9',label: '天天快递',row:'HHTT'},
             {value: '选项10',label: '京东快递',row:'JD'},
             {value: '选项11',label: '优速快递',row:'UC'},
             {value: '选项12',label: '德邦快递',row:'DBL'},
             {value: '选项13',label: '宅急送',row:'ZJS'},
             {value: '选项14',label: 'TNT快递',row:'TNT'},
             {value: '选项15',label: 'UPS',row:'UPS'},
             {value: '选项16',label: 'DHL',row:'DHL'},
             {value: '选项17',label: 'FEDEX联邦国内件',row:'FEDEX'},
             {value: '选项18',label: 'FEDEX联邦国际件',row:'FEDEX_GJ'},
            ],
             logistics:'',//获取到的快递编码
        }
    },
    
    methods:{
        //返回上一级目录
        back(){
            this.$router.go(-1)
        },
        //获取快递公司编码
        changeValue(value){
            console.log(value);
            let obj={};
            obj=this.express.find((item)=>{
                return item.value===value;
            });
            this.logistics=obj.row;//获取到的快递公司编码
            console.log(this.logistics)
        },
        //提交信息到后台
        Return(){
            // console.log(1111)
            this.$axios.post("http://192.168.0.22:8080/wx/order/orderReturn",{
                returnSn:this.returnSn,//快递编号
                returnChannel: this.logistics,//快递公司编码
                id:this.$route.params.orderId  //商品id
            })
             .then(res=>{
                 console.log(res);
             })
             
        },
       
       
    },
 
   
=======
    data() {
        return {
            color:'',
            listsearch:[],
            allSearch:[],
            loading: false,
            finished: false,
            count:0,
            pages:0,
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
>>>>>>> 37068188bfc8add439f6e8a053cb5f9e31a6b45f
}
</script>

<style  scoped>
<<<<<<< HEAD
li{
    list-style: none;
}
.header{
    padding: 0.15rem;
    padding-bottom: 0.3rem;
 }
.header i{
    font-size: 0.26rem;
    font-weight: bold;
    float: left;
}
.title{
    float: left;
    padding-left: 0.12rem;
    font-size: 0.18rem;
    font-weight: bold;
}
input{
    border:none;
}
.return_list{
    width: 3.43rem;
    margin: auto;
    margin-top: 0.3rem;
    overflow: hidden;
}
.return_list div{
    height: 0.3rem;
    width: 100%;
    border-bottom: 1px solid #EDEFF2;
    /* margin-top: 0.2rem; */
    padding-top: 0.12rem;
}
.return_list p{
    display: inline-block;
    padding-top: 0.2rem;
    font-size: 0.14rem;
    color:#000000;
}
/* 物流信息提示 */
.remarks{
    margin-top: 0.2rem;
    font-size: 0.12rem;
    line-height: 0.2rem;
    color:#ccc;
    text-align: left;
    padding-left: 0.12rem;
}
button{
    text-align: center;
    border-radius: 0.2rem;
    height: 0.4rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    margin-top: 3rem;
    border: none;
    width:90%;
    background:linear-gradient(left,#FF9B0C,#FD560D);
}
button span{
    text-align: center;
    color:#fff;
    line-height: 0.4rem;
}
/* 下拉选择框样式 */
.el-select-dropdown /deep/ .el-scrollbar__wrap{
    overflow: scroll;
    height:2rem !important;
}
=======
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
>>>>>>> 37068188bfc8add439f6e8a053cb5f9e31a6b45f
</style>