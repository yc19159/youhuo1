<template>
  <div class="flowershoplist">
    <div class="head_bg">
      <div class="headbox">
        <div class="inputbox">
          <img src="../assets/image/flowershoplist_search.png" alt="">
          <input type="text" placeholder="请输入搜索内容">
        </div>
        <div @click="choosecity" class="positionbox">
          <span class="city">{{city}}</span>
          <img src="../assets/image/flowershoplist_position.png" alt="">
        </div>
      </div>
      <div class="hotsearch">
        <div class="title">热搜:</div>
        <div class="content">
          <span>送长辈</span>
          <span>送恩师</span>
          <span>康乃馨</span>
          <span>玫瑰</span>
          <span>郁金香</span>
        </div>
      </div>
    </div>
    <div class="listcontent">
      <div class="btnbox">
        <div class="first">
          <div @click="choosebtn(1)" class="btn">
            <van-dropdown-menu :class="curbtn==1?'active':''" active-color="#F74396">
              <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
          </div>
        </div>
        <div>
          <div @click="choosebtn(2)" :class="curbtn==2?'active':''" class="btn">销量</div>
        </div>
        <div>
          <div @click="choosebtn(3)" :class="curbtn==3?'active':''" class="btn">新店</div>
        </div>
        <div>
          <div @click="choosebtn(4)" :class="curbtn==4?'active':''" class="btn">免费配送</div>
        </div>
      </div>
      <div class="positionbox">
        <img src="../assets/image/flowershoplist_position2.png" alt="">
        <div>送至：世纪中心</div>
        <div class="update" @click="updateposition">修改地址</div>
      </div>
      <div class="list">
        <div @click="toflowershop" class="item">
          <div class="left">
            <img src="../assets/image/flowerdetail_banner1.png" alt="">
          </div>
          <div class="right">
            <div class="title">唯爱鲜花店LoveForever</div>
            <div class="star">
              <img src="../assets/image/flowershoplist_star.png" alt="">
              <span class="startxt">4.5</span>
              <span class="soldcount">月销618</span>
            </div>
            <div class="pricebox">
              <span>起送¥0</span>
              <span>配送¥0</span>
              <span>2.7km</span>
            </div>
            <div class="feature">
              <div>“包装很好，花很新鲜”</div>
            </div>
            <div class="discount">
              <div>50减24</div>
              <div>100减52</div>
              <div>200减99</div>
              <div>新客减5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 选择地址弹出层 -->
    <!-- <van-popup v-model="showposition" position="bottom" :style="{ height: '100%' }" closeable> 
      <div class="container">
        <div class="head">
          <div @click="closepopup" class="left">
            <img src="../assets/image/flowershoplist_close.png" alt="">
          </div>
          <div class="right">
            <div class="inputbox">
              <img src="../assets/image/flowershoplist_search.png" alt="">
              <input type="text" placeholder="请输入搜索内容">
            </div>
          </div>
        </div>
        <div class="city">
          <van-index-bar :index-list="list">
            <div class="" v-for="(i,index) of citylist" :key="index">
              <van-index-anchor :index="i.name">
                <span>{{i.name}}</span>
                <van-cell v-for="(item,ind) of i.cities" :key="ind" :title="item.name" />
              </van-index-anchor>
            </div>
          </van-index-bar>
        </div>
      </div>
    </van-popup> -->
  </div>
