const express = require("express");
const app = express();
const cateNavDatas = require("./data/cateNavDatas.json")
const cateLists = require("./data/cateLists.json")
app.get("/categoryId/:id", (req, res) => {
    const id = Object.values(req.params)
    res.send(cateLists[id])
    console.log(id)

    // console.log((cateNavDatas.categoryL1List[id]))
})
app.get("/categoryId", (req, res) => {

    res.send(cateNavDatas.categoryL1List)


    // console.log((cateNavDatas.categoryL1List[id]))
})


app.listen(9527, "localhost", (err) => {
    if (err) {
        console.log("服务器启动失败:", err);
        return;
    }

    console.log("服务器启动成功，请访问：http://localhost:9527");
})