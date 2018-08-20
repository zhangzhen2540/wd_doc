/**
* @api {post} /course/edit CourseEdit
* @apiDescription 课程编辑
* @apiName courseEdit
* @apiGroup Course
*
* @apiParam {Number} id 课程ID
* @apiParam {String} courseName 课程名称
* @apiParam {Number} teacherGroupId 课程所属教师组ID
*
* @apiParamExample {json} Request-Example: 
* {"id": 1, "courseName": "Java", "teacherGroupId": 1}	
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 课程ID
*
*/

/**
* @api {post} /course/deletes CurseDelete
* @apiDescription 课程删除
* @apiName courseDelete
* @apiGroup Course
*
* @apiParam {Number[]} courseId 删除课程ID列表
*
* @apiParamExample {json} Request-Example: 
* [1, 2, 3]	
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number[]} [entity] 删除课程ID列表
*
*/



/**
* @api {get} /course/list CurseList
* @apiDescription 课程列表查询
* @apiName courseList
* @apiGroup Course
*
* @apiParam {String} [courseName] 课程名称（模糊匹配）
* @apiParam {String} [courseTitle] 课程标题（模糊匹配）
* @apiParam {Number} [teacherGroupId] 教师组ID
* @apiParam {Number=0,1} [status] 课程状态，1:启用，0:禁用
* @apiParam {Number=0,1} [deleteStatus] 删除状态，1:未删除，0：已删除
*
* @apiParamExample {String} Request-Example: 
*  courseName=Java&courseTitle=Java
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object[]} [entity] 课程信息
* @apiSuccess {Number} entity.id 课程ID
* @apiSuccess {String} entity.courseName 课程名称
* @apiSuccess {String} [entity.courseTitle] 课程标题
* @apiSuccess {String} [entity.courseDesc] 课程描述
* @apiSuccess {Number} [entity.teacherGroupId] 课程所属教师组ID
* @apiSuccess {Number=0,1} [entity.status] 课程状态，1：启用，0：禁用
* @apiSuccess {Number=0,1} [entity.deleteStatus] 课程删除状态，1：未删除，0：删除
* @apiSuccess {Number} [entity.sort] 课程排序
*/