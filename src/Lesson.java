/**
* @api {post} /lesson/add PrepareLesson
* @apiDescription 备课
* @apiName prepareLesson
* @apiGroup Lesson
*
* @apiParam {String} lessonName 课时名称
* @apiParam {String} [lessonDesc] 课时描述
* @apiParam {Number} [courseId] 课程ID（创建已存在的课程的课时时必填）
* @apiParam {String} [courseName] 课程名称，新建课程时必填
* @apiParam {String} [courseTitle] 课程标题，新建课程选填
* @apiParam {String} [courseDesc] 课程描述，新建课程选填
*
* @apiParamExample {json} Request-Example: 
* { "lessonName": "21天精通Java", "lessonDesc": "Java基础学习", "courseId": 1}	
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 新建课时ID
*
*/

/**
* @api {post} /lesson/edit LessonEdit
* @apiDescription 课时编辑
* @apiName lessonEdit
* @apiGroup Lesson
*
* @apiParam {Number} id 课时ID
* @apiParam {String} lessonName 课时名称
* @apiParam {String} [lessonDesc] 课时描述
* @apiParam {Number} courseId 课程ID
*
* @apiParamExample {json} Request-Example: 
* {"id": 1, "lessonName": "21天精通Java", "lessonDesc": "Java基础学习", "courseId": 1}	
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 课时ID
*
*/

/**
* @api {post} /lesson/deletes LessonDelete
* @apiDescription 课时删除
* @apiName lessonDelete
* @apiGroup Lesson
*
* @apiParam {Number[]} lessonId 删除课时ID列表
*
* @apiParamExample {json} Request-Example: 
* [1, 2, 3]	
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number[]} [entity] 删除课时ID列表
*
*/





/**
* @api {post} /lessonMaterial/add LessonMaterialAdd
* @apiDescription 课时资料添加
* @apiName lessonMaterialAdd
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
* @apiParam {String} materialName 资料名
* @apiParam {Number=1,2} fromWhere 资料来源，1：上传，2：资料库
* @apiParam {Number} [materialBankId] 资料库资料ID(资料来源自资料库时必填)
* @apiParam {String} localPath 资料路径（上传资料时必填）
* @apiParam {Number=0, 1}  [isShare] 是否共享，1：共享，0：不共享
* @apiParam {String} [materialDesc] 资料描述
*
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 课时资料ID
*
*/


/**
* @api {post} /lessonMaterial/copy/edit LessonMaterialCopy
* @apiDescription 复制课件资料到指定课时下
* @apiName LessonMaterialCopy
* @apiGroup Lesson
*
* @apiParam {Number} targetLessonId 课时ID
* @apiParam {Number} lessonMaterialId 拷贝课件资料ID
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 新建课时资料ID
*
*/




/**
* @api {post} /lessonMaterial/deletes LessonMaterialDelete
* @apiDescription 课时资料删除
* @apiName lessonMaterialDelete
* @apiGroup Lesson
*
* @apiParam {Number[]} lessonMaterialId 删除课时资料ID列表
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number[]} [entity] 删除课时资料ID列表
*
*/






/**
* @api {post} /lessonAssignment/add LessonAssignmentAdd
* @apiDescription 课堂作业添加
* @apiName LessonAssignmentAdd
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
* @apiParam {String} assignmentsName 题目
* @apiParam {String[]} [attachmentPath] 资料路径
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
* @apiParam {String[]} [attachmentPath] 资料路径
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 课堂作业ID
*
*/



/**
* @api {get} /lesson/teachingRecord LessonTeachingRecord
* @apiDescription 查询课时正在上课的记录
* @apiName LessonTeachingRecord
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 上课记录
* @apiSuccess {Number} entity.lessonId 课时ID 
* @apiSuccess {String} entity.lessonName 课时名称 
* @apiSuccess {Boolean} entity.isTeaching 是否上课中 
* @apiSuccess {Number} entity.teachTeacherId 上课教师ID 
* @apiSuccess {String} entity.teachTeacherName 上课教师姓名 
* @apiSuccess {String} entity.startTime 上课开始时间 
* @apiSuccess {String} [entity.endTime] 上课结束时间 
*
*/

