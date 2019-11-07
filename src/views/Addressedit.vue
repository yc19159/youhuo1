<template>
    <div>
        <Head title="编辑地址" :show="true"></Head>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      areaList:[],
      searchResult: []
    }
  },
   mounted() {
    //  console.log(11)
      this.$axios.get("https://www.kuaikanmanhua.com/v2/pweb/daily/topics").then(res=>{
        console.log(res.data.result)
        console.log(11)
    })
  },
   methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>