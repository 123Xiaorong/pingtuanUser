<template>
    <div style="color: #333">
        <div class="t_Dkj">
            <!--<img src="../assets/1.png"/>-->
        </div>
        <div class="t_Kjia">
            <div>
                <div class="t_Xkj">
                    <ul>
                        <li class="t_wenzi">商家</li>
                        <li>关于我们</li>
                        <li>招聘信息</li>
                        <li>联系我们</li>
                    </ul>
                </div>
                <div class="t_Xkj">
                    <ul>
                        <li class="t_wenzi">消费者</li>
                        <li>帮助中心</li>
                        <li>意见反馈</li>
                        <li>手机版下载</li>
                    </ul>
                </div>
                <div class="t_Xkj">
                    <ul>
                        <li class="t_wenzi">商家</li>
                        <li>免费开店</li>
                        <li>商家社区</li>
                        <li>商家入驻</li>
                        <li>商家后台</li>
                    </ul>
                </div>

                <div class="t_Xkj">
                    <ul>
                        <li class="t_wenzi">权威认证</li>
                        <li>免费开店</li>
                        <li>商家社区</li>
                        <li>商家入驻</li>
                        <li>管理后台</li>
                    </ul>
                </div>
                <!--<div class="t_Tkj">-->
                    <!--<div class="t_tupian">-->
                        <!--&lt;!&ndash;<img src="../assets/foot1.jpeg" alt="" style="width:250px;height:80px;">&ndash;&gt;-->
                    <!--</div>-->

                    <!--&lt;!&ndash;<div class="t_Wkj">&ndash;&gt;-->
                        <!--&lt;!&ndash;营业执照注册号:330106000129004<br>增值电信业务经营许可证：浙B2-20110349<br>&ndash;&gt;-->
                        <!--&lt;!&ndash;ICP备案号：浙ICP备10044327号-3 ©2015 Mogujie.com 杭州卷瓜网络有限公司&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--</div>-->
            </div>
            <div style="height: 10px;width: 100%;margin-top: 150px"></div>
            <div class="Xian"></div>
            <div class="t_Qkj">
                <p style="font-weight: lighter;margin-bottom: 3px">友情链接:</p>
                <p style="font-size: 14px;font-weight: lighter" class="POne"><span>淘粉吧</span><span>蘑菇街团购</span
                ><span>蘑菇街女装</span> <span>蘑菇街男装</span><span>蘑菇街鞋子</span
                ><span>蘑菇街包包</span><span> 蘑菇街家居</span><span>家具网</span
                ><span>时尚品牌网</span><span> 装修</span><span>蘑菇街母婴</span
                ><span>衣联网</span><span>播视网视频</span></p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "weibu"
  };
</script>

<style scoped>
    .POne>span{
        margin: 0 5px;
    }
    .t_Kjia {
        width: 100%;
        /* height: 240px; */
        padding: 10px;
        /* border: 1px solid red; */
        background-color: rgb(248, 248, 248);
        box-sizing: border-box;
    }

    .t_Kjia > div {
        width: 80%;
        margin: 0 auto;
    }

    .t_Xkj {
        width: 20%;
        /*border: 1px solid red;*/
        margin: 0 2%;
        text-align: center;
        float: left;
    }

    li {
        list-style: none;
        padding: 5px;
        font-size: 14px;
    }

    ul {
        padding: 0px;
    }

    .t_wenzi {
        color: #333;
        font-weight: bold;
    }

    .t_Tkj {
        width: 25%;
        height: 160px;
        /*border: 1px solid rebeccapurple;*/
        float: left;
        margin: 0 30px;
    }

    .t_tupian {
        width: 100%;
        height: 80px;
    }

    .t_Wkj {
        font-size: 12px;
        width: 100%;
        line-height: 17px;
    }

    .Xian {
        width: 80%;
        border-bottom: 1px solid #e6e7ff;
        clear: both;
        margin-left: 120px;
    }

    .t_Qkj {
        font-size: 14px;
        color: darkgray;
        padding: 10px 20px;
    }

    .t_Qkj > p {
        font-size: 15px;
        font-weight: bolder;
    }

    .t_Qkj > span {
        display: inline-block;
        margin: 10px 0 10px 15px;
    }

    .t_Dkj {
        width: 100%;
        height: 30px;
        /*border-top: 1px solid black;*/
        box-sizing: border-box;
        clear: both;
        /* border-top:1px solid #cccccc;
        margin-top: 30px; */
    }

    .t_Dkj > img {
        width: 100%;
        height: 160px;
    }
</style>
