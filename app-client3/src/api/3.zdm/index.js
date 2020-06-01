import ajax from "../zdmajax "
export default {
    //值得买商品数据
    product(id) {
        return ajax.get(`/v1/find/recAuto.json?page=${id}&size=1`)
    },
    swip() {
        return ajax.get('/v1/know/navWap.json')
    }

}