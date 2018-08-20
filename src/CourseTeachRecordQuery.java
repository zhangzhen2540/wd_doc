/**
* @api {get} /course/teachRecord/query CourseTeachRecordQuery
* @apiDescription 课程上课记录查询
* @apiName CourseTeachRecordQuery
* @apiGroup Course
*
* @apiParam {Number} courseId 课程ID
* @apiParam {Number} [teachTeacherId] 授课教师ID(管理员查看特定教师授课记录时才需要传值)
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 授课记录
* @apiSuccess {Number} entity.courseId 课程ID
* @apiSuccess {String} entity.courseName 课程名称
* @apiSuccess {Number} entity.courseTeacherGroupId 课程教师组ID
* @apiSuccess {Object} entity.lessonTeachRecordVos 课时授课记录
* @apiSuccess {Number} entity.lessonTeachRecordVos.lessonId 课时ID
* @apiSuccess {String} entity.lessonTeachRecordVos.lessonName 课时名称
* @apiSuccess {Object} entity.lessonTeachRecordVos.teacherLessonVos 教师授课记录
* @apiSuccess {String} entity.lessonTeachRecordVos.teacherLessonVos.lessonCode 授课Code
* @apiSuccess {Number} entity.lessonTeachRecordVos.teacherLessonVos.teacherId 教师ID
* @apiSuccess {String} entity.lessonTeachRecordVos.teacherLessonVos.teacherName 教师名称
* @apiSuccess {String} entity.lessonTeachRecordVos.teacherLessonVos.startTime 授课开始时间（UTC时间）
* @apiSuccess {String} entity.lessonTeachRecordVos.teacherLessonVos.endTime 授课结束时间（UTC时间）
*/
