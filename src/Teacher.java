/**
* @api {post} /teching/start/edit 教师上课
* @apiDescription 教师上课，如果课时下存在教师未下课的记录，则继续上次的上课，否则新增一条上课记录
* @apiName teacherTeachingStart
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
*
* @apiParamExample {json} Request-Example: 
*  {"lessonId": 1}
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 课时上课code(学生凭此code登录系统)
*
*/

/**
* @api {post} /teching/end/edit 教师下课
* @apiDescription 教师下课
* @apiName teacherTeachingEnd
* @apiGroup Lesson
*
* @apiParam {String} lessonCode 课时上课code
*
* @apiParamExample {json} Request-Example: 
*  {"lessonCode": "ABCD"}
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 课时上课code
*
*/