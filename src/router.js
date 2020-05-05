import Vue from "vue";
import Router from "vue-router";
import Main from "./components/Main.vue";
import Personal from './components/Personal.vue';
import goodsDetail from "./views/xxb/goodsDetail";
import luckDraw from "./views/xr/luckDraw";
import helpFree from "./views/xxb/helpFree";
import timeSale from "./views/xxb/timeSale";
import specialSale from "./views/xxb/specialSale";
import groupSale from "./views/xxb/groupSale"
import groupDetail from "./views/xxb/groupDetail"
import gouwu from "./views/xr/gouwu"
import buylist from "./views/xxb/buylist"
import login from "./views/zc/login"
import register from "./views/zc/register"
import zhaohuimima from "./views/zc/zhaohuimima"
//抽奖详情
import quchoujiang from "./views/car/quchoujiang"
// 个人中心
import myaddress from "./views/personCenter/myaddress.vue"
import myjifen from "./views/personCenter/myjifen.vue"
import myyouhui from "./views/personCenter/myyouhui.vue"
import myziliao from "./views/personCenter/myziliao.vue"
import mypintuan from "./views/personCenter/mypintuan.vue"
import mygengaiziliao from "./views/personCenter/mygengaiziliao.vue"
import mydingdan from "./views/personCenter/mydingdan"
import mydingdanxiangqing from "./views/personCenter/dingdanxiangqing"
import mychoujiang from "./views/personCenter/mychoujiang.vue"
import mypinlun from "./views/personCenter/mypinlun"
import myzhuli from "./views/personCenter/myzhuli"
import bianjiLY from "./views/personCenter/bianjiLY"
import mybangZhu from "./views/personCenter/mybangZhu"

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/goodsDetail",
      name: "goodsDetail",
      component: goodsDetail
    },
    {
      path: "/groupDetail",
      name: "groupDetail",
      component: groupDetail
    },
    {
      path: "/zhaohuimima",
      name: "zhaohuimima",
      component: zhaohuimima
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/register",
      name: "register",
      component: register
    },
      {
      path: "/gouwu",
      name: "gouwu",
      component: gouwu
    },
    {
      path: '/buylist',
      component: buylist
    },
      {
      path: "/luckDraw",
      name: "luckDraw",
      component: luckDraw
    },
    {
      path: "/helpFree",
      name: "helpFree",
      component: helpFree
    },
    {
      path: "/timeSale",
      name: "timeSale",
      component: timeSale
    },
    {
      path: "/specialSale",
      name: "specialSale",
      component: specialSale
    },
    {
      path: "/groupSale",
      name: "groupSale",
      component: groupSale
    },
    {
      path: "/personal",
      component: Personal,
      children: [
        {
          path: "/personal/myaddress",
          component: myaddress,
          meta: {title: '收货地址'}
        }
      ]
    },
    {
      path: "/personal",
      component: Personal,
      children: [
        {
          path: "/personal/myjifen",
          component: myjifen,
          meta: {title: '积分商城'}
        }
      ]
    },
      {
          path: "/personal",
          component: Personal,
          children: [
              {
                  path: "/personal/mypinlun",
                  component: mypinlun,
                  meta: {title: '我的评论'}
              }
          ]
      },
      {
          path: "/personal",
          component: Personal,
          children: [
              {
                  path: "/personal/myzhuli",
                  component: myzhuli,
                  meta: {title: '我的评论'}
              }
          ]
      },
    {
      path: "/personal",
      component: Personal,
      children: [
        {
          path: "/personal/myyouhui",
          component: myyouhui,
          meta: {title: '我的优惠卷'}
        }
      ]
    },
    {
      path: "/personal",
      component: Personal,
      children: [
        {
          path: "/personal/myziliao",
          component: myziliao,
          meta: {title: '我的资料'}
        }
      ]
    },
    {
      path: "/personal",
      component: Personal,
      children: [
        {
          path: "/personal/mypintuan",
          component: mypintuan,
          meta: {title: '我的拼团'}
        }
      ]
    },
    {
      path: "/personal",
      component: Personal,
      children: [
        {
          path: "/mygengaiziliao",
          component: mygengaiziliao,
          meta: {title: '修改资料'}
        }
      ]
    },
    {
      path: "/personal",
      component: Personal,
      children: [
        {
          path: "/personal/mydingdan",
          component: mydingdan,
          meta: {title: '我的订单'}
        }
      ]
    },
    {
      path: "/personal",
      component: Personal,
      children: [
        {
          path: "/personal/mydingdanxiangqing",
          component: mydingdanxiangqing,
          meta: {title: '订单详情'}
        }
      ]
    },
    {
      path: "/personal",
      component: Personal,
      children: [
        {
          path: "/personal/mychoujiang",
          component: mychoujiang,
          meta: {title: '我的抽奖'}
        }
      ]
    },
    {
      path: "/quchoujiang",
      name: "quchoujiang",
      component: quchoujiang
    },
    {
      path: "/personal",
      component: Personal,
      children: [
        {
          path: "/personal/bianjiLY",
          component: bianjiLY,
          meta: {title: '修改收货地址'}
        }
      ]
    },
    {
      path: "/personal",
      component: Personal,
      children: [
        {
          path: "/personal/mybangZhu",
          component: mybangZhu,
          meta: {title: '帮助中心'}
        }
      ]
    },
  ]
});
