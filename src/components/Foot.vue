<template>
    <div class="footer">
        <div class="footerBar">
            <ul>
                <!-- <router-link to="/">
                <li class="active">
                    <img src="" alt="">
                    <span>首页</span></li>
                </router-link>
                 <router-link to="givewarm">
                <li class="footerBarLi">
                    <img src="" alt="">
                    <span>送温暖</span></li>
                  </router-link>
                <li class="footerBarLi">
                    <img src="" alt="">
                    <span>我的</span></li> -->
            <li :class="{'footerBarli':!item.isActive,'active':item.isActive }"  
            @click='changeActive(index)' v-for="(item,index) in list" :key="index">
      
     <img src="" alt="">
  <span>{{item.content}}</span>

   </li>

            </ul>
        </div>
    <div class="bottomLine"></div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'

export default {

  data(){
    return{
    
    }
  },
  computed: {
      ...mapState(['list'])
  },
  methods: {  
     changeActive(index){  
        
    
       for(var i=0;i<this.list.length;i++){
          this.list[i].isActive=false;
       }
      this.list[index].isActive = true; 
      
        if(index==0){
        this.$router.push({name:"home"})
     };
     if(index==1){
         this.$router.push({name:'givewarm'})
     };
     if(index==2){
         this.$router.push({name:'mine'})
     }
      console.log( this.list[index].isActive)
     }
  },
    mounted(){
    
    },
    
}
</script>

<style scoped>
.footer{
    width: 100%;
    height: 0.83rem;
    background-color: white;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    /* top: 0; */
}
.footerBar{
    width: 3.43rem;
    height: 0.36rem;
    /* background: blue; */
    margin: auto;
    margin-top: 0.08rem;
}
.footerBar ul li{
    float: left;
    box-sizing: border-box;
    width: 1.1rem;
    height: 0.36rem;
    margin-right: 0.04rem;
    color: #000000;
}

.footerBar .active{
    border: 0;
    border-radius: 0.16rem;
    background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: linear-gradient(to left, #D50000, #FD9A28) !important;
}
.footerBar ul li img{
 margin-top: 0.08rem;
 margin-left: 0.25rem;
  width: 0.19rem;
  height: 0.2rem;
  color: grey;
  float: left;
}
.footerBar ul li span{
    font-size: 0.14rem;
    font-family: "PingFangSC-Semibold";
    font-weight: 510;
    line-height: 0.36rem;
    margin-left: 0.07rem;
}
.footer .bottomLine{
     width: 1.33rem;
     height: 0.05rem;
     border-radius: 0.02rem;
     background: #000000;
     margin: auto;
     margin-top: 0.19rem;
}

</style>