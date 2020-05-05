<template>
  <div style="margin-top: 25px">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="拼团中" name="first">
        <mypintuanzhong></mypintuanzhong>
      </el-tab-pane>
      <el-tab-pane label="拼团成功" name="second">
        <mypingtuanchenggong></mypingtuanchenggong>
      </el-tab-pane>
      <el-tab-pane label="拼团失败" name="third">
        <pintuanshibai></pintuanshibai>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import mypintuanzhong from "./pintuan/mypintuanzhong";
import mypingtuanchenggong from "./pintuan/mypingtuanchenggong";
import pintuanshibai from "./pintuan/pintuanshibai";
export default {
  name: "Addend",
  data() {
    return {
      activeName: "first"
    };
  },
  components: {
    mypintuanzhong: mypintuanzhong,
    mypingtuanchenggong: mypingtuanchenggong,
    pintuanshibai: pintuanshibai
  },
  methods: {},
};
</script>

<style scoped>
/*.t_liebiao{*/
/*!*border: 1px solid rebeccapurple;*!*/
/*font-size: 18px;*/
/*margin:20px 0 0 30px;*/
/*}*/
/*.t_guanli{*/
/*!*border: 1px solid red;*!*/
/*font-size: 16px;*/
/*margin:15px 0 0 30px;*/
/*}*/
</style>
