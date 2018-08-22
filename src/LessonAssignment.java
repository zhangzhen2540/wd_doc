

/**
* @api {post} /lessonAssignment/add 课堂作业添加
* @apiDescription 课堂作业添加
* @apiName LessonAssignmentAdd
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
* @apiParam {String} assignmentsName 题目
* @apiParam {Object} [attachments] 附件
* @apiParam {String} attachments.fileLocalPath 附件路径
* @apiParam {String} attachments.fileName 附件名
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 课堂作业ID
*
*/

/**
* @api {post} /lessonAssignment/update LessonAssignmentEdit
* @apiDescription 课堂作业修改
* @apiName LessonAssignmentEdit
* @apiGroup Lesson
*
* @apiParam {Number} id 作业ID
* @apiParam {Number} lessonId 课时ID
* @apiParam {String} assignmentsName 题目
* @apiParam {Object} [attachments] 附件
* @apiParam {String} attachments.fileLocalPath 附件路径
* @apiParam {String} attachments.fileName 附件名
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 课堂作业ID
*
*/



/**
* @api {get} /lessonAssignment/get 课堂作业获取
* @apiDescription 课堂作业获取
* @apiName LessonAssignmentGet
* @apiGroup Lesson
*
* @apiParam {Number} data 课堂作业ID
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 课堂作业ID
* @apiSuccess {Number} [entity.lessonId] 课时ID
* @apiSuccess {String} [entity.assignmentsName] 作业标题
* @apiSuccess {Object[]} [entity.attachments] 附件列表
* @apiSuccess {Number} entity.attachments.id 附件ID
* @apiSuccess {String} entity.attachments.fileName 附件名称
* @apiSuccess {String} entity.attachments.fileUrl 附件访问路径
* @apiSuccess {String} entity.attachments.fileLocalPath 附件存储路径
* @apiSuccess {String} entity.attachments.fileSize 附件大小，单位byte
* @apiSuccess {String} entity.attachments.fileType 附件类型
* @apiSuccess {Number} entity.attachments.sort 排序编号
*
*/