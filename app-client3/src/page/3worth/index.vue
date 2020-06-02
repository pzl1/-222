<template>
  <div class="swiper">
    <van-nav-bar title="值得买">
      <template #right>
        <van-icon name="search" size="28" @click="right1" />
        <van-icon name="shopping-cart-o" size="28" @click="right1" />
      </template>
      <template #left>
        <van-icon name="home-o" size="28" @click="left" />
      </template>
    </van-nav-bar>
    <div class="bg">
      <div class="title">
        <img
          src="http://m.you.163.com/topic/index/img/topic_logo.c2284970.png"
          alt=""
        />
        <span>严选好物 用心生活</span>
      </div>
    </div>
    <div class="floa">
      <div class="sw">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in swp" :key="index">
              <div v-for="(list, index) in item" :key="index">
                <img :src="list.picUrl" alt />
                <p class="p1">{{ list.mainTitle }}</p>
                <p class="p2">{{ list.viceTitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="splb">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        offset="0"
      >
        <div class="sp" v-for="(item, index) in list" :key="index">
          <img :src="item.picUrl" alt="" />
          <div>{{ item.title }}</div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "carrousel",

  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      i: 0,
      swp: [],
    };
  },

  methods: {
    //获取瀑布流数据
    async getspsj(i = 1) {
      const result = await this.$api.zdm.product(i);

      this.list.push(...result.data.data.result[0].topics);
      this.loading = false;
    },

    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        this.i++;
        // this.list.push(this.list.length + 1);

        this.getspsj(this.i);

        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        // if (this.list.length >= 16) {
        //   this.finished = true;
        //   // this.loading = false;
        // }
      }, 1000);
    },
    //点击导航右侧
    right1() {
      this.$router.push({
        query: { name: this.$router.history.current.path },
        path: "/search",
      });
      // this.$bus.$emit("isnav", "false");
    },
    //点击导航左侧
    left() {
      this.$router.push("/");
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）

  async mounted() {
    this.getspsj();
    //获取轮播图数据
    const result = await this.$api.zdm.swip();
    // console.log(result.data.data.navList);
    //把一个数组拆分成多个数组
    const arr = result.data.data.navList;
    const len = 2;
    function split_array(arr, len) {
      var a_len = arr.length;
      var result = [];
      for (var i = 0; i < a_len; i += len) {
        result.push(arr.slice(i, i + len));
      }
      return result;
    }
    //把多个数组插入swp中
    this.swp.push(...split_array(arr, len));
    // console.log(this.swp);
    //new Swiper的时候，轮播图还未遍历，
    this.$nextTick(() => {
      var mySwiper = new Swiper(".swiper-container", {
        loop: false,
        slidesPerView: "auto",
        loopedSlides: 5,
      });
    });
  },
  //监视轮播图数据
};
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.swiper {
  width: 100%;
  height: 100%;
  background-color: rgb(238, 238, 238);
  // overflow: hidden;
}
.bg {
  width: 100%;
  height: 200px;
  background: url("http://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png");
  background-size: 100% 200px;
  overflow: hidden;
  position: relative;
  .title {
    margin: 25px 0 0 10px;
    img {
      width: 65px;
      height: 34px;
      vertical-align: middle;
    }
    span {
      color: white;
      vertical-align: middle;
      font-size: 15px;
    }
  }
}
.floa {
  // height: 10px;
  .sw {
    width: 95%;
    height: 270px;
    background-color: white;
    border-radius: 2%;
    // margin: auto;
    // float: left;

    position: absolute;
    left: 2.5%;
    top: 115px;
    .swiper-container {
      .swiper-wrapper {
      }
    }
    .swiper-slide {
      // float: left;
      width: 93px;
      text-align: center;
      div {
        width: 90px;
        text-align: center;
        // height: 60px;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin: 10px;
        }
        .p1 {
          font-size: 14px;
          font-weight: 700;
        }
        .p2 {
          font-size: 12px;
          color: rgb(141, 140, 140);
        }
      }
    }
  }
}

.splb {
  width: 100%;

  margin: 150px auto 0;
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  background-color: rgb(238, 238, 238);

  .sp {
    width: 45%;
    height: 300px;
    border: 1px solid #ccc;
    background-color: white;
    margin: 5px 0 0 10px;
    flex-grow: 0;
    float: left;

    img {
      width: 100%;
      height: 170px;
    }
    div {
      font-size: 14px;
      padding: 5px;
    }
  }
}
</style>
