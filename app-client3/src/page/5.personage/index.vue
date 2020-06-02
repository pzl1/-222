<template>
  <div class="container">
    <div class="lodin1" v-if="isshow">
      <van-nav-bar title="网易严选">
        <template #right>
          <van-icon name="search" size="28" @click="right1" />
          <van-icon name="shopping-cart-o" size="28" @click="right1" />
        </template>
        <template #left>
          <van-icon name="home-o" size="28" @click="left" />
        </template>
      </van-nav-bar>
      <div class="logo">
        <img
          src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
          alt=""
        />
      </div>
      <van-button type="danger" icon="phone-o" block class="but"
        >手机号快捷登录</van-button
      >
      <van-button type="default" icon="envelop-o" block class="but but2"
        >邮箱账号登录</van-button
      >
      <div class="icon">
        <div class="icon1">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUI5M0JDMTkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUI5M0JDMDkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ex4WyAAADVklEQVR42uyZfWiNURzH77VJGEqjeV+LeZu2+MNbyQh/IKFtJaKRl1IrLyWSmz+UoigarXlZIrIQeWkihVLSRC62P7D4wyUhL9ts1+dXv9Vaz3nuee59HjXdU5/O2nn7nvOc8/v9zrnheDwe6k6pR6ibpbTgtODuLjjTtmIkEpHJzYTFMA3GwkDtoxU+QxQewjV4BHFDX8EJpnOpsw62Q56hWk/IUYphFzTCQajWCQW/JRA7maweKl3EmtJobfcUpgYuGLFl+nknpjjGeLivXykYwYhdTnYWevl4Vqpgs++CESuHqcYwmXfQkKDPX/AEmh3KDsMcv1f4KPRxWnjIZUL55McM/YmVGAVTdN+2O4xXTR+9fRFMRzPI5hrqnqG8w0zVGercgJj+LYfto0OdXCj3y6ytcjcakQryFpcBV0KtHtYyNXNOqVy/pOcU7hxeIkg+6bgEbdogI0GdP10W47VOQmzzD21/iPHaUhXc6sX7JUjS1wk4DsNhARTBMBgA3+CDbp3rcIvxW7wK9iuafwzrYR5sg0EWbWTvHxBLgo5mWyvhhwu9ABvVju+3FBvSelK/HsGTbAVHUxRbp7b2jsVZMCVp9wDRxTaCb6cg9hPsgKvQP8WJ94PLavNdBVeZQkKLtAf2asjZNV2ES4Z2L9URxbr8XyZdg+iwm+OQxqeSECsn/jksdCgToSWwDE46lM9m3E3kSxzKxFsuSuSat8Ibj4JvwlJDWZ66+r6Q71A+QfMiQ/vVRrPWaaWlk3uQbSlYJlnqEvd+VWeR5VDWri7c5BVj6BmcKLx8QTbLw0q/dxkwpI4iy8VS5SQwd1YBfFSjrlcWguPqsoNI7V5uzeL3h1h0Ku72bUCCG7xcQud3sqlN6jpDuvIFMBQkth0Dd/UC6ne64kVwqQrdJ4FMR3BiuKaPVFuc4aPY33DEi2CJotbaRFF6fZLOK3wUvJuxm6wFU/mcxwF2iiOAQh/E1uq7RqBPVT81pHyWYj/iHVc4hbtBvK3F9EnrdJLtxX2XmLZhUI+B32ENTNfozYuNbnG7OoWT+ckgice8bL2NF6o1yVJ33ai3E9lCG2ALfIERpttPZujfJImVzyumCYtFqNQQtcB0DsLpH2XSgtOC04L/L8F/BRgAYafuBxC0r5MAAAAASUVORK5CYII="
            alt=""
          />
          <span>微信</span>
        </div>
        <div class="icon1 icon2">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUI5M0JDMTkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUI5M0JDMDkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ex4WyAAADVklEQVR42uyZfWiNURzH77VJGEqjeV+LeZu2+MNbyQh/IKFtJaKRl1IrLyWSmz+UoigarXlZIrIQeWkihVLSRC62P7D4wyUhL9ts1+dXv9Vaz3nuee59HjXdU5/O2nn7nvOc8/v9zrnheDwe6k6pR6ibpbTgtODuLjjTtmIkEpHJzYTFMA3GwkDtoxU+QxQewjV4BHFDX8EJpnOpsw62Q56hWk/IUYphFzTCQajWCQW/JRA7maweKl3EmtJobfcUpgYuGLFl+nknpjjGeLivXykYwYhdTnYWevl4Vqpgs++CESuHqcYwmXfQkKDPX/AEmh3KDsMcv1f4KPRxWnjIZUL55McM/YmVGAVTdN+2O4xXTR+9fRFMRzPI5hrqnqG8w0zVGercgJj+LYfto0OdXCj3y6ytcjcakQryFpcBV0KtHtYyNXNOqVy/pOcU7hxeIkg+6bgEbdogI0GdP10W47VOQmzzD21/iPHaUhXc6sX7JUjS1wk4DsNhARTBMBgA3+CDbp3rcIvxW7wK9iuafwzrYR5sg0EWbWTvHxBLgo5mWyvhhwu9ABvVju+3FBvSelK/HsGTbAVHUxRbp7b2jsVZMCVp9wDRxTaCb6cg9hPsgKvQP8WJ94PLavNdBVeZQkKLtAf2asjZNV2ES4Z2L9URxbr8XyZdg+iwm+OQxqeSECsn/jksdCgToSWwDE46lM9m3E3kSxzKxFsuSuSat8Ibj4JvwlJDWZ66+r6Q71A+QfMiQ/vVRrPWaaWlk3uQbSlYJlnqEvd+VWeR5VDWri7c5BVj6BmcKLx8QTbLw0q/dxkwpI4iy8VS5SQwd1YBfFSjrlcWguPqsoNI7V5uzeL3h1h0Ku72bUCCG7xcQud3sqlN6jpDuvIFMBQkth0Dd/UC6ne64kVwqQrdJ4FMR3BiuKaPVFuc4aPY33DEi2CJotbaRFF6fZLOK3wUvJuxm6wFU/mcxwF2iiOAQh/E1uq7RqBPVT81pHyWYj/iHVc4hbtBvK3F9EnrdJLtxX2XmLZhUI+B32ENTNfozYuNbnG7OoWT+ckgice8bL2NF6o1yVJ33ai3E9lCG2ALfIERpttPZujfJImVzyumCYtFqNQQtcB0DsLpH2XSgtOC04L/L8F/BRgAYafuBxC0r5MAAAAASUVORK5CYII="
            alt=""
          />
          <span>QQ</span>
        </div>
        <div class="icon1">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUI5M0JDMTkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUI5M0JDMDkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ex4WyAAADVklEQVR42uyZfWiNURzH77VJGEqjeV+LeZu2+MNbyQh/IKFtJaKRl1IrLyWSmz+UoigarXlZIrIQeWkihVLSRC62P7D4wyUhL9ts1+dXv9Vaz3nuee59HjXdU5/O2nn7nvOc8/v9zrnheDwe6k6pR6ibpbTgtODuLjjTtmIkEpHJzYTFMA3GwkDtoxU+QxQewjV4BHFDX8EJpnOpsw62Q56hWk/IUYphFzTCQajWCQW/JRA7maweKl3EmtJobfcUpgYuGLFl+nknpjjGeLivXykYwYhdTnYWevl4Vqpgs++CESuHqcYwmXfQkKDPX/AEmh3KDsMcv1f4KPRxWnjIZUL55McM/YmVGAVTdN+2O4xXTR+9fRFMRzPI5hrqnqG8w0zVGercgJj+LYfto0OdXCj3y6ytcjcakQryFpcBV0KtHtYyNXNOqVy/pOcU7hxeIkg+6bgEbdogI0GdP10W47VOQmzzD21/iPHaUhXc6sX7JUjS1wk4DsNhARTBMBgA3+CDbp3rcIvxW7wK9iuafwzrYR5sg0EWbWTvHxBLgo5mWyvhhwu9ABvVju+3FBvSelK/HsGTbAVHUxRbp7b2jsVZMCVp9wDRxTaCb6cg9hPsgKvQP8WJ94PLavNdBVeZQkKLtAf2asjZNV2ES4Z2L9URxbr8XyZdg+iwm+OQxqeSECsn/jksdCgToSWwDE46lM9m3E3kSxzKxFsuSuSat8Ibj4JvwlJDWZ66+r6Q71A+QfMiQ/vVRrPWaaWlk3uQbSlYJlnqEvd+VWeR5VDWri7c5BVj6BmcKLx8QTbLw0q/dxkwpI4iy8VS5SQwd1YBfFSjrlcWguPqsoNI7V5uzeL3h1h0Ku72bUCCG7xcQud3sqlN6jpDuvIFMBQkth0Dd/UC6ne64kVwqQrdJ4FMR3BiuKaPVFuc4aPY33DEi2CJotbaRFF6fZLOK3wUvJuxm6wFU/mcxwF2iiOAQh/E1uq7RqBPVT81pHyWYj/iHVc4hbtBvK3F9EnrdJLtxX2XmLZhUI+B32ENTNfozYuNbnG7OoWT+ckgice8bL2NF6o1yVJ33ai3E9lCG2ALfIERpttPZujfJImVzyumCYtFqNQQtcB0DsLpH2XSgtOC04L/L8F/BRgAYafuBxC0r5MAAAAASUVORK5CYII="
            alt=""
          />
          <span>微博</span>
        </div>
      </div>
    </div>
    <div class="lodin2">
      <van-nav-bar title="网易严选">
        <template #right>
          <van-icon name="search" size="28" @click="right1" />
          <van-icon name="shopping-cart-o" size="28" @click="right1" />
        </template>
        <template #left>
          <van-icon name="home-o" size="28" @click="left" />
        </template>
      </van-nav-bar>
      <div class="logo2">
        <img
          src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { isshow: false };
  },
  methods: {
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
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  background-color: rgb(238, 238, 238);
  .logo {
    height: 240px;
    // background-color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 134px;
      height: 45px;
    }
  }
  .but {
    width: 90%;
    margin: 15px auto 0;
  }
  .but2 {
    color: red;
    border: 1px solid red;
    background-color: rgb(238, 238, 238);
  }
  .icon {
    display: flex;
    justify-content: center;
    margin-top: 150px;
    .icon1 {
      //   vertical-align: middle;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 85px;
      img {
        width: 20px;
        height: 20px;
      }
      span {
        font-size: 12px;
        color: gray;
      }
    }
    .icon2 {
      border-left: 1px solid gray;
      border-right: 1px solid gray;
    }
  }
  .lodin2 {
    .logo2 {
      height: 100px;
      display: flex;
      justify-content: center;
      margin-top: 40px;
      img {
        width: 134px;
        height: 45px;
      }
    }
  }
}
</style>
