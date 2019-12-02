<template>
   <div class="main">
       <!--头部返回  -->
      <div class="header">
            <i @click='back'  class="el-icon-back"></i>
            <p class="title" v-show="false">已签收</p>
            <p class="title" v-show="true">派送中</p>
      </div>
      <!-- 寄快递 -->
      <div class="send">
          <div class="send_left">
              <li class="bird"><img src="../assets/image/bird.png" alt=""></li>
              <li class="express">
                  <p>寄快递</p>
                  <p>菜鸟包裹,24小时内上门</p>
              </li>
          </div>
          <div class="send_btn">
              <span>去寄快递</span>
          </div>
      </div>
      <!-- 物流信息 
           State参数:0 无轨迹
                     1 已揽收
                     2在途中
                     3签收
                     4有问题
       -->
      <div class="logistics">
           <!-- <div class="logistics_i">
                <div class="time">
                    {{item.AcceptTime}}
                </div>
                <div class="logistics_right">
                        <div class="item">
                            <img src="../assets/image/collect_item.png" alt="">
                        </div>
                       
                        <div class="received">
                              [收货地址]湖北省武汉市江汉区江汉路花楼街518号
                         </div>
                </div>

           </div> -->
           <div class="logistics_i" v-for="(item,index) in newList" :key="index">
               <div class="time">
                   <p>{{item.oneTime}}</p>
                   <p>{{item.subTime}}</p>
               </div>
               <div class="logistics_right">
                   <!-- 根据信息显示对应的照片 -->
                   <div class="item_i">
                        
                       <!-- <img src="../assets/image/true.png" alt=""> -->
                   </div>
                   <div class="logistics_title">已签收</div>
                   <div class="test">
                         {{item.AcceptStation}}
                    </div>
               </div>
           </div>
      </div>
      <!-- 抢红包链接 -->
      <div class="rob">
          <img src="../assets/image/rob.png" alt="">
      </div>
     
   </div>


</template>

<script>
//公共的头部
import Head from '@/components/Head.vue'

export default{
    data(){
        return{
            expressList:'',//快递订单号
            messageList:[],//请求到的物流信息    
            newList:[],//新的倒序排列的数组
            //后台返回的快递信息数据
            ticketList:[
                {status:0},
                {status:1},
                {status:2},
                {status:3},
                {status:4},
            ] 
        }
    },
    //定义过滤器赛选数据 返回状态文字
    filters:{
        getStatus(key){
            let status='';
            switch(key){
                case 0:
                    status="无轨迹"
                    break
                case 1:
                    status="已揽收"
                    break 
                case 2:
                    status="在途中"
                    break
                case 3:
                    status="签收"
                    break
                case 1:
                    status="有问题"
                    break              
            }
            return status
        }
    },
    methods:{
        //返回上一级目录
        back(){
            this.$router.go(-1)
        },
       
    },
    created(){
        //获取物流信息
        // this.getMessage();
       //商品id
       this.id= this.$route.params.orderId;
       this.$axios.post("/order/logisticsInfo",{orderId:this.$route.params.orderId})
                .then(res=>{
                    this.messageList=res.data.data.Traces;
                })
    },
    mounted(){
        console.log(this.$route.params.orderId);
        this.id= this.$route.params.orderId;
         //根据订单号请求快递信息
            this.$axios.post("/order/logisticsInfo",{orderId:this.$route.params.orderId})
                .then(res=>{   
                    this.messageList=res.data.data.Traces;
                    console.log(this.messageList)
                    this.newList=this.messageList.reverse();                   
                    //时间排列
                    for(let i=0;i<=this.newList.length;i++){
                        // console.log(this.newList.length);
                        let allTime=this.newList[i].AcceptTime;
                        let Time=allTime.split(" ");
                        let newTime=Time[0].split("-");
                        let oneTime=newTime[1]+"-"+newTime[2]
                        let subTime=Time[1]
                        this.newList[i].oneTime = oneTime;
                        this.newList[i].subTime = subTime;
                    }    
                })
    },
   
}

</script>


<style scoped>   
li{
    list-style: none;
} 
.main{
    background-color: #F5F6FA;
    padding-right: 0.09rem;
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
 /* 寄快递样式 */
 .send{
     margin: 0.12rem;
     height:0.68rem;
     border-radius: 0.2rem;
     display: flex;
     justify-content: space-between;
     background:linear-gradient(left,#FF9B0C,#FD560D);
 }
 .send_left{
     display: flex;
     justify-content: space-between;
 }
 .bird{
     width: 0.5rem;
     height: 0.5rem;
     padding: 0.08rem;
 }
 .bird>img{
     width: 100%;
 }
 .express{
     color:#fff;
     font-size: 0.16rem;
     padding: 0.08rem;
     line-height: 0.26rem;
 }
 .send_btn{
     margin-top: 0.1rem;
     margin-right: 0.2rem;
 }
 .send_btn span{
     border:1px solid #fff;
     color:#fff;
     border-radius: 0.08rem;
     line-height: 0.6rem;
     padding-top: 0.04rem;
     padding-bottom: 0.03rem;
     padding-left: 0.09rem;
     padding-right: 0.09rem;
     font-size: 0.1rem;
 }
 /* 物流详情 */
 .logistics{
     margin-left: 0.14rem;
     margin-right: 0.12rem;
     padding-top: 0.3rem;
     padding-bottom: 0.3rem;
     width: 92%;
     overflow: hidden;
     overflow: auto;
     background-color: #fff;
     border-radius: 0.12rem;
 }
 .rob{
     margin-top: 0.12rem;
     padding-left: 0.04rem;
     padding-right: 0.04rem;
     padding-bottom: 0.08rem;
 }
 .rob>img{
     width: 100%;
 }
 .logistics_i{
     display: flex;
     justify-content: space-between;
 }
 .time{
     padding-left: 0.1rem;
     /* padding-top: 0.1rem; */
     width: 3rem;
 }
 .time p:nth-child(1){
    font-size: 0.12rem;
    font-weight: 600;
    color: #5C6165;
    padding-left: 0.06rem;
    padding-bottom: 0.08rem;
 }
 .time p:nth-child(2){
     font-size: 0.08rem;
     color:#CECECE;
 }
 .logistics_right{
     margin-left: 0.1rem;
     width:14rem;
     position: relative;
     border-left:1px dashed #888888;
 }
 .item_i{
    position: absolute;
    left: -0.06rem;
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 0.1rem;
    background-color: #C8C8C8;
    /* background:url("../assets/image/true.png") no-repeat; */
 }
 .spot{
     position: absolute;
     left:-0.06rem;
     top:0.06rem;
 }
 .spot_box{
     width: 0.11rem;
     height: 0.11rem;
     border-radius: 0.11rem;
     background-color: #C8C8C8;
 }
 .logistics_title{
     padding-left: 0.16rem;
 }
 .test{
     font-size: 0.06rem;
     text-align: left;
     color:#C9C9C9;
     padding-top: 0.08rem;
     padding-bottom: 0.1rem;
     padding-left: 0.1rem;
     padding-right: 0.12rem;
 }
 .test_phone{
     color:#FF9E29;
     
 }
 .received{
    font-size: 0.06rem;
    text-align: left;
    padding-top: 0.12rem;
    padding-bottom: 0.1rem;
    padding-left: 0.2rem;
    padding-right: 0.12rem;
 }

 

</style>