import ajax from "../ajax"
export default {
    //分类左侧侧边栏数据
    getcbl() {
        return ajax.get("/categoryId")
    },
    //分类右侧商品数据
    getflsj(id) {
        return ajax.get(`categoryId/${id}`)
    },

}