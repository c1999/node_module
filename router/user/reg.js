/**
 * Created by Administrator on 2018/11/6.
 */
let express = require('express');
const routers = express.Router();
let reg = require('../../controller/user/reg');

routers
        /*注册接口*/
        .post('/reg',reg.reg);

exports.router = routers;