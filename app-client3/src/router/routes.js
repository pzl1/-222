import home from "../page/1home" //首页
import classify from "../page/2classify" //分类
import worth from "../page/3worth" //值得买
import shopping from "../page/4.shopping"
import search from "../page/4.search"
import personage from "../page/5.personage"
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
    }, {
        path: "/shopping",
        component: shopping
    },
    {
        path: "/search",
        component: search
    },
    {
        path: "/personage",
        component: personage
    }
]