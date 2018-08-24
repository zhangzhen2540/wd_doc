/**
* @api {get} /studentClassRecord/list 学生上课记录列表
* @apiDescription 学生上课记录列表
* @apiName StudentClassRecordList
* @apiGroup Student
*
* @apiParam {String} lessonCode 课时code
* @apiParam {Number} [studentId] 学生ID，教师可以查询特定学生的记录 
*
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 结果
* @apiSuccess {Number} entity.id 记录ID
* @apiSuccess {Number} entity.studentId 上课学生ID
* @apiSuccess {Number} entity.teacherRecordId 上课教师
* @apiSuccess {Number} entity.lessonId 课时ID
* @apiSuccess {String} entity.lessonCode 课时上课code
* @apiSuccess {Number} entity.startTime 学生上课时间
* @apiSuccess {Number} [entity.endTime] 学生下课时间
*
*/
