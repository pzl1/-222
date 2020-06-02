<template>
  <div class="qb">
    <div class="container">
      <div class="tag">
        <form action="/">
          <van-search
            v-model="value"
            show-action
            placeholder="云闪付购买指定商品，2折起"
            @input="onSearch"
            @cancel="onCancel"
          />
        </form>
        <div v-if="issech">
          <p class="p1">热门搜索</p>
          <van-tag
            plain
            class="van"
            :type="item.algSort ? 'danger' : 'primary'"
            v-for="(item, index) in tag"
            :key="index"
            >{{ item.keyword }}</van-tag
          >
        </div>
        <div class="ss">
          <p v-for="(item, index) in name" :key="index">{{ item }}</p>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return { value: "", tag: [], issech: true, name: [] };
  },
  async mounted() {
    const result = await this.$api.search.search();
    // const result2 = await this.$api.search.searchname("a");
    // console.log(result);
    this.tag = result.data.data.hotKeywordVOList;
    // const result3 = await this.$api.zdm.swip();
    // console.log(result3);
    // this.$bus.$emit("nav", false);
  },
  methods: {
    async onSearch(val) {
      //   this.issech = false;
      //   console.log(Toast(val));
      // console.log(val);
      const result2 = await this.$api.search.searchname(val);
      // console.log(result2.data.data);
      this.name = result2.data.data;
      if (this.name.length > 0) {
        this.issech = false;
      } else {
        this.issech = true;
      }
    },
    //取消按钮
    onCancel() {
      // console.log(this.$route.query.name);
      //   Toast("取消");
      // this.$bus.$on("push", function(a) {
      //   console.log(a);
      // });
      if (this.$route.query.name) {
        this.$router.push(`${this.$route.query.name}`);
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.qb {
  height: 100%;
  background-color: rgb(238, 238, 238);
  .container {
    width: 100%;
    height: 300px;
    background-color: white;
    .tag {
      width: 95%;
      height: 300px;
      background-color: white;
      margin: auto;
      .p1 {
        font-size: 14px;
        color: rgb(138, 136, 136);
      }
      .van {
        margin: 5px;
      }
    }
  }
}
</style>
