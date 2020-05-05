<template>
  <div>
    <app-head />
    <div class="g-bd g-bd-hasFooter">
      <el-breadcrumb separator-class="el-icon-arrow-right"
        style="font-size:18px;font-weight:600;padding:30px 0 19px 0;border-bottom: 1px solid grey;"
      >
        <!--<el-breadcrumb class="el-icon-arrow-right"-->
        <!--style="font-size:18px;font-weight:600;padding:30px 0 19px 0;border-bottom: 1px solid grey;"-->
      <!--&gt;-->
        <!--<el-breadcrumb-item :to="{ path: '/personal' }">首页</el-breadcrumb-item>-->
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: $route.path }">{{$route.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-container>
        <el-aside width="200px">
          <el-menu
            :router="true"
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            text-color="#888"
            active-text-color="#333"
            active-background-color="rgb(245,245,245)"
          >
            <el-menu-item index="/personal/myziliao">
              <span class="line">我的资料</span>
            </el-menu-item>
            <el-menu-item index="/personal/mydingdan">
              <span class="line">我的订单</span>
            </el-menu-item>
            <el-menu-item index="/personal/mypintuan">
              <span class="line">我的拼团</span>
            </el-menu-item>
            <!--<el-menu-item index="/personal/myzhuli">-->
              <!--<span class="line">我的助力</span>-->
            <!--</el-menu-item>-->
            <el-menu-item index="/personal/mychoujiang">
              <span class="line">我的抽奖</span>
            </el-menu-item>
            <el-menu-item index="/personal/myyouhui">
              <span class="line">我的优惠券</span>
            </el-menu-item>
            <el-menu-item index="/personal/mypinlun">
              <span class="line">我的评论</span>
            </el-menu-item>
            <el-menu-item index="/personal/myaddress">
              <span class="line">收货地址</span>
            </el-menu-item>
            <el-menu-item index="/personal/myjifen">
              <span class="line">积分商城</span>
            </el-menu-item>
            <el-menu-item index="/personal/mybangZhu">
              <span class="line">帮助中心</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <el-breadcrumb-item :to="{ path: $route.path }">{{$route.meta.title}}</el-breadcrumb-item>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
    <appweibu />
  </div>
</template>

<script>
import AppHead from "./WebHeader/index";
import Appweibu from "./weibu";
export default {
  data() {
    return {};
  },

  components: {
    AppHead,
    Appweibu
  },

  methods: {}
};
</script>

<style scoped>
.g-bd-hasFooter {
  padding-bottom: 40px;
  min-height: calc(100%-73px-160px);
  
}
.g-bd {
  width: 1100px;
  margin: 0 auto;
  background: #fff;
}
.line {
  margin-left: -20px;
  border-left: 3px solid #c43b3b;
  padding-left: 25px;
  font-size: 16px;
}
</style>