/**
* @api {post} /login Login
* @apiName userLogin
* @apiGroup User
*
* @apiParam {String} userName 登陆名
* @apiParam {String} password 密码
* @apiParam {String} [lessonCode] 课时编号，学生登陆即开始学习
* 
* @apiParamExample {json} Request-Example: 
* { "userName": "admin", "password": "123456"}	
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 登陆用户信息
* @apiSuccess {String} entity.name 用户名
* @apiSuccess {String} entity.userName 用户登录名
* @apiSuccess {Number=1,2,3} entity.sex 性别，1:男，2：女，3：未知
* @apiSuccess {String} [entity.cellPhoneNo] 电话
* @apiSuccess {String} [entity.email] 邮箱
* @apiSuccess {Number=1,2} [entity.identity] 用户身份，1：教师，2：学生
* @apiSuccess {String} [entity.socialContantNo] 社交账号
*
* @apiErrorExample {json} Error-Example:
* {"code": 500, "message": "用户名或密码错误"}
*/


/**
* @api {post} /logout Logout
* @apiName userLogout
* @apiGroup User
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* 
* @apiSuccessExample {json} Success-Example:
* {"code": 200, "message": "success"}
*
* @apiErrorExample {json} Error-Example:
* {"code": 500, "message": "用户名或密码错误"}
*/
