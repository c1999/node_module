/**
 * Created by Administrator on 2018/11/6.
 */
let user = require('./user/reg.js');
exports.app = (app)=>{
    app.use('/user',user.router)
}