<template>

    <div class="head">
       
       <div class="goback" @click="goback">
         
          <img src="../assets/image/goback.png" alt="">
          
        </div> 
         <slot name="title"></slot>
         <van-search placeholder="请输入搜索关键词" @change="onSearch" v-model="value" v-if="searchShow"/>
   
    </div>
    
</template>

<script>
import {mapState,mapMutations} from "vuex";
export default {
    data() {
        return {
            value:"",
        }
       
    },
     methods: {
           goback(){
                 this.$router.go(-1);
           } ,
           onSearch(){
                console.log(this.value);
            this.$axios.post("/order/listSearch",{
             showType:"",
             page: 1,
             limit:100,
             sort:"update_time",
             order:"desc",
             keywords:this.value,
         }).then(res=>{
             console.log(res)
            //  this.listsearch=res.data.data.list;
            //    console.log( this.listsearch)
            //    console.log( this.listsearch[0].goodsList[0])
         })
           }
        },
        computed: {
     ...mapState(['searchShow']),
  },
}
</script>

<style  scoped>
     .head{
         height: 0.54rem;
         background-color: white;
         margin-top: 0.2rem;
     }
    .goback{
        width: 0.2rem;
        height: 0.2rem;
        margin-left: 0.16rem;
        float: left;
         margin-top: 0.16rem;  
    }
    .goback img{
         width: 0.2rem;
         height: 0.2rem;
    }
     .van-search {
         width: 3rem;
         float: left;
         margin-left: 0.26rem;
     }
    .van-search .van-search__content {

    width: 3rem;
    padding-left: 8px;
    background-color: #f7f8fa;
    border-radius: 0.16rem;
}
</style>