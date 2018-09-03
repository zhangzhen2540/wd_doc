/**
* @api {post} /teacher/import/edit TeacherDataImport
* @apiDescription 教师数据导入
* @apiName TeacherDataImport
* @apiGroup Teacher
*
* @apiParam {String} fileName 上传文件名
* @apiParam {Boolean} override 如果导入数据教师编号重复，如何处理(override不传：返回错误，true: 覆盖， false: 丢弃)
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 教师编码
*
* @apiSuccessExample Success-Example:
* {"code": 200, "entity": "['0001','0002','0003']", "message": "success"}
*/


/**
* @api {post} /student/import/edit 学生数据导入
* @apiDescription 学生数据导入
* @apiName StudentDataImport
* @apiGroup Student
*
* @apiParam {String} fileName 上传文件名
* @apiParam {Boolean} override 如果导入数据学生编号重复，如何处理(override不传：返回错误，true: 覆盖， false: 丢弃)
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 学生编号
*
* @apiSuccessExample Success-Example:
* {"code": 200, "entity": "['0001','0002','0003']", "message": "success"}
*/
