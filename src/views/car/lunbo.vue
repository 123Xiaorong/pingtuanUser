<template>
  <div class="block">
    <el-carousel trigger="click" height="480px">
      <el-carousel-item v-for="item in productArr" :key="item.id">
        <img :src="item.img" style="width: 100%;">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

  <script>
      export default {
          name: "lunbo",
        data(){
          return {
            productArr: [
              {id:1,img:require('../../assets/bann1.jpg')},
              {id:2,img:require('../../assets/bann4.jpg')},
              {id:3,img:require('../../assets/bann5.jpg')},
              {id:4,img:require('../../assets/bann3.jpg')},
              {id:5,img:require('../../assets/baner1.jpg')},
            ]
          }
        },
        methods:{

        },
      }
  </script>

  <style scoped>

  </style>
