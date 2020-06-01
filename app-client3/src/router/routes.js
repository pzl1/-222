import home from "../page/1home" //首页
import classify from "../page/2classify" //分类
import worth from "../page/3worth" //值得买

export default [{
        path: "/",
        component: home
    },
    {
        path: "/item",
        component: classify
    },
    {
        path: "/topic",
        component: worth
    }
]