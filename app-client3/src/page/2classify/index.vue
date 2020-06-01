<template>
  <div class="qb">
    <div class="search">
      <van-search placeholder="搜索商品，共254615款好物" />
    </div>
    <div class="fl">
      <div class="left">
        <van-sidebar v-model="activeKey" @change="djsj">
          <van-sidebar-item
            :title="item"
            v-for="(item, index) in sidebar"
            :key="index"
          />
        </van-sidebar>
      </div>
      <div class="right">
        <div class="img">
          <img
            src="https://yanxuan.nosdn.127.net/a657e5214585b1825b7970c4b956e3c2.jpg?quality=75&type=webp&imageView&thumbnail=0x196"
            alt=""
          />
        </div>

        <!-- <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        > -->
        <div class="q3">
          <ul class="q3ul">
            <li v-for="(item, index) in Product" :key="index">
              <img :src="item.wapBannerUrl" alt="" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
        <!-- </van-list> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      sidebar: [], //侧边栏数据集
      Product: {}, //商品数据
    };
  },
  mounted() {
    this.cblsj(); //分类左侧侧边栏数据
    this.djsj(); //分类右侧商品数据
  },
  methods: {
    //分类左侧侧边栏数据
    async cblsj() {
      const result = await this.$api.fl.getcbl();
      //把每个侧边栏的名字添加到sidebar
      result.data.forEach((item) => {
        this.sidebar.push(item.name);
      });
    },
    //分类右侧商品数据
    async djsj(a = 0) {
      // console.log(a);
      // console.log(this.activeKey);
      const result = await this.$api.fl.getflsj(a);

      // console.log(result.data.subCateList);
      if (a > 3) {
        this.Product = result.data.subCateList;
      } else {
        this.Product = result.data.categoryList;
      }
      console.log(this.Product);
    },

    // async onLoad(a = 0) {
    //   const result = await this.$api.fl.getflsj(a);

    //   // console.log(result.data.subCateList);
    //   if (a > 3) {
    //     this.Product = result.data.subCateList;
    //     this.loading = false;
    //   } else {
    //     this.Product = result.data.categoryList;
    //     this.loading = false;
    //   }
    //   this.finished = true;
    //   // if (this.list.length >= this.Product.length) {
    //   //   this.finished = true;
    //   // }
    //   console.log(this.Product);
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   // setTimeout(() => {
    //   //   for (let i = 0; i < 10; i++) {
    //   //     this.list.push(this.list.length + 1);
    //   //   }

    //   //   // 加载状态结束
    //   //   this.loading = false;

    //   //   // 数据全部加载完成
    //   //   if (this.list.length >= 40) {
    //   //     this.finished = true;
    //   //   }
    //   // }, 1000);
    // },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  // padding: 0;
}
.qb {
  height: 100%;
  // overflow: hidden;
  // .search {
  //   // height: 50px;
  // }

  .fl {
    display: flex;
    height: 550px;
    .left {
      width: 90px;
      height: 600px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      .van-sidebar-item {
        height: 45px;
      }
    }
    .right {
      width: 100%;
      border-top: 1px solid #ccc;
      height: 550px;
      // box-sizing: border-box;
      overflow: auto;
      .img {
        height: 120px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 264px;
          height: 96px;
        }
      }
      .q3 {
        width: 100%;

        .q3ul {
          width: 100%;
          height: 100%px;
          //display: flex;
          // flex-wrap:wrap
          //justify-content: center;
          //align-items: center;

          overflow: auto;

          li {
            width: 80px;
            height: 80px;

            margin: 15px 5px 5px 9px;
            // border-radius: 50%;

            float: left;
            img {
              width: 80px;
              height: 80px;
              // border-radius: 50%;
            }
            p {
              height: 20px;
              font-size: 12px;
              text-align: center;
            }
          }
        }
      }
      .c {
        width: 100px;
        height: 100px;
        background-color: pink;
      }
    }
  }
}
</style>
