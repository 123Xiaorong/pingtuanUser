<template>
    <div style="margin-top: 25px">
        <div class="kiangjia" v-for="items in questionArray" :key="items.key" @click="open(items.id)">
            <span style="color: #ff4001;margin-right: 10px;font-weight: bolder">{{items.id}}</span>
            {{items.articleTitle}}
        </div>

    </div>
</template>

<script>
    // var neirong;
  export default {
    name: "mybangZhus",
    data(){
      return{
        questionArray:[],
        neirong:""
      }
    },
    created(){
      this.$axios.get(this.$host+"/groupmall/art/articlelist",{params:{}})
        .then(response=>{
          console.log(response.data.data)
          this.$data.questionArray=response.data.data;

        })
    },
    methods: {
      open(id) {

        console.log(id)
        console.log("嘻嘻")
        this.$axios.get(this.$host+"/groupmall/art/articlelistID",{params:{id:id}})
          .then(response=>{
            console.log(response.data.data)
            // neirong=response.data.data.content
            const h = this.$createElement;
            this.$msgbox({
              title: response.data.data[0].articleTitle,
              message: h('p', null, [
                h('span', null, ),
                h('i', { style: 'color: teal' }, response.data.data[0].content.split('。')[0])
              ])})
          })

        // console.log(neirong);
        // this.$alert(
        //   neirong, '标题名称', {
        //   confirmButtonText: '确定',
        //
        // });


      }
    },
  };
</script>

<style scoped>
    .kiangjia{
        width: 80%;
        height: 30px;
        /*border: 1px solid red;*/
        margin-top: 30px;
        line-height: 30px;
    }

</style>