</template>
<script>
import {cityData} from '../utils/city.js'
export default {
  data() {
    return {
      curbtn:1,
      value1: 0,
      city: this.$store.state.chosencity || '武汉市',
      citylist: cityData,
      showposition: false,
      list:["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
      option1: [
        { text: '综合', value: 0 },
        { text: '好评优先', value: 1 },
        { text: '起送价最低', value: 2 },
        { text: '配送费最低', value: 3 }
      ]
      
    }
  },
  methods: {
    toflowershop(){
      this.$router.push('/flowershop')
    },
    closepopup(){
      this.showposition = false
    },
    choosecity(){
      this.$router.push('/position')
    },
    choosebtn(i){
      this.curbtn = i
    },
    updateposition(){
      sessionStorage.lastUrl=this.$route.path
      this.$router.push('/addressmanage')
    }
  },
  mounted() {
    console.log(this.$store.state.chosencity);
  },
}
</script>
<style>
/* vant样式 */
.flowershoplist .van-dropdown-menu{
  /* background: #F5F6FA; */
  height: 0.3rem;
}
.flowershoplist .van-dropdown-menu__title{
  font-size: 0.13rem;
  /* color: #999999; */
}
.van-hairline--top-bottom::after {
    border-width: 0 0;
}
.van-cell__title{
  font-weight: normal;
}

/* 页头 */
.flowershoplist .head_bg{
  width: 100%;
  height: 1.35rem;
  background: url('../assets/image/flowershoplist_bg.png');
  background-size: 100%;
}
.flowershoplist .head_bg::before{
  content: "";
  display: table;
}
.flowershoplist .headbox{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.4rem;
  padding: 0 0.16rem;
}
.flowershoplist input{
  width: 2.5rem;
  height: 0.36rem;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  color: #666;
  font-size: 0.13rem;
  padding: 0.10rem 0.3rem 0.12rem;
  border-radius: 0.18rem;
}
.flowershoplist input::placeholder{
  color: #C8C8C8;
  font-size: 0.12rem;
  /* line-height: 0.14rem;; */
}
.flowershoplist .inputbox{
  position: relative;
}
.flowershoplist .inputbox img{
  width: 0.16rem;
  height: 0.16rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
.flowershoplist .head_bg .positionbox{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.flowershoplist .head_bg .positionbox .city{
  color: #fff;
  font-size: 0.16rem;
  font-weight: 600;
}
.flowershoplist .head_bg .positionbox img{
  width: 0.12rem;
  height: 0.16rem;
  margin-left: 0.1rem;
}
/* 热搜 */
.flowershoplist .hotsearch{
  display: flex;
  margin-top: 0.2rem;
  padding: 0 0.16rem;
  color: #fff;
  font-size: 0.12rem;
}
.flowershoplist .hotsearch .title{
  line-height: 0.2rem;
}
.flowershoplist .hotsearch .content{
  width: 3.10rem;
  margin-left: 0.05rem;
  display: flex;
  justify-content: space-between;
}
.flowershoplist .hotsearch .content span{
  height: 0.2rem;
  line-height: 0.2rem;
  padding: 0 0.08rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.1rem;
}
/* 内容 */
.flowershoplist .listcontent .btnbox{
  display: flex;
  color: #999999;
  font-size: 0.13rem;
  margin: 0.2rem 0;
}
.flowershoplist .listcontent .btnbox>div{
  width: 25%;
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
}
/* .flowershoplist .listcontent .btnbox .first{
  width: 40%;
} */
/* .flowershoplist .listcontent .btnbox .btn{
  height: 0.32rem;
  line-height: 0.32rem;
  padding: 0 0.1rem;
  background: #F5F6FA;
  border-radius: 0.16rem;
} */
.flowershoplist .listcontent .btnbox .active{
  color: #333;
  font-weight: 600;
}

.flowershoplist .listcontent .positionbox{
  display: flex;
  align-items: center;
  padding: 0 0.16rem;
  color: #333;
  font-size: 0.16rem;
  font-weight: 600;
}
.flowershoplist .listcontent .positionbox img{
  width: 0.125rem;
  height: 0.16rem;
  margin-right: 0.1rem;
}
.flowershoplist .listcontent .positionbox .update{
  height: 0.2rem;
  line-height: 0.2rem;
  padding: 0 0.15rem;
  border-radius: 0.1rem;
  margin-left: 0.1rem;
  background: #F5F6FA;
  color: #999;
  font-size: 0.1rem;
}
/* 花店列表 */
.flowershoplist .listcontent .list .item{
  padding: 0 0.16rem;
  margin-top: 0.2rem;
  display: flex;
}
.flowershoplist .listcontent .left{
  width: 0.85rem;
}
.flowershoplist .listcontent .left img{
  width: 100%;
  border-radius: 0.05rem;
}
.flowershoplist .listcontent .right{
  width: 2.48rem;
  padding-left: 0.05rem;
  color: #333333;
  font-size: 0.16rem;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
}
.flowershoplist .listcontent .star{
  display: flex;
  align-items: center;
  margin-top: 0.13rem;
}
.flowershoplist .listcontent .star img{
  width: 0.12rem;
  height: 0.115rem;
}
.flowershoplist .listcontent .star .startxt{
  color: #FF8C00;
  font-size: 0.12rem;
  margin-left: 0.04rem;
}
.flowershoplist .listcontent .star .soldcount{
  color: #999999;
  font-size: 0.12rem;
  font-weight: normal;
  margin-left: 0.1rem;
}
.flowershoplist .listcontent .pricebox{
  display: flex;
  color: #999;
  font-size: 0.12rem;
  font-weight: normal;
  margin-top: 0.07rem;
}
.flowershoplist .listcontent .pricebox span+span{
  margin-left: 0.08rem;
}
.flowershoplist .listcontent .feature{
  display: flex;;
  margin-top: 0.08rem;
}
.flowershoplist .listcontent .feature div{
  height: 0.2rem;
  line-height: 0.2rem;
  color: #F74396;
  font-size: 0.11rem;
  background: rgba(254, 137, 187, 0.2);
  border-radius: 0.1rem;
}
.flowershoplist .listcontent .discount{
  display: flex;
  justify-content: space-between;
  margin-top: 0.07rem;
}
.flowershoplist .listcontent .discount div{
  color: #FF8E00;
  height: 0.2rem;
  padding: 0 0.09rem;
  line-height: 0.2rem;
  font-size: 0.11rem;
  font-weight: normal;
  border-radius: 0.1rem;
  border: 0.5px solid rgba(255, 141, 0, 0.4);
}
/* 位置 */
.flowershoplist .container{
  width: 100%;
}
.flowershoplist .container .head{
  display: flex;
  padding: 0.1rem 0.16rem;
  align-items: center;
}
.flowershoplist .container .head input{
  background: #F5F6FA;
}
.flowershoplist .container .head .inputbox{
  margin-left: 0.3rem;
}

</style>