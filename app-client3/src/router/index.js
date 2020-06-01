import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
// import store from "../store"
Vue.use(VueRouter)
const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

// router.beforeEach((to, from, next) => {
//     const checkPath = ["/trade", "/pay", "/center"]
//     const targetPath = to.path
//     if (checkPath.find((path) => targetPath.indexOf(path) === 0)) {
//         if (store.state.user.userInfo.name) {
//             next()
//         } else {
//             next("/login?redirect=" + targetPath)
//         }
//     } else {
//         next()
//     }
// })
export default router

























const originPath = VueRouter.prototype.push
VueRouter.prototype.push = function (location, onComplete = () => {}, onAbort) {
    return originPath.call(this, location, onComplete, onAbort)

}


const originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location, onComplete = () => {}, onAbort) {
    return originReplace.call(this, location, onComplete, onAbort)

}