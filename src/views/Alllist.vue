<template>
    <div>
        <Head ></Head>
      <div class="content">
         <el-tabs :tab-position="tabPosition" v-model="activeName" style="height: 200px;">
    <el-tab-pane label="超值套餐" name="超值套餐">
      <ul class="listUl">
         <li  v-for="(item , i) in firstList" :key="i">
           <p><router-link
            :to="{name:'search',params:{typeId:item.id}}"> <img :src="item.iconUrl" alt="" class="jiadianImg"> 
            </router-link></p>
        <span class="phoneType">{{item.name}}</span></li>
        </ul>
      </el-tab-pane>
    <el-tab-pane label="智能手机" name="智能手机">
      <ul class="listUl">
         <li ><p></p>
        <span class="phoneType">苹果</span></li>
      </ul></el-tab-pane>
    <el-tab-pane label="电脑/平板" name="电脑/平板"><ul class="listUl">
         <li ><p></p>
        <span class="phoneType">苹果</span></li>
      </ul></el-tab-pane>
    <el-tab-pane label="摄影航拍" name="摄影航拍"><ul class="listUl">
         <li ><p></p>
        <span class="phoneType" >苹果</span></li>
      </ul></el-tab-pane>
    <el-tab-pane label="游戏设备" name="游戏设备"><ul class="listUl">
         <li ><p></p>
        <span class="phoneType" >苹果</span></li>
      </ul></el-tab-pane>
    <el-tab-pane label="家居家电" name="家居家电" class="jiadian">
      <ul class="listUl">
         <li  v-for="(item , i) in list" :key="i">
            <router-link :to="{name:'search',params:{typeId:item.id}}">  
             <p><img :src="item.iconUrl" alt="" class="jiadianImg"> </p>
            </router-link>
            <span class="phoneType">{{item.name}}</span>
        </li>
      </ul></el-tab-pane>
    <el-tab-pane label="办公设备" name="办公设备"><ul class="listUl">
         <li ><p></p>
        <span class="phoneType">苹果</span></li>
      </ul></el-tab-pane>
    <el-tab-pane label="旅游户外" name="旅游户外"><ul class="listUl">
         <li ><p></p>
        <span class="phoneType">苹果</span></li>
      </ul></el-tab-pane>

  </el-tabs>
      </div>
     
    </div>
</template>
<script>
import {mapState,mapMutations} from "vuex";
import Head from "@/components/Head.vue"

export default {
      data() {
    return {
      activeName:"超值套餐",
      active: 2,
      tabPosition: 'left',
      firstList: [],
      secondList: [],
      thirdList: [],
      fouthList: [],
      fifthList: [],
      sixthList: [],
      seventhList: [],
      eighthList: [],
    };
  },
  components:{
     Head,
  },
  methods: {
      ...mapMutations(['changeSearch']),
  },
  computed: {
       ...mapState(['searchShow']),
              active:{
            get(){
              
                return this.$store.state.active;
            },
            set(newVal){
                // newVal=this.$route.params.active;
               
               var newVal=this.$route.params.active*1
                 console.log(newVal)
                this.$store.commit("changeActive",newVal);
            }
        }
  },
  mounted() {
     this.changeSearch(true);
    console.log(this.active)
      this.$axios.get("/goods/category",{
        params:{
          id:"1005000",
        }
      }).then(res=>{
        this.firstList=res.data.data.brotherCategory
        console.log(this.firstList)
      })
     
  },
}
</script>
<style scoped>
.content{
position: relative;
}
.el-tabs--left{
  width: 100%;
  margin-top: 0.2rem;
  height: 100% !important;
}
.el-tabs--left /deep/ .el-tabs__item {
    padding: 0 20px;
    width: 0.89rem;
    height: 0.58rem;
    -webkit-box-sizing: border-box;
    font-family: "PingFangSC-Semibold";
    box-sizing: border-box;

    list-style: none;
    font-size: 13px;
    font-weight: bold;
    font-weight: 500;
    color: #303133;
    position: relative;
    background: #F5F6FA;
    top: 0rem;
    text-align: center;
    line-height: 0.58rem;
}
.el-tabs--left /deep/.is-active{
      width: 0.89rem;
      height: 0.58rem;
      color: #007BFF !important;
      background-color: white;
      text-align: center;
      line-height: 0.58rem;
}
.el-tabs--left /deep/ .el-tabs__item:first-child{
  border-top-right-radius:0.12rem;
}
.el-tabs--left /deep/ .el-tabs__active-bar{
    margin-top: 0.19rem;
    height: 0.2rem !important;
}  
.listUl{
    height: 100%;
    margin-left: 0.05rem;
}
.listUl li{
  width: 0.9rem;
  height: 1.2rem;
  float: left;
  box-sizing: border-box;
}
.listUl li p{
  box-sizing: border-box;
  margin: auto;
  width: 0.7rem;
  height: 0.7rem;
}
.listUl li p .jiadianImg{
  width: 0.44rem;
  height: 0.44rem;
  margin-left: 0.13rem;
  padding-top: 0.13rem;
}
.listUl li .phoneType{
  display: inline-block;
  width: 0.9rem;
  margin-top: 0.1rem;
  text-align: center;
  font-family: "PingFangSC-Regular";
  font-size: 13px;
  color: #2F3031;
}
.el-tabs--left /deep/.jiadian .listUl li .img{
  width: 0.44rem;
  height: 0.44rem;
  margin-left: 0.13rem;
  margin-top: 0.13rem;
}
</style>