<template>
  <div class="flowerarea">
    <Head></Head>
    <div class="content">
      <div class="leftbar">
          <div @click="chooseLeftBar(0)" :class="leftactive==0?'active':''" class="item">附近</div>
          <div @click="chooseLeftBar(1)" :class="leftactive==1?'active':''" class="item">热门商业圈</div>
          <div @click="chooseLeftBar(2)" :class="leftactive==2?'active':''" class="item">行政区/商圈</div>
        </div>
        <div class="rightlist">
          <div v-show="leftactive==0" class="nearby">
            <div class="item active">1km
              <img src="../assets/image/flowerarea_left.png" alt="">
            </div>
            <div class="item">3km</div>
            <div class="item">5km</div>
            <div class="item">10km</div>
          </div>
          <div v-show="leftactive==1" class="hot">
            <div class="item active">光谷/鲁巷
              <img src="../assets/image/flowerarea_left.png" alt="">
            </div>
            <div class="item">江汉路/南京路</div>
            <div class="item">汉街</div>
            <div class="item">中南路</div>
          </div>
          <div v-show="leftactive==2" class="xingzheng">
            <div class="itemlist">
              <div class="title">
                <div class="left">洪山区</div>
                <div class="right" @click="aaa">
                  <span>{{arrowmsg}}</span>
                  <img :class="arrow?'img':''" src="../assets/image/flowerarea_arrowdown.png" alt="">
                </div>
              </div>
              <div :class="arrow?'all':''" class="content">
                <div class="item active">光谷/鲁巷
                  <img src="../assets/image/flowerarea_left.png" alt="">
                </div>
                <div class="item">江汉路/南京路</div>
                <div class="item">汉街</div>
                <div class="item">中南路</div>
                <div class="item">江汉路/南京路</div>
                <div class="item">汉街</div>
                <div class="item">中南路</div>
                <div class="item">江汉路/南京路</div>
                <div class="item">汉街</div>
                <div class="item">中南路</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import Head from '@/components/Head.vue';
export default {
  data() {
    return {
      arrow: false,
      arrowmsg: "全部",
      leftactive:0
    }
  },
  methods: {
    aaa(){
      if(this.arrow){
        this.arrowmsg = "全部"
      }else{
        this.arrowmsg = "收起"
      }
      this.arrow = !this.arrow;
    },
    chooseLeftBar(i){
      this.leftactive = i;
    }
  },
  components: {
    Head,
  },
}
</script>
<style scoped>

.flowerarea>.content{
  padding: 0 4%;
  margin-top: 0.15rem;
  display: flex;
}
.flowerarea .leftbar{
  width: 28%;
  font-size: 0.14rem;
  /* background: #ddd; */
  box-sizing: border-box;
  color: #666666;
}

.flowerarea .leftbar .item{
  margin-bottom: 0.28rem;
}
.flowerarea .leftbar .active{
  color: #333;
  font-weight: bold;
}
.flowerarea .rightlist{
  width: 72%;
  height: 1rem;
}
.flowerarea .nearby, .flowerarea .hot, .flowerarea .xingzheng .content{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
/* 行政区*/
.flowerarea .xingzheng .title{
  display: flex;
  padding-bottom: 0.15rem;
  justify-content: space-between;
}
.flowerarea .xingzheng .itemlist{
  margin-bottom: 0.15rem;
}
.flowerarea .xingzheng .title .left{
  font-size: 0.16rem;
  font-weight: bold;
  color: #333333;
}
.flowerarea .xingzheng .title .right{
  display: flex;
  font-size: 0.11rem;
  color: #666666;
  align-self: flex-end;
}
.flowerarea .xingzheng .title .right img{
  width: 0.14rem; 
}
.flowerarea .xingzheng .content{
  transition: all .5s ease-in-out;
}
.flowerarea .xingzheng .all{
  height: 0.9rem;
  overflow: hidden;
  transition: all .5s ease-in-out;
}
/* 右边每一个小盒子 */
.flowerarea .rightlist .item{
  width: 0.75rem;
  height: 0.36rem;
  margin-bottom: 0.08rem;
  background: #F5F6FA;
  text-align: center;
  line-height: 0.36rem;
  font-size: 0.14rem;
  color: #666666;
  border-radius: 0.06rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.flowerarea .rightlist .active{
  border: 1px solid #FF8D00;
  background: rgba(255, 141, 0, 0.1);
  color: #333;
  font-weight: bold;
  position: relative;
}
.flowerarea .rightlist .active img{
  width: 0.22rem;
  height: 0.22rem;
  position: absolute;
  right: 0;
  bottom: 0;
  transition: all 2s ease-in;
}
.flowerarea .rightlist .xingzheng .title .right .img{
  transform: rotate(180deg);
}
</style>