<template>
    <div class="main">
         <!-- 评论页面头部 -->
         <div class="header">
                <i @click='back'  class="el-icon-back"></i>
                <input type="text" placeholder="请输入搜索内容">
                <p class="title" @click="cli">管理</p>
         </div>
        <!-- 收藏商品列表 -->
        <div class="goods">
            <ul style="overflow: auto;">
                <li class="goods_i" v-for="(item,index) in collectionList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
                  
                   <!-- 收藏按钮样式 -->
                    <div class="input_check" v-show="dan">
                        <span class="ico_gou" 
                              :class="{'ico_gou_on':item.checked}"
                              @click="selectGoods(item)"></span>
                    </div>
                    <div class="goods_img"><img :src="item.picUrl" alt=""> </div>
                    <div class="goods_text">   
                        <p class="introduce" 
                           style="width:2rem;
                                  overflow: hidden;
                                  white-space: nowrap;
                                  text-overflow: ellipsis;">
                                  {{item.brief}}
                        </p>
                        <p class="people">{{item.people}}收藏</p>
                        <p class="pice">&yen;{{item.retailPrice}}</p>
                    </div>
                    <!-- 删除单个收藏 -->
                    <div class="del_btn"
                         v-show="dan"
                         @click="remove(item.id)" 
                         style="margin-top: 0.6rem;font-size:0.2rem;">
                        <i class="el-icon-delete"></i>
                    </div>
                </li>
            </ul>
            <!-- 分页 -->
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]" 
            :page-size="pagesize"         
            layout="prev, pager, next"
            :total="collectionList.length">    <!--//这是显示总共有多少数据，-->
           </el-pagination>
            <!-- 全选删除按钮 -->
            <div class="delete" v-show="appear">
                 <div class="all">
                      <div class="all_btn"></div>
                      <div class="election">全选</div>
                </div>
                <div class="remove">删除</div>
            </div>
        </div>
       
        
    </div>
</template>


<script>
export default{
    data(){
        return{
            collectionList:"",//收藏订单数据列表
            appear:false,//管理状态按钮
            dan:false,//单个删除的显示状态
            currentPage:1,//初始页
            pagesize:4,//默认每页展示的数据
        }
    },
    methods:{
        //返回上一级目录
        back(){
           this.$router.go(-1)
        },
        //管理点击显示
        cli(){
            this.appear=!this.appear;
            this.dan=!this.dan;
        },
        //（单选）选择商品
        selectGoods(item){
            console.log(111)
            // if(typeof item.checked=='undefined');
            if(typeof item.checked=='undefined'){
                this.$set(item,"checked",true);
            }else{
                item.checked=!item.checked;
            }
        },
        //删除单个商品
        // delGoods(id,index){
        //    MessageBox.confirm('',{
        //        title:'',
        //        message:'确定删除该商品吗?',
        //        confirmButtonText:'确定',
        //        cancelButtonText:'取消'
        //    }).then(action=>{
        //        if(action=='confirm'){
        //            //刷新类表
        //            this.getList();
        //            //取消全选
        //            this.checkAll(false);
        //        }
        //    }).catch(error=>{});
        // },
        // 删除单个订单
        remove(id){
            // 添加样式
            
            this.collectionList.some((item,i)=>{
                if(item.id==id){
                    this.collectionList.splice(i,1);
                    return true;
                }
            })
        },
        // 删除全部
        // removeAll(){
        //     this.collectionList=""
        //     this.appear=false;
        // },
        //请求到的收藏数据
        getList(){
            let data=new FormData();
            data.append("type","0")
            data.append("limit","10")//从后台获取的数据的数量
            data.append("sort","add_time")
            data.append("order","desc")
            data.append("page","1")
            this.$axios.post("http://192.168.0.28:8080/wx/collect/list",data).then(res=>{
                console.log(res)
                this.collectionList=res.data.data.list
                console.log(this.collectionList)
            })
        },
        handleSizeChange:function(size){
              this.pagesize=size;
              console.log(this.pagesize)//每页下拉显示的数据
          },
          handleCurrentChange:function(currentPage){
              this.currentPage=currentPage;
              console.log(this.currentPage) //点击显示第几页
          },
    },
    created(){
        this.getList()
    }
}

</script>


<style scoped>
li{
    list-style: none;
}    
.main{
    padding-left: 0.12rem;
    padding-top: 0.1rem;
}
.header{
    padding: 0.15rem;
    top:0.1rem;
    padding-bottom: 0.3rem;
}
.header i{
    font-size: 0.26rem;
    font-weight: bold;
    float: left;
}
.header input{
    width: 70%;
    height: 0.34rem;
    border-radius: 0.3rem;
    border: none;
    padding-left: 0.16rem;
    background-color: #F5F6FA;
}
.title{
    float: right;
    padding-right: 0.12rem;
    font-size: 0.18rem;
    font-weight: bold;
}

/* 收藏商品 */
.goods_i{
    margin-top: 0.2rem;
    overflow: auto;
}
.goods_i .not{
    width:0.14rem;
    height:0.14rem;
    border-radius: 0.1rem;
    border:1px solid #ccc;
    float: left;
    margin-top: 0.4rem;
    margin-right: 0.1rem;
}
.goods_img{
    width:1rem;
    height:1.6rem;
}
.goods_img>img{
    width:100%;
}
.goods_i .goods_img{
    float: left;
}
.goods_i .goods_text{
    float: left;
    margin-left: 0.12rem;
}
.introduce{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    font-size: 0.16rem;
    padding-bottom: 0.1rem;
    font-weight: bold;
}
.people{
    color:#A7A7A7;
    font-size: 0.08rem;
    padding-top: 0.36rem;
}
.pice{
    color:#D03515;
    font-size: 0.16rem;
    font-weight: bold;
    padding-top: 0.4rem;
}
/* 全选删除按钮 */
.delete{
    width:90%;
    height:0.4rem;
    padding-top: 0.04rem;
    padding-bottom: 0.02rem;
    padding-right: 0.1rem;
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
    position: relative;;
    /* bottom:0.2rem; */
    border-radius: 0.4rem;
    background-color: #ccc;
}
.delete .all{
    float: left;
    padding-top: 0.1rem;
    padding-left: 0.2rem;
}
.all_btn{
    width:0.2rem;
    height:0.2rem;
    float:left;
    /* display: inline-block; */
    border:1px solid #ccc;
    border-radius: 0.1rem;
    background-color: #fff;
}
.election{
    float: left;
    padding-left: 0.1rem;
}
.remove{
    float: right;
    color:#fff;
    text-align:center;
    width:0.8rem;
    height:0.38rem;
    line-height: 0.38rem;
    border-radius: 0.38rem;
    background: linear-gradient(to right,#FF91BF,#F74296);
}

.ico_gou{
    width: 0.2rem;
    height: 0.2rem;
    float: left;
    border:1px solid #ccc;
    border-radius: 0.1rem;
    background-color: #fff;
}
.ico_gou{
    background-color:#fff;
}
.ico_gou_on{
    background: url("../assets/image/checklist_icon.png");
    background-size:cover;
}
 
</style>


