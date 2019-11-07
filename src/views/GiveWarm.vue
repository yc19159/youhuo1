<template>
    <div class="givewarm">
      <div class="top">
          <img src="../assets/image/jiesuan_dingwei.png" alt="" class="weizhi">
          <input type="text" class="search" placeholder="请输入收货地址" v-model="value" @change="getValue">
      </div>
      <div class="tobuy">
          <img src="../assets/image/search.png" alt="" class="searchImg">
          <router-link to="givewarmdetail">
         <input type="text" class="want" placeholder="请输入你想买的花"> 
         </router-link>
      </div>

      <div class="bg_flowers">
          <ul class="flowers">
              <li>
                  <img src="../assets/image/gw_flower1.png" alt="">
                  <p>百合</p>
                  </li>
              <li>
                  <img src="../assets/image/gw_flower2.png" alt="">
                  <p>百合</p>
              </li>
              <li>
                  <img src="../assets/image/gw_flower3.png" alt="">
                  <p>百合</p>
              </li>
              <li>
                  <img src="../assets/image/gw_flower4.png" alt="">
                  <p>百合</p></li>  
          </ul>

      </div>
      <Foot/>
    </div>
</template>

<script>
import Foot from "@/components/Foot.vue"
export default {
     data(){
        return{
           value:'',
        }
    },
    components:{
    Foot,
    },
    methods: {
        getValue(){
            console.log(this.value)
        }
    },
}
</script>

<style  scoped>

  .givewarm{
      width: 100%;
      /* background-color: #F5F6FA; */
      overflow: hidden;
      background-image: url("../assets/image/gw_beijin.png") ;
      background-repeat: no-repeat;
      background-position: -0.7rem 0rem;
      background-color: #F5F6FA;
      background-size: 5.03rem 5.20rem;
  }
  .top{
      width: 3.43rem;
      height: 0.4rem;
      margin: auto;
      margin-top: 0.15rem;
      position: relative;
  }
  .top .weizhi{
      position: absolute;
      width: 0.14rem;
      height: 0.16rem;
      top: 0.13rem;
      left: 0.2rem;
  }
  .top .search{
   width: 100%;
   height: 0.4rem;
   outline: none;
   border: none;
   border-radius: 0.2rem;
   text-indent: 0.45rem;
   background: white;
  }
  .top .search::-webkit-input-placeholder {
    color: #C7C7C7;
    font-size: 0.14rem;
    }
    .tobuy{
       width: 3rem;
       height: 0.46rem;
       position: relative;
       border-radius: 0.23rem;
       margin-left: 0.37rem;
       margin-top: 4.4rem;
       overflow: hidden;
    }
    .tobuy .want{
        width: 3rem;
        height: 0.46rem;
        background: white;
        outline: none;
        border: none;
        text-indent: 0.4rem;
    }
    .tobuy .searchImg{
        position: absolute;
        left: 0.2rem;
        top: 0.15rem;
        width: 0.15rem;
        height: 0.16rem;
    }
    .bg_flowers{
        width: 3.43rem;
        height: 2.33rem;
        margin: auto;
        margin-top: 0.3rem;
        overflow-x: scroll;
    }
    .bg_flowers .flowers{
        width: 4.12rem;
        height: 1.13rem;
       
    }
    .bg_flowers .flowers li{
        width: 1.03rem;
        height: 1.13rem;
        float: left;
        text-align: center;
    }
     .bg_flowers .flowers li img{
         width: 0.73rem;
         height: 0.73rem;
         margin-left: 0.1rem;
     }
</style>