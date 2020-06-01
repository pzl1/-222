<!--  -->
<template>
  <div class="a">
    <!-- <home /> -->
    <router-view></router-view>
    <div class="b" v-show="isnav">
      <van-tabbar v-model="active" v-if="isnav">
        <van-tabbar-item icon="home-o">
          <router-link to="/">
            首页
          </router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="apps-o ">
          <router-link to="/item">
            分类
          </router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="good-job-o">
          <router-link to="/topic">
            值得买
          </router-link>
        </van-tabbar-item>

        <van-tabbar-item icon="shopping-cart-o">
          <router-link to="/shopping">
            购物车
          </router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="user-circle-o">个人</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
// import home from "./page/1home";

export default {
  components: {},
  data() {
    return {
      active: 0,

      isnav: true,
    };
  },

  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
.a {
  height: 100%;
}
</style>
