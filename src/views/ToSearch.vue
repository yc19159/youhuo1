<template>
    <div class="search">
        <Head :type="'goodslist'"></Head>    
        <SearchContent></SearchContent>    
    </div>
</template>

<script>

import Head from "@/components/Head.vue";
import SearchContent from '@/components/SearchContent.vue'

export default {

     components:{
      Head,
      SearchContent,
     },
    
}
</script>

<style lang="stylus" scoped>

</style>