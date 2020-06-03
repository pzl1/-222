import ajax from "../ajax"
export default {
    register(username, password) {
        return ajax.post("/register", {
            username,
            password
        })
    }
}