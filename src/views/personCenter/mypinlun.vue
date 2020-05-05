<template>
    <div style="margin-top: 25px">
    <div >
        <div style="margin-bottom: 5px">
            <div class="fr" style="margin-bottom: 5px">共有<span style="color: #ff4001">&nbsp;{{count}}&nbsp;</span>条评论</div>
        </div>
        <div v-for="item in tableDate">
            <div style="clear: both;margin-left: 17px">
                <el-divider></el-divider>
                <div class="fl" style="width: 50px;border-radius: 50%" >
                    <!--<img src="{{Load}}" height="50" width="50" style="border-radius: 50%"/>-->
                    <img :src=Load height="50" width="50" style="border-radius: 50%"/>
                </div>
                <div style="margin: 3px 0 0 60px" >
                    <div style="color: #333">{{username}}</div>
                    <div style="color: #666;font-size: 14px;margin-top: 3px">{{item.comDate}}</div>
                </div>
            </div>
            <div style="clear: both;margin:15px 0 0 77px">
                <div style="color: #333;margin-bottom: 3px">商品名称 : {{proName}}</div>
                <div><span style="color: #333">评论 :</span> <span style="color: #666;font-size: 15px">{{item.content}}</span></div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "mypinlun",
        created(){
          var ID = sessionStorage.getItem('myUserId');
            this.$axios.get(this.$host+'/groupmall/art/selectComment?userId='+ID+'', ({
            })).then(response => {

                const resp =response.data;
                this.tableDate=resp.data;
              console.log(resp.data);
              console.log(resp);
              console.log(this.tableDate[0].vouser_HPS[0].img);
              this.$data.Load=this.tableDate[0].vouser_HPS[0].img;
              for (var i=0;i<resp.data.length;i++){
                this.$data.proName=this.tableDate[i].voproduct_HPS[0].proName;
                this.$data.username=this.tableDate[i].vouser_HPS[0].username;
              }
                this.$data.count=resp.count;
            });
        },
        data(){
            return{
              Load:"",
              username:"",
              proName:"",
              count:"0",
              tableDate:[],

          }
        }
    }
</script>

<style scoped>
 .fl{
     float: left;
 }
    .fr{
        float: right;
    }
</style>