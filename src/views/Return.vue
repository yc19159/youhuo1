<template>
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
    </div>
</template>

<script>
export default {
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
 
   
}
</script>

<style  scoped>
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
</style>