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
* @apiSuccess {Number=1,2,3} [entity.identity] 用户身份，1: 管理员，2：教师，3：学生
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



/**
* @api {post} /user/updatePassword 修改密码
* @apiName 修改密码
* @apiGroup User
*
* @apiParam {String} oldPassword 旧密码
* @apiParam {String} newPassword 新密码
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [entity] 用户ID
* @apiSuccess {String} [message] 响应描述
* 
* @apiSuccessExample {json} Success-Example:
* {"code": 200, "message": "success"}
*
* @apiErrorExample {json} Error-Example:
* {"code": 500, "message": "旧密码错误"}
*/

/**
* @api {post} /user/resetPassword/edit 用户密码重置
* @apiName 用户密码重置
* @apiGroup User
*
* @apiParam {Number[]} userIds 重置密码用户ID列表
*
* @apiParamExample Param-Example:
* {"userIds": [1,2,3]} 
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [entity] 重置密码用户ID列表
* @apiSuccess {String} [message] 响应描述
*
* @apiSuccessExample Success-Example:
{
    "code": 200,
    "entity": "[1]"
}
*/