<template>
    <div class="personal-data">
         <Head ></Head> 
       <p class="title">设置</p>
       <div class="modify">
           <p class="tx-p">修改密码</p>
           <img src="../assets/image/more.png" class="more" alt="">
       </div>
       <div class="address">
           <p class="nick">地址管理</p>
            <img src="../assets/image/more.png" class="more" alt="">
       </div>
       <div class="aboutUs">
             <p class="hy-title">关于我们</p>
            <img src="../assets/image/more.png" class="more" alt="">
             <span class="hy-level">1.1.0</span>
       </div>
        <div class="loginOut">
             <p class="loginOut-title" @click="loginOut">退出登录</p>
             <img src="../assets/image/more.png" class="more" alt="">
            
       </div>
       <div v-for="(item,i) in array" :key="i">
                {{item}}
       </div>
    </div>
</template>

<script>
import  {mapState,mapMutations} from 'vuex';
import Head from '@/components/Head.vue'

export default {
    data() {
        return {
            array:['小明','xiaohong','xiaofang']
        }
    },
    components:{
     Head,
    },
   computed: {
       ...mapState(['searchShow']),
   },
    mounted() {
        this.changeSearch(false);
    },
    methods: {
        ...mapMutations(['changeSearch']),
        loginOut(){
             localStorage.removeItem('token');
             this.$router.push('login')
        }
    },
}
</script>

<style  scoped>
   .title{
  float: right;
  height: 0.2rem;
  width: 0.8rem;
  font-size: 0.18rem;
  line-height: 0.2rem;
  font-weight: bold;
  position: absolute;
  top: 0.18rem;
  left: 0.6rem;
 }
 .more{
     width: 0.08rem;
     height: 0.12rem;
     float: right;
     margin-top: 0.2rem;
   }
 .modify,.address, .aboutUs, .loginOut{
  width: 3.43rem;
  height: 0.54rem;
  margin: auto;
  margin-top: 0.4rem;
  line-height: 0.54rem;
 }
 
 .modify .tx-p{
   float: left;
   font-size:0.15rem;
   font-weight: bold;
 }
 .modify .tx-img{
  width: 0.54rem;
  height: 0.54rem;
  border-radius: 50%;
  float: right;
  background: grey;
  margin-right: 0.12rem;
 }
 .address{
     margin-top: 0.1rem;
 }
 .address .nick{
   float: left;
   font-size:0.15rem;
   font-weight: bold;
 }
 .address .name{
     float: right;
     margin-right: 0.12rem;
     font-size: 0.14rem;
     color: #5E6165
 }
.aboutUs{
    margin-top: 0.1rem;
}
.aboutUs .hy-title{
   float: left;
   font-size:0.15rem;
   font-weight: bold;
}
.aboutUs .hy-level{
     float: right;
     margin-right: 0.12rem;
     font-size: 0.14rem;
     color: #5E6165
}
.loginOut{
     margin-top: 0.1rem;
}
.loginOut .loginOut-title{
   float: left;
   font-size:0.15rem;
   font-weight: bold;
}
</style>