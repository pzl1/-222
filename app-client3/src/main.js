import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"

import {
  Swipe,
  SwipeItem,
  Icon,
  Tabbar,
  TabbarItem,
  Sidebar,
  SidebarItem,
  Search,
  Button,
  Overlay,
  List,
  NavBar,
  Tag,
  Form,
  Field,
  Toast,
  Notify,
  Cell,
  CellGroup
} from 'vant';
import * as api from "./api"
Vue.prototype.$api = api
Vue.prototype.$bus = new Vue();
Vue.use(Swipe);
Vue.use(SwipeItem); //轮播图
Vue.use(Icon); //倒三角图标
Vue.use(Tabbar); //底部标签
Vue.use(TabbarItem); //底部标签
Vue.use(Sidebar); //侧边栏
Vue.use(SidebarItem); //侧边栏
Vue.use(Search); //搜索
Vue.use(Button);
Vue.use(Overlay);
Vue.use(List);
Vue.use(NavBar);
Vue.use(Tag);
Vue.use(Form);
Vue.use(Toast);
Vue.use(Field);
Vue.use(Notify);
Vue.use(Cell);
Vue.use(CellGroup);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')