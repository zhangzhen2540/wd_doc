
/**
* @api {get} /teacherClassRecord/list 上课记录列表
* @apiDescription 上课记录列表
* @apiName teacherClassRecordList
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
* @apiParam {String} [startTime] 起始时间，格式2018-09-03 12:00:00
* @apiParam {String} [endTime] 结束时间，格式2018-09-03 12:00:00
*
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object[]} [entity] 上课记录列表 
* @apiSuccess {Number} entity.id 记录ID
* @apiSuccess {Number} entity.teacherId 教师ID
* @apiSuccess {Number} entity.lessonId 课时ID
* @apiSuccess {Number} entity.startTime 开始时间（时间戳）
* @apiSuccess {Number} entity.endTime 结束时间
* @apiSuccess {String} entity.lessonCode 上课lessonCode
* @apiSuccess {String} entity.teacherName 教师姓名
* @apiSuccess {String} entity.teacherNo 教师编码
*
*/



