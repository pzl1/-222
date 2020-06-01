import ajax from "../searchajax"
export default {
    search() {
        return ajax.post("/search/init.json")
    },
    searchname(name) {
        return ajax.post(`/search/searchAutoComplete.json?keywordPrefix=${name}`)
    },
}