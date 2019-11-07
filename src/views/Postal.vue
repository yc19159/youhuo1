<template>
    <div class="postal">
         <Head ></Head> 
       <p class="title">包邮卷</p>
       <div class="deliveryPostal">
            <img src="../assets/image/postal_diyongquan.png" alt="">
       </div>
      
    </div>
</template>

<script>
import  {mapState,mapMutations} from 'vuex';
import Head from '@/components/Head.vue'

export default {
    data() {
        return {
            
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
  .deliveryPostal{
    width: 100%;
    height: 100%;
 
    margin: auto;
    margin-top: 0.22rem;

  }
  .deliveryPostal img{
    width: 3.64rem;
    height: 1.95rem;
    margin-left: 0.1rem;
  }
  .deliveryPostal:first-child{
    margin-top: 0.5rem;
  }
</style>