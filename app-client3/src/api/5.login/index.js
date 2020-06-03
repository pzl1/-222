import ajax from "../ajax"

export default {
    login(username, password) {
        return ajax.post("/login", {
            username,
            password
        })
    }
}