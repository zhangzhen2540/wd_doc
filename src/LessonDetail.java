/**
* @api {get} /lesson/detail/query 课时详情查询
* @apiName LessonDetailQuery
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
*
* @apiParamExample {String} Request-Example: 
*    lessonId=1
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 课时详情
* @apiSuccess {Object} entity.lesson 课时信息
* @apiSuccess {Number} entity.lesson.id 课时ID
* @apiSuccess {String} entity.lesson.lessonName 课时名
* @apiSuccess {String} [entity.lesson.lessonDesc] 课时描述
* @apiSuccess {Number} entity.lesson.courseId 所属课程ID
* @apiSuccess {Number} entity.lesson.teacherGroupId 所属教师组ID
* @apiSuccess {Number=0,1} entity.lesson.status 状态
* @apiSuccess {Object} entity.course 课程信息
* @apiSuccess {Number} entity.course.id 课程ID
* @apiSuccess {String} entity.course.courseName 课程名
* @apiSuccess {String} [entity.course.courseTitle] 课程标题
* @apiSuccess {String} [entity.course.courseDesc] 课程介绍
* @apiSuccess {Number} entity.course.teacherGroupId 所属教师组ID
* @apiSuccess {Number=0,1} entity.course.status 课程状态
* 
* @apiErrorExample {json} Error-Example:
* {"code": 500, "message": "param error"}
*/