const express = require("express");
const md5 = require("md5");
const cateNavDatas = require("./data/cateNavDatas.json");
const cateLists = require("./data/cateLists.json");
// 引入连接数据库模块
require("./db/index");
const Users = require("./models/users");
const app = express();
app.use(express.json());
app.get("/categoryId/:id", (req, res) => {
    const id = Object.values(req.params);
    res.send(cateLists[id]);
    console.log(id);

    // console.log((cateNavDatas.categoryL1List[id]))
});
app.get("/categoryId", (req, res) => {
    res.send(cateNavDatas.categoryL1List);

    // console.log((cateNavDatas.categoryL1List[id]))
});
//注册
app.post("/register", async (req, res) => {
    const {
        username,
        password
    } = req.body.username;
    try {
        const result = await Users.findOne({
            $or: [{
                username,
            }, ],
        }, {
            username: 1,
            _id: 0,
        });
        if (result) {
            res.send({
                code: 300,
                msg: `${username}已经被注册了`,
            });
            return;
        }
        //存入数据库
        const user = await Users.create({
            username,
            password: md5(password),
        });
        res.send({
            code: 200,
            msg: "注册成功"
        })
    } catch (e) {
        res.send({
            code: 400,
            msg: "发生未知故障，请联系管理员"
        });
    }
});
//登录
app.post("/login", async (req, res) => {
    const {
        username,
        password
    } = req.body.username;
    // 验证用户名是否存在
    const result = await Users.findOne({
        username
    }, {
        username: 1,
        password: 1
    });
    if (!result) {
        res.send({
            code: 300,
            msg: "用户名不存在"
        });
        return;
    }
    if (result.password !== md5(password)) {
        res.send({
            code: 300,
            msg: "密码错误"
        });
        return;
    }
    res.send({
        code: 200,
        msg: "登陆成功"
    });
});

app.listen(9527, "localhost", (err) => {
    if (err) {
        console.log("服务器启动失败:", err);
        return;
    }

    console.log("服务器启动成功，请访问：http://localhost:9527");
});