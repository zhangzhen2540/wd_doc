

/**
* @api {post} /lessonAssignment/add 课堂作业添加
* @apiDescription 课堂作业添加
* @apiName LessonAssignmentAdd
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
* @apiParam {String} assignmentName 题目
* @apiParam {Object} [attachments] 附件
* @apiParam {String} attachments.fileLocalPath 附件路径
* @apiParam {String} attachments.fileName 附件名
*
* @apiParamExample Param-Example:
{
	"lessonId": "2",
	"assignmentName": "一战影响",
	"attachments": [
		{
			"fileName": "readme.doc",
			"fileLocalPath": "2d7f6451c7a04a9a8e970216694edd00.doc"
		}	
	]
}
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 课堂作业ID
*
*/

/**
* @api {post} /lessonAssignment/update 课堂作业修改
* @apiDescription 课堂作业修改
* @apiName LessonAssignmentEdit
* @apiGroup Lesson
*
* @apiParam {Number} id 作业ID
* @apiParam {Number} lessonId 课时ID
* @apiParam {String} assignmentName 题目
* @apiParam {Object} [attachments] 附件
* @apiParam {String} attachments.fileLocalPath 附件路径
* @apiParam {String} attachments.fileName 附件名
* 
* @apiParamExample Param-Example:
{
	"id": 2,
	"lessonId": "2",
	"assignmentName": "一战发起国",
	"attachments": [
		{
			"fileName": "haha哈哈ha.doc",
			"fileLocalPath": "b82986854a5a4d72ad5893e9ab012e38.doc"
		}	
	]
}
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number} [entity] 课堂作业ID
*
*/

/**
* @api {post} /lessonAssignment/deletes 课堂作业删除
* @apiDescription 课堂作业删除
* @apiName LessonAssignmentDelete
* @apiGroup Lesson
*
* @apiParam {Number[]} data 课堂作业ID列表
* @apiParamExample Param-Example:
* [1, 2, 3]
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number[]} [entity] 删除课堂作业ID
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
* @apiSuccess {String} [entity.assignmentName] 作业标题
* @apiSuccess {Object[]} [entity.attachments] 附件列表
* @apiSuccess {Number} entity.attachments.id 附件ID
* @apiSuccess {String} entity.attachments.fileName 附件名称
* @apiSuccess {String} entity.attachments.fileUrl 附件访问路径
* @apiSuccess {String} entity.attachments.fileLocalPath 附件存储路径
* @apiSuccess {Number} entity.attachments.fileSize 附件大小，单位byte
* @apiSuccess {String} entity.attachments.fileType 附件类型
* @apiSuccess {Number} entity.attachments.sort 排序编号
*
* @apiSuccessExample Success-Example:
{
    "code": 200,
    "entity": {
        "assignmentName": "一战影响",
        "attachments": [
            {
                "createTime": 1535044930000,
                "exerciseId": 2,
                "exerciseType": 2,
                "fileLocalPath": "\\word\\2d7f6451c7a04a9a8e970216694edd00_1535016128693_G95M.doc",
                "fileName": "readme.doc",
                "fileSize": 61952,
                "fileType": "word",
                "fileUrl": "/word/2d7f6451c7a04a9a8e970216694edd00_1535016128693_G95M.doc",
                "id": 17,
                "sort": 1
            }
        ],
        "createTime": 1535044930000,
        "createUserId": 1,
        "id": 2,
        "lessonId": 2,
        "sort": 2,
        "status": 1,
        "updateTime": 1535044930000,
        "updateUserId": 1
    },
    "message": "\"SUCCESS\""
}
*/



/**
* @api {get} /lessonAssignment/pageList 课堂作业分页
* @apiDescription 课堂作业分页
* @apiName LessonAssignmentPageList
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
* @apiParam {Number=0,1} [status] 状态
* @apiParam {Number} pageIndex 页码
* @apiParam {Number} pageSize 页最大结果数量
*
* @apiParamExample Param-Example:
*   lessonId=2&pageIndex=2&pageSize=2
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 响应结果
* @apiSuccess {Number} entity.pageIndex 页码
* @apiSuccess {Number} entity.pageSize 页最大结果数量
* @apiSuccess {Number} entity.total 总结果数量
* @apiSuccess {Object[]} entity.list 作业列表
* @apiSuccess {Number} [entity.list.lessonId] 课时ID
* @apiSuccess {String} [entity.list.assignmentName] 作业标题
*
* @apiSuccessExample Success-Example:
{
    "code": 200,
    "entity": {
        "list": [
            {
                "assignmentName": "一战影响",
                "createTime": 1535044973000,
                "createUserId": 1,
                "id": 3,
                "lessonId": 2,
                "sort": 3,
                "status": 1,
                "updateTime": 1535044973000,
                "updateUserId": 1
            }
        ],
        "pageIndex": 0,
        "pageSize": 0,
        "total": 3
    },
    "message": "\"SUCCESS\""
}
*/


/**
* @api {get} /lessonAssignment/list 课堂作业列表
* @apiDescription 课堂作业列表
* @apiName LessonAssignmentList
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
* @apiParam {Number=0,1} [status] 状态
*
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object[]} [entity] 响应结果
* @apiSuccess {Number} [entity.lessonId] 课时ID
* @apiSuccess {String} [entity.assignmentName] 作业标题
*
* @apiSuccessExample Success-Example:
{
    "code": 200,
    "entity": [
        {
            "assignmentName": "一战影响",
            "createTime": 1535044973000,
            "createUserId": 1,
            "id": 3,
            "lessonId": 2,
            "sort": 3,
            "status": 1,
            "updateTime": 1535044973000,
            "updateUserId": 1
        }
    ],
    "message": "\"SUCCESS\""
}
*/