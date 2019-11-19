<template>
    <div class="personal-data">
         <Head ></Head> 
       <p class="title">意见反馈</p>

       <div >
           <textarea v-model="content" name="" id=""  placeholder="请描述您的问题与意见" :style="{background:'#F5F6FA','width':'3.43rem',height:'2rem',
           'margin-left':'0.16rem','margin-top':'0.2rem','text-indent':'0.12rem','padding-top':'0.1rem',
            border:'none'}">

           </textarea>
       </div>
      <button class="sure" @click="Submission">确定</button>
    </div>
</template>

<script>
import  {mapState,mapMutations} from 'vuex';
import Head from '@/components/Head.vue'

export default {
    data() {
        return {
            content:'',//用户评论商品信息
            mobile:'',
            feedType:'',
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
        //提交意见反馈
        Submission(){
            console.log(111)
            console.log(this.content)
            this.$axios.post("http://192.168.0.22:8080/wx/feedback/submit",{
                content:'this.content',
                mobile:18271464371,
                feedType:0
            })
            .then(res=>{
                console.log(res);
            })
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
  
  .sure{
  width: 3.43rem;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  margin-top: 1.6rem;
  background: -webkit-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -o-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: -moz-linear-gradient(to left, #D50000, #FD9A28) !important;
    background: linear-gradient(to left, #D50000, #FD9A28) !important;
  border: 0;
  outline: 0;
  border-radius: 0.22rem;
  margin-left: 0.16rem;
  font-size: 0.14rem;
  color: white;
}
 textarea::-webkit-input-placeholder {
   font-size: 0.14rem;
   text-indent: 0.12rem;
   color: #5E6165;
}
</style>