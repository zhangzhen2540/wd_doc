
/**
* @api {get} /classDiscuss/get 课堂讨论获取
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

/**
* @api {get} /classDiscuss/list 课堂讨论列表
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
* @api {post} /classDiscuss/deletes 课堂讨论删除
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
* @api {post} /classDiscuss/modify 课堂讨论修改
* @apiDescription 课时讨论修改
* @apiName ClassDiscussModify
* @apiGroup Lesson
*
* @apiParam {Number} id 课堂讨论ID
* @apiParam {Number} lessonId 课时ID
* @apiParam {String} discussContent 讨论内容
* @apiParam {String} [answer] 答案
* @apiParam {String} [analysis] 解析
* @apiParam {Object} [attachments] 附件
* @apiParam {String} attachments.fileLocalPath 附件路径
* @apiParam {String} attachments.fileName 附件名
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 课堂讨论ID
*
*/

/**
* @api {post} /classDiscuss/add 课堂讨论添加
* @apiDescription 课时讨论添加
* @apiName ClassDiscussAdd
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
* @apiParam {String} discussContent 讨论内容
* @apiParam {String} [answer] 答案
* @apiParam {String} [analysis] 解析
* @apiParam {Object} [attachments] 附件
* @apiParam {String} attachments.fileLocalPath 附件路径
* @apiParam {String} attachments.fileName 附件名
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 课堂讨论ID
*
*/

