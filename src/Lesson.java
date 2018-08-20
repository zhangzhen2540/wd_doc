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
* @api {post} /classDiscuss/add ClassDiscussAdd
* @apiDescription 课时讨论添加
* @apiName ClassDiscussAdd
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
* @apiParam {String} discussContent 讨论内容
* @apiParam {String[]} [attachmentPath] 资料路径
* @apiParam {String} [answer] 答案
* @apiParam {String} [analysis] 解析
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 课时讨论ID
*
*/

/**
* @api {post} /classDiscuss/modify ClassDiscussModify
* @apiDescription 课时讨论修改
* @apiName ClassDiscussModify
* @apiGroup Lesson
*
* @apiParam {Number} id 课堂讨论ID
* @apiParam {Number} lessonId 课时ID
* @apiParam {String} discussContent 讨论内容
* @apiParam {String[]} [attachmentPath] 资料路径
* @apiParam {String} [answer] 答案
* @apiParam {String} [analysis] 解析
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 课时讨论ID
*
*/


/**
* @api {post} /classDiscuss/deletes ClassDiscussDelete
* @apiDescription 课时讨论删除
* @apiName ClassDiscussDelete
* @apiGroup Lesson
*
* @apiParam {Number[]} classDiscussId 课堂讨论ID，删除的讨论必须是属于同一课时的
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number[]} [entity] 删除课堂讨论ID
*
*/


/**
* @api {get} /classDiscuss/get ClassDiscussGet
* @apiDescription 课堂讨论获取
* @apiName ClassDiscussGet
* @apiGroup Lesson
*
* @apiParam {Number} id 课堂讨论ID
* 
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 课堂讨论
* @apiSuccess {Number} entity.id 讨论ID
* @apiSuccess {Number} entity.lessonId 所属课时
* @apiSuccess {String} entity.discussContent 讨论内容
* @apiSuccess {String} [entity.answer] 参考答案
* @apiSuccess {String} [entity.analysis] 参考解析
* @apiSuccess {Number=0,1} entity.status 状态，1：启用，0：禁用
* @apiSuccess {Number} entity.sort 排序编号
* @apiSuccess {String} entity.discussUrl 附件文件路径
* @apiSuccess {String} entity.fileType 附件文件类型
* @apiSuccess {Number} entity.fileSize 附件文件大小，单位byte
*
*/

/**
* @api {get} /classDiscuss/list ClassDiscussList
* @apiDescription 课堂讨论列表
* @apiName ClassDiscussList
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
* 
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object[]} [entity] 课堂讨论列表，按sort排序（具体字段参考ClassDiscussGet API）
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

