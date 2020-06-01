import ajax from "../zdmajax "
export default {
    //分类左侧侧边栏数据
    product(id) {
        return ajax.get(`/v1/find/recAuto.json?page=${id}&size=1`)
    },
    //分类右侧商品数据
    // getflsj(id) {
    //     return ajax.get(`categoryId/${id}`)
    // },

}