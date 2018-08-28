
/**
* @api {post} /documentQuestion/add 附件题添加
* @apiDescription 附件题添加
* @apiName DocumentQuestionAdd
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时
* @apiParam {String} [title] 题目内容 
* @apiParam {Object[]} attachments 附件列表
* @apiParam {String} attachments.fileName 附件文件名 
* @apiParam {String} attachments.fileLocalPath 附件文件路径 
*
* @apiParamExample Param-Example:
{
	"lessonId": 2,
	"attachments": [
		{
	        "fileName": "test-file.txt",
	        "fileLocalPath": "877b33030f0248beb9c35fa59dad4a8d.txt"
		}
	]
}
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 新增题ID
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": "1"
}
*/


/**
* @api {post} /documentQuestion/deletes 附件题删除
* @apiDescription 附件题删除
* @apiName DocumentQuestionDeletes
* @apiGroup Lesson
*
* @apiParam {Number[]} id 题目ID列表 
*
* @apiParamExample Param-Example:
[1, 2, 3]
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 删除题目ID列表
*
* @apiSuccessExample Succcess-Example:
[1, 2, 3]
*/


/**
* @api {get} /documentQuestion/list 附件题列表
* @apiDescription 附件题列表
* @apiName DocumentQuestionList
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID 
*
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object[]} [entity] 题目列表
* @apiSuccess {Number} entity.id 题目ID
* @apiSuccess {String} [entity.title] 题目标题
* @apiSuccess {Number} entity.lessonId 课时ID
* @apiSuccess {Number} entity.sort 排序
* @apiSuccess {Number} entity.createTime 创建时间时间戳
* @apiSuccess {Object[]} entity.attachments 附件列表 
* @apiSuccess {String} entity.attachments.fileName 文件名 
* @apiSuccess {Number} entity.attachments.fileSize 文件大小，单位byte 
* @apiSuccess {String} entity.attachments.fileType 文件类型 
* @apiSuccess {String} entity.attachments.fileUrl 访问路径 
* @apiSuccess {Number} entity.attachments.sort 附件排序 
*
* @apiSuccessExample Succcess-Example:
{
    "code": 200,
    "entity": [
        {
            "attachments": [
                {
                    "createTime": 1535482993000,
                    "exerciseId": 1,
                    "exerciseType": 3,
                    "fileLocalPath": "\\other\\877b33030f0248beb9c35fa59dad4a8d_1535454193581_Wehe.txt",
                    "fileName": "test-file.txt",
                    "fileSize": 59904,
                    "fileType": "other",
                    "fileUrl": "/other/877b33030f0248beb9c35fa59dad4a8d_1535454193581_Wehe.txt",
                    "id": 12,
                    "sort": 1
                }
            ],
            "createTime": 1535482993000,
            "createUserId": 2,
            "id": 1,
            "lessonId": 2,
            "sort": 1,
            "updateTime": 1535482993000,
            "updateUserId": 2
        }
    ],
    "message": "\"SUCCESS\""
}
*/